workspace(
    name = "ts_protoc_gen",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "a95b7f17b0b0e74b02f82ac14da3053d430c1abe99c6727c7abebda3bde3034b",
    strip_prefix = "rules_nodejs-0.33.1",
    urls = [
        "https://github.com/bazelbuild/rules_nodejs/archive/0.33.1.tar.gz",
    ],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@npm_bazel_karma//:browser_repositories.bzl", "browser_repositories")

browser_repositories()

load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@ts_protoc_gen//:defs.bzl", "typescript_proto_dependencies")

typescript_proto_dependencies()
