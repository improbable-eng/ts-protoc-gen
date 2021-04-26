import {assert} from "chai";
import {GetterNameConflictMessage} from "../../examples/generated/proto/examplecom/getter_name_pb";

describe("getterName", () => {

  describe("getter", () => {
    it("generate the correct definitions based on the code the protoc-gen-js plugin generates", () => {
        const message = new GetterNameConflictMessage();

        assert.equal(message.getExtension$(), "");
        message.setExtension$("abc");
        assert.equal(message.getExtension$(), "abc");
        assert.equal(message.hasExtension$(), true);
        message.clearExtension$();
        assert.equal(message.hasExtension$(), false);

        assert.equal(message.getJsPbMessageId$(), "");
        message.setJsPbMessageId$("def");
        assert.equal(message.getJsPbMessageId$(), "def");
        assert.equal(message.hasJsPbMessageId$(), true);
        message.clearJsPbMessageId$();
        assert.equal(message.hasJsPbMessageId$(), false);
    });
  });
});
