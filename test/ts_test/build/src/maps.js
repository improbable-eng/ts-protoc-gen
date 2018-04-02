"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var map_message_pb_1 = require("../generated/examplecom/map_message_pb");
var external_enum_pb_1 = require("../generated/othercom/external_enum_pb");
var external_child_message_pb_1 = require("../generated/othercom/external_child_message_pb");
var InternalEnum = map_message_pb_1.MapMessage.InternalEnum;
var InternalChildMessage = map_message_pb_1.MapMessage.InternalChildMessage;
var orphan_pb_1 = require("../generated/orphan_pb");
describe("maps", function () {
    describe("message maps", function () {
        describe("internal message maps", function () {
            it("should allow setting and getting internal map fields", function () {
                var parentMsg = new map_message_pb_1.MapMessage();
                var childMsgOne = new InternalChildMessage();
                childMsgOne.setMyString("one");
                var childMsgTwo = new InternalChildMessage();
                childMsgTwo.setMyString("two");
                var myMap = parentMsg.getInternalChildrenMap();
                myMap.set("first", childMsgOne).set("second", childMsgTwo);
                chai_1.assert.strictEqual(parentMsg.getInternalChildrenMap().getLength(), 2);
                var firstKey = parentMsg.getInternalChildrenMap().keys().next().value;
                chai_1.assert.strictEqual(firstKey, "first");
                var firstEntry = parentMsg.getInternalChildrenMap().entries().next().value;
                chai_1.assert.strictEqual(firstEntry[0], "first");
                chai_1.assert.strictEqual(firstEntry[1].getMyString(), "one");
                chai_1.assert.deepEqual(parentMsg.getInternalChildrenMap().toObject(false, InternalChildMessage.toObject), [
                    ["first", {
                            "myString": "one",
                        }],
                    ["second", {
                            "myString": "two",
                        }],
                ]);
                chai_1.assert.strictEqual(myMap.del("first"), true);
                chai_1.assert.strictEqual(myMap.getLength(), 1);
                myMap.clear();
                chai_1.assert.strictEqual(myMap.getLength(), 0);
            });
        });
        describe("external message maps", function () {
            it("should allow setting and getting external map fields", function () {
                var parentMsg = new map_message_pb_1.MapMessage();
                var childMsgOne = new external_child_message_pb_1.ExternalChildMessage();
                childMsgOne.setMyString("one");
                var childMsgTwo = new external_child_message_pb_1.ExternalChildMessage();
                childMsgTwo.setMyString("two");
                var myMap = parentMsg.getExternalChildrenMap();
                myMap.set("first", childMsgOne).set("second", childMsgTwo);
                chai_1.assert.strictEqual(parentMsg.getExternalChildrenMap().getLength(), 2);
                var firstKey = parentMsg.getExternalChildrenMap().keys().next().value;
                chai_1.assert.strictEqual(firstKey, "first");
                var firstEntry = parentMsg.getExternalChildrenMap().entries().next().value;
                chai_1.assert.strictEqual(firstEntry[0], "first");
                chai_1.assert.strictEqual(firstEntry[1].getMyString(), "one");
                chai_1.assert.deepEqual(parentMsg.getExternalChildrenMap().toObject(false, external_child_message_pb_1.ExternalChildMessage.toObject), [
                    ["first", {
                            "myString": "one",
                        }],
                    ["second", {
                            "myString": "two",
                        }],
                ]);
                chai_1.assert.strictEqual(myMap.del("first"), true);
                chai_1.assert.strictEqual(myMap.getLength(), 1);
            });
        });
    });
    describe("enum maps", function () {
        describe("internal enum maps", function () {
            it("should allow setting and getting internal map fields", function () {
                var parentMsg = new map_message_pb_1.MapMessage();
                var myMap = parentMsg.getInternalEnumsMap();
                myMap.set(123, InternalEnum.FIRST).set(456, InternalEnum.SECOND);
                chai_1.assert.strictEqual(parentMsg.getInternalEnumsMap().getLength(), 2);
                var firstKey = parentMsg.getInternalEnumsMap().keys().next().value;
                chai_1.assert.strictEqual(firstKey, 123);
                var firstEntry = parentMsg.getInternalEnumsMap().entries().next().value;
                chai_1.assert.strictEqual(firstEntry[0], 123);
                chai_1.assert.strictEqual(firstEntry[1], InternalEnum.FIRST);
                chai_1.assert.deepEqual(parentMsg.getInternalEnumsMap().toObject(false), [
                    [123, InternalEnum.FIRST],
                    [456, InternalEnum.SECOND],
                ]);
            });
        });
        describe("external enum maps", function () {
            it("should allow setting and getting internal map fields", function () {
                var parentMsg = new map_message_pb_1.MapMessage();
                var myMap = parentMsg.getExternalEnumsMap();
                myMap.set(123, external_enum_pb_1.ExternalEnum.FIRST).set(456, external_enum_pb_1.ExternalEnum.SECOND);
                chai_1.assert.strictEqual(parentMsg.getExternalEnumsMap().getLength(), 2);
                var firstKey = parentMsg.getExternalEnumsMap().keys().next().value;
                chai_1.assert.strictEqual(firstKey, 123);
                var firstEntry = parentMsg.getExternalEnumsMap().entries().next().value;
                chai_1.assert.strictEqual(firstEntry[0], 123);
                chai_1.assert.strictEqual(firstEntry[1], external_enum_pb_1.ExternalEnum.FIRST);
                chai_1.assert.deepEqual(parentMsg.getExternalEnumsMap().toObject(false), [
                    [123, external_enum_pb_1.ExternalEnum.FIRST],
                    [456, external_enum_pb_1.ExternalEnum.SECOND],
                ]);
                chai_1.assert.strictEqual(myMap.del(123), true);
                chai_1.assert.strictEqual(myMap.getLength(), 1);
            });
        });
    });
    describe("primitive maps", function () {
        it("should allow setting and getting primitive map fields", function () {
            var parentMsg = new map_message_pb_1.MapMessage();
            var myMap = parentMsg.getPrimitiveIntsMap();
            myMap.set("first", 123).set("second", 456);
            chai_1.assert.strictEqual(parentMsg.getPrimitiveIntsMap().getLength(), 2);
            var firstKey = parentMsg.getPrimitiveIntsMap().keys().next().value;
            chai_1.assert.strictEqual(firstKey, "first");
            var firstEntry = parentMsg.getPrimitiveIntsMap().entries().next().value;
            chai_1.assert.strictEqual(firstEntry[0], "first");
            chai_1.assert.strictEqual(firstEntry[1], 123);
            chai_1.assert.deepEqual(parentMsg.getPrimitiveIntsMap().toObject(), [
                ["first", 123],
                ["second", 456],
            ]);
            chai_1.assert.strictEqual(myMap.del("first"), true);
            chai_1.assert.strictEqual(myMap.getLength(), 1);
        });
    });
    describe("orphan message maps", function () {
        it("should allow setting and getting map fields of messages without a package", function () {
            var parentMsg = new orphan_pb_1.OrphanMapMessage();
            var myMap = parentMsg.getPrimitiveIntsMap();
            myMap.set("first", 123).set("second", 456);
            chai_1.assert.strictEqual(parentMsg.getPrimitiveIntsMap().getLength(), 2);
            var firstKey = parentMsg.getPrimitiveIntsMap().keys().next().value;
            chai_1.assert.strictEqual(firstKey, "first");
            var firstEntry = parentMsg.getPrimitiveIntsMap().entries().next().value;
            chai_1.assert.strictEqual(firstEntry[0], "first");
            chai_1.assert.strictEqual(firstEntry[1], 123);
            chai_1.assert.deepEqual(parentMsg.getPrimitiveIntsMap().toObject(), [
                ["first", 123],
                ["second", 456],
            ]);
            chai_1.assert.strictEqual(myMap.del("first"), true);
            chai_1.assert.strictEqual(myMap.getLength(), 1);
        });
    });
    describe("toObject", function () {
        it("should have types", function () {
            var parentMsg = new map_message_pb_1.MapMessage();
            var childMsgOne = new InternalChildMessage();
            childMsgOne.setMyString("one");
            var childMsgTwo = new InternalChildMessage();
            childMsgTwo.setMyString("two");
            var internalChildrenMap = parentMsg.getInternalChildrenMap();
            internalChildrenMap.set("first", childMsgOne).set("second", childMsgTwo);
            var primitiveIntsMap = parentMsg.getPrimitiveIntsMap();
            primitiveIntsMap.set("first", 123).set("second", 456);
            var internalEnumsMap = parentMsg.getInternalEnumsMap();
            internalEnumsMap.set(123, InternalEnum.FIRST).set(456, InternalEnum.SECOND);
            var actual = parentMsg.toObject();
            var expected = {
                externalEnumsMap: [],
                externalChildrenMap: [],
                internalEnumsMap: [
                    [123, InternalEnum.FIRST],
                    [456, InternalEnum.SECOND],
                ],
                internalChildrenMap: [
                    ["first", {
                            "myString": "one"
                        }],
                    ["second", {
                            "myString": "two"
                        }]
                ],
                primitiveIntsMap: [
                    ["first", 123],
                    ["second", 456],
                ],
            };
            chai_1.assert.deepEqual(actual, expected);
        });
    });
});
//# sourceMappingURL=maps.js.map