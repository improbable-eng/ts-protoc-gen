#!/bin/bash -x
# Generate typescript definitions and service definitions from proto files

EXAMPLES_GENERATED_DIR=examples/generated

if [ -d $EXAMPLES_GENERATED_DIR ]
then
    rm -rf $EXAMPLES_GENERATED_DIR
fi
mkdir $EXAMPLES_GENERATED_DIR

protoc \
  --plugin=protoc-gen-ts=./bin/protoc-gen-ts \
  --js_out=import_style=commonjs,binary:$EXAMPLES_GENERATED_DIR \
  --ts_out=service=true:$EXAMPLES_GENERATED_DIR \
  -I ./proto \
  ./proto/othercom/*.proto \
  ./proto/examplecom/*.proto \
  ./proto/*.proto
