// package: examplecom
// file: proto/examplecom/reserved_words.proto

import * as jspb from "google-protobuf";

export class ReservedWordsMessage extends jspb.Message {
  getAbstract(): string;
  setAbstract(value: string): ReservedWordsMessage;

  getBoolean(): string;
  setBoolean(value: string): ReservedWordsMessage;

  getBreak(): string;
  setBreak(value: string): ReservedWordsMessage;

  getByte(): string;
  setByte(value: string): ReservedWordsMessage;

  getCase(): string;
  setCase(value: string): ReservedWordsMessage;

  getCatch(): string;
  setCatch(value: string): ReservedWordsMessage;

  getChar(): string;
  setChar(value: string): ReservedWordsMessage;

  getClass(): string;
  setClass(value: string): ReservedWordsMessage;

  getConst(): string;
  setConst(value: string): ReservedWordsMessage;

  getContinue(): string;
  setContinue(value: string): ReservedWordsMessage;

  getDebugger(): string;
  setDebugger(value: string): ReservedWordsMessage;

  getDefault(): string;
  setDefault(value: string): ReservedWordsMessage;

  getDelete(): string;
  setDelete(value: string): ReservedWordsMessage;

  getDo(): string;
  setDo(value: string): ReservedWordsMessage;

  getDouble(): string;
  setDouble(value: string): ReservedWordsMessage;

  getElse(): string;
  setElse(value: string): ReservedWordsMessage;

  getEnum(): string;
  setEnum(value: string): ReservedWordsMessage;

  getExport(): string;
  setExport(value: string): ReservedWordsMessage;

  getExtends(): string;
  setExtends(value: string): ReservedWordsMessage;

  getFalse(): string;
  setFalse(value: string): ReservedWordsMessage;

  getFinal(): string;
  setFinal(value: string): ReservedWordsMessage;

  getFinally(): string;
  setFinally(value: string): ReservedWordsMessage;

  getFloat(): string;
  setFloat(value: string): ReservedWordsMessage;

  getFor(): string;
  setFor(value: string): ReservedWordsMessage;

  getFunction(): string;
  setFunction(value: string): ReservedWordsMessage;

  getGoto(): string;
  setGoto(value: string): ReservedWordsMessage;

  getIf(): string;
  setIf(value: string): ReservedWordsMessage;

  getImplements(): string;
  setImplements(value: string): ReservedWordsMessage;

  getImport(): string;
  setImport(value: string): ReservedWordsMessage;

  getIn(): string;
  setIn(value: string): ReservedWordsMessage;

  getInstanceof(): string;
  setInstanceof(value: string): ReservedWordsMessage;

  getInt(): string;
  setInt(value: string): ReservedWordsMessage;

  getInterface(): string;
  setInterface(value: string): ReservedWordsMessage;

  getLong(): string;
  setLong(value: string): ReservedWordsMessage;

  getNative(): string;
  setNative(value: string): ReservedWordsMessage;

  getNew(): string;
  setNew(value: string): ReservedWordsMessage;

  getNull(): string;
  setNull(value: string): ReservedWordsMessage;

  getPackage(): string;
  setPackage(value: string): ReservedWordsMessage;

  getPrivate(): string;
  setPrivate(value: string): ReservedWordsMessage;

  getProtected(): string;
  setProtected(value: string): ReservedWordsMessage;

  getPublic(): string;
  setPublic(value: string): ReservedWordsMessage;

  getReturn(): string;
  setReturn(value: string): ReservedWordsMessage;

  getShort(): string;
  setShort(value: string): ReservedWordsMessage;

  getStatic(): string;
  setStatic(value: string): ReservedWordsMessage;

  getSuper(): string;
  setSuper(value: string): ReservedWordsMessage;

  getSwitch(): string;
  setSwitch(value: string): ReservedWordsMessage;

  getSynchronized(): string;
  setSynchronized(value: string): ReservedWordsMessage;

  getThis(): string;
  setThis(value: string): ReservedWordsMessage;

  getThrow(): string;
  setThrow(value: string): ReservedWordsMessage;

  getThrows(): string;
  setThrows(value: string): ReservedWordsMessage;

  getTransient(): string;
  setTransient(value: string): ReservedWordsMessage;

  getTry(): string;
  setTry(value: string): ReservedWordsMessage;

  getTypeof(): string;
  setTypeof(value: string): ReservedWordsMessage;

  getVar(): string;
  setVar(value: string): ReservedWordsMessage;

  getVoid(): string;
  setVoid(value: string): ReservedWordsMessage;

  getVolatile(): string;
  setVolatile(value: string): ReservedWordsMessage;

  getWhile(): string;
  setWhile(value: string): ReservedWordsMessage;

  getWith(): string;
  setWith(value: string): ReservedWordsMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReservedWordsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ReservedWordsMessage): ReservedWordsMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReservedWordsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReservedWordsMessage;
  static deserializeBinaryFromReader(message: ReservedWordsMessage, reader: jspb.BinaryReader): ReservedWordsMessage;
}

export namespace ReservedWordsMessage {
  export type AsObject = {
    pb_abstract: string,
    pb_boolean: string,
    pb_break: string,
    pb_byte: string,
    pb_case: string,
    pb_catch: string,
    pb_char: string,
    pb_class: string,
    pb_const: string,
    pb_continue: string,
    pb_debugger: string,
    pb_default: string,
    pb_delete: string,
    pb_do: string,
    pb_double: string,
    pb_else: string,
    pb_enum: string,
    pb_export: string,
    pb_extends: string,
    pb_false: string,
    pb_final: string,
    pb_finally: string,
    pb_float: string,
    pb_for: string,
    pb_function: string,
    pb_goto: string,
    pb_if: string,
    pb_implements: string,
    pb_import: string,
    pb_in: string,
    pb_instanceof: string,
    pb_int: string,
    pb_interface: string,
    pb_long: string,
    pb_native: string,
    pb_new: string,
    pb_null: string,
    pb_package: string,
    pb_private: string,
    pb_protected: string,
    pb_public: string,
    pb_return: string,
    pb_short: string,
    pb_static: string,
    pb_super: string,
    pb_switch: string,
    pb_synchronized: string,
    pb_this: string,
    pb_throw: string,
    pb_throws: string,
    pb_transient: string,
    pb_try: string,
    pb_typeof: string,
    pb_var: string,
    pb_void: string,
    pb_volatile: string,
    pb_while: string,
    pb_with: string,
  }
}

