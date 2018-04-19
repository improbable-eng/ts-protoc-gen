"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Printer_1 = require("../Printer");
var util_1 = require("../util");
var FieldTypes_1 = require("./FieldTypes");
function printExtension(fileName, exportMap, extension, indentLevel) {
    var printer = new Printer_1.Printer(indentLevel + 1);
    printer.printEmptyLn();
    var extensionName = util_1.snakeToCamel(extension.getName());
    var fieldType = FieldTypes_1.getFieldType(extension.getType(), extension.getTypeName().slice(1), fileName, exportMap);
    printer.printLn("export const " + extensionName + ": jspb.ExtensionFieldInfo<" + fieldType + ">;");
    return printer.output;
}
exports.printExtension = printExtension;
//# sourceMappingURL=extensions.js.map