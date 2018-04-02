// package: examplecom
// file: examplecom/simple_service.proto

var examplecom_simple_service_pb = require("../examplecom/simple_service_pb");
var othercom_external_child_message_pb = require("../othercom/external_child_message_pb");

var SimpleService = (function () {
  function SimpleService() {}
  SimpleService.serviceName = "examplecom.SimpleService";
  return SimpleService;
}());

SimpleService.DoUnary = {  methodName: "DoUnary",
  service: SimpleService,
  requestStream: false,
  responseStream: false,
  requestType: examplecom_simple_service_pb.UnaryRequest,
  responseType: othercom_external_child_message_pb.ExternalChildMessage
};

SimpleService.DoStream = {  methodName: "DoStream",
  service: SimpleService,
  requestStream: false,
  responseStream: true,
  requestType: examplecom_simple_service_pb.StreamRequest,
  responseType: othercom_external_child_message_pb.ExternalChildMessage
};

exports.SimpleService = SimpleService;

