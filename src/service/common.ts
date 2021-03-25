import {CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {FileDescriptorProto, MethodDescriptorProto, ServiceDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {ExportMap} from "../ExportMap";
import {WellKnownTypesMap} from "../WellKnown";
import {getFieldType, MESSAGE_TYPE} from "../ts/FieldTypes";
import {
  filePathToPseudoNamespace,
  replaceProtoSuffix,
  getPathToRoot,
  normaliseFieldObjectName,
  throwError
} from "../util";

export function createFile(output: string, filename: string): CodeGeneratorResponse.File {
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
  const inputType = method.getInputType() || throwError("Missing input type");
  const outputType = method.getOutputType() || throwError("Missing output type");
  return {
    requestType: getFieldType(MESSAGE_TYPE, inputType.slice(1), "", exportMap),
    responseType: getFieldType(MESSAGE_TYPE, outputType.slice(1), "", exportMap),
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

export type ImportDescriptor = {
  readonly namespace: string
  readonly path: string
};

export type RPCMethodDescriptor = {
  readonly nameAsPascalCase: string,
  readonly nameAsCamelCase: string,
  readonly functionName: string,
  readonly serviceName: string,
  readonly requestStream: boolean
  readonly responseStream: boolean
  readonly requestType: string
  readonly responseType: string
};

export class RPCDescriptor {
  private readonly grpcService: GrpcServiceDescriptor;
  private readonly protoService: ServiceDescriptorProto;
  private readonly exportMap: ExportMap;

  constructor(grpcService: GrpcServiceDescriptor, protoService: ServiceDescriptorProto, exportMap: ExportMap) {
    this.grpcService = grpcService;
    this.protoService = protoService;
    this.exportMap = exportMap;
  }
  get name(): string {
    return this.protoService.getName() || throwError("Missing service name");
  }

  get qualifiedName(): string {
    return (this.grpcService.packageName ? `${this.grpcService.packageName}.` : "") + this.name;
  }

  get methods(): RPCMethodDescriptor[] {
    return this.protoService.getMethodList()
      .map(method => {
        const callingTypes = getCallingTypes(method, this.exportMap);
        const methodName = method.getName() || throwError("Missing method name");
        const nameAsCamelCase = methodName[0].toLowerCase() + methodName.substr(1);
        const clientStreaming = method.getClientStreaming();
        if (clientStreaming === undefined) throwError("Missing client streaming");
        const serverStreaming = method.getServerStreaming();
        if (serverStreaming === undefined) throwError("Missing server streaming");
        return {
          nameAsPascalCase: methodName,
          nameAsCamelCase,
          functionName: normaliseFieldObjectName(nameAsCamelCase),
          serviceName: this.name,
          requestStream: clientStreaming || false,
          responseStream: serverStreaming || false,
          requestType: callingTypes.requestType,
          responseType: callingTypes.responseType,
        };
      });
  }
}

export class GrpcServiceDescriptor {
  private readonly fileDescriptor: FileDescriptorProto;
  private readonly exportMap: ExportMap;
  private readonly pathToRoot: string;

  constructor(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
    this.fileDescriptor = fileDescriptor;
    this.exportMap = exportMap;
    const fileDescriptorName = fileDescriptor.getName() || throwError("Missing file descriptor name for service");
    this.pathToRoot = getPathToRoot(fileDescriptorName);
  }

  get filename(): string {
    return this.fileDescriptor.getName() || throwError("Missing file descriptor name for service");
  }

  get packageName(): string {
    return this.fileDescriptor.getPackage() || "";
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
