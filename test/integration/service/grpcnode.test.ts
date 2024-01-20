import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import * as grpc from "@grpc/grpc-js";

import { ExternalChildMessage } from "../../../examples/generated-grpc-js-node/proto/othercom/external_child_message_pb";
import { SimpleServiceService, SimpleServiceClient } from "../../../examples/generated-grpc-js-node/proto/examplecom/simple_service_grpc_pb";
import { StreamRequest, UnaryRequest, UnaryResponse } from "../../../examples/generated-grpc-js-node/proto/examplecom/simple_service_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

describe("service/grpc-node", () => {
  describe("generated service definitions", () => {
    it("should be exported", () => {
      expect(SimpleServiceService).toBeDefined();
    });

    it("should contain the expected doUnary method", () => {
      expect(SimpleServiceService.doUnary.path).toEqual("/examplecom.SimpleService/DoUnary");
      expect(SimpleServiceService.doUnary.requestStream).toEqual(false);
      expect(SimpleServiceService.doUnary.responseStream).toEqual(false);
      expect((SimpleServiceService.doUnary as any).requestType).toEqual(UnaryRequest);
      expect((SimpleServiceService.doUnary as any).responseType).toEqual(ExternalChildMessage);
    });

    it("should contain the expected doServerStream method", () => {
      expect(SimpleServiceService.doServerStream.path).toEqual("/examplecom.SimpleService/DoServerStream");
      expect(SimpleServiceService.doServerStream.requestStream).toEqual(false);
      expect(SimpleServiceService.doServerStream.responseStream).toEqual(true);
      expect((SimpleServiceService.doServerStream as any).requestType).toEqual(StreamRequest);
      expect((SimpleServiceService.doServerStream as any).responseType).toEqual(ExternalChildMessage);
    });

    it("should contain the expected doClientStream method", () => {
      expect(SimpleServiceService.doClientStream.path).toEqual("/examplecom.SimpleService/DoClientStream");
      expect(SimpleServiceService.doClientStream.requestStream).toEqual(true);
      expect(SimpleServiceService.doClientStream.responseStream).toEqual(false);
      expect((SimpleServiceService.doClientStream as any).requestType).toEqual(StreamRequest);
      expect((SimpleServiceService.doClientStream as any).responseType).toEqual(Empty);
    });

    it("should contain the expected doBidiStream method", () => {
      expect(SimpleServiceService.doBidiStream.path).toEqual("/examplecom.SimpleService/DoBidiStream");
      expect(SimpleServiceService.doBidiStream.requestStream).toEqual(true);
      expect(SimpleServiceService.doBidiStream.responseStream).toEqual(true);
      expect((SimpleServiceService.doBidiStream as any).requestType).toEqual(StreamRequest);
      expect((SimpleServiceService.doBidiStream as any).responseType).toEqual(ExternalChildMessage);
    });

    it("should contain the expected delete method", () => {
      expect(SimpleServiceService.delete.path).toEqual("/examplecom.SimpleService/Delete");
      expect(SimpleServiceService.delete.requestStream).toEqual(false);
      expect(SimpleServiceService.delete.responseStream).toEqual(false);
      expect((SimpleServiceService.delete as any).requestType).toEqual(UnaryRequest);
      expect((SimpleServiceService.delete as any).responseType).toEqual(UnaryResponse);
    });
  });

  it("should not output imports for namespaces that are not used in the service definition", () => {
    const generatedService = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-js-node/proto/examplecom/simple_service_grpc_pb.d.ts"), "utf8");
    expect(generatedService).not.toContain("google-protobuf/google/protobuf/timestamp_pb");

    const generatedProto = readFileSync(resolve(__dirname, "../../../examples/generated-grpc-js-node/proto/examplecom/simple_service_grpc_pb.js"), "utf8");
    expect(generatedProto).toContain("google-protobuf/google/protobuf/timestamp_pb");
  });

  it("should generate service definition files for protos that have no service definitions", () => {
    expect(existsSync(resolve(__dirname, "../../../examples/generated-grpc-js-node/proto/examplecom/empty_message_no_service_grpc_pb.d.ts"))).toBeTruthy();
    expect(existsSync(resolve(__dirname, "../../../examples/generated-grpc-js-node/proto/examplecom/empty_message_no_service_grpc_pb.js"))).toBeTruthy();
  });

  describe("generated client definition", () => {
    it("should contain the expected constructor", () => {
      expect(typeof SimpleServiceClient).toEqual("function");

      // check that the constructor has the expected type

      expect((address: string, credentials: grpc.ChannelCredentials, options?: object): SimpleServiceClient => {
        return new SimpleServiceClient(address, credentials, options);
      }).toBeDefined();
    });

    const client = new SimpleServiceClient("http://localhost:1", grpc.credentials.createInsecure());

    it("should contain the expected doUnary method", () => {
      expect(typeof client.doUnary).toEqual("function");

      // check that the method has the expected type

      expect((argument: UnaryRequest,
                        callback: grpc.requestCallback<ExternalChildMessage>): grpc.ClientUnaryCall => {
        return client.doUnary(argument, callback);
      }).toBeDefined();

      expect((argument: UnaryRequest,
                        metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
                        callback: grpc.requestCallback<ExternalChildMessage>): grpc.ClientUnaryCall => {
        return client.doUnary(argument, metadataOrOptions, callback);
      }).toBeDefined();

      expect((argument: UnaryRequest,
                        metadata: grpc.Metadata | null,
                        options: grpc.CallOptions | null,
                        callback: grpc.requestCallback<ExternalChildMessage>): grpc.ClientUnaryCall => {
        return client.doUnary(argument, metadata, options, callback);
      }).toBeDefined();
    });

    it("should contain the expected doServerStream method", () => {
      expect(typeof client.doServerStream).toEqual("function");

      // check that the method has the expected type

      expect((argument: StreamRequest,
                        metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<ExternalChildMessage> => {
        return client.doServerStream(argument, metadataOrOptions);
      }).toBeDefined();

      expect((argument: StreamRequest,
                        metadata: grpc.Metadata | null,
                        options: grpc.CallOptions | null): grpc.ClientReadableStream<ExternalChildMessage> => {
        return client.doServerStream(argument, metadata, options);
      }).toBeDefined();
    });

    it("should contain the expected doClientStream method", () => {
      expect(typeof client.doClientStream).toEqual("function");

      // check that the method has the expected type

      expect((callback: grpc.requestCallback<Empty>): grpc.ClientWritableStream<StreamRequest> => {
        return client.doClientStream(callback);
      }).toBeDefined();

      expect((metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
                        callback: grpc.requestCallback<Empty>): grpc.ClientWritableStream<StreamRequest> => {
        return client.doClientStream(metadataOrOptions, callback);
      }).toBeDefined();

      expect((metadata: grpc.Metadata | null,
                        options: grpc.CallOptions | null,
                        callback: grpc.requestCallback<Empty>): grpc.ClientWritableStream<StreamRequest> => {
        return client.doClientStream(metadata, options, callback);
      }).toBeDefined();
    });

    it("should contain the expected doBidiStream method", () => {
      expect(typeof client.doBidiStream).toEqual( "function");

      // check that the method has the expected type

      expect((metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<StreamRequest, ExternalChildMessage> => {
        return client.doBidiStream(metadataOrOptions);
      }).toBeDefined();

      expect((metadata: grpc.Metadata | null,
                        options?: grpc.CallOptions | null): grpc.ClientDuplexStream<StreamRequest, ExternalChildMessage> => {
        return client.doBidiStream(metadata, options);
      }).toBeDefined();
    });

    it("should contain the expected delete method", () => {
      expect(typeof client.delete).toEqual( "function");

      // check that the method has the expected type

      expect((argument: UnaryRequest, callback: grpc.requestCallback<UnaryResponse>): grpc.ClientUnaryCall => {
        return client.delete(argument, callback);
      }).toBeDefined();

      expect((argument: UnaryRequest,
                        metadataOrOptions: grpc.Metadata | grpc.CallOptions | null,
                        callback: grpc.requestCallback<UnaryResponse>): grpc.ClientUnaryCall => {
        return client.delete(argument, metadataOrOptions, callback);
      }).toBeDefined();

      expect((argument: UnaryRequest,
                        metadata: grpc.Metadata | null,
                        options: grpc.CallOptions | null,
                        callback: grpc.requestCallback<UnaryResponse>): grpc.ClientUnaryCall => {
        return client.delete(argument, metadata, options, callback);
      }).toBeDefined();
    });
  });
});
