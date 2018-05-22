import {assert} from "chai";
import {ParentMessageV2} from "../examples/generated/examplecom/parent_message_v2_pb";
import InternalChildMessage = ParentMessageV2.InternalChildMessage;
import {ExternalChildMessage} from "../examples/generated/othercom/external_child_message_pb";

describe("proto2 - internal nested messages", () => {
  it("should allow getting internal message fields on an empty message", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.getInternalChildMessage().getMyString() as string, "");
    assert.deepEqual(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>, []);
  });

  it("should allow setting and getting required internal message fields", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.hasInternalChildMessage() as boolean, false);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getInternalChildMessage().getMyString() as string, "hello world");
    assert.strictEqual(parentMsg.hasInternalChildMessage() as boolean, true);
    parentMsg.setInternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getInternalChildMessage().getMyString() as string, "");
    assert.strictEqual(parentMsg.hasInternalChildMessage() as boolean, false);

    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasInternalChildMessage() as boolean, true);
    parentMsg.clearInternalChildMessage();
    assert.strictEqual(parentMsg.hasInternalChildMessage() as boolean, false);
  });

  it("should allow setting and getting optional internal message fields", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.hasOptInternalChildMessage() as boolean, false);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setOptInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getOptInternalChildMessage()!.getMyString() as string, "hello world");
    assert.strictEqual(parentMsg.hasOptInternalChildMessage() as boolean, true);
    parentMsg.setOptInternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getOptInternalChildMessage() as undefined, undefined);
    assert.strictEqual(parentMsg.hasOptInternalChildMessage() as boolean, false);

    parentMsg.setOptInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasOptInternalChildMessage() as boolean, true);
    parentMsg.clearOptInternalChildMessage();
    assert.strictEqual(parentMsg.hasOptInternalChildMessage() as boolean, false);
  });

  it("should allow setting and getting repeated internal message fields", () => {
    const parentMsg = new ParentMessageV2();
    const childMsgOne = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setInternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>, [childMsgOne, childMsgTwo]);
  });

  it("should allow adding and getting repeated internal message fields", () => {
    const parentMsg = new ParentMessageV2();
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

describe("proto2 - external nested messages", () => {
  it("should allow getting external message fields on an empty message", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.getExternalChildMessage().getMyString() as string, "");
    assert.deepEqual(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>, []);
  });

  it("should allow setting and getting external message fields", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.hasExternalChildMessage() as boolean, false);
    const childMsg = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setExternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getExternalChildMessage().getMyString() as string, "hello world");
    assert.strictEqual(parentMsg.hasExternalChildMessage() as boolean, true);
    parentMsg.setExternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getExternalChildMessage().getMyString() as string, "");
    assert.strictEqual(parentMsg.hasExternalChildMessage() as boolean, false);

    parentMsg.setExternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasExternalChildMessage() as boolean, true);
    parentMsg.clearExternalChildMessage();
    assert.strictEqual(parentMsg.hasExternalChildMessage() as boolean, false);
  });

  it("should allow setting and getting optional external message fields", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.hasOptExternalChildMessage() as boolean, false);
    const childMsg = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setOptExternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getOptExternalChildMessage()!.getMyString() as string, "hello world");
    assert.strictEqual(parentMsg.hasOptExternalChildMessage() as boolean, true);
    parentMsg.setOptExternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getOptExternalChildMessage() as undefined, undefined);
    assert.strictEqual(parentMsg.hasOptExternalChildMessage() as boolean, false);

    parentMsg.setOptExternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasOptExternalChildMessage() as boolean, true);
    parentMsg.clearOptExternalChildMessage();
    assert.strictEqual(parentMsg.hasOptExternalChildMessage() as boolean, false);
  });

  it("should allow setting and getting repeated external message fields", () => {
    const parentMsg = new ParentMessageV2();
    const childMsgOne = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setExternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>, [childMsgOne, childMsgTwo]);
  });

  it("should allow adding and getting repeated external message fields", () => {
    const parentMsg = new ParentMessageV2();
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

describe("proto2 - toObject", () => {
  it("should have empty message fields if undefined", () => {
    const parentMsg = new ParentMessageV2();
    const asObjectUnset = parentMsg.toObject();
    assert.deepEqual(asObjectUnset.internalChildMessage as InternalChildMessage.AsObject, {myString: undefined});
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const asObjectSet = parentMsg.toObject();
    assert.strictEqual(asObjectSet.internalChildMessage!.myString as string, "hello world");
  });

  it("should indicate potentially undefined primitive fields", () => {
    const msg = new InternalChildMessage();
    const asObjectUnset = msg.toObject();
    assert.strictEqual(asObjectUnset.myString as string, undefined); // TODO
    msg.setMyString("hello world");
    const asObjectSet = msg.toObject();
    assert.strictEqual(asObjectSet.myString! as string, "hello world");
  });
});
