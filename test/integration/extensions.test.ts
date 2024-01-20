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

    expect(parentMsg.getMyBaseString()).toStrictEqual("some-base-string");
    expect(parentMsg.getExtension(myExtensionInt32)).toStrictEqual(123);
    expect(parentMsg.getExtension(myExtensionMessage).getMyExtensionString()).toStrictEqual("some-extension-string");
  });
});
