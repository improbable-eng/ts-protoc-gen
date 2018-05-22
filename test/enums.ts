import {assert} from "chai";
import {EnumMessage} from "../examples/generated/examplecom/enum_message_pb";
import {ExternalEnum} from "../examples/generated/othercom/external_enum_pb";
import InternalEnum = EnumMessage.InternalEnum;

describe("internal enums", () => {
  it("should allow getting internal enum fields on an empty enum", () => {
    const parentMsg = new EnumMessage();
    assert.strictEqual(parentMsg.getInternalEnum(), 0);
    assert.deepEqual(parentMsg.getInternalEnumsList(), []);
  });

  it("should allow setting and getting internal enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setInternalEnum(InternalEnum.FIRST);
    assert.strictEqual(parentMsg.getInternalEnum(), InternalEnum.FIRST);
  });

  it("should allow setting and getting repeated internal enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setInternalEnumsList([InternalEnum.FIRST, InternalEnum.SECOND]);
    assert.deepEqual(parentMsg.getInternalEnumsList(), [InternalEnum.FIRST, InternalEnum.SECOND]);
  });
});

describe("external enums", () => {
  it("should allow getting external enum fields on an empty enum", () => {
    const parentMsg = new EnumMessage();
    assert.strictEqual(parentMsg.getExternalEnum(), 0);
    assert.deepEqual(parentMsg.getExternalEnumsList(), []);
  });

  it("should allow setting and getting external enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setExternalEnum(ExternalEnum.FIRST);
    assert.strictEqual(parentMsg.getExternalEnum(), ExternalEnum.FIRST);
  });

  it("should allow setting and getting repeated external enum fields", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setExternalEnumsList([ExternalEnum.FIRST, ExternalEnum.SECOND]);
    assert.deepEqual(parentMsg.getExternalEnumsList(), [ExternalEnum.FIRST, ExternalEnum.SECOND]);
  });
});

describe("enum casing", () => {
  it("should export enums as ALL_CAPS in proto definitions (#21)", () => {
    const parentMsg = new EnumMessage();
    parentMsg.setInternalEnum(InternalEnum.THIRD); // should compile.
    assert.ok(true, ".d.ts file should export the enum definition in ALL_CAPS");
  });
});