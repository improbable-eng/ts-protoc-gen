// package: examplecom
// file: examplecom/map_message.proto

import * as jspb from "google-protobuf";
import * as othercom_external_enum_pb from "../othercom/external_enum_pb";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";

export class MapMessage extends jspb.Message {
  getInternalEnumsMap(): jspb.Map<number, MapMessage.InternalEnum>;
  clearInternalEnumsMap(): void;
  getInternalChildrenMap(): jspb.Map<string, MapMessage.InternalChildMessage>;
  clearInternalChildrenMap(): void;
  getExternalEnumsMap(): jspb.Map<number, othercom_external_enum_pb.ExternalEnum>;
  clearExternalEnumsMap(): void;
  getExternalChildrenMap(): jspb.Map<string, othercom_external_child_message_pb.ExternalChildMessage>;
  clearExternalChildrenMap(): void;
  getPrimitiveIntsMap(): jspb.Map<string, number>;
  clearPrimitiveIntsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapMessage.AsObject;
  static toObject(includeInstance: boolean, msg: MapMessage): MapMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapMessage;
  static deserializeBinaryFromReader(message: MapMessage, reader: jspb.BinaryReader): MapMessage;
}

export namespace MapMessage {
  export type AsObject = {
    internalEnumsMap: Array<[number, MapMessage.InternalEnum]>,
    internalChildrenMap: Array<[string, MapMessage.InternalChildMessage.AsObject]>,
    externalEnumsMap: Array<[number, othercom_external_enum_pb.ExternalEnum]>,
    externalChildrenMap: Array<[string, othercom_external_child_message_pb.ExternalChildMessage.AsObject]>,
    primitiveIntsMap: Array<[string, number]>,
  }

  export class InternalChildMessage extends jspb.Message {
    getMyString(): string;
    setMyString(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InternalChildMessage.AsObject;
    static toObject(includeInstance: boolean, msg: InternalChildMessage): InternalChildMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InternalChildMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InternalChildMessage;
    static deserializeBinaryFromReader(message: InternalChildMessage, reader: jspb.BinaryReader): InternalChildMessage;
  }

  export namespace InternalChildMessage {
    export type AsObject = {
      myString: string,
    }
  }

  export enum InternalEnum {
    DEFAULT = 0,
    FIRST = 1,
    SECOND = 2,
  }
}

