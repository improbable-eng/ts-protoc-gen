"use strict";
// package: examplecom
// file: examplecom/simple_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
var examplecom_simple_service_pb = require("../examplecom/simple_service_pb");
var othercom_external_child_message_pb = require("../othercom/external_child_message_pb");
var SimpleService = /** @class */ (function () {
    function SimpleService() {
    }
    SimpleService.serviceName = "examplecom.SimpleService";
    return SimpleService;
}());
exports.SimpleService = SimpleService;
(function (SimpleService) {
    var DoUnary = /** @class */ (function () {
        function DoUnary() {
        }
        DoUnary.methodName = "DoUnary";
        DoUnary.service = SimpleService;
        DoUnary.requestStream = false;
        DoUnary.responseStream = false;
        DoUnary.requestType = examplecom_simple_service_pb.UnaryRequest;
        DoUnary.responseType = othercom_external_child_message_pb.ExternalChildMessage;
        return DoUnary;
    }());
    SimpleService.DoUnary = DoUnary;
    var DoStream = /** @class */ (function () {
        function DoStream() {
        }
        DoStream.methodName = "DoStream";
        DoStream.service = SimpleService;
        DoStream.requestStream = false;
        DoStream.responseStream = true;
        DoStream.requestType = examplecom_simple_service_pb.StreamRequest;
        DoStream.responseType = othercom_external_child_message_pb.ExternalChildMessage;
        return DoStream;
    }());
    SimpleService.DoStream = DoStream;
})(SimpleService = exports.SimpleService || (exports.SimpleService = {}));
exports.SimpleService = SimpleService;
// TEST
var SimpleService = /** @class */ (function () {
    function SimpleService() {
    }
    SimpleService.serviceName = "examplecom.SimpleService";
    return SimpleService;
}());
exports.SimpleService = SimpleService;
(function (SimpleService) {
    var DoUnary = /** @class */ (function () {
        function DoUnary() {
        }
        DoUnary.methodName = "DoUnary";
        DoUnary.service = "SimpleService";
        DoUnary.requestStream = false;
        DoUnary.responseStream = false;
        DoUnary.requestType = false;
        DoUnary.requestType = "examplecom_simple_service_pb.UnaryRequest";
        DoUnary.responseType = "othercom_external_child_message_pb.ExternalChildMessage";
        return DoUnary;
    }());
    SimpleService.DoUnary = DoUnary;
    var DoStream = /** @class */ (function () {
        function DoStream() {
        }
        DoStream.methodName = "DoStream";
        DoStream.service = "SimpleService";
        DoStream.requestStream = false;
        DoStream.responseStream = true;
        DoStream.requestType = true;
        DoStream.requestType = "examplecom_simple_service_pb.StreamRequest";
        DoStream.responseType = "othercom_external_child_message_pb.ExternalChildMessage";
        return DoStream;
    }());
    SimpleService.DoStream = DoStream;
})(SimpleService = exports.SimpleService || (exports.SimpleService = {}));
exports.SimpleService = SimpleService;
// end TEST
//# sourceMappingURL=simple_service_pb_service.js.map