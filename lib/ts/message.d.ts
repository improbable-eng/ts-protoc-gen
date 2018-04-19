import { ExportMap } from "../ExportMap";
import { FileDescriptorProto, DescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
export declare function printMessage(fileName: string, exportMap: ExportMap, messageDescriptor: DescriptorProto, indentLevel: number, fileDescriptor: FileDescriptorProto): string;
