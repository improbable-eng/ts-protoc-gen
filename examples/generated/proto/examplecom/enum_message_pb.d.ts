// package: examplecom
// file: proto/examplecom/enum_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb";

export class EnumMessage extends jspb.Message {
  getInternalEnum(): EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap];
  setInternalEnum(value: EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap]): EnumMessage;

  clearInternalEnumsList(): EnumMessage;
  getInternalEnumsList(): Array<EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap]>;
  setInternalEnumsList(value: Array<EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap]>): EnumMessage;
  addInternalEnums(value: EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap], index?: number): EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap];

  getExternalEnum(): proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap];
  setExternalEnum(value: proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap]): EnumMessage;

  clearExternalEnumsList(): EnumMessage;
  getExternalEnumsList(): Array<proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap]>;
  setExternalEnumsList(value: Array<proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap]>): EnumMessage;
  addExternalEnums(value: proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap], index?: number): proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EnumMessage): EnumMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumMessage;
  static deserializeBinaryFromReader(message: EnumMessage, reader: jspb.BinaryReader): EnumMessage;
}

export namespace EnumMessage {
  export type AsObject = {
    internalEnum: EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap],
    internalEnumsList: Array<EnumMessage.InternalEnumMap[keyof EnumMessage.InternalEnumMap]>,
    externalEnum: proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap],
    externalEnumsList: Array<proto_othercom_external_enum_pb.ExternalEnumMap[keyof proto_othercom_external_enum_pb.ExternalEnumMap]>,
  }

  export interface InternalEnumMap {
    DEFAULT: 0;
    FIRST: 1;
    SECOND: 2;
    THIRD: 3;
  }

  export const InternalEnum: InternalEnumMap;
}

