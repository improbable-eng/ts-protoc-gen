load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

TypescriptProtoLibraryAspect = provider(
    fields = {
        "js_outputs": "The JS output files produced directly from the src protos",
        "dts_outputs": "Ths TS definition files produced directly from the src protos",
        "deps_js": "The transitive JS dependencies",
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

def append_to_outputs(ctx, src, js_outputs, dts_outputs, file_modifications):
    generated_filenames = ["_pb.d.ts", "_pb.js", "_pb_service.js", "_pb_service.d.ts"]

    file_name = src.basename[:-len(src.extension) - 1]
    for f in generated_filenames:
        # The output should be a sibling to the source file because
        # that is how protoc determines the output directory
        output = ctx.actions.declare_file(file_name + f, sibling = src)
        if f.endswith(".d.ts"):
            dts_outputs.append(output)
        else:
            js_outputs.append(output)

def _convert_js_files_to_amd_modules(ctx, js_protoc_outputs):
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
        amd_output = ctx.actions.declare_file(file_name + "_amd." + js_file.extension)
        js_outputs.append(amd_output)
        ctx.actions.run(
            inputs = [js_file],
            outputs = [amd_output],
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
                amd_output.path,
            ],
            progress_message = "Creating AMD module for {}".format(ctx.label),
            executable = ctx.executable._convert_to_amd,
        )

    return js_outputs

def get_output_dir(ctx, outputs):
    """
    Finds the proper root bin directory for the protoc tool.

    In the case of a local build, the bin-dir is sufficient. However,
    since the aspect runs in the context of external dependencies,
    it needs to account for this. For example, an external workspace
    with the following structure

    protos
    |- api
    |- |- service.proto
    |- |- BUILD
    |- WORKSPACE

    would have a package @protos//api/service.proto. In this case,
    the declared_output's directory would be bazel-bin/external/protos/api/
    and the package label would be api/. Since the protoc tool places
    its outputs based on the directory structure, we need to specify the
    proper external root. Using the raw bin_dir would end up placing this
    output file in bazel-bin/api, which is not what was declared.
    """

    # Default to using bin_dir
    output_dir = ctx.bin_dir.path

    if len(outputs) <= 0:
        return output_dir
    
    if not output_dir.startswith(ctx.bin_dir.path):
        fail("Invalid output directory. Output is outside of the bin directory.")

    # Remove the bin dir from the path of the output
    bin_dir_parts = ctx.bin_dir.path.split("/")
    parts = outputs[0].dirname.split("/")[len(bin_dir_parts):]

    # Add on the external workspace, in the form of "external/<workspace_name>"
    if parts[0] == "external":
        output_dir += "/" + "/".join(parts[:2])

    return output_dir

def typescript_proto_library_aspect_(target, ctx):
    """
    A bazel aspect that is applied on every proto_library rule on the transitive set of dependencies
    of a typescript_proto_library rule.

    Handles running protoc to produce the generated JS and TS files.
    """
    js_protoc_outputs = []
    dts_outputs = []
    proto_inputs = []
    file_modifications = []

    inputs = depset([ctx.file._protoc])
    for src in target.proto.direct_sources:
        if src.extension != "proto":
            fail("Input must be a proto file")

        normalized_file = proto_path(src)
        proto_inputs.append(normalized_file)
        append_to_outputs(ctx, src, js_protoc_outputs, dts_outputs, file_modifications)

    outputs = dts_outputs + js_protoc_outputs

    inputs += ctx.files._ts_protoc_gen
    inputs += target.proto.direct_sources
    inputs += target.proto.transitive_descriptor_sets

    descriptor_sets_paths = [desc.path for desc in target.proto.transitive_descriptor_sets]

    protoc_output_dir = get_output_dir(ctx, outputs)
    protoc_command = "%s" % (ctx.file._protoc.path)

    protoc_command += " --plugin=protoc-gen-ts=%s" % (ctx.files._ts_protoc_gen[1].path)
    protoc_command += " --ts_out=service=true:%s" % (protoc_output_dir)
    protoc_command += " --js_out=import_style=commonjs,binary:%s" % (protoc_output_dir)
    protoc_command += " --descriptor_set_in=%s" % (":".join(descriptor_sets_paths))
    protoc_command += " %s" % (" ".join(proto_inputs))

    commands = [protoc_command] + file_modifications
    command = " && ".join(commands)
    ctx.actions.run_shell(
        inputs = inputs,
        outputs = outputs,
        progress_message = "Creating Typescript pb files %s" % ctx.label,
        command = command,
    )

    dts_outputs = depset(dts_outputs)
    js_outputs = depset(_convert_js_files_to_amd_modules(ctx, js_protoc_outputs))
    deps_js = depset([])
    deps_dts = depset([])

    for dep in ctx.rule.attr.deps:
        aspect_data = dep[TypescriptProtoLibraryAspect]
        deps_dts += aspect_data.dts_outputs + aspect_data.deps_dts
        deps_js += aspect_data.js_outputs + aspect_data.deps_js
    
    return [TypescriptProtoLibraryAspect(
        dts_outputs = dts_outputs,
        js_outputs = js_outputs,
        deps_dts = deps_dts,
        deps_js = deps_js,
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
        "_convert_to_amd": attr.label(
            executable = True,
            cfg = "host",
            allow_files = True,
            default = Label("@ts_protoc_gen//src/bazel:convert_to_amd"),
        ),
    },
)

def _typescript_proto_library_impl(ctx):
    """
    Handles converting the aspect output into a provider compatible with the rules_typescript rules.
    """
    aspect_data = ctx.attr.proto[TypescriptProtoLibraryAspect]
    dts_outputs = aspect_data.dts_outputs
    js_outputs = aspect_data.js_outputs
    outputs = js_outputs + dts_outputs

    return struct(
        typescript = struct(
            declarations = dts_outputs,
            transitive_declarations = dts_outputs + aspect_data.deps_dts,
            type_blacklisted_declarations = depset([]),
            es5_sources = js_outputs + aspect_data.deps_js,
            es6_sources = js_outputs + aspect_data.deps_js,
            transitive_es5_sources = js_outputs + aspect_data.deps_js,
            transitive_es6_sources = js_outputs + aspect_data.deps_js,
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
