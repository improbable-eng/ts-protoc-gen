// @flow
// package: examplecom
// file: proto/examplecom/well_known_message.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb";
import * as google_protobuf_compiler_plugin_pb from "google-protobuf/google/protobuf/compiler/plugin_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_source_context_pb from "google-protobuf/google/protobuf/source_context_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_type_pb from "google-protobuf/google/protobuf/type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class WellKnownMessage$AsClass extends jspb.Message {
  hasMyCodeGeneratorRequest: () => boolean;
  clearMyCodeGeneratorRequest: () => void;
  getMyCodeGeneratorRequest: () => ?google_protobuf_compiler_plugin_pb.CodeGeneratorRequest$AsClass;
  setMyCodeGeneratorRequest: (value?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest$AsClass) => void;

  hasMyAny: () => boolean;
  clearMyAny: () => void;
  getMyAny: () => ?google_protobuf_any_pb.Any$AsClass;
  setMyAny: (value?: google_protobuf_any_pb.Any$AsClass) => void;

  hasMyMethod: () => boolean;
  clearMyMethod: () => void;
  getMyMethod: () => ?google_protobuf_api_pb.Method$AsClass;
  setMyMethod: (value?: google_protobuf_api_pb.Method$AsClass) => void;

  hasMyGeneratedCodeInfo: () => boolean;
  clearMyGeneratedCodeInfo: () => void;
  getMyGeneratedCodeInfo: () => ?google_protobuf_descriptor_pb.GeneratedCodeInfo$AsClass;
  setMyGeneratedCodeInfo: (value?: google_protobuf_descriptor_pb.GeneratedCodeInfo$AsClass) => void;

  hasMyDuration: () => boolean;
  clearMyDuration: () => void;
  getMyDuration: () => ?google_protobuf_duration_pb.Duration$AsClass;
  setMyDuration: (value?: google_protobuf_duration_pb.Duration$AsClass) => void;

  hasMyEmpty: () => boolean;
  clearMyEmpty: () => void;
  getMyEmpty: () => ?google_protobuf_empty_pb.Empty$AsClass;
  setMyEmpty: (value?: google_protobuf_empty_pb.Empty$AsClass) => void;

  hasMyFieldMask: () => boolean;
  clearMyFieldMask: () => void;
  getMyFieldMask: () => ?google_protobuf_field_mask_pb.FieldMask$AsClass;
  setMyFieldMask: (value?: google_protobuf_field_mask_pb.FieldMask$AsClass) => void;

  hasMySourceContext: () => boolean;
  clearMySourceContext: () => void;
  getMySourceContext: () => ?google_protobuf_source_context_pb.SourceContext$AsClass;
  setMySourceContext: (value?: google_protobuf_source_context_pb.SourceContext$AsClass) => void;

  hasMyStruct: () => boolean;
  clearMyStruct: () => void;
  getMyStruct: () => ?google_protobuf_struct_pb.Struct$AsClass;
  setMyStruct: (value?: google_protobuf_struct_pb.Struct$AsClass) => void;

  hasMyTimestamp: () => boolean;
  clearMyTimestamp: () => void;
  getMyTimestamp: () => ?google_protobuf_timestamp_pb.Timestamp$AsClass;
  setMyTimestamp: (value?: google_protobuf_timestamp_pb.Timestamp$AsClass) => void;

  hasMyType: () => boolean;
  clearMyType: () => void;
  getMyType: () => ?google_protobuf_type_pb.Type$AsClass;
  setMyType: (value?: google_protobuf_type_pb.Type$AsClass) => void;

  hasMyDoubleValue: () => boolean;
  clearMyDoubleValue: () => void;
  getMyDoubleValue: () => ?google_protobuf_wrappers_pb.DoubleValue$AsClass;
  setMyDoubleValue: (value?: google_protobuf_wrappers_pb.DoubleValue$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => WellKnownMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: WellKnownMessage$AsClass) => WellKnownMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: WellKnownMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => WellKnownMessage$AsClass;
  static deserializeBinaryFromReader: (message: WellKnownMessage$AsClass, reader: jspb.BinaryReader) => WellKnownMessage$AsClass;
}

export type WellKnownMessage$AsClass$AsObject = {
  myCodeGeneratorRequest?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest$AsClass$AsObject,
  myAny?: google_protobuf_any_pb.Any$AsClass$AsObject,
  myMethod?: google_protobuf_api_pb.Method$AsClass$AsObject,
  myGeneratedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo$AsClass$AsObject,
  myDuration?: google_protobuf_duration_pb.Duration$AsClass$AsObject,
  myEmpty?: google_protobuf_empty_pb.Empty$AsClass$AsObject,
  myFieldMask?: google_protobuf_field_mask_pb.FieldMask$AsClass$AsObject,
  mySourceContext?: google_protobuf_source_context_pb.SourceContext$AsClass$AsObject,
  myStruct?: google_protobuf_struct_pb.Struct$AsClass$AsObject,
  myTimestamp?: google_protobuf_timestamp_pb.Timestamp$AsClass$AsObject,
  myType?: google_protobuf_type_pb.Type$AsClass$AsObject,
  myDoubleValue?: google_protobuf_wrappers_pb.DoubleValue$AsClass$AsObject,
}

