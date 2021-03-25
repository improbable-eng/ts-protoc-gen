import {assert} from "chai";
import {PrimitiveMessageV2} from "../../examples/generated/proto/examplecom/primitive_message_v2_pb";

describe("proto2 - primitive", () => {
  it("should allow getting required primitive fields", () => {
    const msg = new PrimitiveMessageV2();
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
    const msg = new PrimitiveMessageV2();
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

  it("should allow setting and getting required primitive fields", () => {
    const msg = new PrimitiveMessageV2();
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
    const msg = new PrimitiveMessageV2();
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

  it("should allow setting and getting required byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg = new PrimitiveMessageV2();

    msg.setMyBytes(asString);
    assert.deepEqual(msg.getMyBytes_asU8() as Uint8Array, asUint8Array);
    assert.deepEqual(msg.getMyBytes_asB64() as string, asString);
    assert.deepEqual(msg.getMyBytes() as (Uint8Array|string), asString);

    msg.setMyBytes(asUint8Array);
    assert.deepEqual(msg.getMyBytes_asB64() as string, asString);
    assert.deepEqual(msg.getMyBytes_asU8() as Uint8Array, asUint8Array);
    assert.deepEqual(msg.getMyBytes() as (Uint8Array|string), asUint8Array);
  });

  it("should allow setting and getting optional byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg = new PrimitiveMessageV2();

    msg.setOptBytes(asString);
    assert.deepEqual(msg.getOptBytes_asU8() as Uint8Array, asUint8Array);
    assert.deepEqual(msg.getOptBytes_asB64() as string, asString);
    assert.deepEqual(msg.getOptBytes() as (Uint8Array|string), asString);

    msg.setOptBytes(asUint8Array);
    assert.deepEqual(msg.getOptBytes_asB64() as string, asString);
    assert.deepEqual(msg.getOptBytes_asU8() as Uint8Array, asUint8Array);
    assert.deepEqual(msg.getOptBytes() as (Uint8Array|string), asUint8Array);
  });

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg = new PrimitiveMessageV2();
      const asObject = msg.toObject();
      assert.isNaN(asObject.myDouble as number);
      assert.isNaN(asObject.myFloat as number);
      assert.isNaN(asObject.myInt32 as number);
      assert.isNaN(asObject.myInt64 as number);
      assert.isNaN(asObject.myUint32 as number);
      assert.isNaN(asObject.myUint64 as number);
      assert.isNaN(asObject.mySint32 as number);
      assert.isNaN(asObject.mySint64 as number);
      assert.isNaN(asObject.myFixed32 as number);
      assert.isNaN(asObject.myFixed64 as number);
      assert.isNaN(asObject.mySfixed32 as number);
      assert.isNaN(asObject.mySfixed64 as number);
      assert.strictEqual(asObject.myBool as undefined, undefined);
      assert.strictEqual(asObject.myString as undefined, undefined);
      assert.strictEqual(asObject.myBytes as string, "");

      assert.isNaN(asObject.optDouble as number);
      assert.isNaN(asObject.optFloat as number);
      assert.isNaN(asObject.optInt32 as number);
      assert.isNaN(asObject.optInt64 as number);
      assert.isNaN(asObject.optUint32 as number);
      assert.isNaN(asObject.optUint64 as number);
      assert.isNaN(asObject.optSint32 as number);
      assert.isNaN(asObject.optSint64 as number);
      assert.isNaN(asObject.optFixed32 as number);
      assert.isNaN(asObject.optFixed64 as number);
      assert.isNaN(asObject.optSfixed32 as number);
      assert.isNaN(asObject.optSfixed64 as number);
      assert.strictEqual(asObject.optBool as undefined, undefined);
      assert.strictEqual(asObject.optString as undefined, undefined);
      assert.strictEqual(asObject.optBytes as string, "");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg = new PrimitiveMessageV2();
      const asObject = msg.toObject();
      assert.strictEqual("optNumber" in asObject, true);
    });
  });
});
