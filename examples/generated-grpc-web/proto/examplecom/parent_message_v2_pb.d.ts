// package: examplecom
// file: proto/examplecom/parent_message_v2.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb";

export class ParentMessageV2 extends jspb.Message {
  hasInternalChildMessage(): boolean;
  clearInternalChildMessage(): ParentMessageV2;
  getInternalChildMessage(): ParentMessageV2.InternalChildMessage;
  setInternalChildMessage(value?: ParentMessageV2.InternalChildMessage): ParentMessageV2;

  hasOptInternalChildMessage(): boolean;
  clearOptInternalChildMessage(): ParentMessageV2;
  getOptInternalChildMessage(): ParentMessageV2.InternalChildMessage | undefined;
  setOptInternalChildMessage(value?: ParentMessageV2.InternalChildMessage): ParentMessageV2;

  clearInternalChildrenList(): ParentMessageV2;
  getInternalChildrenList(): Array<ParentMessageV2.InternalChildMessage>;
  setInternalChildrenList(value: Array<ParentMessageV2.InternalChildMessage>): ParentMessageV2;
  addInternalChildren(value?: ParentMessageV2.InternalChildMessage, index?: number): ParentMessageV2.InternalChildMessage;

  hasExternalChildMessage(): boolean;
  clearExternalChildMessage(): ParentMessageV2;
  getExternalChildMessage(): proto_othercom_external_child_message_pb.ExternalChildMessage;
  setExternalChildMessage(value?: proto_othercom_external_child_message_pb.ExternalChildMessage): ParentMessageV2;

  hasOptExternalChildMessage(): boolean;
  clearOptExternalChildMessage(): ParentMessageV2;
  getOptExternalChildMessage(): proto_othercom_external_child_message_pb.ExternalChildMessage | undefined;
  setOptExternalChildMessage(value?: proto_othercom_external_child_message_pb.ExternalChildMessage): ParentMessageV2;

  clearExternalChildrenList(): ParentMessageV2;
  getExternalChildrenList(): Array<proto_othercom_external_child_message_pb.ExternalChildMessage>;
  setExternalChildrenList(value: Array<proto_othercom_external_child_message_pb.ExternalChildMessage>): ParentMessageV2;
  addExternalChildren(value?: proto_othercom_external_child_message_pb.ExternalChildMessage, index?: number): proto_othercom_external_child_message_pb.ExternalChildMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentMessageV2.AsObject;
  static toObject(includeInstance: boolean, msg: ParentMessageV2): ParentMessageV2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentMessageV2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentMessageV2;
  static deserializeBinaryFromReader(message: ParentMessageV2, reader: jspb.BinaryReader): ParentMessageV2;
}

export namespace ParentMessageV2 {
  export type AsObject = {
    internalChildMessage: ParentMessageV2.InternalChildMessage.AsObject,
    optInternalChildMessage?: ParentMessageV2.InternalChildMessage.AsObject,
    internalChildrenList: Array<ParentMessageV2.InternalChildMessage.AsObject>,
    externalChildMessage: proto_othercom_external_child_message_pb.ExternalChildMessage.AsObject,
    optExternalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage.AsObject,
    externalChildrenList: Array<proto_othercom_external_child_message_pb.ExternalChildMessage.AsObject>,
  }

  export class InternalChildMessage extends jspb.Message {
    hasMyString(): boolean;
    clearMyString(): InternalChildMessage;
    getMyString(): string | undefined;
    setMyString(value: string): InternalChildMessage;

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
      myString?: string,
    }
  }
}

