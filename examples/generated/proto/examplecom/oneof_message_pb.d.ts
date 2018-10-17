// package: examplecom
// file: proto/examplecom/oneof_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb";

export class OneOfMessage extends jspb.Message {
  hasInternalChildMessage(): boolean;
  clearInternalChildMessage(): void;
  getInternalChildMessage(): OneOfMessage.InternalChildMessage | undefined;
  setInternalChildMessage(value?: OneOfMessage.InternalChildMessage): void;

  hasExternalChildMessage(): boolean;
  clearExternalChildMessage(): void;
  getExternalChildMessage(): proto_othercom_external_child_message_pb.ExternalChildMessage | undefined;
  setExternalChildMessage(value?: proto_othercom_external_child_message_pb.ExternalChildMessage): void;

  hasMyString(): boolean;
  clearMyString(): void;
  getMyString(): string;
  setMyString(value: string): void;

  hasMyInt64(): boolean;
  clearMyInt64(): void;
  getMyInt64(): number;
  setMyInt64(value: number): void;

  getGroupCase(): OneOfMessage.GroupCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneOfMessage.AsObject;
  static toObject(includeInstance: boolean, msg: OneOfMessage): OneOfMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneOfMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneOfMessage;
  static deserializeBinaryFromReader(message: OneOfMessage, reader: jspb.BinaryReader): OneOfMessage;
}

export namespace OneOfMessage {
  export type AsObject = {
    internalChildMessage?: OneOfMessage.InternalChildMessage.AsObject,
    externalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage.AsObject,
    myString: string,
    myInt64: number,
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

  export enum GroupCase {
    GROUP_NOT_SET = 0,
    INTERNAL_CHILD_MESSAGE = 1,
    EXTERNAL_CHILD_MESSAGE = 2,
    MY_STRING = 3,
    MY_INT64 = 4,
  }
}

export class CamelCasedOneOfMessage extends jspb.Message {
  hasAnint(): boolean;
  clearAnint(): void;
  getAnint(): number;
  setAnint(value: number): void;

  hasThestring(): boolean;
  clearThestring(): void;
  getThestring(): string;
  setThestring(value: string): void;

  getCamelcasedmessageCase(): CamelCasedOneOfMessage.CamelcasedmessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CamelCasedOneOfMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CamelCasedOneOfMessage): CamelCasedOneOfMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CamelCasedOneOfMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CamelCasedOneOfMessage;
  static deserializeBinaryFromReader(message: CamelCasedOneOfMessage, reader: jspb.BinaryReader): CamelCasedOneOfMessage;
}

export namespace CamelCasedOneOfMessage {
  export type AsObject = {
    anint: number,
    thestring: string,
  }

  export enum CamelcasedmessageCase {
    CAMELCASEDMESSAGE_NOT_SET = 0,
    ANINT = 1,
    THESTRING = 2,
  }
}

export class SnakeCasedOneOfMessage extends jspb.Message {
  hasAnint(): boolean;
  clearAnint(): void;
  getAnint(): number;
  setAnint(value: number): void;

  hasThestring(): boolean;
  clearThestring(): void;
  getThestring(): string;
  setThestring(value: string): void;

  getSnakeCasedMessageCase(): SnakeCasedOneOfMessage.SnakeCasedMessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnakeCasedOneOfMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SnakeCasedOneOfMessage): SnakeCasedOneOfMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnakeCasedOneOfMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnakeCasedOneOfMessage;
  static deserializeBinaryFromReader(message: SnakeCasedOneOfMessage, reader: jspb.BinaryReader): SnakeCasedOneOfMessage;
}

export namespace SnakeCasedOneOfMessage {
  export type AsObject = {
    anint: number,
    thestring: string,
  }

  export enum SnakeCasedMessageCase {
    SNAKE_CASED_MESSAGE_NOT_SET = 0,
    ANINT = 1,
    THESTRING = 2,
  }
}

