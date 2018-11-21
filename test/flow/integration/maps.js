// @flow
import { assert } from "chai";
import { MapMessage } from "../../../examples/flow/generated/proto/examplecom/map_message_pb";
import {
  MapMessage$AsClass,
  MapMessage$AsClass_InternalEnum,
  MapMessage$AsClass_InternalChildMessage$AsClass
} from "../../../examples/flow/generated/proto/examplecom/map_message_pb.flow";

import { ExternalEnum } from "../../../examples/flow/generated/proto/othercom/external_enum_pb";
import { ExternalEnum as GeneratedExternalEnum } from "../../../examples/flow/generated/proto/othercom/external_enum_pb.flow";

import { ExternalChildMessage } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb";
import { type ExternalChildMessage$AsClass } from "../../../examples/flow/generated/proto/othercom/external_child_message_pb.flow";

const InternalEnum = MapMessage$AsClass_InternalEnum;
const InternalChildMessage = MapMessage.InternalChildMessage;
import { OrphanMapMessage } from "../../../examples/flow/generated/proto/orphan_pb";
import { type OrphanMapMessage$AsClass } from "../../../examples/flow/generated/proto/orphan_pb.flow";

describe("maps", () => {
  describe("message maps", () => {
    describe("internal message maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg: MapMessage$AsClass = new MapMessage();
        const childMsgOne: MapMessage$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
        childMsgOne.setMyString("one");

        const childMsgTwo: MapMessage$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
        childMsgTwo.setMyString("two");

        const myMap = parentMsg.getInternalChildrenMap();
        myMap.set("first", childMsgOne).set("second", childMsgTwo);

        assert.strictEqual(
          (parentMsg.getInternalChildrenMap().getLength(): number),
          2
        );
        const firstKey = parentMsg
          .getInternalChildrenMap()
          .keys()
          .next().value;
        assert.strictEqual((firstKey: string), "first");

        const firstEntry = parentMsg
          .getInternalChildrenMap()
          .entries()
          .next().value;
        assert.strictEqual((firstEntry[0]: string), "first");
        assert.strictEqual((firstEntry[1].getMyString(): string), "one");

        assert.deepEqual(
          (parentMsg
            .getInternalChildrenMap()
            .toObject(false, InternalChildMessage.toObject): Array<
            [
              string,
              {
                myString: string
              }
            ]
          >),
          [
            [
              "first",
              {
                myString: "one"
              }
            ],
            [
              "second",
              {
                myString: "two"
              }
            ]
          ]
        );

        assert.strictEqual((myMap.del("first"): boolean), true);
        assert.strictEqual((myMap.getLength(): number), 1);

        myMap.clear();

        assert.strictEqual((myMap.getLength(): number), 0);
      });
    });

    describe("external message maps", () => {
      it("should allow setting and getting external map fields", () => {
        const parentMsg: MapMessage$AsClass = new MapMessage();
        const childMsgOne: ExternalChildMessage$AsClass = new ExternalChildMessage();
        childMsgOne.setMyString("one");

        const childMsgTwo: ExternalChildMessage$AsClass = new ExternalChildMessage();
        childMsgTwo.setMyString("two");

        const myMap = parentMsg.getExternalChildrenMap();
        myMap.set("first", childMsgOne).set("second", childMsgTwo);

        assert.strictEqual(
          (parentMsg.getExternalChildrenMap().getLength(): number),
          2
        );
        const firstKey = parentMsg
          .getExternalChildrenMap()
          .keys()
          .next().value;
        assert.strictEqual((firstKey: string), "first");

        const firstEntry = parentMsg
          .getExternalChildrenMap()
          .entries()
          .next().value;
        assert.strictEqual((firstEntry[0]: string), "first");
        assert.strictEqual((firstEntry[1].getMyString(): string), "one");

        assert.deepEqual(
          (parentMsg
            .getExternalChildrenMap()
            .toObject(false, ExternalChildMessage.toObject): Array<
            [
              string,
              {
                myString: string
              }
            ]
          >),
          [
            [
              "first",
              {
                myString: "one"
              }
            ],
            [
              "second",
              {
                myString: "two"
              }
            ]
          ]
        );

        assert.strictEqual((myMap.del("first"): boolean), true);
        assert.strictEqual((myMap.getLength(): number), 1);
      });
    });
  });

  describe("enum maps", () => {
    describe("internal enum maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg: MapMessage$AsClass = new MapMessage();
        const myMap = parentMsg.getInternalEnumsMap();
        myMap
          .set(
            123,
            (InternalEnum: typeof MapMessage$AsClass_InternalEnum).FIRST
          )
          .set(
            456,
            (InternalEnum: typeof MapMessage$AsClass_InternalEnum).SECOND
          );

        assert.strictEqual(
          (parentMsg.getInternalEnumsMap().getLength(): number),
          2
        );
        const firstKey = parentMsg
          .getInternalEnumsMap()
          .keys()
          .next().value;
        assert.strictEqual((firstKey: number), 123);

        const firstEntry = parentMsg
          .getInternalEnumsMap()
          .entries()
          .next().value;
        assert.strictEqual((firstEntry[0]: number), 123);
        assert.strictEqual(
          (firstEntry[1]: typeof MapMessage$AsClass_InternalEnum),
          (InternalEnum: typeof MapMessage$AsClass_InternalEnum).FIRST
        );

        assert.deepEqual(
          (parentMsg.getInternalEnumsMap().toObject(false): Array<
            [number, typeof InternalEnum]
          >),
          [
            [123, (InternalEnum: typeof MapMessage$AsClass_InternalEnum).FIRST],
            [456, (InternalEnum: typeof MapMessage$AsClass_InternalEnum).SECOND]
          ]
        );
      });
    });

    describe("external enum maps", () => {
      it("should allow setting and getting internal map fields", () => {
        const parentMsg: MapMessage$AsClass = new MapMessage();
        const myMap = parentMsg.getExternalEnumsMap();
        myMap
          .set(123, (ExternalEnum: typeof GeneratedExternalEnum).FIRST)
          .set(456, (ExternalEnum: typeof GeneratedExternalEnum).SECOND);

        assert.strictEqual(
          (parentMsg.getExternalEnumsMap().getLength(): number),
          2
        );
        const firstKey = parentMsg
          .getExternalEnumsMap()
          .keys()
          .next().value;
        assert.strictEqual((firstKey: number), 123);

        const firstEntry = parentMsg
          .getExternalEnumsMap()
          .entries()
          .next().value;
        assert.strictEqual((firstEntry[0]: number), 123);
        assert.strictEqual(
          (firstEntry[1]: typeof GeneratedExternalEnum),
          (ExternalEnum: typeof GeneratedExternalEnum).FIRST
        );

        assert.deepEqual(
          (parentMsg.getExternalEnumsMap().toObject(false): Array<
            [number, $Values<typeof GeneratedExternalEnum>]
          >),
          [
            [123, (ExternalEnum: typeof GeneratedExternalEnum).FIRST],
            [456, (ExternalEnum: typeof GeneratedExternalEnum).SECOND]
          ]
        );

        assert.strictEqual((myMap.del(123): boolean), true);
        assert.strictEqual((myMap.getLength(): number), 1);
      });
    });
  });

  describe("primitive maps", () => {
    it("should allow setting and getting primitive map fields", () => {
      const parentMsg: MapMessage$AsClass = new MapMessage();
      const myMap = parentMsg.getPrimitiveIntsMap();
      myMap.set("first", 123).set("second", 456);

      assert.strictEqual(
        (parentMsg.getPrimitiveIntsMap().getLength(): number),
        2
      );
      const firstKey = parentMsg
        .getPrimitiveIntsMap()
        .keys()
        .next().value;
      assert.strictEqual((firstKey: string), "first");

      const firstEntry = parentMsg
        .getPrimitiveIntsMap()
        .entries()
        .next().value;
      assert.strictEqual((firstEntry[0]: string), "first");
      assert.strictEqual((firstEntry[1]: number), 123);

      assert.deepEqual(
        (parentMsg.getPrimitiveIntsMap().toObject(): Array<[string, number]>),
        [["first", 123], ["second", 456]]
      );

      assert.strictEqual((myMap.del("first"): boolean), true);
      assert.strictEqual((myMap.getLength(): number), 1);
    });
  });

  describe("orphan message maps", () => {
    it("should allow setting and getting map fields of messages without a package", () => {
      const parentMsg: OrphanMapMessage$AsClass = new OrphanMapMessage();
      const myMap = parentMsg.getPrimitiveIntsMap();
      myMap.set("first", 123).set("second", 456);

      assert.strictEqual(
        (parentMsg.getPrimitiveIntsMap().getLength(): number),
        2
      );
      const firstKey = parentMsg
        .getPrimitiveIntsMap()
        .keys()
        .next().value;
      assert.strictEqual((firstKey: string), "first");

      const firstEntry = parentMsg
        .getPrimitiveIntsMap()
        .entries()
        .next().value;
      assert.strictEqual((firstEntry[0]: string), "first");
      assert.strictEqual((firstEntry[1]: number), 123);

      assert.deepEqual(
        (parentMsg.getPrimitiveIntsMap().toObject(): Array<[string, number]>),
        [["first", 123], ["second", 456]]
      );

      assert.strictEqual((myMap.del("first"): boolean), true);
      assert.strictEqual((myMap.getLength(): number), 1);
    });
  });

  describe("toObject", () => {
    it("should have types", () => {
      const parentMsg: MapMessage$AsClass = new MapMessage();

      const childMsgOne: MapMessage$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
      childMsgOne.setMyString("one");
      const childMsgTwo: MapMessage$AsClass_InternalChildMessage$AsClass = new InternalChildMessage();
      childMsgTwo.setMyString("two");
      const internalChildrenMap = parentMsg.getInternalChildrenMap();
      internalChildrenMap.set("first", childMsgOne).set("second", childMsgTwo);

      const primitiveIntsMap = parentMsg.getPrimitiveIntsMap();
      primitiveIntsMap.set("first", 123).set("second", 456);

      const internalEnumsMap = parentMsg.getInternalEnumsMap();
      internalEnumsMap
        .set(123, InternalEnum.FIRST)
        .set(456, InternalEnum.SECOND);

      type mapType = {
        internalChildrenMap: Array<
          [
            string,
            {
              myString: string
            }
          ]
        >,
        externalChildrenMap: Array<
          [
            string,
            {
              myString: string
            }
          ]
        >,
        internalEnumsMap: Array<
          [number, $Values<typeof MapMessage$AsClass_InternalEnum>]
        >,
        externalEnumsMap: Array<
          [number, $Values<typeof GeneratedExternalEnum>]
        >,
        primitiveIntsMap: Array<[string, number]>
      };
      const actual = (parentMsg.toObject(): mapType);
      const expected: mapType = {
        externalEnumsMap: ([]: Array<
          [number, $Values<typeof GeneratedExternalEnum>]
        >),
        externalChildrenMap: ([]: Array<
          [
            string,
            {
              myString: string
            }
          ]
        >),
        internalEnumsMap: [
          [123, (InternalEnum: typeof MapMessage$AsClass_InternalEnum).FIRST],
          [456, (InternalEnum: typeof MapMessage$AsClass_InternalEnum).SECOND]
        ],
        internalChildrenMap: [
          [
            "first",
            {
              myString: "one"
            }
          ],
          [
            "second",
            {
              myString: "two"
            }
          ]
        ],
        primitiveIntsMap: [["first", 123], ["second", 456]]
      };
      assert.deepEqual(actual, expected);
    });
  });
});
