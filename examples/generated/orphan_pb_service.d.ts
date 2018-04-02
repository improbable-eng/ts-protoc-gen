// package: 
// file: orphan.proto

import * as orphan_pb from "./orphan_pb";

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

