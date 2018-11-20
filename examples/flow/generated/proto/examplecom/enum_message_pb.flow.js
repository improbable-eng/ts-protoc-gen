// @flow
// package: examplecom
// file: proto/examplecom/enum_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb.flow.js";

export class EnumMessage$AsClass extends jspb.Message {
  getInternalEnum: () => $Values<typeof EnumMessage$AsClass$InternalEnum>;
  setInternalEnum: (value: $Values<typeof EnumMessage$AsClass$InternalEnum>) => void;

  clearInternalEnumsList: () => void;
  getInternalEnumsList: () => Array<$Values<typeof EnumMessage$AsClass$InternalEnum>>;
  setInternalEnumsList: (value: Array<$Values<typeof EnumMessage$AsClass$InternalEnum>>) => void;
  addInternalEnums: (value: $Values<typeof EnumMessage$AsClass$InternalEnum>, index?: number) => $Values<typeof EnumMessage$AsClass$InternalEnum>;

  getExternalEnum: () => $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>;
  setExternalEnum: (value: $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>) => void;

  clearExternalEnumsList: () => void;
  getExternalEnumsList: () => Array<$Values<typeof proto_othercom_external_enum_pb.ExternalEnum>>;
  setExternalEnumsList: (value: Array<$Values<typeof proto_othercom_external_enum_pb.ExternalEnum>>) => void;
  addExternalEnums: (value: $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>, index?: number) => $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => EnumMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: EnumMessage$AsClass) => EnumMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: EnumMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => EnumMessage$AsClass;
  static deserializeBinaryFromReader: (message: EnumMessage$AsClass, reader: jspb.BinaryReader) => EnumMessage$AsClass;
}

export type EnumMessage$AsClass$AsObject = {
  internalEnum: $Values<typeof EnumMessage$AsClass$InternalEnum>,
  internalEnumsList: Array<$Values<typeof EnumMessage$AsClass$InternalEnum>>,
  externalEnum: $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>,
  externalEnumsList: Array<$Values<typeof proto_othercom_external_enum_pb.ExternalEnum>>,
}

export const EnumMessage$AsClass$InternalEnum = {
  DEFAULT: 0,
  "0": "DEFAULT",
  FIRST: 1,
  "1": "FIRST",
  SECOND: 2,
  "2": "SECOND",
  THIRD: 3,
  "3": "THIRD",
}

