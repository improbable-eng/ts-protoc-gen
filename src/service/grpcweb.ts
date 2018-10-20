import {filePathToPseudoNamespace, normaliseFieldObjectName, replaceProtoSuffix, getPathToRoot} from "../util";
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
};

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
  readonly nameAsPascalCase: string,
  readonly nameAsCamelCase: string,
  readonly functionName: string,
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
        const nameAsCamelCase = method.getName()[0].toLowerCase() + method.getName().substr(1);
        return {
          nameAsPascalCase: method.getName(),
          nameAsCamelCase,
          functionName: normaliseFieldObjectName(nameAsCamelCase),
          serviceName: this.name,
          requestStream: method.getClientStreaming(),
          responseStream: method.getServerStreaming(),
          requestType: callingTypes.requestType,
          responseType: callingTypes.responseType,
        };
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
    this.pathToRoot = getPathToRoot(fileDescriptor.getName());
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
          };
        } else {
          return {
            namespace,
            path: `${this.pathToRoot}${replaceProtoSuffix(replaceProtoSuffix(dependency))}`
          };
        }
      });
    const hostProto = {
      namespace: filePathToPseudoNamespace(this.filename),
      path: `${this.pathToRoot}${replaceProtoSuffix(this.filename)}`,
    };
    return [ hostProto ].concat(dependencies);
  }

  get services(): RPCDescriptor[] {
    return this.fileDescriptor.getServiceList()
      .map(service => {
        return new RPCDescriptor(this, service, this.exportMap);
      });
  }
}

function generateTypescriptDefinition(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  const serviceDescriptor = new GrpcWebServiceDescriptor(fileDescriptor, exportMap);
  const printer = new Printer(0);

  // Header.
  printer.printLn(`// package: ${serviceDescriptor.packageName}`);
  printer.printLn(`// file: ${serviceDescriptor.filename}`);
  printer.printEmptyLn();

  if (serviceDescriptor.services.length === 0) {
    return printer.getOutput();
  }

  // Import statements.
  serviceDescriptor.imports
    .forEach(importDescriptor => {
      printer.printLn(`import * as ${importDescriptor.namespace} from "${importDescriptor.path}";`);
    });
  printer.printLn(`import {grpc} from "grpc-web-client";`);
  printer.printEmptyLn();

  // Services.
  serviceDescriptor.services
    .forEach(service => {

      // Method Type Definitions
      service.methods.forEach(method => {
        printer.printLn(`type ${method.serviceName}${method.nameAsPascalCase} = {`);
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
        printer.printIndentedLn(`static readonly ${method.nameAsPascalCase}: ${method.serviceName}${method.nameAsPascalCase};`);
      });
      printer.printLn(`}`);
      printer.printEmptyLn();
    });



  printer.printLn(`export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }`);
  printer.printLn(`export type Status = { details: string, code: number; metadata: grpc.Metadata }`);
  printer.printLn(`export type ServiceClientOptions = { transport?: grpc.TransportConstructor; debug?: boolean }`);
  printer.printEmptyLn();
  printer.printLn("interface UnaryResponse {");
  printer.printIndentedLn("cancel(): void;");
  printer.printLn("}");
  printer.printLn(`interface ResponseStream<T> {`);
  printer.printIndentedLn(`cancel(): void;`);
  printer.printIndentedLn(`on(type: 'data', handler: (message: T) => void): ResponseStream<T>;`);
  printer.printIndentedLn(`on(type: 'end', handler: () => void): ResponseStream<T>;`);
  printer.printIndentedLn(`on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;`);
  printer.printLn(`}`);
  printer.printLn(`interface RequestStream<T> {`);
  printer.printIndentedLn(`write(message: T): RequestStream<T>;`);
  printer.printIndentedLn(`end(): void;`);
  printer.printIndentedLn(`cancel(): void;`);
  printer.printIndentedLn(`on(type: 'end', handler: () => void): RequestStream<T>;`);
  printer.printIndentedLn(`on(type: 'status', handler: (status: Status) => void): RequestStream<T>;`);
  printer.printLn(`}`);
  printer.printLn(`interface BidirectionalStream<ReqT, ResT> {`);
  printer.printIndentedLn(`write(message: ReqT): BidirectionalStream<ReqT, ResT>;`);
  printer.printIndentedLn(`end(): void;`);
  printer.printIndentedLn(`cancel(): void;`);
  printer.printIndentedLn(`on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;`);
  printer.printIndentedLn(`on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;`);
  printer.printIndentedLn(`on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;`);
  printer.printLn(`}`);
  printer.printEmptyLn();

  // Add a client stub that talks with the grpc-web-client library
  serviceDescriptor.services
    .forEach(service => {
      printServiceStubTypes(printer, service);
      printer.printEmptyLn();
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

  if (serviceDescriptor.services.length === 0) {
    return printer.getOutput();
  }

  // Import Statements
  serviceDescriptor.imports
    .forEach(importDescriptor => {
      printer.printLn(`var ${importDescriptor.namespace} = require("${importDescriptor.path}");`);
    });
  printer.printLn(`var grpc = require("grpc-web-client").grpc;`);
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
          printer.printLn(`${method.serviceName}.${method.nameAsPascalCase} = {`);
          printer.printIndentedLn(`methodName: "${method.nameAsPascalCase}",`);
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

      // Add a client stub that talks with the grpc-web-client library
      printServiceStub(printer, service);

      printer.printEmptyLn();
    });

  return printer.getOutput();
}

function printServiceStub(methodPrinter: Printer, service: RPCDescriptor) {
  const printer = new CodePrinter(0, methodPrinter);

  printer
           .printLn(`function ${service.name}Client(serviceHost, options) {`)
    .indent().printLn(`this.serviceHost = serviceHost;`)
             .printLn(`this.options = options || {};`)
  .dedent().printLn(`}`)
    .printEmptyLn();

  service.methods.forEach((method: RPCMethodDescriptor) => {
    if (method.requestStream && method.responseStream) {
      printBidirectionalStubMethod(printer, method);
    } else if (method.requestStream) {
      printClientStreamStubMethod(printer, method);
    } else if (method.responseStream) {
      printServerStreamStubMethod(printer, method);
    } else {
      printUnaryStubMethod(printer, method);
    }
    printer.printEmptyLn();
  });
  printer.printLn(`exports.${service.name}Client = ${service.name}Client;`);
}

function printUnaryStubMethod(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer
             .printLn(`${method.serviceName}Client.prototype.${method.nameAsCamelCase} = function ${method.functionName}(requestMessage, metadata, callback) {`)
      .indent().printLn(`if (arguments.length === 2) {`)
        .indent().printLn(`callback = arguments[1];`)
      .dedent().printLn("}")
               .printLn(`var client = grpc.unary(${method.serviceName}.${method.nameAsPascalCase}, {`)
        .indent().printLn(`request: requestMessage,`)
                 .printLn(`host: this.serviceHost,`)
                 .printLn(`metadata: metadata,`)
                 .printLn(`transport: this.options.transport,`)
                 .printLn(`debug: this.options.debug,`)
                 .printLn(`onEnd: function (response) {`)
          .indent().printLn(`if (callback) {`)
            .indent().printLn(`if (response.status !== grpc.Code.OK) {`)
              .indent().printLn(`var err = new Error(response.statusMessage);`)
                       .printLn(`err.code = response.status;`)
                       .printLn(`err.metadata = response.trailers;`)
                       .printLn(`callback(err, null);`)
            .dedent().printLn(`} else {`)
              .indent().printLn(`callback(null, response.message);`)
            .dedent().printLn(`}`)
          .dedent().printLn(`}`)
        .dedent().printLn(`}`)
      .dedent().printLn(`});`)
             .printLn(`return {`)
      .indent().printLn(`cancel: function () {`)
        .indent().printLn(`callback = null;`)
                 .printLn(`client.close();`)
      .dedent().printLn(`}`)
    .dedent().printLn(`};`)
  .dedent().printLn(`};`);
}

function printServerStreamStubMethod(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer
           .printLn(`${method.serviceName}Client.prototype.${method.nameAsCamelCase} = function ${method.functionName}(requestMessage, metadata) {`)
    .indent().printLn(`var listeners = {`)
      .indent().printLn(`data: [],`)
               .printLn(`end: [],`)
               .printLn(`status: []`)
    .dedent().printLn(`};`)
             .printLn(`var client = grpc.invoke(${method.serviceName}.${method.nameAsPascalCase}, {`)
      .indent().printLn(`request: requestMessage,`)
               .printLn(`host: this.serviceHost,`)
               .printLn(`metadata: metadata,`)
               .printLn(`transport: this.options.transport,`)
               .printLn(`debug: this.options.debug,`)
               .printLn(`onMessage: function (responseMessage) {`)
        .indent().printLn(`listeners.data.forEach(function (handler) {`)
          .indent().printLn(`handler(responseMessage);`)
        .dedent().printLn(`});`)
      .dedent().printLn(`},`)
               .printLn(`onEnd: function (status, statusMessage, trailers) {`)
        .indent().printLn(`listeners.end.forEach(function (handler) {`)
          .indent().printLn(`handler();`)
        .dedent().printLn(`});`)
                 .printLn(`listeners.status.forEach(function (handler) {`)
          .indent().printLn(`handler({ code: status, details: statusMessage, metadata: trailers });`)
        .dedent().printLn(`});`)
                 .printLn(`listeners = null;`)
      .dedent().printLn(`}`)
    .dedent().printLn(`});`)
             .printLn(`return {`)
      .indent().printLn(`on: function (type, handler) {`)
        .indent().printLn(`listeners[type].push(handler);`)
                 .printLn(`return this;`)
      .dedent().printLn(`},`)
               .printLn(`cancel: function () {`)
        .indent().printLn(`listeners = null;`)
                 .printLn(`client.close();`)
      .dedent().printLn(`}`)
    .dedent().printLn(`};`)
  .dedent().printLn(`};`);
}

function printClientStreamStubMethod(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer
           .printLn(`${method.serviceName}Client.prototype.${method.nameAsCamelCase} = function ${method.functionName}(metadata) {`)
    .indent().printLn(`var listeners = {`)
      .indent().printLn(`end: [],`)
               .printLn(`status: []`)
    .dedent().printLn(`};`)
             .printLn(`var client = grpc.client(${method.serviceName}.${method.nameAsPascalCase}, {`)
      .indent().printLn(`host: this.serviceHost,`)
               .printLn(`metadata: metadata,`)
               .printLn(`transport: this.options.transport`)
    .dedent().printLn(`});`)
             .printLn(`client.onEnd(function (status, statusMessage, trailers) {`)
      .indent().printLn(`listeners.end.forEach(function (handler) {`)
        .indent().printLn(`handler();`)
      .dedent().printLn(`});`)
               .printLn(`listeners.status.forEach(function (handler) {`)
        .indent().printLn(`handler({ code: status, details: statusMessage, metadata: trailers });`)
      .dedent().printLn(`});`)
               .printLn(`listeners = null;`)
    .dedent().printLn(`});`)
             .printLn(`return {`)
      .indent().printLn(`on: function (type, handler) {`)
        .indent().printLn(`listeners[type].push(handler);`)
                 .printLn(`return this;`)
      .dedent().printLn(`},`)
               .printLn(`write: function (requestMessage) {`)
        .indent().printLn(`if (!client.started) {`)
          .indent().printLn(`client.start(metadata);`)
        .dedent().printLn(`}`)
                 .printLn(`client.send(requestMessage);`)
                 .printLn(`return this;`)
      .dedent().printLn(`},`)
               .printLn(`end: function () {`)
        .indent().printLn(`client.finishSend();`)
      .dedent().printLn(`},`)
               .printLn(`cancel: function () {`)
        .indent().printLn(`listeners = null;`)
                 .printLn(`client.close();`)
      .dedent().printLn(`}`)
    .dedent().printLn(`};`)
  .dedent().printLn(`};`);
}

function printBidirectionalStubMethod(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer
           .printLn(`${method.serviceName}Client.prototype.${method.nameAsCamelCase} = function ${method.functionName}(metadata) {`)
    .indent().printLn(`var listeners = {`)
      .indent().printLn(`data: [],`)
               .printLn(`end: [],`)
               .printLn(`status: []`)
    .dedent().printLn(`};`)
             .printLn(`var client = grpc.client(${method.serviceName}.${method.nameAsPascalCase}, {`)
      .indent().printLn(`host: this.serviceHost,`)
               .printLn(`metadata: metadata,`)
               .printLn(`transport: this.options.transport`)
    .dedent().printLn(`});`)
             .printLn(`client.onEnd(function (status, statusMessage, trailers) {`)
      .indent().printLn(`listeners.end.forEach(function (handler) {`)
        .indent().printLn(`handler();`)
      .dedent().printLn(`});`)
               .printLn(`listeners.status.forEach(function (handler) {`)
        .indent().printLn(`handler({ code: status, details: statusMessage, metadata: trailers });`)
      .dedent().printLn(`});`)
               .printLn(`listeners = null;`)
    .dedent().printLn(`});`)
             .printLn(`client.onMessage(function (message) {`)
      .indent().printLn(`listeners.data.forEach(function (handler) {`)
        .indent().printLn(`handler(message);`)
      .dedent().printLn(`})`)
    .dedent().printLn(`});`)
             .printLn(`client.start(metadata);`)
             .printLn(`return {`)
      .indent().printLn(`on: function (type, handler) {`)
        .indent().printLn(`listeners[type].push(handler);`)
                 .printLn(`return this;`)
      .dedent().printLn(`},`)
               .printLn(`write: function (requestMessage) {`)
        .indent().printLn(`client.send(requestMessage);`)
                 .printLn(`return this;`)
      .dedent().printLn(`},`)
               .printLn(`end: function () {`)
        .indent().printLn(`client.finishSend();`)
      .dedent().printLn(`},`)
               .printLn(`cancel: function () {`)
        .indent().printLn(`listeners = null;`)
                 .printLn(`client.close();`)
      .dedent().printLn(`}`)
    .dedent().printLn(`};`)
  .dedent().printLn(`};`);
}

function printServiceStubTypes(methodPrinter: Printer, service: RPCDescriptor) {
  const printer = new CodePrinter(0, methodPrinter);

  printer
           .printLn(`export class ${service.name}Client {`)
    .indent().printLn(`readonly serviceHost: string;`)
        .printEmptyLn()
             .printLn(`constructor(serviceHost: string, options?: ServiceClientOptions);`);

  service.methods.forEach((method: RPCMethodDescriptor) => {
    if (method.requestStream && method.responseStream) {
      printBidirectionalStubMethodTypes(printer, method);
    } else if (method.requestStream) {
      printClientStreamStubMethodTypes(printer, method);
    } else if (method.responseStream) {
      printServerStreamStubMethodTypes(printer, method);
    } else {
      printUnaryStubMethodTypes(printer, method);
    }
  });
  printer.dedent().printLn("}");
}

function printUnaryStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer
             .printLn(`${method.nameAsCamelCase}(`)
      .indent().printLn(`requestMessage: ${method.requestType},`)
               .printLn(`metadata: grpc.Metadata,`)
               .printLn(`callback: (error: ServiceError|null, responseMessage: ${method.responseType}|null) => void`)
    .dedent().printLn(`): UnaryResponse;`)
             .printLn(`${method.nameAsCamelCase}(`)
      .indent().printLn(`requestMessage: ${method.requestType},`)
               .printLn(`callback: (error: ServiceError|null, responseMessage: ${method.responseType}|null) => void`)
    .dedent().printLn(`): UnaryResponse;`);
}

function printServerStreamStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer.printLn(`${method.nameAsCamelCase}(requestMessage: ${method.requestType}, metadata?: grpc.Metadata): ResponseStream<${method.responseType}>;`);
}

function printClientStreamStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer.printLn(`${method.nameAsCamelCase}(metadata?: grpc.Metadata): RequestStream<${method.requestType}>;`);
}

function printBidirectionalStubMethodTypes(printer: CodePrinter, method: RPCMethodDescriptor) {
  printer.printLn(`${method.nameAsCamelCase}(metadata?: grpc.Metadata): BidirectionalStream<${method.requestType}, ${method.responseType}>;`);
}
