#!/bin/bash -x
# Generate typescript definitions and service definitions from proto files

set -e

EXAMPLES_GENERATED_DIR=examples/generated
EXAMPLES_GENERATED_GRPC_WEB_DIR=examples/generated-grpc-web
EXAMPLES_GENERATED_GRPC_NODE_DIR=examples/generated-grpc-node

# Determine which platform we're running on
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     platform=Linux;;
    Darwin*)    platform=Mac;;
    *)          platform="UNKNOWN:${unameOut}"
esac
echo "You appear to be running on ${platform}"

echo "Ensuring we have NPM packages installed..."
npm install

echo "Compiling ts-protoc-gen..."
npm run build

PROTOC_VERSION="3.5.1"
echo "Downloading protoc v${PROTOC_VERSION} for ${platform}..."
mkdir -p protoc
if [[ $platform == 'Linux' ]]; then
    PROTOC_URL="https://github.com/google/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip"
elif [[ $platform == 'Mac' ]]; then
    PROTOC_URL="https://github.com/google/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-osx-x86_64.zip"
else
    echo "Cannot download protoc. ${platform} is not currently supported by ts-protoc-gen"
    exit 1
fi

wget ${PROTOC_URL} --output-document="protoc-${PROTOC_VERSION}.zip"
unzip "protoc-${PROTOC_VERSION}.zip" -d protoc
rm "protoc-${PROTOC_VERSION}.zip"

PROTOC=./protoc/bin/protoc

echo "Generating proto definitions..."

if [ -d "$EXAMPLES_GENERATED_DIR" ]
then
    rm -rf "$EXAMPLES_GENERATED_DIR"
fi
mkdir -p "$EXAMPLES_GENERATED_DIR"

if [ -d "$EXAMPLES_GENERATED_GRPC_WEB_DIR" ]
then
    rm -rf "$EXAMPLES_GENERATED_GRPC_WEB_DIR"
fi
mkdir -p "$EXAMPLES_GENERATED_GRPC_WEB_DIR"

if [ -d "$EXAMPLES_GENERATED_GRPC_NODE_DIR" ]
then
    rm -rf "$EXAMPLES_GENERATED_GRPC_NODE_DIR"
fi
mkdir -p "$EXAMPLES_GENERATED_GRPC_NODE_DIR"

# Generate no services
$PROTOC \
  --plugin=protoc-gen-ts=./bin/protoc-gen-ts \
  --js_out=import_style=commonjs,binary:$EXAMPLES_GENERATED_DIR \
  --ts_out=$EXAMPLES_GENERATED_DIR \
  ./proto/othercom/*.proto \
  ./proto/examplecom/*.proto \
  ./proto/*.proto

# Generate grpc-web services
$PROTOC \
  --plugin=protoc-gen-ts=./bin/protoc-gen-ts \
  --js_out=import_style=commonjs,binary:$EXAMPLES_GENERATED_GRPC_WEB_DIR \
  --ts_out=service=grpc-web:$EXAMPLES_GENERATED_GRPC_WEB_DIR \
  ./proto/othercom/*.proto \
  ./proto/examplecom/*.proto \
  ./proto/*.proto

# Generate grpc-node services
$PROTOC \
  --plugin=protoc-gen-ts=./bin/protoc-gen-ts \
  --plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin \
  --js_out=import_style=commonjs,binary:$EXAMPLES_GENERATED_GRPC_NODE_DIR \
  --ts_out=service=grpc-node:$EXAMPLES_GENERATED_GRPC_NODE_DIR \
  --grpc_out=$EXAMPLES_GENERATED_GRPC_NODE_DIR \
  ./proto/othercom/*.proto \
  ./proto/examplecom/*.proto \
  ./proto/*.proto

# Cleanup downloaded proto directory
rm -r protoc
