// package: issue_150
// file: proto/issues/150/position_info.proto

import * as jspb from "google-protobuf";
import * as proto_issues_150_position_point_pb from "../../../proto/issues/150/position_point_pb";

export class PositionInfoDto extends jspb.Message {
  hasPositionpointdto(): boolean;
  clearPositionpointdto(): void;
  getPositionpointdto(): proto_issues_150_position_point_pb.PositionPointDto | undefined;
  setPositionpointdto(value?: proto_issues_150_position_point_pb.PositionPointDto): void;

  hasSpeed(): boolean;
  clearSpeed(): void;
  getSpeed(): number;
  setSpeed(value: number): void;

  hasHeading(): boolean;
  clearHeading(): void;
  getHeading(): number;
  setHeading(value: number): void;

  hasLocationaccuracy(): boolean;
  clearLocationaccuracy(): void;
  getLocationaccuracy(): number;
  setLocationaccuracy(value: number): void;

  getSpeedvalueCase(): PositionInfoDto.SpeedvalueCase;
  getHeadingvalueCase(): PositionInfoDto.HeadingvalueCase;
  getLocationaccuracyvalueCase(): PositionInfoDto.LocationaccuracyvalueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionInfoDto.AsObject;
  static toObject(includeInstance: boolean, msg: PositionInfoDto): PositionInfoDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionInfoDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionInfoDto;
  static deserializeBinaryFromReader(message: PositionInfoDto, reader: jspb.BinaryReader): PositionInfoDto;
}

export namespace PositionInfoDto {
  export type AsObject = {
    positionpointdto?: proto_issues_150_position_point_pb.PositionPointDto.AsObject,
    speed: number,
    heading: number,
    locationaccuracy: number,
  }

  export enum SpeedvalueCase {
    SPEEDVALUE_NOT_SET = 0,
    SPEED = 2,
  }

  export enum HeadingvalueCase {
    HEADINGVALUE_NOT_SET = 0,
    HEADING = 3,
  }

  export enum LocationaccuracyvalueCase {
    LOCATIONACCURACYVALUE_NOT_SET = 0,
    LOCATIONACCURACY = 4,
  }
}

