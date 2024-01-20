import {GetterNameConflictMessage} from "../../examples/generated/proto/examplecom/getter_name_pb";

describe("getterName", () => {

  describe("getter", () => {
    it("generate the correct definitions based on the code the protoc-gen-js plugin generates", () => {
        const message = new GetterNameConflictMessage();

        expect(message.getExtension$()).toStrictEqual("");
        message.setExtension$("abc");
        expect(message.getExtension$()).toStrictEqual("abc");
        expect(message.hasExtension$()).toStrictEqual(true);
        message.clearExtension$();
        expect(message.hasExtension$()).toStrictEqual(false);

        expect(message.getJsPbMessageId$()).toStrictEqual("");
        message.setJsPbMessageId$("def");
        expect(message.getJsPbMessageId$()).toStrictEqual("def");
        expect(message.hasJsPbMessageId$()).toStrictEqual(true);
        message.clearJsPbMessageId$();
        expect(message.hasJsPbMessageId$()).toStrictEqual(false);
    });
  });
});
