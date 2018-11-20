// @flow
import { assert } from "chai";
import { PrimitiveMessageV2 } from "../../../examples/flow/generated/proto/examplecom/primitive_message_v2_pb";
import { PrimitiveMessageV2$AsClass } from "../../../examples/flow/generated/proto/examplecom/primitive_message_v2_pb.flow";

describe("proto2 - primitive", () => {
  it("should allow getting required primitive fields", () => {
    const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();
    assert.strictEqual((msg.getMyDouble(): ?number), 0);
    assert.strictEqual((msg.getMyFloat(): ?number), 0);
    assert.strictEqual((msg.getMyInt32(): ?number), 0);
    assert.strictEqual((msg.getMyInt64(): ?number), 0);
    assert.strictEqual((msg.getMyUint32(): ?number), 0);
    assert.strictEqual((msg.getMyUint64(): ?number), 0);
    assert.strictEqual((msg.getMySint32(): ?number), 0);
    assert.strictEqual((msg.getMySint64(): ?number), 0);
    assert.strictEqual((msg.getMyFixed32(): ?number), 0);
    assert.strictEqual((msg.getMyFixed64(): ?number), 0);
    assert.strictEqual((msg.getMySfixed32(): ?number), 0);
    assert.strictEqual((msg.getMySfixed64(): ?number), 0);
    assert.strictEqual((msg.getMyBool(): ?boolean), false);
    assert.strictEqual((msg.getMyString(): ?string), "");
    assert.strictEqual((msg.getMyBytes(): Uint8Array | string), "");
  });

  it("should allow getting optional primitive fields", () => {
    const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();
    assert.strictEqual((msg.getOptDouble(): ?number), 0);
    assert.strictEqual((msg.getOptFloat(): ?number), 0);
    assert.strictEqual((msg.getOptInt32(): ?number), 0);
    assert.strictEqual((msg.getOptInt64(): ?number), 0);
    assert.strictEqual((msg.getOptUint32(): ?number), 0);
    assert.strictEqual((msg.getOptUint64(): ?number), 0);
    assert.strictEqual((msg.getOptSint32(): ?number), 0);
    assert.strictEqual((msg.getOptSint64(): ?number), 0);
    assert.strictEqual((msg.getOptFixed32(): ?number), 0);
    assert.strictEqual((msg.getOptFixed64(): ?number), 0);
    assert.strictEqual((msg.getOptSfixed32(): ?number), 0);
    assert.strictEqual((msg.getOptSfixed64(): ?number), 0);
    assert.strictEqual((msg.getOptBool(): ?boolean), false);
    assert.strictEqual((msg.getOptString(): ?string), "");
    assert.strictEqual((msg.getOptBytes(): Uint8Array | string), "");
  });

  it("should allow setting and getting required primitive fields", () => {
    const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();
    msg.setMyDouble(123);
    assert.strictEqual((msg.getMyDouble(): ?number), 123);
    msg.setMyFloat(123);
    assert.strictEqual((msg.getMyFloat(): ?number), 123);
    msg.setMyInt32(123);
    assert.strictEqual((msg.getMyInt32(): ?number), 123);
    msg.setMyInt64(123);
    assert.strictEqual((msg.getMyInt64(): ?number), 123);
    msg.setMyUint32(123);
    assert.strictEqual((msg.getMyUint32(): ?number), 123);
    msg.setMyUint64(123);
    assert.strictEqual((msg.getMyUint64(): ?number), 123);
    msg.setMySint32(123);
    assert.strictEqual((msg.getMySint32(): ?number), 123);
    msg.setMySint64(123);
    assert.strictEqual((msg.getMySint64(): ?number), 123);
    msg.setMyFixed32(123);
    assert.strictEqual((msg.getMyFixed32(): ?number), 123);
    msg.setMyFixed64(123);
    assert.strictEqual((msg.getMyFixed64(): ?number), 123);
    msg.setMySfixed32(123);
    assert.strictEqual((msg.getMySfixed32(): ?number), 123);
    msg.setMySfixed64(123);
    assert.strictEqual((msg.getMySfixed64(): ?number), 123);
    msg.setMyBool(true);
    assert.strictEqual((msg.getMyBool(): ?boolean), true);
    msg.setMyString("hello world");
    assert.strictEqual((msg.getMyString(): ?string), "hello world");
    msg.setMyBytes("AAECAwQFBgcICQ==");
    assert.strictEqual(
      (msg.getMyBytes(): Uint8Array | string),
      "AAECAwQFBgcICQ=="
    );
  });

  it("should allow setting and getting required optional fields", () => {
    const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();
    msg.setOptDouble(123);
    assert.strictEqual((msg.getOptDouble(): ?number), 123);
    msg.setOptFloat(123);
    assert.strictEqual((msg.getOptFloat(): ?number), 123);
    msg.setOptInt32(123);
    assert.strictEqual((msg.getOptInt32(): ?number), 123);
    msg.setOptInt64(123);
    assert.strictEqual((msg.getOptInt64(): ?number), 123);
    msg.setOptUint32(123);
    assert.strictEqual((msg.getOptUint32(): ?number), 123);
    msg.setOptUint64(123);
    assert.strictEqual((msg.getOptUint64(): ?number), 123);
    msg.setOptSint32(123);
    assert.strictEqual((msg.getOptSint32(): ?number), 123);
    msg.setOptSint64(123);
    assert.strictEqual((msg.getOptSint64(): ?number), 123);
    msg.setOptFixed32(123);
    assert.strictEqual((msg.getOptFixed32(): ?number), 123);
    msg.setOptFixed64(123);
    assert.strictEqual((msg.getOptFixed64(): ?number), 123);
    msg.setOptSfixed32(123);
    assert.strictEqual((msg.getOptSfixed32(): ?number), 123);
    msg.setOptSfixed64(123);
    assert.strictEqual((msg.getOptSfixed64(): ?number), 123);
    msg.setOptBool(true);
    assert.strictEqual((msg.getOptBool(): ?boolean), true);
    msg.setOptString("hello world");
    assert.strictEqual((msg.getOptString(): ?string), "hello world");
    msg.setOptBytes("AAECAwQFBgcICQ==");
    assert.strictEqual(
      (msg.getOptBytes(): Uint8Array | string),
      "AAECAwQFBgcICQ=="
    );
  });

  it("should allow setting and getting required byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();

    msg.setMyBytes(asString);
    assert.deepEqual((msg.getMyBytes_asU8(): Uint8Array), asUint8Array);
    assert.deepEqual((msg.getMyBytes_asB64(): string), asString);
    assert.deepEqual((msg.getMyBytes(): Uint8Array | string), asString);

    msg.setMyBytes(asUint8Array);
    assert.deepEqual((msg.getMyBytes_asB64(): string), asString);
    assert.deepEqual((msg.getMyBytes_asU8(): Uint8Array), asUint8Array);
    assert.deepEqual((msg.getMyBytes(): Uint8Array | string), asUint8Array);
  });

  it("should allow setting and getting optional byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();

    msg.setOptBytes(asString);
    assert.deepEqual((msg.getOptBytes_asU8(): Uint8Array), asUint8Array);
    assert.deepEqual((msg.getOptBytes_asB64(): string), asString);
    assert.deepEqual((msg.getOptBytes(): Uint8Array | string), asString);

    msg.setOptBytes(asUint8Array);
    assert.deepEqual((msg.getOptBytes_asB64(): string), asString);
    assert.deepEqual((msg.getOptBytes_asU8(): Uint8Array), asUint8Array);
    assert.deepEqual((msg.getOptBytes(): Uint8Array | string), asUint8Array);
  });

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();
      const asObject = msg.toObject();
      assert.isNaN((asObject.myDouble: ?number));
      assert.isNaN((asObject.myFloat: ?number));
      assert.isNaN((asObject.myInt32: ?number));
      assert.isNaN((asObject.myInt64: ?number));
      assert.isNaN((asObject.myUint32: ?number));
      assert.isNaN((asObject.myUint64: ?number));
      assert.isNaN((asObject.mySint32: ?number));
      assert.isNaN((asObject.mySint64: ?number));
      assert.isNaN((asObject.myFixed32: ?number));
      assert.isNaN((asObject.myFixed64: ?number));
      assert.isNaN((asObject.mySfixed32: ?number));
      assert.isNaN((asObject.mySfixed64: ?number));
      assert.strictEqual((asObject.myBool: ?boolean), undefined);
      assert.strictEqual((asObject.myString: ?string), undefined);
      assert.strictEqual((asObject.myBytes: Uint8Array | string), "");

      assert.isNaN((asObject.optFloat: ?number));
      assert.isNaN((asObject.optDouble: ?number));
      assert.isNaN((asObject.optInt32: ?number));
      assert.isNaN((asObject.optInt64: ?number));
      assert.isNaN((asObject.optUint32: ?number));
      assert.isNaN((asObject.optUint64: ?number));
      assert.isNaN((asObject.optSint32: ?number));
      assert.isNaN((asObject.optSint64: ?number));
      assert.isNaN((asObject.optFixed32: ?number));
      assert.isNaN((asObject.optFixed64: ?number));
      assert.isNaN((asObject.optSfixed32: ?number));
      assert.isNaN((asObject.optSfixed64: ?number));
      assert.strictEqual((asObject.optBool: ?boolean), undefined);
      assert.strictEqual((asObject.optString: ?string), undefined);
      assert.strictEqual((asObject.optBytes: Uint8Array | string), "");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg: PrimitiveMessageV2$AsClass = new PrimitiveMessageV2();
      const asObject = msg.toObject();
      assert.strictEqual("optNumber" in asObject, true);
    });
  });
});
