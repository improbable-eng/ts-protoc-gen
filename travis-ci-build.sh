#!/bin/bash
set -ex

npm run lint
npm test
bazel build //...:all