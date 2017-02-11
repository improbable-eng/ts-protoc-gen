#!/bin/bash
# Checks out and builds out JavaScript representation of descriptor.proto and plugin.proto

TMP_DIR=/tmp/protobuf-checkout
PLATFORM=${PLATFORM:-"linux-x86_64"}  
VERSION=${VERSION:-"3.2.0"}  

url="https://github.com/google/protobuf/releases/download/v${VERSION}/protoc-${VERSION}-${PLATFORM}.zip"
echo "Downloading ${url}"

#rm -r ${TMP_DIR}
#mkdir -p ${TMP_DIR}
#curl -L ${url} -o ${TMP_DIR}/protoc.zip
#unzip ${TMP_DIR}/protoc.zip -d ${TMP_DIR}


${TMP_DIR}/bin/protoc \
   --js_out=import_style=commonjs,binary:. \
   -I ${TMP_DIR}/include  \
   ${TMP_DIR}/include/google/protobuf/compiler/plugin.proto \

${TMP_DIR}/bin/protoc \
   --js_out=import_style=commonjs,binary:. \
   -I ${TMP_DIR}/include  \
   ${TMP_DIR}/include/google/protobuf/descriptor.proto

