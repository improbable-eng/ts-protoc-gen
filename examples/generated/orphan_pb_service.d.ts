// package: 
// file: orphan.proto

import * as orphan_pb from "./orphan_pb";
import {grpc} from "grpc-web-client";

type OrphanServiceDoUnary = {
  readonly methodName: string;
  readonly service: typeof OrphanService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof orphan_pb.OrphanUnaryRequest;
  readonly responseType: typeof orphan_pb.OrphanMessage;
};

type OrphanServiceDoStream = {
  readonly methodName: string;
  readonly service: typeof OrphanService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof orphan_pb.OrphanStreamRequest;
  readonly responseType: typeof orphan_pb.OrphanMessage;
};

export class OrphanService {
  static readonly serviceName: string;
  static readonly DoUnary: OrphanServiceDoUnary;
  static readonly DoStream: OrphanServiceDoStream;
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

export class OrphanServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  doUnary(
    requestMessage: orphan_pb.OrphanUnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: orphan_pb.OrphanMessage|null) => void
  ): void;
  doUnary(
    requestMessage: orphan_pb.OrphanUnaryRequest,
    callback: (error: ServiceError, responseMessage: orphan_pb.OrphanMessage|null) => void
  ): void;
  doStream(requestMessage: orphan_pb.OrphanStreamRequest, metadata?: grpc.Metadata): ResponseStream<orphan_pb.OrphanMessage>;
}

