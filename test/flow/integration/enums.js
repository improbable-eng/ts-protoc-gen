// @flow
import { assert } from "chai";
import { describe, it } from "mocha";

// EnumMessage
import { EnumMessage } from "../../../examples/flow/generated/proto/examplecom/enum_message_pb";
import {
  EnumMessage$AsClass,
  EnumMessage$AsClass_InternalEnum
} from "../../../examples/flow/generated/proto/examplecom/enum_message_pb.flow";

// InternalEnum
const InternalEnum = EnumMessage$AsClass_InternalEnum;

// External Enum
import {
  ExternalEnum,
  ExternalEnum$ReverseLookUp
} from "../../../examples/flow/generated/proto/othercom/external_enum_pb.flow";

describe("internal enums", () => {
  it("should allow getting internal enum fields on an empty enum", () => {
    const parentMsg = new EnumMessage();
    assert.strictEqual(parentMsg.getInternalEnum(), 0);
    assert.deepEqual(parentMsg.getInternalEnumsList(), []);
  });

  it("should allow setting and getting internal enum fields", () => {
    const parentMsg: EnumMessage$AsClass = new EnumMessage();
    parentMsg.setInternalEnum(InternalEnum.FIRST);
    assert.strictEqual(parentMsg.getInternalEnum(), InternalEnum.FIRST);
  });

  it("should allow setting and getting repeated internal enum fields", () => {
    const parentMsg: EnumMessage$AsClass = new EnumMessage();
    parentMsg.setInternalEnumsList([InternalEnum.FIRST, InternalEnum.SECOND]);
    assert.deepEqual(parentMsg.getInternalEnumsList(), [
      InternalEnum.FIRST,
      InternalEnum.SECOND
    ]);
  });
});

describe("external enums", () => {
  it("should allow getting external enum fields on an empty enum", () => {
    const parentMsg: EnumMessage$AsClass = new EnumMessage();
    assert.strictEqual(parentMsg.getExternalEnum(), 0);
    assert.deepEqual(parentMsg.getExternalEnumsList(), []);
  });

  it("should allow setting and getting external enum fields", () => {
    const parentMsg: EnumMessage$AsClass = new EnumMessage();
    parentMsg.setExternalEnum(ExternalEnum.FIRST);
    assert.strictEqual(parentMsg.getExternalEnum(), ExternalEnum.FIRST);
  });

  it("should allow setting and getting repeated external enum fields", () => {
    const parentMsg: EnumMessage$AsClass = new EnumMessage();
    parentMsg.setExternalEnumsList([ExternalEnum.FIRST, ExternalEnum.SECOND]);
    assert.deepEqual(parentMsg.getExternalEnumsList(), [
      ExternalEnum.FIRST,
      ExternalEnum.SECOND
    ]);
  });
});

describe("enum casing", () => {
  it("should export enums as ALL_CAPS in proto definitions (#21)", () => {
    const parentMsg: EnumMessage$AsClass = new EnumMessage();
    parentMsg.setInternalEnum(InternalEnum.THIRD); // should compile.
    assert.ok(
      true,
      ".flow.js file should export the enum definition in ALL_CAPS"
    );
  });
});

describe("enum reverse lookup", () => {
  it("should export enums with reverse lookup", () => {
    assert.strictEqual(ExternalEnum$ReverseLookUp[ExternalEnum.FIRST], "FIRST");
  });

  it("should correctly forward lookup", () => {
    assert.strictEqual(ExternalEnum[ExternalEnum$ReverseLookUp[0]], 0);
  });
});
