package(default_visibility=["//visibility:public"])
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
    name = "protoc-gen-ts",
    node_modules = "@deps//:node_modules",
    data = [
      "//src:src",
    ],
    entry_point = "ts_protoc_gen/src/index",
    args = ["--node_options=--expose-gc"],
)
