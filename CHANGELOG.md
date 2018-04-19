## 0.6.0

### Changes
* Generate gRPC Service Stubs for use with grpc-web [@jonahbron](https://github.com/jonahbron) and [@jonny-improbable]((https://github.com/jonny-improbable)) in [#40](https://github.com/improbable-eng/ts-protoc-gen/pull/40)
* Fix filename manipulation bug which would cause problems for users who store generated files with `.proto` in the path. [@easyCZ](https://github.com/easyCZ) in [#56](https://github.com/improbable-eng/ts-protoc-gen/pull/56)

## 0.5.2

### Changes
* Fixes invalid 0.5.1 publish (fixed prepublishOnly script)

## 0.5.1

### Changes
* Fixes invalid 0.5.0 publish (added prepublishOnly script)

## 0.5.0

### Migration Guide
The `protoc-gen-js_service` command has been removed as the `protoc-gen-ts` command now generates both JavaScript and TypeScript. Consumers of `protoc-gen-js_service` should instead use `protoc-gen-ts` and substitute the `--js_service_out=generated` protoc flag with `--ts_out=service=true:generated`.

### Changes
* Export Enum Definitions as ALL_CAPS [@jonnyreeves](https://github.com/jonnyreeves) in [#22](https://github.com/improbable-eng/ts-protoc-gen/issues/22)
* Don't output variables that are not used in typescript service definition [@jonbretman](https://github.com/jonbretman) in [#38](https://github.com/improbable-eng/ts-protoc-gen/pull/38)
* Support Bazel build [@adamyi](https://github.com/adamyi) in [#34](https://github.com/improbable-eng/ts-protoc-gen/pull/34)
* Create JavaScript sources and TypeScript definitions for grpc-web services [@jonny-improbable](https://github.com/jonny-improbable) in [#44](https://github.com/improbable-eng/ts-protoc-gen/pull/44)
* Stop using TypeScript Modules in generated grpc-web Service Definitions [@jonny-improbable](https://github.com/jonny-improbable) in [#45](https://github.com/improbable-eng/ts-protoc-gen/pull/45)

## 0.4.0

### Changes
*  Add `pb_` prefix to JS Reserved Keywords [@jonnyreeves](https://github.com/jonnyreeves) in [#20](https://github.com/improbable-eng/ts-protoc-gen/pull/20)

## 0.3.3

### Changes
* Fix error on messages without packages [@MarcusLongmuir](https://github.com/MarcusLongmuir) in [#13](https://github.com/improbable-eng/ts-protoc-gen/pull/13) 
