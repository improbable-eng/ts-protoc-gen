// @flow
// package: examplecom
// file: proto/examplecom/simplevalue.proto

import * as jspb from "google-protobuf";

export class SimpleValue$AsClass extends jspb.Message {
  getFirstField: () => string;
  setFirstField: (value: string) => void;

  getSecondField: () => number;
  setSecondField: (value: number) => void;

  hasNumberValue: () => boolean;
  clearNumberValue: () => void;
  getNumberValue: () => number;
  setNumberValue: (value: number) => void;

  hasStringValue: () => boolean;
  clearStringValue: () => void;
  getStringValue: () => string;
  setStringValue: (value: string) => void;

  hasBoolValue: () => boolean;
  clearBoolValue: () => void;
  getBoolValue: () => boolean;
  setBoolValue: (value: boolean) => void;

  hasNumber2Value: () => boolean;
  clearNumber2Value: () => void;
  getNumber2Value: () => number;
  setNumber2Value: (value: number) => void;

  hasString2Value: () => boolean;
  clearString2Value: () => void;
  getString2Value: () => string;
  setString2Value: (value: string) => void;

  hasBool2Value: () => boolean;
  clearBool2Value: () => void;
  getBool2Value: () => boolean;
  setBool2Value: (value: boolean) => void;

  getKindCase: () => $Values<typeof SimpleValue$AsClass_KindCase>;
  getAnotherCase: () => $Values<typeof SimpleValue$AsClass_AnotherCase>;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => SimpleValue$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: SimpleValue$AsClass) => SimpleValue$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: SimpleValue$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => SimpleValue$AsClass;
  static deserializeBinaryFromReader: (message: SimpleValue$AsClass, reader: jspb.BinaryReader) => SimpleValue$AsClass;
}

export type SimpleValue$AsClass$AsObject = {
  firstField: string,
  secondField: number,
  numberValue: number,
  stringValue: string,
  boolValue: boolean,
  number2Value: number,
  string2Value: string,
  bool2Value: boolean,
}

export const SimpleValue$AsClass_KindCase = {
  KIND_NOT_SET: 0,
  NUMBER_VALUE: 3,
  STRING_VALUE: 6,
  BOOL_VALUE: 8,
}

export const SimpleValue$AsClass_AnotherCase = {
  ANOTHER_NOT_SET: 0,
  NUMBER2_VALUE: 4,
  STRING2_VALUE: 5,
  BOOL2_VALUE: 7,
}

