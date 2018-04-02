"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var simple_service_pb_service = require("../generated/examplecom/simple_service_pb_service");
var simple_service_pb = require("../generated/examplecom/simple_service_pb");
var external_child_message_pb = require("../generated/othercom/external_child_message_pb");
describe("ts service", function () {
    it("should generate a service definition", function () {
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.serviceName, "examplecom.SimpleService");
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.methodName, "DoUnary");
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.service, simple_service_pb_service.SimpleService);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.requestStream, false);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.responseStream, false);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.requestType, simple_service_pb.UnaryRequest);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.responseType, external_child_message_pb.ExternalChildMessage);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.methodName, "DoStream");
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.service, simple_service_pb_service.SimpleService);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.requestStream, false);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.responseStream, true);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.requestType, simple_service_pb.StreamRequest);
        chai_1.assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.responseType, external_child_message_pb.ExternalChildMessage);
    });
});
//# sourceMappingURL=service.js.map