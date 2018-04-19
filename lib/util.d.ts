/// <reference types="node" />
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { ExportEnumEntry, ExportMessageEntry } from "./ExportMap";
export declare function filePathToPseudoNamespace(filePath: string): string;
export declare function snakeToCamel(str: string): string;
export declare function uppercaseFirst(str: string): string;
export declare function isProto2(fileDescriptor: FileDescriptorProto): boolean;
export declare function oneOfName(name: string): string;
export declare function generateIndent(indentLevel: number): string;
export declare function getPathToRoot(fileName: string): string;
export declare function withinNamespaceFromExportEntry(name: string, exportEntry: ExportMessageEntry | ExportEnumEntry): string;
export declare function filePathFromProtoWithoutExtension(protoFilePath: string): string;
export declare function withAllStdIn(callback: (buffer: Buffer) => void): void;
export declare function normaliseFieldObjectName(name: string): string;
