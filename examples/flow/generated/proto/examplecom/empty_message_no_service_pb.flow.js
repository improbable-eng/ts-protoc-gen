// @flow
// package: examplecom
// file: proto/examplecom/empty_message_no_service.proto

import * as jspb from "google-protobuf";

export class NoService$AsClass extends jspb.Message {
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => NoService$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: NoService$AsClass) => NoService$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: NoService$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => NoService$AsClass;
  static deserializeBinaryFromReader: (message: NoService$AsClass, reader: jspb.BinaryReader) => NoService$AsClass;
}

export type NoService$AsClass$AsObject = {
}

