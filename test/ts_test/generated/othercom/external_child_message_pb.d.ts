// package: othercom
// file: othercom/external_child_message.proto

import * as jspb from "google-protobuf";


export class ExternalChildMessage extends jspb.Message {
  getMyString(): string;
  setMyString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalChildMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalChildMessage): ExternalChildMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalChildMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalChildMessage;
  static deserializeBinaryFromReader(message: ExternalChildMessage, reader: jspb.BinaryReader): ExternalChildMessage;
}

export namespace ExternalChildMessage {
  export type AsObject = {
    myString: string,
  }
}

