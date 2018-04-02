// package: examplecom
// file: examplecom/simple_service.proto

import * as examplecom_simple_service_pb from "../examplecom/simple_service_pb";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";
export class SimpleService {
  static serviceName = "examplecom.SimpleService";
}
export namespace SimpleService {
  export class DoUnary {
    static readonly methodName = "DoUnary";
    static readonly service = SimpleService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = examplecom_simple_service_pb.UnaryRequest;
    static readonly responseType = othercom_external_child_message_pb.ExternalChildMessage;
  }
  export class DoStream {
    static readonly methodName = "DoStream";
    static readonly service = SimpleService;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = examplecom_simple_service_pb.StreamRequest;
    static readonly responseType = othercom_external_child_message_pb.ExternalChildMessage;
  }
}
// TEST
export class SimpleService {
    static serviceName = "examplecom.SimpleService";
}
export module SimpleService {
    export class DoUnary {
        static readonly methodName = "DoUnary";
        static readonly service = "SimpleService";
        static readonly requestStream = false;
        static readonly responseStream = false;
        static readonly requestType = false;
        static readonly requestType = "examplecom_simple_service_pb.UnaryRequest";
        static readonly responseType = "othercom_external_child_message_pb.ExternalChildMessage";
    }
    export class DoStream {
        static readonly methodName = "DoStream";
        static readonly service = "SimpleService";
        static readonly requestStream = false;
        static readonly responseStream = true;
        static readonly requestType = true;
        static readonly requestType = "examplecom_simple_service_pb.StreamRequest";
        static readonly responseType = "othercom_external_child_message_pb.ExternalChildMessage";
    }
}
// end TEST
