const { spawnSync } = require("child_process");
const { resolve } = require("path");

const testSuite = process.argv[2];
if (!testSuite) {
  throw new Error("No mocha test suite specified.");
}

const mochaPath =
  resolve(__dirname, "..", "node_modules", ".bin", "mocha") +
  (process.platform === "win32" ? ".cmd" : "");

const mochaArgs = [
  "--reporter", "mocha-spec-json-output-reporter",
  "--reporter-options", "fileName=./test/mocha-report.json",
  "--require", "ts-node/register/type-check",
  "--require", "source-map-support/register",
];

if (process.env.MOCHA_DEBUG) {
  mochaArgs.push("--inspect-brk");
}

mochaArgs.push(testSuite);

spawnSync(mochaPath, mochaArgs, { stdio: "inherit" });

spawnSync(
  "node",
  ["./test/mocha-check-report", "./test/mocha-report.json"],
  { stdio: "inherit" }
);
