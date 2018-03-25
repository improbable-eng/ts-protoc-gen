import {filePathToPseudoNamespace, filePathFromProtoWithoutExtension, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {WellKnownTypesMap} from "../WellKnown";
import {getFieldType, MESSAGE_TYPE} from "./FieldTypes";

function isUsed(fileDescriptor: FileDescriptorProto, pseudoNamespace: string, exportMap: ExportMap) {
  return fileDescriptor.getServiceList().some(service => {
    return service.getMethodList().some(method => {
      const requestMessageTypeName = getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
      const responseMessageTypeName = getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
      const namespacePackage = pseudoNamespace + ".";
      return (
        requestMessageTypeName.indexOf(namespacePackage) === 0 ||
        responseMessageTypeName.indexOf(namespacePackage) === 0
      );
    });
  });
}

type ClassOpts = {
  className: string
  statics: {[k: string]: any}
}

function printJavaScriptClass(printer: Printer, opts: ClassOpts): void {
  printer.printLn(`(function () {`);
  printer.printIndentedLn(`function ${opts.className}() {}`);

  Object.keys(opts.statics).forEach((key: string) => {
    const value = opts.statics[key];
    printer.printIndentedLn(`${opts.className}.${key} = ${value};`);
  });

  printer.printIndentedLn(`return ${opts.className};`);
  printer.printLn(`}());`);
}

export function printFileDescriptorTSServices(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  if (fileDescriptor.getServiceList().length === 0) {
    return "";
  }

  const fileName = fileDescriptor.getName();
  const packageName = fileDescriptor.getPackage();
  const upToRoot = getPathToRoot(fileName);

  const printer = new Printer(0);
  printer.printLn(`// package: ${packageName}`);
  printer.printLn(`// file: ${fileDescriptor.getName()}`);
  printer.printEmptyLn();

  // Need to import the non-service file that was generated for this .proto file
  const asPseudoNamespace = filePathToPseudoNamespace(fileName);
  printer.printLn(`import * as ${asPseudoNamespace} from "${upToRoot}${filePathFromProtoWithoutExtension(fileName)}";`);

  fileDescriptor.getDependencyList()
    .filter((dependency: string) => {
      return isUsed(fileDescriptor, filePathToPseudoNamespace(dependency), exportMap);
    })
    .forEach((dependency: string) => {
      const pseudoNamespace = filePathToPseudoNamespace(dependency);
      if (dependency in WellKnownTypesMap) {
        printer.printLn(`import * as ${pseudoNamespace} from "${WellKnownTypesMap[dependency]}";`);
      } else {
        const filePath = filePathFromProtoWithoutExtension(dependency);
        printer.printLn(`import * as ${pseudoNamespace} from "${upToRoot + filePath}";`);
      }
    });
  printer.printEmptyLn();

  fileDescriptor.getServiceList().forEach(service => {
    printer.printLn(`export class ${service.getName()} {`);
    printer.printIndentedLn(`static serviceName: string;`);
    printer.printLn(`}`);

    printer.printLn(`export namespace ${service.getName()} {`);
    const methodPrinter = new Printer(1);
    service.getMethodList().forEach(method => {
      const requestMessageTypeName = getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
      const responseMessageTypeName = getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
      methodPrinter.printLn(`export class ${method.getName()} {`);
      methodPrinter.printIndentedLn(`static readonly methodName: string;`);
      methodPrinter.printIndentedLn(`static readonly service: typeof ${service.getName()};`);
      methodPrinter.printIndentedLn(`static readonly requestStream: ${method.getClientStreaming()};`);
      methodPrinter.printIndentedLn(`static readonly responseStream: ${method.getServerStreaming()};`);
      methodPrinter.printIndentedLn(`static readonly requestType: typeof ${requestMessageTypeName};`);
      methodPrinter.printIndentedLn(`static readonly responseType: typeof ${responseMessageTypeName};`);
      methodPrinter.printLn(`}`);
    });
    printer.print(methodPrinter.output);
    printer.printLn(`}`);
  });

  return printer.getOutput();
}

export function printFileDescriptorJSServices(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  if (fileDescriptor.getServiceList().length === 0) {
    return "";
  }

  const fileName = fileDescriptor.getName();
  const packageName = fileDescriptor.getPackage();
  const upToRoot = getPathToRoot(fileName);

  const printer = new Printer(0);
  printer.printLn(`// package: ${packageName}`);
  printer.printLn(`// file: ${fileDescriptor.getName()}`);
  printer.printEmptyLn();

  // Need to import the non-service file that was generated for this .proto file
  const asPseudoNamespace = filePathToPseudoNamespace(fileName);
  printer.printLn(`var ${asPseudoNamespace} = require("${upToRoot}${filePathFromProtoWithoutExtension(fileName)}");`);

  fileDescriptor.getDependencyList()
    .filter((dependency: string) => {
      return isUsed(fileDescriptor, filePathToPseudoNamespace(dependency), exportMap);
    })
    .forEach((dependency: string) => {
      const pseudoNamespace = filePathToPseudoNamespace(dependency);
      if (dependency in WellKnownTypesMap) {
        printer.printLn(`var ${pseudoNamespace} = require("${WellKnownTypesMap[dependency]}");`);
      } else {
        const filePath = filePathFromProtoWithoutExtension(dependency);
        printer.printLn(`var ${pseudoNamespace} = require("${upToRoot + filePath}");`);
      }
    });
  printer.printEmptyLn();

  fileDescriptor.getServiceList().forEach(service => {
    const fullyQualifiedServiceName = (packageName ? `${packageName}.` : "") + service.getName();
    printer.print(`var ${service.getName()} = `);
    printJavaScriptClass(printer, {
      className: service.getName(),
      statics: {
        serviceName: `"${fullyQualifiedServiceName}"`,
      }
    });
    printer.printEmptyLn();

    service.getMethodList().forEach(method => {
      const requestMessageTypeName = getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
      const responseMessageTypeName = getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);

      printer.print(`${service.getName()}.${method.getName()} = `);
      printJavaScriptClass(printer, {
        className: method.getName(),
        statics: {
          methodName: `"${method.getName()}"`,
          service: service.getName(),
          requestStream: method.getClientStreaming(),
          responseStream: method.getServerStreaming(),
          requestType: requestMessageTypeName,
          responseType: responseMessageTypeName,
        }
      });
      printer.printEmptyLn();
    });

    printer.printLn(`exports.${service.getName()} = ${service.getName()};`);
    printer.printEmptyLn();
  });

  return printer.getOutput();
}