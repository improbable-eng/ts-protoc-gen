"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var reserved_words_pb_1 = require("../generated/examplecom/reserved_words_pb");
describe("reserved words", function () {
    var keywords = [
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
    describe("toObject", function () {
        it("should indicate potentially undefined primitive fields", function () {
            var msg = new reserved_words_pb_1.ReservedWordsMessage();
            var asObject = msg.toObject();
            keywords.forEach((function (kw) {
                chai_1.assert.strictEqual("pb_" + kw in asObject, true);
            }));
        });
        it("should prefix reserved words with `pb_` in the type definition", function () {
            var msg = new reserved_words_pb_1.ReservedWordsMessage();
            var asObject = msg.toObject();
            // Can't loop here as we want a compiler error if the `.d.ts` file was not generated correctly.
            chai_1.assert.strictEqual(asObject.pb_abstract, "");
            chai_1.assert.strictEqual(asObject.pb_boolean, "");
            chai_1.assert.strictEqual(asObject.pb_break, "");
            chai_1.assert.strictEqual(asObject.pb_byte, "");
            chai_1.assert.strictEqual(asObject.pb_case, "");
            chai_1.assert.strictEqual(asObject.pb_catch, "");
            chai_1.assert.strictEqual(asObject.pb_char, "");
            chai_1.assert.strictEqual(asObject.pb_class, "");
            chai_1.assert.strictEqual(asObject.pb_const, "");
            chai_1.assert.strictEqual(asObject.pb_continue, "");
            chai_1.assert.strictEqual(asObject.pb_debugger, "");
            chai_1.assert.strictEqual(asObject.pb_default, "");
            chai_1.assert.strictEqual(asObject.pb_delete, "");
            chai_1.assert.strictEqual(asObject.pb_do, "");
            chai_1.assert.strictEqual(asObject.pb_double, "");
            chai_1.assert.strictEqual(asObject.pb_else, "");
            chai_1.assert.strictEqual(asObject.pb_enum, "");
            chai_1.assert.strictEqual(asObject.pb_export, "");
            chai_1.assert.strictEqual(asObject.pb_extends, "");
            chai_1.assert.strictEqual(asObject.pb_false, "");
            chai_1.assert.strictEqual(asObject.pb_final, "");
            chai_1.assert.strictEqual(asObject.pb_finally, "");
            chai_1.assert.strictEqual(asObject.pb_float, "");
            chai_1.assert.strictEqual(asObject.pb_for, "");
            chai_1.assert.strictEqual(asObject.pb_function, "");
            chai_1.assert.strictEqual(asObject.pb_goto, "");
            chai_1.assert.strictEqual(asObject.pb_if, "");
            chai_1.assert.strictEqual(asObject.pb_implements, "");
            chai_1.assert.strictEqual(asObject.pb_import, "");
            chai_1.assert.strictEqual(asObject.pb_in, "");
            chai_1.assert.strictEqual(asObject.pb_instanceof, "");
            chai_1.assert.strictEqual(asObject.pb_int, "");
            chai_1.assert.strictEqual(asObject.pb_interface, "");
            chai_1.assert.strictEqual(asObject.pb_long, "");
            chai_1.assert.strictEqual(asObject.pb_native, "");
            chai_1.assert.strictEqual(asObject.pb_new, "");
            chai_1.assert.strictEqual(asObject.pb_null, "");
            chai_1.assert.strictEqual(asObject.pb_package, "");
            chai_1.assert.strictEqual(asObject.pb_private, "");
            chai_1.assert.strictEqual(asObject.pb_protected, "");
            chai_1.assert.strictEqual(asObject.pb_public, "");
            chai_1.assert.strictEqual(asObject.pb_return, "");
            chai_1.assert.strictEqual(asObject.pb_short, "");
            chai_1.assert.strictEqual(asObject.pb_static, "");
            chai_1.assert.strictEqual(asObject.pb_super, "");
            chai_1.assert.strictEqual(asObject.pb_switch, "");
            chai_1.assert.strictEqual(asObject.pb_synchronized, "");
            chai_1.assert.strictEqual(asObject.pb_this, "");
            chai_1.assert.strictEqual(asObject.pb_throw, "");
            chai_1.assert.strictEqual(asObject.pb_throws, "");
            chai_1.assert.strictEqual(asObject.pb_transient, "");
            chai_1.assert.strictEqual(asObject.pb_try, "");
            chai_1.assert.strictEqual(asObject.pb_typeof, "");
            chai_1.assert.strictEqual(asObject.pb_var, "");
            chai_1.assert.strictEqual(asObject.pb_void, "");
            chai_1.assert.strictEqual(asObject.pb_volatile, "");
            chai_1.assert.strictEqual(asObject.pb_while, "");
            chai_1.assert.strictEqual(asObject.pb_with, "");
        });
    });
});
//# sourceMappingURL=reservedWords.js.map