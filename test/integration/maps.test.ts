import {MapMessage} from "../../examples/generated/proto/examplecom/map_message_pb";
import {ExternalEnum, ExternalEnumMap} from "../../examples/generated/proto/othercom/external_enum_pb";
import {ExternalChildMessage} from "../../examples/generated/proto/othercom/external_child_message_pb";
import InternalEnum = MapMessage.InternalEnum;
import InternalEnumMap = MapMessage.InternalEnumMap;
import InternalChildMessage = MapMessage.InternalChildMessage;
import {OrphanMapMessage} from "../../examples/generated/proto/orphan_pb";

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

        expect(parentMsg.getInternalChildrenMap().getLength() as number).toStrictEqual(2);
        const firstKey = parentMsg.getInternalChildrenMap().keys().next().value;
        expect(firstKey as string).toStrictEqual("first");

        const firstEntry = parentMsg.getInternalChildrenMap().entries().next().value;
        expect(firstEntry[0] as string).toStrictEqual("first");
        expect(firstEntry[1].getMyString() as string).toStrictEqual("one");

        expect(parentMsg.getInternalChildrenMap().toObject(false, InternalChildMessage.toObject) as Array<[string, {
          myString: string,
        }]>).toStrictEqual([
          ["first", {
            "myString": "one",
          }],
          ["second", {
            "myString": "two",
          }],
        ]);

        expect(myMap.del("first") as boolean).toStrictEqual(true);
        expect(myMap.getLength() as number).toStrictEqual(1);

        myMap.clear();

        expect(myMap.getLength() as number).toStrictEqual(0);
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

        expect(parentMsg.getExternalChildrenMap().getLength() as number).toStrictEqual(2);
        const firstKey = parentMsg.getExternalChildrenMap().keys().next().value;
        expect(firstKey as string).toStrictEqual("first");

        const firstEntry = parentMsg.getExternalChildrenMap().entries().next().value;
        expect(firstEntry[0] as string).toStrictEqual("first");
        expect(firstEntry[1].getMyString() as string).toStrictEqual("one");

        expect(parentMsg.getExternalChildrenMap().toObject(false, ExternalChildMessage.toObject) as Array<[string, {
          myString: string,
        }]>).toStrictEqual([
          ["first", {
            "myString": "one",
          }],
          ["second", {
            "myString": "two",
          }],
        ]);

        expect(myMap.del("first") as boolean).toStrictEqual(true);
        expect(myMap.getLength() as number).toStrictEqual(1);
      });
    });
  });

  describe("enum maps", () => {
    describe("internal enum maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg = new MapMessage();
        const myMap = parentMsg.getInternalEnumsMap();
        myMap.set(123, InternalEnum.FIRST).set(456, InternalEnum.SECOND);

        expect(parentMsg.getInternalEnumsMap().getLength() as number).toStrictEqual(2);
        const firstKey = parentMsg.getInternalEnumsMap().keys().next().value;
        expect(firstKey as number).toStrictEqual(123);

        const firstEntry = parentMsg.getInternalEnumsMap().entries().next().value;
        expect(firstEntry[0] as number).toStrictEqual(123);
        expect(firstEntry[1]).toStrictEqual(InternalEnum.FIRST);

        expect(parentMsg.getInternalEnumsMap().toObject(false) as Array<[number, InternalEnumMap[keyof InternalEnumMap]]>).toStrictEqual([
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

        expect(parentMsg.getExternalEnumsMap().getLength() as number).toStrictEqual(2);
        const firstKey = parentMsg.getExternalEnumsMap().keys().next().value;
        expect(firstKey as number).toStrictEqual(123);

        const firstEntry = parentMsg.getExternalEnumsMap().entries().next().value;
        expect(firstEntry[0] as number).toStrictEqual(123);
        expect(firstEntry[1]).toStrictEqual(ExternalEnum.FIRST);

        expect(parentMsg.getExternalEnumsMap().toObject(false) as Array<[number, InternalEnumMap[keyof InternalEnumMap]]>).toStrictEqual([
          [123, ExternalEnum.FIRST],
          [456, ExternalEnum.SECOND],
        ]);

        expect(myMap.del(123) as boolean).toStrictEqual(true);
        expect(myMap.getLength() as number).toStrictEqual(1);
      });
    });
  });

  describe("primitive maps", () => {
    it("should allow setting and getting primitive map fields", () => {
      const parentMsg = new MapMessage();
      const myMap = parentMsg.getPrimitiveIntsMap();
      myMap.set("first", 123).set("second", 456);

      expect(parentMsg.getPrimitiveIntsMap().getLength() as number).toStrictEqual(2);
      const firstKey = parentMsg.getPrimitiveIntsMap().keys().next().value;
      expect(firstKey as string).toStrictEqual("first");

      const firstEntry = parentMsg.getPrimitiveIntsMap().entries().next().value;
      expect(firstEntry[0] as string).toStrictEqual("first");
      expect(firstEntry[1] as number).toStrictEqual(123);

      expect(parentMsg.getPrimitiveIntsMap().toObject() as Array<[string, number]>).toStrictEqual([
        ["first", 123],
        ["second", 456],
      ]);

      expect(myMap.del("first") as boolean).toStrictEqual(true);
      expect(myMap.getLength() as number).toStrictEqual(1);
    });
  });

  describe("orphan message maps", () => {
    it("should allow setting and getting map fields of messages without a package", () => {
      const parentMsg = new OrphanMapMessage();
      const myMap = parentMsg.getPrimitiveIntsMap();
      myMap.set("first", 123).set("second", 456);

      expect(parentMsg.getPrimitiveIntsMap().getLength() as number).toStrictEqual(2);
      const firstKey = parentMsg.getPrimitiveIntsMap().keys().next().value;
      expect(firstKey as string).toStrictEqual("first");

      const firstEntry = parentMsg.getPrimitiveIntsMap().entries().next().value;
      expect(firstEntry[0] as string).toStrictEqual("first");
      expect(firstEntry[1] as number).toStrictEqual(123);

      expect(parentMsg.getPrimitiveIntsMap().toObject() as Array<[string, number]>).toStrictEqual([
        ["first", 123],
        ["second", 456],
      ]);

      expect(myMap.del("first") as boolean).toStrictEqual(true);
      expect(myMap.getLength() as number).toStrictEqual(1);
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
        internalEnumsMap: Array<[number, InternalEnumMap[keyof InternalEnumMap]]>
        externalEnumsMap: Array<[number, ExternalEnumMap[keyof ExternalEnumMap]]>
        primitiveIntsMap: Array<[string, number]>

      };
      const actual = parentMsg.toObject() as mapType;
      const expected: mapType = {
        externalEnumsMap: [] as Array<[number, ExternalEnumMap[keyof ExternalEnumMap]]>,
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
      expect(actual).toEqual(expected);
    });
  });
});
