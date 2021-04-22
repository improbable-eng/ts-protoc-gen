import {Printer} from "../Printer";
import {ExportMap} from "../ExportMap";
import {FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import { snakeToCamel, throwError } from "../util";
import {getFieldType} from "./FieldTypes";

export function printExtension(fileName: string, exportMap: ExportMap, extension: FieldDescriptorProto, indentLevel: number): string {
  const printer = new Printer(indentLevel + 1);
  printer.printEmptyLn();
  const extensionName = extension.getName() || throwError("Missing extension name");
  const extensionType = extension.getType() || throwError("Missing extension type");
  const extensionTypeName = extension.getTypeName() || null;
  const camelExtensionName = snakeToCamel(extensionName);
  const fieldType = getFieldType(extensionType, extensionTypeName ? extensionTypeName.slice(1) : null, fileName, exportMap);
  printer.printLn(`export const ${camelExtensionName}: jspb.ExtensionFieldInfo<${fieldType}>;`);
  return printer.output;
}
