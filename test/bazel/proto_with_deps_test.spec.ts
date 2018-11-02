import {DeliveryPerson} from "ts_protoc_gen/test/bazel/proto/common/delivery_person_pb";

declare function require(module: string): any;

describe("DeliveryPerson", () => {
  it("Imported class should not be null", () => {
    expect(DeliveryPerson).toBeDefined();
  });

  it("Generated code seems to work", () => {
    const person = new DeliveryPerson();
    const name = "Doug";

    person.setName(name);

    expect(person.getName()).toBe(name);
  });

  it("pizza_ts_proto is included since it is a transitive dependency", () => {
    const PROTOS = require("ts_protoc_gen/test/bazel/proto/common/pizza_pb");
    const Pizza = PROTOS.Pizza;
    const PizzaSize = PROTOS.PizzaSize;
    const person = new DeliveryPerson();

    const pizza = new Pizza();
    pizza.setSize(PizzaSize.PIZZA_SIZE_LARGE);
    person.setPizzasList([pizza]);

    expect(person.getPizzasList().length).toBe(1);
  });
});
