// @flow
// package: examplecom
// file: proto/examplecom/parent_message_v3.proto

import * as jspb from "google-protobuf";
import * as proto_othercom_external_child_message_pb from "../../proto/othercom/external_child_message_pb.flow.js";

export class ParentMessageV3$AsClass extends jspb.Message {
  hasInternalChildMessage: () => boolean;
  clearInternalChildMessage: () => void;
  getInternalChildMessage: () => ?ParentMessageV3$AsClass_InternalChildMessage$AsClass;
  setInternalChildMessage: (value?: ParentMessageV3$AsClass_InternalChildMessage$AsClass) => void;

  clearInternalChildrenList: () => void;
  getInternalChildrenList: () => Array<ParentMessageV3$AsClass_InternalChildMessage$AsClass>;
  setInternalChildrenList: (value: Array<ParentMessageV3$AsClass_InternalChildMessage$AsClass>) => void;
  addInternalChildren: (value?: ParentMessageV3$AsClass_InternalChildMessage$AsClass, index?: number) => ParentMessageV3$AsClass_InternalChildMessage$AsClass;

  hasExternalChildMessage: () => boolean;
  clearExternalChildMessage: () => void;
  getExternalChildMessage: () => ?proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass;
  setExternalChildMessage: (value?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass) => void;

  clearExternalChildrenList: () => void;
  getExternalChildrenList: () => Array<proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass>;
  setExternalChildrenList: (value: Array<proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass>) => void;
  addExternalChildren: (value?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass, index?: number) => proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ParentMessageV3$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ParentMessageV3$AsClass) => ParentMessageV3$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ParentMessageV3$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ParentMessageV3$AsClass;
  static deserializeBinaryFromReader: (message: ParentMessageV3$AsClass, reader: jspb.BinaryReader) => ParentMessageV3$AsClass;
}

export type ParentMessageV3$AsClass$AsObject = {
  internalChildMessage?: ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject,
  internalChildrenList: Array<ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject>,
  externalChildMessage?: proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject,
  externalChildrenList: Array<proto_othercom_external_child_message_pb.ExternalChildMessage$AsClass$AsObject>,
}

export class ParentMessageV3$AsClass_InternalChildMessage$AsClass extends jspb.Message {
  getMyString: () => string;
  setMyString: (value: string) => void;

  serializeBinary: () => Uint8Array;
  toObject: (includeInstance?: boolean) => ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject;
  static toObject: (includeInstance: boolean, msg: ParentMessageV3$AsClass_InternalChildMessage$AsClass) => ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter: (message: ParentMessageV3$AsClass_InternalChildMessage$AsClass, writer: jspb.BinaryWriter) => void;
  static deserializeBinary: (bytes: Uint8Array) => ParentMessageV3$AsClass_InternalChildMessage$AsClass;
  static deserializeBinaryFromReader: (message: ParentMessageV3$AsClass_InternalChildMessage$AsClass, reader: jspb.BinaryReader) => ParentMessageV3$AsClass_InternalChildMessage$AsClass;
}

export type ParentMessageV3$AsClass_InternalChildMessage$AsClass$AsObject = {
  myString: string,
}

