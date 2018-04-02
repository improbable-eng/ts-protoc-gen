// package: examplecom
// file: examplecom/simple_service.proto

import * as examplecom_simple_service_pb from "../examplecom/simple_service_pb";
import * as othercom_external_child_message_pb from "../othercom/external_child_message_pb";

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

