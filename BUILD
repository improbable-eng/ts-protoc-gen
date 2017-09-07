package(default_visibility = ["//visibility:public"])
exports_files(["tsconfig.json"])

# NOTE: this will move to node_modules/BUILD in a later release
filegroup(
    name = "node_modules",
    srcs = glob([
        "node_modules/**/*.js",
        "node_modules/**/*.d.ts",
        "node_modules/**/*.json",
    ])
)
