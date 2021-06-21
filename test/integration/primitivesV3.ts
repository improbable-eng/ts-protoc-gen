import {assert} from "chai";
import {PrimitiveMessageV3} from "../../examples/generated/proto/examplecom/primitive_message_v3_pb";

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

  it("should allow getting optional primitive fields", () => {
    const msg = new PrimitiveMessageV3();
    assert.strictEqual(msg.getOptDouble() as number, 0);
    assert.strictEqual(msg.getOptFloat() as number, 0);
    assert.strictEqual(msg.getOptInt32() as number, 0);
    assert.strictEqual(msg.getOptInt64() as number, 0);
    assert.strictEqual(msg.getOptUint32() as number, 0);
    assert.strictEqual(msg.getOptUint64() as number, 0);
    assert.strictEqual(msg.getOptSint32() as number, 0);
    assert.strictEqual(msg.getOptSint64() as number, 0);
    assert.strictEqual(msg.getOptFixed32() as number, 0);
    assert.strictEqual(msg.getOptFixed64() as number, 0);
    assert.strictEqual(msg.getOptSfixed32() as number, 0);
    assert.strictEqual(msg.getOptSfixed64() as number, 0);
    assert.strictEqual(msg.getOptBool() as boolean, false);
    assert.strictEqual(msg.getOptString() as string, "");
    assert.strictEqual(msg.getOptBytes() as (Uint8Array|string), "");
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

  it("should allow setting and getting optional primitive fields", () => {
    const msg = new PrimitiveMessageV3();

    assert.isFalse(msg.hasOptDouble());
    msg.setOptDouble(123);
    assert.isTrue(msg.hasOptDouble());
    assert.strictEqual(msg.getOptDouble() as number, 123);

    assert.isFalse(msg.hasOptFloat());
    msg.setOptFloat(123);
    assert.isTrue(msg.hasOptFloat());
    assert.strictEqual(msg.getOptFloat() as number, 123);

    assert.isFalse(msg.hasOptInt32());
    msg.setOptInt32(123);
    assert.isTrue(msg.hasOptInt32());
    assert.strictEqual(msg.getOptInt32() as number, 123);

    assert.isFalse(msg.hasOptInt64());
    msg.setOptInt64(123);
    assert.isTrue(msg.hasOptInt64());
    assert.strictEqual(msg.getOptInt64() as number, 123);

    assert.isFalse(msg.hasOptUint32());
    msg.setOptUint32(123);
    assert.isTrue(msg.hasOptUint32());
    assert.strictEqual(msg.getOptUint32() as number, 123);

    assert.isFalse(msg.hasOptUint64());
    msg.setOptUint64(123);
    assert.isTrue(msg.hasOptUint64());
    assert.strictEqual(msg.getOptUint64() as number, 123);

    assert.isFalse(msg.hasOptSint32());
    msg.setOptSint32(123);
    assert.isTrue(msg.hasOptSint32());
    assert.strictEqual(msg.getOptSint32() as number, 123);

    assert.isFalse(msg.hasOptSint64());
    msg.setOptSint64(123);
    assert.isTrue(msg.hasOptSint64());
    assert.strictEqual(msg.getOptSint64() as number, 123);

    assert.isFalse(msg.hasOptFixed32());
    msg.setOptFixed32(123);
    assert.isTrue(msg.hasOptFixed32());
    assert.strictEqual(msg.getOptFixed32() as number, 123);

    assert.isFalse(msg.hasOptFixed64());
    msg.setOptFixed64(123);
    assert.isTrue(msg.hasOptFixed64());
    assert.strictEqual(msg.getOptFixed64() as number, 123);

    assert.isFalse(msg.hasOptSfixed32());
    msg.setOptSfixed32(123);
    assert.isTrue(msg.hasOptSfixed32());
    assert.strictEqual(msg.getOptSfixed32() as number, 123);

    assert.isFalse(msg.hasOptSfixed64());
    msg.setOptSfixed64(123);
    assert.isTrue(msg.hasOptSfixed64());
    assert.strictEqual(msg.getOptSfixed64() as number, 123);

    assert.isFalse(msg.hasOptBool());
    msg.setOptBool(true);
    assert.isTrue(msg.hasOptBool());
    assert.strictEqual(msg.getOptBool() as boolean, true);

    assert.isFalse(msg.hasOptString());
    msg.setOptString("hello world");
    assert.isTrue(msg.hasOptString());
    assert.strictEqual(msg.getOptString() as string, "hello world");

    assert.isFalse(msg.hasOptBytes());
    msg.setOptBytes("AAECAwQFBgcICQ==");
    assert.isTrue(msg.hasOptBytes());
    assert.strictEqual(msg.getOptBytes() as (Uint8Array|string), "AAECAwQFBgcICQ==");
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

  it("should allow chaining setters", () => {
    const msg = new PrimitiveMessageV3();
    msg
      .setMyDouble(123)
      .setMyFloat(123)
      .setMyInt32(123)
      .setMyInt64(123)
      .setMyUint32(123)
      .setMyUint64(123)
      .setMySint32(123)
      .setMySint64(123)
      .setMyFixed32(123)
      .setMyFixed64(123)
      .setMySfixed32(123)
      .setMySfixed64(123)
      .setMyBool(true)
      .setMyString("hello world")
      .setMyBytes("AAECAwQFBgcICQ==");
    assert.strictEqual(msg.getMyDouble() as number, 123);
    assert.strictEqual(msg.getMyFloat() as number, 123);
    assert.strictEqual(msg.getMyInt32() as number, 123);
    assert.strictEqual(msg.getMyInt64() as number, 123);
    assert.strictEqual(msg.getMyUint32() as number, 123);
    assert.strictEqual(msg.getMyUint64() as number, 123);
    assert.strictEqual(msg.getMySint32() as number, 123);
    assert.strictEqual(msg.getMySint64() as number, 123);
    assert.strictEqual(msg.getMyFixed32() as number, 123);
    assert.strictEqual(msg.getMyFixed64() as number, 123);
    assert.strictEqual(msg.getMySfixed32() as number, 123);
    assert.strictEqual(msg.getMySfixed64() as number, 123);
    assert.strictEqual(msg.getMyBool() as boolean, true);
    assert.strictEqual(msg.getMyString() as string, "hello world");
    assert.strictEqual(msg.getMyBytes() as (Uint8Array|string), "AAECAwQFBgcICQ==");
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
      assert.strictEqual(asObject.optDouble, 0);
      assert.strictEqual(asObject.optFloat, 0);
      assert.strictEqual(asObject.optInt32, 0);
      assert.strictEqual(asObject.optInt64, 0);
      assert.strictEqual(asObject.optUint32, 0);
      assert.strictEqual(asObject.optUint64, 0);
      assert.strictEqual(asObject.optSint32, 0);
      assert.strictEqual(asObject.optSint64, 0);
      assert.strictEqual(asObject.optFixed32, 0);
      assert.strictEqual(asObject.optFixed64, 0);
      assert.strictEqual(asObject.optSfixed32, 0);
      assert.strictEqual(asObject.optSfixed64, 0);
      assert.strictEqual(asObject.optBool, false);
      assert.strictEqual(asObject.optString, "");
      assert.strictEqual(asObject.optBytes, "");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      assert.strictEqual("myNumber" in asObject, true);
    });
  });
});
