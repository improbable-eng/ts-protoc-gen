#!/bin/bash


rm -r _out/
mkdir -p _out/


PATH=../bin:$PATH protoc \
   --js_out=import_style=commonjs,binary:_out \
   --ts_out=_out \
   -I . \
   examplecom/services/complextypes/*.proto
