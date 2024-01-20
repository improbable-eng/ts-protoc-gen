import {OneOfMessage, CamelCasedOneOfMessage, SnakeCasedOneOfMessage} from "../../examples/generated/proto/examplecom/oneof_message_pb";
import {ExternalChildMessage} from "../../examples/generated/proto/othercom/external_child_message_pb";
import InternalChildMessage = OneOfMessage.InternalChildMessage;

describe("oneofs", () => {
  it("should allow getting oneof fields on an empty message", () => {
    const parentMsg = new OneOfMessage();
    expect(parentMsg.getInternalChildMessage() as InternalChildMessage).toStrictEqual(undefined);
    expect(parentMsg.getExternalChildMessage() as ExternalChildMessage).toStrictEqual(undefined);
    expect(parentMsg.getMyInt64() as number).toStrictEqual(0);
    expect(parentMsg.getMyString() as string).toStrictEqual("");
    expect(parentMsg.getGroupCase() as OneOfMessage.GroupCase).toStrictEqual(OneOfMessage.GroupCase.GROUP_NOT_SET);
  });

  it("should allow setting and getting oneof fields", () => {
    const parentMsg = new OneOfMessage();
    const internalChildMessage = new InternalChildMessage();
    internalChildMessage.setMyString("internal");
    parentMsg.setInternalChildMessage(internalChildMessage);
    expect(parentMsg.getGroupCase() as OneOfMessage.GroupCase).toStrictEqual(OneOfMessage.GroupCase.INTERNAL_CHILD_MESSAGE);
    expect(parentMsg.getInternalChildMessage()!.getMyString() as string).toStrictEqual("internal");

    const externalChildMessage = new ExternalChildMessage();
    externalChildMessage.setMyString("external");
    parentMsg.setExternalChildMessage(externalChildMessage);
    expect(parentMsg.getGroupCase() as OneOfMessage.GroupCase).toStrictEqual(OneOfMessage.GroupCase.EXTERNAL_CHILD_MESSAGE);
    expect(parentMsg.getExternalChildMessage()!.getMyString() as string).toStrictEqual("external");
    expect(parentMsg.getInternalChildMessage() as InternalChildMessage).toStrictEqual(undefined);

    parentMsg.setExternalChildMessage(undefined);
    expect(parentMsg.getGroupCase() as OneOfMessage.GroupCase).toStrictEqual(OneOfMessage.GroupCase.GROUP_NOT_SET);
    expect(parentMsg.getExternalChildMessage() as ExternalChildMessage).toStrictEqual(undefined);
    expect(parentMsg.getInternalChildMessage() as InternalChildMessage).toStrictEqual(undefined);
  });

  it("should only show one of the fields in toObject", () => {
    const parentMsg = new OneOfMessage();
    const internalChildMessage = new InternalChildMessage();
    internalChildMessage.setMyString("internal");
    parentMsg.setInternalChildMessage(internalChildMessage);
    expect(parentMsg.getGroupCase() as OneOfMessage.GroupCase).toStrictEqual(OneOfMessage.GroupCase.INTERNAL_CHILD_MESSAGE);
    expect(parentMsg.getInternalChildMessage()!.getMyString() as string).toStrictEqual("internal");
    expect(parentMsg.toObject() as {
      externalChildMessage?: {
        myString: string,
      },
      internalChildMessage?: {
        myString: string,
      },
      myInt64: number,
      myString: string,
    }).toStrictEqual({
      externalChildMessage: undefined,
      internalChildMessage: {
        myString: "internal",
      },
      myInt64: 0,
      myString: "",
    });

    parentMsg.setMyString("hello world");
    expect(parentMsg.toObject() as {
      externalChildMessage?: {
        myString: string,
      },
      internalChildMessage?: {
        myString: string,
      },
      myInt64: number,
      myString: string,
    }).toStrictEqual({
      externalChildMessage: undefined,
      internalChildMessage: undefined,
      myInt64: 0,
      myString: "hello world",
    });
  });

  it("should handle casing inconsistencies present in protoc-gen's javascript implementation (see #63)", () => {
    expect(typeof CamelCasedOneOfMessage.CamelcasedmessageCase).toStrictEqual("object");
    expect(typeof SnakeCasedOneOfMessage.SnakeCasedMessageCase).toStrictEqual("object");
  });
});
