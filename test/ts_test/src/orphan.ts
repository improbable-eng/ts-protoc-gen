import {assert} from "chai";
import * as orphan_pb_service from "../generated/orphan_pb_service";
import * as orphan_pb from "../generated/orphan_pb";

describe("ts orphan service", () => {
  it("should generate a service definition that does not have a package", () => {
    assert.strictEqual(orphan_pb_service.OrphanService.serviceName, "OrphanService");

    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.methodName, "DoUnary");
    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.service, orphan_pb_service.OrphanService);
    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.requestStream, false);
    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.responseStream, false);
    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.requestType, orphan_pb.OrphanUnaryRequest);
    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.responseType, orphan_pb.OrphanMessage);
    assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.path, "/OrphanService/DoUnary");
    assert.isDefined(orphan_pb_service.OrphanService.DoUnary.requestSerialize);
    assert.isDefined(orphan_pb_service.OrphanService.DoUnary.requestDeserialize);
    assert.isDefined(orphan_pb_service.OrphanService.DoUnary.responseSerialize);
    assert.isDefined(orphan_pb_service.OrphanService.DoUnary.responseDeserialize);

    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.methodName, "DoStream");
    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.service, orphan_pb_service.OrphanService);
    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.requestStream, false);
    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.responseStream, true);
    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.requestType, orphan_pb.OrphanStreamRequest);
    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.responseType, orphan_pb.OrphanMessage);
    assert.strictEqual(orphan_pb_service.OrphanService.DoStream.path, "/OrphanService/DoStream");
    assert.isDefined(orphan_pb_service.OrphanService.DoStream.requestSerialize);
    assert.isDefined(orphan_pb_service.OrphanService.DoStream.requestDeserialize);
    assert.isDefined(orphan_pb_service.OrphanService.DoStream.responseSerialize);
    assert.isDefined(orphan_pb_service.OrphanService.DoStream.responseDeserialize);
  });
});
