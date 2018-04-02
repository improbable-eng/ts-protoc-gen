// package: examplecom
// file: examplecom/parent_message_v2.proto

import * as jspb from "google-protobuf";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";


export class ParentMessageV2 extends jspb.Message {
  hasInternalChildMessage(): boolean;
  clearInternalChildMessage(): void;
  getInternalChildMessage(): ParentMessageV2.InternalChildMessage;
  setInternalChildMessage(value?: ParentMessageV2.InternalChildMessage): void;

  hasOptInternalChildMessage(): boolean;
  clearOptInternalChildMessage(): void;
  getOptInternalChildMessage(): ParentMessageV2.InternalChildMessage | undefined;
  setOptInternalChildMessage(value?: ParentMessageV2.InternalChildMessage): void;

  clearInternalChildrenList(): void;
  getInternalChildrenList(): Array<ParentMessageV2.InternalChildMessage>;
  setInternalChildrenList(value: Array<ParentMessageV2.InternalChildMessage>): void;
  addInternalChildren(value?: ParentMessageV2.InternalChildMessage, index?: number): ParentMessageV2.InternalChildMessage;

  hasExternalChildMessage(): boolean;
  clearExternalChildMessage(): void;
  getExternalChildMessage(): othercom_external_child_message_pb.ExternalChildMessage;
  setExternalChildMessage(value?: othercom_external_child_message_pb.ExternalChildMessage): void;

  hasOptExternalChildMessage(): boolean;
  clearOptExternalChildMessage(): void;
  getOptExternalChildMessage(): othercom_external_child_message_pb.ExternalChildMessage | undefined;
  setOptExternalChildMessage(value?: othercom_external_child_message_pb.ExternalChildMessage): void;

  clearExternalChildrenList(): void;
  getExternalChildrenList(): Array<othercom_external_child_message_pb.ExternalChildMessage>;
  setExternalChildrenList(value: Array<othercom_external_child_message_pb.ExternalChildMessage>): void;
  addExternalChildren(value?: othercom_external_child_message_pb.ExternalChildMessage, index?: number): othercom_external_child_message_pb.ExternalChildMessage;

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
    externalChildMessage: othercom_external_child_message_pb.ExternalChildMessage.AsObject,
    optExternalChildMessage?: othercom_external_child_message_pb.ExternalChildMessage.AsObject,
    externalChildrenList: Array<othercom_external_child_message_pb.ExternalChildMessage.AsObject>,
  }

  export class InternalChildMessage extends jspb.Message {
    hasMyString(): boolean;
    clearMyString(): void;
    getMyString(): string | undefined;
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
      myString?: string,
    }
  }
}

