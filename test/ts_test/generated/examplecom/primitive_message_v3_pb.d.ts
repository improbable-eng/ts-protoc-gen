// package: examplecom
// file: examplecom/primitive_message_v3.proto

import * as jspb from "google-protobuf";


export class PrimitiveMessageV3 extends jspb.Message {
  getMyDouble(): number;
  setMyDouble(value: number): void;

  getMyFloat(): number;
  setMyFloat(value: number): void;

  getMyInt32(): number;
  setMyInt32(value: number): void;

  getMyInt64(): number;
  setMyInt64(value: number): void;

  getMyUint32(): number;
  setMyUint32(value: number): void;

  getMyUint64(): number;
  setMyUint64(value: number): void;

  getMySint32(): number;
  setMySint32(value: number): void;

  getMySint64(): number;
  setMySint64(value: number): void;

  getMyFixed32(): number;
  setMyFixed32(value: number): void;

  getMyFixed64(): number;
  setMyFixed64(value: number): void;

  getMySfixed32(): number;
  setMySfixed32(value: number): void;

  getMySfixed64(): number;
  setMySfixed64(value: number): void;

  getMyBool(): boolean;
  setMyBool(value: boolean): void;

  getMyString(): string;
  setMyString(value: string): void;

  getMyBytes(): Uint8Array | string;
  getMyBytes_asU8(): Uint8Array;
  getMyBytes_asB64(): string;
  setMyBytes(value: Uint8Array | string): void;

  getMyNumber(): number;
  setMyNumber(value: number): void;

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

