import {EnumDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {Printer} from "../Printer";

export function printEnum(enumDescriptor: EnumDescriptorProto, indentLevel: number) {
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  printer.printLn(`export enum ${enumDescriptor.getName()} {`);
  enumDescriptor.getValueList().forEach(value => {
    printer.printIndentedLn(`${value.getName()} = ${value.getNumber()},`);
  });
  printer.printLn(`}`);
  return printer.getOutput();
}
