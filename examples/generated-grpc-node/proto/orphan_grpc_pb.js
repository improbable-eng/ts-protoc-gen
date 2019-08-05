// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_orphan_pb = require('../proto/orphan_pb.js');

function serialize_OrphanMessage(arg) {
  if (!(arg instanceof proto_orphan_pb.OrphanMessage)) {
    throw new Error('Expected argument of type OrphanMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OrphanMessage(buffer_arg) {
  return proto_orphan_pb.OrphanMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OrphanStreamRequest(arg) {
  if (!(arg instanceof proto_orphan_pb.OrphanStreamRequest)) {
    throw new Error('Expected argument of type OrphanStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OrphanStreamRequest(buffer_arg) {
  return proto_orphan_pb.OrphanStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OrphanUnaryRequest(arg) {
  if (!(arg instanceof proto_orphan_pb.OrphanUnaryRequest)) {
    throw new Error('Expected argument of type OrphanUnaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OrphanUnaryRequest(buffer_arg) {
  return proto_orphan_pb.OrphanUnaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrphanServiceService = exports.OrphanServiceService = {
  doUnary: {
    path: '/OrphanService/DoUnary',
    requestStream: false,
    responseStream: false,
    requestType: proto_orphan_pb.OrphanUnaryRequest,
    responseType: proto_orphan_pb.OrphanMessage,
    requestSerialize: serialize_OrphanUnaryRequest,
    requestDeserialize: deserialize_OrphanUnaryRequest,
    responseSerialize: serialize_OrphanMessage,
    responseDeserialize: deserialize_OrphanMessage,
  },
  doStream: {
    path: '/OrphanService/DoStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_orphan_pb.OrphanStreamRequest,
    responseType: proto_orphan_pb.OrphanMessage,
    requestSerialize: serialize_OrphanStreamRequest,
    requestDeserialize: deserialize_OrphanStreamRequest,
    responseSerialize: serialize_OrphanMessage,
    responseDeserialize: deserialize_OrphanMessage,
  },
};

exports.OrphanServiceClient = grpc.makeGenericClientConstructor(OrphanServiceService);
