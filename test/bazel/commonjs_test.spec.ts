import deliveryPersonPb = require("ts_protoc_gen/test/bazel/proto/common/delivery_person_pb");
import {PizzaService} from "ts_protoc_gen/test/bazel/proto/pizza_service_pb_service";

describe("CommonJs", () => {
  it("Loads imports using require()", () => {
    expect(deliveryPersonPb).toBeDefined();

    const person = new deliveryPersonPb.DeliveryPerson();
    person.setName("Doug");
    expect(person).toBeDefined();
  });

  it("Loads imports using TS from syntax", () => {
    expect(PizzaService).toBeDefined();
  });
});
