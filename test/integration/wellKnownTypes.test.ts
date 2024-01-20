import {WellKnownMessage} from "../../examples/generated/proto/examplecom/well_known_message_pb";
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
    expect(msg.getMyAny()!.getTypeUrl() as string).toStrictEqual("some.type.url");
  });

  it("should allow setting and getting a CodeGeneratorRequest field", () => {
    const msg = new WellKnownMessage();
    const codeGeneratorRequest = new CodeGeneratorRequest();
    codeGeneratorRequest.setParameter("some-parameter");
    msg.setMyCodeGeneratorRequest(codeGeneratorRequest);
    expect(msg.getMyCodeGeneratorRequest()!.getParameter() as string).toStrictEqual("some-parameter");
  });

  it("should allow setting and getting a Method field", () => {
    const msg = new WellKnownMessage();
    const method = new Method();
    method.setName("some-name");
    msg.setMyMethod(method);
    expect(msg.getMyMethod()!.getName() as string).toStrictEqual("some-name");
  });

  it("should allow setting and getting a GeneratedCodeInfo field", () => {
    const msg = new WellKnownMessage();
    const generatedCodeInfo = new GeneratedCodeInfo();
    const annotation = new Annotation();
    annotation.setSourceFile("some-source-file");
    generatedCodeInfo.setAnnotationList([annotation]);
    msg.setMyGeneratedCodeInfo(generatedCodeInfo);
    expect(msg.getMyGeneratedCodeInfo()!.getAnnotationList()[0].getSourceFile() as string).toStrictEqual("some-source-file");
  });

  it("should allow setting and getting a Duration field", () => {
    const msg = new WellKnownMessage();
    const myDuration = new Duration();
    myDuration.setSeconds(1000);
    msg.setMyDuration(myDuration);
    expect(msg.getMyDuration()!.getSeconds() as number).toStrictEqual(1000);
  });

  it("should allow setting and getting an Empty field", () => {
    const msg = new WellKnownMessage();
    const myEmpty = new Empty();
    msg.setMyEmpty(myEmpty);
    expect(msg.getMyEmpty()).toBeInstanceOf(Empty);
  });

  it("should allow setting and getting a FieldMask field", () => {
    const msg = new WellKnownMessage();
    const myFieldMask = new FieldMask();
    myFieldMask.setPathsList(["some-path"]);
    msg.setMyFieldMask(myFieldMask);
    expect(msg.getMyFieldMask()!.getPathsList()[0] as string).toStrictEqual("some-path");
  });

  it("should allow setting and getting a SourceContext field", () => {
    const msg = new WellKnownMessage();
    const mySourceContext = new SourceContext();
    mySourceContext.setFileName("some-file-name");
    msg.setMySourceContext(mySourceContext);
    expect(msg.getMySourceContext()!.getFileName() as string).toStrictEqual("some-file-name");
  });

  it("should allow setting and getting a Struct field", () => {
    const msg = new WellKnownMessage();
    const myStruct = new Struct();
    const fieldsMap = myStruct.getFieldsMap();
    const value = new Value();
    value.setNumberValue(123);
    fieldsMap.set("some-key", value);
    msg.setMyStruct(myStruct);
    expect(msg.getMyStruct()!.getFieldsMap().get("some-key")!.getNumberValue() as number).toStrictEqual(123);
  });

  it("should allow setting and getting a Timestamp field", () => {
    const msg = new WellKnownMessage();
    const myTimestamp = new Timestamp();
    myTimestamp.setSeconds(441763200);
    msg.setMyTimestamp(myTimestamp);
    expect(msg.getMyTimestamp()!.toDate().getUTCFullYear() as number).toStrictEqual(1984);
  });

  it("should allow setting and getting a Type field", () => {
    const msg = new WellKnownMessage();
    const myType = new Type();
    myType.setName("some-name");
    msg.setMyType(myType);
    expect(msg.getMyType()!.getName() as string).toStrictEqual("some-name");
  });

  it("should allow setting and getting a DoubleValue field", () => {
    const msg = new WellKnownMessage();
    const myDoubleValue = new DoubleValue();
    myDoubleValue.setValue(123);
    msg.setMyDoubleValue(myDoubleValue);
    expect(msg.getMyDoubleValue()!.getValue() as number).toStrictEqual(123);
  });
});
