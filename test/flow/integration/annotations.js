// @flow
import { assert } from "chai";
import { describe, it } from "mocha";

import { AnnotatedMessage } from "../../../examples/flow/generated/proto/examplecom/annotations_pb";
import type { AnnotatedMessage$AsClass } from "../../../examples/flow/generated/proto/examplecom/annotations_pb.flow";

describe("annotations", () => {
  it("should detect and honor the `jstype` annotation", () => {
    const unsafeInteger = Number.MAX_VALUE.toString() + "9999";
    const msg: AnnotatedMessage$AsClass = new AnnotatedMessage();

    msg.setMyfixed64(unsafeInteger);
    assert.strictEqual(msg.getMyfixed64(), unsafeInteger);

    msg.setMyunit64(unsafeInteger);
    assert.strictEqual(msg.getMyunit64(), unsafeInteger);

    msg.setMyint64(unsafeInteger);
    assert.strictEqual(msg.getMyint64(), unsafeInteger);

    msg.setMysfixed64(unsafeInteger);
    assert.strictEqual(msg.getMysfixed64(), unsafeInteger);

    msg.setMysint64(unsafeInteger);
    assert.strictEqual(msg.getMysint64(), unsafeInteger);
  });
});
