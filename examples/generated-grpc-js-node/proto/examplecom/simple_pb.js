// source: proto/examplecom/simple.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_compiler_plugin_pb = require('google-protobuf/google/protobuf/compiler/plugin_pb.js');
goog.object.extend(proto, google_protobuf_compiler_plugin_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_api_pb = require('google-protobuf/google/protobuf/api_pb.js');
goog.object.extend(proto, google_protobuf_api_pb);
var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_source_context_pb = require('google-protobuf/google/protobuf/source_context_pb.js');
goog.object.extend(proto, google_protobuf_source_context_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_type_pb = require('google-protobuf/google/protobuf/type_pb.js');
goog.object.extend(proto, google_protobuf_type_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.examplecom.MySimple', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.MySimple = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.examplecom.MySimple.repeatedFields_, null);
};
goog.inherits(proto.examplecom.MySimple, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.examplecom.MySimple.displayName = 'proto.examplecom.MySimple';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.examplecom.MySimple.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.MySimple.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.MySimple.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.MySimple} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.MySimple.toObject = function(includeInstance, msg) {
  var f, obj = {
    myString: jspb.Message.getFieldWithDefault(msg, 1, ""),
    myBool: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    someLabelsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    someCodeGeneratorRequest: (f = msg.getSomeCodeGeneratorRequest()) && google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.toObject(includeInstance, f),
    someAny: (f = msg.getSomeAny()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    someMethod: (f = msg.getSomeMethod()) && google_protobuf_api_pb.Method.toObject(includeInstance, f),
    someGeneratedCodeInfo: (f = msg.getSomeGeneratedCodeInfo()) && google_protobuf_descriptor_pb.GeneratedCodeInfo.toObject(includeInstance, f),
    someDuration: (f = msg.getSomeDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    someEmpty: (f = msg.getSomeEmpty()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    someFieldMask: (f = msg.getSomeFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    someSourceContext: (f = msg.getSomeSourceContext()) && google_protobuf_source_context_pb.SourceContext.toObject(includeInstance, f),
    someStruct: (f = msg.getSomeStruct()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    someTimestamp: (f = msg.getSomeTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    someType: (f = msg.getSomeType()) && google_protobuf_type_pb.Type.toObject(includeInstance, f),
    someDoubleValue: (f = msg.getSomeDoubleValue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.MySimple}
 */
proto.examplecom.MySimple.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.MySimple;
  return proto.examplecom.MySimple.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.MySimple} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.MySimple}
 */
proto.examplecom.MySimple.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMyString(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMyBool(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSomeLabels(value);
      break;
    case 4:
      var value = new google_protobuf_compiler_plugin_pb.CodeGeneratorRequest;
      reader.readMessage(value,google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.deserializeBinaryFromReader);
      msg.setSomeCodeGeneratorRequest(value);
      break;
    case 5:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setSomeAny(value);
      break;
    case 6:
      var value = new google_protobuf_api_pb.Method;
      reader.readMessage(value,google_protobuf_api_pb.Method.deserializeBinaryFromReader);
      msg.setSomeMethod(value);
      break;
    case 7:
      var value = new google_protobuf_descriptor_pb.GeneratedCodeInfo;
      reader.readMessage(value,google_protobuf_descriptor_pb.GeneratedCodeInfo.deserializeBinaryFromReader);
      msg.setSomeGeneratedCodeInfo(value);
      break;
    case 8:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setSomeDuration(value);
      break;
    case 9:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setSomeEmpty(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setSomeFieldMask(value);
      break;
    case 11:
      var value = new google_protobuf_source_context_pb.SourceContext;
      reader.readMessage(value,google_protobuf_source_context_pb.SourceContext.deserializeBinaryFromReader);
      msg.setSomeSourceContext(value);
      break;
    case 12:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setSomeStruct(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setSomeTimestamp(value);
      break;
    case 14:
      var value = new google_protobuf_type_pb.Type;
      reader.readMessage(value,google_protobuf_type_pb.Type.deserializeBinaryFromReader);
      msg.setSomeType(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSomeDoubleValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.MySimple.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.MySimple.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.MySimple} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.MySimple.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyString();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMyBool();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSomeLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSomeCodeGeneratorRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_compiler_plugin_pb.CodeGeneratorRequest.serializeBinaryToWriter
    );
  }
  f = message.getSomeAny();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getSomeMethod();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_api_pb.Method.serializeBinaryToWriter
    );
  }
  f = message.getSomeGeneratedCodeInfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_descriptor_pb.GeneratedCodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getSomeDuration();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSomeEmpty();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getSomeFieldMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getSomeSourceContext();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_source_context_pb.SourceContext.serializeBinaryToWriter
    );
  }
  f = message.getSomeStruct();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getSomeTimestamp();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSomeType();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_type_pb.Type.serializeBinaryToWriter
    );
  }
  f = message.getSomeDoubleValue();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string my_string = 1;
 * @return {string}
 */
proto.examplecom.MySimple.prototype.getMyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.setMyString = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool my_bool = 2;
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.getMyBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.setMyBool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated string some_labels = 3;
 * @return {!Array<string>}
 */
proto.examplecom.MySimple.prototype.getSomeLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.setSomeLabelsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.addSomeLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeLabelsList = function() {
  return this.setSomeLabelsList([]);
};


/**
 * optional google.protobuf.compiler.CodeGeneratorRequest some_code_generator_request = 4;
 * @return {?proto.google.protobuf.compiler.CodeGeneratorRequest}
 */
proto.examplecom.MySimple.prototype.getSomeCodeGeneratorRequest = function() {
  return /** @type{?proto.google.protobuf.compiler.CodeGeneratorRequest} */ (
    jspb.Message.getWrapperField(this, google_protobuf_compiler_plugin_pb.CodeGeneratorRequest, 4));
};


/**
 * @param {?proto.google.protobuf.compiler.CodeGeneratorRequest|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeCodeGeneratorRequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeCodeGeneratorRequest = function() {
  return this.setSomeCodeGeneratorRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeCodeGeneratorRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Any some_any = 5;
 * @return {?proto.google.protobuf.Any}
 */
proto.examplecom.MySimple.prototype.getSomeAny = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 5));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeAny = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeAny = function() {
  return this.setSomeAny(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeAny = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Method some_method = 6;
 * @return {?proto.google.protobuf.Method}
 */
proto.examplecom.MySimple.prototype.getSomeMethod = function() {
  return /** @type{?proto.google.protobuf.Method} */ (
    jspb.Message.getWrapperField(this, google_protobuf_api_pb.Method, 6));
};


/**
 * @param {?proto.google.protobuf.Method|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeMethod = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeMethod = function() {
  return this.setSomeMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeMethod = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.GeneratedCodeInfo some_generated_code_info = 7;
 * @return {?proto.google.protobuf.GeneratedCodeInfo}
 */
proto.examplecom.MySimple.prototype.getSomeGeneratedCodeInfo = function() {
  return /** @type{?proto.google.protobuf.GeneratedCodeInfo} */ (
    jspb.Message.getWrapperField(this, google_protobuf_descriptor_pb.GeneratedCodeInfo, 7));
};


/**
 * @param {?proto.google.protobuf.GeneratedCodeInfo|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeGeneratedCodeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeGeneratedCodeInfo = function() {
  return this.setSomeGeneratedCodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeGeneratedCodeInfo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Duration some_duration = 8;
 * @return {?proto.google.protobuf.Duration}
 */
proto.examplecom.MySimple.prototype.getSomeDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 8));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeDuration = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeDuration = function() {
  return this.setSomeDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeDuration = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Empty some_empty = 9;
 * @return {?proto.google.protobuf.Empty}
 */
proto.examplecom.MySimple.prototype.getSomeEmpty = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 9));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeEmpty = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeEmpty = function() {
  return this.setSomeEmpty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeEmpty = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.FieldMask some_field_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.examplecom.MySimple.prototype.getSomeFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeFieldMask = function() {
  return this.setSomeFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeFieldMask = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.SourceContext some_source_context = 11;
 * @return {?proto.google.protobuf.SourceContext}
 */
proto.examplecom.MySimple.prototype.getSomeSourceContext = function() {
  return /** @type{?proto.google.protobuf.SourceContext} */ (
    jspb.Message.getWrapperField(this, google_protobuf_source_context_pb.SourceContext, 11));
};


/**
 * @param {?proto.google.protobuf.SourceContext|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeSourceContext = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeSourceContext = function() {
  return this.setSomeSourceContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeSourceContext = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Struct some_struct = 12;
 * @return {?proto.google.protobuf.Struct}
 */
proto.examplecom.MySimple.prototype.getSomeStruct = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 12));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeStruct = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeStruct = function() {
  return this.setSomeStruct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeStruct = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp some_timestamp = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.examplecom.MySimple.prototype.getSomeTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeTimestamp = function() {
  return this.setSomeTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeTimestamp = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Type some_type = 14;
 * @return {?proto.google.protobuf.Type}
 */
proto.examplecom.MySimple.prototype.getSomeType = function() {
  return /** @type{?proto.google.protobuf.Type} */ (
    jspb.Message.getWrapperField(this, google_protobuf_type_pb.Type, 14));
};


/**
 * @param {?proto.google.protobuf.Type|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeType = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeType = function() {
  return this.setSomeType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeType = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.DoubleValue some_double_value = 15;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.examplecom.MySimple.prototype.getSomeDoubleValue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 15));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.examplecom.MySimple} returns this
*/
proto.examplecom.MySimple.prototype.setSomeDoubleValue = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.examplecom.MySimple} returns this
 */
proto.examplecom.MySimple.prototype.clearSomeDoubleValue = function() {
  return this.setSomeDoubleValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.MySimple.prototype.hasSomeDoubleValue = function() {
  return jspb.Message.getField(this, 15) != null;
};


goog.object.extend(exports, proto.examplecom);
