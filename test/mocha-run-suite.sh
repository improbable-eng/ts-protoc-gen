#!/bin/bash
# mocha-run-suite.sh
# Runs the supplied suite of mocha tests and then asserts that at least a single test
# actually passed. This avoids a nasty edge case where mocha will return exit code 0
# if zero tests actually run, presumably because none of them failed.

set -e

TEST_SUITE="${1}"
if [[ -z "${TEST_SUITE}" ]]; then
 echo "No mocha test suite specified."
 exit 1
fi

mocha \
    --reporter mocha-spec-json-output-reporter \
    --reporter-options fileName=./test/mocha-report.json \
    --require ts-node/register \
    --require source-map-support/register \
    "${TEST_SUITE}"

node ./test/mocha-check-report ./test/mocha-report.json