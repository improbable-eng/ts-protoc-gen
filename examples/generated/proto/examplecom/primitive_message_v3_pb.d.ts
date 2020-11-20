// package: examplecom
// file: proto/examplecom/primitive_message_v3.proto

import * as jspb from "google-protobuf";

export class PrimitiveMessageV3 extends jspb.Message {
  getMyDouble(): number;
  setMyDouble(value: number): PrimitiveMessageV3;

  getMyFloat(): number;
  setMyFloat(value: number): PrimitiveMessageV3;

  getMyInt32(): number;
  setMyInt32(value: number): PrimitiveMessageV3;

  getMyInt64(): number;
  setMyInt64(value: number): PrimitiveMessageV3;

  getMyUint32(): number;
  setMyUint32(value: number): PrimitiveMessageV3;

  getMyUint64(): number;
  setMyUint64(value: number): PrimitiveMessageV3;

  getMySint32(): number;
  setMySint32(value: number): PrimitiveMessageV3;

  getMySint64(): number;
  setMySint64(value: number): PrimitiveMessageV3;

  getMyFixed32(): number;
  setMyFixed32(value: number): PrimitiveMessageV3;

  getMyFixed64(): number;
  setMyFixed64(value: number): PrimitiveMessageV3;

  getMySfixed32(): number;
  setMySfixed32(value: number): PrimitiveMessageV3;

  getMySfixed64(): number;
  setMySfixed64(value: number): PrimitiveMessageV3;

  getMyBool(): boolean;
  setMyBool(value: boolean): PrimitiveMessageV3;

  getMyString(): string;
  setMyString(value: string): PrimitiveMessageV3;

  getMyBytes(): Uint8Array | string;
  getMyBytes_asU8(): Uint8Array;
  getMyBytes_asB64(): string;
  setMyBytes(value: Uint8Array | string): PrimitiveMessageV3;

  getMyNumber(): number;
  setMyNumber(value: number): PrimitiveMessageV3;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimitiveMessageV3.AsObject;
  static toObject(includeInstance: boolean, msg: PrimitiveMessageV3): PrimitiveMessageV3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimitiveMessageV3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimitiveMessageV3;
  static deserializeBinaryFromReader(message: PrimitiveMessageV3, reader: jspb.BinaryReader): PrimitiveMessageV3;
}

export namespace PrimitiveMessageV3 {
  export type AsObject = {
    myDouble: number,
    myFloat: number,
    myInt32: number,
    myInt64: number,
    myUint32: number,
    myUint64: number,
    mySint32: number,
    mySint64: number,
    myFixed32: number,
    myFixed64: number,
    mySfixed32: number,
    mySfixed64: number,
    myBool: boolean,
    myString: string,
    myBytes: Uint8Array | string,
    myNumber: number,
  }
}

