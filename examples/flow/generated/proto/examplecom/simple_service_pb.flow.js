// @flow
// package: examplecom
// file: proto/examplecom/simple_service.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class UnaryRequest$AsClass extends jspb.Message {
  getSomeInt64: () => number;
  setSomeInt64: (value: number) => void;

  hasSomeTimestamp: () => boolean;
  clearSomeTimestamp: () => void;
  getSomeTimestamp: () => ?google_protobuf_timestamp_pb.Timestamp$AsClass;
  setSomeTimestamp: (value?: google_protobuf_timestamp_pb.Timestamp$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => UnaryRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: UnaryRequest$AsClass) => UnaryRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: UnaryRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => UnaryRequest$AsClass;
  static deserializeBinaryFromReader: (message: UnaryRequest$AsClass, reader: jspb.BinaryReader) => UnaryRequest$AsClass;
}

export type UnaryRequest$AsClass$AsObject = {
  someInt64: number,
  someTimestamp?: google_protobuf_timestamp_pb.Timestamp$AsClass$AsObject,
}

export class UnaryResponse$AsClass extends jspb.Message {
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => UnaryResponse$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: UnaryResponse$AsClass) => UnaryResponse$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: UnaryResponse$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => UnaryResponse$AsClass;
  static deserializeBinaryFromReader: (message: UnaryResponse$AsClass, reader: jspb.BinaryReader) => UnaryResponse$AsClass;
}

export type UnaryResponse$AsClass$AsObject = {
}

export class StreamRequest$AsClass extends jspb.Message {
  getSomeString: () => string;
  setSomeString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => StreamRequest$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: StreamRequest$AsClass) => StreamRequest$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: StreamRequest$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => StreamRequest$AsClass;
  static deserializeBinaryFromReader: (message: StreamRequest$AsClass, reader: jspb.BinaryReader) => StreamRequest$AsClass;
}

export type StreamRequest$AsClass$AsObject = {
  someString: string,
}

