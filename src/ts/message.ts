import {
  filePathToPseudoNamespace, snakeToCamel, uppercaseFirst, oneOfName, isProto2,
  withinNamespaceFromExportEntry, normaliseFieldObjectName, stripPrefix
} from "../util";
import {ExportMap} from "../ExportMap";
import {
  FieldDescriptorProto, FileDescriptorProto, DescriptorProto,
  FieldOptions
} from "google-protobuf/google/protobuf/descriptor_pb";
import {MESSAGE_TYPE, BYTES_TYPE, ENUM_TYPE, getFieldType, getTypeName} from "./FieldTypes";
import {Printer} from "../Printer";
import {printEnum} from "./enum";
import {printOneOfDecl} from "./oneof";
import {printExtension} from "./extensions";
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

  return false;
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

  messageDescriptor.getFieldList().forEach(field => {
    if (field.hasOneofIndex()) {
      const oneOfIndex = field.getOneofIndex();
      let existing = oneOfGroups[oneOfIndex];
      if (existing === undefined) {
        existing = [];
        oneOfGroups[oneOfIndex] = existing;
      }
      existing.push(field);
    }
    const snakeCaseName = stripPrefix(field.getName().toLowerCase(), "_");
    const camelCaseName = snakeToCamel(snakeCaseName);
    const withUppercase = uppercaseFirst(camelCaseName);
    const type = field.getType();

    let exportType;
    const fullTypeName = field.getTypeName().slice(1);
    if (type === MESSAGE_TYPE) {
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
      if (field.getOptions() && field.getOptions().hasJstype()) {
        switch (field.getOptions().getJstype()) {
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
        printer.printIndentedLn(`clear${withUppercase}${field.getLabel() === FieldDescriptorProto.Label.LABEL_REPEATED ? "List" : ""}(): void;`);
      }
    }

    if (hasFieldPresence(field, fileDescriptor)) {
      printer.printIndentedLn(`has${withUppercase}(): boolean;`);
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
        printer.printIndentedLn(`set${withUppercase}List(value: Array<Uint8Array | string>): void;`);
        printRepeatedAddMethod("Uint8Array | string");
      } else {
        toObjectType.printIndentedLn(`${camelCaseName}List: Array<${exportType}${type === MESSAGE_TYPE ? ".AsObject" : ""}>,`);
        printer.printIndentedLn(`get${withUppercase}List(): Array<${exportType}>;`);
        printer.printIndentedLn(`set${withUppercase}List(value: Array<${exportType}>): void;`);
        printRepeatedAddMethod(exportType);
      }
    } else {
      if (type === BYTES_TYPE) {
        toObjectType.printIndentedLn(`${camelCaseName}: Uint8Array | string,`);
        printer.printIndentedLn(`get${withUppercase}(): Uint8Array | string;`);
        printer.printIndentedLn(`get${withUppercase}_asU8(): Uint8Array;`);
        printer.printIndentedLn(`get${withUppercase}_asB64(): string;`);
        printer.printIndentedLn(`set${withUppercase}(value: Uint8Array | string): void;`);
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
        printer.printIndentedLn(`get${withUppercase}(): ${exportType}${canBeUndefined ? " | undefined" : ""};`);
        printer.printIndentedLn(`set${withUppercase}(value${type === MESSAGE_TYPE ? "?" : ""}: ${exportType}): void;`);
      }
    }
    printer.printEmptyLn();
  });

  toObjectType.printLn(`}`);

  messageDescriptor.getOneofDeclList().forEach(oneOfDecl => {
    printer.printIndentedLn(`get${oneOfName(oneOfDecl.getName())}Case(): ${messageName}.${oneOfName(oneOfDecl.getName())}Case;`);
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
    printer.print(`${printOneOfDecl(oneOfDecl, oneOfGroups[index] || [], indentLevel + 1)}`);
  });
  messageDescriptor.getExtensionList().forEach(extension => {
    printer.print(printExtension(fileName, exportMap, extension, indentLevel + 1));
  });

  printer.printLn(`}`);

  return printer.getOutput();
}
