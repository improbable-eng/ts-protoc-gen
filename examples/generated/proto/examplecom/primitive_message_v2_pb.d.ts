// package: examplecom
// file: proto/examplecom/primitive_message_v2.proto

import * as jspb from "google-protobuf";

export class PrimitiveMessageV2 extends jspb.Message {
  hasMyDouble(): boolean;
  clearMyDouble(): PrimitiveMessageV2;
  getMyDouble(): number | undefined;
  setMyDouble(value: number): PrimitiveMessageV2;

  hasMyFloat(): boolean;
  clearMyFloat(): PrimitiveMessageV2;
  getMyFloat(): number | undefined;
  setMyFloat(value: number): PrimitiveMessageV2;

  hasMyInt32(): boolean;
  clearMyInt32(): PrimitiveMessageV2;
  getMyInt32(): number | undefined;
  setMyInt32(value: number): PrimitiveMessageV2;

  hasMyInt64(): boolean;
  clearMyInt64(): PrimitiveMessageV2;
  getMyInt64(): number | undefined;
  setMyInt64(value: number): PrimitiveMessageV2;

  hasMyUint32(): boolean;
  clearMyUint32(): PrimitiveMessageV2;
  getMyUint32(): number | undefined;
  setMyUint32(value: number): PrimitiveMessageV2;

  hasMyUint64(): boolean;
  clearMyUint64(): PrimitiveMessageV2;
  getMyUint64(): number | undefined;
  setMyUint64(value: number): PrimitiveMessageV2;

  hasMySint32(): boolean;
  clearMySint32(): PrimitiveMessageV2;
  getMySint32(): number | undefined;
  setMySint32(value: number): PrimitiveMessageV2;

  hasMySint64(): boolean;
  clearMySint64(): PrimitiveMessageV2;
  getMySint64(): number | undefined;
  setMySint64(value: number): PrimitiveMessageV2;

  hasMyFixed32(): boolean;
  clearMyFixed32(): PrimitiveMessageV2;
  getMyFixed32(): number | undefined;
  setMyFixed32(value: number): PrimitiveMessageV2;

  hasMyFixed64(): boolean;
  clearMyFixed64(): PrimitiveMessageV2;
  getMyFixed64(): number | undefined;
  setMyFixed64(value: number): PrimitiveMessageV2;

  hasMySfixed32(): boolean;
  clearMySfixed32(): PrimitiveMessageV2;
  getMySfixed32(): number | undefined;
  setMySfixed32(value: number): PrimitiveMessageV2;

  hasMySfixed64(): boolean;
  clearMySfixed64(): PrimitiveMessageV2;
  getMySfixed64(): number | undefined;
  setMySfixed64(value: number): PrimitiveMessageV2;

  hasMyBool(): boolean;
  clearMyBool(): PrimitiveMessageV2;
  getMyBool(): boolean | undefined;
  setMyBool(value: boolean): PrimitiveMessageV2;

  hasMyString(): boolean;
  clearMyString(): PrimitiveMessageV2;
  getMyString(): string | undefined;
  setMyString(value: string): PrimitiveMessageV2;

  hasMyBytes(): boolean;
  clearMyBytes(): PrimitiveMessageV2;
  getMyBytes(): Uint8Array | string;
  getMyBytes_asU8(): Uint8Array;
  getMyBytes_asB64(): string;
  setMyBytes(value: Uint8Array | string): PrimitiveMessageV2;

  hasOptDouble(): boolean;
  clearOptDouble(): PrimitiveMessageV2;
  getOptDouble(): number | undefined;
  setOptDouble(value: number): PrimitiveMessageV2;

  hasOptFloat(): boolean;
  clearOptFloat(): PrimitiveMessageV2;
  getOptFloat(): number | undefined;
  setOptFloat(value: number): PrimitiveMessageV2;

  hasOptInt32(): boolean;
  clearOptInt32(): PrimitiveMessageV2;
  getOptInt32(): number | undefined;
  setOptInt32(value: number): PrimitiveMessageV2;

  hasOptInt64(): boolean;
  clearOptInt64(): PrimitiveMessageV2;
  getOptInt64(): number | undefined;
  setOptInt64(value: number): PrimitiveMessageV2;

  hasOptUint32(): boolean;
  clearOptUint32(): PrimitiveMessageV2;
  getOptUint32(): number | undefined;
  setOptUint32(value: number): PrimitiveMessageV2;

  hasOptUint64(): boolean;
  clearOptUint64(): PrimitiveMessageV2;
  getOptUint64(): number | undefined;
  setOptUint64(value: number): PrimitiveMessageV2;

  hasOptSint32(): boolean;
  clearOptSint32(): PrimitiveMessageV2;
  getOptSint32(): number | undefined;
  setOptSint32(value: number): PrimitiveMessageV2;

  hasOptSint64(): boolean;
  clearOptSint64(): PrimitiveMessageV2;
  getOptSint64(): number | undefined;
  setOptSint64(value: number): PrimitiveMessageV2;

  hasOptFixed32(): boolean;
  clearOptFixed32(): PrimitiveMessageV2;
  getOptFixed32(): number | undefined;
  setOptFixed32(value: number): PrimitiveMessageV2;

  hasOptFixed64(): boolean;
  clearOptFixed64(): PrimitiveMessageV2;
  getOptFixed64(): number | undefined;
  setOptFixed64(value: number): PrimitiveMessageV2;

  hasOptSfixed32(): boolean;
  clearOptSfixed32(): PrimitiveMessageV2;
  getOptSfixed32(): number | undefined;
  setOptSfixed32(value: number): PrimitiveMessageV2;

  hasOptSfixed64(): boolean;
  clearOptSfixed64(): PrimitiveMessageV2;
  getOptSfixed64(): number | undefined;
  setOptSfixed64(value: number): PrimitiveMessageV2;

  hasOptBool(): boolean;
  clearOptBool(): PrimitiveMessageV2;
  getOptBool(): boolean | undefined;
  setOptBool(value: boolean): PrimitiveMessageV2;

  hasOptString(): boolean;
  clearOptString(): PrimitiveMessageV2;
  getOptString(): string | undefined;
  setOptString(value: string): PrimitiveMessageV2;

  hasOptBytes(): boolean;
  clearOptBytes(): PrimitiveMessageV2;
  getOptBytes(): Uint8Array | string;
  getOptBytes_asU8(): Uint8Array;
  getOptBytes_asB64(): string;
  setOptBytes(value: Uint8Array | string): PrimitiveMessageV2;

  hasOptNumber(): boolean;
  clearOptNumber(): PrimitiveMessageV2;
  getOptNumber(): number | undefined;
  setOptNumber(value: number): PrimitiveMessageV2;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimitiveMessageV2.AsObject;
  static toObject(includeInstance: boolean, msg: PrimitiveMessageV2): PrimitiveMessageV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimitiveMessageV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimitiveMessageV2;
  static deserializeBinaryFromReader(message: PrimitiveMessageV2, reader: jspb.BinaryReader): PrimitiveMessageV2;
}

export namespace PrimitiveMessageV2 {
  export type AsObject = {
    myDouble?: number,
    myFloat?: number,
    myInt32?: number,
    myInt64?: number,
    myUint32?: number,
    myUint64?: number,
    mySint32?: number,
    mySint64?: number,
    myFixed32?: number,
    myFixed64?: number,
    mySfixed32?: number,
    mySfixed64?: number,
    myBool?: boolean,
    myString?: string,
    myBytes: Uint8Array | string,
    optDouble?: number,
    optFloat?: number,
    optInt32?: number,
    optInt64?: number,
    optUint32?: number,
    optUint64?: number,
    optSint32?: number,
    optSint64?: number,
    optFixed32?: number,
    optFixed64?: number,
    optSfixed32?: number,
    optSfixed64?: number,
    optBool?: boolean,
    optString?: string,
    optBytes: Uint8Array | string,
    optNumber?: number,
  }
}

