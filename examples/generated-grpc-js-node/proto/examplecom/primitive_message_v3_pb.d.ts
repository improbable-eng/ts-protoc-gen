// package: examplecom
// file: proto/examplecom/primitive_message_v3.proto

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

  hasOptDouble(): boolean;
  clearOptDouble(): void;
  getOptDouble(): number;
  setOptDouble(value: number): void;

  hasOptFloat(): boolean;
  clearOptFloat(): void;
  getOptFloat(): number;
  setOptFloat(value: number): void;

  hasOptInt32(): boolean;
  clearOptInt32(): void;
  getOptInt32(): number;
  setOptInt32(value: number): void;

  hasOptInt64(): boolean;
  clearOptInt64(): void;
  getOptInt64(): number;
  setOptInt64(value: number): void;

  hasOptUint32(): boolean;
  clearOptUint32(): void;
  getOptUint32(): number;
  setOptUint32(value: number): void;

  hasOptUint64(): boolean;
  clearOptUint64(): void;
  getOptUint64(): number;
  setOptUint64(value: number): void;

  hasOptSint32(): boolean;
  clearOptSint32(): void;
  getOptSint32(): number;
  setOptSint32(value: number): void;

  hasOptSint64(): boolean;
  clearOptSint64(): void;
  getOptSint64(): number;
  setOptSint64(value: number): void;

  hasOptFixed32(): boolean;
  clearOptFixed32(): void;
  getOptFixed32(): number;
  setOptFixed32(value: number): void;

  hasOptFixed64(): boolean;
  clearOptFixed64(): void;
  getOptFixed64(): number;
  setOptFixed64(value: number): void;

  hasOptSfixed32(): boolean;
  clearOptSfixed32(): void;
  getOptSfixed32(): number;
  setOptSfixed32(value: number): void;

  hasOptSfixed64(): boolean;
  clearOptSfixed64(): void;
  getOptSfixed64(): number;
  setOptSfixed64(value: number): void;

  hasOptBool(): boolean;
  clearOptBool(): void;
  getOptBool(): boolean;
  setOptBool(value: boolean): void;

  hasOptString(): boolean;
  clearOptString(): void;
  getOptString(): string;
  setOptString(value: string): void;

  hasOptBytes(): boolean;
  clearOptBytes(): void;
  getOptBytes(): Uint8Array | string;
  getOptBytes_asU8(): Uint8Array;
  getOptBytes_asB64(): string;
  setOptBytes(value: Uint8Array | string): void;

  hasOptNumber(): boolean;
  clearOptNumber(): void;
  getOptNumber(): number;
  setOptNumber(value: number): void;

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

