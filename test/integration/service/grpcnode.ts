import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import { assert } from "chai";

import { ExternalChildMessage } from "../../../examples/generated-grpc-node/proto/othercom/external_child_message_pb";
import { SimpleServiceService, SimpleServiceClient } from "../../../examples/generated-grpc-node/proto/examplecom/simple_service_grpc_pb";
import { StreamRequest, UnaryRequest, UnaryResponse } from "../../../examples/generated-grpc-node/proto/examplecom/simple_service_pb";
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
      assert.strictEqual((SimpleServiceService.doUnary as any).requestType, UnaryRequest);
      assert.strictEqual((SimpleServiceService.doUnary as any).responseType, ExternalChildMessage);
    });

    it("should contain the expected DoServerStream method", () => {
      assert.strictEqual(SimpleServiceService.doServerStream.path, "/examplecom.SimpleService/DoServerStream");
      assert.strictEqual(SimpleServiceService.doServerStream.requestStream, false);
      assert.strictEqual(SimpleServiceService.doServerStream.responseStream, true);
      assert.strictEqual((SimpleServiceService.doServerStream as any).requestType, StreamRequest);
      assert.strictEqual((SimpleServiceService.doServerStream as any).responseType, ExternalChildMessage);
    });

    it("should contain the expected DoClientStream method", () => {
      assert.strictEqual(SimpleServiceService.doClientStream.path, "/examplecom.SimpleService/DoClientStream");
      assert.strictEqual(SimpleServiceService.doClientStream.requestStream, true);
      assert.strictEqual(SimpleServiceService.doClientStream.responseStream, false);
      assert.strictEqual((SimpleServiceService.doClientStream as any).requestType, StreamRequest);
      assert.strictEqual((SimpleServiceService.doClientStream as any).responseType, Empty);
    });

    it("should contain the expected DoBidiStream method", () => {
      assert.strictEqual(SimpleServiceService.doBidiStream.path, "/examplecom.SimpleService/DoBidiStream");
      assert.strictEqual(SimpleServiceService.doBidiStream.requestStream, true);
      assert.strictEqual(SimpleServiceService.doBidiStream.responseStream, true);
      assert.strictEqual((SimpleServiceService.doBidiStream as any).requestType, StreamRequest);
      assert.strictEqual((SimpleServiceService.doBidiStream as any).responseType, ExternalChildMessage);
    });

    it("should contain the expected Delete method", () => {
      assert.strictEqual(SimpleServiceService.delete.path, "/examplecom.SimpleService/Delete");
      assert.strictEqual(SimpleServiceService.delete.requestStream, false);
      assert.strictEqual(SimpleServiceService.delete.responseStream, false);
      assert.strictEqual((SimpleServiceService.delete as any).requestType, UnaryRequest);
      assert.strictEqual((SimpleServiceService.delete as any).responseType, UnaryResponse);
    });
  });

  it("should not output imports for namespaces that are not used in the service definition", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-node/proto/examplecom/simple_service_grpc_pb.d.ts"), "utf8");
    assert.notInclude(generatedService, "google-protobuf/google/protobuf/timestamp_pb");

    const generatedProto = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-node/proto/examplecom/simple_service_grpc_pb.js"), "utf8");
    assert.include(generatedProto, "google-protobuf/google/protobuf/timestamp_pb");
  });

  it("should generate service definition files for protos that have no service definitions", () => {
    assert.isTrue(existsSync(resolve(__dirname, "../../../examples/generated-grpc-node/proto/examplecom/empty_message_no_service_grpc_pb.d.ts")));
    assert.isTrue(existsSync(resolve(__dirname, "../../../examples/generated-grpc-node/proto/examplecom/empty_message_no_service_grpc_pb.js")));
  });

  describe("generated client definition", () => {
    it("should be exported", () => {
      assert.isDefined(SimpleServiceClient);
    });

    // TODO: more tests
  });
});
