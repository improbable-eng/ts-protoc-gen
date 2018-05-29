import {assert} from "chai";
import {replaceProtoSuffix} from "../../src/util";

describe("util", () => {

  describe("replaceProtoSuffix", () => {
    [{
      in: "github.com/improbable-eng/ts-protoc-gen/test/proto/examplecom/enum_message.proto",
      out: "github.com/improbable-eng/ts-protoc-gen/test/proto/examplecom/enum_message_pb",
    }, {
      in: "enum_message.proto",
      out: "enum_message_pb",
    }, {
      in: "enum_message.js",
      out: "enum_message.js",
    }, {
      in: ".proto/enum_message.proto",
      out: ".proto/enum_message_pb",
    }, {
      in: "protos/.proto/enum_message.proto",
      out: "protos/.proto/enum_message_pb",
    }, {
      in: "",
      out: "",
    }].forEach(scenario => {
      it(`should map '${scenario.in}' to '${scenario.out}'`, () => {
        const actual = replaceProtoSuffix(scenario.in);
        assert.equal(actual, scenario.out);
      });
    });
  });

});
