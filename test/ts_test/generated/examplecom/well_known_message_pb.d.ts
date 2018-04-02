// package: examplecom
// file: examplecom/well_known_message.proto

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


export class WellKnownMessage extends jspb.Message {
  hasMyCodeGeneratorRequest(): boolean;
  clearMyCodeGeneratorRequest(): void;
  getMyCodeGeneratorRequest(): google_protobuf_compiler_plugin_pb.CodeGeneratorRequest | undefined;
  setMyCodeGeneratorRequest(value?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest): void;

  hasMyAny(): boolean;
  clearMyAny(): void;
  getMyAny(): google_protobuf_any_pb.Any | undefined;
  setMyAny(value?: google_protobuf_any_pb.Any): void;

  hasMyMethod(): boolean;
  clearMyMethod(): void;
  getMyMethod(): google_protobuf_api_pb.Method | undefined;
  setMyMethod(value?: google_protobuf_api_pb.Method): void;

  hasMyGeneratedCodeInfo(): boolean;
  clearMyGeneratedCodeInfo(): void;
  getMyGeneratedCodeInfo(): google_protobuf_descriptor_pb.GeneratedCodeInfo | undefined;
  setMyGeneratedCodeInfo(value?: google_protobuf_descriptor_pb.GeneratedCodeInfo): void;

  hasMyDuration(): boolean;
  clearMyDuration(): void;
  getMyDuration(): google_protobuf_duration_pb.Duration | undefined;
  setMyDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasMyEmpty(): boolean;
  clearMyEmpty(): void;
  getMyEmpty(): google_protobuf_empty_pb.Empty | undefined;
  setMyEmpty(value?: google_protobuf_empty_pb.Empty): void;

  hasMyFieldMask(): boolean;
  clearMyFieldMask(): void;
  getMyFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setMyFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasMySourceContext(): boolean;
  clearMySourceContext(): void;
  getMySourceContext(): google_protobuf_source_context_pb.SourceContext | undefined;
  setMySourceContext(value?: google_protobuf_source_context_pb.SourceContext): void;

  hasMyStruct(): boolean;
  clearMyStruct(): void;
  getMyStruct(): google_protobuf_struct_pb.Struct | undefined;
  setMyStruct(value?: google_protobuf_struct_pb.Struct): void;

  hasMyTimestamp(): boolean;
  clearMyTimestamp(): void;
  getMyTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMyTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMyType(): boolean;
  clearMyType(): void;
  getMyType(): google_protobuf_type_pb.Type | undefined;
  setMyType(value?: google_protobuf_type_pb.Type): void;

  hasMyDoubleValue(): boolean;
  clearMyDoubleValue(): void;
  getMyDoubleValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setMyDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WellKnownMessage.AsObject;
  static toObject(includeInstance: boolean, msg: WellKnownMessage): WellKnownMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WellKnownMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WellKnownMessage;
  static deserializeBinaryFromReader(message: WellKnownMessage, reader: jspb.BinaryReader): WellKnownMessage;
}

export namespace WellKnownMessage {
  export type AsObject = {
    myCodeGeneratorRequest?: google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.AsObject,
    myAny?: google_protobuf_any_pb.Any.AsObject,
    myMethod?: google_protobuf_api_pb.Method.AsObject,
    myGeneratedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo.AsObject,
    myDuration?: google_protobuf_duration_pb.Duration.AsObject,
    myEmpty?: google_protobuf_empty_pb.Empty.AsObject,
    myFieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    mySourceContext?: google_protobuf_source_context_pb.SourceContext.AsObject,
    myStruct?: google_protobuf_struct_pb.Struct.AsObject,
    myTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    myType?: google_protobuf_type_pb.Type.AsObject,
    myDoubleValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

