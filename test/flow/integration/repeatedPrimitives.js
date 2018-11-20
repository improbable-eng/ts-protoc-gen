// @flow
import { assert } from "chai";
import { RepeatedPrimitiveMessage } from "../../../examples/flow/generated/proto/examplecom/repeated_primitive_message_pb";
import { RepeatedPrimitiveMessage$AsClass } from "../../../examples/flow/generated/proto/examplecom/repeated_primitive_message_pb.flow";

describe("repeated primitives", () => {
  it("should allow getting repeated primitive fields", () => {
    const msg: RepeatedPrimitiveMessage$AsClass = new RepeatedPrimitiveMessage();
    assert.deepEqual((msg.getMyDoubleList(): Array<number>), []);
    assert.deepEqual((msg.getMyFloatList(): Array<number>), []);
    assert.deepEqual((msg.getMyInt32List(): Array<number>), []);
    assert.deepEqual((msg.getMyInt64List(): Array<number>), []);
    assert.deepEqual((msg.getMyUint32List(): Array<number>), []);
    assert.deepEqual((msg.getMyUint64List(): Array<number>), []);
    assert.deepEqual((msg.getMySint32List(): Array<number>), []);
    assert.deepEqual((msg.getMySint64List(): Array<number>), []);
    assert.deepEqual((msg.getMyFixed32List(): Array<number>), []);
    assert.deepEqual((msg.getMyFixed64List(): Array<number>), []);
    assert.deepEqual((msg.getMySfixed32List(): Array<number>), []);
    assert.deepEqual((msg.getMySfixed64List(): Array<number>), []);
    assert.deepEqual((msg.getMyBoolList(): Array<boolean>), []);
    assert.deepEqual((msg.getMyStringList(): Array<string>), []);
    assert.deepEqual((msg.getMyBytesList(): Array<Uint8Array | string>), []);
  });

  it("should allow setting and getting repeated primitive fields", () => {
    const msg: RepeatedPrimitiveMessage$AsClass = new RepeatedPrimitiveMessage();
    msg.setMyDoubleList([123, 456]);
    assert.deepEqual((msg.getMyDoubleList(): Array<number>), [123, 456]);
    msg.setMyFloatList([123, 456]);
    assert.deepEqual((msg.getMyFloatList(): Array<number>), [123, 456]);
    msg.setMyInt32List([123, 456]);
    assert.deepEqual((msg.getMyInt32List(): Array<number>), [123, 456]);
    msg.setMyInt64List([123, 456]);
    assert.deepEqual((msg.getMyInt64List(): Array<number>), [123, 456]);
    msg.setMyUint32List([123, 456]);
    assert.deepEqual((msg.getMyUint32List(): Array<number>), [123, 456]);
    msg.setMyUint64List([123, 456]);
    assert.deepEqual((msg.getMyUint64List(): Array<number>), [123, 456]);
    msg.setMySint32List([123, 456]);
    assert.deepEqual((msg.getMySint32List(): Array<number>), [123, 456]);
    msg.setMySint64List([123, 456]);
    assert.deepEqual((msg.getMySint64List(): Array<number>), [123, 456]);
    msg.setMyFixed32List([123, 456]);
    assert.deepEqual((msg.getMyFixed32List(): Array<number>), [123, 456]);
    msg.setMyFixed64List([123, 456]);
    assert.deepEqual((msg.getMyFixed64List(): Array<number>), [123, 456]);
    msg.setMySfixed32List([123, 456]);
    assert.deepEqual((msg.getMySfixed32List(): Array<number>), [123, 456]);
    msg.setMySfixed64List([123, 456]);
    assert.deepEqual((msg.getMySfixed64List(): Array<number>), [123, 456]);
    msg.setMyBoolList([true, false]);
    assert.deepEqual((msg.getMyBoolList(): Array<boolean>), [true, false]);
    msg.setMyStringList(["one", "two"]);
    assert.deepEqual((msg.getMyStringList(): Array<string>), ["one", "two"]);
    msg.setMyBytesList(["AAECAwQFBgcICQ=="]);
    assert.deepEqual((msg.getMyBytesList(): Array<Uint8Array | string>), [
      "AAECAwQFBgcICQ=="
    ]);
  });

  it("should allow setting and getting byte values", () => {
    const asUint8ArrayOne = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const asUint8ArrayTwo = new Uint8Array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    const asStringOne = "AAECAwQFBgcICQ==";
    const asStringTwo = "CQgHBgUEAwIBAA==";

    const msg: RepeatedPrimitiveMessage$AsClass = new RepeatedPrimitiveMessage();

    msg.setMyBytesList([asUint8ArrayOne, asUint8ArrayTwo]);
    assert.deepEqual((msg.getMyBytesList_asU8(): Array<Uint8Array>), [
      asUint8ArrayOne,
      asUint8ArrayTwo
    ]);
    assert.deepEqual((msg.getMyBytesList_asB64(): Array<string>), [
      asStringOne,
      asStringTwo
    ]);
    const myBytesListA: Array<Uint8Array | string> = msg.getMyBytesList();
    assert.deepEqual(myBytesListA, [asUint8ArrayOne, asUint8ArrayTwo]);

    msg.setMyBytesList([asStringOne, asStringTwo]);
    assert.deepEqual((msg.getMyBytesList_asB64(): Array<string>), [
      asStringOne,
      asStringTwo
    ]);
    assert.deepEqual((msg.getMyBytesList_asU8(): Array<Uint8Array>), [
      asUint8ArrayOne,
      asUint8ArrayTwo
    ]);
    const myBytesListB: Array<Uint8Array | string> = msg.getMyBytesList();
    assert.deepEqual(myBytesListB, [asStringOne, asStringTwo]);
  });
});
