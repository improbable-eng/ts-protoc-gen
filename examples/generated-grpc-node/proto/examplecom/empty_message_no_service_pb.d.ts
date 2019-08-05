// package: examplecom
// file: proto/examplecom/empty_message_no_service.proto

import * as jspb from "google-protobuf";

export class NoService extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoService.AsObject;
  static toObject(includeInstance: boolean, msg: NoService): NoService.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoService;
  static deserializeBinaryFromReader(message: NoService, reader: jspb.BinaryReader): NoService;
}

export namespace NoService {
  export type AsObject = {
  }
}

