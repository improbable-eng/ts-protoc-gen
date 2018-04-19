"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Printer_1 = require("../Printer");
var util_1 = require("../util");
function printOneOfDecl(oneOfDecl, oneOfFields, indentLevel) {
    var printer = new Printer_1.Printer(indentLevel);
    printer.printEmptyLn();
    printer.printLn("export enum " + util_1.oneOfName(oneOfDecl.getName()) + "Case {");
    printer.printIndentedLn(oneOfDecl.getName().toUpperCase() + "_NOT_SET = 0,");
    oneOfFields.forEach(function (field) {
        printer.printIndentedLn(field.getName().toUpperCase() + " = " + field.getNumber() + ",");
    });
    printer.printLn("}");
    return printer.output;
}
exports.printOneOfDecl = printOneOfDecl;
//# sourceMappingURL=oneof.js.map