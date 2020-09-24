// GENERATED CODE -- DO NOT EDIT!

// package: examplecom
// file: proto/examplecom/simple_service.proto

import * as proto_examplecom_simple_service_pb from "../../proto/examplecom/simple_service_pb";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISimpleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  doUnary: grpc.MethodDefinition<proto_examplecom_simple_service_pb.UnaryRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doServerStream: grpc.MethodDefinition<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doClientStream: grpc.MethodDefinition<proto_examplecom_simple_service_pb.StreamRequest, google_protobuf_empty_pb.Empty>;
  doBidiStream: grpc.MethodDefinition<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  delete: grpc.MethodDefinition<proto_examplecom_simple_service_pb.UnaryRequest, proto_examplecom_simple_service_pb.UnaryResponse>;
}

export const SimpleServiceService: ISimpleServiceService;

export interface ISimpleServiceServer extends grpc.UntypedServiceImplementation {
  doUnary: grpc.handleUnaryCall<proto_examplecom_simple_service_pb.UnaryRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doServerStream: grpc.handleServerStreamingCall<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doClientStream: grpc.handleClientStreamingCall<proto_examplecom_simple_service_pb.StreamRequest, google_protobuf_empty_pb.Empty>;
  doBidiStream: grpc.handleBidiStreamingCall<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  delete: grpc.handleUnaryCall<proto_examplecom_simple_service_pb.UnaryRequest, proto_examplecom_simple_service_pb.UnaryResponse>;
}

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
  doBidiStream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doBidiStream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<proto_examplecom_simple_service_pb.StreamRequest, proto_othercom_external_child_message_pb.ExternalChildMessage>;
  delete(argument: proto_examplecom_simple_service_pb.UnaryRequest, callback: grpc.requestCallback<proto_examplecom_simple_service_pb.UnaryResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_examplecom_simple_service_pb.UnaryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_examplecom_simple_service_pb.UnaryResponse>): grpc.ClientUnaryCall;
  delete(argument: proto_examplecom_simple_service_pb.UnaryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_examplecom_simple_service_pb.UnaryResponse>): grpc.ClientUnaryCall;
}
