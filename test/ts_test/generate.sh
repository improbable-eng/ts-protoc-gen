#!/bin/bash

rm -rf generated/
mkdir -p generated/

protoc \
  --plugin=protoc-gen-ts=../../bin/protoc-gen-ts \
  --js_out=import_style=commonjs,binary:generated \
  --ts_out=service=true:generated \
  -I ../proto \
  ../proto/othercom/*.proto \
  ../proto/examplecom/*.proto
