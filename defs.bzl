load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@build_bazel_rules_nodejs//:defs.bzl", "npm_install")


def declare_file(ctx, filename, file_modifications):
  f = ctx.actions.declare_file(filename)

  # Removes an import that protoc-gen-ts adds that is not needed
  for removal in ctx.attr.remove_dependencies:
    file_modifications.append("echo \"$(grep -v \"%s\" %s)\" > %s" % (removal, f.path, f.path))

  return f

def proto_path(proto):
  """
  The proto path is not really a file path
  It's the path to the proto that was seen when the descriptor file was generated.
  """
  path = proto.path
  root = proto.root.path
  ws = proto.owner.workspace_root
  if path.startswith(root): path = path[len(root):]
  if path.startswith("/"): path = path[1:]
  if path.startswith(ws): path = path[len(ws):]
  if path.startswith("/"): path = path[1:]
  return path

def append_to_outputs(ctx, file_name, outputs, file_modifications):
  generated_filenames = ["_pb.d.ts", "_pb.js", "_pb_service.js", "_pb_service.d.ts"]

  for f in generated_filenames:
    outputs.append(declare_file(ctx, file_name + f, file_modifications))

def _typescript_proto_library_impl(ctx):
  outputs = []
  proto_inputs = []
  file_modifications = []

  for src in ctx.attr.proto.proto.direct_sources:
    if src.extension != "proto":
      fail("Input must be a proto file")

    file_name = src.basename[:-len(src.extension) - 1]
    normalized_file = proto_path(src)
    proto_inputs.append(normalized_file)
    append_to_outputs(ctx, file_name, outputs, file_modifications)

  if not file_modifications:
    file_modifications.append("echo \"No services generated\"")

  inputs = depset([ctx.file._protoc])
  inputs += ctx.files._ts_protoc_gen
  inputs += ctx.attr.proto.proto.transitive_descriptor_sets

  descriptor_sets = [desc.path for desc in ctx.attr.proto.proto.transitive_descriptor_sets]

  ts_out = "service=true:"

  protoc_command = "%s --plugin=protoc-gen-ts=%s --ts_out=%s%s --js_out=import_style=commonjs,binary:%s --descriptor_set_in=%s %s" % (ctx.file._protoc.path, ctx.files._ts_protoc_gen[1].path, ts_out, ctx.var["BINDIR"], ctx.var["BINDIR"], ":".join(descriptor_sets), " ".join(proto_inputs))

  ctx.actions.run_shell(
    inputs = inputs,
    outputs = outputs,
    progress_message = "Creating Typescript pb files %s" % ctx.label,
    command = "%s && %s" % (protoc_command, " && ".join(file_modifications)),
  )

  if ctx.attr.debug:
    print("protoc command: ", protoc_command)
    print("service file modification: ", file_modifications)
    print("ctx.var['BINDIR']: ", ctx.var["BINDIR"])
    print("normalized_file: ", normalized_file)

  return DefaultInfo(
    files = depset(outputs),
  )

typescript_proto_library = rule(
  attrs = {
    "proto": attr.label(
      mandatory = True,
      allow_files = True,
      single_file = True,
      providers = ["proto"],
    ),
    "remove_dependencies": attr.string_list(
      doc = "Each string given will be grepped and removed from the generated files. This can be useful if your proto files are importing a dependency that the generated Typescript does not use.",
      default = [],
      allow_empty = True,
    ),
    "debug": attr.bool(
      doc="Set for additional logging",
      mandatory = False,
      default = False,
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
  """To be run in user's WORKSPACE to install ts-protoc-gen dependencies.
"""

  npm_install(
    name = "deps",
    package_json = "@ts_protoc_gen//:package.json",
    package_lock_json = "@ts_protoc_gen//:package-lock.json",
  )
