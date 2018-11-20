// @flow
import { assert } from "chai";
import { PrimitiveMessageV3 } from "../../../examples/flow/generated/proto/examplecom/primitive_message_v3_pb";
import { PrimitiveMessageV3$AsClass } from "../../../examples/flow/generated/proto/examplecom/primitive_message_v3_pb.flow";

describe("proto3 - primitive", () => {
  it("should allow getting primitive fields", () => {
    const msg: PrimitiveMessageV3$AsClass = new PrimitiveMessageV3();
    assert.strictEqual((msg.getMyDouble(): number), 0);
    assert.strictEqual((msg.getMyFloat(): number), 0);
    assert.strictEqual((msg.getMyInt32(): number), 0);
    assert.strictEqual((msg.getMyInt64(): number), 0);
    assert.strictEqual((msg.getMyUint32(): number), 0);
    assert.strictEqual((msg.getMyUint64(): number), 0);
    assert.strictEqual((msg.getMySint32(): number), 0);
    assert.strictEqual((msg.getMySint64(): number), 0);
    assert.strictEqual((msg.getMyFixed32(): number), 0);
    assert.strictEqual((msg.getMyFixed64(): number), 0);
    assert.strictEqual((msg.getMySfixed32(): number), 0);
    assert.strictEqual((msg.getMySfixed64(): number), 0);
    assert.strictEqual((msg.getMyBool(): boolean), false);
    assert.strictEqual((msg.getMyString(): string), "");
    assert.strictEqual((msg.getMyBytes(): Uint8Array | string), "");
  });

  it("should allow setting and getting primitive fields", () => {
    const msg: PrimitiveMessageV3$AsClass = new PrimitiveMessageV3();
    msg.setMyDouble(123);
    assert.strictEqual((msg.getMyDouble(): number), 123);
    msg.setMyFloat(123);
    assert.strictEqual((msg.getMyFloat(): number), 123);
    msg.setMyInt32(123);
    assert.strictEqual((msg.getMyInt32(): number), 123);
    msg.setMyInt64(123);
    assert.strictEqual((msg.getMyInt64(): number), 123);
    msg.setMyUint32(123);
    assert.strictEqual((msg.getMyUint32(): number), 123);
    msg.setMyUint64(123);
    assert.strictEqual((msg.getMyUint64(): number), 123);
    msg.setMySint32(123);
    assert.strictEqual((msg.getMySint32(): number), 123);
    msg.setMySint64(123);
    assert.strictEqual((msg.getMySint64(): number), 123);
    msg.setMyFixed32(123);
    assert.strictEqual((msg.getMyFixed32(): number), 123);
    msg.setMyFixed64(123);
    assert.strictEqual((msg.getMyFixed64(): number), 123);
    msg.setMySfixed32(123);
    assert.strictEqual((msg.getMySfixed32(): number), 123);
    msg.setMySfixed64(123);
    assert.strictEqual((msg.getMySfixed64(): number), 123);
    msg.setMyBool(true);
    assert.strictEqual((msg.getMyBool(): boolean), true);
    msg.setMyString("hello world");
    assert.strictEqual((msg.getMyString(): string), "hello world");
    msg.setMyBytes("AAECAwQFBgcICQ==");
    assert.strictEqual(
      (msg.getMyBytes(): Uint8Array | string),
      "AAECAwQFBgcICQ=="
    );
  });

  it("should allow setting and getting byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg: PrimitiveMessageV3$AsClass = new PrimitiveMessageV3();

    msg.setMyBytes(asString);
    assert.deepEqual((msg.getMyBytes_asU8(): Uint8Array), asUint8Array);
    assert.deepEqual((msg.getMyBytes_asB64(): string), asString);
    assert.deepEqual((msg.getMyBytes(): Uint8Array | string), asString);

    msg.setMyBytes(asUint8Array);
    assert.deepEqual((msg.getMyBytes_asB64(): string), asString);
    assert.deepEqual((msg.getMyBytes_asU8(): Uint8Array), asUint8Array);
    assert.deepEqual((msg.getMyBytes(): Uint8Array | string), asUint8Array);
  });

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg: PrimitiveMessageV3$AsClass = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      assert.strictEqual((asObject.myDouble: number), 0);
      assert.strictEqual((asObject.myFloat: number), 0);
      assert.strictEqual((asObject.myInt32: number), 0);
      assert.strictEqual((asObject.myInt64: number), 0);
      assert.strictEqual((asObject.myUint32: number), 0);
      assert.strictEqual((asObject.myUint64: number), 0);
      assert.strictEqual((asObject.mySint32: number), 0);
      assert.strictEqual((asObject.mySint64: number), 0);
      assert.strictEqual((asObject.myFixed32: number), 0);
      assert.strictEqual((asObject.myFixed64: number), 0);
      assert.strictEqual((asObject.mySfixed32: number), 0);
      assert.strictEqual((asObject.mySfixed64: number), 0);
      assert.strictEqual((asObject.myBool: boolean), false);
      assert.strictEqual((asObject.myString: string), "");
      assert.strictEqual((asObject.myBytes: Uint8Array | string), "");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg: PrimitiveMessageV3$AsClass = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      assert.strictEqual("myNumber" in asObject, true);
    });
  });
});
