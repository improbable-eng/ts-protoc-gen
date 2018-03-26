# ts-protoc-gen
> Protoc Plugin for TypeScript Declarations


[![Master Build](https://travis-ci.org/improbable-eng/ts-protoc-gen.svg?branch=master)](https://travis-ci.org/improbable-eng/ts-protoc-gen)
[![NPM](https://img.shields.io/npm/v/ts-protoc-gen.svg)](https://www.npmjs.com/package/ts-protoc-gen)
[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![quality: alpha](https://img.shields.io/badge/quality-beta-orange.svg)

This repository contains a [protoc](https://github.com/google/protobuf) plugin that generates TypeScript declarations 
(`.d.ts` files) that match the JavaScript output of `protoc --js_out=import_style=commonjs,binary`. This plugin can
also output service definitions as both `.js` and `.d.ts` files in the structure required by [grpc-web](https://github.com/improbable-eng/grpc-web).

## TypeScript Usage (with services)
* Install this repository using `npm install ts-protoc-gen` or clone this repository and run `npm install && npm run build`
* Invoke `protoc` with:
  * `--plugin` - define where the plugin needed for `ts_out` can be found
  * `--js_out` - the standard argument to `protoc` that generates `.js` files in the specified directory
  * `--ts_out` - the params and directory to output to (`service=true` enables outputting `.js` and `.d.ts` files for use with [grpc-web](https://github.com/improbable-eng/grpc-web)).
    * **This directory must match `js_out`**
    ```
    protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:generated \
    --ts_out=service=true:generated \
    -I ./proto \
    proto/*.proto
    ```

## TODO
* Add tests for extensions
