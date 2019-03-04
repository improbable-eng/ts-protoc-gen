import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { ExportMap } from "../ExportMap";
import { Printer } from "../Printer";
import { filePathToPseudoNamespace, getPathToRoot, replaceProtoSuffix } from "../util";
import { WellKnownTypesMap } from "../WellKnown";
import { printPatch } from "./message";

export function printFileDescriptorPatch(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  const fileName = fileDescriptor.getName();
  const packageName = fileDescriptor.getPackage();

  const printer = new Printer(0);

  printer.printLn(`// package: ${packageName}`);
  printer.printLn(`// file: ${fileDescriptor.getName()}`);
  printer.printLn(`// This file is created to add 'deserializeJson' functionality to the generated proto files.`);
  printer.printLn(`// This file needs to be imported, otherwise the compiler will skip this file and`);
  printer.printLn(`// the 'deserializeJson' function won't be available.`);
  printer.printEmptyLn();

  const upToRoot = getPathToRoot(fileName);

  fileDescriptor.getDependencyList().forEach((dependency: string) => {
    const pseudoNamespace = filePathToPseudoNamespace(dependency);
    if (dependency in WellKnownTypesMap) {
      printer.printLn(`import * as ${pseudoNamespace} from "${WellKnownTypesMap[dependency]}";`);
    } else {
      const filePath = replaceProtoSuffix(dependency);
      printer.printLn(`import * as ${pseudoNamespace} from "${upToRoot}${filePath}";`);
    }
  });

  fileDescriptor.getMessageTypeList().forEach(enumType => {
    printer.print(printPatch(packageName, fileName, exportMap, enumType));
  });

  return printer.getOutput();
}
