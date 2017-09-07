package(default_visibility=["//visibility:public"])
load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")

ts_library(
    name = "src",
    srcs = glob([
        "*.ts",
        "js/*.ts",
        "ts/*.ts",
    ]),
    deps = [],
    tsconfig = "//:tsconfig.json",
)
