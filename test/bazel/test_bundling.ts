import {DeliveryPerson} from "ts_protoc_gen/test/bazel/proto/common/delivery_person_pb";
import {
  alllowercase,
  ALLUPPERCASE,
  lowerCamelCase,
  UpperCamelCase,
  snake_case_snake_case,
  Upper_snake_Case,
  M2M,
  M_2M,
  M2_M,
  M2M_,
  m_22M,
  m42_M,
  m24M_,
  M9,
} from "ts_protoc_gen/test/bazel/proto/naming_styles_pb";

const person = new DeliveryPerson();
console.log(person);

console.log(new alllowercase().setTest(1));
console.log(new ALLUPPERCASE().setTest(1));
console.log(new lowerCamelCase().setTest(1));
console.log(new UpperCamelCase().setTest(1));
console.log(new snake_case_snake_case().setTest(1));
console.log(new Upper_snake_Case().setTest(1));
console.log(new M2M().setTest(1));
console.log(new M_2M().setTest(1));
console.log(new M2_M().setTest(1));
console.log(new M2M_().setTest(1));
console.log(new m_22M().setTest(1));
console.log(new m42_M().setTest(1));
console.log(new m24M_().setTest(1));
console.log(new M9().setTest(1));
