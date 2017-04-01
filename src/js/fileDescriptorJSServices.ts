import {filePathToPseudoNamespace, filePathFromProtoWithoutExtension} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {WellKnownTypesMap} from "../WellKnown";
import {getFieldType, MESSAGE_TYPE} from "../ts/FieldTypes";

export function printFileDescriptorJSServices(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  if (fileDescriptor.getServiceList().length === 0) {
    return "";
  }
  const fileName = fileDescriptor.getName();
  const packageName = fileDescriptor.getPackage();
  const depth = fileName.split("/").length;
  const upToRoot = new Array(depth).join("../");

  const printer = new Printer(0);
  printer.printLn(`// package: ${packageName}`);
  printer.printLn(`// file: ${fileDescriptor.getName()}`);
  printer.printEmptyLn();

  const asPseudoNamespace = filePathToPseudoNamespace(fileName);
  printer.printLn(`var jspb = require("google-protobuf");`);
  printer.printLn(`var ${asPseudoNamespace} = require("${upToRoot}${filePathFromProtoWithoutExtension(fileName)}");`);
  fileDescriptor.getDependencyList().forEach((dependency: string) => {
    const pseudoNamespace = filePathToPseudoNamespace(dependency);
    if (dependency in WellKnownTypesMap) {
      printer.printLn(`var ${pseudoNamespace} = require("${WellKnownTypesMap[dependency]}");`);
    } else {
      const filePath = filePathFromProtoWithoutExtension(dependency);
      printer.printLn(`var ${pseudoNamespace} = require("${upToRoot}${filePath}");`);
    }
  });
  const serviceNames: Array<string> = [];
  fileDescriptor.getServiceList().forEach(service => {
    serviceNames.push(service.getName());
    printer.printLn(`var ${service.getName()} = {`);
    printer.printIndentedLn(`serviceName: "${packageName}.${service.getName()}"`);
    printer.printLn(`};`);
    service.getMethodList().forEach(method => {
      const requestMessageTypeName = getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
      const responseMessageTypeName = getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
      printer.printLn(`${service.getName()}.${method.getName()} = {`);
      printer.printIndentedLn(`methodName: "${method.getName()}",`);
      printer.printIndentedLn(`service: ${service.getName()},`);
      printer.printIndentedLn(`requestStream: ${method.getClientStreaming()},`);
      printer.printIndentedLn(`responseStream: ${method.getServerStreaming()},`);
      printer.printIndentedLn(`requestType: ${requestMessageTypeName},`);
      printer.printIndentedLn(`responseType: ${responseMessageTypeName}`);
      printer.printLn(`};`);
    });
  });

  printer.printLn(`module.exports = {`);
  serviceNames.forEach(serviceName => {
    printer.printIndentedLn(`${serviceName}: ${serviceName},`);
  });
  printer.printLn(`};`);

  printer.printEmptyLn();

  return printer.getOutput();
}
