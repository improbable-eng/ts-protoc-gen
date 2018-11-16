// @flow
// package: examplecom
// file: proto/examplecom/simple.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_compiler_plugin_pb from "google-protobuf/google/protobuf/compiler/plugin_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_api_pb from "google-protobuf/google/protobuf/api_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_source_context_pb from "google-protobuf/google/protobuf/source_context_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_type_pb from "google-protobuf/google/protobuf/type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class MySimple$AsClass extends jspb.Message {
  getMyString: () => string;
  setMyString: (value: string) => void;

  getMyBool: () => boolean;
  setMyBool: (value: boolean) => void;

  clearSomeLabelsList: () => void;
  getSomeLabelsList: () => Array<string>;
  setSomeLabelsList: (value: Array<string>) => void;
  addSomeLabels: (value: string, index?: number) => string;

  hasSomeCodeGeneratorRequest: () => boolean;
  clearSomeCodeGeneratorRequest: () => void;
  getSomeCodeGeneratorRequest: () => ?google_protobuf_compiler_plugin_pb.CodeGeneratorRequest$AsClass;
  setSomeCodeGeneratorRequest: (value?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest$AsClass) => void;

  hasSomeAny: () => boolean;
  clearSomeAny: () => void;
  getSomeAny: () => ?google_protobuf_any_pb.Any$AsClass;
  setSomeAny: (value?: google_protobuf_any_pb.Any$AsClass) => void;

  hasSomeMethod: () => boolean;
  clearSomeMethod: () => void;
  getSomeMethod: () => ?google_protobuf_api_pb.Method$AsClass;
  setSomeMethod: (value?: google_protobuf_api_pb.Method$AsClass) => void;

  hasSomeGeneratedCodeInfo: () => boolean;
  clearSomeGeneratedCodeInfo: () => void;
  getSomeGeneratedCodeInfo: () => ?google_protobuf_descriptor_pb.GeneratedCodeInfo$AsClass;
  setSomeGeneratedCodeInfo: (value?: google_protobuf_descriptor_pb.GeneratedCodeInfo$AsClass) => void;

  hasSomeDuration: () => boolean;
  clearSomeDuration: () => void;
  getSomeDuration: () => ?google_protobuf_duration_pb.Duration$AsClass;
  setSomeDuration: (value?: google_protobuf_duration_pb.Duration$AsClass) => void;

  hasSomeEmpty: () => boolean;
  clearSomeEmpty: () => void;
  getSomeEmpty: () => ?google_protobuf_empty_pb.Empty$AsClass;
  setSomeEmpty: (value?: google_protobuf_empty_pb.Empty$AsClass) => void;

  hasSomeFieldMask: () => boolean;
  clearSomeFieldMask: () => void;
  getSomeFieldMask: () => ?google_protobuf_field_mask_pb.FieldMask$AsClass;
  setSomeFieldMask: (value?: google_protobuf_field_mask_pb.FieldMask$AsClass) => void;

  hasSomeSourceContext: () => boolean;
  clearSomeSourceContext: () => void;
  getSomeSourceContext: () => ?google_protobuf_source_context_pb.SourceContext$AsClass;
  setSomeSourceContext: (value?: google_protobuf_source_context_pb.SourceContext$AsClass) => void;

  hasSomeStruct: () => boolean;
  clearSomeStruct: () => void;
  getSomeStruct: () => ?google_protobuf_struct_pb.Struct$AsClass;
  setSomeStruct: (value?: google_protobuf_struct_pb.Struct$AsClass) => void;

  hasSomeTimestamp: () => boolean;
  clearSomeTimestamp: () => void;
  getSomeTimestamp: () => ?google_protobuf_timestamp_pb.Timestamp$AsClass;
  setSomeTimestamp: (value?: google_protobuf_timestamp_pb.Timestamp$AsClass) => void;

  hasSomeType: () => boolean;
  clearSomeType: () => void;
  getSomeType: () => ?google_protobuf_type_pb.Type$AsClass;
  setSomeType: (value?: google_protobuf_type_pb.Type$AsClass) => void;

  hasSomeDoubleValue: () => boolean;
  clearSomeDoubleValue: () => void;
  getSomeDoubleValue: () => ?google_protobuf_wrappers_pb.DoubleValue$AsClass;
  setSomeDoubleValue: (value?: google_protobuf_wrappers_pb.DoubleValue$AsClass) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => MySimple$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: MySimple$AsClass) => MySimple$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: MySimple$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => MySimple$AsClass;
  static deserializeBinaryFromReader: (message: MySimple$AsClass, reader: jspb.BinaryReader) => MySimple$AsClass;
}

export type MySimple$AsClass$AsObject = {
  myString: string,
  myBool: boolean,
  someLabelsList: Array<string>,
  someCodeGeneratorRequest?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest$AsClass$AsObject,
  someAny?: google_protobuf_any_pb.Any$AsClass$AsObject,
  someMethod?: google_protobuf_api_pb.Method$AsClass$AsObject,
  someGeneratedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo$AsClass$AsObject,
  someDuration?: google_protobuf_duration_pb.Duration$AsClass$AsObject,
  someEmpty?: google_protobuf_empty_pb.Empty$AsClass$AsObject,
  someFieldMask?: google_protobuf_field_mask_pb.FieldMask$AsClass$AsObject,
  someSourceContext?: google_protobuf_source_context_pb.SourceContext$AsClass$AsObject,
  someStruct?: google_protobuf_struct_pb.Struct$AsClass$AsObject,
  someTimestamp?: google_protobuf_timestamp_pb.Timestamp$AsClass$AsObject,
  someType?: google_protobuf_type_pb.Type$AsClass$AsObject,
  someDoubleValue?: google_protobuf_wrappers_pb.DoubleValue$AsClass$AsObject,
}

