import {filePathToPseudoNamespace, filePathFromProtoWithoutExtension, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {CodePrinter} from "../CodePrinter";
import {
  FileDescriptorProto, MethodDescriptorProto,
  ServiceDescriptorProto
} from "google-protobuf/google/protobuf/descriptor_pb";
import {WellKnownTypesMap} from "../WellKnown";
import {getFieldType, MESSAGE_TYPE} from "../ts/FieldTypes";
import {CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";

export function generateGrpcWebService(filename: string, descriptor: FileDescriptorProto, exportMap: ExportMap): CodeGeneratorResponse.File[] {
  if (descriptor.getServiceList().length === 0) {
    return [];
  }
  return [
    createFile(generateTypescriptDefinition(descriptor, exportMap), `${filename}_service.d.ts`),
    createFile(generateJavaScript(descriptor, exportMap), `${filename}_service.js`),
  ];
}

function createFile(output: string, filename: string): CodeGeneratorResponse.File {
  const file = new CodeGeneratorResponse.File();
  file.setName(filename);
  file.setContent(output);
  return file;
}

type CallingTypes = {
  requestType: string
  responseType: string
}

function getCallingTypes(method: MethodDescriptorProto, exportMap: ExportMap): CallingTypes {
  return {
    requestType: getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap),
    responseType: getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap),
  };
}

function isUsed(fileDescriptor: FileDescriptorProto, pseudoNamespace: string, exportMap: ExportMap) {
  return fileDescriptor.getServiceList().some(service => {
    return service.getMethodList().some(method => {
      const callingTypes = getCallingTypes(method, exportMap);
      const namespacePackage = pseudoNamespace + ".";
      return (
        callingTypes.requestType.indexOf(namespacePackage) === 0 ||
        callingTypes.responseType.indexOf(namespacePackage) === 0
      );
    });
  });
}

type ImportDescriptor = {
  readonly namespace: string
  readonly path: string
};

type RPCMethodDescriptor = {
  readonly name: string,
  readonly serviceName: string,
  readonly requestStream: boolean
  readonly responseStream: boolean
  readonly requestType: string
  readonly responseType: string
};

class RPCDescriptor {
  private readonly grpcService: GrpcWebServiceDescriptor;
  private readonly protoService: ServiceDescriptorProto;
  private readonly exportMap: ExportMap;

  constructor(grpcService: GrpcWebServiceDescriptor, protoService: ServiceDescriptorProto, exportMap: ExportMap) {
    this.grpcService = grpcService;
    this.protoService = protoService;
    this.exportMap = exportMap;
  }
  get name(): string {
    return this.protoService.getName();
  }

  get qualifiedName(): string {
    return (this.grpcService.packageName ? `${this.grpcService.packageName}.` : "") + this.name;
  }

  get methods(): RPCMethodDescriptor[] {
    return this.protoService.getMethodList()
      .map(method => {
        const callingTypes = getCallingTypes(method, this.exportMap);
        return {
          name: method.getName(),
          serviceName: this.name,
          requestStream: method.getClientStreaming(),
          responseStream: method.getServerStreaming(),
          requestType: callingTypes.requestType,
          responseType: callingTypes.responseType,
        }
      });
  }
}

class GrpcWebServiceDescriptor {
  private readonly fileDescriptor: FileDescriptorProto;
  private readonly exportMap: ExportMap;
  private readonly pathToRoot: string;

  constructor(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
    this.fileDescriptor = fileDescriptor;
    this.exportMap = exportMap;
    this.pathToRoot = getPathToRoot(fileDescriptor.getName())
  }

  get filename(): string {
    return this.fileDescriptor.getName();
  }

  get packageName(): string {
    return this.fileDescriptor.getPackage();
  }

  get imports(): ImportDescriptor[] {
    const dependencies = this.fileDescriptor.getDependencyList()
      .filter(dependency => isUsed(this.fileDescriptor, filePathToPseudoNamespace(dependency), this.exportMap))
      .map(dependency => {
        const namespace = filePathToPseudoNamespace(dependency);
        if (dependency in WellKnownTypesMap) {
          return {
            namespace,
            path: WellKnownTypesMap[dependency],
          }
        } else {
          return {
            namespace,
            path: `${this.pathToRoot}${filePathFromProtoWithoutExtension(filePathFromProtoWithoutExtension(dependency))}`
          }
        }
      });
    const hostProto = {
      namespace: filePathToPseudoNamespace(this.filename),
      path: `${this.pathToRoot}${filePathFromProtoWithoutExtension(this.filename)}`,
    };
    return [ hostProto ].concat(dependencies);
  }

  get services(): RPCDescriptor[] {
    return this.fileDescriptor.getServiceList()
      .map(service => {
        return new RPCDescriptor(this, service, this.exportMap);
      })
  }
}

function generateTypescriptDefinition(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  const serviceDescriptor = new GrpcWebServiceDescriptor(fileDescriptor, exportMap);
  const printer = new Printer(0);

  // Header.
  printer.printLn(`// package: ${serviceDescriptor.packageName}`);
  printer.printLn(`// file: ${serviceDescriptor.filename}`);
  printer.printEmptyLn();

  printer.printLn(`import {grpc} from "grpc-web-client";`)

  // Import statements.
  serviceDescriptor.imports
    .forEach(importDescriptor => {
      printer.printLn(`import * as ${importDescriptor.namespace} from "${importDescriptor.path}";`);
    });
  printer.printEmptyLn();

  // Services.
  serviceDescriptor.services
    .forEach(service => {

      // Method Type Definitions
      service.methods.forEach(method => {
        printer.printLn(`type ${method.serviceName}${method.name} = {`);
        printer.printIndentedLn(`readonly methodName: string;`);
        printer.printIndentedLn(`readonly service: typeof ${method.serviceName};`);
        printer.printIndentedLn(`readonly requestStream: ${method.requestStream};`);
        printer.printIndentedLn(`readonly responseStream: ${method.responseStream};`);
        printer.printIndentedLn(`readonly requestType: typeof ${method.requestType};`);
        printer.printIndentedLn(`readonly responseType: typeof ${method.responseType};`);
        printer.printLn(`};`);

        printer.printEmptyLn();
      });

      printer.printLn(`export class ${service.name} {`);
      printer.printIndentedLn(`static readonly serviceName: string;`);
      service.methods.forEach(method => {
        printer.printIndentedLn(`static readonly ${method.name}: ${method.serviceName}${method.name};`);
      });
      printer.printLn(`}`);
      printer.printEmptyLn();

      // Add a client stub that talks with the grpc-web-client library
      printServiceStub(printer, service, exportMap);
    });

  return printer.getOutput();
}

function generateJavaScript(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  const serviceDescriptor = new GrpcWebServiceDescriptor(fileDescriptor, exportMap);
  const printer = new Printer(0);

  // Header.
  printer.printLn(`// package: ${serviceDescriptor.packageName}`);
  printer.printLn(`// file: ${serviceDescriptor.filename}`);
  printer.printEmptyLn();

  // Import Statements
  serviceDescriptor.imports
    .forEach(importDescriptor => {
      printer.printLn(`var ${importDescriptor.namespace} = require("${importDescriptor.path}");`);
    });
  printer.printEmptyLn();

  // Services.
  serviceDescriptor.services
    .forEach(service => {
      printer.printLn(`var ${service.name} = (function () {`);
      printer.printIndentedLn(`function ${service.name}() {}`);
      printer.printIndentedLn(`${service.name}.serviceName = "${service.qualifiedName}";`);
      printer.printIndentedLn(`return ${service.name};`);
      printer.printLn(`}());`);
      printer.printEmptyLn();

    service.methods
      .forEach(method => {
        printer.print(`${method.serviceName}.${method.name} = {`);
        printer.printIndentedLn(`methodName: "${method.name}",`);
        printer.printIndentedLn(`service: ${method.serviceName},`);
        printer.printIndentedLn(`requestStream: ${method.requestStream},`);
        printer.printIndentedLn(`responseStream: ${method.responseStream},`);
        printer.printIndentedLn(`requestType: ${method.requestType},`);
        printer.printIndentedLn(`responseType: ${method.responseType}`);
        printer.printLn(`};`);
        printer.printEmptyLn();
    });

    printer.printLn(`exports.${service.name} = ${service.name};`);
    printer.printEmptyLn();
  });

  return printer.getOutput();
}

function printServiceStub(methodPrinter: Printer, service: ServiceDescriptorProto, exportMap: ExportMap) {

  const printer = new CodePrinter(0, methodPrinter);

  printer.printLn(`export type ServerStreamEventType = 'data'|'end';`);

  printer.printLn(`export class ${service.getName()}Client {`)
    .indent().printLn(`constructor(public serviceHost: string) {`)
             .printLn(`}`);

  service.getMethodList().forEach((method: MethodDescriptorProto) => {
    const requestMessageTypeName = getFieldType(MESSAGE_TYPE, method.getInputType().slice(1), "", exportMap);
    const responseMessageTypeName = getFieldType(MESSAGE_TYPE, method.getOutputType().slice(1), "", exportMap);
    const camelCaseMethodName = method.getName()[0].toLowerCase() + method.getName().substr(1);

    if (method.getClientStreaming() && method.getServerStreaming()) {
      printBidirectionalStubMethod(
        printer,
        camelCaseMethodName
      );
    } else if (method.getClientStreaming()) {
      printClientStreamStubMethod(
        printer,
        camelCaseMethodName
      );
    } else if (method.getServerStreaming()) {
      printServerStreamStubMethod(
        printer,
        service,
        method,
        camelCaseMethodName,
        requestMessageTypeName,
        responseMessageTypeName
      );
    } else {
      printUnaryStubMethod(
        printer,
        service,
        method,
        camelCaseMethodName,
        requestMessageTypeName,
        responseMessageTypeName
      );
    }
  });
  printer.dedent().printLn("}");
}

function printUnaryStubMethod(
  printer: CodePrinter,
  service: ServiceDescriptorProto,
  method: MethodDescriptorProto,
  camelCaseMethodName: string,
  requestMessageTypeName: string,
  responseMessageTypeName: string
) {
  printer
             .printLn(`${camelCaseMethodName}(`)
      .indent().printLn(`requestMessage: ${requestMessageTypeName},`)
               .printLn(`metadata?: grpc.Metadata,`)
               .printLn(`callback?: (error: any, responseMessage: ${responseMessageTypeName}|null) => void`)
    .dedent().printLn(`): void {`)
      .indent().printLn(`grpc.unary(${service.getName()}.${method.getName()}, {`)
        .indent().printLn(`request: requestMessage,`)
                 .printLn(`host: this.serviceHost,`)
                 .printLn(`metadata,`)
                 .printLn(`onEnd: (response: grpc.UnaryOutput<${responseMessageTypeName}>): void => {`)
          .indent().printLn(`if (callback) {`)
            .indent().printLn(`const responseMessage = response.message;`)
                     .printLn(`if (response.status !== grpc.Code.OK) {`)
              .indent().printLn(`return callback(response, null);`)
            .dedent().printLn(`} else {`)
              .indent().printLn(`callback(null, responseMessage);`)
            .dedent().printLn(`}`)
          .dedent().printLn(`}`)
        .dedent().printLn(`}`)
      .dedent().printLn(`});`)
    .dedent().printLn(`}`);
}

function printServerStreamStubMethod(
  printer: CodePrinter,
  service: ServiceDescriptorProto,
  method: MethodDescriptorProto,
  camelCaseMethodName: string,
  requestMessageTypeName: string,
  responseMessageTypeName: string
) {
  printer
           .printLn(`${camelCaseMethodName}(requestMessage: ${requestMessageTypeName}, metadata?: grpc.Metadata): any {`)
    .indent().printLn(`const listeners: {`)
      .indent().printLn(`data: Array<(response: ${responseMessageTypeName}) => void>,`)
               .printLn(`end: Array<() => void>`)
    .dedent().printLn(`} = {`)
      .indent().printLn(`data: [],`)
               .printLn(`end: []`)
    .dedent().printLn(`};`)
             .printLn(`grpc.invoke(${service.getName()}.${method.getName()}, {`)
      .indent().printLn(`request: requestMessage,`)
               .printLn(`host: this.serviceHost,`)
               .printLn(`metadata,`)
               .printLn(`onMessage: (responseMessage: ${responseMessageTypeName}) => {`)
        .indent().printLn(`listeners.data.forEach(callback => {`)
          .indent().printLn(`callback(responseMessage);`)
        .dedent().printLn(`});`)
               .printLn(`},`)
               .printLn(`onEnd: () => {`)
          .indent().printLn(`listeners.end.forEach(callback => {`)
                   .printLn(`callback();`)
        .dedent().printLn(`});`)
      .dedent().printLn(`}`)
    .dedent().printLn(`});`)
             .printLn(`return {`)
      .indent().printLn(`on: (eventType: ServerStreamEventType, callback: (response: ${responseMessageTypeName}|undefined) => void): void => {`)
        .indent().printLn(`if (eventType === 'data') {`)
          .indent().printLn(`listeners.data.push(callback as (response: ${responseMessageTypeName}) => void);`)
        .dedent().printLn(`} else if (eventType === 'end') {`)
          .indent().printLn(`listeners.end.push(callback as () => void);`)
        .dedent().printLn(`}`)
      .dedent().printLn(`}`)
    .dedent().printLn(`};`)
  .dedent().printLn(`}`);
}

function printBidirectionalStubMethod(
  printer: CodePrinter,
  camelCaseMethodName: string
) {
  printer
           .printLn(`${camelCaseMethodName}() {`)
    .indent().printLn(`throw new Error("Bi-directional streaming is not currently supported");`)
  .dedent().printLn(`}`);
}
function printClientStreamStubMethod(
  printer: CodePrinter,
  camelCaseMethodName: string
) {
  printer
           .printLn(`${camelCaseMethodName}() {`)
    .indent().printLn(`throw new Error("Client streaming is not currently supported");`)
  .dedent().printLn(`}`);
}
