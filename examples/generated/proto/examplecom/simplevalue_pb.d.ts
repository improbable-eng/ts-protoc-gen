// package: examplecom
// file: proto/examplecom/simplevalue.proto

import * as jspb from "google-protobuf";

export class SimpleValue extends jspb.Message {
  getFirstField(): string;
  setFirstField(value: string): void;

  getSecondField(): number;
  setSecondField(value: number): void;

  hasNumberValue(): boolean;
  clearNumberValue(): void;
  /**
   * Represents a double value.
   */
  getNumberValue(): number;
  setNumberValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  /**
   * Represents a string value.
   */
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  /**
   * Represents a boolean value.
   */
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasNumber2Value(): boolean;
  clearNumber2Value(): void;
  /**
   * Represents a double value.
   */
  getNumber2Value(): number;
  setNumber2Value(value: number): void;

  hasString2Value(): boolean;
  clearString2Value(): void;
  /**
   * Represents a string value.
   */
  getString2Value(): string;
  setString2Value(value: string): void;

  hasBool2Value(): boolean;
  clearBool2Value(): void;
  /**
   * Represents a boolean value.
   */
  getBool2Value(): boolean;
  setBool2Value(value: boolean): void;

  /**
   * The kind of value.
   */
  getKindCase(): SimpleValue.KindCase;
  /**
   * The kind of value.
   */
  getAnotherCase(): SimpleValue.AnotherCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleValue.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleValue): SimpleValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleValue;
  static deserializeBinaryFromReader(message: SimpleValue, reader: jspb.BinaryReader): SimpleValue;
}

export namespace SimpleValue {
  export type AsObject = {
    firstField: string,
    secondField: number,
    /**
     * Represents a double value.
     */
    numberValue: number,
    /**
     * Represents a string value.
     */
    stringValue: string,
    /**
     * Represents a boolean value.
     */
    boolValue: boolean,
    /**
     * Represents a double value.
     */
    number2Value: number,
    /**
     * Represents a string value.
     */
    string2Value: string,
    /**
     * Represents a boolean value.
     */
    bool2Value: boolean,
  }

  export enum KindCase {
    KIND_NOT_SET = 0,
    NUMBER_VALUE = 3,
    STRING_VALUE = 6,
    BOOL_VALUE = 8,
  }

  export enum AnotherCase {
    ANOTHER_NOT_SET = 0,
    NUMBER2_VALUE = 4,
    STRING2_VALUE = 5,
    BOOL2_VALUE = 7,
  }
}

