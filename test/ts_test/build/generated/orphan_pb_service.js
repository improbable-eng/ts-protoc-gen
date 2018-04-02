"use strict";
// package: 
// file: orphan.proto
Object.defineProperty(exports, "__esModule", { value: true });
var orphan_pb = require("./orphan_pb");
var OrphanService = /** @class */ (function () {
    function OrphanService() {
    }
    OrphanService.serviceName = "OrphanService";
    return OrphanService;
}());
exports.OrphanService = OrphanService;
(function (OrphanService) {
    var DoUnary = /** @class */ (function () {
        function DoUnary() {
        }
        DoUnary.methodName = "DoUnary";
        DoUnary.service = OrphanService;
        DoUnary.requestStream = false;
        DoUnary.responseStream = false;
        DoUnary.requestType = orphan_pb.OrphanUnaryRequest;
        DoUnary.responseType = orphan_pb.OrphanMessage;
        return DoUnary;
    }());
    OrphanService.DoUnary = DoUnary;
    var DoStream = /** @class */ (function () {
        function DoStream() {
        }
        DoStream.methodName = "DoStream";
        DoStream.service = OrphanService;
        DoStream.requestStream = false;
        DoStream.responseStream = true;
        DoStream.requestType = orphan_pb.OrphanStreamRequest;
        DoStream.responseType = orphan_pb.OrphanMessage;
        return DoStream;
    }());
    OrphanService.DoStream = DoStream;
})(OrphanService = exports.OrphanService || (exports.OrphanService = {}));
exports.OrphanService = OrphanService;
// TEST
var OrphanService = /** @class */ (function () {
    function OrphanService() {
    }
    OrphanService.serviceName = "OrphanService";
    return OrphanService;
}());
exports.OrphanService = OrphanService;
(function (OrphanService) {
    var DoUnary = /** @class */ (function () {
        function DoUnary() {
        }
        DoUnary.methodName = "DoUnary";
        DoUnary.service = "OrphanService";
        DoUnary.requestStream = false;
        DoUnary.responseStream = false;
        DoUnary.requestType = false;
        DoUnary.requestType = "orphan_pb.OrphanUnaryRequest";
        DoUnary.responseType = "orphan_pb.OrphanMessage";
        return DoUnary;
    }());
    OrphanService.DoUnary = DoUnary;
    var DoStream = /** @class */ (function () {
        function DoStream() {
        }
        DoStream.methodName = "DoStream";
        DoStream.service = "OrphanService";
        DoStream.requestStream = false;
        DoStream.responseStream = true;
        DoStream.requestType = true;
        DoStream.requestType = "orphan_pb.OrphanStreamRequest";
        DoStream.responseType = "orphan_pb.OrphanMessage";
        return DoStream;
    }());
    OrphanService.DoStream = DoStream;
})(OrphanService = exports.OrphanService || (exports.OrphanService = {}));
exports.OrphanService = OrphanService;
// end TEST
//# sourceMappingURL=orphan_pb_service.js.map