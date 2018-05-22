// package: examplecom
// file: examplecom/reserved_words.proto

import * as jspb from "google-protobuf";

export class ReservedWordsMessage extends jspb.Message {
  getAbstract(): string;
  setAbstract(value: string): void;

  getBoolean(): string;
  setBoolean(value: string): void;

  getBreak(): string;
  setBreak(value: string): void;

  getByte(): string;
  setByte(value: string): void;

  getCase(): string;
  setCase(value: string): void;

  getCatch(): string;
  setCatch(value: string): void;

  getChar(): string;
  setChar(value: string): void;

  getClass(): string;
  setClass(value: string): void;

  getConst(): string;
  setConst(value: string): void;

  getContinue(): string;
  setContinue(value: string): void;

  getDebugger(): string;
  setDebugger(value: string): void;

  getDefault(): string;
  setDefault(value: string): void;

  getDelete(): string;
  setDelete(value: string): void;

  getDo(): string;
  setDo(value: string): void;

  getDouble(): string;
  setDouble(value: string): void;

  getElse(): string;
  setElse(value: string): void;

  getEnum(): string;
  setEnum(value: string): void;

  getExport(): string;
  setExport(value: string): void;

  getExtends(): string;
  setExtends(value: string): void;

  getFalse(): string;
  setFalse(value: string): void;

  getFinal(): string;
  setFinal(value: string): void;

  getFinally(): string;
  setFinally(value: string): void;

  getFloat(): string;
  setFloat(value: string): void;

  getFor(): string;
  setFor(value: string): void;

  getFunction(): string;
  setFunction(value: string): void;

  getGoto(): string;
  setGoto(value: string): void;

  getIf(): string;
  setIf(value: string): void;

  getImplements(): string;
  setImplements(value: string): void;

  getImport(): string;
  setImport(value: string): void;

  getIn(): string;
  setIn(value: string): void;

  getInstanceof(): string;
  setInstanceof(value: string): void;

  getInt(): string;
  setInt(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  getLong(): string;
  setLong(value: string): void;

  getNative(): string;
  setNative(value: string): void;

  getNew(): string;
  setNew(value: string): void;

  getNull(): string;
  setNull(value: string): void;

  getPackage(): string;
  setPackage(value: string): void;

  getPrivate(): string;
  setPrivate(value: string): void;

  getProtected(): string;
  setProtected(value: string): void;

  getPublic(): string;
  setPublic(value: string): void;

  getReturn(): string;
  setReturn(value: string): void;

  getShort(): string;
  setShort(value: string): void;

  getStatic(): string;
  setStatic(value: string): void;

  getSuper(): string;
  setSuper(value: string): void;

  getSwitch(): string;
  setSwitch(value: string): void;

  getSynchronized(): string;
  setSynchronized(value: string): void;

  getThis(): string;
  setThis(value: string): void;

  getThrow(): string;
  setThrow(value: string): void;

  getThrows(): string;
  setThrows(value: string): void;

  getTransient(): string;
  setTransient(value: string): void;

  getTry(): string;
  setTry(value: string): void;

  getTypeof(): string;
  setTypeof(value: string): void;

  getVar(): string;
  setVar(value: string): void;

  getVoid(): string;
  setVoid(value: string): void;

  getVolatile(): string;
  setVolatile(value: string): void;

  getWhile(): string;
  setWhile(value: string): void;

  getWith(): string;
  setWith(value: string): void;

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

