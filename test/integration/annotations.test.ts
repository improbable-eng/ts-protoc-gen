import { AnnotatedMessage } from "../../examples/generated/proto/examplecom/annotations_pb";

describe("annotations", () => {
  it("should detect and honor the `jstype` annotation", () => {
    const unsafeInteger = Number.MAX_VALUE.toString() + "9999";
    const msg = new AnnotatedMessage();

    msg.setMyfixed64(unsafeInteger);
    expect(msg.getMyfixed64()).toStrictEqual(unsafeInteger);

    msg.setMyunit64(unsafeInteger);
    expect(msg.getMyunit64()).toStrictEqual(unsafeInteger);

    msg.setMyint64(unsafeInteger);
    expect(msg.getMyint64()).toStrictEqual(unsafeInteger);

    msg.setMysfixed64(unsafeInteger);
    expect(msg.getMysfixed64()).toStrictEqual(unsafeInteger);

    msg.setMysint64(unsafeInteger);
    expect(msg.getMysint64()).toStrictEqual(unsafeInteger);
  });
});
