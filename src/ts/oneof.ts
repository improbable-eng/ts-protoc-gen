import {Printer} from "../Printer";
import {OneofDescriptorProto, FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {oneOfName} from "../util";

export function printOneOfDecl(oneOfDecl: OneofDescriptorProto, oneOfFields: Array<FieldDescriptorProto>, indentLevel: number) {
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  const oneOfDeclName = oneOfDecl.getName()!;
  printer.printLn(`export enum ${oneOfName(oneOfDeclName)}Case {`);
  printer.printIndentedLn(`${oneOfDeclName.toUpperCase()}_NOT_SET = 0,`);
  oneOfFields.forEach(field => {
    printer.printIndentedLn(`${field.getName()!.toUpperCase()} = ${field.getNumber()},`);
  });
  printer.printLn("}");

  return printer.output;
}
