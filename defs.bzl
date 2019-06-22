load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

TypescriptProtoLibraryAspect = provider(
    fields = {
        "es5_outputs": "The ES5 JS files produced directly from the src protos",
        "es6_outputs": "The ES6 JS files produced directly from the src protos",
        "dts_outputs": "Ths TS definition files produced directly from the src protos",
        "deps_es5": "The transitive ES5 JS dependencies",
        "deps_es6": "The transitive ES6 JS dependencies",
        "deps_dts": "The transitive dependencies' TS definitions",
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

def append_to_outputs(ctx, file_name, js_outputs, dts_outputs):
    generated_filenames = ["_pb.d.ts", "_pb.js", "_pb_service.js", "_pb_service.d.ts"]

    for f in generated_filenames:
        output = ctx.actions.declare_file(file_name + f)
        if f.endswith(".d.ts"):
            dts_outputs.append(output)
        else:
            js_outputs.append(output)

def _change_js_file_import_style(ctx, js_protoc_outputs, style):
    """
    Calls the convert_to_amd tool to convert the generated JS code into AMD modules.
    """

    js_outputs = []
    for js_file in js_protoc_outputs:
        file_path = "/".join([p for p in [
            ctx.workspace_name,
            ctx.label.package,
        ] if p])
        file_name = js_file.basename[:-len(js_file.extension) - 1]

        ext = "amd"
        if style == "commonjs":
            ext = "closure"

        output = ctx.actions.declare_file("{}.{}.{}".format(file_name, ext, js_file.extension))
        js_outputs.append(output)
        ctx.actions.run(
            inputs = [js_file],
            outputs = [output],
            arguments = [
                "--workspace_name",
                ctx.workspace_name,
                "--input_base_path",
                file_path,
                "--output_module_name",
                file_name,
                "--input_file_path",
                js_file.path,
                "--output_file_path",
                output.path,
                "--style",
                style,
            ],
            progress_message = "Creating an {} module for {}".format(style, ctx.label),
            executable = ctx.executable._change_import_style,
        )

    return js_outputs

def typescript_proto_library_aspect_(target, ctx):
    """
    A bazel aspect that is applied on every proto_library rule on the transitive set of dependencies
    of a typescript_proto_library rule.

    Handles running protoc to produce the generated JS and TS files.
    """
    js_protoc_outputs = []
    dts_outputs = []
    proto_inputs = []

    inputs = [ctx.file._protoc]
    for src in target.proto.direct_sources:
        if src.extension != "proto":
            fail("Input must be a proto file")

        file_name = src.basename[:-len(src.extension) - 1]
        normalized_file = proto_path(src)
        proto_inputs.append(normalized_file)
        append_to_outputs(ctx, file_name, js_protoc_outputs, dts_outputs)

    outputs = dts_outputs + js_protoc_outputs

    inputs += target.proto.direct_sources
    inputs += target.proto.transitive_descriptor_sets.to_list()

    descriptor_sets_paths = [desc.path for desc in target.proto.transitive_descriptor_sets.to_list()]

    protoc_output_dir = ctx.var["BINDIR"]
    protoc_command = "%s" % (ctx.file._protoc.path)

    protoc_command += " --plugin=protoc-gen-ts=%s" % (ctx.files._ts_protoc_gen[1].path)
    protoc_command += " --ts_out=service=true:%s" % (protoc_output_dir)
    protoc_command += " --js_out=import_style=commonjs,binary:%s" % (protoc_output_dir)
    protoc_command += " --descriptor_set_in=%s" % (":".join(descriptor_sets_paths))
    protoc_command += " %s" % (" ".join(proto_inputs))
    ctx.actions.run_shell(
        inputs = depset(inputs),
        outputs = outputs,
        progress_message = "Creating Typescript pb files %s" % ctx.label,
        command = protoc_command,
        tools = depset(ctx.files._ts_protoc_gen),
    )

    dts_outputs = depset(dts_outputs)
    es5_outputs = depset(_change_js_file_import_style(ctx, js_protoc_outputs, style = "amd"))
    es6_outputs = depset(_change_js_file_import_style(ctx, js_protoc_outputs, style = "commonjs"))
    deps_dts = []
    deps_es5 = []
    deps_es6 = []

    for dep in ctx.rule.attr.deps:
        aspect_data = dep[TypescriptProtoLibraryAspect]
        deps_dts.append(aspect_data.dts_outputs)
        deps_dts.append(aspect_data.deps_dts)
        deps_es5.append(aspect_data.es5_outputs)
        deps_es5.append(aspect_data.deps_es5)
        deps_es6.append(aspect_data.es6_outputs)
        deps_es6.append(aspect_data.deps_es6)

    return [TypescriptProtoLibraryAspect(
        dts_outputs = dts_outputs,
        es5_outputs = es5_outputs,
        es6_outputs = es6_outputs,
        deps_dts = depset(transitive = deps_dts),
        deps_es5 = depset(transitive = deps_es5),
        deps_es6 = depset(transitive = deps_es6),
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
            allow_single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
        "_change_import_style": attr.label(
            executable = True,
            cfg = "host",
            allow_files = True,
            default = Label("//src/bazel:change_import_style"),
        ),
    },
)

def _typescript_proto_library_impl(ctx):
    """
    Handles converting the aspect output into a provider compatible with the rules_typescript rules.
    """
    aspect_data = ctx.attr.proto[TypescriptProtoLibraryAspect]
    dts_outputs = aspect_data.dts_outputs
    es5_outputs = aspect_data.es5_outputs
    es6_outputs = aspect_data.es6_outputs
    outputs = depset(transitive = [es5_outputs, es6_outputs, dts_outputs])

    es5_srcs = depset(transitive = [es5_outputs, aspect_data.deps_es5])
    es6_srcs = depset(transitive = [es6_outputs, aspect_data.deps_es6])
    return struct(
        typescript = struct(
            declarations = dts_outputs,
            transitive_declarations = depset(transitive = [dts_outputs, aspect_data.deps_dts]),
            type_blacklisted_declarations = depset([]),
            es5_sources = es5_srcs,
            es6_sources = es6_srcs,
            transitive_es5_sources = es5_srcs,
            transitive_es6_sources = es6_srcs,
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
            allow_single_file = True,
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
            allow_single_file = True,
            executable = True,
            cfg = "host",
            default = Label("@com_google_protobuf//:protoc"),
        ),
    },
    implementation = _typescript_proto_library_impl,
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
        # Don't use managed directories because these are internal to the library and the
        # dependencies shouldn't need to be installed by the user.
        symlink_node_modules = False,
        yarn_lock = "@ts_protoc_gen//:yarn.lock",
    )
