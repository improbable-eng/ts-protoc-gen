import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
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
      expect(SimpleService.serviceName).toStrictEqual("examplecom.SimpleService");
    });

    it("should contain the expected DoUnary method", () => {
      expect(SimpleService.DoUnary.methodName).toStrictEqual("DoUnary");
      expect(SimpleService.DoUnary.service).toStrictEqual(SimpleService);
      expect(SimpleService.DoUnary.requestStream).toStrictEqual(false);
      expect(SimpleService.DoUnary.responseStream).toStrictEqual(false);
      expect(SimpleService.DoUnary.requestType).toStrictEqual(UnaryRequest);
      expect(SimpleService.DoUnary.responseType).toStrictEqual(ExternalChildMessage);
    });

    it("should contain the expected DoServerStream method", () => {
      expect(SimpleService.DoServerStream.methodName).toStrictEqual("DoServerStream");
      expect(SimpleService.DoServerStream.service).toStrictEqual(SimpleService);
      expect(SimpleService.DoServerStream.requestStream).toStrictEqual(false);
      expect(SimpleService.DoServerStream.responseStream).toStrictEqual(true);
      expect(SimpleService.DoServerStream.requestType).toStrictEqual(StreamRequest);
      expect(SimpleService.DoServerStream.responseType).toStrictEqual(ExternalChildMessage);
    });

    it("should contain the expected DoClientStream method", () => {
      expect(SimpleService.DoClientStream.methodName).toStrictEqual("DoClientStream");
      expect(SimpleService.DoClientStream.service).toStrictEqual(SimpleService);
      expect(SimpleService.DoClientStream.requestStream).toStrictEqual(true);
      expect(SimpleService.DoClientStream.responseStream).toStrictEqual(false);
      expect(SimpleService.DoClientStream.requestType).toStrictEqual(StreamRequest);
      expect(SimpleService.DoClientStream.responseType).toStrictEqual(Empty);
    });

    it("should contain the expected DoBidiStream method", () => {
      expect(SimpleService.DoBidiStream.methodName).toStrictEqual("DoBidiStream");
      expect(SimpleService.DoBidiStream.service).toStrictEqual(SimpleService);
      expect(SimpleService.DoBidiStream.requestStream).toStrictEqual(true);
      expect(SimpleService.DoBidiStream.responseStream).toStrictEqual(true);
      expect(SimpleService.DoBidiStream.requestType).toStrictEqual(StreamRequest);
      expect(SimpleService.DoBidiStream.responseType).toStrictEqual(ExternalChildMessage);
    });

    it("should contain the expected Delete method", () => {
      expect(SimpleService.Delete.methodName).toStrictEqual("Delete");
      expect(SimpleService.Delete.service).toStrictEqual(SimpleService);
      expect(SimpleService.Delete.requestStream).toStrictEqual(false);
      expect(SimpleService.Delete.responseStream).toStrictEqual(false);
      expect(SimpleService.Delete.requestType).toStrictEqual(UnaryRequest);
      expect(SimpleService.Delete.responseType).toStrictEqual(UnaryResponse);
    });
  });

  it("should not output imports for namespaces that are not used in the service definition", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb_service.d.ts"), "utf8");
    expect(generatedService).not.toContain("google-protobuf/google/protobuf/timestamp_pb");

    const generatedProto = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/simple_service_pb.js"), "utf8");
    expect(generatedProto).toContain("google-protobuf/google/protobuf/timestamp_pb");
  });

  it("should generate service definition files for protos that have no service definitions", () => {
    expect(existsSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/empty_message_no_service_pb_service.d.ts"))).toBeTruthy();
    expect(existsSync(resolve(__dirname, "../../../examples/generated-grpc-web/proto/examplecom/empty_message_no_service_pb_service.js"))).toBeTruthy();
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

    expect(typeof sandbox.exports.SimpleService).toStrictEqual("function");
    expect(sandbox.exports.SimpleService.serviceName).toStrictEqual("examplecom.SimpleService");

    expect(typeof sandbox.exports.SimpleService.DoUnary).toStrictEqual("object");
    expect(sandbox.exports.SimpleService.DoUnary.methodName).toStrictEqual("DoUnary");
    expect(sandbox.exports.SimpleService.DoUnary.service).toStrictEqual(sandbox.exports.SimpleService);
    expect(sandbox.exports.SimpleService.DoUnary.requestStream).toStrictEqual(false);
    expect(sandbox.exports.SimpleService.DoUnary.responseStream).toStrictEqual(false);
    expect(sandbox.exports.SimpleService.DoUnary.requestType).toStrictEqual(UnaryRequest);
    expect(sandbox.exports.SimpleService.DoUnary.responseType).toStrictEqual(ExternalChildMessage);

    expect(typeof sandbox.exports.SimpleService.DoServerStream).toStrictEqual("object");
    expect(sandbox.exports.SimpleService.DoServerStream.methodName).toStrictEqual("DoServerStream");
    expect(sandbox.exports.SimpleService.DoServerStream.service).toStrictEqual(sandbox.exports.SimpleService);
    expect(sandbox.exports.SimpleService.DoServerStream.requestStream).toStrictEqual(false);
    expect(sandbox.exports.SimpleService.DoServerStream.responseStream).toStrictEqual(true);
    expect(sandbox.exports.SimpleService.DoServerStream.requestType).toStrictEqual(StreamRequest);
    expect(sandbox.exports.SimpleService.DoServerStream.responseType).toStrictEqual(ExternalChildMessage);

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
      expect(typeof SimpleServiceClient).toEqual("function");

      const client = new SimpleServiceClient("http://localhost:1");

      expect(client.serviceHost).toStrictEqual("http://localhost:1");
      expect(typeof client.doUnary).toEqual("function");
      expect(typeof client.doServerStream).toEqual("function");
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
              expect(targetUrl).toStrictEqual("http://localhost:1/examplecom.SimpleService/DoUnary");
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
              expect(error !== null && typeof error === "object").toBeTruthy();
              expect(response).toBeNull();

              expect(error!.message).toStrictEqual("some internal error");
              expect(error!.code).toStrictEqual(13);
              expect(error!.metadata instanceof grpc.Metadata).toBeTruthy();
              done();
            });
      });

      it("should expose data returned by the unary endpoint", (done) => {
        const [payload] = makePayloads("some value");

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doUnary(
            new UnaryRequest(),
            (error, response) => {
              expect(error).toBeNull();
              expect(response).not.toBeNull();
              expect(response!.getMyString()).toStrictEqual("some value");
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
            (error) => {
              expect(error).toBeNull();
              expect(sentMessageBytes).toStrictEqual(frameRequest(payload));
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
              expect(sentHeaders).not.toBeNull();
              expect(sentHeaders.get("foo")).toEqual(["bar"]);
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
            expect(targetUrl).toStrictEqual("http://localhost:1/examplecom.SimpleService/DoServerStream");
            done();
          });
      });

      it("should invoke onStatus before onEnd", (done) => {
        const [payload] = makePayloads("some value");
        let onStatusInvoked = false;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doServerStream(new StreamRequest())
          .on("end", () => {
            expect(onStatusInvoked).toBeTruthy();
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
            expect(endStatus).toEqual(statusFromOnStatus);
            done();
          })
          .on("status", (status) => { statusFromOnStatus = status; });
      });

      it("should handle an error returned ahead of any data by the endpoint", (done) => {
        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some error"))
          .doServerStream(new StreamRequest())
          .on("status", (status) => {
            expect(status.code).toStrictEqual(grpc.Code.Internal);
            expect(status.details).toStrictEqual("some error");
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
            expect(status.code).toStrictEqual(grpc.Code.Internal);
            expect(status.details).toStrictEqual("some error");
            expect(actualData.length).toStrictEqual(1);
            expect(actualData[0].getMyString()).toStrictEqual("some value");
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
            expect(status.code).toStrictEqual(grpc.Code.OK);
            expect(actualData).toHaveLength(2);
            expect(actualData[0].getMyString()).toStrictEqual("some value");
            expect(actualData[1].getMyString()).toStrictEqual("another value");
            done();
          });
      });

      it("should allow the caller to supply Metadata", (done) => {
        let sentHeaders: grpc.Metadata;

        makeClient(new StubTransportBuilder().withHeadersListener(headers => sentHeaders = headers))
          .doServerStream(new StreamRequest(), new grpc.Metadata({ "foo": "bar" }))
          .on("end", () => {
            expect(sentHeaders.get("foo")).toStrictEqual(["bar"]);
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
          expect(cancelInvoked).toStrictEqual(true);
          expect(messageCount).toStrictEqual(0);
          expect(onEndFired).toStrictEqual(false);
          expect(onStatusFired).toStrictEqual(false);
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
            expect(targetUrl).toStrictEqual("http://localhost:1/examplecom.SimpleService/DoClientStream");
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
            expect(finishSendInvoked).toBeTruthy();
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
            expect(onStatusInvoked).toBeTruthy();
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
            expect(endStatus).toStrictEqual( statusFromOnStatus);
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
            expect(status.code).toStrictEqual(grpc.Code.Internal);
            expect(status.details).toStrictEqual("some error");
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
            expect(sentMessageBytes).toHaveLength(2);
            expect(sentMessageBytes[0]).toStrictEqual(frameRequest(reqMsgOne));
            expect(sentMessageBytes[1]).toStrictEqual(frameRequest(reqMsgTwo));
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
            expect(sentHeaders.get("foo")).toEqual(["bar"]);
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
            expect(onEndInvoked).toBeTruthy();
            expect(sentHeaders.get("foo")).toEqual(["bar"]);
            expect(error).toBeNull();
            expect(responseMessage).toBeInstanceOf(Empty);
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
            expect(onEndInvoked).toBeTruthy();
            expect(error).toBeNull();
            expect(responseMessage).toBeInstanceOf(Empty);
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
            expect(onEndInvoked).toBeTruthy();
            expect(error !== null && typeof error === "object").toBeTruthy();
            expect(error!.message).toStrictEqual("some pre-messages error");
            expect(error!.code).toStrictEqual(13);
            expect(responseMessage).toBeNull();
            done();
          })
          .on("end", (status) => {
            expect(status).toBeDefined();
            expect(status!.code).toStrictEqual(13);
            onEndInvoked = true;
          })
          .write(payload)
          .end();
      });

      it("should supply a pre-trailers error to a callback", (done) => {
        let onEndInvoked = false;

        makeClient(new StubTransportBuilder().withPreTrailersError(grpc.Code.Internal, "some pre-trailers error"))
          .doClientStream((error: ServiceError | null, responseMessage: Empty | null) => {
            expect(onEndInvoked).toBeTruthy();
            expect(error !== null && typeof error === "object").toBeTruthy();
            expect(error!.message).toStrictEqual("some pre-trailers error");
            expect(error!.code).toStrictEqual(13);
            expect(responseMessage).toBeNull();
            done();
          })
          .on("end", (status) => {
            expect(status).toBeDefined();
            expect(status!.code).toStrictEqual(13);
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
          expect(cancelInvoked).toStrictEqual(true);
          expect(onEndFired).toStrictEqual(false);
          expect(onStatusFired).toStrictEqual(false);
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
            expect(targetUrl).toStrictEqual("http://localhost:1/examplecom.SimpleService/DoBidiStream");
            done();
          })
          .end();
      });

      it("should invoke onStatus before onEnd if the client ends the stream", (done) => {
        let onStatusInvoked = false;

        makeClient(new StubTransportBuilder())
          .doBidiStream()
          .on("end", () => {
            expect(onStatusInvoked).toBeTruthy();
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
            expect(endStatus).toEqual(statusFromOnStatus);
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
            expect(finishSendInvoked).toBeTruthy();
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
            expect(onStatusInvoked).toBeTruthy();
            done();
          })
          .on("status", () => { onStatusInvoked = true; });
      });

      it("should invoke onEnd with the same status as onStatus if server ends the stream", (done) => {
        let statusFromOnStatus: Status;

        makeClient(new StubTransportBuilder().withMessages([payload]))
          .doBidiStream()
          .on("end", (endStatus) => {
            expect(endStatus).toEqual(statusFromOnStatus);
            done();
          })
          .on("status", (status) => { statusFromOnStatus = status; });
      });

      it("should handle an error returned ahead of any data by the server", (done) => {
        makeClient(new StubTransportBuilder().withPreMessagesError(grpc.Code.Internal, "some error"))
          .doBidiStream()
          .on("status", (status) => {
            expect(status.code).toStrictEqual(grpc.Code.Internal);
            expect(status.details).toStrictEqual("some error");
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
            expect(status.code).toStrictEqual(grpc.Code.Internal);
            expect(status.details).toStrictEqual("some error");
            expect(actualData).toHaveLength(1);
            expect(actualData[0].getMyString()).toStrictEqual("some value");
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
            expect(sentMessageBytes).toHaveLength(2);
            expect(sentMessageBytes[0]).toStrictEqual(frameRequest(reqMsgOne));
            expect(sentMessageBytes[1]).toStrictEqual(frameRequest(reqMsgTwo));
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
            expect(sentHeaders.get("foo")).toEqual(["bar"]);
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
          expect(cancelInvoked).toStrictEqual(true);
          expect(onEndFired).toStrictEqual(false);
          expect(onStatusFired).toStrictEqual(false);
          done();
        }, 20);
      });
    });

    describe("methods named using reserved words", () => {
      it("should route the request to the expected endpoint", () => {
        const client = new SimpleServiceClient("http://localhost:1");
        expect((client.delete as any).name).toStrictEqual("pb_delete");
      });
    });
  });
});
