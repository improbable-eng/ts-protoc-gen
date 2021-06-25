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

  hasOptDouble(): boolean;
  clearOptDouble(): PrimitiveMessageV3;
  getOptDouble(): number;
  setOptDouble(value: number): PrimitiveMessageV3;

  hasOptFloat(): boolean;
  clearOptFloat(): PrimitiveMessageV3;
  getOptFloat(): number;
  setOptFloat(value: number): PrimitiveMessageV3;

  hasOptInt32(): boolean;
  clearOptInt32(): PrimitiveMessageV3;
  getOptInt32(): number;
  setOptInt32(value: number): PrimitiveMessageV3;

  hasOptInt64(): boolean;
  clearOptInt64(): PrimitiveMessageV3;
  getOptInt64(): number;
  setOptInt64(value: number): PrimitiveMessageV3;

  hasOptUint32(): boolean;
  clearOptUint32(): PrimitiveMessageV3;
  getOptUint32(): number;
  setOptUint32(value: number): PrimitiveMessageV3;

  hasOptUint64(): boolean;
  clearOptUint64(): PrimitiveMessageV3;
  getOptUint64(): number;
  setOptUint64(value: number): PrimitiveMessageV3;

  hasOptSint32(): boolean;
  clearOptSint32(): PrimitiveMessageV3;
  getOptSint32(): number;
  setOptSint32(value: number): PrimitiveMessageV3;

  hasOptSint64(): boolean;
  clearOptSint64(): PrimitiveMessageV3;
  getOptSint64(): number;
  setOptSint64(value: number): PrimitiveMessageV3;

  hasOptFixed32(): boolean;
  clearOptFixed32(): PrimitiveMessageV3;
  getOptFixed32(): number;
  setOptFixed32(value: number): PrimitiveMessageV3;

  hasOptFixed64(): boolean;
  clearOptFixed64(): PrimitiveMessageV3;
  getOptFixed64(): number;
  setOptFixed64(value: number): PrimitiveMessageV3;

  hasOptSfixed32(): boolean;
  clearOptSfixed32(): PrimitiveMessageV3;
  getOptSfixed32(): number;
  setOptSfixed32(value: number): PrimitiveMessageV3;

  hasOptSfixed64(): boolean;
  clearOptSfixed64(): PrimitiveMessageV3;
  getOptSfixed64(): number;
  setOptSfixed64(value: number): PrimitiveMessageV3;

  hasOptBool(): boolean;
  clearOptBool(): PrimitiveMessageV3;
  getOptBool(): boolean;
  setOptBool(value: boolean): PrimitiveMessageV3;

  hasOptString(): boolean;
  clearOptString(): PrimitiveMessageV3;
  getOptString(): string;
  setOptString(value: string): PrimitiveMessageV3;

  hasOptBytes(): boolean;
  clearOptBytes(): PrimitiveMessageV3;
  getOptBytes(): Uint8Array | string;
  getOptBytes_asU8(): Uint8Array;
  getOptBytes_asB64(): string;
  setOptBytes(value: Uint8Array | string): PrimitiveMessageV3;

  hasOptNumber(): boolean;
  clearOptNumber(): PrimitiveMessageV3;
  getOptNumber(): number;
  setOptNumber(value: number): PrimitiveMessageV3;

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
    optDouble: number,
    optFloat: number,
    optInt32: number,
    optInt64: number,
    optUint32: number,
    optUint64: number,
    optSint32: number,
    optSint64: number,
    optFixed32: number,
    optFixed64: number,
    optSfixed32: number,
    optSfixed64: number,
    optBool: boolean,
    optString: string,
    optBytes: Uint8Array | string,
    optNumber: number,
  }
}

