// package: 
// file: orphan.proto

var orphan_pb = require("./orphan_pb");
var grpc = require("grpc-web-client").grpc;

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
  requestType: orphan_pb.OrphanUnaryRequest,
  responseType: orphan_pb.OrphanMessage
};

OrphanService.DoStream = {
  methodName: "DoStream",
  service: OrphanService,
  requestStream: false,
  responseStream: true,
  requestType: orphan_pb.OrphanStreamRequest,
  responseType: orphan_pb.OrphanMessage
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
  grpc.unary(OrphanService.DoUnary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
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
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
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

