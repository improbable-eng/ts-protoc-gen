import {EnumMessage} from "../../examples/generated/proto/examplecom/enum_message_pb";
import {ExternalEnum} from "../../examples/generated/proto/othercom/external_enum_pb";
import InternalEnum = EnumMessage.InternalEnum;

describe("internal enums", () => {
  it("should allow getting internal enum fields on an empty enum", () => {
    const parentMsg = new EnumMessage();
    expect(parentMsg.getInternalEnum()).toStrictEqual( 0);
    expect(parentMsg.getInternalEnumsList()).toStrictEqual([]);
  });

  it("should allow setting and getting internal enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setInternalEnum(InternalEnum.FIRST);
    expect(parentMsg.getInternalEnum()).toStrictEqual(InternalEnum.FIRST);
  });

  it("should allow setting and getting repeated internal enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setInternalEnumsList([InternalEnum.FIRST, InternalEnum.SECOND]);
    expect(parentMsg.getInternalEnumsList()).toStrictEqual([InternalEnum.FIRST, InternalEnum.SECOND]);
  });
});

describe("external enums", () => {
  it("should allow getting external enum fields on an empty enum", () => {
    const parentMsg = new EnumMessage();
    expect(parentMsg.getExternalEnum()).toStrictEqual(0);
    expect(parentMsg.getExternalEnumsList()).toStrictEqual([]);
  });

  it("should allow setting and getting external enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setExternalEnum(ExternalEnum.FIRST);
    expect(parentMsg.getExternalEnum()).toStrictEqual(ExternalEnum.FIRST);
  });

  it("should allow setting and getting repeated external enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setExternalEnumsList([ExternalEnum.FIRST, ExternalEnum.SECOND]);
    expect(parentMsg.getExternalEnumsList()).toStrictEqual([ExternalEnum.FIRST, ExternalEnum.SECOND]);
  });
});

describe("enum casing", () => {
  it("should export enums as ALL_CAPS in proto definitions (#21)", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setInternalEnum(InternalEnum.THIRD); // should compile.
    expect(Object.keys(InternalEnum)).toStrictEqual(["DEFAULT", "FIRST", "SECOND", "THIRD"]);
  });
});
