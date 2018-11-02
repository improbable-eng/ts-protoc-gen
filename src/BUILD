package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")

ts_library(
    name = "src",
    srcs = glob([
        "*.ts",
        "service/*.ts",
        "ts/*.ts",
    ]),
    node_modules = "@ts_protoc_gen_deps//:node_modules",
    tsconfig = "//:tsconfig.json",
)
