// package: examplecom
// file: examplecom/repeated_primitive_message.proto

import * as jspb from "google-protobuf";


export class RepeatedPrimitiveMessage extends jspb.Message {
  clearMyDoubleList(): void;
  getMyDoubleList(): Array<number>;
  setMyDoubleList(value: Array<number>): void;
  addMyDouble(value: number, index?: number): number;

  clearMyFloatList(): void;
  getMyFloatList(): Array<number>;
  setMyFloatList(value: Array<number>): void;
  addMyFloat(value: number, index?: number): number;

  clearMyInt32List(): void;
  getMyInt32List(): Array<number>;
  setMyInt32List(value: Array<number>): void;
  addMyInt32(value: number, index?: number): number;

  clearMyInt64List(): void;
  getMyInt64List(): Array<number>;
  setMyInt64List(value: Array<number>): void;
  addMyInt64(value: number, index?: number): number;

  clearMyUint32List(): void;
  getMyUint32List(): Array<number>;
  setMyUint32List(value: Array<number>): void;
  addMyUint32(value: number, index?: number): number;

  clearMyUint64List(): void;
  getMyUint64List(): Array<number>;
  setMyUint64List(value: Array<number>): void;
  addMyUint64(value: number, index?: number): number;

  clearMySint32List(): void;
  getMySint32List(): Array<number>;
  setMySint32List(value: Array<number>): void;
  addMySint32(value: number, index?: number): number;

  clearMySint64List(): void;
  getMySint64List(): Array<number>;
  setMySint64List(value: Array<number>): void;
  addMySint64(value: number, index?: number): number;

  clearMyFixed32List(): void;
  getMyFixed32List(): Array<number>;
  setMyFixed32List(value: Array<number>): void;
  addMyFixed32(value: number, index?: number): number;

  clearMyFixed64List(): void;
  getMyFixed64List(): Array<number>;
  setMyFixed64List(value: Array<number>): void;
  addMyFixed64(value: number, index?: number): number;

  clearMySfixed32List(): void;
  getMySfixed32List(): Array<number>;
  setMySfixed32List(value: Array<number>): void;
  addMySfixed32(value: number, index?: number): number;

  clearMySfixed64List(): void;
  getMySfixed64List(): Array<number>;
  setMySfixed64List(value: Array<number>): void;
  addMySfixed64(value: number, index?: number): number;

  clearMyBoolList(): void;
  getMyBoolList(): Array<boolean>;
  setMyBoolList(value: Array<boolean>): void;
  addMyBool(value: boolean, index?: number): boolean;

  clearMyStringList(): void;
  getMyStringList(): Array<string>;
  setMyStringList(value: Array<string>): void;
  addMyString(value: string, index?: number): string;

  clearMyBytesList(): void;
  getMyBytesList(): Array<Uint8Array | string>;
  getMyBytesList_asU8(): Array<Uint8Array>;
  getMyBytesList_asB64(): Array<string>;
  setMyBytesList(value: Array<Uint8Array | string>): void;
  addMyBytes(value: Uint8Array | string, index?: number): Uint8Array | string;

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

