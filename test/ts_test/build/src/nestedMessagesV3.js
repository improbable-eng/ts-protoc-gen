"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var parent_message_v3_pb_1 = require("../generated/examplecom/parent_message_v3_pb");
var external_child_message_pb_1 = require("../generated/othercom/external_child_message_pb");
var InternalChildMessage = parent_message_v3_pb_1.ParentMessageV3.InternalChildMessage;
describe("proto3 - internal nested messages", function () {
    it("should allow getting internal message fields on an empty message", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage(), undefined);
        chai_1.assert.deepEqual(parentMsg.getInternalChildrenList(), []);
    });
    it("should allow setting and getting internal message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        chai_1.assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
        var childMsg = new InternalChildMessage();
        childMsg.setMyString("hello world");
        parentMsg.setInternalChildMessage(childMsg);
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage().getMyString(), "hello world");
        chai_1.assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
        parentMsg.setInternalChildMessage(undefined);
        chai_1.assert.strictEqual(parentMsg.getInternalChildMessage(), undefined);
        chai_1.assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
        parentMsg.setInternalChildMessage(childMsg);
        chai_1.assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
        parentMsg.clearInternalChildMessage();
        chai_1.assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
    });
    it("should allow setting and getting repeated internal message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        var childMsgOne = new InternalChildMessage();
        childMsgOne.setMyString("one");
        var childMsgTwo = new InternalChildMessage();
        childMsgTwo.setMyString("two");
        parentMsg.setInternalChildrenList([childMsgOne, childMsgTwo]);
        chai_1.assert.deepEqual(parentMsg.getInternalChildrenList(), [childMsgOne, childMsgTwo]);
    });
    it("should allow adding and getting repeated internal message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        var childMsgOne = new InternalChildMessage();
        childMsgOne.setMyString("one");
        var childMsgTwo = new InternalChildMessage();
        childMsgTwo.setMyString("two");
        var addedOne = parentMsg.addInternalChildren(childMsgOne);
        chai_1.assert.strictEqual(childMsgOne, addedOne);
        var addedTwo = parentMsg.addInternalChildren(childMsgTwo);
        chai_1.assert.strictEqual(childMsgTwo, addedTwo);
        chai_1.assert.deepEqual(parentMsg.getInternalChildrenList(), [childMsgOne, childMsgTwo]);
    });
});
describe("proto3 - external nested messages", function () {
    it("should allow getting external message fields on an empty message", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        chai_1.assert.strictEqual(parentMsg.getExternalChildMessage(), undefined);
        chai_1.assert.deepEqual(parentMsg.getExternalChildrenList(), []);
    });
    it("should allow setting and getting external message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        var childMsg = new external_child_message_pb_1.ExternalChildMessage();
        childMsg.setMyString("hello world");
        parentMsg.setExternalChildMessage(childMsg);
        chai_1.assert.strictEqual(parentMsg.getExternalChildMessage().getMyString(), "hello world");
        parentMsg.setExternalChildMessage(undefined);
        chai_1.assert.strictEqual(parentMsg.getExternalChildMessage(), undefined);
    });
    it("should allow setting and getting repeated external message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        var childMsgOne = new external_child_message_pb_1.ExternalChildMessage();
        childMsgOne.setMyString("one");
        var childMsgTwo = new external_child_message_pb_1.ExternalChildMessage();
        childMsgTwo.setMyString("two");
        parentMsg.setExternalChildrenList([childMsgOne, childMsgTwo]);
        chai_1.assert.deepEqual(parentMsg.getExternalChildrenList(), [childMsgOne, childMsgTwo]);
    });
    it("should allow adding and getting repeated external message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        var childMsgOne = new external_child_message_pb_1.ExternalChildMessage();
        childMsgOne.setMyString("one");
        var childMsgTwo = new external_child_message_pb_1.ExternalChildMessage();
        childMsgTwo.setMyString("two");
        var addedOne = parentMsg.addExternalChildren(childMsgOne);
        chai_1.assert.strictEqual(childMsgOne, addedOne);
        var addedTwo = parentMsg.addExternalChildren(childMsgTwo);
        chai_1.assert.strictEqual(childMsgTwo, addedTwo);
        chai_1.assert.deepEqual(parentMsg.getExternalChildrenList(), [childMsgOne, childMsgTwo]);
    });
});
describe("proto3 - toObject", function () {
    it("should indicate potentially undefined message fields", function () {
        var parentMsg = new parent_message_v3_pb_1.ParentMessageV3();
        var asObjectUnset = parentMsg.toObject();
        chai_1.assert.strictEqual(asObjectUnset.internalChildMessage, undefined);
        var childMsg = new InternalChildMessage();
        childMsg.setMyString("hello world");
        parentMsg.setInternalChildMessage(childMsg);
        var asObjectSet = parentMsg.toObject();
        chai_1.assert.strictEqual(asObjectSet.internalChildMessage.myString, "hello world");
    });
    it("should indicate potentially undefined primitive fields", function () {
        var msg = new InternalChildMessage();
        var asObjectUnset = msg.toObject();
        chai_1.assert.strictEqual(asObjectUnset.myString, "");
        msg.setMyString("hello world");
        var asObjectSet = msg.toObject();
        chai_1.assert.strictEqual(asObjectSet.myString, "hello world");
    });
});
//# sourceMappingURL=nestedMessagesV3.js.map