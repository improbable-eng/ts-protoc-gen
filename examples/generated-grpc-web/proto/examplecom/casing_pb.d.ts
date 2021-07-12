// package: examplecom
// file: proto/examplecom/casing.proto

import * as jspb from "google-protobuf";

export class CasingMessage extends jspb.Message {
  getTitlecase(): string;
  setTitlecase(value: string): CasingMessage;

  getCamelcase(): string;
  setCamelcase(value: string): CasingMessage;

  getSnakeCase(): string;
  setSnakeCase(value: string): CasingMessage;

  getLeadingunderscorecamelcase(): string;
  setLeadingunderscorecamelcase(value: string): CasingMessage;

  getLeadingunderscoretitlecase(): string;
  setLeadingunderscoretitlecase(value: string): CasingMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CasingMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CasingMessage): CasingMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CasingMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CasingMessage;
  static deserializeBinaryFromReader(message: CasingMessage, reader: jspb.BinaryReader): CasingMessage;
}

export namespace CasingMessage {
  export type AsObject = {
    titlecase: string,
    camelcase: string,
    snakeCase: string,
    leadingunderscorecamelcase: string,
    leadingunderscoretitlecase: string,
  }
}

