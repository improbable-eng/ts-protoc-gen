import {assert} from "chai";
import {ReservedWordsMessage} from "../examples/generated/examplecom/reserved_words_pb";

describe("reserved words", () => {

    const keywords = [
      "abstract",
      "boolean",
      "break",
      "byte",
      "case",
      "catch",
      "char",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "double",
      "else",
      "enum",
      "export",
      "extends",
      "false",
      "final",
      "finally",
      "float",
      "for",
      "function",
      "goto",
      "if",
      "implements",
      "import",
      "in",
      "instanceof",
      "int",
      "interface",
      "long",
      "native",
      "new",
      "null",
      "package",
      "private",
      "protected",
      "public",
      "return",
      "short",
      "static",
      "super",
      "switch",
      "synchronized",
      "this",
      "throw",
      "throws",
      "transient",
      "try",
      "typeof",
      "var",
      "void",
      "volatile",
      "while",
      "with",
    ];

  describe("toObject", () => {
    it("should indicate potentially undefined primitive fields", () => {
      const msg = new ReservedWordsMessage();
      const asObject = msg.toObject();

      keywords.forEach((kw => {
        assert.strictEqual(`pb_${kw}` in asObject, true);
      }));

    });
    it("should prefix reserved words with `pb_` in the type definition", () => {
        const msg = new ReservedWordsMessage();
        const asObject = msg.toObject();

        // Can't loop here as we want a compiler error if the `.d.ts` file was not generated correctly.
        assert.strictEqual(asObject.pb_abstract, "");
        assert.strictEqual(asObject.pb_boolean, "");
        assert.strictEqual(asObject.pb_break, "");
        assert.strictEqual(asObject.pb_byte, "");
        assert.strictEqual(asObject.pb_case, "");
        assert.strictEqual(asObject.pb_catch, "");
        assert.strictEqual(asObject.pb_char, "");
        assert.strictEqual(asObject.pb_class, "");
        assert.strictEqual(asObject.pb_const, "");
        assert.strictEqual(asObject.pb_continue, "");
        assert.strictEqual(asObject.pb_debugger, "");
        assert.strictEqual(asObject.pb_default, "");
        assert.strictEqual(asObject.pb_delete, "");
        assert.strictEqual(asObject.pb_do, "");
        assert.strictEqual(asObject.pb_double, "");
        assert.strictEqual(asObject.pb_else, "");
        assert.strictEqual(asObject.pb_enum, "");
        assert.strictEqual(asObject.pb_export, "");
        assert.strictEqual(asObject.pb_extends, "");
        assert.strictEqual(asObject.pb_false, "");
        assert.strictEqual(asObject.pb_final, "");
        assert.strictEqual(asObject.pb_finally, "");
        assert.strictEqual(asObject.pb_float, "");
        assert.strictEqual(asObject.pb_for, "");
        assert.strictEqual(asObject.pb_function, "");
        assert.strictEqual(asObject.pb_goto, "");
        assert.strictEqual(asObject.pb_if, "");
        assert.strictEqual(asObject.pb_implements, "");
        assert.strictEqual(asObject.pb_import, "");
        assert.strictEqual(asObject.pb_in, "");
        assert.strictEqual(asObject.pb_instanceof, "");
        assert.strictEqual(asObject.pb_int, "");
        assert.strictEqual(asObject.pb_interface, "");
        assert.strictEqual(asObject.pb_long, "");
        assert.strictEqual(asObject.pb_native, "");
        assert.strictEqual(asObject.pb_new, "");
        assert.strictEqual(asObject.pb_null, "");
        assert.strictEqual(asObject.pb_package, "");
        assert.strictEqual(asObject.pb_private, "");
        assert.strictEqual(asObject.pb_protected, "");
        assert.strictEqual(asObject.pb_public, "");
        assert.strictEqual(asObject.pb_return, "");
        assert.strictEqual(asObject.pb_short, "");
        assert.strictEqual(asObject.pb_static, "");
        assert.strictEqual(asObject.pb_super, "");
        assert.strictEqual(asObject.pb_switch, "");
        assert.strictEqual(asObject.pb_synchronized, "");
        assert.strictEqual(asObject.pb_this, "");
        assert.strictEqual(asObject.pb_throw, "");
        assert.strictEqual(asObject.pb_throws, "");
        assert.strictEqual(asObject.pb_transient, "");
        assert.strictEqual(asObject.pb_try, "");
        assert.strictEqual(asObject.pb_typeof, "");
        assert.strictEqual(asObject.pb_var, "");
        assert.strictEqual(asObject.pb_void, "");
        assert.strictEqual(asObject.pb_volatile, "");
        assert.strictEqual(asObject.pb_while, "");
        assert.strictEqual(asObject.pb_with, "");
    });
  });
});
