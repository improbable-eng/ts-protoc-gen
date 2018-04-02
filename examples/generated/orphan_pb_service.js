// package: 
// file: orphan.proto

var orphan_pb = require("./orphan_pb");

var OrphanService = (function () {
  function OrphanService() {}
  OrphanService.serviceName = "OrphanService";
  return OrphanService;
}());

OrphanService.DoUnary = {  methodName: "DoUnary",
  service: OrphanService,
  requestStream: false,
  responseStream: false,
  requestType: orphan_pb.OrphanUnaryRequest,
  responseType: orphan_pb.OrphanMessage
};

OrphanService.DoStream = {  methodName: "DoStream",
  service: OrphanService,
  requestStream: false,
  responseStream: true,
  requestType: orphan_pb.OrphanStreamRequest,
  responseType: orphan_pb.OrphanMessage
};

exports.OrphanService = OrphanService;

