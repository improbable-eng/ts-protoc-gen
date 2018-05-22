#!/bin/bash -x

mocha -R mocha-spec-json-output-reporter --reporter-options fileName=./mocha-report.json -r ts-node/register -r source-map-support/register "${1}"
node ./check-mocha-report mocha-report.json
