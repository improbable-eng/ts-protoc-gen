// package: examplecom
// file: proto/examplecom/simple_service.proto

import * as proto_examplecom_simple_service_pb from "../../proto/examplecom/simple_service_pb";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "grpc-web-client";

type SimpleServiceDoUnary = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_examplecom_simple_service_pb.UnaryRequest;
  readonly responseType: typeof proto_othercom_external_child_message_pb.ExternalChildMessage;
};

type SimpleServiceDoServerStream = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_examplecom_simple_service_pb.StreamRequest;
  readonly responseType: typeof proto_othercom_external_child_message_pb.ExternalChildMessage;
};

type SimpleServiceDoClientStream = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof proto_examplecom_simple_service_pb.StreamRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type SimpleServiceDoBidiStream = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof proto_examplecom_simple_service_pb.StreamRequest;
  readonly responseType: typeof proto_othercom_external_child_message_pb.ExternalChildMessage;
};

type SimpleServiceDelete = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_examplecom_simple_service_pb.UnaryRequest;
  readonly responseType: typeof proto_examplecom_simple_service_pb.UnaryResponse;
};

export class SimpleService {
  static readonly serviceName: string;
  static readonly DoUnary: SimpleServiceDoUnary;
  static readonly DoServerStream: SimpleServiceDoServerStream;
  static readonly DoClientStream: SimpleServiceDoClientStream;
  static readonly DoBidiStream: SimpleServiceDoBidiStream;
  static readonly Delete: SimpleServiceDelete;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<T> {
  write(message: T): BidirectionalStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): BidirectionalStream<T>;
  on(type: 'end', handler: () => void): BidirectionalStream<T>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<T>;
}

export class SimpleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  doUnary(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_othercom_external_child_message_pb.ExternalChildMessage|null) => void
  ): UnaryResponse;
  doUnary(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    callback: (error: ServiceError|null, responseMessage: proto_othercom_external_child_message_pb.ExternalChildMessage|null) => void
  ): UnaryResponse;
  doServerStream(requestMessage: proto_examplecom_simple_service_pb.StreamRequest, metadata?: grpc.Metadata): ResponseStream<proto_othercom_external_child_message_pb.ExternalChildMessage>;
  doClientStream(metadata?: grpc.Metadata): RequestStream<google_protobuf_empty_pb.Empty>;
  doBidiStream(metadata?: grpc.Metadata): BidirectionalStream<proto_othercom_external_child_message_pb.ExternalChildMessage>;
  delete(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_examplecom_simple_service_pb.UnaryResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    callback: (error: ServiceError|null, responseMessage: proto_examplecom_simple_service_pb.UnaryResponse|null) => void
  ): UnaryResponse;
}

