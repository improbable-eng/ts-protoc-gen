[![Master Build](https://travis-ci.org/improbable-eng/ts-protoc-gen.svg?branch=master)](https://travis-ci.org/improbable-eng/ts-protoc-gen)
[![NPM](https://img.shields.io/npm/v/ts-protoc-gen.svg)](https://www.npmjs.com/package/ts-protoc-gen)
[![NPM](https://img.shields.io/npm/dm/ts-protoc-gen.svg)](https://www.npmjs.com/package/ts-protoc-gen)
[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

# ts-protoc-gen

> Protoc Plugin for generating TypeScript Declarations

This repository contains a [protoc](https://github.com/google/protobuf) plugin that generates TypeScript declarations
(`.d.ts` files) that match the JavaScript output of `protoc --js_out=import_style=commonjs,binary`. This plugin can
also output service definitions as both `.js` and `.d.ts` files in the structure required by [grpc-web](https://github.com/improbable-eng/grpc-web).

This plugin is tested and written using TypeScript 2.7.

## Installation

### npm

As a prerequisite, download or install `protoc` (the protocol buffer compiler) for your platform from the [github releases page](https://github.com/google/protobuf/releases) or via a package manager (ie: [brew](http://brewformulas.org/Protobuf), [apt](https://www.ubuntuupdates.org/pm/protobuf-compiler)).

For the latest stable version of the ts-protoc-gen plugin:

```bash
npm install ts-protoc-gen
```

For our latest build straight from master:

```bash
npm install ts-protoc-gen@next
```

### bazel

<details><summary>Instructions for using ts-protoc-gen within a <a href="https://bazel.build">bazel</a> build environment</summary><p>

Include the following in your `WORKSPACE` - _Most of this setup is for
[rules_typescript](https://github.com/bazelbuild/rules_typescript), see their instructions for more
info:_

```python
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_typescript",
    sha256 = "e4f51c408ed3278a3a1dd227564a69f293ae2ac4ae1564b3a6d2637ae9447b47",
    strip_prefix = "rules_typescript-0.21.0",
    urls = ["https://github.com/bazelbuild/rules_typescript/archive/0.21.0.zip"],
)

http_archive(
    name = "ts_protoc_gen",
    # NOTE: Update these values to the latest version
    sha256 = "355bd8e7a3d4889a3fb222366ac3427229acc968455670378f8ffe1b4bfc5a95",
    strip_prefix = "ts-protoc-gen-14d69f6203c291f15017a8c0abbb1d4b52b00b64",
    urls = ["https://github.com/improbable-eng/ts-protoc-gen/archive/14d69f6203c291f15017a8c0abbb1d4b52b00b64.zip"],
)

load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")

rules_typescript_dependencies()

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories()

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@io_bazel_rules_go//go:def.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()

browser_repositories(
    chromium = True,
)

load("@ts_protoc_gen//:defs.bzl", "typescript_proto_dependencies")

typescript_proto_dependencies()
```

Also make sure you have the following in your `package.json`:

```json
{
  "dependencies": {
    "google-protobuf": "^3.6.1",
    "@improbable-eng/grpc-web": "0.8.0",
    "browser-headers": "^0.4.1"
  },
  "devDependencies": {
    "@bazel/karma": "^0.21.0",
    "@bazel/typescript": "^0.21.0",
    "@types/google-protobuf": "^3.2.7",
    "typescript": "^3.1.1"
  }
}
```

> Run `yarn install` to generate the `yarn.lock` file.

Finally, in your `BUILD.bazel`:

```python
load("@ts_protoc_gen//:defs.bzl", "typescript_proto_library")

proto_library(
  name = "test_proto",
  srcs = [
    "test.proto",
  ],
)

typescript_proto_library(
  name = "test_ts_proto",
  proto = ":test_proto",
)
```

You can use the `test_ts_proto` as a `dep` in other `ts_library` targets. However, you will need to
include `google-protobuf`, `@improbable-eng/grpc-web`, and `browser-headers` at runtime yourself. See
`//test/bazel:pizza_service_proto_test_suite` for an example.

</p></details>

## Contributing

Contributions are welcome! Please refer to [CONTRIBUTING.md](https://github.com/improbable-eng/ts-protoc-gen/blob/master/CONTRIBUTING.md) for more information.

## Usage

As mentioned above, this plugin for `protoc` serves two purposes:

1. Generating TypeScript Definitions for CommonJS modules generated by protoc
2. Generating gRPC Service Stubs for use with [grpc-web](https://github.com/improbable-eng/grpc-web).

### Generating TypeScript Definitions for CommonJS modules generated by protoc

By default, protoc will generate ES5 code when the `--js_out` flag is used (see [javascript compiler documentation](https://github.com/google/protobuf/tree/master/js)). You have the choice of two module syntaxes, [CommonJS](https://nodejs.org/docs/latest-v8.x/api/modules.html) or [closure](https://developers.google.com/closure/library/docs/tutorial). This plugin (`ts-protoc-gen`) can be used to generate Typescript definition files (`.d.ts`) to provide type hints for CommonJS modules only.

To generate TypeScript definitions you must first configure `protoc` to use this plugin and then specify where you want the TypeScript definitions to be written to using the `--ts_out` flag.

```bash
# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    users.proto base.proto
```

In the above example, the `generated` folder will contain both `.js` and `.d.ts` files which you can reference in your TypeScript project to get full type completion and make use of ES6-style import statements, eg:

```js
import { MyMessage } from "../generated/users_pb";

const msg = new MyMessage();
msg.setName("John Doe");
```

### Generating gRPC Service Stubs for use with grpc-web

[gRPC](https://grpc.io/) is a framework that enables client and server applications to communicate transparently, and makes it easier to build connected systems.

[grpc-web](https://github.com/improbable-eng/grpc-web) is a comparability layer on both the server and client-side which allows gRPC to function natively in modern web-browsers.

To generate client-side service stubs from your protobuf files you must configure ts-protoc-gen to emit service definitions by passing the `service=true` param to the `--ts_out` flag, eg:

```
# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=true:${OUT_DIR}" \
    users.proto base.proto
```

The `generated` folder will now contain both `pb_service.js` and `pb_service.d.ts` files which you can reference in your TypeScript project to make RPCs.

**Note** Note that these modules require a CommonJS environment. If you intend to consume these stubs in a browser environment you will need to use a module bundler such as [webpack](https://webpack.js.org/).
**Note** Both `js` and `d.ts` service files will be generated regardless of whether there are service definitions in the proto files.

```js
import {
  UserServiceClient,
  GetUserRequest
} from "../generated/users_pb_service";

const client = new UserServiceClient("https://my.grpc/server");
const req = new GetUserRequest();
req.setUsername("johndoe");
client.getUser(req, (err, user) => {
  /* ... */
});
```

## Examples

For a sample of the generated protos and service definitions, see [examples](https://github.com/improbable-eng/ts-protoc-gen/tree/master/examples).

To generate the examples from protos, please run `./generate.sh`

## Gotchas

By default the google-protobuf library will use the JavaScript number type to store 64bit float and integer values; this can lead to overflow problems as you exceed JavaScript's `Number.MAX_VALUE`. To work around this, you should consider using the `jstype` annotation on any 64bit fields, ie:

```proto
message Example {
  uint64 bigInt = 1 [jstype = JS_STRING];
}
```
