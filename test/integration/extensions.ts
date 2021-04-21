import { assert } from "chai";
import {
  ExtensionMessage,
  MyBase,
  myExtensionInt32,
  myExtensionMessage
} from "../../examples/generated/proto/examplecom/extensions_pb";

describe("extensions", () => {
  it("should set and get extensions", () => {
    const parentMsg = new MyBase();
    parentMsg.setMyBaseString("some-base-string");
    parentMsg.setExtension(myExtensionInt32, 123);

    const extensionMsg = new ExtensionMessage();
    extensionMsg.setMyExtensionString("some-extension-string");
    parentMsg.setExtension(myExtensionMessage, extensionMsg);

    assert.strictEqual(parentMsg.getMyBaseString(), "some-base-string");
    assert.strictEqual(parentMsg.getExtension(myExtensionInt32), 123);
    assert.strictEqual(parentMsg.getExtension(myExtensionMessage).getMyExtensionString(), "some-extension-string");
  });
});
