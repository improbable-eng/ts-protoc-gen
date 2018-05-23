workspace(name = "ts_protoc_gen")


# Load rules_go at master for example purposes only. You should specify
# a specific version in your project.
http_archive(
  name = "io_bazel_rules_go",
  strip_prefix = "rules_go-master",
  urls = [
    "https://github.com/bazelbuild/rules_go/archive/master.tar.gz",
    ],
  )
load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")
go_rules_dependencies()
go_register_toolchains()

# Load rules_webtesting at master for example purposes only. You should specify
# a specific version in your project.
http_archive(
  name = "io_bazel_rules_webtesting",
  strip_prefix = "rules_webtesting-master",
  urls = [
    "https://github.com/bazelbuild/rules_webtesting/archive/master.tar.gz",
    ],
  )
load("@io_bazel_rules_webtesting//web:repositories.bzl",
     "browser_repositories",
     "web_test_repositories")

web_test_repositories()


git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    tag = "0.9.1",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(package_json = ["//:package.json"])

yarn_install(
  name = "deps",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/bazelbuild/rules_typescript.git",
    tag = "0.14.0",
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()
