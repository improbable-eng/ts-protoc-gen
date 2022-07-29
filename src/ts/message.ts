import {
  filePathToPseudoNamespace,
  normaliseFieldObjectName,
  snakeToCamel,
  stripPrefix,
  throwError,
  withinNamespaceFromExportEntry
} from "../util";
import { ExportMap } from "../ExportMap";
import {
  DescriptorProto,
  FieldDescriptorProto,
  FieldOptions,
  FileDescriptorProto
} from "google-protobuf/google/protobuf/descriptor_pb";
import { BYTES_TYPE, ENUM_TYPE, getFieldType, getTypeName, MESSAGE_TYPE } from "./FieldTypes";
import { Printer } from "../Printer";
import { printEnum } from "./enum";
import { printOneOfDecl } from "./oneof";
import { printExtension } from "./extensions";
import JSType = FieldOptions.JSType;

export function printMessage(fileName: string, exportMap: ExportMap, messageDescriptor: DescriptorProto, indentLevel: number, fileDescriptor: FileDescriptorProto) {
  const messageName = messageDescriptor.getName();
  const messageOptions = messageDescriptor.getOptions();
  if (messageOptions !== undefined && messageOptions.getMapEntry()) {
    // this message type is the entry tuple for a map - don't output it
    return "";
  }

  const objectTypeName = `Object`;
  const toObjectType = new Printer(indentLevel + 1);
  toObjectType.printLn(`export type ${objectTypeName} = {`);

  const printer = new Printer(indentLevel);
  printer.printEmptyLn();

  const oneOfGroups: Array<Array<FieldDescriptorProto>> = [];
  const syntheticOneOfGroups: boolean[] = [];

  messageDescriptor.getFieldList().forEach(field => {
    if (field.hasOneofIndex()) {
      const oneOfIndex = field.getOneofIndex();
      if (oneOfIndex === undefined) {
        throwError("Missing one_of index");
      } else if (field.getProto3Optional()) {
        syntheticOneOfGroups[oneOfIndex] = true;
      } else {
        let existing = oneOfGroups[oneOfIndex];
        if (existing === undefined) {
          existing = [];
          oneOfGroups[oneOfIndex] = existing;
        }
        existing.push(field);
      }
    }
    const fieldName = field.getName() || throwError("Missing field name");
    const snakeCaseName = stripPrefix(fieldName.toLowerCase(), "_");
    const camelCaseName = snakeToCamel(snakeCaseName);
    const type = field.getType() || throwError("Missing field type");

    let exportType;
    if (type === MESSAGE_TYPE) {
      const fieldTypeName = field.getTypeName() || throwError(`Missing field type name for message field: ${fieldName}`);
      const fullTypeName = fieldTypeName.slice(1);
      const fieldMessageType = exportMap.getMessage(fullTypeName);
      if (fieldMessageType === undefined) {
        throw new Error("No message export for: " + fullTypeName);
      }
      if (fieldMessageType.messageOptions !== undefined && fieldMessageType.messageOptions.getMapEntry()) {
        // This field is a map
        const keyTuple = fieldMessageType.mapFieldOptions!.key;
        const keyType = keyTuple[0];
        const keyTypeName = getFieldType(keyType, keyTuple[1], fileName, exportMap);
        const valueTuple = fieldMessageType.mapFieldOptions!.value;
        const valueType = valueTuple[0];
        let valueTypeName = getFieldType(valueType, valueTuple[1], fileName, exportMap);
        if (valueType === BYTES_TYPE) {
          valueTypeName = "Uint8Array | string";
        }
        if (valueType === ENUM_TYPE) {
          valueTypeName = `${valueTypeName}[keyof ${valueTypeName}]`;
        }
        toObjectType.printIndentedLn(`${camelCaseName}Map?: Array<[${keyTypeName}${keyType === MESSAGE_TYPE ? ".Object" : ""}, ${valueTypeName}${valueType === MESSAGE_TYPE ? ".Object" : ""}]>,`);
        return;
      }
      const withinNamespace = withinNamespaceFromExportEntry(fullTypeName, fieldMessageType);
      if (fieldMessageType.fileName === fileName) {
        exportType = withinNamespace;
      } else {
        exportType = filePathToPseudoNamespace(fieldMessageType.fileName) + "." + withinNamespace;
      }
    } else if (type === ENUM_TYPE) {
      const fieldTypeName = field.getTypeName() || throwError(`Missing field type name for message field: ${fieldName}`);
      const fullTypeName = fieldTypeName.slice(1);
      const fieldEnumType = exportMap.getEnum(fullTypeName);
      if (fieldEnumType === undefined) {
        throw new Error("No enum export for: " + fullTypeName);
      }
      const withinNamespace = withinNamespaceFromExportEntry(fullTypeName, fieldEnumType);
      if (fieldEnumType.fileName === fileName) {
        exportType = withinNamespace;
      } else {
        exportType = filePathToPseudoNamespace(fieldEnumType.fileName) + "." + withinNamespace;
      }
      exportType = `${exportType}Map[keyof ${exportType}Map]`;
    } else {
      const fieldOptions = field.getOptions();
      if (fieldOptions && fieldOptions.hasJstype()) {
        switch (fieldOptions.getJstype()) {
          case JSType.JS_NUMBER:
            exportType = "number";
            break;
          case JSType.JS_STRING:
            exportType = "string";
            break;
          default:
            exportType = getTypeName(type);
        }
      } else {
        exportType = getTypeName(type);
      }
    }

    if (field.getLabel() === FieldDescriptorProto.Label.LABEL_REPEATED) {// is repeated
      if (type === BYTES_TYPE) {
        toObjectType.printIndentedLn(`${camelCaseName}List?: Array<Uint8Array | string>,`);
      } else {
        toObjectType.printIndentedLn(`${camelCaseName}List?: Array<${exportType}${type === MESSAGE_TYPE ? ".Object" : ""}>,`);
      }
    } else {
      if (type === BYTES_TYPE) {
        toObjectType.printIndentedLn(`${camelCaseName}?: Uint8Array | string,`);
      } else {
        const fieldObjectName = normaliseFieldObjectName(camelCaseName);
        let fieldObjectType = exportType;
        toObjectType.printIndentedLn(`${fieldObjectName}?: ${fieldObjectType}${type === MESSAGE_TYPE ? ".Object" : ""},`);
      }
    }
    printer.printEmptyLn();
  });

  toObjectType.printLn(`}`);

  printer.printLn(`export namespace ${messageName} {`);

  printer.print(toObjectType.getOutput());

  messageDescriptor.getNestedTypeList().forEach(nested => {
    const msgOutput = printMessage(fileName, exportMap, nested, indentLevel + 1, fileDescriptor);
    if (msgOutput !== "") {
      // If the message class is a Map entry then it isn't output, so don't print the namespace block
      printer.print(msgOutput);
    }
  });
  messageDescriptor.getEnumTypeList().forEach(enumType => {
    printer.print(`${printEnum(enumType, indentLevel + 1)}`);
  });
  messageDescriptor.getOneofDeclList().forEach((oneOfDecl, index) => {
    // Only print oneofs that are not synthetic (ie not proto3 optional field).
    if (!syntheticOneOfGroups[index]) {
      printer.print(`${printOneOfDecl(oneOfDecl, oneOfGroups[index] || [], indentLevel + 1)}`);
    }
  });
  messageDescriptor.getExtensionList().forEach(extension => {
    printer.print(printExtension(fileName, exportMap, extension, indentLevel + 1));
  });

  printer.printLn(`}`);

  return printer.getOutput();
}
