## 0.5.0 (Unreleased)

### Breaking Changes
* Removed `protoc-gen-js_service` command; `protoc-gen-ts` now generates both JavaScript and TypeScript. Consumers of `protoc-gen-js_service` should use `protoc-gen-ts` and substitute the `--js_service_out` protoc flag with `-ts_out=service=true`.

### Changes
* Export Enum Definitions as ALL_CAPS [@jonnyreeves](https://github.com/jonnyreeves) in [#22]((https://github.com/improbable-eng/ts-protoc-gen/issues/22))
* Don't output variables that are not used in typescript service definition [@jonbretman](https://github.com/jonbretman) in [#38](https://github.com/improbable-eng/ts-protoc-gen/pull/38)
* Support Bazel build [@adamyi](https://github.com/adamyi) in [#34](https://github.com/improbable-eng/ts-protoc-gen/pull/34)
* Create JavaScript sources and TypeScript definitions for grpc-web services [@jonny-improbable](https://github.com/jonny-improbable) in [#44](https://github.com/improbable-eng/ts-protoc-gen/pull/44)

## 0.4.0

### Changes
*  Add `pb_` prefix to JS Reserved Keywords [@jonnyreeves](https://github.com/jonnyreeves) in [#20](https://github.com/improbable-eng/ts-protoc-gen/pull/20)

## 0.3.3

### Changes
* Fix error on messages without packages [@MarcusLongmuir](https://github.com/MarcusLongmuir) in [#13](https://github.com/improbable-eng/ts-protoc-gen/pull/13) 