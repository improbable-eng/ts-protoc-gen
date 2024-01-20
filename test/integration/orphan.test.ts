import * as orphan_pb_service from "../../examples/generated-grpc-web/proto/orphan_pb_service";
import * as orphan_pb from "../../examples/generated-grpc-web/proto/orphan_pb";

describe("ts orphan service", () => {
  it("should generate a service definition that does not have a package", () => {
    expect(orphan_pb_service.OrphanService.serviceName).toStrictEqual("OrphanService");

    expect(orphan_pb_service.OrphanService.DoUnary.methodName).toStrictEqual("DoUnary");
    expect(orphan_pb_service.OrphanService.DoUnary.service).toStrictEqual(orphan_pb_service.OrphanService);
    expect(orphan_pb_service.OrphanService.DoUnary.requestStream).toStrictEqual(false);
    expect(orphan_pb_service.OrphanService.DoUnary.responseStream).toStrictEqual(false);
    expect(orphan_pb_service.OrphanService.DoUnary.requestType).toStrictEqual(orphan_pb.OrphanUnaryRequest);
    expect(orphan_pb_service.OrphanService.DoUnary.responseType).toStrictEqual(orphan_pb.OrphanMessage);

    expect(orphan_pb_service.OrphanService.DoStream.methodName).toStrictEqual("DoStream");
    expect(orphan_pb_service.OrphanService.DoStream.service).toStrictEqual(orphan_pb_service.OrphanService);
    expect(orphan_pb_service.OrphanService.DoStream.requestStream).toStrictEqual(false);
    expect(orphan_pb_service.OrphanService.DoStream.responseStream).toStrictEqual(true);
    expect(orphan_pb_service.OrphanService.DoStream.requestType).toStrictEqual(orphan_pb.OrphanStreamRequest);
    expect(orphan_pb_service.OrphanService.DoStream.responseType).toStrictEqual(orphan_pb.OrphanMessage);
  });
});
