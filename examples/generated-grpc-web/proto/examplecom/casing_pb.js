// source: proto/examplecom/casing.proto
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

goog.exportSymbol('proto.examplecom.CasingMessage', null, global);
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
proto.examplecom.CasingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.CasingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.examplecom.CasingMessage.displayName = 'proto.examplecom.CasingMessage';
}



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
proto.examplecom.CasingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.CasingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.CasingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.CasingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    titlecase: jspb.Message.getFieldWithDefault(msg, 1, ""),
    camelcase: jspb.Message.getFieldWithDefault(msg, 2, ""),
    snakeCase: jspb.Message.getFieldWithDefault(msg, 3, ""),
    leadingunderscorecamelcase: jspb.Message.getFieldWithDefault(msg, 4, ""),
    leadingunderscoretitlecase: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.examplecom.CasingMessage}
 */
proto.examplecom.CasingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.CasingMessage;
  return proto.examplecom.CasingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.CasingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.CasingMessage}
 */
proto.examplecom.CasingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitlecase(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCamelcase(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnakeCase(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadingunderscorecamelcase(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeadingunderscoretitlecase(value);
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
proto.examplecom.CasingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.CasingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.CasingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.CasingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitlecase();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCamelcase();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSnakeCase();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLeadingunderscorecamelcase();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLeadingunderscoretitlecase();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string TitleCase = 1;
 * @return {string}
 */
proto.examplecom.CasingMessage.prototype.getTitlecase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.CasingMessage} returns this
 */
proto.examplecom.CasingMessage.prototype.setTitlecase = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string camelCase = 2;
 * @return {string}
 */
proto.examplecom.CasingMessage.prototype.getCamelcase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.CasingMessage} returns this
 */
proto.examplecom.CasingMessage.prototype.setCamelcase = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string snake_case = 3;
 * @return {string}
 */
proto.examplecom.CasingMessage.prototype.getSnakeCase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.CasingMessage} returns this
 */
proto.examplecom.CasingMessage.prototype.setSnakeCase = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string _leadingUnderscoreCamelCase = 4;
 * @return {string}
 */
proto.examplecom.CasingMessage.prototype.getLeadingunderscorecamelcase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.CasingMessage} returns this
 */
proto.examplecom.CasingMessage.prototype.setLeadingunderscorecamelcase = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string _LeadingUnderscoreTitleCase = 5;
 * @return {string}
 */
proto.examplecom.CasingMessage.prototype.getLeadingunderscoretitlecase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.CasingMessage} returns this
 */
proto.examplecom.CasingMessage.prototype.setLeadingunderscoretitlecase = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


goog.object.extend(exports, proto.examplecom);
