const chai = require("chai");
const assert = chai.assert;
const simple_service_pb_service = require("../generated/examplecom/simple_service_pb_service");
const simple_service_pb = require("../generated/examplecom/simple_service_pb");
const external_child_message_pb = require("../generated/othercom/external_child_message_pb");

describe("js service", () => {
  it("should generate a service definition", () => {
    assert.strictEqual(simple_service_pb_service.SimpleService.serviceName, "examplecom.SimpleService");

    assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.methodName, "DoUnary");
    assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.service, simple_service_pb_service.SimpleService);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.requestStream, false);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.responseStream, false);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.requestType, simple_service_pb.UnaryRequest);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoUnary.responseType, external_child_message_pb.ExternalChildMessage);

    assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.methodName, "DoStream");
    assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.service, simple_service_pb_service.SimpleService);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.requestStream, false);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.responseStream, true);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.requestType, simple_service_pb.StreamRequest);
    assert.strictEqual(simple_service_pb_service.SimpleService.DoStream.responseType, external_child_message_pb.ExternalChildMessage);
  });
});
