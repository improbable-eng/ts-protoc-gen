"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var descriptor_pb_1 = require("google-protobuf/google/protobuf/descriptor_pb");
var FieldTypes_1 = require("./FieldTypes");
var Printer_1 = require("../Printer");
var enum_1 = require("./enum");
var oneof_1 = require("./oneof");
var extensions_1 = require("./extensions");
function hasFieldPresence(field, fileDescriptor) {
    if (field.getLabel() === descriptor_pb_1.FieldDescriptorProto.Label.LABEL_REPEATED) {
        return false;
    }
    if (field.hasOneofIndex()) {
        return true;
    }
    if (field.getType() === FieldTypes_1.MESSAGE_TYPE) {
        return true;
    }
    if (util_1.isProto2(fileDescriptor)) {
        return true;
    }
    return false;
}
function printMessage(fileName, exportMap, messageDescriptor, indentLevel, fileDescriptor) {
    var messageName = messageDescriptor.getName();
    var messageOptions = messageDescriptor.getOptions();
    if (messageOptions !== undefined && messageOptions.getMapEntry()) {
        return "";
    }
    var objectTypeName = "AsObject";
    var toObjectType = new Printer_1.Printer(indentLevel + 1);
    toObjectType.printLn("export type " + objectTypeName + " = {");
    var printer = new Printer_1.Printer(indentLevel);
    printer.printEmptyLn();
    printer.printLn("export class " + messageName + " extends jspb.Message {");
    var oneOfGroups = [];
    messageDescriptor.getFieldList().forEach(function (field) {
        if (field.hasOneofIndex()) {
            var oneOfIndex = field.getOneofIndex();
            var existing = oneOfGroups[oneOfIndex];
            if (existing === undefined) {
                existing = [];
                oneOfGroups[oneOfIndex] = existing;
            }
            existing.push(field);
        }
        var snakeCaseName = field.getName().toLowerCase();
        var camelCaseName = util_1.snakeToCamel(snakeCaseName);
        var withUppercase = util_1.uppercaseFirst(camelCaseName);
        var type = field.getType();
        var exportType;
        var fullTypeName = field.getTypeName().slice(1);
        if (type === FieldTypes_1.MESSAGE_TYPE) {
            var fieldMessageType = exportMap.getMessage(fullTypeName);
            if (fieldMessageType === undefined) {
                throw new Error("No message export for: " + fullTypeName);
            }
            if (fieldMessageType.messageOptions !== undefined && fieldMessageType.messageOptions.getMapEntry()) {
                var keyTuple = fieldMessageType.mapFieldOptions.key;
                var keyType = keyTuple[0];
                var keyTypeName = FieldTypes_1.getFieldType(keyType, keyTuple[1], fileName, exportMap);
                var valueTuple = fieldMessageType.mapFieldOptions.value;
                var valueType = valueTuple[0];
                var valueTypeName = FieldTypes_1.getFieldType(valueType, valueTuple[1], fileName, exportMap);
                if (valueType === FieldTypes_1.BYTES_TYPE) {
                    valueTypeName = "Uint8Array | string";
                }
                printer.printIndentedLn("get" + withUppercase + "Map(): jspb.Map<" + keyTypeName + ", " + valueTypeName + ">;");
                printer.printIndentedLn("clear" + withUppercase + "Map(): void;");
                toObjectType.printIndentedLn(camelCaseName + "Map: Array<[" + keyTypeName + (keyType === FieldTypes_1.MESSAGE_TYPE ? ".AsObject" : "") + ", " + valueTypeName + (valueType === FieldTypes_1.MESSAGE_TYPE ? ".AsObject" : "") + "]>,");
                return;
            }
            var withinNamespace = util_1.withinNamespaceFromExportEntry(fullTypeName, fieldMessageType);
            if (fieldMessageType.fileName === fileName) {
                exportType = withinNamespace;
            }
            else {
                exportType = util_1.filePathToPseudoNamespace(fieldMessageType.fileName) + "." + withinNamespace;
            }
        }
        else if (type === FieldTypes_1.ENUM_TYPE) {
            var fieldEnumType = exportMap.getEnum(fullTypeName);
            if (fieldEnumType === undefined) {
                throw new Error("No enum export for: " + fullTypeName);
            }
            var withinNamespace = util_1.withinNamespaceFromExportEntry(fullTypeName, fieldEnumType);
            if (fieldEnumType.fileName === fileName) {
                exportType = withinNamespace;
            }
            else {
                exportType = util_1.filePathToPseudoNamespace(fieldEnumType.fileName) + "." + withinNamespace;
            }
        }
        else {
            exportType = FieldTypes_1.getTypeName(type);
        }
        var hasClearMethod = false;
        function printClearIfNotPresent() {
            if (!hasClearMethod) {
                hasClearMethod = true;
                printer.printIndentedLn("clear" + withUppercase + (field.getLabel() === descriptor_pb_1.FieldDescriptorProto.Label.LABEL_REPEATED ? "List" : "") + "(): void;");
            }
        }
        if (hasFieldPresence(field, fileDescriptor)) {
            printer.printIndentedLn("has" + withUppercase + "(): boolean;");
            printClearIfNotPresent();
        }
        function printRepeatedAddMethod(valueType) {
            var optionalValue = field.getType() === FieldTypes_1.MESSAGE_TYPE;
            printer.printIndentedLn("add" + withUppercase + "(value" + (optionalValue ? "?" : "") + ": " + valueType + ", index?: number): " + valueType + ";");
        }
        var canBeUndefined = (!util_1.isProto2(fileDescriptor) || (field.getLabel() === descriptor_pb_1.FieldDescriptorProto.Label.LABEL_OPTIONAL));
        if (field.getLabel() === descriptor_pb_1.FieldDescriptorProto.Label.LABEL_REPEATED) {
            printClearIfNotPresent();
            if (type === FieldTypes_1.BYTES_TYPE) {
                toObjectType.printIndentedLn(camelCaseName + "List" + (canBeUndefined ? "?" : "") + ": Array<Uint8Array | string>,");
                printer.printIndentedLn("get" + withUppercase + "List(): Array<Uint8Array | string>" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("get" + withUppercase + "List_asU8(): Array<Uint8Array>" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("get" + withUppercase + "List_asB64(): Array<string>" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("set" + withUppercase + "List(value" + (canBeUndefined ? "?" : "") + ": Array<Uint8Array | string>): void;");
                printRepeatedAddMethod("Uint8Array | string");
            }
            else {
                toObjectType.printIndentedLn(camelCaseName + "List" + (canBeUndefined ? "?" : "") + ": Array<" + exportType + (type === FieldTypes_1.MESSAGE_TYPE ? ".AsObject" : "") + ">,");
                printer.printIndentedLn("get" + withUppercase + "List(): Array<" + exportType + ">" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("set" + withUppercase + "List(value" + (canBeUndefined ? "?" : "") + ": Array<" + exportType + ">): void;");
                printRepeatedAddMethod(exportType);
            }
        }
        else {
            if (type === FieldTypes_1.BYTES_TYPE) {
                toObjectType.printIndentedLn("" + camelCaseName + (canBeUndefined ? "?" : "") + ": Uint8Array | string,");
                printer.printIndentedLn("get" + withUppercase + "(): Uint8Array | string" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("get" + withUppercase + "_asU8(): Uint8Array" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("get" + withUppercase + "_asB64(): string" + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("set" + withUppercase + "(value" + (canBeUndefined ? "?" : "") + ": Uint8Array | string): void;");
            }
            else {
                var fieldObjectType = exportType;
                if (type === FieldTypes_1.MESSAGE_TYPE) {
                    fieldObjectType += ".AsObject";
                }
                var fieldObjectName = util_1.normaliseFieldObjectName(camelCaseName);
                toObjectType.printIndentedLn("" + fieldObjectName + (canBeUndefined ? "?" : "") + ": " + fieldObjectType + ",");
                printer.printIndentedLn("get" + withUppercase + "(): " + exportType + (canBeUndefined ? " | undefined" : "") + ";");
                printer.printIndentedLn("set" + withUppercase + "(value" + (type === FieldTypes_1.MESSAGE_TYPE || canBeUndefined ? "?" : "") + ": " + exportType + "): void;");
            }
        }
        printer.printEmptyLn();
    });
    toObjectType.printLn("}");
    messageDescriptor.getOneofDeclList().forEach(function (oneOfDecl) {
        printer.printIndentedLn("get" + util_1.oneOfName(oneOfDecl.getName()) + "Case(): " + messageName + "." + util_1.oneOfName(oneOfDecl.getName()) + "Case;");
    });
    printer.printIndentedLn("serializeBinary(): Uint8Array;");
    printer.printIndentedLn("toObject(includeInstance?: boolean): " + messageName + "." + objectTypeName + ";");
    printer.printIndentedLn("static toObject(includeInstance: boolean, msg: " + messageName + "): " + messageName + "." + objectTypeName + ";");
    printer.printIndentedLn("static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};");
    printer.printIndentedLn("static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};");
    printer.printIndentedLn("static serializeBinaryToWriter(message: " + messageName + ", writer: jspb.BinaryWriter): void;");
    printer.printIndentedLn("static deserializeBinary(bytes: Uint8Array): " + messageName + ";");
    printer.printIndentedLn("static deserializeBinaryFromReader(message: " + messageName + ", reader: jspb.BinaryReader): " + messageName + ";");
    printer.printLn("}");
    printer.printEmptyLn();
    printer.printLn("export namespace " + messageName + " {");
    printer.print(toObjectType.getOutput());
    messageDescriptor.getNestedTypeList().forEach(function (nested) {
        var msgOutput = printMessage(fileName, exportMap, nested, indentLevel + 1, fileDescriptor);
        if (msgOutput !== "") {
            printer.print(msgOutput);
        }
    });
    messageDescriptor.getEnumTypeList().forEach(function (enumType) {
        printer.print("" + enum_1.printEnum(enumType, indentLevel + 1));
    });
    messageDescriptor.getOneofDeclList().forEach(function (oneOfDecl, index) {
        printer.print("" + oneof_1.printOneOfDecl(oneOfDecl, oneOfGroups[index] || [], indentLevel + 1));
    });
    messageDescriptor.getExtensionList().forEach(function (extension) {
        printer.print(extensions_1.printExtension(fileName, exportMap, extension, indentLevel + 1));
    });
    printer.printLn("}");
    return printer.getOutput();
}
exports.printMessage = printMessage;
//# sourceMappingURL=message.js.map