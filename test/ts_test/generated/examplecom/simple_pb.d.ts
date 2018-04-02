// package: examplecom
// file: examplecom/simple.proto

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


export class MySimple extends jspb.Message {
  getMyString(): string;
  setMyString(value: string): void;

  getMyBool(): boolean;
  setMyBool(value: boolean): void;

  clearSomeLabelsList(): void;
  getSomeLabelsList(): Array<string>;
  setSomeLabelsList(value: Array<string>): void;
  addSomeLabels(value: string, index?: number): string;

  hasSomeCodeGeneratorRequest(): boolean;
  clearSomeCodeGeneratorRequest(): void;
  getSomeCodeGeneratorRequest(): google_protobuf_compiler_plugin_pb.CodeGeneratorRequest | undefined;
  setSomeCodeGeneratorRequest(value?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest): void;

  hasSomeAny(): boolean;
  clearSomeAny(): void;
  getSomeAny(): google_protobuf_any_pb.Any | undefined;
  setSomeAny(value?: google_protobuf_any_pb.Any): void;

  hasSomeMethod(): boolean;
  clearSomeMethod(): void;
  getSomeMethod(): google_protobuf_api_pb.Method | undefined;
  setSomeMethod(value?: google_protobuf_api_pb.Method): void;

  hasSomeGeneratedCodeInfo(): boolean;
  clearSomeGeneratedCodeInfo(): void;
  getSomeGeneratedCodeInfo(): google_protobuf_descriptor_pb.GeneratedCodeInfo | undefined;
  setSomeGeneratedCodeInfo(value?: google_protobuf_descriptor_pb.GeneratedCodeInfo): void;

  hasSomeDuration(): boolean;
  clearSomeDuration(): void;
  getSomeDuration(): google_protobuf_duration_pb.Duration | undefined;
  setSomeDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasSomeEmpty(): boolean;
  clearSomeEmpty(): void;
  getSomeEmpty(): google_protobuf_empty_pb.Empty | undefined;
  setSomeEmpty(value?: google_protobuf_empty_pb.Empty): void;

  hasSomeFieldMask(): boolean;
  clearSomeFieldMask(): void;
  getSomeFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setSomeFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasSomeSourceContext(): boolean;
  clearSomeSourceContext(): void;
  getSomeSourceContext(): google_protobuf_source_context_pb.SourceContext | undefined;
  setSomeSourceContext(value?: google_protobuf_source_context_pb.SourceContext): void;

  hasSomeStruct(): boolean;
  clearSomeStruct(): void;
  getSomeStruct(): google_protobuf_struct_pb.Struct | undefined;
  setSomeStruct(value?: google_protobuf_struct_pb.Struct): void;

  hasSomeTimestamp(): boolean;
  clearSomeTimestamp(): void;
  getSomeTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSomeTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSomeType(): boolean;
  clearSomeType(): void;
  getSomeType(): google_protobuf_type_pb.Type | undefined;
  setSomeType(value?: google_protobuf_type_pb.Type): void;

  hasSomeDoubleValue(): boolean;
  clearSomeDoubleValue(): void;
  getSomeDoubleValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setSomeDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MySimple.AsObject;
  static toObject(includeInstance: boolean, msg: MySimple): MySimple.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MySimple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MySimple;
  static deserializeBinaryFromReader(message: MySimple, reader: jspb.BinaryReader): MySimple;
}

export namespace MySimple {
  export type AsObject = {
    myString: string,
    myBool: boolean,
    someLabelsList: Array<string>,
    someCodeGeneratorRequest?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.AsObject,
    someAny?: google_protobuf_any_pb.Any.AsObject,
    someMethod?: google_protobuf_api_pb.Method.AsObject,
    someGeneratedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo.AsObject,
    someDuration?: google_protobuf_duration_pb.Duration.AsObject,
    someEmpty?: google_protobuf_empty_pb.Empty.AsObject,
    someFieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    someSourceContext?: google_protobuf_source_context_pb.SourceContext.AsObject,
    someStruct?: google_protobuf_struct_pb.Struct.AsObject,
    someTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    someType?: google_protobuf_type_pb.Type.AsObject,
    someDoubleValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

