load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

TypescriptProtoLibraryAspect = provider(
    fields = {
        "dts_outputs": "Ths TS definition files produced directly from the src protos",
        "deps_dts": "The transitive dependencies' TS definitions",
    },
)

JavascriptProtoLibraryAspect = provider(
    fields = {
        "js_outputs": "The JS output files produced directly from the src protos",
        "deps_js": "The transitive JS dependencies",
    },
)

def proto_path(proto):
    """
    The proto path is not really a file path
    It's the path to the proto that was seen when the descriptor file was generated.
    """
    path = proto.path
    root = proto.root.path
    ws = proto.owner.workspace_root
    if path.startswith(root):
        path = path[len(root):]
    if path.startswith("/"):
        path = path[1:]
    if path.startswith(ws):
        path = path[len(ws):]
    if path.startswith("/"):
        path = path[1:]
    return path

def _convert_js_files_to_amd_modules(ctx, js_outputs):
    """
    Converts the output js into an AMD module, similar to how it is done in rules_typecript:
      https://github.com/bazelbuild/rules_typescript/blob/master/internal/protobufjs/typescript_proto_library_aspectrary.bzl#L47

    NOTE: This only works on Linux. This should be factored out into a binary that can be
    called as a part of this rule or as its own rule.
    """
    amd_module_conversions = []
    for js_file in js_outputs:
        file_path = "/".join([p for p in [
            ctx.workspace_name,
            ctx.label.package,
        ] if p])
        file_name = js_file.basename[:-len(js_file.extension) - 1]
        define_code = 'define("%s/%s", function(require, exports, module) {' % (file_path, file_name)
        cmd = "sed -i '1s;^;%s;' %s" % (define_code, js_file.path)
        cmd += " && echo '});' >> %s" % (js_file.path)
        cmd += " && sed -i -E 's/(\.\.\/)+/%s\//' %s" % (ctx.workspace_name, js_file.path)
        cmd += " && sed -i -E 's/(require\(.*).js/\\1/' %s" % (js_file.path)
        amd_module_conversions.append(cmd)

        return amd_module_conversions

def common_proto_library_impl_(target, ctx, generated_file_endings, custom_flags, progress_message, file_modifications):
    """
    A bazel aspect that is applied on every proto_library rule on the transitive set of dependencies
    of a typescript_proto_library rule.

    Handles running protoc to produce the generated JS and TS files.
    """
    outputs = []
    proto_inputs = []

    inputs = depset([ctx.file._protoc])
    for src in target.proto.direct_sources:
        if src.extension != "proto":
            fail("Input must be a proto file")

        file_name = src.basename[:-len(src.extension) - 1]
        normalized_file = proto_path(src)
        proto_inputs.append(normalized_file)
        for f in generated_file_endings:
            output = ctx.actions.declare_file(file_name + f)
            outputs.append(output)

    inputs += ctx.files._ts_protoc_gen
    inputs += target.proto.direct_sources
    inputs += target.proto.transitive_descriptor_sets

    descriptor_sets_paths = [desc.path for desc in target.proto.transitive_descriptor_sets]

    protoc_command = "%s" % (ctx.file._protoc.path)
    default_flags = [
        " --plugin=protoc-gen-ts=%s" % (ctx.files._ts_protoc_gen[1].path),
        " --ts_out=service=true:%s" % (ctx.var["BINDIR"]),
        " --descriptor_set_in=%s" % (":".join(descriptor_sets_paths)),
    ]

    protoc_flags = " ".join(default_flags + custom_flags)
    protoc_arguments = " ".join(proto_inputs)
    protoc_command += " %s %s" % (protoc_flags, protoc_arguments)

    # For now, this will provide modifications in the form of commands that will be appended onto
    # the main command. In the future, this should be separated out to use a tool and have its own
    # rule that has inputs and outputs too.
    file_modification_commands = []
    for modify_file in file_modifications:
        file_modification_commands += modify_file(ctx, outputs)

    commands = [protoc_command] + file_modification_commands
    command = " && ".join(commands)

    ctx.actions.run_shell(
        inputs = inputs,
        outputs = outputs,
        progress_message = progress_message,
        command = command
    )

    outputs = depset(outputs)
    deps = depset([])

    return outputs, deps

def typescript_proto_library_aspect_(target, ctx):
    outputs, deps = common_proto_library_impl_(
        target,
        ctx,
        ["_pb.d.ts", "_pb_service.d.ts"],
        [],
        "Creating Typescript pb files %s" % ctx.label,
        []
    )

    for dep in ctx.rule.attr.deps:
        aspect_data = dep[TypescriptProtoLibraryAspect]
        deps += aspect_data.dts_outputs + aspect_data.deps_dts

    return [TypescriptProtoLibraryAspect(
        dts_outputs = outputs,
        deps_dts = deps,
    )]

def javascript_proto_library_aspect_(target, ctx):
    outputs, deps = common_proto_library_impl_(
        target,
        ctx,
        ["_pb.js", "_pb_service.js"],
        [" --js_out=import_style=commonjs,binary:%s" % (ctx.var["BINDIR"])],
        "Creating Javascript pb files %s" % ctx.label,
        [_convert_js_files_to_amd_modules]
    )

    for dep in ctx.rule.attr.deps:
        aspect_data = dep[JavascriptProtoLibraryAspect]
        deps += aspect_data.js_outputs + aspect_data.deps_js

    return [JavascriptProtoLibraryAspect(
        js_outputs = outputs,
        deps_js = deps,
    )]

typescript_proto_library_aspect = aspect(
    implementation = typescript_proto_library_aspect_,
    attr_aspects = ["deps"],
    attrs = {
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen//bin:protoc-gen-ts"),
        ),
        "_protoc": attr.label(
            allow_files = True,
            single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
    },
)

javascript_proto_library_aspect = aspect(
    implementation = javascript_proto_library_aspect_,
    attr_aspects = ["deps"],
    attrs = {
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen//bin:protoc-gen-ts"),
        ),
        "_protoc": attr.label(
            allow_files = True,
            single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
    },
)

def _typescript_proto_library_impl(ctx):
    """
    Handles converting the aspect output into a provider compatible with the rules_typescript rules.
    """
    aspect_data = ctx.attr.proto[TypescriptProtoLibraryAspect]
    outputs = aspect_data.dts_outputs

    return struct(
        typescript = struct(
            declarations = outputs,
            transitive_declarations = outputs + aspect_data.deps_dts,
            type_blacklisted_declarations = depset([]),
            es5_sources = depset([]),
            es6_sources = depset([]),
            transitive_es5_sources = depset([]),
            transitive_es6_sources = depset([]),
        ),
        legacy_info = struct(
            files = outputs,
        ),
        providers = [
            DefaultInfo(files = outputs),
        ],
    )

typescript_proto_library = rule(
    attrs = {
        "proto": attr.label(
            mandatory = True,
            allow_files = True,
            single_file = True,
            providers = ["proto"],
            aspects = [typescript_proto_library_aspect],
        ),
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen//bin:protoc-gen-ts"),
        ),
        "_protoc": attr.label(
            allow_files = True,
            single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
    },
    implementation = _typescript_proto_library_impl,
)

def _javascript_proto_library_impl(ctx):
    """
    Handles converting the aspect output into a provider compatible with the rules_typescript rules.
    """
    aspect_data = ctx.attr.proto[JavascriptProtoLibraryAspect]
    outputs = aspect_data.js_outputs

    return struct(
        typescript = struct(
            declarations = outputs,
            transitive_declarations = outputs + aspect_data.deps_js,
            type_blacklisted_declarations = depset([]),
            es5_sources = outputs + aspect_data.deps_js,
            es6_sources = outputs + aspect_data.deps_js,
            transitive_es5_sources = outputs + aspect_data.deps_js,
            transitive_es6_sources = outputs + aspect_data.deps_js,
        ),
        legacy_info = struct(
            files = outputs,
        ),
        providers = [
            DefaultInfo(files = outputs),
        ],
    )

javascript_proto_library = rule(
    attrs = {
        "proto": attr.label(
            mandatory = True,
            allow_files = True,
            single_file = True,
            providers = ["proto"],
            aspects = [javascript_proto_library_aspect],
        ),
        "_ts_protoc_gen": attr.label(
            allow_files = True,
            executable = True,
            cfg = "host",
            default = Label("@ts_protoc_gen//bin:protoc-gen-ts"),
        ),
        "_protoc": attr.label(
            allow_files = True,
            single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
    },
    implementation = _javascript_proto_library_impl,
)

def typescript_proto_dependencies():
    """
    Installs ts-proto-gen dependencies.

    Usage:

    # WORKSPACE
    load("@ts_protoc_gen//:defs.bzl", "typescript_proto_dependencies")
    typescript_proto_dependencies()
    """

    if "net_zlib" not in native.existing_rules():
        http_archive(
            name = "net_zlib",
            build_file = "@com_google_protobuf//:third_party/zlib.BUILD",
            sha256 = "c3e5e9fdd5004dcb542feda5ee4f0ff0744628baf8ed2dd5d66f8ca1197cb1a1",
            strip_prefix = "zlib-1.2.11",
            urls = ["https://zlib.net/zlib-1.2.11.tar.gz"],
        )

    if "zlib" not in native.existing_rules():
        # Loading zlib could be replaced with protobuf/protobuf_deps.bzl, but it's not in the most recent release
        native.bind(
            name = "zlib",
            actual = "@net_zlib//:zlib",
        )

    if "com_google_protobuf" not in native.existing_rules():
        http_archive(
            name = "com_google_protobuf",
            sha256 = "f976a4cd3f1699b6d20c1e944ca1de6754777918320c719742e1674fcf247b7e",
            strip_prefix = "protobuf-3.7.1",
            urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.7.1.zip"],
        )

    yarn_install(
        name = "ts_protoc_gen_deps",
        package_json = "@ts_protoc_gen//:package.json",
        yarn_lock = "@ts_protoc_gen//:yarn.lock",
    )
