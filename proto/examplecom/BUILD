load("@ts_protoc_gen//:defs.bzl", "typescript_proto_library")
package(default_visibility = ["//visibility:public"])

filegroup(
  name = "proto_files",
  srcs = glob(["*.proto"]),
)

proto_library(
  name = "proto",
  srcs = [
    ":proto_files",
  ],
  deps = [
    "//proto/othercom:proto",
    "@com_google_protobuf//:compiler_plugin_proto",
    "@com_google_protobuf//:any_proto",
    "@com_google_protobuf//:api_proto",
    "@com_google_protobuf//:descriptor_proto",
    "@com_google_protobuf//:duration_proto",
    "@com_google_protobuf//:empty_proto",
    "@com_google_protobuf//:field_mask_proto",
    "@com_google_protobuf//:source_context_proto",
    "@com_google_protobuf//:struct_proto",
    "@com_google_protobuf//:timestamp_proto",
    "@com_google_protobuf//:type_proto",
    "@com_google_protobuf//:wrappers_proto",
  ],
)

typescript_proto_library(
  name = "generate",
  proto = ":proto",
)
