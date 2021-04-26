// package: examplecom
// file: proto/examplecom/getter_name.proto

import * as jspb from "google-protobuf";

export class GetterNameConflictMessage extends jspb.Message {
  hasExtension$(): boolean;
  clearExtension(): void;
  getExtension$(): string | undefined;
  setExtension$(value: string): void;

  hasJsPbMessageId$(): boolean;
  clearJsPbMessageId(): void;
  getJsPbMessageId$(): Uint8Array | string;
  getJsPbMessageId_asU8(): Uint8Array;
  getJsPbMessageId_asB64(): string;
  setJsPbMessageId$(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetterNameConflictMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GetterNameConflictMessage): GetterNameConflictMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetterNameConflictMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetterNameConflictMessage;
  static deserializeBinaryFromReader(message: GetterNameConflictMessage, reader: jspb.BinaryReader): GetterNameConflictMessage;
}

export namespace GetterNameConflictMessage {
  export type AsObject = {
    extension?: string,
    jsPbMessageId: Uint8Array | string,
  }
}

