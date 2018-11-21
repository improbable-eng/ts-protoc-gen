// @flow
import { assert } from "chai";
import { ParentMessageV2 } from "../../../examples/flow/generated/proto/examplecom/parent_message_v2_pb";
import {
  ParentMessageV2$AsClass,
  ParentMessageV2$AsClass_InternalChildMessage$AsClass,
  type ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject
} from "../../../examples/flow/generated/proto/examplecom/parent_message_v2_pb.flow";

const InternalChildMessage = ParentMessageV2.InternalChildMessage;
import { ExternalChildMessage } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb";
import { ExternalChildMessage$AsClass } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb.flow";

describe("proto2 - internal nested messages", () => {
  it("should allow getting internal message fields on an empty message", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    const icm = parentMsg.getInternalChildMessage();
    if (icm) {
      assert.strictEqual((icm.getMyString(): ?string), "");
    } else {
      assert.fail(
        "getInternalChildMessage is undefined",
        "getInternalChildMessage should be defined"
      );
    }
    assert.deepEqual(
      (parentMsg.getInternalChildrenList(): Array<ParentMessageV2$AsClass_InternalChildMessage$AsClass>),
      []
    );
  });

  it("should allow setting and getting required internal message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    assert.strictEqual((parentMsg.hasInternalChildMessage(): boolean), false);
    const childMsg: ParentMessageV2$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const icm = parentMsg.getInternalChildMessage();
    if (icm) {
      assert.strictEqual((icm.getMyString(): ?string), "hello world");
    } else {
      assert.fail(
        "getInternalChildMessage is undefined",
        "getInternalChildMessage should be defined"
      );
    }
    assert.strictEqual((parentMsg.hasInternalChildMessage(): boolean), true);
    parentMsg.setInternalChildMessage(undefined);
    const icm2 = parentMsg.getInternalChildMessage();
    if (icm2) {
      assert.strictEqual((icm2.getMyString(): ?string), "");
    } else {
      assert.fail(
        "getInternalChildMessage is undefined",
        "getInternalChildMessage should be defined"
      );
    }
    assert.strictEqual((parentMsg.hasInternalChildMessage(): boolean), false);

    parentMsg.setInternalChildMessage(childMsg);
    assert.strictEqual((parentMsg.hasInternalChildMessage(): boolean), true);
    parentMsg.clearInternalChildMessage();
    assert.strictEqual((parentMsg.hasInternalChildMessage(): boolean), false);
  });

  it("should allow setting and getting optional internal message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    assert.strictEqual(
      (parentMsg.hasOptInternalChildMessage(): boolean),
      false
    );
    const childMsg: ParentMessageV2$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setOptInternalChildMessage(childMsg);

    const optIcm = parentMsg.getOptInternalChildMessage();
    if (optIcm) {
      assert.strictEqual((optIcm.getMyString(): ?string), "hello world");
    } else {
      assert.fail(
        "getInternalChildMessage is undefined",
        "getInternalChildMessage should be defined"
      );
    }

    assert.strictEqual((parentMsg.hasOptInternalChildMessage(): boolean), true);
    parentMsg.setOptInternalChildMessage(undefined);
    assert.strictEqual(
      (parentMsg.getOptInternalChildMessage(): ?ParentMessageV2$AsClass_InternalChildMessage$AsClass),
      undefined
    );
    assert.strictEqual(
      (parentMsg.hasOptInternalChildMessage(): boolean),
      false
    );

    parentMsg.setOptInternalChildMessage(childMsg);
    assert.strictEqual((parentMsg.hasOptInternalChildMessage(): boolean), true);
    parentMsg.clearOptInternalChildMessage();
    assert.strictEqual(
      (parentMsg.hasOptInternalChildMessage(): boolean),
      false
    );
  });

  it("should allow setting and getting repeated internal message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    const childMsgOne: ParentMessageV2$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo: ParentMessageV2$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    parentMsg.setInternalChildrenList([childMsgOne, childMsgTwo]);

    assert.deepEqual(
      (parentMsg.getInternalChildrenList(): Array<ParentMessageV2$AsClass_InternalChildMessage$AsClass>),
      [childMsgOne, childMsgTwo]
    );
  });

  it("should allow adding and getting repeated internal message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    const childMsgOne: ParentMessageV2$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgOne.setMyString("one");

    const childMsgTwo: ParentMessageV2$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    childMsgTwo.setMyString("two");

    const addedOne = parentMsg.addInternalChildren(childMsgOne);
    assert.strictEqual(childMsgOne, addedOne);
    const addedTwo = parentMsg.addInternalChildren(childMsgTwo);
    assert.strictEqual(childMsgTwo, addedTwo);

    assert.deepEqual(
      (parentMsg.getInternalChildrenList(): Array<ParentMessageV2$AsClass_InternalChildMessage$AsClass>),
      [childMsgOne, childMsgTwo]
    );
  });
});

describe("proto2 - external nested messages", () => {
  it("should allow getting external message fields on an empty message", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    assert.strictEqual(
      (parentMsg.getExternalChildMessage().getMyString(): string),
      ""
    );
    assert.deepEqual(
      (parentMsg.getExternalChildrenList(): Array<ExternalChildMessage$AsClass>),
      []
    );
  });

  it("should allow setting and getting external message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    assert.strictEqual((parentMsg.hasExternalChildMessage(): boolean), false);
    const childMsg: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setExternalChildMessage(childMsg);
    assert.strictEqual(
      (parentMsg.getExternalChildMessage().getMyString(): string),
      "hello world"
    );
    assert.strictEqual((parentMsg.hasExternalChildMessage(): boolean), true);
    parentMsg.setExternalChildMessage(undefined);
    assert.strictEqual(
      (parentMsg.getExternalChildMessage().getMyString(): string),
      ""
    );
    assert.strictEqual((parentMsg.hasExternalChildMessage(): boolean), false);

    parentMsg.setExternalChildMessage(childMsg);
    assert.strictEqual((parentMsg.hasExternalChildMessage(): boolean), true);
    parentMsg.clearExternalChildMessage();
    assert.strictEqual((parentMsg.hasExternalChildMessage(): boolean), false);
  });

  it("should allow setting and getting optional external message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    assert.strictEqual(
      (parentMsg.hasOptExternalChildMessage(): boolean),
      false
    );
    const childMsg: ExternalChildMessage$AsClass = new ExternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setOptExternalChildMessage(childMsg);

    const optEcm = parentMsg.getOptExternalChildMessage();
    if (optEcm) {
      assert.strictEqual((optEcm.getMyString(): ?string), "hello world");
    } else {
      assert.fail(
        "getExternalChildMessage is undefined",
        "getExternalChildMessage should be defined"
      );
    }

    assert.strictEqual((parentMsg.hasOptExternalChildMessage(): boolean), true);
    parentMsg.setOptExternalChildMessage(undefined);
    assert.strictEqual(
      (parentMsg.getOptExternalChildMessage(): ?ExternalChildMessage$AsClass),
      undefined
    );
    assert.strictEqual(
      (parentMsg.hasOptExternalChildMessage(): boolean),
      false
    );

    parentMsg.setOptExternalChildMessage(childMsg);
    assert.strictEqual((parentMsg.hasOptExternalChildMessage(): boolean), true);
    parentMsg.clearOptExternalChildMessage();
    assert.strictEqual(
      (parentMsg.hasOptExternalChildMessage(): boolean),
      false
    );
  });

  it("should allow setting and getting repeated external message fields", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
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
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
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

describe("proto2 - toObject", () => {
  it("should have empty message fields if undefined", () => {
    const parentMsg: ParentMessageV2$AsClass = new ParentMessageV2();
    const asObjectUnset = parentMsg.toObject();
    assert.deepEqual(
      (asObjectUnset.internalChildMessage: ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject),
      { myString: undefined }
    );
    const childMsg = new InternalChildMessage();
    childMsg.setMyString("hello world");
    parentMsg.setInternalChildMessage(childMsg);
    const asObjectSet = parentMsg.toObject();

    const icm = asObjectSet.internalChildMessage;
    if (icm) {
      assert.strictEqual((icm.myString: ?string), "hello world");
    } else {
      assert.fail(
        "internalChildMessage is undefined",
        "internalChildMessage should be defined"
      );
    }
  });

  it("should indicate potentially undefined primitive fields", () => {
    const msg = new InternalChildMessage();
    const asObjectUnset = msg.toObject();
    assert.strictEqual((asObjectUnset.myString: string), undefined); // TODO
    msg.setMyString("hello world");
    const asObjectSet = msg.toObject();
    assert.strictEqual((asObjectSet.myString: string), "hello world");
  });
});
