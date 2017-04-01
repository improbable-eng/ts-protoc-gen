import {Printer} from "../Printer";
import {ExportMap} from "../ExportMap";
import {FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {snakeToCamel} from "../util";
import {getFieldType} from "./FieldTypes";

export function printExtension(fileName: string, exportMap: ExportMap, extension: FieldDescriptorProto, indentLevel: number): string {
  const printer = new Printer(indentLevel + 1);
  printer.printEmptyLn();
  const extensionName = snakeToCamel(extension.getName());
  const fieldType = getFieldType(extension.getType(), extension.getTypeName().slice(1), fileName, exportMap);
  printer.printLn(`export const ${extensionName}: jspb.ExtensionFieldInfo<${fieldType}>;`);
  return printer.output;
}
