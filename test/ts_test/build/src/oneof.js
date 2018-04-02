"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var oneof_message_pb_1 = require("../generated/examplecom/oneof_message_pb");
var external_child_message_pb_1 = require("../generated/othercom/external_child_message_pb");
var InternalChildMessage = oneof_message_pb_1.OneOfMessage.InternalChildMessage;
describe("oneofs", function () {
    it("should allow getting oneof fields on an empty message", function () {
        var parentMsg = new oneof_message_pb_1.OneOfMessage();
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage(), undefined);
        chai_1.assert.strictEqual(parentMsg.getExternalChildMessage(), undefined);
        chai_1.assert.strictEqual(parentMsg.getMyInt64(), 0);
        chai_1.assert.strictEqual(parentMsg.getMyString(), "");
        chai_1.assert.strictEqual(parentMsg.getGroupCase(), oneof_message_pb_1.OneOfMessage.GroupCase.GROUP_NOT_SET);
    });
    it("should allow setting and getting oneof fields", function () {
        var parentMsg = new oneof_message_pb_1.OneOfMessage();
        var internalChildMessage = new InternalChildMessage();
        internalChildMessage.setMyString("internal");
        parentMsg.setInternalChildMessage(internalChildMessage);
        chai_1.assert.strictEqual(parentMsg.getGroupCase(), oneof_message_pb_1.OneOfMessage.GroupCase.INTERNAL_CHILD_MESSAGE);
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage().getMyString(), "internal");
        var externalChildMessage = new external_child_message_pb_1.ExternalChildMessage();
        externalChildMessage.setMyString("external");
        parentMsg.setExternalChildMessage(externalChildMessage);
        chai_1.assert.strictEqual(parentMsg.getGroupCase(), oneof_message_pb_1.OneOfMessage.GroupCase.EXTERNAL_CHILD_MESSAGE);
        chai_1.assert.strictEqual(parentMsg.getExternalChildMessage().getMyString(), "external");
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage(), undefined);
        parentMsg.setExternalChildMessage(undefined);
        chai_1.assert.strictEqual(parentMsg.getGroupCase(), oneof_message_pb_1.OneOfMessage.GroupCase.GROUP_NOT_SET);
        chai_1.assert.strictEqual(parentMsg.getExternalChildMessage(), undefined);
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage(), undefined);
    });
    it("should only show one of the fields in toObject", function () {
        var parentMsg = new oneof_message_pb_1.OneOfMessage();
        var internalChildMessage = new InternalChildMessage();
        internalChildMessage.setMyString("internal");
        parentMsg.setInternalChildMessage(internalChildMessage);
        chai_1.assert.strictEqual(parentMsg.getGroupCase(), oneof_message_pb_1.OneOfMessage.GroupCase.INTERNAL_CHILD_MESSAGE);
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage().getMyString(), "internal");
        chai_1.assert.deepEqual(parentMsg.toObject(), {
            externalChildMessage: undefined,
            internalChildMessage: {
                myString: "internal",
            },
            myInt64: 0,
            myString: "",
        });
        parentMsg.setMyString("hello world");
        chai_1.assert.deepEqual(parentMsg.toObject(), {
            externalChildMessage: undefined,
            internalChildMessage: undefined,
            myInt64: 0,
            myString: "hello world",
        });
    });
});
//# sourceMappingURL=oneof.js.map