import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {createFile, RPCDescriptor, GrpcServiceDescriptor, RPCMethodDescriptor} from "./common";
import { ModeParameter } from "../parameters";

export function generateGrpcNodeService(filename: string, descriptor: FileDescriptorProto, exportMap: ExportMap, modeParameter: ModeParameter): CodeGeneratorResponse.File {
  const definitionFilename = filename.replace(/_pb$/, "_grpc_pb.d.ts");
  return createFile(generateTypeScriptDefinition(descriptor, exportMap, modeParameter), definitionFilename);
}

function generateTypeScriptDefinition(fileDescriptor: FileDescriptorProto, exportMap: ExportMap, modeParameter: ModeParameter): string {
  const serviceDescriptor = new GrpcServiceDescriptor(fileDescriptor, exportMap);
  const printer = new Printer(0);

  const hasServices = serviceDescriptor.services.length > 0;

  // Header.
  if (hasServices) {
    printer.printLn("// GENERATED CODE -- DO NOT EDIT!");
    printer.printEmptyLn();
  } else {
    printer.printLn("// GENERATED CODE -- NO SERVICES IN PROTO");
    return printer.getOutput();
  }

  printer.printLn(`// package: ${serviceDescriptor.packageName}`);
  printer.printLn(`// file: ${serviceDescriptor.filename}`);
  printer.printEmptyLn();

  // Import statements.
  serviceDescriptor.imports
    .forEach(importDescriptor => {
      printer.printLn(`import * as ${importDescriptor.namespace} from "${importDescriptor.path}";`);
    });
  const importPackage = modeParameter === ModeParameter.GrpcJs ? "@grpc/grpc-js" : "grpc";
  printer.printLn(`import * as grpc from "${importPackage}";`);

  // Services.
  serviceDescriptor.services
    .forEach(service => {
      printer.printEmptyLn();
      printService(printer, service);
      printer.printEmptyLn();
      printClient(printer, service);
    });

  return printer.getOutput();
}

function printService(printer: Printer, service: RPCDescriptor) {
  const serviceName = `${service.name}Service`;
  printer.printLn(`interface I${serviceName} extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {`);
  service.methods
    .forEach(method => {
      const methodType = `grpc.MethodDefinition<${method.requestType}, ${method.responseType}>`;
      printer.printIndentedLn(`${method.nameAsCamelCase}: ${methodType};`);
    });
  printer.printLn("}");
  printer.printEmptyLn();
  printer.printLn(`export const ${serviceName}: I${serviceName};`);
}

function printClient(printer: Printer, service: RPCDescriptor) {
  printer.printLn(`export class ${service.name}Client extends grpc.Client {`);
  printer.printIndentedLn("constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);");
  service.methods
    .forEach(method => {
      if (!method.requestStream && !method.responseStream) {
        printUnaryRequestMethod(printer, method);
      } else if (!method.requestStream) {
        printServerStreamRequestMethod(printer, method);
      } else if (!method.responseStream) {
        printClientStreamRequestMethod(printer, method);
      } else {
        printBidiStreamRequest(printer, method);
      }
    });
  printer.printLn("}");
}

const metadata = "metadata: grpc.Metadata | null";
const options = "options: grpc.CallOptions | null";
const metadataOrOptions = "metadataOrOptions: grpc.Metadata | grpc.CallOptions | null";

const optionalMetadata = "metadata?: grpc.Metadata | null";
const optionalOptions = "options?: grpc.CallOptions | null";
const optionalMetadataOrOptions = "metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null";

function printUnaryRequestMethod(printer: Printer, method: RPCMethodDescriptor) {
  const name = method.nameAsCamelCase;
  const argument = `argument: ${method.requestType}`;
  const callback = `callback: grpc.requestCallback<${method.responseType}>`;
  const returnType = "grpc.ClientUnaryCall";

  printer.printIndentedLn(`${name}(${argument}, ${callback}): ${returnType};`);
  printer.printIndentedLn(`${name}(${argument}, ${metadataOrOptions}, ${callback}): ${returnType};`);
  printer.printIndentedLn(`${name}(${argument}, ${metadata}, ${options}, ${callback}): ${returnType};`);
}

function printServerStreamRequestMethod(printer: Printer, method: RPCMethodDescriptor) {
  const name = method.nameAsCamelCase;
  const argument = `argument: ${method.requestType}`;
  const returnType = `grpc.ClientReadableStream<${method.responseType}>`;

  printer.printIndentedLn(`${name}(${argument}, ${optionalMetadataOrOptions}): ${returnType};`);
  printer.printIndentedLn(`${name}(${argument}, ${optionalMetadata}, ${optionalOptions}): ${returnType};`);
}

function printClientStreamRequestMethod(printer: Printer, method: RPCMethodDescriptor) {
  const name = method.nameAsCamelCase;
  const callback = `callback: grpc.requestCallback<${method.responseType}>`;
  const returnType = `grpc.ClientWritableStream<${method.requestType}>`;

  printer.printIndentedLn(`${name}(${callback}): grpc.ClientWritableStream<${method.requestType}>;`);
  printer.printIndentedLn(`${name}(${metadataOrOptions}, ${callback}): ${returnType};`);
  printer.printIndentedLn(`${name}(${metadata}, ${options}, ${callback}): ${returnType};`);
}

function printBidiStreamRequest(printer: Printer, method: RPCMethodDescriptor) {
  const name = method.nameAsCamelCase;
  const returnType = `grpc.ClientDuplexStream<${method.requestType}, ${method.responseType}>`;

  printer.printIndentedLn(`${name}(${optionalMetadataOrOptions}): ${returnType};`);
  printer.printIndentedLn(`${name}(${optionalMetadata}, ${optionalOptions}): ${returnType};`);
}
