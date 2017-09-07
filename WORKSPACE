http_archive(
    name = "build_bazel_rules_nodejs",
    url = "https://github.com/bazelbuild/rules_nodejs/archive/defc6449af919b7388e64467df27ceba95b4a33b.zip",
    sha256 = "bbfc7372d92e23e36eabc2530ccfadb2534ec4e35bf51c20894c909895c2f6bb",
    strip_prefix = "rules_nodejs-defc6449af919b7388e64467df27ceba95b4a33b",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(package_json = ["//:package.json"])

local_repository(
    name = "build_bazel_rules_typescript",
    path = "node_modules/@bazel/typescript",
)
