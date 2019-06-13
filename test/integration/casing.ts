import {assert} from "chai";
import {CasingMessage} from "../../examples/generated/proto/examplecom/casing_pb";

describe("casing", () => {

  describe("toObject", () => {
    it("generate the correct definitions based on the code the protoc-gen-js plugin generates", () => {
        const message = new CasingMessage();
        const obj = message.toObject();

        assert.equal(obj.titlecase, "");
        assert.equal(obj.camelcase, "");
        assert.equal(obj.snakeCase, "");
        assert.equal(obj.leadingunderscorecamelcase, "");
        assert.equal(obj.leadingunderscoretitlecase, "");
    });
  });
});
