const fs = require("fs");

const reportFile = process.argv[2];
let reportContents = "";
let report = null;

function die(msg) {
  console.log(msg);
  process.exit(1);
}

if (!reportFile) {
  die("Expected report filename to be supplied as an argument");
}

try {
  reportContents = fs.readFileSync(reportFile).toString('utf8');
}
catch (err) {
  die("Failed to open mocha report file " + reportFile + ": " + err.message);
}

try {
  report = JSON.parse(reportContents);
}
catch (err) {
  die("Failed to parse mocha report as JSON: " + err.message);
}

if (!report || !report.stats || report.stats.tests === 0) {
  die("No test results found in " + reportFile);
}