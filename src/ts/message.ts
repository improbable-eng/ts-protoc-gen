import {
  filePathToPseudoNamespace,
  isProto2,
  normaliseFieldObjectName,
  oneOfName,
  snakeToCamel,
  stripPrefix,
  throwError,
  uppercaseFirst,
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

function hasFieldPresence(field: FieldDescriptorProto, fileDescriptor: FileDescriptorProto): boolean {
  if (field.getLabel() === FieldDescriptorProto.Label.LABEL_REPEATED) {
    return false;
  }

  if (field.hasOneofIndex()) {
    return true;
  }

  if (field.getType() === MESSAGE_TYPE) {
    return true;
  }

  if (isProto2(fileDescriptor)) {
    return true;
  }

  if (field.getProto3Optional()) {
    return true;
  }

  return false;
}

function jsGetterName(name: string): string {
  // Avoid conflicts with base-class names.
  // https://github.com/protocolbuffers/protobuf/blob/97cb3a862f132c6ab98e240be11990b89f7d5467/src/google/protobuf/compiler/js/js_generator.cc#L528-L531
  return name === "Extension" || name === "JsPbMessageId" ? name + "$" : name;
}

export function printMessage(fileName: string, exportMap: ExportMap, messageDescriptor: DescriptorProto, indentLevel: number, fileDescriptor: FileDescriptorProto) {
  const messageName = messageDescriptor.getName();
  const messageOptions = messageDescriptor.getOptions();
  if (messageOptions !== undefined && messageOptions.getMapEntry()) {
    // this message type is the entry tuple for a map - don't output it
    return "";
  }

  const objectTypeName = `AsObject`;
  const toObjectType = new Printer(indentLevel + 1);
  toObjectType.printLn(`export type ${objectTypeName} = {`);

  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  printer.printLn(`export class ${messageName} extends jspb.Message {`);

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
    const withUppercase = uppercaseFirst(camelCaseName);
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
        printer.printIndentedLn(`get${withUppercase}Map(): jspb.Map<${keyTypeName}, ${valueTypeName}>;`);
        printer.printIndentedLn(`clear${withUppercase}Map(): void;`);
        toObjectType.printIndentedLn(`${camelCaseName}Map: Array<[${keyTypeName}${keyType === MESSAGE_TYPE ? ".AsObject" : ""}, ${valueTypeName}${valueType === MESSAGE_TYPE ? ".AsObject" : ""}]>,`);
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

    let hasClearMethod = false;
    function printClearIfNotPresent() {
      if (!hasClearMethod) {
        hasClearMethod = true;
        printer.printIndentedLn(`clear${jsGetterName(withUppercase)}${field.getLabel() === FieldDescriptorProto.Label.LABEL_REPEATED ? "List" : ""}(): void;`);
      }
    }

    if (hasFieldPresence(field, fileDescriptor)) {
      printer.printIndentedLn(`has${jsGetterName(withUppercase)}(): boolean;`);
      printClearIfNotPresent();
    }

    function printRepeatedAddMethod(valueType: string) {
      const optionalValue = field.getType() === MESSAGE_TYPE;
      printer.printIndentedLn(`add${withUppercase}(value${optionalValue ? "?" : ""}: ${valueType}, index?: number): ${valueType};`);
    }

    if (field.getLabel() === FieldDescriptorProto.Label.LABEL_REPEATED) {// is repeated
      printClearIfNotPresent();
      if (type === BYTES_TYPE) {
        toObjectType.printIndentedLn(`${camelCaseName}List: Array<Uint8Array | string>,`);
        printer.printIndentedLn(`get${withUppercase}List(): Array<Uint8Array | string>;`);
        printer.printIndentedLn(`get${withUppercase}List_asU8(): Array<Uint8Array>;`);
        printer.printIndentedLn(`get${withUppercase}List_asB64(): Array<string>;`);
        printer.printIndentedLn(`set${withUppercase}List(value: Array<Uint8Array | string>): ${messageName};`);
        printRepeatedAddMethod("Uint8Array | string");
      } else {
        toObjectType.printIndentedLn(`${camelCaseName}List: Array<${exportType}${type === MESSAGE_TYPE ? ".AsObject" : ""}>,`);
        printer.printIndentedLn(`get${withUppercase}List(): Array<${exportType}>;`);
        printer.printIndentedLn(`set${withUppercase}List(value: Array<${exportType}>): ${messageName};`);
        printRepeatedAddMethod(exportType);
      }
    } else {
      if (type === BYTES_TYPE) {
        toObjectType.printIndentedLn(`${camelCaseName}: Uint8Array | string,`);
        printer.printIndentedLn(`get${jsGetterName(withUppercase)}(): Uint8Array | string;`);
        printer.printIndentedLn(`get${withUppercase}_asU8(): Uint8Array;`);
        printer.printIndentedLn(`get${withUppercase}_asB64(): string;`);
        printer.printIndentedLn(`set${jsGetterName(withUppercase)}(value: Uint8Array | string): ${messageName};`);
      } else {
        let fieldObjectType = exportType;
        let canBeUndefined = false;
        if (type === MESSAGE_TYPE) {
          fieldObjectType += ".AsObject";
          if (!isProto2(fileDescriptor) || (field.getLabel() === FieldDescriptorProto.Label.LABEL_OPTIONAL)) {
            canBeUndefined = true;
          }
        } else {
          if (isProto2(fileDescriptor)) {
            canBeUndefined = true;
          }
        }
        const fieldObjectName = normaliseFieldObjectName(camelCaseName);
        toObjectType.printIndentedLn(`${fieldObjectName}${canBeUndefined ? "?" : ""}: ${fieldObjectType},`);
        printer.printIndentedLn(`get${jsGetterName(withUppercase)}(): ${exportType}${canBeUndefined ? " | undefined" : ""};`);
        printer.printIndentedLn(`set${jsGetterName(withUppercase)}(value${type === MESSAGE_TYPE ? "?" : ""}: ${exportType}): ${messageName};`);
      }
    }
    printer.printEmptyLn();
  });

  toObjectType.printLn(`}`);

  messageDescriptor.getOneofDeclList().forEach((oneOfDecl, index) => {
    const oneOfDeclName = oneOfDecl.getName() || throwError("Missing one_of name");
    // Only print oneofs that are not synthetic (ie not proto3 optional field).
    if (!syntheticOneOfGroups[index]) {
      printer.printIndentedLn(`get${oneOfName(oneOfDeclName)}Case(): ${messageName}.${oneOfName(oneOfDeclName)}Case;`);
    }
  });

  printer.printIndentedLn(`serializeBinary(): Uint8Array;`);
  printer.printIndentedLn(`toObject(includeInstance?: boolean): ${messageName}.${objectTypeName};`);
  printer.printIndentedLn(`static toObject(includeInstance: boolean, msg: ${messageName}): ${messageName}.${objectTypeName};`);
  printer.printIndentedLn(`static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};`);
  printer.printIndentedLn(`static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};`);
  printer.printIndentedLn(`static serializeBinaryToWriter(message: ${messageName}, writer: jspb.BinaryWriter): void;`);
  printer.printIndentedLn(`static deserializeBinary(bytes: Uint8Array): ${messageName};`);
  printer.printIndentedLn(`static deserializeBinaryFromReader(message: ${messageName}, reader: jspb.BinaryReader): ${messageName};`);

  printer.printLn(`}`);
  printer.printEmptyLn();

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
