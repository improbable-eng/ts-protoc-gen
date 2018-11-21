// @flow
// package: examplecom
// file: proto/examplecom/oneof_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";

export class OneOfMessage$AsClass extends jspb.Message {
  hasInternalChildMessage: () => boolean;
  clearInternalChildMessage: () => void;
  getInternalChildMessage: () => ?OneOfMessage$AsClass_InternalChildMessage$AsClass;
  setInternalChildMessage: (value?: OneOfMessage$AsClass_InternalChildMessage$AsClass) => void;

  hasExternalChildMessage: () => boolean;
  clearExternalChildMessage: () => void;
  getExternalChildMessage: () => ?proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass;
  setExternalChildMessage: (value?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass) => void;

  hasMyString: () => boolean;
  clearMyString: () => void;
  getMyString: () => string;
  setMyString: (value: string) => void;

  hasMyInt64: () => boolean;
  clearMyInt64: () => void;
  getMyInt64: () => number;
  setMyInt64: (value: number) => void;

  getGroupCase: () => $Values<typeof OneOfMessage$AsClass_GroupCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => OneOfMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: OneOfMessage$AsClass) => OneOfMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: OneOfMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => OneOfMessage$AsClass;
  static deserializeBinaryFromReader: (message: OneOfMessage$AsClass, reader: jspb.BinaryReader) => OneOfMessage$AsClass;
}

export type OneOfMessage$AsClass$AsObject = {
  internalChildMessage?: OneOfMessage$AsClass_InternalChildMessage$AsClass$AsObject,
  externalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject,
  myString: string,
  myInt64: number,
}

export class OneOfMessage$AsClass_InternalChildMessage$AsClass extends jspb.Message {
  getMyString: () => string;
  setMyString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => OneOfMessage$AsClass_InternalChildMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: OneOfMessage$AsClass_InternalChildMessage$AsClass) => OneOfMessage$AsClass_InternalChildMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: OneOfMessage$AsClass_InternalChildMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => OneOfMessage$AsClass_InternalChildMessage$AsClass;
  static deserializeBinaryFromReader: (message: OneOfMessage$AsClass_InternalChildMessage$AsClass, reader: jspb.BinaryReader) => OneOfMessage$AsClass_InternalChildMessage$AsClass;
}

export type OneOfMessage$AsClass_InternalChildMessage$AsClass$AsObject = {
  myString: string,
}

export const OneOfMessage$AsClass_GroupCase = {
  GROUP_NOT_SET: 0,
  INTERNAL_CHILD_MESSAGE: 1,
  EXTERNAL_CHILD_MESSAGE: 2,
  MY_STRING: 3,
  MY_INT64: 4,
}

export class CamelCasedOneOfMessage$AsClass extends jspb.Message {
  hasAnint: () => boolean;
  clearAnint: () => void;
  getAnint: () => number;
  setAnint: (value: number) => void;

  hasThestring: () => boolean;
  clearThestring: () => void;
  getThestring: () => string;
  setThestring: (value: string) => void;

  getCamelcasedmessageCase: () => $Values<typeof CamelCasedOneOfMessage$AsClass_CamelcasedmessageCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => CamelCasedOneOfMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: CamelCasedOneOfMessage$AsClass) => CamelCasedOneOfMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: CamelCasedOneOfMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => CamelCasedOneOfMessage$AsClass;
  static deserializeBinaryFromReader: (message: CamelCasedOneOfMessage$AsClass, reader: jspb.BinaryReader) => CamelCasedOneOfMessage$AsClass;
}

export type CamelCasedOneOfMessage$AsClass$AsObject = {
  anint: number,
  thestring: string,
}

export const CamelCasedOneOfMessage$AsClass_CamelcasedmessageCase = {
  CAMELCASEDMESSAGE_NOT_SET: 0,
  ANINT: 1,
  THESTRING: 2,
}

export class SnakeCasedOneOfMessage$AsClass extends jspb.Message {
  hasAnint: () => boolean;
  clearAnint: () => void;
  getAnint: () => number;
  setAnint: (value: number) => void;

  hasThestring: () => boolean;
  clearThestring: () => void;
  getThestring: () => string;
  setThestring: (value: string) => void;

  getSnakeCasedMessageCase: () => $Values<typeof SnakeCasedOneOfMessage$AsClass_SnakeCasedMessageCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SnakeCasedOneOfMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SnakeCasedOneOfMessage$AsClass) => SnakeCasedOneOfMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SnakeCasedOneOfMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SnakeCasedOneOfMessage$AsClass;
  static deserializeBinaryFromReader: (message: SnakeCasedOneOfMessage$AsClass, reader: jspb.BinaryReader) => SnakeCasedOneOfMessage$AsClass;
}

export type SnakeCasedOneOfMessage$AsClass$AsObject = {
  anint: number,
  thestring: string,
}

export const SnakeCasedOneOfMessage$AsClass_SnakeCasedMessageCase = {
  SNAKE_CASED_MESSAGE_NOT_SET: 0,
  ANINT: 1,
  THESTRING: 2,
}

