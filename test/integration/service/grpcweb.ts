import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import { assert } from "chai";
import { grpc } from "grpc-web-client";
import { createContext, runInContext } from "vm";

import { StubTransportBuilder } from "../../helpers/fakeGrpcTransport";
import { ExternalChildMessage } from "../../../examples/generated/proto/othercom/external_child_message_pb";
import { SimpleService, SimpleServiceClient } from "../../../examples/generated/proto/examplecom/simple_service_pb_service";
import { StreamRequest, UnaryRequest } from "../../../examples/generated/proto/examplecom/simple_service_pb";


describe("service/grpc-web", () => {
  it("should generate a service definition", () => {
    assert.strictEqual(SimpleService.serviceName, "examplecom.SimpleService");

    assert.strictEqual(SimpleService.DoUnary.methodName, "DoUnary");
    assert.strictEqual(SimpleService.DoUnary.service, SimpleService);
    assert.strictEqual(SimpleService.DoUnary.requestStream, false);
    assert.strictEqual(SimpleService.DoUnary.responseStream, false);
    assert.strictEqual(SimpleService.DoUnary.requestType, UnaryRequest);
    assert.strictEqual(SimpleService.DoUnary.responseType, ExternalChildMessage);

    assert.strictEqual(SimpleService.DoStream.methodName, "DoStream");
    assert.strictEqual(SimpleService.DoStream.service, SimpleService);
    assert.strictEqual(SimpleService.DoStream.requestStream, false);
    assert.strictEqual(SimpleService.DoStream.responseStream, true);
    assert.strictEqual(SimpleService.DoStream.requestType, StreamRequest);
    assert.strictEqual(SimpleService.DoStream.responseType, ExternalChildMessage);
  });

  it("should generate service definition files for protos that have no service definitions", () => {
    assert.isTrue(existsSync(resolve(__dirname, "../../../examples/generated/examplecom/empty_message_no_service_pb_service.d.ts")));
    assert.isTrue(existsSync(resolve(__dirname, "../../../examples/generated/examplecom/empty_message_no_service_pb_service.js")));
  });

  it("should not output imports for namespaces that are not used in the service definition", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated/proto/examplecom/simple_service_pb_service.d.ts"), "utf8");
    assert.notInclude(generatedService, "google-protobuf/google/protobuf/timestamp_pb");

    const generatedProto = readFileSync(resolve(__dirname, "../../../examples/generated/proto/examplecom/simple_service_pb.js"), "utf8");
    assert.include(generatedProto, "google-protobuf/google/protobuf/timestamp_pb");
  });

  it("should generate valid javascript sources", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated/proto/examplecom/simple_service_pb_service.js"), "utf8");

    // Create a sandbox into which the javascript module will be exported.
    const sandbox = { exports: { SimpleService: SimpleService } };
    createContext(sandbox);

    // Create a wrapper around the module's source code which injects a stubbed require function
    // which will return stub modules.
    const wrapper = `((require) => { ${generatedService} });`;
    const fakeRequire = (name: string) => {
      if (name.indexOf("/simple_service_pb") !== -1) {
        return {
          UnaryRequest: UnaryRequest,
          StreamRequest: StreamRequest,
        };
      }
      else if (name.indexOf("/external_child_message_pb") !== -1) {
        return {
          ExternalChildMessage: ExternalChildMessage,
        };
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
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.requestType, StreamRequest);
    assert.strictEqual(sandbox.exports.SimpleService.DoStream.responseType, ExternalChildMessage);

    assert.strictEqual(typeof sandbox.exports.SimpleService.DoUnary, "object");
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.methodName, "DoUnary");
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.service, sandbox.exports.SimpleService);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.requestStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.responseStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.requestType, UnaryRequest);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.responseType, ExternalChildMessage);
  });

  describe("grpc-web service stubs", () => {
    function makeClient(transportBuilder: StubTransportBuilder): SimpleServiceClient {
      return new SimpleServiceClient("http://localhost:1", {
        transport: transportBuilder.build(),
      });
    }

    function makePayloads(...values: string[]): ExternalChildMessage[] {
      return values.map(value => {
        const payload = new ExternalChildMessage();
        payload.setMyString(value);
        return payload;
      });
    }

    it("should generate a service stub", () => {
      assert.typeOf(SimpleServiceClient, "function", "SimpleServiceClient class shoudl exist");

      const client = new SimpleServiceClient("http://localhost:1");

      assert.equal(client.serviceHost, "http://localhost:1", "Service host should be stored from constructor");
      assert.typeOf(client.doUnary, "function", "Service should have doUnary method");
      assert.typeOf(client.doStream, "function", "Service should have doStream method");
    });

    describe("unary", () => {
      it("should route the request to the expected endpoint", (done) => {
        let targetUrl = "";

        makeClient(
          new StubTransportBuilder().withRequestListener(options => targetUrl = options.url)
        )
          .doUnary(
            new UnaryRequest(),
            () => {
              assert.equal(targetUrl, "http://localhost:1/examplecom.SimpleService/DoUnary");
              done();
            });
      });

      it("should handle errors returned by the unary endpoint", (done) => {
        makeClient(
          new StubTransportBuilder().withPreTrailersError(grpc.Code.Internal, "some internal error")
        )
          .doUnary(
            new UnaryRequest(),
            (error, response) => {
              assert.ok(error !== null && typeof error === "object", "should yield an error");
              assert.ok(response === null, "should yield null instead of a response");

              assert.equal(error.message, "some internal error", "should expose the grpc error message (.message)");
              assert.equal(error.code, 13, "should expose the grpc status code (.code)");
              assert.ok(error.metadata instanceof grpc.Metadata, "should expose the trailing response metadata (.metadata)");
              done();
            });
      });

      it("should expose data returned by the unary endpoint", (done) => {
        const [payload] = makePayloads("some value");

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doUnary(
            new UnaryRequest(),
            (error, response) => {
              assert.ok(error === null, "should not yield an error");
              assert.ok(response !== null, "should yield a response");
              assert.equal(response!.getMyString(), "some value", "should return the expected payload");
              done();
            });
      });

      it("should allow the caller to supply Metadata", (done) => {
        let sentHeaders: grpc.Metadata;

        makeClient(new StubTransportBuilder().withHeadersListener(headers => sentHeaders = headers))
          .doUnary(
            new UnaryRequest(),
            new grpc.Metadata({ "foo": "bar" }),
            () => {
              assert.ok(sentHeaders !== null, "must have intercepted request headers");
              assert.deepEqual(sentHeaders.get("foo"), ["bar"], "expected headers to have been sent");
              done();
            });
      });
    });

    describe("streaming", () => {
      it("should route the request to the expected endpoint", (done) => {
        let targetUrl = "";

        makeClient(new StubTransportBuilder().withRequestListener(options => targetUrl = options.url))
          .doStream(new StreamRequest())
          .on("end", () => {
            assert.equal(targetUrl, "http://localhost:1/examplecom.SimpleService/DoStream");
            done();
          });
      });

      it("should invoke onEnd before onStatus", (done) => {
        const [payload] = makePayloads("some value");
        let onEndInvoked = false;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doStream(new StreamRequest())
          .on("end", () => { onEndInvoked = true; })
          .on("status", () => {
            assert.ok(onEndInvoked, "onEnd callback should be invoked before onStatus");
            done();
          });
      });

      it("should handle an error returned ahead of any data by the unary endpoint", (done) => {
        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some error"))
          .doStream(new StreamRequest())
          .on("status", (status) => {
            assert.equal(status.code, grpc.Code.Internal, "expected grpc status code returned");
            assert.equal(status.details, "some error", "expected grpc error details returned");
            done();
          });
      });

      it("should handle an error returned mid-stream by the unary endpoint", (done) => {
        const [payload] = makePayloads("some value");
        let actualData: ExternalChildMessage[] = [];

        makeClient(new StubTransportBuilder()
          .withMessages([payload])
          .withPreTrailersError(grpc.Code.Internal, "some error")
        )
          .doStream(new StreamRequest())
          .on("data", payload => actualData.push(payload))
          .on("status", status => {
            assert.equal(status.code, grpc.Code.Internal, "expected grpc status code returned");
            assert.equal(status.details, "some error", "expected grpc error details returned");
            assert.equal(actualData.length, 1, "data sent before error is returned");
            assert.equal(actualData[0].getMyString(), "some value", "payload is well formed");
            done();
          });
      });

      it("should expose the data return by the streaming endpoint", (done) => {
        const [payload1, payload2] = makePayloads("some value", "another value");
        let actualData: ExternalChildMessage[] = [];

        makeClient(new StubTransportBuilder().withMessages([payload1, payload2]))
          .doStream(new StreamRequest())
          .on("data", payload => actualData.push(payload))
          .on("status", status => {
            assert.equal(status.code, grpc.Code.OK, "status code is ok");
            assert.equal(actualData.length, 2, "expected data is received");
            assert.equal(actualData[0].getMyString(), "some value", "data is received in order (#1)");
            assert.equal(actualData[1].getMyString(), "another value", "data is received in order (#2)");
            done();
          });
      });

      it("should allow the caller to supply Metadata", (done) => {
        let sentHeaders: grpc.Metadata;

        makeClient(new StubTransportBuilder().withHeadersListener(headers => sentHeaders = headers))
          .doStream(new StreamRequest(), new grpc.Metadata({ "foo": "bar" }))
          .on("end", () => {
            assert.deepEqual(sentHeaders.get("foo"), ["bar"]);
            done();
          });
      });

      it("should allow the caller to cancel the request", (done) => {
        const transport = new StubTransportBuilder()
          .withMessages(makePayloads("foo", "bar"))
          .withManualTrigger()
          .build();

        const client = new SimpleServiceClient("http://localhost:1", { transport });
        let messageCount = 0;
        let onEndFired = false;
        let onStatusFired = false;

        const handle = client.doStream(new StreamRequest())
          .on("data", () => messageCount++)
          .on("end", () => onEndFired = true)
          .on("status", () => onStatusFired = true);

        transport.sendHeaders();
        handle.cancel();
        transport.sendMessages();
        transport.sendTrailers();

        setTimeout(() => {
          assert.equal(messageCount, 0, "invocation cancelled before any messages were sent");
          assert.equal(onEndFired, false, "'end' should not have fired when the invocation is cancelled");
          assert.equal(onStatusFired, false, "'status' should not have fired when the invocation is cancelled");
          done();
        }, 20);
      });
    });

    describe("methods named using reserved words", () => {
      it("should route the request to the expected endpoint", () => {
        const client = new SimpleServiceClient("http://localhost:1");
        assert.equal((client.delete as any).name, "pb_delete", "an rpc method named using a reserved word should be prefixed with pb_");
      });
    });
  });
});
