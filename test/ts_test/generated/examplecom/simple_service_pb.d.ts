// package: examplecom
// file: examplecom/simple_service.proto

import * as jspb from "google-protobuf";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";


export class UnaryRequest extends jspb.Message {
  getSomeInt64(): number;
  setSomeInt64(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnaryRequest): UnaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnaryRequest;
  static deserializeBinaryFromReader(message: UnaryRequest, reader: jspb.BinaryReader): UnaryRequest;
}

export namespace UnaryRequest {
  export type AsObject = {
    someInt64: number,
  }
}

export class StreamRequest extends jspb.Message {
  getSomeString(): string;
  setSomeString(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    someString: string,
  }
}

