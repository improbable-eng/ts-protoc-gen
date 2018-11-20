// @flow
// package: examplecom
// file: proto/examplecom/map_message.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_enum_pb from "../../proto/othercom/external_enum_pb.flow.js";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";

export class MapMessage$AsClass extends jspb.Message {
  getInternalEnumsMap: () => jspb.Map<number, $Values<typeof MapMessage$AsClass$InternalEnum>>;
  clearInternalEnumsMap: () => void;
  getInternalChildrenMap: () => jspb.Map<string, MapMessage$AsClass$InternalChildMessage$AsClass$AsObject>;
  clearInternalChildrenMap: () => void;
  getExternalEnumsMap: () => jspb.Map<number, $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>>;
  clearExternalEnumsMap: () => void;
  getExternalChildrenMap: () => jspb.Map<string, proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject>;
  clearExternalChildrenMap: () => void;
  getPrimitiveIntsMap: () => jspb.Map<string, number>;
  clearPrimitiveIntsMap: () => void;
  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => MapMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: MapMessage$AsClass) => MapMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: MapMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => MapMessage$AsClass;
  static deserializeBinaryFromReader: (message: MapMessage$AsClass, reader: jspb.BinaryReader) => MapMessage$AsClass;
}

export type MapMessage$AsClass$AsObject = {
  internalEnumsMap: Array<[number, $Values<typeof MapMessage$AsClass$InternalEnum>]>,
  internalChildrenMap: Array<[string, MapMessage$AsClass$InternalChildMessage$AsClass$AsObject]>,
  externalEnumsMap: Array<[number, $Values<typeof proto_othercom_external_enum_pb.ExternalEnum>]>,
  externalChildrenMap: Array<[string, proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject]>,
  primitiveIntsMap: Array<[string, number]>,
}

export class MapMessage$AsClass$InternalChildMessage$AsClass extends jspb.Message {
  getMyString: () => string;
  setMyString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => MapMessage$AsClass$InternalChildMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: MapMessage$AsClass$InternalChildMessage$AsClass) => MapMessage$AsClass$InternalChildMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: MapMessage$AsClass$InternalChildMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => MapMessage$AsClass$InternalChildMessage$AsClass;
  static deserializeBinaryFromReader: (message: MapMessage$AsClass$InternalChildMessage$AsClass, reader: jspb.BinaryReader) => MapMessage$AsClass$InternalChildMessage$AsClass;
}

export type MapMessage$AsClass$InternalChildMessage$AsClass$AsObject = {
  myString: string,
}

export const MapMessage$AsClass$InternalEnum = {
  DEFAULT: 0,
  "0": "DEFAULT",
  FIRST: 1,
  "1": "FIRST",
  SECOND: 2,
  "2": "SECOND",
}

