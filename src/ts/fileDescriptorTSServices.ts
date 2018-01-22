import {filePathToPseudoNamespace, filePathFromProtoWithoutExtension, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {FileDescriptorProto, MethodDescriptorProto, ServiceDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
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
      if (method.getClientStreaming()) {
        return;
      } else if (method.getServerStreaming()) {
        printUnaryStreamStub(methodPrinter, service, method, requestMessageTypeName, responseMessageTypeName);
      } else {
        printUnaryUnaryStub(methodPrinter, service, method, requestMessageTypeName, responseMessageTypeName);
      }

      methodPrinter.printEmptyLn();
    });
    printer.print(methodPrinter.output);
    printer.printLn(`}`);
  });

  return printer.getOutput();
}

function printUnaryUnaryStub(methodPrinter: Printer,
  service: ServiceDescriptorProto,
  method: MethodDescriptorProto,
  requestMessageTypeName: string,
  responseMessageTypeName: string
) {
  // helper for easy indentation
  const oneindent = methodPrinter.indentStr;
  const stubPrinter = {
    indents: [oneindent],
    indent: () => { stubPrinter.indents.push(oneindent); return stubPrinter; },
    dedent: () => { stubPrinter.indents.pop(); return stubPrinter; },
    print:  (str: string) => { methodPrinter.indentStr = stubPrinter.indents.join(""); methodPrinter.printLn(str); return stubPrinter; },
  };

  const camelCaseMethodName = method.getName()[0].toLowerCase() + method.getName().substr(1);
  stubPrinter.print(`export function ${camelCaseMethodName}(req: ${requestMessageTypeName}, metadata?: Metadata): Promise<${responseMessageTypeName}> {`)
      .indent().print(`return new Promise((resolve: any, reject: any) => {`)
        .indent().print(`grpc.unary(${method.getName()}, {`)
          .indent().print(`request: req,`)
                   .print(`host: ${service.getName()}.serviceURL,`)
                   .print(`metadata: metadata,`)
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
}

function printUnaryStreamStub(methodPrinter: Printer,
  service: ServiceDescriptorProto,
  method: MethodDescriptorProto,
  requestMessageTypeName: string,
  responseMessageTypeName: string
) {
  // helper for easy indentation
  const oneindent = methodPrinter.indentStr;
  const stubPrinter = {
    indents: [oneindent],
    indent: () => { stubPrinter.indents.push(oneindent); return stubPrinter; },
    dedent: () => { stubPrinter.indents.pop(); return stubPrinter; },
    print:  (str: string) => { methodPrinter.indentStr = stubPrinter.indents.join(""); methodPrinter.printLn(str); return stubPrinter; },
  };

  const camelCaseMethodName = method.getName()[0].toLowerCase() + method.getName().substr(1);
  const pureResponseTypeName = responseMessageTypeName.split(".")[1];
  stubPrinter.print(`export function ${camelCaseMethodName}(req: ${requestMessageTypeName}, metadata?: Metadata): AsyncIterable<${responseMessageTypeName}> {`)
      .indent().print(`type ${pureResponseTypeName}IterationResult = {`)
        .indent().print(`value: ${responseMessageTypeName}, done: boolean,`)
      .dedent().print(`};`)
               .print(`type requestQueueEntry = {`)
        .indent().print(`resolve: (res: ${pureResponseTypeName}IterationResult) => void,`)
                 .print(`reject: (err: Error) => void,`)
      .dedent().print(`};`)
               .print(`var error: Error | null = null;`)
               .print(`const requestQueue: requestQueueEntry[] = []`)
               .print(`const responseQueue: ${pureResponseTypeName}IterationResult[] = [];`)
               .print(`grpc.invoke(${method.getName()}, {`)
        .indent().print(`request: req,`)
                 .print(`host: ${service.getName()}.serviceURL,`)
                 .print(`metadata: metadata,`)
                 .print(`onMessage: res => {`)
          .indent().print(`const myres = res as ${responseMessageTypeName};`)
                   .print(`// check if there are pending next() calls to be fulfilled`)
                   .print(`if (requestQueue.length) {`)
            .indent().print(`const req = requestQueue.shift() as requestQueueEntry;`)
                     .print(`req.resolve({value: myres, done: false});`)
          .dedent().print(`} else {`)
            .indent().print(`// no? okay. queue up the response`)
                     .print(`responseQueue.push({value: myres, done: false});`)
          .dedent().print(`}`)
        .dedent().print(`},`)
                 .print(`onEnd: (statusCode: Code, statusMessage: string) => {`)
          .indent().print(`if (statusCode != Code.OK) {`)
            .indent().print(`error = new Error("Got Non-OK code " + statusCode.toString() + " from ${method.getName()}. Message: " + statusMessage)`)
                     .print(`if (requestQueue.length) {`)
              .indent().print(`const req = requestQueue.shift() as requestQueueEntry;`)
                       .print(`req.reject(error);`)
            .dedent().print(`}`)
          .dedent().print(`} else {`)
            .indent().print(`const resp = {value: new ${responseMessageTypeName}, done: true};`)
                     .print(`if (requestQueue.length) {`)
              .indent().print(`const req = requestQueue.shift() as requestQueueEntry;`)
                       .print(`req.resolve(resp);`)
            .dedent().print(`} else {`)
              .indent().print(`responseQueue.push(resp);`)
            .dedent().print(`}`)
          .dedent().print(`}`)
        .dedent().print(`}`)
      .dedent().print(`});`)
               .print(`const iterator = {`)
        .indent().print(`next: function(): Promise<${pureResponseTypeName}IterationResult> {`)
          .indent().print(`return new Promise((resolve, reject) => {`)
            .indent().print(`if (error !== null)`)
              .indent().print(`return reject(error);`)
            .dedent().print(`if (responseQueue.length) {`)
              .indent().print(`const resp = responseQueue.shift() as ${pureResponseTypeName}IterationResult;`)
                       .print(`resolve(resp);`)
            .dedent().print(`}`)
                     .print(`requestQueue.push({resolve, reject});`)
          .dedent().print(`})`)
        .dedent().print(`}`)
      .dedent().print(`};`)
               .print(`return {`)
        .indent().print(`[Symbol.asyncIterator]() {`)
          .indent().print(`return iterator;`)
        .dedent().print(`}`)
    .dedent().print(`}`)
  .dedent().print(`}`);
}