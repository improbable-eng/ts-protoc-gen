// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/orphan.proto

import * as proto_orphan_pb from "../proto/orphan_pb";
import * as grpc from "grpc";

interface IOrphanServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  doUnary: grpc.MethodDefinition<proto_orphan_pb.OrphanUnaryRequest, proto_orphan_pb.OrphanMessage>;
  doStream: grpc.MethodDefinition<proto_orphan_pb.OrphanStreamRequest, proto_orphan_pb.OrphanMessage>;
}

export const OrphanServiceService: IOrphanServiceService;

export interface IOrphanServiceServer extends grpc.UntypedServiceImplementation {
  doUnary(call: grpc.ServerUnaryCall<proto_orphan_pb.OrphanUnaryRequest, proto_orphan_pb.OrphanMessage>, callback: grpc.sendUnaryData<proto_orphan_pb.OrphanMessage>): void;
  doStream(call: grpc.ServerWritableStream<proto_orphan_pb.OrphanStreamRequest, proto_orphan_pb.OrphanMessage>): void;
}

export class OrphanServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  doUnary(argument: proto_orphan_pb.OrphanUnaryRequest, callback: grpc.requestCallback<proto_orphan_pb.OrphanMessage>): grpc.ClientUnaryCall;
  doUnary(argument: proto_orphan_pb.OrphanUnaryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_orphan_pb.OrphanMessage>): grpc.ClientUnaryCall;
  doUnary(argument: proto_orphan_pb.OrphanUnaryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_orphan_pb.OrphanMessage>): grpc.ClientUnaryCall;
  doStream(argument: proto_orphan_pb.OrphanStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_orphan_pb.OrphanMessage>;
  doStream(argument: proto_orphan_pb.OrphanStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_orphan_pb.OrphanMessage>;
}
