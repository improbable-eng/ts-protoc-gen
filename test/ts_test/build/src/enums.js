"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var enum_message_pb_1 = require("../generated/examplecom/enum_message_pb");
var external_enum_pb_1 = require("../generated/othercom/external_enum_pb");
var InternalEnum = enum_message_pb_1.EnumMessage.InternalEnum;
describe("internal enums", function () {
    it("should allow getting internal enum fields on an empty enum", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        chai_1.assert.strictEqual(parentMsg.getInternalEnum(), 0);
        chai_1.assert.deepEqual(parentMsg.getInternalEnumsList(), []);
    });
    it("should allow setting and getting internal enum fields", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        parentMsg.setInternalEnum(InternalEnum.FIRST);
        chai_1.assert.strictEqual(parentMsg.getInternalEnum(), InternalEnum.FIRST);
    });
    it("should allow setting and getting repeated internal enum fields", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        parentMsg.setInternalEnumsList([InternalEnum.FIRST, InternalEnum.SECOND]);
        chai_1.assert.deepEqual(parentMsg.getInternalEnumsList(), [InternalEnum.FIRST, InternalEnum.SECOND]);
    });
});
describe("external enums", function () {
    it("should allow getting external enum fields on an empty enum", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        chai_1.assert.strictEqual(parentMsg.getExternalEnum(), 0);
        chai_1.assert.deepEqual(parentMsg.getExternalEnumsList(), []);
    });
    it("should allow setting and getting external enum fields", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        parentMsg.setExternalEnum(external_enum_pb_1.ExternalEnum.FIRST);
        chai_1.assert.strictEqual(parentMsg.getExternalEnum(), external_enum_pb_1.ExternalEnum.FIRST);
    });
    it("should allow setting and getting repeated external enum fields", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        parentMsg.setExternalEnumsList([external_enum_pb_1.ExternalEnum.FIRST, external_enum_pb_1.ExternalEnum.SECOND]);
        chai_1.assert.deepEqual(parentMsg.getExternalEnumsList(), [external_enum_pb_1.ExternalEnum.FIRST, external_enum_pb_1.ExternalEnum.SECOND]);
    });
});
describe("enum casing", function () {
    it("should export enums as ALL_CAPS in proto definitions (#21)", function () {
        var parentMsg = new enum_message_pb_1.EnumMessage();
        parentMsg.setInternalEnum(InternalEnum.THIRD); // should compile.
        chai_1.assert.ok(true, ".d.ts file should export the enum definition in ALL_CAPS");
    });
});
//# sourceMappingURL=enums.js.map