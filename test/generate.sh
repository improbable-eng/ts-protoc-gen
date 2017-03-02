#!/bin/bash

rm -rf generated/
mkdir -p generated/

PATH=../bin:$PATH protoc \
   --js_out=import_style=commonjs,binary:generated \
   --ts_out=generated \
   -I ./proto \
   proto/othercom/*.proto \
   proto/examplecom/*.proto
