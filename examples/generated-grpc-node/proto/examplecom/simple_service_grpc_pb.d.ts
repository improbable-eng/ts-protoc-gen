// GENERATED CODE -- DO NOT EDIT!

// package: examplecom
// file: proto/examplecom/simple_service.proto

import * as proto_examplecom_simple_service_pb from "../../proto/examplecom/simple_service_pb";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface MethodDefinition<RequestType, ResponseType> extends grpc.MethodDefinition<RequestType, ResponseType> {
  requestType: { new(): RequestType };
  responseType: { new(): ResponseType };
}

interface ISimpleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  doUnary: MethodDefinition<proto_examplecom_simple_service_pb.UnaryRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doServerStream: MethodDefinition<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doClientStream: MethodDefinition<proto_examplecom_simple_service_pb.StreamRequest, google_protobuf_empty_pb.Empty>;
  doBidiStream: MethodDefinition<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  delete: MethodDefinition<proto_examplecom_simple_service_pb.UnaryRequest, proto_examplecom_simple_service_pb.UnaryResponse>;
}

export const SimpleServiceService: ISimpleServiceService;

export class SimpleServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  doUnary(argument: proto_examplecom_simple_service_pb.UnaryRequest, callback: grpc.requestCallback<proto_othercom_external_child_message_pb.ExternalChildMessage>): grpc.ClientUnaryCall;
  doUnary(argument: proto_examplecom_simple_service_pb.UnaryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_othercom_external_child_message_pb.ExternalChildMessage>): grpc.ClientUnaryCall;
  doUnary(argument: proto_examplecom_simple_service_pb.UnaryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_othercom_external_child_message_pb.ExternalChildMessage>): grpc.ClientUnaryCall;
  doServerStream(argument: proto_examplecom_simple_service_pb.StreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doServerStream(argument: proto_examplecom_simple_service_pb.StreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doClientStream(callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<proto_examplecom_simple_service_pb.StreamRequest>;
  doClientStream(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<proto_examplecom_simple_service_pb.StreamRequest>;
  doClientStream(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<proto_examplecom_simple_service_pb.StreamRequest>;
  doBidiStream(callback: grpc.requestCallback<proto_othercom_external_child_message_pb.ExternalChildMessage>): grpc.ClientWritableStream<proto_examplecom_simple_service_pb.StreamRequest>;
  doBidiStream(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_othercom_external_child_message_pb.ExternalChildMessage>): grpc.ClientWritableStream<proto_examplecom_simple_service_pb.StreamRequest>;
  doBidiStream(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_othercom_external_child_message_pb.ExternalChildMessage>): grpc.ClientWritableStream<proto_examplecom_simple_service_pb.StreamRequest>;
  delete(argument: proto_examplecom_simple_service_pb.UnaryRequest, callback: grpc.requestCallback<proto_examplecom_simple_service_pb.UnaryResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_examplecom_simple_service_pb.UnaryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_examplecom_simple_service_pb.UnaryResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_examplecom_simple_service_pb.UnaryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_examplecom_simple_service_pb.UnaryResponse>): grpc.ClientUnaryCall;
}
