import {filePathToPseudoNamespace, filePathFromProtoWithoutExtension, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {WellKnownTypesMap} from "../WellKnown";
import {getFieldType, MESSAGE_TYPE} from "./FieldTypes";

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

  printer.printLn(`import {grpc, Code, Metadata} from "grpc-web-client";`)

  // Need to import the non-service file that was generated for this .proto file
  const asPseudoNamespace = filePathToPseudoNamespace(fileName);
  printer.printLn(`import * as ${asPseudoNamespace} from "${upToRoot}${filePathFromProtoWithoutExtension(fileName)}";`);

  fileDescriptor.getDependencyList().forEach((dependency: string) => {
    const pseudoNamespace = filePathToPseudoNamespace(dependency);
    if (dependency in WellKnownTypesMap) {
      printer.printLn(`import * as ${pseudoNamespace} from "${WellKnownTypesMap[dependency]}";`);
    } else {
      const filePath = filePathFromProtoWithoutExtension(dependency);
      printer.printLn(`import * as ${pseudoNamespace} from "${upToRoot + filePath}";`);
    }
  });

  fileDescriptor.getServiceList().forEach(service => {
    printer.printLn(`export class ${service.getName()} {`);
    printer.printIndentedLn(`static serviceName = "${packageName ? packageName + "." : ""}${service.getName()}";`);
    printer.printIndentedLn(`static serviceURL = "unset";`);
    printer.printLn(`}`);

    printer.printLn(`export namespace ${service.getName()} {`);
    const methodPrinter = new Printer(1);
    service.getMethodList().forEach(method => {
      const requestMessageTypeName = getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
      const responseMessageTypeName = getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
      methodPrinter.printLn(`export class ${method.getName()} {`);
      methodPrinter.printIndentedLn(`static readonly methodName = "${method.getName()}";`);
      methodPrinter.printIndentedLn(`static readonly service = ${service.getName()};`);
      methodPrinter.printIndentedLn(`static readonly requestStream = ${method.getClientStreaming()};`);
      methodPrinter.printIndentedLn(`static readonly responseStream = ${method.getServerStreaming()};`);
      methodPrinter.printIndentedLn(`static readonly requestType = ${requestMessageTypeName};`);
      methodPrinter.printIndentedLn(`static readonly responseType = ${responseMessageTypeName};`);
      methodPrinter.printLn(`}`);

      // add a stub method that resolves with a promise having the response of the correct type.
      // handling only for unary calls right now
      if (method.getClientStreaming() || method.getServerStreaming()) {
        return;
      }

      methodPrinter.printEmptyLn();

      // helper for easy indentation
      const oneindent = methodPrinter.indentStr;
      const stubPrinter = {
        indents: [oneindent],
        indent: () => { stubPrinter.indents.push(oneindent); return stubPrinter; },
        dedent: () => { stubPrinter.indents.pop(); return stubPrinter; },
        print:  (str: string) => { methodPrinter.indentStr = stubPrinter.indents.join(""); methodPrinter.printLn(str); return stubPrinter; },
      };

      const camelCaseMethodName = method.getName()[0].toLowerCase() + method.getName().substr(1);
      stubPrinter.print(`export function ${camelCaseMethodName}(req: ${requestMessageTypeName}): Promise<${responseMessageTypeName}> {`)
          .indent().print(`return new Promise((resolve: any, reject: any) => {`)
            .indent().print(`grpc.unary(${method.getName()}, {`)
              .indent().print(`request: req,`)
                       .print(`host: ${service.getName()}.serviceURL,`)  // TODO: need to add serviceURL attribute to the namespace
                       .print(`onEnd: res => {`)
                .indent().print(`const { status, statusMessage, headers, message, trailers  } = res;`)
                         .print(`const resp = message as ${responseMessageTypeName};`)
                         .print(`if (status != Code.OK) {`)
                  .indent().print(`return reject({ statusCode: status, statusMessage: statusMessage });`)
                .dedent().print(`}`)
                         .print(`if (resp.getStatusCode() !== ${responseMessageTypeName}.StatusCode.OK) {`)
                  .indent().print(`return reject({ statusCode: resp.getStatusCode(), statusMessage: resp.getStatusMessage() });`)
                .dedent().print(`}`)
                         .print(`resolve(resp);`)
              .dedent().print(`}`)
            .dedent().print(`});`)
          .dedent().print(`});`)
        .dedent().print(`}`);
    });
    printer.print(methodPrinter.output);
    printer.printLn(`}`);
  });

  return printer.getOutput();
}
