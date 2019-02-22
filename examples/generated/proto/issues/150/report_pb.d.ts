// package: issue_150
// file: proto/issues/150/report.proto

import * as jspb from "google-protobuf";
import * as proto_issues_150_position_info_pb from "../../../proto/issues/150/position_info_pb";

export class ReportDto extends jspb.Message {
  hasPositioninfodto(): boolean;
  clearPositioninfodto(): void;
  getPositioninfodto(): proto_issues_150_position_info_pb.PositionInfoDto | undefined;
  setPositioninfodto(value?: proto_issues_150_position_info_pb.PositionInfoDto): void;

  getPoiid(): number;
  setPoiid(value: number): void;

  getReporttype(): ReportDto.ReportType;
  setReporttype(value: ReportDto.ReportType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportDto.AsObject;
  static toObject(includeInstance: boolean, msg: ReportDto): ReportDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportDto;
  static deserializeBinaryFromReader(message: ReportDto, reader: jspb.BinaryReader): ReportDto;
}

export namespace ReportDto {
  export type AsObject = {
    positioninfodto?: proto_issues_150_position_info_pb.PositionInfoDto.AsObject,
    poiid: number,
    reporttype: ReportDto.ReportType,
  }

  export enum ReportType {
    UNKNOWN = 0,
    ACCIDENT = 1,
  }
}

