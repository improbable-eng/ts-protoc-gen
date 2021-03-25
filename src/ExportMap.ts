import {
  FileDescriptorProto,
  DescriptorProto,
  MessageOptions,
  EnumOptions,
  FieldDescriptorProto
} from "google-protobuf/google/protobuf/descriptor_pb";

import Type = FieldDescriptorProto.Type;
import { throwError } from "./util";

type MapFieldOptions = {
  key: [Type, string | null],
  value: [Type, string | null],
};

export type ExportMessageEntry = {
  pkg: string,
  fileName: string,
  messageOptions?: MessageOptions,
  mapFieldOptions?: MapFieldOptions
};

export type ExportEnumEntry = {
  pkg: string,
  fileName: string,
  enumOptions?: EnumOptions,
};

export class ExportMap {
  messageMap: {[key: string]: ExportMessageEntry} = {};
  enumMap: {[key: string]: ExportEnumEntry} = {};

  exportNested(scope: string, fileDescriptor: FileDescriptorProto, message: DescriptorProto) {
    const messageName = message.getName() || throwError(`Missing message name for message. Scope: ${scope}`);
    const messageOptions = message.getOptions();
    let mapFieldOptions: MapFieldOptions | undefined = undefined;
    if (messageOptions && messageOptions.getMapEntry()) {
      const keyType = message.getFieldList()[0].getType() || throwError(`Missing map key type for message. Scope: ${scope} Message: ${messageName}`);
      const keyTypeName = message.getFieldList()[0].getTypeName();
      const valueType = message.getFieldList()[1].getType() || throwError(`Missing map value type for message. Scope: ${scope} Message: ${messageName}`);
      const valueTypeName = message.getFieldList()[1].getTypeName();
      mapFieldOptions = {
        key: [
          keyType,
          keyTypeName ? keyTypeName.slice(1) : null,
        ],
        value: [
          valueType,
          valueTypeName ? valueTypeName.slice(1) : null,
        ],
      };
    }
    const pkg = fileDescriptor.getPackage() || "";
    const fileName = fileDescriptor.getName() || throwError(`Missing file name for message. Scope: ${scope} Message: ${messageName}`);
    const messageEntry: ExportMessageEntry = {
      pkg: pkg,
      fileName: fileName,
      messageOptions: messageOptions,
      mapFieldOptions: mapFieldOptions,
    };

    const packagePrefix = scope ? scope + "." : "";

    const entryName = `${packagePrefix}${messageName}`;
    this.messageMap[entryName] = messageEntry;

    message.getNestedTypeList().forEach(nested => {
      this.exportNested(`${packagePrefix}${messageName}`, fileDescriptor, nested);
    });

    message.getEnumTypeList().forEach(enumType => {
      const enumName = enumType.getName();
      const identifier = `${packagePrefix}${messageName}.${enumName}`;
      this.enumMap[identifier] = {
        pkg: pkg,
        fileName: fileName,
        enumOptions: enumType.getOptions(),
      };
    });
  }

  addFileDescriptor(fileDescriptor: FileDescriptorProto) {
    const scope = fileDescriptor.getPackage() || "";
    fileDescriptor.getMessageTypeList().forEach(messageType => {
      this.exportNested(scope, fileDescriptor, messageType);
    });

    fileDescriptor.getEnumTypeList().forEach(enumType => {
      const packagePrefix = scope ? scope + "." : "";
      const enumName = enumType.getName();
      this.enumMap[packagePrefix + enumName] = {
        pkg: scope,
        fileName: fileDescriptor.getName() || throwError(`Missing file descriptor name for enum. Scope: ${scope} Enum: ${enumName}`),
        enumOptions: enumType.getOptions(),
      };
    });
  }

  getMessage(str: string): ExportMessageEntry | undefined {
    return this.messageMap[str];
  }

  getEnum(str: string): ExportEnumEntry | undefined {
    return this.enumMap[str];
  }
}
