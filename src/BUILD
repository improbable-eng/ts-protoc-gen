package(default_visibility=["//visibility:public"])
load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")

ts_library(
    name = "src",
    node_modules = "@deps//:node_modules",
    srcs = glob([
        "*.ts",
        "service/*.ts",
        "ts/*.ts",
        "flow/*.ts",
    ]),
    deps = [],
    tsconfig = "//:tsconfig.json",
)
