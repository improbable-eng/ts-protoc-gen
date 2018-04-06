import {resolve} from "path";
import {readFileSync} from "fs";
import {assert} from "chai";
import { createContext, runInContext } from "vm";
import * as simple_service_pb_service from "../../generated/examplecom/simple_service_pb_service";
import * as simple_service_pb from "../../generated/examplecom/simple_service_pb";
import * as external_child_message_pb from "../../generated/othercom/external_child_message_pb";

describe("ts service", () => {
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
  it("should not output imports for namespaces that are not used in the service definition", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../generated/examplecom/simple_service_pb_service.d.ts"), "utf8");
    assert.notInclude(generatedService, "google-protobuf/google/protobuf/timestamp_pb");

    const generatedProto = readFileSync(resolve(__dirname, "../../../generated/examplecom/simple_service_pb.js"), "utf8");
    assert.include(generatedProto, "google-protobuf/google/protobuf/timestamp_pb");
  });
  it("should generate valid javascript sources", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../generated/examplecom/simple_service_pb_service.js"), "utf8");

    // Create a sandbox into which the javascript module will be exported.
    const sandbox = { exports: { SimpleService: simple_service_pb_service.SimpleService } };
    createContext(sandbox);

    // Create a wrapper around the module's source code which injects a stubbed require function
    // which will return stub modules.
    const wrapper = `((require) => { ${generatedService} });`;
    const fakeRequire = (name: string) => {
      if (name.indexOf("/simple_service_pb") !== -1) {
        return {
          UnaryRequest: simple_service_pb.UnaryRequest,
          StreamRequest: simple_service_pb.StreamRequest,
        }
      }
      else if (name.indexOf("/external_child_message_pb") !== -1) {
        return {
          ExternalChildMessage: external_child_message_pb.ExternalChildMessage,
        }
      }
      return {};
    };

    runInContext(wrapper, sandbox)(fakeRequire);

    assert.strictEqual(typeof sandbox.exports.SimpleService, "function");
    assert.strictEqual(sandbox.exports.SimpleService.serviceName, "examplecom.SimpleService");

    assert.strictEqual(typeof sandbox.exports.SimpleService.DoStream, "object");
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.methodName, "DoStream");
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.service, sandbox.exports.SimpleService);
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.requestStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.responseStream, true);
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.requestType, simple_service_pb.StreamRequest);
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.responseType, external_child_message_pb.ExternalChildMessage);

    assert.strictEqual(typeof sandbox.exports.SimpleService.DoUnary, "object");
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.methodName, "DoUnary");
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.service, sandbox.exports.SimpleService);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.requestStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.responseStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.requestType, simple_service_pb.UnaryRequest);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.responseType, external_child_message_pb.ExternalChildMessage);
  });

  it("Should generate a service stub", () => {
    assert.typeOf(simple_service_pb_service.SimpleServiceClient, "function", "SimpleServiceClient class shoudl exist");

    const client = new simple_service_pb_service.SimpleServiceClient("http://localhost:1");

    assert.equal(client.serviceHost, "http://localhost:1", "Service host should be stored from constructor")

    assert.typeOf(client.doUnary, "function", "Service should have doUnary method");
    assert.typeOf(client.doStream, "function", "Service should have doStream method");
  });

  it("Should generate a working doUnary method", (done) => {
    const client = new simple_service_pb_service.SimpleServiceClient("http://localhost:1");
    const request = new simple_service_pb.UnaryRequest();
    client.doUnary(
      request,
      undefined,
      (error: any, response: any) => {
        assert.equal(
          JSON.stringify(error),
          JSON.stringify({
            status: 13,
            statusMessage: "Response closed without headers",
            headers: {headersMap: {}},
            message: null,
            trailers: {headersMap: {}}
          }),
          "Should return an error with no server running on port 1"
        );
        done();
      }
    );
  });

  it("Should generate a working doStream method", (done) => {
    const client = new simple_service_pb_service.SimpleServiceClient("http://localhost:1");
    const request = new simple_service_pb.StreamRequest();
    client
      .doStream(request)
      .on("end", () => {
        // Test passes when callback is called
        done();
      });
  });
});
