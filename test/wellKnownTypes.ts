import {assert} from "chai";
import {WellKnownMessage} from "../examples/generated/examplecom/well_known_message_pb";
import {Any} from "google-protobuf/google/protobuf/any_pb";
import {CodeGeneratorRequest} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {Method} from "google-protobuf/google/protobuf/api_pb";
import {GeneratedCodeInfo} from "google-protobuf/google/protobuf/descriptor_pb";
import {Duration} from "google-protobuf/google/protobuf/duration_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import {FieldMask} from "google-protobuf/google/protobuf/field_mask_pb";
import {SourceContext} from "google-protobuf/google/protobuf/source_context_pb";
import {Struct, Value} from "google-protobuf/google/protobuf/struct_pb";
import {Timestamp} from "google-protobuf/google/protobuf/timestamp_pb";
import {Type} from "google-protobuf/google/protobuf/type_pb";
import {DoubleValue} from "google-protobuf/google/protobuf/wrappers_pb";
import Annotation = GeneratedCodeInfo.Annotation;

describe("well known types", () => {
  it("should allow setting and getting an Any field", () => {
    const msg = new WellKnownMessage();
    const myAny = new Any();
    myAny.setTypeUrl("some.type.url");
    msg.setMyAny(myAny);
    assert.strictEqual(msg.getMyAny()!.getTypeUrl() as string, "some.type.url");
  });

  it("should allow setting and getting a CodeGeneratorRequest field", () => {
    const msg = new WellKnownMessage();
    const codeGeneratorRequest = new CodeGeneratorRequest();
    codeGeneratorRequest.setParameter("some-parameter");
    msg.setMyCodeGeneratorRequest(codeGeneratorRequest);
    assert.strictEqual(msg.getMyCodeGeneratorRequest()!.getParameter() as string, "some-parameter");
  });

  it("should allow setting and getting a Method field", () => {
    const msg = new WellKnownMessage();
    const method = new Method();
    method.setName("some-name");
    msg.setMyMethod(method);
    assert.strictEqual(msg.getMyMethod()!.getName() as string, "some-name");
  });

  it("should allow setting and getting a GeneratedCodeInfo field", () => {
    const msg = new WellKnownMessage();
    const generatedCodeInfo = new GeneratedCodeInfo();
    const annotation = new Annotation();
    annotation.setSourceFile("some-source-file");
    generatedCodeInfo.setAnnotationList([annotation]);
    msg.setMyGeneratedCodeInfo(generatedCodeInfo);
    assert.strictEqual(msg.getMyGeneratedCodeInfo()!.getAnnotationList()[0].getSourceFile() as string, "some-source-file");
  });

  it("should allow setting and getting a Duration field", () => {
    const msg = new WellKnownMessage();
    const myDuration = new Duration();
    myDuration.setSeconds(1000);
    msg.setMyDuration(myDuration);
    assert.strictEqual(msg.getMyDuration()!.getSeconds() as number, 1000);
  });

  it("should allow setting and getting an Empty field", () => {
    const msg = new WellKnownMessage();
    const myEmpty = new Empty();
    msg.setMyEmpty(myEmpty);
    assert.ok(msg.getMyEmpty() as Empty instanceof Empty);
  });

  it("should allow setting and getting a FieldMask field", () => {
    const msg = new WellKnownMessage();
    const myFieldMask = new FieldMask();
    myFieldMask.setPathsList(["some-path"]);
    msg.setMyFieldMask(myFieldMask);
    assert.strictEqual(msg.getMyFieldMask()!.getPathsList()[0] as string, "some-path");
  });

  it("should allow setting and getting a SourceContext field", () => {
    const msg = new WellKnownMessage();
    const mySourceContext = new SourceContext();
    mySourceContext.setFileName("some-file-name");
    msg.setMySourceContext(mySourceContext);
    assert.strictEqual(msg.getMySourceContext()!.getFileName() as string, "some-file-name");
  });

  it("should allow setting and getting a Struct field", () => {
    const msg = new WellKnownMessage();
    const myStruct = new Struct();
    const fieldsMap = myStruct.getFieldsMap();
    const value = new Value();
    value.setNumberValue(123);
    fieldsMap.set("some-key", value);
    msg.setMyStruct(myStruct);
    assert.strictEqual(msg.getMyStruct()!.getFieldsMap().get("some-key")!.getNumberValue() as number, 123);
  });

  it("should allow setting and getting a Timestamp field", () => {
    const msg = new WellKnownMessage();
    const myTimestamp = new Timestamp();
    myTimestamp.setSeconds(441763200);
    msg.setMyTimestamp(myTimestamp);
    assert.strictEqual(msg.getMyTimestamp()!.toDate().getUTCFullYear() as number, 1984);
  });

  it("should allow setting and getting a Type field", () => {
    const msg = new WellKnownMessage();
    const myType = new Type();
    myType.setName("some-name");
    msg.setMyType(myType);
    assert.strictEqual(msg.getMyType()!.getName() as string, "some-name");
  });

  it("should allow setting and getting a DoubleValue field", () => {
    const msg = new WellKnownMessage();
    const myDoubleValue = new DoubleValue();
    myDoubleValue.setValue(123);
    msg.setMyDoubleValue(myDoubleValue);
    assert.strictEqual(msg.getMyDoubleValue()!.getValue() as number, 123);
  });
});
