import {PrimitiveMessageV3} from "../../examples/generated/proto/examplecom/primitive_message_v3_pb";

describe("proto3 - primitive", () => {
  it("should allow getting primitive fields", () => {
    const msg = new PrimitiveMessageV3();
    expect(msg.getMyDouble() as number).toStrictEqual( 0);
    expect(msg.getMyFloat() as number).toStrictEqual( 0);
    expect(msg.getMyInt32() as number).toStrictEqual( 0);
    expect(msg.getMyInt64() as number).toStrictEqual( 0);
    expect(msg.getMyUint32() as number).toStrictEqual( 0);
    expect(msg.getMyUint64() as number).toStrictEqual( 0);
    expect(msg.getMySint32() as number).toStrictEqual( 0);
    expect(msg.getMySint64() as number).toStrictEqual( 0);
    expect(msg.getMyFixed32() as number).toStrictEqual( 0);
    expect(msg.getMyFixed64() as number).toStrictEqual( 0);
    expect(msg.getMySfixed32() as number).toStrictEqual( 0);
    expect(msg.getMySfixed64() as number).toStrictEqual( 0);
    expect(msg.getMyBool() as boolean).toStrictEqual(false);
    expect(msg.getMyString() as string).toStrictEqual("");
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual("");
  });

  it("should allow getting optional primitive fields", () => {
    const msg = new PrimitiveMessageV3();
    expect(msg.getOptDouble() as number).toStrictEqual( 0);
    expect(msg.getOptFloat() as number).toStrictEqual( 0);
    expect(msg.getOptInt32() as number).toStrictEqual( 0);
    expect(msg.getOptInt64() as number).toStrictEqual( 0);
    expect(msg.getOptUint32() as number).toStrictEqual( 0);
    expect(msg.getOptUint64() as number).toStrictEqual( 0);
    expect(msg.getOptSint32() as number).toStrictEqual( 0);
    expect(msg.getOptSint64() as number).toStrictEqual( 0);
    expect(msg.getOptFixed32() as number).toStrictEqual( 0);
    expect(msg.getOptFixed64() as number).toStrictEqual( 0);
    expect(msg.getOptSfixed32() as number).toStrictEqual( 0);
    expect(msg.getOptSfixed64() as number).toStrictEqual( 0);
    expect(msg.getOptBool() as boolean).toStrictEqual(false);
    expect(msg.getOptString() as string).toStrictEqual("");
    expect(msg.getOptBytes() as (Uint8Array|string)).toStrictEqual("");
  });

  it("should allow setting and getting primitive fields", () => {
    const msg = new PrimitiveMessageV3();
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
    const msg = new PrimitiveMessageV3();

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

  it("should allow setting and getting byte values", () => {
    const asUint8Array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asString = "AAECAwQFBgcICQ==";

    const msg = new PrimitiveMessageV3();

    msg.setMyBytes(asString);
    expect(msg.getMyBytes_asU8() as Uint8Array).toStrictEqual(asUint8Array);
    expect(msg.getMyBytes_asB64() as string).toStrictEqual(asString);
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual(asString);

    msg.setMyBytes(asUint8Array);
    expect(msg.getMyBytes_asB64() as string).toStrictEqual(asString);
    expect(msg.getMyBytes_asU8() as Uint8Array).toStrictEqual(asUint8Array);
    expect(msg.getMyBytes() as (Uint8Array|string)).toStrictEqual(asUint8Array);
  });

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      expect(asObject.myDouble as number).toStrictEqual( 0);
      expect(asObject.myFloat as number).toStrictEqual( 0);
      expect(asObject.myInt32 as number).toStrictEqual( 0);
      expect(asObject.myInt64 as number).toStrictEqual( 0);
      expect(asObject.myUint32 as number).toStrictEqual( 0);
      expect(asObject.myUint64 as number).toStrictEqual( 0);
      expect(asObject.mySint32 as number).toStrictEqual( 0);
      expect(asObject.mySint64 as number).toStrictEqual( 0);
      expect(asObject.myFixed32 as number).toStrictEqual( 0);
      expect(asObject.myFixed64 as number).toStrictEqual( 0);
      expect(asObject.mySfixed32 as number).toStrictEqual( 0);
      expect(asObject.mySfixed64 as number).toStrictEqual( 0);
      expect(asObject.myBool as boolean).toStrictEqual(false);
      expect(asObject.myString as string).toStrictEqual("");
      expect(asObject.myBytes as (Uint8Array|string)).toStrictEqual("");
      expect(asObject.optDouble).toStrictEqual(0);
      expect(asObject.optFloat).toStrictEqual(0);
      expect(asObject.optInt32).toStrictEqual(0);
      expect(asObject.optInt64).toStrictEqual(0);
      expect(asObject.optUint32).toStrictEqual(0);
      expect(asObject.optUint64).toStrictEqual(0);
      expect(asObject.optSint32).toStrictEqual(0);
      expect(asObject.optSint64).toStrictEqual(0);
      expect(asObject.optFixed32).toStrictEqual(0);
      expect(asObject.optFixed64).toStrictEqual(0);
      expect(asObject.optSfixed32).toStrictEqual(0);
      expect(asObject.optSfixed64).toStrictEqual(0);
      expect(asObject.optBool).toStrictEqual(false);
      expect(asObject.optString).toStrictEqual("");
      expect(asObject.optBytes).toStrictEqual("");
    });
    it("should camelcase fully-capitalized field names", () => {
      const msg = new PrimitiveMessageV3();
      const asObject = msg.toObject();
      expect("myNumber" in asObject).toBeTruthy();
    });
  });
});
