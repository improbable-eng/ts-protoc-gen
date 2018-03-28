import {filePathToPseudoNamespace, filePathFromProtoWithoutExtension, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
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