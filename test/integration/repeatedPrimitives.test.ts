import {RepeatedPrimitiveMessage} from "../../examples/generated/proto/examplecom/repeated_primitive_message_pb";

describe("repeated primitives", () => {
  it("should allow getting repeated primitive fields", () => {
    const msg = new RepeatedPrimitiveMessage();
    expect(msg.getMyDoubleList() as Array<number>).toStrictEqual( []);
    expect(msg.getMyFloatList() as Array<number>).toStrictEqual( []);
    expect(msg.getMyInt32List() as Array<number>).toStrictEqual( []);
    expect(msg.getMyInt64List() as Array<number>).toStrictEqual( []);
    expect(msg.getMyUint32List() as Array<number>).toStrictEqual( []);
    expect(msg.getMyUint64List() as Array<number>).toStrictEqual( []);
    expect(msg.getMySint32List() as Array<number>).toStrictEqual( []);
    expect(msg.getMySint64List() as Array<number>).toStrictEqual( []);
    expect(msg.getMyFixed32List() as Array<number>).toStrictEqual( []);
    expect(msg.getMyFixed64List() as Array<number>).toStrictEqual( []);
    expect(msg.getMySfixed32List() as Array<number>).toStrictEqual( []);
    expect(msg.getMySfixed64List() as Array<number>).toStrictEqual( []);
    expect(msg.getMyBoolList() as Array<boolean>).toStrictEqual( []);
    expect(msg.getMyStringList() as Array<string>).toStrictEqual( []);
    expect(msg.getMyBytesList() as Array<Uint8Array|string>).toStrictEqual( []);
  });

  it("should allow setting and getting repeated primitive fields", () => {
    const msg = new RepeatedPrimitiveMessage();
    msg.setMyDoubleList([123, 456]);
    expect(msg.getMyDoubleList() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyFloatList([123, 456]);
    expect(msg.getMyFloatList() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyInt32List([123, 456]);
    expect(msg.getMyInt32List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyInt64List([123, 456]);
    expect(msg.getMyInt64List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyUint32List([123, 456]);
    expect(msg.getMyUint32List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyUint64List([123, 456]);
    expect(msg.getMyUint64List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMySint32List([123, 456]);
    expect(msg.getMySint32List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMySint64List([123, 456]);
    expect(msg.getMySint64List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyFixed32List([123, 456]);
    expect(msg.getMyFixed32List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyFixed64List([123, 456]);
    expect(msg.getMyFixed64List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMySfixed32List([123, 456]);
    expect(msg.getMySfixed32List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMySfixed64List([123, 456]);
    expect(msg.getMySfixed64List() as Array<number>).toStrictEqual([123, 456]);
    msg.setMyBoolList([true, false]);
    expect(msg.getMyBoolList() as Array<boolean>).toStrictEqual([true, false]);
    msg.setMyStringList(["one", "two"]);
    expect(msg.getMyStringList() as Array<string>).toStrictEqual(["one", "two"]);
    msg.setMyBytesList(["AAECAwQFBgcICQ=="]);
    expect(msg.getMyBytesList() as Array<Uint8Array|string>).toStrictEqual(["AAECAwQFBgcICQ=="]);
  });

  it("should allow setting and getting byte values", () => {
    const asUint8ArrayOne = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asUint8ArrayTwo = new Uint8Array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    const asStringOne = "AAECAwQFBgcICQ==";
    const asStringTwo = "CQgHBgUEAwIBAA==";

    const msg = new RepeatedPrimitiveMessage();

    msg.setMyBytesList([asUint8ArrayOne, asUint8ArrayTwo]);
    expect(msg.getMyBytesList_asU8() as Array<Uint8Array>).toStrictEqual([asUint8ArrayOne, asUint8ArrayTwo]);
    expect(msg.getMyBytesList_asB64() as Array<string>).toStrictEqual([asStringOne, asStringTwo]);
    const myBytesListA: Array<Uint8Array|string> = msg.getMyBytesList();
    expect(myBytesListA).toStrictEqual([asUint8ArrayOne, asUint8ArrayTwo]);

    msg.setMyBytesList([asStringOne, asStringTwo]);
    expect(msg.getMyBytesList_asB64() as Array<string>).toStrictEqual([asStringOne, asStringTwo]);
    expect(msg.getMyBytesList_asU8() as Array<Uint8Array>).toStrictEqual([asUint8ArrayOne, asUint8ArrayTwo]);
    const myBytesListB: Array<Uint8Array|string> = msg.getMyBytesList();
    expect(myBytesListB).toStrictEqual([asStringOne, asStringTwo]);
  });
});
