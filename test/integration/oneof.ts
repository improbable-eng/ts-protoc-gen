import {assert} from "chai";
import {OneOfMessage, CamelCasedOneOfMessage} from "../../examples/generated/proto/examplecom/oneof_message_pb";
import {ExternalChildMessage} from "../../examples/generated/proto/othercom/external_child_message_pb";
import InternalChildMessage = OneOfMessage.InternalChildMessage;

describe("oneofs", () => {
  it("should allow getting oneof fields on an empty message", () => {
    const parentMsg = new OneOfMessage();
    assert.strictEqual(parentMsg.getInternalChildMessage() as InternalChildMessage, undefined);
    assert.strictEqual(parentMsg.getExternalChildMessage() as ExternalChildMessage, undefined);
    assert.strictEqual(parentMsg.getMyInt64() as number, 0);
    assert.strictEqual(parentMsg.getMyString() as string, "");
    assert.strictEqual(parentMsg.getGroupCase() as OneOfMessage.GroupCase, OneOfMessage.GroupCase.GROUP_NOT_SET);
  });

  it("should allow setting and getting oneof fields", () => {
    const parentMsg = new OneOfMessage();
    const internalChildMessage = new InternalChildMessage();
    internalChildMessage.setMyString("internal");
    parentMsg.setInternalChildMessage(internalChildMessage);
    assert.strictEqual(parentMsg.getGroupCase() as OneOfMessage.GroupCase, OneOfMessage.GroupCase.INTERNAL_CHILD_MESSAGE);
    assert.strictEqual(parentMsg.getInternalChildMessage()!.getMyString() as string, "internal");

    const externalChildMessage = new ExternalChildMessage();
    externalChildMessage.setMyString("external");
    parentMsg.setExternalChildMessage(externalChildMessage);
    assert.strictEqual(parentMsg.getGroupCase() as OneOfMessage.GroupCase, OneOfMessage.GroupCase.EXTERNAL_CHILD_MESSAGE);
    assert.strictEqual(parentMsg.getExternalChildMessage()!.getMyString() as string, "external");
    assert.strictEqual(parentMsg.getInternalChildMessage() as InternalChildMessage, undefined);

    parentMsg.setExternalChildMessage(undefined);
    assert.strictEqual(parentMsg.getGroupCase() as OneOfMessage.GroupCase, OneOfMessage.GroupCase.GROUP_NOT_SET);
    assert.strictEqual(parentMsg.getExternalChildMessage() as ExternalChildMessage, undefined);
    assert.strictEqual(parentMsg.getInternalChildMessage() as InternalChildMessage, undefined);
  });

  it("should only show one of the fields in toObject", () => {
    const parentMsg = new OneOfMessage();
    const internalChildMessage = new InternalChildMessage();
    internalChildMessage.setMyString("internal");
    parentMsg.setInternalChildMessage(internalChildMessage);
    assert.strictEqual(parentMsg.getGroupCase() as OneOfMessage.GroupCase, OneOfMessage.GroupCase.INTERNAL_CHILD_MESSAGE);
    assert.strictEqual(parentMsg.getInternalChildMessage()!.getMyString() as string, "internal");
    assert.deepEqual(parentMsg.toObject() as {
      externalChildMessage?: {
        myString: string,
      },
      internalChildMessage?: {
        myString: string,
      },
      myInt64: number,
      myString: string,
    }, {
      externalChildMessage: undefined,
      internalChildMessage: {
        myString: "internal",
      },
      myInt64: 0,
      myString: "",
    });

    parentMsg.setMyString("hello world");
    assert.deepEqual(parentMsg.toObject() as {
      externalChildMessage?: {
        myString: string,
      },
      internalChildMessage?: {
        myString: string,
      },
      myInt64: number,
      myString: string,
    }, {
      externalChildMessage: undefined,
      internalChildMessage: undefined,
      myInt64: 0,
      myString: "hello world",
    });
  });

  it("should handle casing inconsistencies present in protoc-gen's javascript implementation (see #63)", () => {
    assert.strictEqual(typeof CamelCasedOneOfMessage.CamelcasedmessageCase, "object");
  });
});
