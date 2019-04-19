# This file should be removed when protobuf_deps.bzl is included in a release of com_google_protobuf.

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

def protobuf_deps():
    """Loads common dependencies needed to compile the protobuf library."""

    native.bind(
        name = "zlib",
        actual = "@net_zlib//:zlib",
    )

    if "net_zlib" not in native.existing_rules():
        http_archive(
            name = "net_zlib",
            build_file = "@com_google_protobuf//:third_party/zlib.BUILD",
            sha256 = "c3e5e9fdd5004dcb542feda5ee4f0ff0744628baf8ed2dd5d66f8ca1197cb1a1",
            strip_prefix = "zlib-1.2.11",
            urls = ["https://zlib.net/zlib-1.2.11.tar.gz"],
        )