import {Ingredient} from "external/external_protos/external_pb";

describe("A suite is just a function", function() {
  it("and so is a spec", function() {
    expect(true).toBe(true);
  });
});

describe("Ingredient", () => {
  it("Imported class should not be null", () => {
    expect(Ingredient).toBeDefined();
  });
});
