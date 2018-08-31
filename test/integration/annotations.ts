import { assert } from "chai";
import { AnnotatedMessage } from "../../examples/generated/proto/examplecom/annotations_pb";

describe("annotations", () => {
  it("should detect and honor the `jstype` annotation", () => {
    const msg = new AnnotatedMessage();
    msg.setBigint("123456789123456789");
    assert.strictEqual(msg.getBigint(), "123456789123456789");
  });
});
