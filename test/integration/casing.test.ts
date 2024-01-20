import {CasingMessage} from "../../examples/generated/proto/examplecom/casing_pb";

describe("casing", () => {

  describe("toObject", () => {
    it("generate the correct definitions based on the code the protoc-gen-js plugin generates", () => {
        const message = new CasingMessage();
        const obj = message.toObject();

        expect(obj.titlecase).toStrictEqual( "");
        expect(obj.camelcase).toStrictEqual( "");
        expect(obj.snakeCase).toStrictEqual( "");
        expect(obj.leadingunderscorecamelcase).toStrictEqual( "");
        expect(obj.leadingunderscoretitlecase).toStrictEqual( "");
    });
  });
});
