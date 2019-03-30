import {EnumDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {Printer} from "../Printer";

export function printEnum(enumDescriptor: EnumDescriptorProto, indentLevel: number) {
  const printer = new Printer(indentLevel);
  const enumInterfaceName = `${enumDescriptor.getName()}Map`;
  printer.printEmptyLn();
  printer.printLn(`export interface ${enumInterfaceName} {`);
  enumDescriptor.getValueList().forEach(value => {
    printer.printIndentedLn(`${value.getName().toUpperCase()}: ${value.getNumber()};`);
  });
  printer.printLn(`}`);
  printer.printEmptyLn();
  printer.printLn(`export const ${enumDescriptor.getName()}: ${enumInterfaceName};`);
  return printer.getOutput();
}
