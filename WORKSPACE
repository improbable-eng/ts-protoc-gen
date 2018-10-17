workspace(name = "ts_protoc_gen")


git_repository(
  name = "io_bazel_rules_go",
  commit = "6bee898391a42971289a7989c0f459ab5a4a84dd",  # master as of May 10th, 2018
  remote = "https://github.com/bazelbuild/rules_go.git",
)
load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")
go_rules_dependencies()
go_register_toolchains()

git_repository(
  name = "io_bazel_rules_webtesting",
  tag = "0.2.1",
  remote = "https://github.com/bazelbuild/rules_webtesting",
)
load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")
web_test_repositories()

git_repository(
  name = "build_bazel_rules_nodejs",
  remote = "https://github.com/bazelbuild/rules_nodejs.git",
  tag = "0.15.0",
)
load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
node_repositories(preserve_symlinks = True) # hermetic version of node
npm_install(
  name = "npm",
  package_json = "@ts_protoc_gen//:package.json",
  package_lock_json = "@ts_protoc_gen//:package-lock.json",
)

git_repository(
  name = "build_bazel_rules_typescript",
  tag = "0.20.3",
  remote = "https://github.com/bazelbuild/rules_typescript",
)
load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")
rules_typescript_dependencies()

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()
