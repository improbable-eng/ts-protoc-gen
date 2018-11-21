import {Printer} from "../Printer";
import {ExportMap} from "../ExportMap";
import {FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {snakeToCamel} from "../util";
import {getFieldType} from "../ts/FieldTypes";

export function printExtension(fileName: string, exportMap: ExportMap, extension: FieldDescriptorProto, indentLevel: number, parentMessageName?: string): string {
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  const extensionName = parentMessageName && parentMessageName !== "" ?
    `${parentMessageName}_${snakeToCamel(extension.getName())}` :
    snakeToCamel(extension.getName());
  const fieldType = getFieldType(extension.getType(), extension.getTypeName().slice(1), fileName, exportMap);
  printer.printLn(`export type ${extensionName}$AsExtension = jspb.ExtensionFieldInfo<${fieldType}>;`);
  return printer.output;
}
