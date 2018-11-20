import {EnumDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {Printer} from "../Printer";

export function printEnum(enumDescriptor: EnumDescriptorProto, indentLevel: number, prefixName?: string) {
  const enumName = prefixName && prefixName !== "" ? `${prefixName}$${enumDescriptor.getName()}` : enumDescriptor.getName();
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  printer.printLn(`export const ${enumName} = {`);
  enumDescriptor.getValueList().forEach(value => {
    printer.printIndentedLn(`${value.getName().toUpperCase()}: ${value.getNumber()},`);
    printer.printIndentedLn(`"${value.getNumber()}": "${value.getName().toUpperCase()}",`);
  });
  printer.printLn(`}`);
  return printer.getOutput();
}
