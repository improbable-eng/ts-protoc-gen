// @flow
// package: examplecom
// file: proto/examplecom/enum_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb.flow.js";

export class EnumMessage$AsClass extends jspb.Message {
  getInternalEnum: () => $Values<typeof EnumMessage$AsClass_InternalEnum>;
  setInternalEnum: (value: $Values<typeof EnumMessage$AsClass_InternalEnum>) => void;

  clearInternalEnumsList: () => void;
  getInternalEnumsList: () => Array<$Values<typeof EnumMessage$AsClass_InternalEnum>>;
  setInternalEnumsList: (value: Array<$Values<typeof EnumMessage$AsClass_InternalEnum>>) => void;
  addInternalEnums: (value: $Values<typeof EnumMessage$AsClass_InternalEnum>, index?: number) => $Values<typeof EnumMessage$AsClass_InternalEnum>;

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
  internalEnum: $Values<typeof EnumMessage$AsClass_InternalEnum>,
  internalEnumsList: Array<$Values<typeof EnumMessage$AsClass_InternalEnum>>,
  externalEnum: $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>,
  externalEnumsList: Array<$Values<typeof proto_othercom_external_enum_pb.ExternalEnum>>,
}

export const EnumMessage$AsClass_InternalEnum = Object.freeze({
  DEFAULT: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
})

export const EnumMessage$AsClass_InternalEnum$ReverseLookUp = Object.freeze({
  "0": "DEFAULT",
  "1": "FIRST",
  "2": "SECOND",
  "3": "THIRD",
})

