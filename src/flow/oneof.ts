import {Printer} from "../Printer";
import {OneofDescriptorProto, FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {oneOfName} from "../util";

export function printOneOfDecl(oneOfDecl: OneofDescriptorProto, oneOfFields: Array<FieldDescriptorProto>, indentLevel: number, prefixName?: string) {
  const oneOfTitle = prefixName && prefixName !== "" ? `${prefixName}$${oneOfName(oneOfDecl.getName())}` : oneOfName(oneOfDecl.getName())
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  printer.printLn(`export const ${oneOfTitle}Case = {`);
  printer.printIndentedLn(`${oneOfDecl.getName().toUpperCase()}_NOT_SET: 0,`);
  oneOfFields.forEach(field => {
    printer.printIndentedLn(`${field.getName().toUpperCase()}: ${field.getNumber()},`);
  });
  printer.printLn("}");

  return printer.output;
}
