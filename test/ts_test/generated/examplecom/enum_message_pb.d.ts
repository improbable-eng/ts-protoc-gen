// package: examplecom
// file: examplecom/enum_message.proto

import * as jspb from "google-protobuf";
import * as othercom_external_enum_pb from "../othercom/external_enum_pb";


export class EnumMessage extends jspb.Message {
  getInternalEnum(): EnumMessage.InternalEnum;
  setInternalEnum(value: EnumMessage.InternalEnum): void;

  clearInternalEnumsList(): void;
  getInternalEnumsList(): Array<EnumMessage.InternalEnum>;
  setInternalEnumsList(value: Array<EnumMessage.InternalEnum>): void;
  addInternalEnums(value: EnumMessage.InternalEnum, index?: number): EnumMessage.InternalEnum;

  getExternalEnum(): othercom_external_enum_pb.ExternalEnum;
  setExternalEnum(value: othercom_external_enum_pb.ExternalEnum): void;

  clearExternalEnumsList(): void;
  getExternalEnumsList(): Array<othercom_external_enum_pb.ExternalEnum>;
  setExternalEnumsList(value: Array<othercom_external_enum_pb.ExternalEnum>): void;
  addExternalEnums(value: othercom_external_enum_pb.ExternalEnum, index?: number): othercom_external_enum_pb.ExternalEnum;

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
    internalEnum: EnumMessage.InternalEnum,
    internalEnumsList: Array<EnumMessage.InternalEnum>,
    externalEnum: othercom_external_enum_pb.ExternalEnum,
    externalEnumsList: Array<othercom_external_enum_pb.ExternalEnum>,
  }

  export enum InternalEnum {
    DEFAULT = 0,
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
  }
}

