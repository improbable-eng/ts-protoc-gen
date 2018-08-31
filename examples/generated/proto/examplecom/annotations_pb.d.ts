// package: examplecom
// file: proto/examplecom/annotations.proto

import * as jspb from "google-protobuf";

export class AnnotatedMessage extends jspb.Message {
  getBigint(): string;
  setBigint(value: string): void;

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
    bigint: string,
  }
}

