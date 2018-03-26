package(default_visibility=["//visibility:public"])
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
    name = "protoc-gen-ts",
    data = [
        "@//:node_modules",
        "@//src",
    ],
    entry_point = "ts_protoc_gen/src/ts_index",
    args = ["--node_options=--expose-gc"],
)

nodejs_binary(
    name = "protoc-gen-js_service",
    data = [
        "@//:node_modules",
        "@//src",
    ],
    entry_point = "ts_protoc_gen/src/js_service_index",
    args = ["--node_options=--expose-gc"],
)
