"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var Printer_1 = require("../Printer");
var WellKnown_1 = require("../WellKnown");
var FieldTypes_1 = require("./FieldTypes");
function printFileDescriptorTSServices(fileDescriptor, exportMap) {
    if (fileDescriptor.getServiceList().length === 0) {
        return "";
    }
    var fileName = fileDescriptor.getName();
    var packageName = fileDescriptor.getPackage();
    var upToRoot = util_1.getPathToRoot(fileName);
    var printer = new Printer_1.Printer(0);
    printer.printLn("// package: " + packageName);
    printer.printLn("// file: " + fileDescriptor.getName());
    printer.printEmptyLn();
    var asPseudoNamespace = util_1.filePathToPseudoNamespace(fileName);
    printer.printLn("import * as " + asPseudoNamespace + " from \"" + upToRoot + util_1.filePathFromProtoWithoutExtension(fileName) + "\";");
    fileDescriptor.getDependencyList().forEach(function (dependency) {
        var pseudoNamespace = util_1.filePathToPseudoNamespace(dependency);
        if (dependency in WellKnown_1.WellKnownTypesMap) {
            printer.printLn("import * as " + pseudoNamespace + " from \"" + WellKnown_1.WellKnownTypesMap[dependency] + "\";");
        }
        else {
            var filePath = util_1.filePathFromProtoWithoutExtension(dependency);
            printer.printLn("import * as " + pseudoNamespace + " from \"" + (upToRoot + filePath) + "\";");
        }
    });
    fileDescriptor.getServiceList().forEach(function (service) {
        printer.printLn("export class " + service.getName() + " {");
        printer.printIndentedLn("static serviceName = \"" + (packageName ? packageName + "." : "") + service.getName() + "\";");
        printer.printLn("}");
        printer.printLn("export namespace " + service.getName() + " {");
        var methodPrinter = new Printer_1.Printer(1);
        service.getMethodList().forEach(function (method) {
            var requestMessageTypeName = FieldTypes_1.getFieldType(FieldTypes_1.MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
            var responseMessageTypeName = FieldTypes_1.getFieldType(FieldTypes_1.MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
            methodPrinter.printLn("export class " + method.getName() + " {");
            methodPrinter.printIndentedLn("static readonly methodName = \"" + method.getName() + "\";");
            methodPrinter.printIndentedLn("static readonly service = " + service.getName() + ";");
            methodPrinter.printIndentedLn("static readonly requestStream = " + method.getClientStreaming() + ";");
            methodPrinter.printIndentedLn("static readonly responseStream = " + method.getServerStreaming() + ";");
            methodPrinter.printIndentedLn("static readonly requestType = " + requestMessageTypeName + ";");
            methodPrinter.printIndentedLn("static readonly responseType = " + responseMessageTypeName + ";");
            methodPrinter.printLn("}");
        });
        printer.print(methodPrinter.output);
        printer.printLn("}");
    });
    return printer.getOutput();
}
exports.printFileDescriptorTSServices = printFileDescriptorTSServices;
//# sourceMappingURL=fileDescriptorTSServices.js.map