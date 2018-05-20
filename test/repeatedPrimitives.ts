import {assert} from "chai";
import {RepeatedPrimitiveMessage} from "../examples/generated/examplecom/repeated_primitive_message_pb";

describe("repeated primitives", () => {
  it("should allow getting repeated primitive fields", () => {
    const msg = new RepeatedPrimitiveMessage();
    assert.deepEqual(msg.getMyDoubleList() as Array<number>, []);
    assert.deepEqual(msg.getMyFloatList() as Array<number>, []);
    assert.deepEqual(msg.getMyInt32List() as Array<number>, []);
    assert.deepEqual(msg.getMyInt64List() as Array<number>, []);
    assert.deepEqual(msg.getMyUint32List() as Array<number>, []);
    assert.deepEqual(msg.getMyUint64List() as Array<number>, []);
    assert.deepEqual(msg.getMySint32List() as Array<number>, []);
    assert.deepEqual(msg.getMySint64List() as Array<number>, []);
    assert.deepEqual(msg.getMyFixed32List() as Array<number>, []);
    assert.deepEqual(msg.getMyFixed64List() as Array<number>, []);
    assert.deepEqual(msg.getMySfixed32List() as Array<number>, []);
    assert.deepEqual(msg.getMySfixed64List() as Array<number>, []);
    assert.deepEqual(msg.getMyBoolList() as Array<boolean>, []);
    assert.deepEqual(msg.getMyStringList() as Array<string>, []);
    assert.deepEqual(msg.getMyBytesList() as Array<Uint8Array|string>, []);
  });

  it("should allow setting and getting repeated primitive fields", () => {
    const msg = new RepeatedPrimitiveMessage();
    msg.setMyDoubleList([123, 456]);
    assert.deepEqual(msg.getMyDoubleList() as Array<number>, [123, 456]);
    msg.setMyFloatList([123, 456]);
    assert.deepEqual(msg.getMyFloatList() as Array<number>, [123, 456]);
    msg.setMyInt32List([123, 456]);
    assert.deepEqual(msg.getMyInt32List() as Array<number>, [123, 456]);
    msg.setMyInt64List([123, 456]);
    assert.deepEqual(msg.getMyInt64List() as Array<number>, [123, 456]);
    msg.setMyUint32List([123, 456]);
    assert.deepEqual(msg.getMyUint32List() as Array<number>, [123, 456]);
    msg.setMyUint64List([123, 456]);
    assert.deepEqual(msg.getMyUint64List() as Array<number>, [123, 456]);
    msg.setMySint32List([123, 456]);
    assert.deepEqual(msg.getMySint32List() as Array<number>, [123, 456]);
    msg.setMySint64List([123, 456]);
    assert.deepEqual(msg.getMySint64List() as Array<number>, [123, 456]);
    msg.setMyFixed32List([123, 456]);
    assert.deepEqual(msg.getMyFixed32List() as Array<number>, [123, 456]);
    msg.setMyFixed64List([123, 456]);
    assert.deepEqual(msg.getMyFixed64List() as Array<number>, [123, 456]);
    msg.setMySfixed32List([123, 456]);
    assert.deepEqual(msg.getMySfixed32List() as Array<number>, [123, 456]);
    msg.setMySfixed64List([123, 456]);
    assert.deepEqual(msg.getMySfixed64List() as Array<number>, [123, 456]);
    msg.setMyBoolList([true, false]);
    assert.deepEqual(msg.getMyBoolList() as Array<boolean>, [true, false]);
    msg.setMyStringList(["one", "two"]);
    assert.deepEqual(msg.getMyStringList() as Array<string>, ["one", "two"]);
    msg.setMyBytesList(["AAECAwQFBgcICQ=="]);
    assert.deepEqual(msg.getMyBytesList() as Array<Uint8Array|string>, ["AAECAwQFBgcICQ=="]);
  });

  it("should allow setting and getting byte values", () => {
    const asUint8ArrayOne = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asUint8ArrayTwo = new Uint8Array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    const asStringOne = "AAECAwQFBgcICQ==";
    const asStringTwo = "CQgHBgUEAwIBAA==";

    const msg = new RepeatedPrimitiveMessage();

    msg.setMyBytesList([asUint8ArrayOne, asUint8ArrayTwo]);
    assert.deepEqual(msg.getMyBytesList_asU8() as Array<Uint8Array>, [asUint8ArrayOne, asUint8ArrayTwo]);
    assert.deepEqual(msg.getMyBytesList_asB64() as Array<string>, [asStringOne, asStringTwo]);
    const myBytesListA: Array<Uint8Array|string> = msg.getMyBytesList();
    assert.deepEqual(myBytesListA, [asUint8ArrayOne, asUint8ArrayTwo]);

    msg.setMyBytesList([asStringOne, asStringTwo]);
    assert.deepEqual(msg.getMyBytesList_asB64() as Array<string>, [asStringOne, asStringTwo]);
    assert.deepEqual(msg.getMyBytesList_asU8() as Array<Uint8Array>, [asUint8ArrayOne, asUint8ArrayTwo]);
    const myBytesListB: Array<Uint8Array|string> = msg.getMyBytesList();
    assert.deepEqual(myBytesListB, [asStringOne, asStringTwo]);
  });
});
