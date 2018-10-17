package(default_visibility=["//visibility:public"])
load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")

ts_library(
    name = "src",
    srcs = glob([
        "*.ts",
        "service/*.ts",
        "ts/*.ts",
    ]),
    deps = [
        "@npm//@types/node",
        "@npm//@types/google-protobuf",
    ],
)
