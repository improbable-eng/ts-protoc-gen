package(default_visibility=["//visibility:public"])
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
    name = "protoc-gen-ts",
    data = [
      "//src:src",
      "@npm//google-protobuf",
    ],
    entry_point = "ts_protoc_gen/src/index",
    args = ["--node_options=--expose-gc"],
)
