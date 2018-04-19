import {filePathToPseudoNamespace, replaceProtoSuffix, getPathToRoot} from "../util";
import {ExportMap} from "../ExportMap";
import {Printer} from "../Printer";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {WellKnownTypesMap} from "../WellKnown";
import {printMessage} from "./message";
import {printEnum} from "./enum";
import {printExtension} from "./extensions";

export function printFileDescriptorTSD(fileDescriptor: FileDescriptorProto, exportMap: ExportMap) {
  const fileName = fileDescriptor.getName();
  const packageName = fileDescriptor.getPackage();

  const printer = new Printer(0);

  printer.printLn(`// package: ${packageName}`);
  printer.printLn(`// file: ${fileDescriptor.getName()}`);

  const upToRoot = getPathToRoot(fileName);

  printer.printEmptyLn();
  printer.printLn(`import * as jspb from "google-protobuf";`);

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
    printer.print(printMessage(fileName, exportMap, enumType, 0, fileDescriptor));
  });

  fileDescriptor.getExtensionList().forEach(extension => {
    printer.print(printExtension(fileName, exportMap, extension, 0));
  });

  fileDescriptor.getEnumTypeList().forEach(enumType => {
    printer.print(printEnum(enumType, 0));
  });

  printer.printEmptyLn();

  return printer.getOutput();
}
