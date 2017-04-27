#!/bin/bash

rm -rf generated/
mkdir -p generated/

protoc \
  --plugin=protoc-gen-js_service=../../bin/protoc-gen-js_service \
  --js_out=import_style=commonjs,binary:generated \
  --js_service_out=generated \
  -I ../proto \
  ../proto/othercom/*.proto \
  ../proto/examplecom/*.proto \
  ../proto/*.proto
