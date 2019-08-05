// package: 
// file: proto/orphan.proto

var proto_orphan_pb = require("../proto/orphan_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var OrphanService = (function () {
  function OrphanService() {}
  OrphanService.serviceName = "OrphanService";
  return OrphanService;
}());

OrphanService.DoUnary = {
  methodName: "DoUnary",
  service: OrphanService,
  requestStream: false,
  responseStream: false,
  requestType: proto_orphan_pb.OrphanUnaryRequest,
  responseType: proto_orphan_pb.OrphanMessage
};

OrphanService.DoStream = {
  methodName: "DoStream",
  service: OrphanService,
  requestStream: false,
  responseStream: true,
  requestType: proto_orphan_pb.OrphanStreamRequest,
  responseType: proto_orphan_pb.OrphanMessage
};

exports.OrphanService = OrphanService;

function OrphanServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

OrphanServiceClient.prototype.doUnary = function doUnary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(OrphanService.DoUnary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

OrphanServiceClient.prototype.doStream = function doStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(OrphanService.DoStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.OrphanServiceClient = OrphanServiceClient;

