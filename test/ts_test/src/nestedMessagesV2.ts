import {assert} from "chai";
import {ParentMessageV2} from "../generated/examplecom/parent_message_v2_pb";
import InternalChildMessage = ParentMessageV2.InternalChildMessage;

describe("proto2 - internal nested messages", () => {
  it("should allow getting internal message fields on an empty message", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.getInternalChildMessage().getMyString(), "");
    assert.deepEqual(parentMsg.getInternalChildrenList() as Array<InternalChildMessage>, []);
  });

  it("should allow setting and getting internal message fields", () => {
    const parentMsg = new ParentMessageV2();
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.getInternalChildMessage().getMyString() as string, "hello world");
    assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
    parentMsg.setInternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getInternalChildMessage().getMyString() as string, "");
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);

    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
    parentMsg.clearInternalChildMessage();
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
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
