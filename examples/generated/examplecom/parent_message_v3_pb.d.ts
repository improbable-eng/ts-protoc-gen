// package: examplecom
// file: examplecom/parent_message_v3.proto

import * as jspb from "google-protobuf";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";

export class ParentMessageV3 extends jspb.Message {
  hasInternalChildMessage(): boolean;
  clearInternalChildMessage(): void;
  getInternalChildMessage(): ParentMessageV3.InternalChildMessage | undefined;
  setInternalChildMessage(value?: ParentMessageV3.InternalChildMessage): void;

  clearInternalChildrenList(): void;
  getInternalChildrenList(): Array<ParentMessageV3.InternalChildMessage>;
  setInternalChildrenList(value: Array<ParentMessageV3.InternalChildMessage>): void;
  addInternalChildren(value?: ParentMessageV3.InternalChildMessage, index?: number): ParentMessageV3.InternalChildMessage;

  hasExternalChildMessage(): boolean;
  clearExternalChildMessage(): void;
  getExternalChildMessage(): othercom_external_child_message_pb.ExternalChildMessage | undefined;
  setExternalChildMessage(value?: othercom_external_child_message_pb.ExternalChildMessage): void;

  clearExternalChildrenList(): void;
  getExternalChildrenList(): Array<othercom_external_child_message_pb.ExternalChildMessage>;
  setExternalChildrenList(value: Array<othercom_external_child_message_pb.ExternalChildMessage>): void;
  addExternalChildren(value?: othercom_external_child_message_pb.ExternalChildMessage, index?: number): othercom_external_child_message_pb.ExternalChildMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentMessageV3.AsObject;
  static toObject(includeInstance: boolean, msg: ParentMessageV3): ParentMessageV3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentMessageV3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentMessageV3;
  static deserializeBinaryFromReader(message: ParentMessageV3, reader: jspb.BinaryReader): ParentMessageV3;
}

export namespace ParentMessageV3 {
  export type AsObject = {
    internalChildMessage?: ParentMessageV3.InternalChildMessage.AsObject,
    internalChildrenList: Array<ParentMessageV3.InternalChildMessage.AsObject>,
    externalChildMessage?: othercom_external_child_message_pb.ExternalChildMessage.AsObject,
    externalChildrenList: Array<othercom_external_child_message_pb.ExternalChildMessage.AsObject>,
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
}

