// package: 
// file: proto/orphan.proto

import * as proto_orphan_pb from "../proto/orphan_pb";
import {grpc} from "@improbable-eng/grpc-web";

type OrphanServiceDoUnary = {
  readonly methodName: string;
  readonly service: typeof OrphanService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_orphan_pb.OrphanUnaryRequest;
  readonly responseType: typeof proto_orphan_pb.OrphanMessage;
};

type OrphanServiceDoStream = {
  readonly methodName: string;
  readonly service: typeof OrphanService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof proto_orphan_pb.OrphanStreamRequest;
  readonly responseType: typeof proto_orphan_pb.OrphanMessage;
};

export class OrphanService {
  static readonly serviceName: string;
  static readonly DoUnary: OrphanServiceDoUnary;
  static readonly DoStream: OrphanServiceDoStream;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class OrphanServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  doUnary(
    requestMessage: proto_orphan_pb.OrphanUnaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_orphan_pb.OrphanMessage|null) => void
  ): UnaryResponse;
  doUnary(
    requestMessage: proto_orphan_pb.OrphanUnaryRequest,
    callback: (error: ServiceError|null, responseMessage: proto_orphan_pb.OrphanMessage|null) => void
  ): UnaryResponse;
  doStream(requestMessage: proto_orphan_pb.OrphanStreamRequest, metadata?: grpc.Metadata): ResponseStream<proto_orphan_pb.OrphanMessage>;
}

