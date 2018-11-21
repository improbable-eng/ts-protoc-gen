// @flow
// package: 
// file: proto/orphan.proto

import * as jspb from "google-protobuf";

export class OrphanMapMessage$AsClass extends jspb.Message {
  getPrimitiveIntsMap: () => jspb.Map<string, number>;
  clearPrimitiveIntsMap: () => void;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => OrphanMapMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: OrphanMapMessage$AsClass) => OrphanMapMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: OrphanMapMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => OrphanMapMessage$AsClass;
  static deserializeBinaryFromReader: (message: OrphanMapMessage$AsClass, reader: jspb.BinaryReader) => OrphanMapMessage$AsClass;
}

export type OrphanMapMessage$AsClass$AsObject = {
  primitiveIntsMap: Array<[string, number]>,
}

export class OrphanMessage$AsClass extends jspb.Message {
  getMyString: () => string;
  setMyString: (value: string) => void;

  getMyBool: () => boolean;
  setMyBool: (value: boolean) => void;

  getMyEnum: () => $Values<typeof OrphanEnum>;
  setMyEnum: (value: $Values<typeof OrphanEnum>) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => OrphanMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: OrphanMessage$AsClass) => OrphanMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: OrphanMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => OrphanMessage$AsClass;
  static deserializeBinaryFromReader: (message: OrphanMessage$AsClass, reader: jspb.BinaryReader) => OrphanMessage$AsClass;
}

export type OrphanMessage$AsClass$AsObject = {
  myString: string,
  myBool: boolean,
  myEnum: $Values<typeof OrphanEnum>,
}

export class OrphanUnaryRequest$AsClass extends jspb.Message {
  getSomeInt64: () => number;
  setSomeInt64: (value: number) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => OrphanUnaryRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: OrphanUnaryRequest$AsClass) => OrphanUnaryRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: OrphanUnaryRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => OrphanUnaryRequest$AsClass;
  static deserializeBinaryFromReader: (message: OrphanUnaryRequest$AsClass, reader: jspb.BinaryReader) => OrphanUnaryRequest$AsClass;
}

export type OrphanUnaryRequest$AsClass$AsObject = {
  someInt64: number,
}

export class OrphanStreamRequest$AsClass extends jspb.Message {
  getSomeString: () => string;
  setSomeString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => OrphanStreamRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: OrphanStreamRequest$AsClass) => OrphanStreamRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: OrphanStreamRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => OrphanStreamRequest$AsClass;
  static deserializeBinaryFromReader: (message: OrphanStreamRequest$AsClass, reader: jspb.BinaryReader) => OrphanStreamRequest$AsClass;
}

export type OrphanStreamRequest$AsClass$AsObject = {
  someString: string,
}

export const OrphanEnum = Object.freeze({
  UNKNOWN: 0,
  ONE: 1,
  TWO: 2,
})

export const OrphanEnum$ReverseLookUp = Object.freeze({
  "0": "UNKNOWN",
  "1": "ONE",
  "2": "TWO",
})

