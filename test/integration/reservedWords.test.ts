import {ReservedWordsMessage} from "../../examples/generated/proto/examplecom/reserved_words_pb";

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
        expect(`pb_${kw}` in asObject).toBeTruthy();
      }));

    });
    it("should prefix reserved words with `pb_` in the type definition", () => {
        const msg = new ReservedWordsMessage();
        const asObject = msg.toObject();

        // Can't loop here as we want a compiler error if the `.d.ts` file was not generated correctly.
        expect(asObject.pb_abstract).toStrictEqual( "");
        expect(asObject.pb_boolean).toStrictEqual( "");
        expect(asObject.pb_break).toStrictEqual( "");
        expect(asObject.pb_byte).toStrictEqual( "");
        expect(asObject.pb_case).toStrictEqual( "");
        expect(asObject.pb_catch).toStrictEqual( "");
        expect(asObject.pb_char).toStrictEqual( "");
        expect(asObject.pb_class).toStrictEqual( "");
        expect(asObject.pb_const).toStrictEqual( "");
        expect(asObject.pb_continue).toStrictEqual( "");
        expect(asObject.pb_debugger).toStrictEqual( "");
        expect(asObject.pb_default).toStrictEqual( "");
        expect(asObject.pb_delete).toStrictEqual( "");
        expect(asObject.pb_do).toStrictEqual( "");
        expect(asObject.pb_double).toStrictEqual( "");
        expect(asObject.pb_else).toStrictEqual( "");
        expect(asObject.pb_enum).toStrictEqual( "");
        expect(asObject.pb_export).toStrictEqual( "");
        expect(asObject.pb_extends).toStrictEqual( "");
        expect(asObject.pb_false).toStrictEqual( "");
        expect(asObject.pb_final).toStrictEqual( "");
        expect(asObject.pb_finally).toStrictEqual( "");
        expect(asObject.pb_float).toStrictEqual( "");
        expect(asObject.pb_for).toStrictEqual( "");
        expect(asObject.pb_function).toStrictEqual( "");
        expect(asObject.pb_goto).toStrictEqual( "");
        expect(asObject.pb_if).toStrictEqual( "");
        expect(asObject.pb_implements).toStrictEqual( "");
        expect(asObject.pb_import).toStrictEqual( "");
        expect(asObject.pb_in).toStrictEqual( "");
        expect(asObject.pb_instanceof).toStrictEqual( "");
        expect(asObject.pb_int).toStrictEqual( "");
        expect(asObject.pb_interface).toStrictEqual( "");
        expect(asObject.pb_long).toStrictEqual( "");
        expect(asObject.pb_native).toStrictEqual( "");
        expect(asObject.pb_new).toStrictEqual( "");
        expect(asObject.pb_null).toStrictEqual( "");
        expect(asObject.pb_package).toStrictEqual( "");
        expect(asObject.pb_private).toStrictEqual( "");
        expect(asObject.pb_protected).toStrictEqual( "");
        expect(asObject.pb_public).toStrictEqual( "");
        expect(asObject.pb_return).toStrictEqual( "");
        expect(asObject.pb_short).toStrictEqual( "");
        expect(asObject.pb_static).toStrictEqual( "");
        expect(asObject.pb_super).toStrictEqual( "");
        expect(asObject.pb_switch).toStrictEqual( "");
        expect(asObject.pb_synchronized).toStrictEqual( "");
        expect(asObject.pb_this).toStrictEqual( "");
        expect(asObject.pb_throw).toStrictEqual( "");
        expect(asObject.pb_throws).toStrictEqual( "");
        expect(asObject.pb_transient).toStrictEqual( "");
        expect(asObject.pb_try).toStrictEqual( "");
        expect(asObject.pb_typeof).toStrictEqual( "");
        expect(asObject.pb_var).toStrictEqual( "");
        expect(asObject.pb_void).toStrictEqual( "");
        expect(asObject.pb_volatile).toStrictEqual( "");
        expect(asObject.pb_while).toStrictEqual( "");
        expect(asObject.pb_with).toStrictEqual( "");
    });
  });
});
