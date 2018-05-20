// package: 
// file: orphan.proto

import * as jspb from "google-protobuf";

export class OrphanMapMessage extends jspb.Message {
  getPrimitiveIntsMap(): jspb.Map<string, number>;
  clearPrimitiveIntsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrphanMapMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OrphanMapMessage): OrphanMapMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrphanMapMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrphanMapMessage;
  static deserializeBinaryFromReader(message: OrphanMapMessage, reader: jspb.BinaryReader): OrphanMapMessage;
}

export namespace OrphanMapMessage {
  export type AsObject = {
    primitiveIntsMap: Array<[string, number]>,
  }
}

export class OrphanMessage extends jspb.Message {
  getMyString(): string;
  setMyString(value: string): void;

  getMyBool(): boolean;
  setMyBool(value: boolean): void;

  getMyEnum(): OrphanEnum;
  setMyEnum(value: OrphanEnum): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrphanMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OrphanMessage): OrphanMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrphanMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrphanMessage;
  static deserializeBinaryFromReader(message: OrphanMessage, reader: jspb.BinaryReader): OrphanMessage;
}

export namespace OrphanMessage {
  export type AsObject = {
    myString: string,
    myBool: boolean,
    myEnum: OrphanEnum,
  }
}

export class OrphanUnaryRequest extends jspb.Message {
  getSomeInt64(): number;
  setSomeInt64(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrphanUnaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrphanUnaryRequest): OrphanUnaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrphanUnaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrphanUnaryRequest;
  static deserializeBinaryFromReader(message: OrphanUnaryRequest, reader: jspb.BinaryReader): OrphanUnaryRequest;
}

export namespace OrphanUnaryRequest {
  export type AsObject = {
    someInt64: number,
  }
}

export class OrphanStreamRequest extends jspb.Message {
  getSomeString(): string;
  setSomeString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrphanStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrphanStreamRequest): OrphanStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrphanStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrphanStreamRequest;
  static deserializeBinaryFromReader(message: OrphanStreamRequest, reader: jspb.BinaryReader): OrphanStreamRequest;
}

export namespace OrphanStreamRequest {
  export type AsObject = {
    someString: string,
  }
}

export enum OrphanEnum {
  UNKNOWN = 0,
  ONE = 1,
  TWO = 2,
}

