// package: examplecom
// file: proto/examplecom/simple_service.proto

import * as proto_examplecom_simple_service_pb from "../../proto/examplecom/simple_service_pb";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb";
import {grpc} from "grpc-web-client";

type SimpleServiceDoUnary = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_examplecom_simple_service_pb.UnaryRequest;
  readonly responseType: typeof proto_othercom_external_child_message_pb.ExternalChildMessage;
};

type SimpleServiceDoStream = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
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
  static readonly DoStream: SimpleServiceDoStream;
  static readonly Delete: SimpleServiceDelete;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class SimpleServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  doUnary(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: proto_othercom_external_child_message_pb.ExternalChildMessage|null) => void
  ): void;
  doUnary(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    callback: (error: ServiceError, responseMessage: proto_othercom_external_child_message_pb.ExternalChildMessage|null) => void
  ): void;
  doStream(requestMessage: proto_examplecom_simple_service_pb.StreamRequest, metadata?: grpc.Metadata): ResponseStream<proto_othercom_external_child_message_pb.ExternalChildMessage>;
  delete(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: proto_examplecom_simple_service_pb.UnaryResponse|null) => void
  ): void;
  delete(
    requestMessage: proto_examplecom_simple_service_pb.UnaryRequest,
    callback: (error: ServiceError, responseMessage: proto_examplecom_simple_service_pb.UnaryResponse|null) => void
  ): void;
}

