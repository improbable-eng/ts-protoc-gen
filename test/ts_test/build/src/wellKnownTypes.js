"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var well_known_message_pb_1 = require("../generated/examplecom/well_known_message_pb");
var any_pb_1 = require("google-protobuf/google/protobuf/any_pb");
var plugin_pb_1 = require("google-protobuf/google/protobuf/compiler/plugin_pb");
var api_pb_1 = require("google-protobuf/google/protobuf/api_pb");
var descriptor_pb_1 = require("google-protobuf/google/protobuf/descriptor_pb");
var duration_pb_1 = require("google-protobuf/google/protobuf/duration_pb");
var empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
var field_mask_pb_1 = require("google-protobuf/google/protobuf/field_mask_pb");
var source_context_pb_1 = require("google-protobuf/google/protobuf/source_context_pb");
var struct_pb_1 = require("google-protobuf/google/protobuf/struct_pb");
var timestamp_pb_1 = require("google-protobuf/google/protobuf/timestamp_pb");
var type_pb_1 = require("google-protobuf/google/protobuf/type_pb");
var wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
var Annotation = descriptor_pb_1.GeneratedCodeInfo.Annotation;
describe("well known types", function () {
    it("should allow setting and getting an Any field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myAny = new any_pb_1.Any();
        myAny.setTypeUrl("some.type.url");
        msg.setMyAny(myAny);
        chai_1.assert.strictEqual(msg.getMyAny().getTypeUrl(), "some.type.url");
    });
    it("should allow setting and getting a CodeGeneratorRequest field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var codeGeneratorRequest = new plugin_pb_1.CodeGeneratorRequest();
        codeGeneratorRequest.setParameter("some-parameter");
        msg.setMyCodeGeneratorRequest(codeGeneratorRequest);
        chai_1.assert.strictEqual(msg.getMyCodeGeneratorRequest().getParameter(), "some-parameter");
    });
    it("should allow setting and getting a Method field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var method = new api_pb_1.Method();
        method.setName("some-name");
        msg.setMyMethod(method);
        chai_1.assert.strictEqual(msg.getMyMethod().getName(), "some-name");
    });
    it("should allow setting and getting a GeneratedCodeInfo field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var generatedCodeInfo = new descriptor_pb_1.GeneratedCodeInfo();
        var annotation = new Annotation();
        annotation.setSourceFile("some-source-file");
        generatedCodeInfo.setAnnotationList([annotation]);
        msg.setMyGeneratedCodeInfo(generatedCodeInfo);
        chai_1.assert.strictEqual(msg.getMyGeneratedCodeInfo().getAnnotationList()[0].getSourceFile(), "some-source-file");
    });
    it("should allow setting and getting a Duration field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myDuration = new duration_pb_1.Duration();
        myDuration.setSeconds(1000);
        msg.setMyDuration(myDuration);
        chai_1.assert.strictEqual(msg.getMyDuration().getSeconds(), 1000);
    });
    it("should allow setting and getting an Empty field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myEmpty = new empty_pb_1.Empty();
        msg.setMyEmpty(myEmpty);
        chai_1.assert.ok(msg.getMyEmpty() instanceof empty_pb_1.Empty);
    });
    it("should allow setting and getting a FieldMask field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myFieldMask = new field_mask_pb_1.FieldMask();
        myFieldMask.setPathsList(["some-path"]);
        msg.setMyFieldMask(myFieldMask);
        chai_1.assert.strictEqual(msg.getMyFieldMask().getPathsList()[0], "some-path");
    });
    it("should allow setting and getting a SourceContext field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var mySourceContext = new source_context_pb_1.SourceContext();
        mySourceContext.setFileName("some-file-name");
        msg.setMySourceContext(mySourceContext);
        chai_1.assert.strictEqual(msg.getMySourceContext().getFileName(), "some-file-name");
    });
    it("should allow setting and getting a Struct field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myStruct = new struct_pb_1.Struct();
        var fieldsMap = myStruct.getFieldsMap();
        var value = new struct_pb_1.Value();
        value.setNumberValue(123);
        fieldsMap.set("some-key", value);
        msg.setMyStruct(myStruct);
        chai_1.assert.strictEqual(msg.getMyStruct().getFieldsMap().get("some-key").getNumberValue(), 123);
    });
    it("should allow setting and getting a Timestamp field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myTimestamp = new timestamp_pb_1.Timestamp();
        myTimestamp.setSeconds(441763200);
        msg.setMyTimestamp(myTimestamp);
        chai_1.assert.strictEqual(msg.getMyTimestamp().toDate().getUTCFullYear(), 1984);
    });
    it("should allow setting and getting a Type field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myType = new type_pb_1.Type();
        myType.setName("some-name");
        msg.setMyType(myType);
        chai_1.assert.strictEqual(msg.getMyType().getName(), "some-name");
    });
    it("should allow setting and getting a DoubleValue field", function () {
        var msg = new well_known_message_pb_1.WellKnownMessage();
        var myDoubleValue = new wrappers_pb_1.DoubleValue();
        myDoubleValue.setValue(123);
        msg.setMyDoubleValue(myDoubleValue);
        chai_1.assert.strictEqual(msg.getMyDoubleValue().getValue(), 123);
    });
});
//# sourceMappingURL=wellKnownTypes.js.map