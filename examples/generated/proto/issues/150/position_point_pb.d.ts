// package: issue_150
// file: proto/issues/150/position_point.proto

import * as jspb from "google-protobuf";

export class PositionPointDto extends jspb.Message {
  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): number;
  setLatitude(value: number): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): number;
  setLongitude(value: number): void;

  getLatitudevalueCase(): PositionPointDto.LatitudevalueCase;
  getLongitudevalueCase(): PositionPointDto.LongitudevalueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionPointDto.AsObject;
  static toObject(includeInstance: boolean, msg: PositionPointDto): PositionPointDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionPointDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionPointDto;
  static deserializeBinaryFromReader(message: PositionPointDto, reader: jspb.BinaryReader): PositionPointDto;
}

export namespace PositionPointDto {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }

  export enum LatitudevalueCase {
    LATITUDEVALUE_NOT_SET = 0,
    LATITUDE = 1,
  }

  export enum LongitudevalueCase {
    LONGITUDEVALUE_NOT_SET = 0,
    LONGITUDE = 2,
  }
}

