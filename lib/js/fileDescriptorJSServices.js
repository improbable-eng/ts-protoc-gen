"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var Printer_1 = require("../Printer");
var WellKnown_1 = require("../WellKnown");
var FieldTypes_1 = require("../ts/FieldTypes");
function printFileDescriptorJSServices(fileDescriptor, exportMap) {
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
    printer.printLn("var jspb = require(\"google-protobuf\");");
    printer.printLn("var " + asPseudoNamespace + " = require(\"" + upToRoot + util_1.filePathFromProtoWithoutExtension(fileName) + "\");");
    fileDescriptor.getDependencyList().forEach(function (dependency) {
        var pseudoNamespace = util_1.filePathToPseudoNamespace(dependency);
        if (dependency in WellKnown_1.WellKnownTypesMap) {
            printer.printLn("var " + pseudoNamespace + " = require(\"" + WellKnown_1.WellKnownTypesMap[dependency] + "\");");
        }
        else {
            var filePath = util_1.filePathFromProtoWithoutExtension(dependency);
            printer.printLn("var " + pseudoNamespace + " = require(\"" + upToRoot + filePath + "\");");
        }
    });
    var serviceNames = [];
    fileDescriptor.getServiceList().forEach(function (service) {
        serviceNames.push(service.getName());
        printer.printLn("var " + service.getName() + " = {");
        printer.printIndentedLn("serviceName: \"" + (packageName ? packageName + "." : "") + service.getName() + "\"");
        printer.printLn("};");
        service.getMethodList().forEach(function (method) {
            var requestMessageTypeName = FieldTypes_1.getFieldType(FieldTypes_1.MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
            var responseMessageTypeName = FieldTypes_1.getFieldType(FieldTypes_1.MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
            printer.printLn(service.getName() + "." + method.getName() + " = {");
            printer.printIndentedLn("methodName: \"" + method.getName() + "\",");
            printer.printIndentedLn("service: " + service.getName() + ",");
            printer.printIndentedLn("requestStream: " + method.getClientStreaming() + ",");
            printer.printIndentedLn("responseStream: " + method.getServerStreaming() + ",");
            printer.printIndentedLn("requestType: " + requestMessageTypeName + ",");
            printer.printIndentedLn("responseType: " + responseMessageTypeName);
            printer.printLn("};");
        });
    });
    printer.printLn("module.exports = {");
    serviceNames.forEach(function (serviceName) {
        printer.printIndentedLn(serviceName + ": " + serviceName + ",");
    });
    printer.printLn("};");
    printer.printEmptyLn();
    return printer.getOutput();
}
exports.printFileDescriptorJSServices = printFileDescriptorJSServices;
//# sourceMappingURL=fileDescriptorJSServices.js.map