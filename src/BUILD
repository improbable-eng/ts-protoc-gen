package(default_visibility=["@//bin:__pkg__"])
load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")

ts_library(
    name = "src",
    srcs = glob([
        "*.ts",
        "ts/*.ts",
    ]),
    deps = [],
    tsconfig = "//:tsconfig.json",
)
