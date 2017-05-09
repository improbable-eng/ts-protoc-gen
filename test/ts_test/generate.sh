#!/bin/bash -x

if [ -d generated ]
then
    rm -rf generated/
fi
mkdir generated

protoc \
  --plugin=protoc-gen-ts=../../bin/protoc-gen-ts \
  --js_out=import_style=commonjs,binary:generated \
  --ts_out=service=true:generated \
  -I ../proto \
  ../proto/othercom/*.proto \
  ../proto/examplecom/*.proto \
  ../proto/*.proto
