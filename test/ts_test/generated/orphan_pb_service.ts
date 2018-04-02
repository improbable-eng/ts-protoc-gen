// package: 
// file: orphan.proto

import * as orphan_pb from "./orphan_pb";
export class OrphanService {
  static serviceName = "OrphanService";
}
export namespace OrphanService {
  export class DoUnary {
    static readonly methodName = "DoUnary";
    static readonly service = OrphanService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = orphan_pb.OrphanUnaryRequest;
    static readonly responseType = orphan_pb.OrphanMessage;
  }
  export class DoStream {
    static readonly methodName = "DoStream";
    static readonly service = OrphanService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = orphan_pb.OrphanStreamRequest;
    static readonly responseType = orphan_pb.OrphanMessage;
  }
}
// TEST
export class OrphanService {
    static serviceName = "OrphanService";
}
export module OrphanService {
    export class DoUnary {
        static readonly methodName = "DoUnary";
        static readonly service = "OrphanService";
        static readonly requestStream = false;
        static readonly responseStream = false;
        static readonly requestType = false;
        static readonly requestType = "orphan_pb.OrphanUnaryRequest";
        static readonly responseType = "orphan_pb.OrphanMessage";
    }
    export class DoStream {
        static readonly methodName = "DoStream";
        static readonly service = "OrphanService";
        static readonly requestStream = false;
        static readonly responseStream = true;
        static readonly requestType = true;
        static readonly requestType = "orphan_pb.OrphanStreamRequest";
        static readonly responseType = "orphan_pb.OrphanMessage";
    }
}
// end TEST
