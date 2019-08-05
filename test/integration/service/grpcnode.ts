import { assert } from "chai";

import { ExternalChildMessage } from "../../../examples/generated-grpc-node/proto/othercom/external_child_message_pb";
import { SimpleServiceService } from "../../../examples/generated-grpc-node/proto/examplecom/simple_service_grpc_pb";
import { StreamRequest, UnaryRequest } from "../../../examples/generated-grpc-node/proto/examplecom/simple_service_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

describe("service/grpc-node", () => {
  describe("generated service definitions", () => {

    it("should be exported", () => {
      assert.isDefined(SimpleServiceService);
    });

    it("should contain the expected DoUnary method", () => {
      assert.strictEqual(SimpleServiceService.doUnary.path, "/examplecom.SimpleService/DoUnary");
      assert.strictEqual(SimpleServiceService.doUnary.requestStream, false);
      assert.strictEqual(SimpleServiceService.doUnary.responseStream, false);
      assert.strictEqual(SimpleServiceService.doUnary.requestType, UnaryRequest);
      assert.strictEqual(SimpleServiceService.doUnary.responseType, ExternalChildMessage);
    });

    it("should contain the expected DoServerStream method", () => {
      assert.strictEqual(SimpleServiceService.doServerStream.path, "/examplecom.SimpleService/DoServerStream");
      assert.strictEqual(SimpleServiceService.doServerStream.requestStream, false);
      assert.strictEqual(SimpleServiceService.doServerStream.responseStream, true);
      assert.strictEqual(SimpleServiceService.doServerStream.requestType, StreamRequest);
      assert.strictEqual(SimpleServiceService.doServerStream.responseType, ExternalChildMessage);
    });

    it("should contain the expected DoClientStream method", () => {
      assert.strictEqual(SimpleServiceService.doClientStream.path, "/examplecom.SimpleService/DoClientStream");
      assert.strictEqual(SimpleServiceService.doClientStream.requestStream, true);
      assert.strictEqual(SimpleServiceService.doClientStream.responseStream, false);
      assert.strictEqual(SimpleServiceService.doClientStream.requestType, StreamRequest);
      assert.strictEqual(SimpleServiceService.doClientStream.responseType, Empty);
    });

    it("should contain the expected DoBidiStream method", () => {
      assert.strictEqual(SimpleServiceService.doBidiStream.path, "/examplecom.SimpleService/DoBidiStream");
      assert.strictEqual(SimpleServiceService.doBidiStream.requestStream, true);
      assert.strictEqual(SimpleServiceService.doBidiStream.responseStream, true);
      assert.strictEqual(SimpleServiceService.doBidiStream.requestType, StreamRequest);
      assert.strictEqual(SimpleServiceService.doBidiStream.responseType, ExternalChildMessage);
    });
  });
});
