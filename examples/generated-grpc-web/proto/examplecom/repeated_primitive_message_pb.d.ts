// package: examplecom
// file: proto/examplecom/repeated_primitive_message.proto

import * as jspb from "google-protobuf";

export class RepeatedPrimitiveMessage extends jspb.Message {
  clearMyDoubleList(): RepeatedPrimitiveMessage;
  getMyDoubleList(): Array<number>;
  setMyDoubleList(value: Array<number>): RepeatedPrimitiveMessage;
  addMyDouble(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyFloatList(): RepeatedPrimitiveMessage;
  getMyFloatList(): Array<number>;
  setMyFloatList(value: Array<number>): RepeatedPrimitiveMessage;
  addMyFloat(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyInt32List(): RepeatedPrimitiveMessage;
  getMyInt32List(): Array<number>;
  setMyInt32List(value: Array<number>): RepeatedPrimitiveMessage;
  addMyInt32(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyInt64List(): RepeatedPrimitiveMessage;
  getMyInt64List(): Array<number>;
  setMyInt64List(value: Array<number>): RepeatedPrimitiveMessage;
  addMyInt64(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyUint32List(): RepeatedPrimitiveMessage;
  getMyUint32List(): Array<number>;
  setMyUint32List(value: Array<number>): RepeatedPrimitiveMessage;
  addMyUint32(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyUint64List(): RepeatedPrimitiveMessage;
  getMyUint64List(): Array<number>;
  setMyUint64List(value: Array<number>): RepeatedPrimitiveMessage;
  addMyUint64(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMySint32List(): RepeatedPrimitiveMessage;
  getMySint32List(): Array<number>;
  setMySint32List(value: Array<number>): RepeatedPrimitiveMessage;
  addMySint32(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMySint64List(): RepeatedPrimitiveMessage;
  getMySint64List(): Array<number>;
  setMySint64List(value: Array<number>): RepeatedPrimitiveMessage;
  addMySint64(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyFixed32List(): RepeatedPrimitiveMessage;
  getMyFixed32List(): Array<number>;
  setMyFixed32List(value: Array<number>): RepeatedPrimitiveMessage;
  addMyFixed32(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyFixed64List(): RepeatedPrimitiveMessage;
  getMyFixed64List(): Array<number>;
  setMyFixed64List(value: Array<number>): RepeatedPrimitiveMessage;
  addMyFixed64(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMySfixed32List(): RepeatedPrimitiveMessage;
  getMySfixed32List(): Array<number>;
  setMySfixed32List(value: Array<number>): RepeatedPrimitiveMessage;
  addMySfixed32(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMySfixed64List(): RepeatedPrimitiveMessage;
  getMySfixed64List(): Array<number>;
  setMySfixed64List(value: Array<number>): RepeatedPrimitiveMessage;
  addMySfixed64(value: number, index?: number): RepeatedPrimitiveMessage;

  clearMyBoolList(): RepeatedPrimitiveMessage;
  getMyBoolList(): Array<boolean>;
  setMyBoolList(value: Array<boolean>): RepeatedPrimitiveMessage;
  addMyBool(value: boolean, index?: number): RepeatedPrimitiveMessage;

  clearMyStringList(): RepeatedPrimitiveMessage;
  getMyStringList(): Array<string>;
  setMyStringList(value: Array<string>): RepeatedPrimitiveMessage;
  addMyString(value: string, index?: number): RepeatedPrimitiveMessage;

  clearMyBytesList(): RepeatedPrimitiveMessage;
  getMyBytesList(): Array<Uint8Array | string>;
  getMyBytesList_asU8(): Array<Uint8Array>;
  getMyBytesList_asB64(): Array<string>;
  setMyBytesList(value: Array<Uint8Array | string>): RepeatedPrimitiveMessage;
  addMyBytes(value: Uint8Array | string, index?: number): RepeatedPrimitiveMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepeatedPrimitiveMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RepeatedPrimitiveMessage): RepeatedPrimitiveMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepeatedPrimitiveMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepeatedPrimitiveMessage;
  static deserializeBinaryFromReader(message: RepeatedPrimitiveMessage, reader: jspb.BinaryReader): RepeatedPrimitiveMessage;
}

export namespace RepeatedPrimitiveMessage {
  export type AsObject = {
    myDoubleList: Array<number>,
    myFloatList: Array<number>,
    myInt32List: Array<number>,
    myInt64List: Array<number>,
    myUint32List: Array<number>,
    myUint64List: Array<number>,
    mySint32List: Array<number>,
    mySint64List: Array<number>,
    myFixed32List: Array<number>,
    myFixed64List: Array<number>,
    mySfixed32List: Array<number>,
    mySfixed64List: Array<number>,
    myBoolList: Array<boolean>,
    myStringList: Array<string>,
    myBytesList: Array<Uint8Array | string>,
  }
}

