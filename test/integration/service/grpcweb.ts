import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import { assert } from "chai";
import { grpc } from "@improbable-eng/grpc-web";
import { createContext, runInContext } from "vm";

import { frameRequest, StubTransportBuilder } from "../../helpers/fakeGrpcTransport";
import { ExternalChildMessage } from "../../../examples/generated-grpc-web/proto/othercom/external_child_message_pb";
import {
  ServiceError,
  SimpleService,
  SimpleServiceClient,
  Status
} from "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb_service";
import { StreamRequest, UnaryRequest, UnaryResponse } from "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

describe("service/grpc-web", () => {
  describe("generated service definitions", () => {

    it("should be exported", () => {
      assert.strictEqual(SimpleService.serviceName, "examplecom.SimpleService");
    });

    it("should contain the expected DoUnary method", () => {
      assert.strictEqual(SimpleService.DoUnary.methodName, "DoUnary");
      assert.strictEqual(SimpleService.DoUnary.service, SimpleService);
      assert.strictEqual(SimpleService.DoUnary.requestStream, false);
      assert.strictEqual(SimpleService.DoUnary.responseStream, false);
      assert.strictEqual(SimpleService.DoUnary.requestType, UnaryRequest);
      assert.strictEqual(SimpleService.DoUnary.responseType, ExternalChildMessage);
    });

    it("should contain the expected DoServerStream method", () => {
      assert.strictEqual(SimpleService.DoServerStream.methodName, "DoServerStream");
      assert.strictEqual(SimpleService.DoServerStream.service, SimpleService);
      assert.strictEqual(SimpleService.DoServerStream.requestStream, false);
      assert.strictEqual(SimpleService.DoServerStream.responseStream, true);
      assert.strictEqual(SimpleService.DoServerStream.requestType, StreamRequest);
      assert.strictEqual(SimpleService.DoServerStream.responseType, ExternalChildMessage);
    });

    it("should contain the expected DoClientStream method", () => {
      assert.strictEqual(SimpleService.DoClientStream.methodName, "DoClientStream");
      assert.strictEqual(SimpleService.DoClientStream.service, SimpleService);
      assert.strictEqual(SimpleService.DoClientStream.requestStream, true);
      assert.strictEqual(SimpleService.DoClientStream.responseStream, false);
      assert.strictEqual(SimpleService.DoClientStream.requestType, StreamRequest);
      assert.strictEqual(SimpleService.DoClientStream.responseType, Empty);
    });

    it("should contain the expected DoBidiStream method", () => {
      assert.strictEqual(SimpleService.DoBidiStream.methodName, "DoBidiStream");
      assert.strictEqual(SimpleService.DoBidiStream.service, SimpleService);
      assert.strictEqual(SimpleService.DoBidiStream.requestStream, true);
      assert.strictEqual(SimpleService.DoBidiStream.responseStream, true);
      assert.strictEqual(SimpleService.DoBidiStream.requestType, StreamRequest);
      assert.strictEqual(SimpleService.DoBidiStream.responseType, ExternalChildMessage);
    });

    it("should contain the expected Delete method", () => {
      assert.strictEqual(SimpleService.Delete.methodName, "Delete");
      assert.strictEqual(SimpleService.Delete.service, SimpleService);
      assert.strictEqual(SimpleService.Delete.requestStream, false);
      assert.strictEqual(SimpleService.Delete.responseStream, false);
      assert.strictEqual(SimpleService.Delete.requestType, UnaryRequest);
      assert.strictEqual(SimpleService.Delete.responseType, UnaryResponse);
    });
  });

  it("should not output imports for namespaces that are not used in the service definition", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb_service.d.ts"), "utf8");
    assert.notInclude(generatedService, "google-protobuf/google/protobuf/timestamp_pb");

    const generatedProto = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb.js"), "utf8");
    assert.include(generatedProto, "google-protobuf/google/protobuf/timestamp_pb");
  });

  it("should generate service definition files for protos that have no service definitions", () => {
    assert.isTrue(existsSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/empty_message_no_service_pb_service.d.ts")));
    assert.isTrue(existsSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/empty_message_no_service_pb_service.js")));
  });

  it("should generate valid javascript sources", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb_service.js"), "utf8");

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

    assert.strictEqual(typeof sandbox.exports.SimpleService.DoUnary, "object");
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.methodName, "DoUnary");
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.service, sandbox.exports.SimpleService);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.requestStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.responseStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.requestType, UnaryRequest);
    assert.strictEqual(sandbox.exports.SimpleService.DoUnary.responseType, ExternalChildMessage);

    assert.strictEqual(typeof sandbox.exports.SimpleService.DoServerStream, "object");
    assert.strictEqual(sandbox.exports.SimpleService.DoServerStream.methodName, "DoServerStream");
    assert.strictEqual(sandbox.exports.SimpleService.DoServerStream.service, sandbox.exports.SimpleService);
    assert.strictEqual(sandbox.exports.SimpleService.DoServerStream.requestStream, false);
    assert.strictEqual(sandbox.exports.SimpleService.DoServerStream.responseStream, true);
    assert.strictEqual(sandbox.exports.SimpleService.DoServerStream.requestType, StreamRequest);
    assert.strictEqual(sandbox.exports.SimpleService.DoServerStream.responseType, ExternalChildMessage);

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
      assert.typeOf(SimpleServiceClient, "function", "SimpleServiceClient class should exist");

      const client = new SimpleServiceClient("http://localhost:1");

      assert.equal(client.serviceHost, "http://localhost:1", "Service host should be stored from constructor");
      assert.typeOf(client.doUnary, "function", "Service should have doUnary method");
      assert.typeOf(client.doServerStream, "function", "Service should have doServerStream method");
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

              assert.equal(error!.message, "some internal error", "should expose the grpc error message (.message)");
              assert.equal(error!.code, 13, "should expose the grpc status code (.code)");
              assert.ok(error!.metadata instanceof grpc.Metadata, "should expose the trailing response metadata (.metadata)");
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

      it("should send the supplied payload to the server", (done) => {
        let sentMessageBytes: ArrayBufferView = new Uint8Array(0);

        const payload = new UnaryRequest();
        payload.setSomeInt64(42);

        makeClient(new StubTransportBuilder().withMessageListener(v => sentMessageBytes = v))
          .doUnary(
            payload,
            (err) => {
              assert.ok(err === null, "should not yield an error");
              assert.deepEqual(sentMessageBytes, frameRequest(payload), "expected request message supplied to transport");
              done();
            }
          );
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

    describe("server streaming", () => {
      it("should route the request to the expected endpoint", (done) => {
        let targetUrl = "";

        makeClient(new StubTransportBuilder().withRequestListener(options => targetUrl = options.url))
          .doServerStream(new StreamRequest())
          .on("end", () => {
            assert.equal(targetUrl, "http://localhost:1/examplecom.SimpleService/DoServerStream");
            done();
          });
      });

      it("should invoke onStatus before onEnd", (done) => {
        const [payload] = makePayloads("some value");
        let onStatusInvoked = false;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doServerStream(new StreamRequest())
          .on("end", () => {
            assert.ok(onStatusInvoked, "onStatus callback should be invoked before onEnd");
            done();
          })
          .on("status", () => { onStatusInvoked = true; });
      });

      it("should invoke onEnd with the same status as onStatus", (done) => {
        const [payload] = makePayloads("some value");
        let statusFromOnStatus: Status;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doServerStream(new StreamRequest())
          .on("end", (endStatus) => {
            assert.deepEqual(endStatus, statusFromOnStatus);
            done();
          })
          .on("status", (status) => { statusFromOnStatus = status; });
      });

      it("should handle an error returned ahead of any data by the endpoint", (done) => {
        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some error"))
          .doServerStream(new StreamRequest())
          .on("status", (status) => {
            assert.equal(status.code, grpc.Code.Internal, "expected grpc status code returned");
            assert.equal(status.details, "some error", "expected grpc error details returned");
            done();
          });
      });

      it("should handle an error returned mid-stream by the endpoint", (done) => {
        const [payload] = makePayloads("some value");
        let actualData: ExternalChildMessage[] = [];

        makeClient(new StubTransportBuilder()
          .withMessages([payload])
          .withPreTrailersError(grpc.Code.Internal, "some error")
        )
          .doServerStream(new StreamRequest())
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
          .doServerStream(new StreamRequest())
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
          .doServerStream(new StreamRequest(), new grpc.Metadata({ "foo": "bar" }))
          .on("end", () => {
            assert.deepEqual(sentHeaders.get("foo"), ["bar"]);
            done();
          });
      });

      it("should allow the caller to cancel the request", (done) => {
        let cancelInvoked = false;

        const transport = new StubTransportBuilder()
          .withMessages(makePayloads("foo", "bar"))
          .withCancelListener(() => cancelInvoked = true)
          .withManualTrigger()
          .build();

        const client = new SimpleServiceClient("http://localhost:1", { transport });
        let messageCount = 0;
        let onEndFired = false;
        let onStatusFired = false;

        const handle = client.doServerStream(new StreamRequest())
          .on("data", () => messageCount++)
          .on("end", () => onEndFired = true)
          .on("status", () => onStatusFired = true);

        transport.sendHeaders();
        handle.cancel();
        transport.sendMessages();
        transport.sendTrailers();

        setTimeout(() => {
          assert.equal(cancelInvoked, true, "the Transport should have been cancelled by the client");
          assert.equal(messageCount, 0, "invocation cancelled before any messages were sent");
          assert.equal(onEndFired, false, "'end' should not have fired when the invocation is cancelled");
          assert.equal(onStatusFired, false, "'status' should not have fired when the invocation is cancelled");
          done();
        }, 20);
      });
    });

    describe("client streaming", () => {
      const payload = new StreamRequest();
      payload.setSomeString("some value");

      it("should route the request to the expected endpoint", (done) => {
        let targetUrl = "";

        makeClient(new StubTransportBuilder().withRequestListener(options => targetUrl = options.url))
          .doClientStream()
          .on("end", () => {
            assert.equal(targetUrl, "http://localhost:1/examplecom.SimpleService/DoClientStream");
            done();
          })
          .write(payload)
          .end();
      });

      it("should close the connection when end() is invoked", (done) => {
        let finishSendInvoked = false;
        makeClient(new StubTransportBuilder().withFinishSendListener(() => finishSendInvoked = true))
          .doClientStream()
          .on("end", () => {
            assert.ok(finishSendInvoked);
            done();
          })
          .write(payload)
          .end();
      });

      it("should invoke onStatus before onEnd", (done) => {
        let onStatusInvoked = false;

        makeClient(new StubTransportBuilder())
          .doClientStream()
          .on("end", () => {
            assert.ok(onStatusInvoked, "onStatus callback should be invoked before onEnd");
            done();
          })
          .on("status", () => { onStatusInvoked = true; })
          .write(payload)
          .end();
      });

      it("should invoke onEnd with the same status as onStatus", (done) => {
        let statusFromOnStatus: Status;

        makeClient(new StubTransportBuilder())
          .doClientStream()
          .on("end", (endStatus) => {
            assert.deepEqual(endStatus, statusFromOnStatus);
            done();
          })
          .on("status", (status) => { statusFromOnStatus = status; })
          .write(payload)
          .end();
      });

      it("should handle an error returned ahead of any data by the server", (done) => {
        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some error"))
          .doClientStream()
          .on("status", (status) => {
            assert.equal(status.code, grpc.Code.Internal, "expected grpc status code returned");
            assert.equal(status.details, "some error", "expected grpc error details returned");
            done();
          })
          .write(payload)
          .end();
      });

      it("should allow the caller to supply multiple messages", (done) => {
        const reqMsgOne = new StreamRequest();
        reqMsgOne.setSomeString("one");
        const reqMsgTwo = new StreamRequest();
        reqMsgTwo.setSomeString("two");
        const sentMessageBytes: ArrayBufferView[] = [];

        makeClient(new StubTransportBuilder().withMessageListener(v => { sentMessageBytes.push(v); }))
          .doClientStream()
          .on("end", () => {
            assert.equal(sentMessageBytes.length, 2, "Two messages are sent");
            assert.deepEqual(sentMessageBytes[0], frameRequest(reqMsgOne));
            assert.deepEqual(sentMessageBytes[1], frameRequest(reqMsgTwo));
            done();
          })
          .write(reqMsgOne)
          .write(reqMsgTwo)
          .end();
      });

      it("should allow the caller to supply Metadata", (done) => {
        let sentHeaders: grpc.Metadata;

        makeClient(new StubTransportBuilder().withHeadersListener(headers => sentHeaders = headers))
          .doClientStream(new grpc.Metadata({ "foo": "bar" }))
          .on("end", () => {
            assert.deepEqual(sentHeaders.get("foo"), ["bar"]);
            done();
          })
          .write(payload)
          .end();
      });

      it("should allow the caller to supply Metadata and a callback", (done) => {
        let sentHeaders: grpc.Metadata;
        let onEndInvoked = false;

        makeClient(new StubTransportBuilder().withMessages([new Empty()]).withHeadersListener(headers => sentHeaders = headers))
          .doClientStream(new grpc.Metadata({ "foo": "bar" }), (error: ServiceError | null, responseMessage: Empty | null) => {
            assert.isTrue(onEndInvoked, "onEnd should be invoked before the callback");
            assert.deepEqual(sentHeaders.get("foo"), ["bar"]);
            assert.isNull(error);
            assert.instanceOf(responseMessage, Empty);
            done();
          })
          .on("end", () => {
            onEndInvoked = true;
          })
          .write(payload)
          .end();
      });

      it("should allow the caller to supply only a callback", (done) => {
        let onEndInvoked = false;

        makeClient(new StubTransportBuilder().withMessages([new Empty()]))
          .doClientStream((error: ServiceError | null, responseMessage: Empty | null) => {
            assert.isTrue(onEndInvoked, "onEnd should be invoked before the callback");
            assert.isNull(error);
            assert.instanceOf(responseMessage, Empty);
            done();
          })
          .on("end", () => {
            onEndInvoked = true;
          })
          .write(payload)
          .end();
      });

      it("should supply a pre-messages error to a callback", (done) => {
        let onEndInvoked = false;

        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some pre-messages error"))
          .doClientStream((error: ServiceError | null, responseMessage: Empty | null) => {
            console.log("callback invoked", error, responseMessage);
            assert.isTrue(onEndInvoked, "onEnd should be invoked before the callback");
            assert.isTrue(error !== null && typeof error === "object", "should yield an error");
            assert.equal(error!.message, "some pre-messages error", "should expose the grpc error message (.message)");
            assert.equal(error!.code, 13, "should expose the grpc status code (.code)");
            assert.isNull(responseMessage);
            done();
          })
          .on("end", (status) => {
            assert.isDefined(status, "onEnd should be invoked with a status");
            assert.equal(status!.code, 13, "expected grpc status code returned");
            onEndInvoked = true;
          })
          .write(payload)
          .end();
      });

      it("should supply a pre-trailers error to a callback", (done) => {
        let onEndInvoked = false;

        makeClient(new StubTransportBuilder().withPreTrailersError(grpc.Code.Internal, "some pre-trailers error"))
          .doClientStream((error: ServiceError | null, responseMessage: Empty | null) => {
            assert.isTrue(onEndInvoked, "onEnd should be invoked before the callback");
            assert.isTrue(error !== null && typeof error === "object", "should yield an error");
            assert.equal(error!.message, "some pre-trailers error", "should expose the grpc error message (.message)");
            assert.equal(error!.code, 13, "should expose the grpc status code (.code)");
            assert.isNull(responseMessage);
            done();
          })
          .on("end", (status) => {
            assert.isDefined(status, "onEnd should be invoked with a status");
            assert.equal(status!.code, 13, "expected grpc status code returned");
            onEndInvoked = true;
          })
          .write(payload)
          .end();
      });

      it("should allow the caller to cancel the request", (done) => {
        let cancelInvoked = true;

        const transport = new StubTransportBuilder()
          .withCancelListener(() => cancelInvoked = true)
          .withManualTrigger()
          .build();

        const client = new SimpleServiceClient("http://localhost:1", { transport });
        let onEndFired = false;
        let onStatusFired = false;

        const handle = client.doClientStream()
          .on("end", () => onEndFired = true)
          .on("status", () => onStatusFired = true)
          .write(payload);

        transport.sendHeaders();
        handle.cancel();
        transport.sendTrailers();

        setTimeout(() => {
          assert.equal(cancelInvoked, true, "the Transport should have been cancelled by the client");
          assert.equal(onEndFired, false, "'end' should not have fired when the invocation is cancelled");
          assert.equal(onStatusFired, false, "'status' should not have fired when the invocation is cancelled");
          done();
        }, 20);
      });
    });

    describe("bidirectional streaming", () => {
      const payload = new StreamRequest();
      payload.setSomeString("some value");

      it("should route the request to the expected endpoint", (done) => {
        let targetUrl = "";

        makeClient(new StubTransportBuilder().withRequestListener(options => targetUrl = options.url))
          .doBidiStream()
          .on("end", () => {
            assert.equal(targetUrl, "http://localhost:1/examplecom.SimpleService/DoBidiStream");
            done();
          })
          .end();
      });

      it("should invoke onStatus before onEnd if the client ends the stream", (done) => {
        let onStatusInvoked = false;

        makeClient(new StubTransportBuilder())
          .doBidiStream()
          .on("end", () => {
            assert.ok(onStatusInvoked, "onStatus callback should be invoked before onEnd");
            done();
          })
          .on("status", () => { onStatusInvoked = true; })
          .write(payload)
          .end();
      });

      it("should invoke onEnd with the same status as onStatus if client ends the stream", (done) => {
        let statusFromOnStatus: Status;

        makeClient(new StubTransportBuilder())
          .doBidiStream()
          .on("end", (endStatus) => {
            assert.deepEqual(endStatus, statusFromOnStatus);
            done();
          })
          .on("status", (status) => { statusFromOnStatus = status; })
          .write(payload)
          .end();
      });

      it("should close the connection when end() is invoked", (done) => {
        let finishSendInvoked = false;
        makeClient(new StubTransportBuilder().withFinishSendListener(() => finishSendInvoked = true))
          .doBidiStream()
          .on("end", () => {
            assert.ok(finishSendInvoked);
            done();
          })
          .write(payload)
          .end();
      });

      it("should invoke onStatus before onEnd if the server ends the stream", (done) => {
        let onStatusInvoked = false;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doBidiStream()
          .on("end", () => {
            assert.ok(onStatusInvoked, "onStatus callback should be invoked before onEnd");
            done();
          })
          .on("status", () => { onStatusInvoked = true; });
      });

      it("should invoke onEnd with the same status as onStatus if server ends the stream", (done) => {
        let statusFromOnStatus: Status;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doBidiStream()
          .on("end", (endStatus) => {
            assert.deepEqual(endStatus, statusFromOnStatus);
            done();
          })
          .on("status", (status) => { statusFromOnStatus = status; });
      });

      it("should handle an error returned ahead of any data by the server", (done) => {
        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some error"))
          .doBidiStream()
          .on("status", (status) => {
            assert.equal(status.code, grpc.Code.Internal, "expected grpc status code returned");
            assert.equal(status.details, "some error", "expected grpc error details returned");
            done();
          })
          .write(payload);
      });

      it("should handle an error returned mid-stream by the server", (done) => {
        let actualData: ExternalChildMessage[] = [];

        makeClient(new StubTransportBuilder()
          .withMessages([payload])
          .withPreTrailersError(grpc.Code.Internal, "some error")
        )
          .doBidiStream()
          .on("data", payload => actualData.push(payload))
          .on("status", status => {
            assert.equal(status.code, grpc.Code.Internal, "expected grpc status code returned");
            assert.equal(status.details, "some error", "expected grpc error details returned");
            assert.equal(actualData.length, 1, "messages sent by the server, ahead of any error are exposed");
            assert.equal(actualData[0].getMyString(), "some value", "payload is well formed");
            done();
          });
      });

      it("should allow the caller to supply multiple messages", (done) => {
        const reqMsgOne = new StreamRequest();
        reqMsgOne.setSomeString("one");
        const reqMsgTwo = new StreamRequest();
        reqMsgTwo.setSomeString("two");
        const sentMessageBytes: ArrayBufferView[] = [];

        makeClient(new StubTransportBuilder().withMessageListener(v => { sentMessageBytes.push(v); }))
          .doBidiStream()
          .on("end", () => {
            assert.equal(sentMessageBytes.length, 2, "Two messages are sent");
            assert.deepEqual(sentMessageBytes[0], frameRequest(reqMsgOne));
            assert.deepEqual(sentMessageBytes[1], frameRequest(reqMsgTwo));
            done();
          })
          .write(reqMsgOne)
          .write(reqMsgTwo)
          .end();
      });

      it("should allow the caller to supply Metadata", (done) => {
        let sentHeaders: grpc.Metadata;

        makeClient(new StubTransportBuilder().withHeadersListener(headers => sentHeaders = headers))
          .doBidiStream(new grpc.Metadata({ "foo": "bar" }))
          .on("end", () => {
            assert.deepEqual(sentHeaders.get("foo"), ["bar"]);
            done();
          })
          .write(payload)
          .end();
      });

      it("should allow the caller to cancel the request", (done) => {
        let cancelInvoked = false;

        const transport = new StubTransportBuilder()
          .withManualTrigger()
          .withCancelListener(() => cancelInvoked = true)
          .build();

        const client = new SimpleServiceClient("http://localhost:1", { transport });
        let onEndFired = false;
        let onStatusFired = false;

        const handle = client.doBidiStream()
          .on("end", () => onEndFired = true)
          .on("status", () => onStatusFired = true)
          .write(payload);

        transport.sendHeaders();
        handle.cancel();
        transport.sendTrailers();

        setTimeout(() => {
          assert.equal(cancelInvoked, true, "the Transport should have been cancelled by the client");
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
