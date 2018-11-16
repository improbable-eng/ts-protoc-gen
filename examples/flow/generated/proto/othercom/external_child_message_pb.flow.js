// @flow
// package: othercom
// file: proto/othercom/external_child_message.proto

import * as jspb from "google-protobuf";

export class ExternalChildMessage$AsClass extends jspb.Message {
  getMyString: () => string;
  setMyString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ExternalChildMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ExternalChildMessage$AsClass) => ExternalChildMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ExternalChildMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ExternalChildMessage$AsClass;
  static deserializeBinaryFromReader: (message: ExternalChildMessage$AsClass, reader: jspb.BinaryReader) => ExternalChildMessage$AsClass;
}

export type ExternalChildMessage$AsClass$AsObject = {
  myString: string,
}

