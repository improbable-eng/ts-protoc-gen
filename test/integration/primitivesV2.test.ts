import {PrimitiveMessageV2} from "../../examples/generated/proto/examplecom/primitive_message_v2_pb";

describe("proto2 - primitive", () => {
  it("should allow getting required primitive fields", () => {
    const msg = new PrimitiveMessageV2();
    expect(msg.getMyDouble() as number).toStrictEqual(0);
    expect(msg.getMyFloat() as number).toStrictEqual(0);
    expect(msg.getMyInt32() as number).toStrictEqual(0);
    expect(msg.getMyInt64() as number).toStrictEqual(0);
    expect(msg.getMyUint32() as number).toStrictEqual(0);
    expect(msg.getMyUint64() as number).toStrictEqual(0);
    expect(msg.getMySint32() as number).toStrictEqual(0);
    expect(msg.getMySint64() as number).toStrictEqual(0);
    expect(msg.getMyFixed32() as number).toStrictEqual(0);
    expect(msg.getMyFixed64() as number).toStrictEqual(0);
    expect(msg.getMySfixed32() as number).toStrictEqual(0);
    expect(msg.getMySfixed64() as number).toStrictEqual(0);
    expect(msg.getMyBool() as boolean).toStrictEqual(false);
    expect(msg.getMyString() as string).toStrictEqual("");
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual("");
  });

  it("should allow getting optional primitive fields", () => {
    const msg = new PrimitiveMessageV2();
    expect(msg.getOptDouble() as number).toStrictEqual(0);
    expect(msg.getOptFloat() as number).toStrictEqual(0);
    expect(msg.getOptInt32() as number).toStrictEqual(0);
    expect(msg.getOptInt64() as number).toStrictEqual(0);
    expect(msg.getOptUint32() as number).toStrictEqual(0);
    expect(msg.getOptUint64() as number).toStrictEqual(0);
    expect(msg.getOptSint32() as number).toStrictEqual(0);
    expect(msg.getOptSint64() as number).toStrictEqual(0);
    expect(msg.getOptFixed32() as number).toStrictEqual(0);
    expect(msg.getOptFixed64() as number).toStrictEqual(0);
    expect(msg.getOptSfixed32() as number).toStrictEqual(0);
    expect(msg.getOptSfixed64() as number).toStrictEqual(0);
    expect(msg.getOptBool() as boolean).toStrictEqual(false);
    expect(msg.getOptString() as string).toStrictEqual("");
    expect(msg.getOptBytes() as (Uint8Array|string)).toStrictEqual("");
  });

  it("should allow setting and getting required primitive fields", () => {
    const msg = new PrimitiveMessageV2();
    msg.setMyDouble(123);
    expect(msg.getMyDouble() as number).toStrictEqual(123);
    msg.setMyFloat(123);
    expect(msg.getMyFloat() as number).toStrictEqual(123);
    msg.setMyInt32(123);
    expect(msg.getMyInt32() as number).toStrictEqual(123);
    msg.setMyInt64(123);
    expect(msg.getMyInt64() as number).toStrictEqual(123);
    msg.setMyUint32(123);
    expect(msg.getMyUint32() as number).toStrictEqual(123);
    msg.setMyUint64(123);
    expect(msg.getMyUint64() as number).toStrictEqual(123);
    msg.setMySint32(123);
    expect(msg.getMySint32() as number).toStrictEqual(123);
    msg.setMySint64(123);
    expect(msg.getMySint64() as number).toStrictEqual(123);
    msg.setMyFixed32(123);
    expect(msg.getMyFixed32() as number).toStrictEqual(123);
    msg.setMyFixed64(123);
    expect(msg.getMyFixed64() as number).toStrictEqual(123);
    msg.setMySfixed32(123);
    expect(msg.getMySfixed32() as number).toStrictEqual(123);
    msg.setMySfixed64(123);
    expect(msg.getMySfixed64() as number).toStrictEqual(123);
    msg.setMyBool(true);
    expect(msg.getMyBool() as boolean).toStrictEqual(true);
    msg.setMyString("hello world");
    expect(msg.getMyString() as string).toStrictEqual("hello world");
    msg.setMyBytes("AAECAwQFBgcICQ==");
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual("AAECAwQFBgcICQ==");
  });

  it("should allow setting and getting optional primitive fields", () => {
    const msg = new PrimitiveMessageV2();

    expect(msg.hasOptDouble()).toBeFalsy();
    msg.setOptDouble(123);
    expect(msg.hasOptDouble()).toBeTruthy();
    expect(msg.getOptDouble() as number).toStrictEqual(123);

    expect(msg.hasOptFloat()).toBeFalsy();
    msg.setOptFloat(123);
    expect(msg.hasOptFloat()).toBeTruthy();
    expect(msg.getOptFloat() as number).toStrictEqual(123);

    expect(msg.hasOptInt32()).toBeFalsy();
    msg.setOptInt32(123);
    expect(msg.hasOptInt32()).toBeTruthy();
    expect(msg.getOptInt32() as number).toStrictEqual(123);

    expect(msg.hasOptInt64()).toBeFalsy();
    msg.setOptInt64(123);
    expect(msg.hasOptInt64()).toBeTruthy();
    expect(msg.getOptInt64() as number).toStrictEqual(123);

    expect(msg.hasOptUint32()).toBeFalsy();
    msg.setOptUint32(123);
    expect(msg.hasOptUint32()).toBeTruthy();
    expect(msg.getOptUint32() as number).toStrictEqual(123);

    expect(msg.hasOptUint64()).toBeFalsy();
    msg.setOptUint64(123);
    expect(msg.hasOptUint64()).toBeTruthy();
    expect(msg.getOptUint64() as number).toStrictEqual(123);

    expect(msg.hasOptSint32()).toBeFalsy();
    msg.setOptSint32(123);
    expect(msg.hasOptSint32()).toBeTruthy();
    expect(msg.getOptSint32() as number).toStrictEqual(123);

    expect(msg.hasOptSint64()).toBeFalsy();
    msg.setOptSint64(123);
    expect(msg.hasOptSint64()).toBeTruthy();
    expect(msg.getOptSint64() as number).toStrictEqual(123);

    expect(msg.hasOptFixed32()).toBeFalsy();
    msg.setOptFixed32(123);
    expect(msg.hasOptFixed32()).toBeTruthy();
    expect(msg.getOptFixed32() as number).toStrictEqual(123);

    expect(msg.hasOptFixed64()).toBeFalsy();
    msg.setOptFixed64(123);
    expect(msg.hasOptFixed64()).toBeTruthy();
    expect(msg.getOptFixed64() as number).toStrictEqual(123);

    expect(msg.hasOptSfixed32()).toBeFalsy();
    msg.setOptSfixed32(123);
    expect(msg.hasOptSfixed32()).toBeTruthy();
    expect(msg.getOptSfixed32() as number).toStrictEqual(123);

    expect(msg.hasOptSfixed64()).toBeFalsy();
    msg.setOptSfixed64(123);
    expect(msg.hasOptSfixed64()).toBeTruthy();
    expect(msg.getOptSfixed64() as number).toStrictEqual(123);

    expect(msg.hasOptBool()).toBeFalsy();
    msg.setOptBool(true);
    expect(msg.hasOptBool()).toBeTruthy();
    expect(msg.getOptBool() as boolean).toStrictEqual(true);

    expect(msg.hasOptString()).toBeFalsy();
    msg.setOptString("hello world");
    expect(msg.hasOptString()).toBeTruthy();
    expect(msg.getOptString() as string).toStrictEqual("hello world");

    expect(msg.hasOptBytes()).toBeFalsy();
    msg.setOptBytes("AAECAwQFBgcICQ==");
    expect(msg.hasOptBytes()).toBeTruthy();
    expect(msg.getOptBytes() as (Uint8Array|string)).toStrictEqual("AAECAwQFBgcICQ==");
  });

  it("should allow setting and getting required byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg = new PrimitiveMessageV2();

    msg.setMyBytes(asString);
    expect(msg.getMyBytes_asU8() as Uint8Array).toStrictEqual(asUint8Array);
    expect(msg.getMyBytes_asB64() as string).toStrictEqual(asString);
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual(asString);

    msg.setMyBytes(asUint8Array);
    expect(msg.getMyBytes_asB64() as string).toStrictEqual(asString);
    expect(msg.getMyBytes_asU8() as Uint8Array).toStrictEqual(asUint8Array);
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual(asUint8Array);
  });

  it("should allow setting and getting optional byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg = new PrimitiveMessageV2();

    msg.setOptBytes(asString);
    expect(msg.getOptBytes_asU8() as Uint8Array).toStrictEqual(asUint8Array);
    expect(msg.getOptBytes_asB64() as string).toStrictEqual(asString);
    expect(msg.getOptBytes() as (Uint8Array|string)).toStrictEqual(asString);

    msg.setOptBytes(asUint8Array);
    expect(msg.getOptBytes_asB64() as string).toStrictEqual(asString);
    expect(msg.getOptBytes_asU8() as Uint8Array).toStrictEqual(asUint8Array);
    expect(msg.getOptBytes() as (Uint8Array|string)).toStrictEqual(asUint8Array);
  });

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg = new PrimitiveMessageV2();
      const asObject = msg.toObject();
      expect(asObject.myDouble as number).toBeUndefined();
      expect(asObject.myFloat as number).toBeUndefined();
      expect(asObject.myInt32 as number).toBeUndefined();
      expect(asObject.myInt64 as number).toBeUndefined();
      expect(asObject.myUint32 as number).toBeUndefined();
      expect(asObject.myUint64 as number).toBeUndefined();
      expect(asObject.mySint32 as number).toBeUndefined();
      expect(asObject.mySint64 as number).toBeUndefined();
      expect(asObject.myFixed32 as number).toBeUndefined();
      expect(asObject.myFixed64 as number).toBeUndefined();
      expect(asObject.mySfixed32 as number).toBeUndefined();
      expect(asObject.mySfixed64 as number).toBeUndefined();
      expect(asObject.myBool as undefined).toBeUndefined();
      expect(asObject.myString as undefined).toBeUndefined();
      expect(asObject.myBytes as string).toStrictEqual("");

      expect(asObject.optDouble as number).toBeUndefined();
      expect(asObject.optFloat as number).toBeUndefined();
      expect(asObject.optInt32 as number).toBeUndefined();
      expect(asObject.optInt64 as number).toBeUndefined();
      expect(asObject.optUint32 as number).toBeUndefined();
      expect(asObject.optUint64 as number).toBeUndefined();
      expect(asObject.optSint32 as number).toBeUndefined();
      expect(asObject.optSint64 as number).toBeUndefined();
      expect(asObject.optFixed32 as number).toBeUndefined();
      expect(asObject.optFixed64 as number).toBeUndefined();
      expect(asObject.optSfixed32 as number).toBeUndefined();
      expect(asObject.optSfixed64 as number).toBeUndefined();
      expect(asObject.optBool as undefined).toBeUndefined();
      expect(asObject.optString as undefined).toBeUndefined();
      expect(asObject.optBytes as string).toStrictEqual("");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg = new PrimitiveMessageV2();
      const asObject = msg.toObject();
      expect("optNumber" in asObject).toBeTruthy();
    });
  });
});
