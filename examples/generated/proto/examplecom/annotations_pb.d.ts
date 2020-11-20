// package: examplecom
// file: proto/examplecom/annotations.proto

import * as jspb from "google-protobuf";

export class AnnotatedMessage extends jspb.Message {
  getMyunit64(): string;
  setMyunit64(value: string): AnnotatedMessage;

  getMyint64(): string;
  setMyint64(value: string): AnnotatedMessage;

  getMyfixed64(): string;
  setMyfixed64(value: string): AnnotatedMessage;

  getMysint64(): string;
  setMysint64(value: string): AnnotatedMessage;

  getMysfixed64(): string;
  setMysfixed64(value: string): AnnotatedMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotatedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotatedMessage): AnnotatedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnnotatedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotatedMessage;
  static deserializeBinaryFromReader(message: AnnotatedMessage, reader: jspb.BinaryReader): AnnotatedMessage;
}

export namespace AnnotatedMessage {
  export type AsObject = {
    myunit64: string,
    myint64: string,
    myfixed64: string,
    mysint64: string,
    mysfixed64: string,
  }
}

