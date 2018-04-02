"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var orphan_pb_service = require("../generated/orphan_pb_service");
var orphan_pb = require("../generated/orphan_pb");
describe("ts orphan service", function () {
    it("should generate a service definition that does not have a package", function () {
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.serviceName, "OrphanService");
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.methodName, "DoUnary");
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.service, orphan_pb_service.OrphanService);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.requestStream, false);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.responseStream, false);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.requestType, orphan_pb.OrphanUnaryRequest);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoUnary.responseType, orphan_pb.OrphanMessage);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoStream.methodName, "DoStream");
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoStream.service, orphan_pb_service.OrphanService);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoStream.requestStream, false);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoStream.responseStream, true);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoStream.requestType, orphan_pb.OrphanStreamRequest);
        chai_1.assert.strictEqual(orphan_pb_service.OrphanService.DoStream.responseType, orphan_pb.OrphanMessage);
    });
});
//# sourceMappingURL=orphan.js.map