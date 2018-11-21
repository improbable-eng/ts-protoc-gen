// @flow
// package: examplecom
// file: proto/examplecom/parent_message_v2.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";

export class ParentMessageV2$AsClass extends jspb.Message {
  hasInternalChildMessage: () => boolean;
  clearInternalChildMessage: () => void;
  getInternalChildMessage: () => ParentMessageV2$AsClass_InternalChildMessage$AsClass;
  setInternalChildMessage: (value?: ParentMessageV2$AsClass_InternalChildMessage$AsClass) => void;

  hasOptInternalChildMessage: () => boolean;
  clearOptInternalChildMessage: () => void;
  getOptInternalChildMessage: () => ?ParentMessageV2$AsClass_InternalChildMessage$AsClass;
  setOptInternalChildMessage: (value?: ParentMessageV2$AsClass_InternalChildMessage$AsClass) => void;

  clearInternalChildrenList: () => void;
  getInternalChildrenList: () => Array<ParentMessageV2$AsClass_InternalChildMessage$AsClass>;
  setInternalChildrenList: (value: Array<ParentMessageV2$AsClass_InternalChildMessage$AsClass>) => void;
  addInternalChildren: (value?: ParentMessageV2$AsClass_InternalChildMessage$AsClass, index?: number) => ParentMessageV2$AsClass_InternalChildMessage$AsClass;

  hasExternalChildMessage: () => boolean;
  clearExternalChildMessage: () => void;
  getExternalChildMessage: () => proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass;
  setExternalChildMessage: (value?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass) => void;

  hasOptExternalChildMessage: () => boolean;
  clearOptExternalChildMessage: () => void;
  getOptExternalChildMessage: () => ?proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass;
  setOptExternalChildMessage: (value?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass) => void;

  clearExternalChildrenList: () => void;
  getExternalChildrenList: () => Array<proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass>;
  setExternalChildrenList: (value: Array<proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass>) => void;
  addExternalChildren: (value?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass, index?: number) => proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ParentMessageV2$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ParentMessageV2$AsClass) => ParentMessageV2$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ParentMessageV2$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ParentMessageV2$AsClass;
  static deserializeBinaryFromReader: (message: ParentMessageV2$AsClass, reader: jspb.BinaryReader) => ParentMessageV2$AsClass;
}

export type ParentMessageV2$AsClass$AsObject = {
  internalChildMessage: ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject,
  optInternalChildMessage?: ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject,
  internalChildrenList: Array<ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject>,
  externalChildMessage: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject,
  optExternalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject,
  externalChildrenList: Array<proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject>,
}

export class ParentMessageV2$AsClass_InternalChildMessage$AsClass extends jspb.Message {
  hasMyString: () => boolean;
  clearMyString: () => void;
  getMyString: () => ?string;
  setMyString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ParentMessageV2$AsClass_InternalChildMessage$AsClass) => ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ParentMessageV2$AsClass_InternalChildMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ParentMessageV2$AsClass_InternalChildMessage$AsClass;
  static deserializeBinaryFromReader: (message: ParentMessageV2$AsClass_InternalChildMessage$AsClass, reader: jspb.BinaryReader) => ParentMessageV2$AsClass_InternalChildMessage$AsClass;
}

export type ParentMessageV2$AsClass_InternalChildMessage$AsClass$AsObject = {
  myString?: string,
}

