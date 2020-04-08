import {EnumDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {Printer} from "../Printer";
import {EnumComments} from "./CommentsMap";

export function printEnum(enumDescriptor: EnumDescriptorProto, indentLevel: number, comments: EnumComments) {
  const printer = new Printer(indentLevel);
  const enumInterfaceName = `${enumDescriptor.getName()}Map`;
  printer.printEmptyLn();
  comments.printLeadingComments(text => printer.printLn(text));
  printer.printLn(`export interface ${enumInterfaceName} {`);
  enumDescriptor.getValueList().forEach((value, i) => {
    const valueComments = comments.getValue(i);
    valueComments.printLeadingComments(text => printer.printIndentedLn(text));
    printer.printIndentedLn(`${value.getName().toUpperCase()}: ${value.getNumber()};`);
  });
  printer.printLn(`}`);
  printer.printEmptyLn();
  printer.printLn(`export const ${enumDescriptor.getName()}: ${enumInterfaceName};`);
  return printer.getOutput();
}
