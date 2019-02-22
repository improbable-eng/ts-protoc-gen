import {ReportDto} from "../../../../examples/generated/proto/issues/150/report_pb";
import {assert} from "chai";

describe("issue 150", () => {
  it("should allow access via getters", () => {
    const report = new ReportDto();
    report.setPoiid(150);
    const actual = report.getPoiid();

    assert.strictEqual(actual, 150);
  });
});