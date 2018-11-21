// @flow
import { assert } from "chai";
import {
  OneOfMessage,
  CamelCasedOneOfMessage,
  SnakeCasedOneOfMessage
} from "../../../examples/flow/generated/proto/examplecom/oneof_message_pb";
import {
  CamelCasedOneOfMessage$AsClass_CamelcasedmessageCase,
  SnakeCasedOneOfMessage$AsClass_SnakeCasedMessageCase,
  OneOfMessage$AsClass,
  OneOfMessage$AsClass_GroupCase,
  OneOfMessage$AsClass_InternalChildMessage$AsClass,
  CamelCasedOneOfMessage$AsClass,
  SnakeCasedOneOfMessage$AsClass
} from "../../../examples/flow/generated/proto/examplecom/oneof_message_pb.flow";

import { ExternalChildMessage } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb";
import { ExternalChildMessage$AsClass } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb.flow";

const InternalChildMessage = OneOfMessage.InternalChildMessage;

describe("oneofs", () => {
  it("should allow getting oneof fields on an empty message", () => {
    const parentMsg: OneOfMessage$AsClass = new OneOfMessage();
    assert.strictEqual(
      (parentMsg.getInternalChildMessage(): ?OneOfMessage$AsClass_InternalChildMessage$AsClass),
      undefined
    );
    assert.strictEqual(
      (parentMsg.getExternalChildMessage(): ?ExternalChildMessage$AsClass),
      undefined
    );
    assert.strictEqual((parentMsg.getMyInt64(): number), 0);
    assert.strictEqual((parentMsg.getMyString(): string), "");
    assert.strictEqual(
      (parentMsg.getGroupCase(): $Values<
        typeof OneOfMessage$AsClass_GroupCase
      >),
      (OneOfMessage.GroupCase: typeof OneOfMessage$AsClass_GroupCase)
        .GROUP_NOT_SET
    );
  });

  it("should allow setting and getting oneof fields", () => {
    const parentMsg: OneOfMessage$AsClass = new OneOfMessage();
    const internalChildMessage: OneOfMessage$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    internalChildMessage.setMyString("internal");
    parentMsg.setInternalChildMessage(internalChildMessage);
    assert.strictEqual(
      (parentMsg.getGroupCase(): $Values<
        typeof OneOfMessage$AsClass_GroupCase
      >),
      (OneOfMessage.GroupCase: typeof OneOfMessage$AsClass_GroupCase)
        .INTERNAL_CHILD_MESSAGE
    );

    const icm = parentMsg.getInternalChildMessage();
    if (icm) {
      assert.strictEqual((icm.getMyString(): string), "internal");
    } else {
      assert.fail(
        "getInternalChildMessage() was undefined",
        "getInternalChildMessage() should be defined"
      );
    }

    const externalChildMessage = new ExternalChildMessage();
    externalChildMessage.setMyString("external");
    parentMsg.setExternalChildMessage(externalChildMessage);
    assert.strictEqual(
      (parentMsg.getGroupCase(): $Values<
        typeof OneOfMessage$AsClass_GroupCase
      >),
      (OneOfMessage.GroupCase: typeof OneOfMessage$AsClass_GroupCase)
        .EXTERNAL_CHILD_MESSAGE
    );

    const ecm = parentMsg.getExternalChildMessage();
    if (ecm) {
      assert.strictEqual((ecm.getMyString(): string), "external");
    } else {
      assert.fail(
        "getEnternalChildMessage() was undefined",
        "getEnternalChildMessage() should be defined"
      );
    }

    assert.strictEqual(
      (parentMsg.getInternalChildMessage(): ?OneOfMessage$AsClass_InternalChildMessage$AsClass),
      undefined
    );

    parentMsg.setExternalChildMessage(undefined);
    assert.strictEqual(
      (parentMsg.getGroupCase(): $Values<
        typeof OneOfMessage$AsClass_GroupCase
      >),
      (OneOfMessage.GroupCase: typeof OneOfMessage$AsClass_GroupCase)
        .GROUP_NOT_SET
    );
    assert.strictEqual(
      (parentMsg.getExternalChildMessage(): ?ExternalChildMessage$AsClass),
      undefined
    );
    assert.strictEqual(
      (parentMsg.getInternalChildMessage(): ?OneOfMessage$AsClass_InternalChildMessage$AsClass),
      undefined
    );
  });

  it("should only show one of the fields in toObject", () => {
    const parentMsg: OneOfMessage$AsClass = new OneOfMessage();
    const internalChildMessage: OneOfMessage$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
    internalChildMessage.setMyString("internal");
    parentMsg.setInternalChildMessage(internalChildMessage);
    assert.strictEqual(
      (parentMsg.getGroupCase(): $Values<
        typeof OneOfMessage$AsClass_GroupCase
      >),
      (OneOfMessage.GroupCase: typeof OneOfMessage$AsClass_GroupCase)
        .INTERNAL_CHILD_MESSAGE
    );
    const icm = parentMsg.getInternalChildMessage();
    if (icm) {
      assert.strictEqual((icm.getMyString(): string), "internal");
    } else {
      assert.fail(
        "getInternalChildMessage() was undefined",
        "getInternalChildMessage() should be defined"
      );
    }

    assert.deepEqual(
      (parentMsg.toObject(): {
        externalChildMessage?: {
          myString: string
        },
        internalChildMessage?: {
          myString: string
        },
        myInt64: number,
        myString: string
      }),
      {
        externalChildMessage: undefined,
        internalChildMessage: {
          myString: "internal"
        },
        myInt64: 0,
        myString: ""
      }
    );

    parentMsg.setMyString("hello world");
    assert.deepEqual(
      (parentMsg.toObject(): {
        externalChildMessage?: {
          myString: string
        },
        internalChildMessage?: {
          myString: string
        },
        myInt64: number,
        myString: string
      }),
      {
        externalChildMessage: undefined,
        internalChildMessage: undefined,
        myInt64: 0,
        myString: "hello world"
      }
    );
  });

  it("should handle casing inconsistencies present in protoc-gen's javascript implementation (see #63)", () => {
    assert.strictEqual(
      typeof CamelCasedOneOfMessage$AsClass_CamelcasedmessageCase,
      "object"
    );
    assert.strictEqual(
      typeof SnakeCasedOneOfMessage$AsClass_SnakeCasedMessageCase,
      "object"
    );
  });
});
