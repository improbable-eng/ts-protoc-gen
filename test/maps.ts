import {assert} from "chai";
import {MapMessage} from "../examples/generated/examplecom/map_message_pb";
import {ExternalEnum} from "../examples/generated/othercom/external_enum_pb";
import {ExternalChildMessage} from "../examples/generated/othercom/external_child_message_pb";
import InternalEnum = MapMessage.InternalEnum;
import InternalChildMessage = MapMessage.InternalChildMessage;
import {OrphanMapMessage} from "../examples/generated/orphan_pb";

describe("maps", () => {
  describe("message maps", () => {
    describe("internal message maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg = new MapMessage();
        const childMsgOne = new InternalChildMessage();
        childMsgOne.setMyString("one");

        const childMsgTwo = new InternalChildMessage();
        childMsgTwo.setMyString("two");

        const myMap = parentMsg.getInternalChildrenMap();
        myMap.set("first", childMsgOne).set("second", childMsgTwo);

        assert.strictEqual(parentMsg.getInternalChildrenMap().getLength() as number, 2);
        const firstKey = parentMsg.getInternalChildrenMap().keys().next().value;
        assert.strictEqual(firstKey as string, "first");

        const firstEntry = parentMsg.getInternalChildrenMap().entries().next().value;
        assert.strictEqual(firstEntry[0] as string, "first");
        assert.strictEqual(firstEntry[1].getMyString() as string, "one");

        assert.deepEqual(parentMsg.getInternalChildrenMap().toObject(false, InternalChildMessage.toObject) as Array<[string, {
          myString: string,
        }]>, [
          ["first", {
            "myString": "one",
          }],
          ["second", {
            "myString": "two",
          }],
        ]);

        assert.strictEqual(myMap.del("first") as boolean, true);
        assert.strictEqual(myMap.getLength() as number, 1);

        myMap.clear();

        assert.strictEqual(myMap.getLength() as number, 0);
      });
    });

    describe("external message maps", () => {
      it("should allow setting and getting external map fields", () => {
        const parentMsg = new MapMessage();
        const childMsgOne = new ExternalChildMessage();
        childMsgOne.setMyString("one");

        const childMsgTwo = new ExternalChildMessage();
        childMsgTwo.setMyString("two");

        const myMap = parentMsg.getExternalChildrenMap();
        myMap.set("first", childMsgOne).set("second", childMsgTwo);

        assert.strictEqual(parentMsg.getExternalChildrenMap().getLength() as number, 2);
        const firstKey = parentMsg.getExternalChildrenMap().keys().next().value;
        assert.strictEqual(firstKey as string, "first");

        const firstEntry = parentMsg.getExternalChildrenMap().entries().next().value;
        assert.strictEqual(firstEntry[0] as string, "first");
        assert.strictEqual(firstEntry[1].getMyString() as string, "one");

        assert.deepEqual(parentMsg.getExternalChildrenMap().toObject(false, ExternalChildMessage.toObject) as Array<[string, {
          myString: string,
        }]>, [
          ["first", {
            "myString": "one",
          }],
          ["second", {
            "myString": "two",
          }],
        ]);

        assert.strictEqual(myMap.del("first") as boolean, true);
        assert.strictEqual(myMap.getLength() as number, 1);
      });
    });
  });

  describe("enum maps", () => {
    describe("internal enum maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg = new MapMessage();
        const myMap = parentMsg.getInternalEnumsMap();
        myMap.set(123, InternalEnum.FIRST).set(456, InternalEnum.SECOND);

        assert.strictEqual(parentMsg.getInternalEnumsMap().getLength() as number, 2);
        const firstKey = parentMsg.getInternalEnumsMap().keys().next().value;
        assert.strictEqual(firstKey as number, 123);

        const firstEntry = parentMsg.getInternalEnumsMap().entries().next().value;
        assert.strictEqual(firstEntry[0] as number, 123);
        assert.strictEqual(firstEntry[1] as InternalEnum, InternalEnum.FIRST);

        assert.deepEqual(parentMsg.getInternalEnumsMap().toObject(false) as Array<[number, InternalEnum]>, [
          [123, InternalEnum.FIRST],
          [456, InternalEnum.SECOND],
        ]);
      });
    });

    describe("external enum maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg = new MapMessage();
        const myMap = parentMsg.getExternalEnumsMap();
        myMap.set(123, ExternalEnum.FIRST).set(456, ExternalEnum.SECOND);

        assert.strictEqual(parentMsg.getExternalEnumsMap().getLength() as number, 2);
        const firstKey = parentMsg.getExternalEnumsMap().keys().next().value;
        assert.strictEqual(firstKey as number, 123);

        const firstEntry = parentMsg.getExternalEnumsMap().entries().next().value;
        assert.strictEqual(firstEntry[0] as number, 123);
        assert.strictEqual(firstEntry[1] as ExternalEnum, ExternalEnum.FIRST);

        assert.deepEqual(parentMsg.getExternalEnumsMap().toObject(false) as Array<[number, ExternalEnum]>, [
          [123, ExternalEnum.FIRST],
          [456, ExternalEnum.SECOND],
        ]);

        assert.strictEqual(myMap.del(123) as boolean, true);
        assert.strictEqual(myMap.getLength() as number, 1);
      });
    });
  });

  describe("primitive maps", () => {
    it("should allow setting and getting primitive map fields", () => {
      const parentMsg = new MapMessage();
      const myMap = parentMsg.getPrimitiveIntsMap();
      myMap.set("first", 123).set("second", 456);

      assert.strictEqual(parentMsg.getPrimitiveIntsMap().getLength() as number, 2);
      const firstKey = parentMsg.getPrimitiveIntsMap().keys().next().value;
      assert.strictEqual(firstKey as string, "first");

      const firstEntry = parentMsg.getPrimitiveIntsMap().entries().next().value;
      assert.strictEqual(firstEntry[0] as string, "first");
      assert.strictEqual(firstEntry[1] as number, 123);

      assert.deepEqual(parentMsg.getPrimitiveIntsMap().toObject() as Array<[string, number]>, [
        ["first", 123],
        ["second", 456],
      ]);

      assert.strictEqual(myMap.del("first") as boolean, true);
      assert.strictEqual(myMap.getLength() as number, 1);
    });
  });

  describe("orphan message maps", () => {
    it("should allow setting and getting map fields of messages without a package", () => {
      const parentMsg = new OrphanMapMessage();
      const myMap = parentMsg.getPrimitiveIntsMap();
      myMap.set("first", 123).set("second", 456);

      assert.strictEqual(parentMsg.getPrimitiveIntsMap().getLength() as number, 2);
      const firstKey = parentMsg.getPrimitiveIntsMap().keys().next().value;
      assert.strictEqual(firstKey as string, "first");

      const firstEntry = parentMsg.getPrimitiveIntsMap().entries().next().value;
      assert.strictEqual(firstEntry[0] as string, "first");
      assert.strictEqual(firstEntry[1] as number, 123);

      assert.deepEqual(parentMsg.getPrimitiveIntsMap().toObject() as Array<[string, number]>, [
        ["first", 123],
        ["second", 456],
      ]);

      assert.strictEqual(myMap.del("first") as boolean, true);
      assert.strictEqual(myMap.getLength() as number, 1);
    });
  });

  describe("toObject", () => {
    it("should have types", () => {
      const parentMsg = new MapMessage();

      const childMsgOne = new InternalChildMessage();
      childMsgOne.setMyString("one");
      const childMsgTwo = new InternalChildMessage();
      childMsgTwo.setMyString("two");
      const internalChildrenMap = parentMsg.getInternalChildrenMap();
      internalChildrenMap.set("first", childMsgOne).set("second", childMsgTwo);

      const primitiveIntsMap = parentMsg.getPrimitiveIntsMap();
      primitiveIntsMap.set("first", 123).set("second", 456);

      const internalEnumsMap = parentMsg.getInternalEnumsMap();
      internalEnumsMap.set(123, InternalEnum.FIRST).set(456, InternalEnum.SECOND);

      type mapType = {
        internalChildrenMap: Array<[string, {
          myString: string,
        }]>,
        externalChildrenMap: Array<[string, {
          myString: string,
        }]>,
        internalEnumsMap: Array<[number, InternalEnum]>
        externalEnumsMap: Array<[number, ExternalEnum]>
        primitiveIntsMap: Array<[string, number]>

      };
      const actual = parentMsg.toObject() as mapType;
      const expected: mapType = {
        externalEnumsMap: [] as Array<[number, ExternalEnum]>,
        externalChildrenMap: [] as Array<[string, {
          myString: string,
        }]>,
        internalEnumsMap: [
          [123, InternalEnum.FIRST],
          [456, InternalEnum.SECOND],
        ],
        internalChildrenMap: [
          ["first", {
            "myString": "one"
          }],
          ["second", {
            "myString": "two"
          }]
        ],
        primitiveIntsMap: [
          ["first", 123],
          ["second", 456],
        ],
      };
      assert.deepEqual(actual, expected);
    });
  });
});
