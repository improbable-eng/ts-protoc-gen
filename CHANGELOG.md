## 0.8.0

### Fixes
* [#131](https://github.com/improbable-eng/ts-protoc-gen/pull/131) Fix code-gen problems in client-side and bi-di stream stubs. ([@johanbrandhorst](https://github.com/johanbrandhorst))

### Changes
* [#139](https://github.com/improbable-eng/ts-protoc-gen/pull/139) Provide support for grpc-web-client v0.7.0+ ([@jonny-improbable](https://github.com/jonny-improbable))
* [#124](https://github.com/improbable-eng/ts-protoc-gen/pull/124) Provide support for cancelling unary calls. ([@virtuald](https://github.com/virtuald))

## 0.7.7

### Fixes
* Replace usage of `Object.assign` to fix webpack issue. [@jonny-improbable](https://github.com/jonny-improbable) in [#110](https://github.com/improbable-eng/ts-protoc-gen/pull/110)
* Errors returned by Unary Services should be optionally null. [@colinking](https://github.com/collinking) in [#116](https://github.com/improbable-eng/ts-protoc-gen/pull/116)
* Fix snake_cased oneof message are generated to incorrect types. [@riku179](https://github.com/riku179) in [#118](https://github.com/improbable-eng/ts-protoc-gen/pull/118)
* `.deb` artificats being deployment to npm. [@jonnyreeves](https://github.com/jonnyreeves) in [#121](https://github.com/improbable-eng/ts-protoc-gen/pull/121)

### Changes
* Add support for `jstype` proto annotations. [@jonny-improbable](https://github.com/jonny-improbable) in [#104](https://github.com/improbable-eng/ts-protoc-gen/pull/104)
* Implement Client Streaming and BiDi Streaming for grpc-web service stubs. [@jonnyreeves](https://github.com/jonnyreeves) in [#82](https://github.com/improbable-eng/ts-protoc-gen/pull/82)

## 0.7.6

### Fixes
* Broken integration tests on master 

## 0.7.5

### Fixes
* Fixed NPM publish.

## 0.7.4

### Changes
* Download protoc when generating protos to ensure a consistent version is being used. [@easyCZ](https://github.com/easyCZ) in [#80](https://github.com/improbable-eng/ts-protoc-gen/pull/80) 
* Always generate Service Definitions (`pb_service.d.js` and `pb_service.d.ts`) even if the proto does not define any services. [@lx223 ](https://github.com/lx223) in [#83](https://github.com/improbable-eng/ts-protoc-gen/pull/83) 
* Add custom Bazel rule which uses ts-protoc-gen for generation. [@coltonmorris](https://github.com/coltonmorris) in [#84](https://github.com/improbable-eng/ts-protoc-gen/pull/84)
* Add `debug` to `ServiceClientOptions`. [@bianbian-org](https://github.com/bianbian-org) in [#90](https://github.com/improbable-eng/ts-protoc-gen/pull/90)

## 0.7.3

### Changes
* None (testing release script...)

## 0.7.1

### Changes
* Fixing bad npm publish

## 0.7.0

### Changes
* Don't use reserved keywords as function names in grpc service stubs [@jonahbron](https://github.com/jonahbron) and [@jonny-improbable]((https://github.com/jonny-improbable)) in [#61](https://github.com/improbable-eng/ts-protoc-gen/pull/61)

### Fixes
* Fix casing mismatch for oneOf declarations. [@jonnyreeves](https://github.com/jonnyreeves) in [#67](https://github.com/improbable-eng/ts-protoc-gen/pull/67)
* Fix Bazel build [@coltonmorris](https://github.com/coltonmorris) in [#71](https://github.com/improbable-eng/ts-protoc-gen/pull/71)

## 0.6.0

### Changes
* Generate gRPC Service Stubs for use with grpc-web [@jonahbron](https://github.com/jonahbron) and [@jonny-improbable](https://github.com/jonny-improbable) in [#40](https://github.com/improbable-eng/ts-protoc-gen/pull/40)
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
