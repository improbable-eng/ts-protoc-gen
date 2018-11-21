import {EnumDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {Printer} from "../Printer";

export function printEnum(enumDescriptor: EnumDescriptorProto, indentLevel: number, parentMessageName?: string) {
  const enumName = parentMessageName && parentMessageName !== "" ? `${parentMessageName}_${enumDescriptor.getName()}` : enumDescriptor.getName();
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  printer.printLn(`export const ${enumName} = Object.freeze({`);
  enumDescriptor.getValueList().forEach(value => {
    printer.printIndentedLn(`${value.getName().toUpperCase()}: ${value.getNumber()},`);
  });
  printer.printLn(`})`);

  // Reverse Lookup
  printer.printEmptyLn();
  printer.printLn(`export const ${enumName}$ReverseLookUp = Object.freeze({`);
  enumDescriptor.getValueList().forEach(value => {
    printer.printIndentedLn(`"${value.getNumber()}": "${value.getName().toUpperCase()}",`);
  });
  printer.printLn(`})`);
  return printer.getOutput();
}
