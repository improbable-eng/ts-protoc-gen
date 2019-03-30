import {filePathToPseudoNamespace, withinNamespaceFromExportEntry} from "../util";
import {ExportMap} from "../ExportMap";
import {FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";

export const MESSAGE_TYPE = 11;
export const BYTES_TYPE = 12;
export const ENUM_TYPE = 14;

const TypeNumToTypeString: {[key: number]: string} = {};
TypeNumToTypeString[1] = "number"; // TYPE_DOUBLE
TypeNumToTypeString[2] = "number"; // TYPE_FLOAT
TypeNumToTypeString[3] = "number"; // TYPE_INT64
TypeNumToTypeString[4] = "number"; // TYPE_UINT64
TypeNumToTypeString[5] = "number"; // TYPE_INT32
TypeNumToTypeString[6] = "number"; // TYPE_FIXED64
TypeNumToTypeString[7] = "number"; // TYPE_FIXED32
TypeNumToTypeString[8] = "boolean"; // TYPE_BOOL
TypeNumToTypeString[9] = "string"; // TYPE_STRING
TypeNumToTypeString[10] = "Object"; // TYPE_GROUP
TypeNumToTypeString[MESSAGE_TYPE] = "Object"; // TYPE_MESSAGE - Length-delimited aggregate.
TypeNumToTypeString[BYTES_TYPE] = "Uint8Array"; // TYPE_BYTES
TypeNumToTypeString[13] = "number"; // TYPE_UINT32
TypeNumToTypeString[ENUM_TYPE] = "number"; // TYPE_ENUM
TypeNumToTypeString[15] = "number"; // TYPE_SFIXED32
TypeNumToTypeString[16] = "number"; // TYPE_SFIXED64
TypeNumToTypeString[17] = "number"; // TYPE_SINT32 - Uses ZigZag encoding.
TypeNumToTypeString[18] = "number"; // TYPE_SINT64 - Uses ZigZag encoding.

export function getTypeName(fieldTypeNum: number): string {
  return TypeNumToTypeString[fieldTypeNum];
}

export function getFieldType(type: FieldDescriptorProto.Type, typeName: string, currentFileName: string, exportMap: ExportMap): string {
  if (type === MESSAGE_TYPE) {
    const fromExport = exportMap.getMessage(typeName);
    if (!fromExport) {
      throw new Error("Could not getFieldType for message: " + typeName);
    }
    const withinNamespace = withinNamespaceFromExportEntry(typeName, fromExport);
    if (fromExport.fileName === currentFileName) {
      return withinNamespace;
    } else {
      return filePathToPseudoNamespace(fromExport.fileName) + "." + withinNamespace;
    }
  } else if (type === ENUM_TYPE) {
    const fromExport = exportMap.getEnum(typeName);
    if (!fromExport) {
      throw new Error("Could not getFieldType for enum: " + typeName);
    }
    const withinNamespace = withinNamespaceFromExportEntry(typeName, fromExport);
    if (fromExport.fileName === currentFileName) {
      return `${withinNamespace}Map`;
    } else {
      return filePathToPseudoNamespace(fromExport.fileName) + "." + withinNamespace;
    }
  } else {
    return TypeNumToTypeString[type];
  }
}
