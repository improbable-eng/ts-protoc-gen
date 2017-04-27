import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {ExportEnumEntry, ExportMessageEntry} from "./ExportMap";
export function filePathToPseudoNamespace(filePath: string): string {
  return filePath.replace(".proto", "").replace(/\//g, "_").replace(/\./g, "_").replace(/\-/g, "_") + "_pb";
}

export function snakeToCamel(str: string): string {
  return str.replace(/(\_\w)/g, function(m){
    return m[1].toUpperCase();
  });
}

export function uppercaseFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PROTO2_SYNTAX = "proto2";
export function isProto2(fileDescriptor: FileDescriptorProto): boolean {
  // Empty syntax defaults to proto2
  return (fileDescriptor.getSyntax() === "" || fileDescriptor.getSyntax() === PROTO2_SYNTAX);
}

export function oneOfName(name: string) {
  return uppercaseFirst(snakeToCamel(name));
}

export function generateIndent(indentLevel: number): string {
  let indent = "";
  for (let i = 0; i < indentLevel; i++) {
    indent += "  "
  }
  return indent;
}

export function getPathToRoot(fileName: string) {
  const depth = fileName.split("/").length;
  return depth === 1 ? "./" : new Array(depth).join("../");
}

export function withinNamespaceFromExportEntry(name: string, exportEntry: ExportMessageEntry | ExportEnumEntry) {
  return exportEntry.pkg ? name.substring(exportEntry.pkg.length + 1) : name;
}

export function filePathFromProtoWithoutExtension(protoFilePath: string): string {
  return protoFilePath.replace(".proto", "_pb");
}

export function withAllStdIn(callback: (buffer: Buffer) => void): void {
  const ret: Buffer[] = [];
  let len = 0;

  const stdin = process.stdin;
  stdin.on("readable", function () {
    let chunk;

    while ((chunk = stdin.read())) {
      if (!(chunk instanceof Buffer)) throw new Error("Did not receive buffer");
      ret.push(chunk);
      len += chunk.length;
    }
  });

  stdin.on("end", function () {
    callback(Buffer.concat(ret, len));
  });
}
