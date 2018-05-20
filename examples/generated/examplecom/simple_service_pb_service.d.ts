// package: examplecom
// file: examplecom/simple_service.proto

import * as examplecom_simple_service_pb from "../examplecom/simple_service_pb";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";
import {grpc} from "grpc-web-client";

type SimpleServiceDoUnary = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof examplecom_simple_service_pb.UnaryRequest;
  readonly responseType: typeof othercom_external_child_message_pb.ExternalChildMessage;
};

type SimpleServiceDoStream = {
  readonly methodName: string;
  readonly service: typeof SimpleService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof examplecom_simple_service_pb.StreamRequest;
  readonly responseType: typeof othercom_external_child_message_pb.ExternalChildMessage;
};

export class SimpleService {
  static readonly serviceName: string;
  static readonly DoUnary: SimpleServiceDoUnary;
  static readonly DoStream: SimpleServiceDoStream;
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
    requestMessage: examplecom_simple_service_pb.UnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: othercom_external_child_message_pb.ExternalChildMessage|null) => void
  ): void;
  doUnary(
    requestMessage: examplecom_simple_service_pb.UnaryRequest,
    callback: (error: ServiceError, responseMessage: othercom_external_child_message_pb.ExternalChildMessage|null) => void
  ): void;
  doStream(requestMessage: examplecom_simple_service_pb.StreamRequest, metadata?: grpc.Metadata): ResponseStream<othercom_external_child_message_pb.ExternalChildMessage>;
}

