var fs = require("fs");

var reportFile = process.argv[2];
var report = null;

function die(msg) {
  console.log(msg);
  process.exit(1);
}

if (!reportFile) {
  die("Expected report filename to be supplied as an argument");
}

try {
  report = fs.readFileSync(reportFile);
}
catch (err) {
  die("Failed to open mocha report file " + reportFile + ": " + err.message);
}

if (!report || !report.stats || report.stats.tests === 0) {
  die("No test results found in " + reportFile);
}