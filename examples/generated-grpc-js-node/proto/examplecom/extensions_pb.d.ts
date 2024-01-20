// package: examplecom
// file: proto/examplecom/extensions.proto

import * as jspb from "google-protobuf";

export class ExtensionMessage extends jspb.Message {
  hasMyExtensionString(): boolean;
  clearMyExtensionString(): ExtensionMessage;
  getMyExtensionString(): string | undefined;
  setMyExtensionString(value: string): ExtensionMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionMessage): ExtensionMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionMessage;
  static deserializeBinaryFromReader(message: ExtensionMessage, reader: jspb.BinaryReader): ExtensionMessage;
}

export namespace ExtensionMessage {
  export type AsObject = {
    myExtensionString?: string,
  }
}

export class MyBase extends jspb.Message {
  hasMyBaseString(): boolean;
  clearMyBaseString(): MyBase;
  getMyBaseString(): string | undefined;
  setMyBaseString(value: string): MyBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyBase.AsObject;
  static toObject(includeInstance: boolean, msg: MyBase): MyBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyBase;
  static deserializeBinaryFromReader(message: MyBase, reader: jspb.BinaryReader): MyBase;
}

export namespace MyBase {
  export type AsObject = {
    myBaseString?: string,
  }
}

  export const myExtensionInt32: jspb.ExtensionFieldInfo<number>;

  export const myExtensionMessage: jspb.ExtensionFieldInfo<ExtensionMessage>;

