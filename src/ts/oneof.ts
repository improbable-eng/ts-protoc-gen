import {Printer} from "../Printer";
import {OneofDescriptorProto, FieldDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import { oneOfName, throwError } from "../util";

export function printOneOfDecl(oneOfDecl: OneofDescriptorProto, oneOfFields: Array<FieldDescriptorProto>, indentLevel: number) {
  const printer = new Printer(indentLevel);
  printer.printEmptyLn();
  const oneOfDeclName = oneOfDecl.getName() || throwError("Missing one_of name");
  printer.printLn(`export enum ${oneOfName(oneOfDeclName)}Case {`);
  printer.printIndentedLn(`${oneOfDeclName.toUpperCase()}_NOT_SET = 0,`);
  oneOfFields.forEach(field => {
    const fieldName = field.getName() || throwError("Missing field name");
    printer.printIndentedLn(`${fieldName.toUpperCase()} = ${field.getNumber()},`);
  });
  printer.printLn("}");

  return printer.output;
}
