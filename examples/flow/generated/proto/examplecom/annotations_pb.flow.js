// @flow
// package: examplecom
// file: proto/examplecom/annotations.proto

import * as jspb from "google-protobuf";

export class AnnotatedMessage$AsClass extends jspb.Message {
  getMyunit64: () => string;
  setMyunit64: (value: string) => void;

  getMyint64: () => string;
  setMyint64: (value: string) => void;

  getMyfixed64: () => string;
  setMyfixed64: (value: string) => void;

  getMysint64: () => string;
  setMysint64: (value: string) => void;

  getMysfixed64: () => string;
  setMysfixed64: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => AnnotatedMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: AnnotatedMessage$AsClass) => AnnotatedMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: AnnotatedMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => AnnotatedMessage$AsClass;
  static deserializeBinaryFromReader: (message: AnnotatedMessage$AsClass, reader: jspb.BinaryReader) => AnnotatedMessage$AsClass;
}

export type AnnotatedMessage$AsClass$AsObject = {
  myunit64: string,
  myint64: string,
  myfixed64: string,
  mysint64: string,
  mysfixed64: string,
}

