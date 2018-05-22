import {assert} from "chai";
import {PrimitiveMessageV3} from "../examples/generated/examplecom/primitive_message_v3_pb";

describe("proto3 - primitive", () => {
  it("should allow getting primitive fields", () => {
    const msg = new PrimitiveMessageV3();
    assert.strictEqual(msg.getMyDouble() as number, 0);
    assert.strictEqual(msg.getMyFloat() as number, 0);
    assert.strictEqual(msg.getMyInt32() as number, 0);
    assert.strictEqual(msg.getMyInt64() as number, 0);
    assert.strictEqual(msg.getMyUint32() as number, 0);
    assert.strictEqual(msg.getMyUint64() as number, 0);
    assert.strictEqual(msg.getMySint32() as number, 0);
    assert.strictEqual(msg.getMySint64() as number, 0);
    assert.strictEqual(msg.getMyFixed32() as number, 0);
    assert.strictEqual(msg.getMyFixed64() as number, 0);
    assert.strictEqual(msg.getMySfixed32() as number, 0);
    assert.strictEqual(msg.getMySfixed64() as number, 0);
    assert.strictEqual(msg.getMyBool() as boolean, false);
    assert.strictEqual(msg.getMyString() as string, "");
    assert.strictEqual(msg.getMyBytes() as (Uint8Array|string), "");
  });

  it("should allow setting and getting primitive fields", () => {
    const msg = new PrimitiveMessageV3();
    msg.setMyDouble(123);
    assert.strictEqual(msg.getMyDouble() as number, 123);
    msg.setMyFloat(123);
    assert.strictEqual(msg.getMyFloat() as number, 123);
    msg.setMyInt32(123);
    assert.strictEqual(msg.getMyInt32() as number, 123);
    msg.setMyInt64(123);
    assert.strictEqual(msg.getMyInt64() as number, 123);
    msg.setMyUint32(123);
    assert.strictEqual(msg.getMyUint32() as number, 123);
    msg.setMyUint64(123);
    assert.strictEqual(msg.getMyUint64() as number, 123);
    msg.setMySint32(123);
    assert.strictEqual(msg.getMySint32() as number, 123);
    msg.setMySint64(123);
    assert.strictEqual(msg.getMySint64() as number, 123);
    msg.setMyFixed32(123);
    assert.strictEqual(msg.getMyFixed32() as number, 123);
    msg.setMyFixed64(123);
    assert.strictEqual(msg.getMyFixed64() as number, 123);
    msg.setMySfixed32(123);
    assert.strictEqual(msg.getMySfixed32() as number, 123);
    msg.setMySfixed64(123);
    assert.strictEqual(msg.getMySfixed64() as number, 123);
    msg.setMyBool(true);
    assert.strictEqual(msg.getMyBool() as boolean, true);
    msg.setMyString("hello world");
    assert.strictEqual(msg.getMyString() as string, "hello world");
    msg.setMyBytes("AAECAwQFBgcICQ==");
    assert.strictEqual(msg.getMyBytes() as (Uint8Array|string), "AAECAwQFBgcICQ==");
  });

  it("should allow setting and getting byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg = new PrimitiveMessageV3();

    msg.setMyBytes(asString);
    assert.deepEqual(msg.getMyBytes_asU8() as Uint8Array, asUint8Array);
    assert.deepEqual(msg.getMyBytes_asB64() as string, asString);
    assert.deepEqual(msg.getMyBytes() as (Uint8Array|string), asString);

    msg.setMyBytes(asUint8Array);
    assert.deepEqual(msg.getMyBytes_asB64() as string, asString);
    assert.deepEqual(msg.getMyBytes_asU8() as Uint8Array, asUint8Array);
    assert.deepEqual(msg.getMyBytes() as (Uint8Array|string), asUint8Array);
  });

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      assert.strictEqual(asObject.myDouble as number, 0);
      assert.strictEqual(asObject.myFloat as number, 0);
      assert.strictEqual(asObject.myInt32 as number, 0);
      assert.strictEqual(asObject.myInt64 as number, 0);
      assert.strictEqual(asObject.myUint32 as number, 0);
      assert.strictEqual(asObject.myUint64 as number, 0);
      assert.strictEqual(asObject.mySint32 as number, 0);
      assert.strictEqual(asObject.mySint64 as number, 0);
      assert.strictEqual(asObject.myFixed32 as number, 0);
      assert.strictEqual(asObject.myFixed64 as number, 0);
      assert.strictEqual(asObject.mySfixed32 as number, 0);
      assert.strictEqual(asObject.mySfixed64 as number, 0);
      assert.strictEqual(asObject.myBool as boolean, false);
      assert.strictEqual(asObject.myString as string, "");
      assert.strictEqual(asObject.myBytes as (Uint8Array|string), "");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      assert.strictEqual("myNumber" in asObject, true);
    });
  });
});
