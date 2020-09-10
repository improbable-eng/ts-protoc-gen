// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_examplecom_simple_service_pb = require('../../proto/examplecom/simple_service_pb.js');
var proto_othercom_external_child_message_pb = require('../../proto/othercom/external_child_message_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_examplecom_StreamRequest(arg) {
  if (!(arg instanceof proto_examplecom_simple_service_pb.StreamRequest)) {
    throw new Error('Expected argument of type examplecom.StreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_examplecom_StreamRequest(buffer_arg) {
  return proto_examplecom_simple_service_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_examplecom_UnaryRequest(arg) {
  if (!(arg instanceof proto_examplecom_simple_service_pb.UnaryRequest)) {
    throw new Error('Expected argument of type examplecom.UnaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_examplecom_UnaryRequest(buffer_arg) {
  return proto_examplecom_simple_service_pb.UnaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_examplecom_UnaryResponse(arg) {
  if (!(arg instanceof proto_examplecom_simple_service_pb.UnaryResponse)) {
    throw new Error('Expected argument of type examplecom.UnaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_examplecom_UnaryResponse(buffer_arg) {
  return proto_examplecom_simple_service_pb.UnaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_othercom_ExternalChildMessage(arg) {
  if (!(arg instanceof proto_othercom_external_child_message_pb.ExternalChildMessage)) {
    throw new Error('Expected argument of type othercom.ExternalChildMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_othercom_ExternalChildMessage(buffer_arg) {
  return proto_othercom_external_child_message_pb.ExternalChildMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var SimpleServiceService = exports.SimpleServiceService = {
  doUnary: {
    path: '/examplecom.SimpleService/DoUnary',
    requestStream: false,
    responseStream: false,
    requestType: proto_examplecom_simple_service_pb.UnaryRequest,
    responseType: proto_othercom_external_child_message_pb.ExternalChildMessage,
    requestSerialize: serialize_examplecom_UnaryRequest,
    requestDeserialize: deserialize_examplecom_UnaryRequest,
    responseSerialize: serialize_othercom_ExternalChildMessage,
    responseDeserialize: deserialize_othercom_ExternalChildMessage,
  },
  doServerStream: {
    path: '/examplecom.SimpleService/DoServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_examplecom_simple_service_pb.StreamRequest,
    responseType: proto_othercom_external_child_message_pb.ExternalChildMessage,
    requestSerialize: serialize_examplecom_StreamRequest,
    requestDeserialize: deserialize_examplecom_StreamRequest,
    responseSerialize: serialize_othercom_ExternalChildMessage,
    responseDeserialize: deserialize_othercom_ExternalChildMessage,
  },
  doClientStream: {
    path: '/examplecom.SimpleService/DoClientStream',
    requestStream: true,
    responseStream: false,
    requestType: proto_examplecom_simple_service_pb.StreamRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_examplecom_StreamRequest,
    requestDeserialize: deserialize_examplecom_StreamRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  doBidiStream: {
    path: '/examplecom.SimpleService/DoBidiStream',
    requestStream: true,
    responseStream: true,
    requestType: proto_examplecom_simple_service_pb.StreamRequest,
    responseType: proto_othercom_external_child_message_pb.ExternalChildMessage,
    requestSerialize: serialize_examplecom_StreamRequest,
    requestDeserialize: deserialize_examplecom_StreamRequest,
    responseSerialize: serialize_othercom_ExternalChildMessage,
    responseDeserialize: deserialize_othercom_ExternalChildMessage,
  },
  // checks that rpc methods that use reserved JS words don't generate invalid code
delete: {
    path: '/examplecom.SimpleService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: proto_examplecom_simple_service_pb.UnaryRequest,
    responseType: proto_examplecom_simple_service_pb.UnaryResponse,
    requestSerialize: serialize_examplecom_UnaryRequest,
    requestDeserialize: deserialize_examplecom_UnaryRequest,
    responseSerialize: serialize_examplecom_UnaryResponse,
    responseDeserialize: deserialize_examplecom_UnaryResponse,
  },
};

exports.SimpleServiceClient = grpc.makeGenericClientConstructor(SimpleServiceService);
