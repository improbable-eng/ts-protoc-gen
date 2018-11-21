// @flow
import { assert } from "chai";
import { ParentMessageV3 } from "../../../examples/flow/generated/proto/examplecom/parent_message_v3_pb";
import {
  ParentMessageV3$AsClass,
  ParentMessageV3$AsClass_InternalChildMessage$AsClass,
  type ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject
} from "../../../examples/flow/generated/proto/examplecom/parent_message_v3_pb.flow";

import { ExternalChildMessage } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb";
import { ExternalChildMessage$AsClass } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb.flow";

const InternalChildMessage = ParentMessageV3.InternalChildMessage;

describe("proto3 - internal nested messages", () => {
  it("should allow getting internal message fields on an empty message", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    assert.strictEqual(
      (parentMsg.getInternalChildMessage(): ?ParentMessageV3$AsClass_InternalChildMessage$AsClass),
      undefined
    );
    assert.deepEqual(
      (parentMsg.getInternalChildrenList(): Array<ParentMessageV3$AsClass_InternalChildMessage$AsClass>),
      []
    );
  });

  it("should allow setting and getting internal message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
    const childMsg: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const icm = parentMsg.getInternalChildMessage();
    if (icm) {
      assert.strictEqual((icm.getMyString(): string), "hello world");
    } else {
      assert.fail(
        "getInternalChildMessage is undefined",
        "getInternalChildMessage should be defined"
      );
    }

    assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
    parentMsg.setInternalChildMessage(undefined);
    assert.strictEqual(
      (parentMsg.getInternalChildMessage(): ?ParentMessageV3$AsClass_InternalChildMessage$AsClass),
      undefined
    );
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);

    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual(parentMsg.hasInternalChildMessage(), true);
    parentMsg.clearInternalChildMessage();
    assert.strictEqual(parentMsg.hasInternalChildMessage(), false);
  });

  it("should allow setting and getting repeated internal message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    const childMsgOne: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setInternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(
      (parentMsg.getInternalChildrenList(): Array<ParentMessageV3$AsClass_InternalChildMessage$AsClass>),
      [childMsgOne, childMsgTwo]
    );
  });

  it("should allow adding and getting repeated internal message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    const childMsgOne: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addInternalChildren(childMsgOne);
    assert.strictEqual(childMsgOne, addedOne);
    const addedTwo = parentMsg.addInternalChildren(childMsgTwo);
    assert.strictEqual(childMsgTwo, addedTwo);

    assert.deepEqual(
      (parentMsg.getInternalChildrenList(): Array<ParentMessageV3$AsClass_InternalChildMessage$AsClass>),
      [childMsgOne, childMsgTwo]
    );
  });
});

describe("proto3 - external nested messages", () => {
  it("should allow getting external message fields on an empty message", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    assert.strictEqual(
      (parentMsg.getExternalChildMessage(): ?ExternalChildMessage$AsClass),
      undefined
    );
    assert.deepEqual(
      (parentMsg.getExternalChildrenList(): Array<ExternalChildMessage$AsClass>),
      []
    );
  });

  it("should allow setting and getting external message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    const childMsg: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setExternalChildMessage(childMsg);
    const ecm = parentMsg.getExternalChildMessage();
    if (ecm) {
      assert.strictEqual((ecm.getMyString(): string), "hello world");
    } else {
      assert.fail(
        "getExternalChildMessage is undefined",
        "getExternalChildMessage should be defined"
      );
    }

    parentMsg.setExternalChildMessage(undefined);
    assert.strictEqual(
      (parentMsg.getExternalChildMessage(): ?ExternalChildMessage$AsClass),
      undefined
    );
  });

  it("should allow setting and getting repeated external message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    const childMsgOne: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setExternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(
      (parentMsg.getExternalChildrenList(): Array<ExternalChildMessage$AsClass>),
      [childMsgOne, childMsgTwo]
    );
  });

  it("should allow adding and getting repeated external message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    const childMsgOne: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addExternalChildren(childMsgOne);
    assert.strictEqual(childMsgOne, addedOne);
    const addedTwo = parentMsg.addExternalChildren(childMsgTwo);
    assert.strictEqual(childMsgTwo, addedTwo);

    assert.deepEqual(
      (parentMsg.getExternalChildrenList(): Array<ExternalChildMessage$AsClass>),
      [childMsgOne, childMsgTwo]
    );
  });
});

describe("proto3 - toObject", () => {
  it("should indicate potentially undefined message fields", () => {
    const parentMsg: ParentMessageV3$AsClass = new ParentMessageV3();
    const asObjectUnset = parentMsg.toObject();
    assert.strictEqual(
      (asObjectUnset.internalChildMessage: ?ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject),
      undefined
    );
    const childMsg: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const asObjectSet = parentMsg.toObject();

    const icm = asObjectSet.internalChildMessage;
    if (icm) {
      assert.strictEqual((icm.myString: string), "hello world");
    } else {
      assert.fail(
        "internalChildMessage is undefined",
        "internalChildMessage should be defined"
      );
    }
  });
  it("should indicate potentially undefined primitive fields", () => {
    const msg: ParentMessageV3$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    const asObjectUnset = msg.toObject();
    assert.strictEqual((asObjectUnset.myString: string), "");
    msg.setMyString("hello world");
    const asObjectSet = msg.toObject();
    assert.strictEqual((asObjectSet.myString: string), "hello world");
  });
});
