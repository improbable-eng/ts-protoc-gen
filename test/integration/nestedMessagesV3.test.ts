import {ParentMessageV3} from "../../examples/generated/proto/examplecom/parent_message_v3_pb";
import {ExternalChildMessage} from "../../examples/generated/proto/othercom/external_child_message_pb";
import InternalChildMessage = ParentMessageV3.InternalChildMessage;

describe("proto3 - internal nested messages", () => {
  it("should allow getting internal message fields on an empty message", () => {
    const parentMsg = new ParentMessageV3();
    expect(parentMsg.getInternalChildMessage() as undefined).toStrictEqual(undefined);
    expect(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>).toStrictEqual([]);
  });

  it("should allow setting and getting normal internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    expect(parentMsg.hasInternalChildMessage()).toStrictEqual(false);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    expect(parentMsg.getInternalChildMessage()!.getMyString() as string).toStrictEqual("hello world");
    expect(parentMsg.hasInternalChildMessage()).toStrictEqual(true);
    parentMsg.setInternalChildMessage(undefined);
    expect(parentMsg.getInternalChildMessage() as undefined).toStrictEqual(undefined);
    expect(parentMsg.hasInternalChildMessage()).toStrictEqual(false);

    parentMsg.setInternalChildMessage(childMsg);
    expect(parentMsg.hasInternalChildMessage()).toStrictEqual(true);
    parentMsg.clearInternalChildMessage();
    expect(parentMsg.hasInternalChildMessage()).toStrictEqual(false);
  });

  it("should allow setting and getting optional internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    expect(parentMsg.hasOptInternalChildMessage()).toStrictEqual(false);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setOptInternalChildMessage(childMsg);
    expect(parentMsg.getOptInternalChildMessage()!.getMyString() as string).toStrictEqual("hello world");
    expect(parentMsg.hasOptInternalChildMessage()).toStrictEqual(true);
    parentMsg.setOptInternalChildMessage(undefined);
    expect(parentMsg.getOptInternalChildMessage() as undefined).toStrictEqual(undefined);
    expect(parentMsg.hasOptInternalChildMessage()).toStrictEqual(false);

    parentMsg.setOptInternalChildMessage(childMsg);
    expect(parentMsg.hasOptInternalChildMessage()).toStrictEqual(true);
    parentMsg.clearOptInternalChildMessage();
    expect(parentMsg.hasOptInternalChildMessage()).toStrictEqual(false);
  });

  it("should allow setting and getting repeated internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setInternalChildrenList([childMsgOne, childMsgTwo]);

    expect(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>).toStrictEqual([childMsgOne, childMsgTwo]);
  });

  it("should allow adding and getting repeated internal message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addInternalChildren(childMsgOne);
    expect(childMsgOne).toStrictEqual(addedOne);
    const addedTwo = parentMsg.addInternalChildren(childMsgTwo);
    expect(childMsgTwo).toStrictEqual(addedTwo);

    expect(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>).toStrictEqual([childMsgOne, childMsgTwo]);
  });
});

describe("proto3 - external nested messages", () => {
  it("should allow getting external message fields on an empty message", () => {
    const parentMsg = new ParentMessageV3();
    expect(parentMsg.getExternalChildMessage() as undefined).toStrictEqual(undefined);
    expect(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>).toStrictEqual([]);
  });

  it("should allow setting and getting external message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsg = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setExternalChildMessage(childMsg);
    expect(parentMsg.getExternalChildMessage()!.getMyString() as string).toStrictEqual("hello world");
    parentMsg.setExternalChildMessage(undefined);
    expect(parentMsg.getExternalChildMessage() as undefined).toStrictEqual(undefined);
  });

  it("should allow setting and getting repeated external message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setExternalChildrenList([childMsgOne, childMsgTwo]);

    expect(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>).toStrictEqual([childMsgOne, childMsgTwo]);
  });

  it("should allow adding and getting repeated external message fields", () => {
    const parentMsg = new ParentMessageV3();
    const childMsgOne = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addExternalChildren(childMsgOne);
    expect(childMsgOne).toStrictEqual(addedOne);
    const addedTwo = parentMsg.addExternalChildren(childMsgTwo);
    expect(childMsgTwo).toStrictEqual(addedTwo);

    expect(parentMsg.getExternalChildrenList() as Array<ExternalChildMessage>).toStrictEqual([childMsgOne, childMsgTwo]);
  });
});

describe("proto3 - toObject", () => {
  it("should indicate potentially undefined message fields", () => {
    const parentMsg = new ParentMessageV3();
    const asObjectUnset = parentMsg.toObject();
    expect(asObjectUnset.internalChildMessage as undefined).toStrictEqual(undefined);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const asObjectSet = parentMsg.toObject();
    expect(asObjectSet.internalChildMessage!.myString as string).toStrictEqual("hello world");
  });
  it("should indicate potentially undefined primitive fields", () => {
    const msg = new InternalChildMessage();
    const asObjectUnset = msg.toObject();
    expect(asObjectUnset.myString as string).toStrictEqual("");
    msg.setMyString("hello world");
    const asObjectSet = msg.toObject();
    expect(asObjectSet.myString! as string).toStrictEqual("hello world");
  });
});
