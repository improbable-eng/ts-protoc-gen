import {assert} from "chai";
import {ParentMessageV3} from "../examples/generated/examplecom/parent_message_v3_pb";
import {ExternalChildMessage} from "../examples/generated/othercom/external_child_message_pb";
import InternalChildMessage = ParentMessageV3.InternalChildMessage;

describe("proto3 - internal nested messages", () => {
  it("should allow getting internal message fields on an empty message", () => {
    const parentMsg = new ParentMessageV3();
    assert.strictEqual(parentMsg.getInternalChildMessage() as undefined, undefined);
    assert.deepEqual(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>, []);
  });

  it("should allow setting and getting internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getInternalChildMessage()!.getMyString() as string, "hello world");
    assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
    parentMsg.setInternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getInternalChildMessage() as undefined, undefined);
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);

    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
    parentMsg.clearInternalChildMessage();
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
  });

  it("should allow setting and getting repeated internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setInternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>, [childMsgOne, childMsgTwo]);
  });

  it("should allow adding and getting repeated internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addInternalChildren(childMsgOne);
    assert.strictEqual(childMsgOne, addedOne);
    const addedTwo = parentMsg.addInternalChildren(childMsgTwo);
    assert.strictEqual(childMsgTwo, addedTwo);

    assert.deepEqual(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>, [childMsgOne, childMsgTwo]);
  });
});

describe("proto3 - external nested messages", () => {
  it("should allow getting external message fields on an empty message", () => {
    const parentMsg = new ParentMessageV3();
    assert.strictEqual(parentMsg.getExternalChildMessage() as undefined, undefined);
    assert.deepEqual(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>, []);
  });

  it("should allow setting and getting external message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsg = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setExternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getExternalChildMessage()!.getMyString() as string, "hello world");
    parentMsg.setExternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getExternalChildMessage() as undefined, undefined);
  });

  it("should allow setting and getting repeated external message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setExternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>, [childMsgOne, childMsgTwo]);
  });

  it("should allow adding and getting repeated external message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addExternalChildren(childMsgOne);
    assert.strictEqual(childMsgOne, addedOne);
    const addedTwo = parentMsg.addExternalChildren(childMsgTwo);
    assert.strictEqual(childMsgTwo, addedTwo);

    assert.deepEqual(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>, [childMsgOne, childMsgTwo]);
  });
});

describe("proto3 - toObject", () => {
  it("should indicate potentially undefined message fields", () => {
    const parentMsg = new ParentMessageV3();
    const asObjectUnset = parentMsg.toObject();
    assert.strictEqual(asObjectUnset.internalChildMessage as undefined, undefined);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const asObjectSet = parentMsg.toObject();
    assert.strictEqual(asObjectSet.internalChildMessage!.myString as string, "hello world");
  });
  it("should indicate potentially undefined primitive fields", () => {
    const msg = new InternalChildMessage();
    const asObjectUnset = msg.toObject();
    assert.strictEqual(asObjectUnset.myString as string, "");
    msg.setMyString("hello world");
    const asObjectSet = msg.toObject();
    assert.strictEqual(asObjectSet.myString! as string, "hello world");
  });
});
