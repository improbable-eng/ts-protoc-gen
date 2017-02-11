/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobuf"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Lazily resolved type references
    const $lazyTypes = [];
    
    // Exported root namespace
    const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        const google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @exports google.protobuf
             * @namespace
             */
            const protobuf = {};
    
            protobuf.compiler = (function() {
    
                /**
                 * Namespace compiler.
                 * @exports google.protobuf.compiler
                 * @namespace
                 */
                const compiler = {};
    
                compiler.Version = (function() {
    
                    /**
                     * Constructs a new Version.
                     * @exports google.protobuf.compiler.Version
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Version(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Version major.
                     * @type {number}
                     */
                    Version.prototype.major = 0;
    
                    /**
                     * Version minor.
                     * @type {number}
                     */
                    Version.prototype.minor = 0;
    
                    /**
                     * Version patch.
                     * @type {number}
                     */
                    Version.prototype.patch = 0;
    
                    /**
                     * Version suffix.
                     * @type {string}
                     */
                    Version.prototype.suffix = "";
    
                    /**
                     * Creates a new Version instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.compiler.Version} Version instance
                     */
                    Version.create = function create(properties) {
                        return new Version(properties);
                    };
    
                    /**
                     * Encodes the specified Version message.
                     * @param {google.protobuf.compiler.Version|Object} message Version message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Version.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.major !== undefined && message.hasOwnProperty("major"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.major);
                        if (message.minor !== undefined && message.hasOwnProperty("minor"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.minor);
                        if (message.patch !== undefined && message.hasOwnProperty("patch"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.patch);
                        if (message.suffix !== undefined && message.hasOwnProperty("suffix"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.suffix);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Version message, length delimited.
                     * @param {google.protobuf.compiler.Version|Object} message Version message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Version.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Version message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.compiler.Version} Version
                     */
                    Version.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.Version();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.major = reader.int32();
                                break;
                            case 2:
                                message.minor = reader.int32();
                                break;
                            case 3:
                                message.patch = reader.int32();
                                break;
                            case 4:
                                message.suffix = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Version message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.compiler.Version} Version
                     */
                    Version.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Version message.
                     * @param {google.protobuf.compiler.Version|Object} message Version message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Version.verify = function verify(message) {    
                        if (message.major !== undefined)
                            if (!$util.isInteger(message.major))
                                return "major: integer expected";
                        if (message.minor !== undefined)
                            if (!$util.isInteger(message.minor))
                                return "minor: integer expected";
                        if (message.patch !== undefined)
                            if (!$util.isInteger(message.patch))
                                return "patch: integer expected";
                        if (message.suffix !== undefined)
                            if (!$util.isString(message.suffix))
                                return "suffix: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a Version message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.Version} Version
                     */
                    Version.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.compiler.Version)
                            return object;
                        let message = new $root.google.protobuf.compiler.Version();
                        if (object.major !== undefined && object.major !== null)
                            message.major = object.major | 0;
                        if (object.minor !== undefined && object.minor !== null)
                            message.minor = object.minor | 0;
                        if (object.patch !== undefined && object.patch !== null)
                            message.patch = object.patch | 0;
                        if (object.suffix !== undefined && object.suffix !== null)
                            message.suffix = String(object.suffix);
                        return message;
                    };
    
                    /**
                     * Creates a Version message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.compiler.Version.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.Version} Version
                     */
                    Version.from = Version.fromObject;
    
                    /**
                     * Creates a plain object from a Version message. Also converts values to other types if specified.
                     * @param {google.protobuf.compiler.Version} message Version
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Version.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.major = 0;
                            object.minor = 0;
                            object.patch = 0;
                            object.suffix = "";
                        }
                        if (message.major !== undefined && message.major !== null && message.hasOwnProperty("major"))
                            object.major = message.major;
                        if (message.minor !== undefined && message.minor !== null && message.hasOwnProperty("minor"))
                            object.minor = message.minor;
                        if (message.patch !== undefined && message.patch !== null && message.hasOwnProperty("patch"))
                            object.patch = message.patch;
                        if (message.suffix !== undefined && message.suffix !== null && message.hasOwnProperty("suffix"))
                            object.suffix = message.suffix;
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this Version message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Version.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this Version to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Version.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Version;
                })();
    
                compiler.CodeGeneratorRequest = (function() {
    
                    /**
                     * Constructs a new CodeGeneratorRequest.
                     * @exports google.protobuf.compiler.CodeGeneratorRequest
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function CodeGeneratorRequest(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CodeGeneratorRequest fileToGenerate.
                     * @type {Array.<string>}
                     */
                    CodeGeneratorRequest.prototype.fileToGenerate = $util.emptyArray;
    
                    /**
                     * CodeGeneratorRequest parameter.
                     * @type {string}
                     */
                    CodeGeneratorRequest.prototype.parameter = "";
    
                    /**
                     * CodeGeneratorRequest protoFile.
                     * @type {Array.<google.protobuf.FileDescriptorProto>}
                     */
                    CodeGeneratorRequest.prototype.protoFile = $util.emptyArray;
    
                    /**
                     * CodeGeneratorRequest compilerVersion.
                     * @type {google.protobuf.compiler.Version}
                     */
                    CodeGeneratorRequest.prototype.compilerVersion = null;
    
                    // Lazily resolved type references
                    const $types = {
                        2: "google.protobuf.FileDescriptorProto",
                        3: "google.protobuf.compiler.Version"
                    }; $lazyTypes.push($types);
    
                    /**
                     * Creates a new CodeGeneratorRequest instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest instance
                     */
                    CodeGeneratorRequest.create = function create(properties) {
                        return new CodeGeneratorRequest(properties);
                    };
    
                    /**
                     * Encodes the specified CodeGeneratorRequest message.
                     * @param {google.protobuf.compiler.CodeGeneratorRequest|Object} message CodeGeneratorRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CodeGeneratorRequest.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.fileToGenerate !== undefined && message.hasOwnProperty("fileToGenerate"))
                            for (let i = 0; i < message.fileToGenerate.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileToGenerate[i]);
                        if (message.parameter !== undefined && message.hasOwnProperty("parameter"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parameter);
                        if (message.protoFile !== undefined && message.hasOwnProperty("protoFile"))
                            for (let i = 0; i < message.protoFile.length; ++i)
                                $types[2].encode(message.protoFile[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                        if (message.compilerVersion && message.hasOwnProperty("compilerVersion"))
                            $types[3].encode(message.compilerVersion, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CodeGeneratorRequest message, length delimited.
                     * @param {google.protobuf.compiler.CodeGeneratorRequest|Object} message CodeGeneratorRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CodeGeneratorRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CodeGeneratorRequest message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                     */
                    CodeGeneratorRequest.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.CodeGeneratorRequest();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.fileToGenerate && message.fileToGenerate.length))
                                    message.fileToGenerate = [];
                                message.fileToGenerate.push(reader.string());
                                break;
                            case 2:
                                message.parameter = reader.string();
                                break;
                            case 15:
                                if (!(message.protoFile && message.protoFile.length))
                                    message.protoFile = [];
                                message.protoFile.push($types[2].decode(reader, reader.uint32()));
                                break;
                            case 3:
                                message.compilerVersion = $types[3].decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CodeGeneratorRequest message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                     */
                    CodeGeneratorRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CodeGeneratorRequest message.
                     * @param {google.protobuf.compiler.CodeGeneratorRequest|Object} message CodeGeneratorRequest message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    CodeGeneratorRequest.verify = function verify(message) {    
                        if (message.fileToGenerate !== undefined) {
                            if (!Array.isArray(message.fileToGenerate))
                                return "fileToGenerate: array expected";
                            for (let i = 0; i < message.fileToGenerate.length; ++i)
                                if (!$util.isString(message.fileToGenerate[i]))
                                    return "fileToGenerate: string[] expected";
                        }
                        if (message.parameter !== undefined)
                            if (!$util.isString(message.parameter))
                                return "parameter: string expected";
                        if (message.protoFile !== undefined) {
                            if (!Array.isArray(message.protoFile))
                                return "protoFile: array expected";
                            for (let i = 0; i < message.protoFile.length; ++i) {
                                let error = $types[2].verify(message.protoFile[i]);
                                if (error)
                                    return "protoFile." + error;
                            }
                        }
                        if (message.compilerVersion !== undefined && message.compilerVersion !== null) {
                            let error = $types[3].verify(message.compilerVersion);
                            if (error)
                                return "compilerVersion." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a CodeGeneratorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                     */
                    CodeGeneratorRequest.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.compiler.CodeGeneratorRequest)
                            return object;
                        let message = new $root.google.protobuf.compiler.CodeGeneratorRequest();
                        if (object.fileToGenerate) {
                            if (!Array.isArray(object.fileToGenerate))
                                throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.fileToGenerate: array expected");
                            message.fileToGenerate = [];
                            for (let i = 0; i < object.fileToGenerate.length; ++i)
                                message.fileToGenerate[i] = String(object.fileToGenerate[i]);
                        }
                        if (object.parameter !== undefined && object.parameter !== null)
                            message.parameter = String(object.parameter);
                        if (object.protoFile) {
                            if (!Array.isArray(object.protoFile))
                                throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.protoFile: array expected");
                            message.protoFile = [];
                            for (let i = 0; i < object.protoFile.length; ++i) {
                                if (typeof object.protoFile[i] !== "object")
                                    throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.protoFile: object expected");
                                message.protoFile[i] = $types[2].fromObject(object.protoFile[i]);
                            }
                        }
                        if (object.compilerVersion !== undefined && object.compilerVersion !== null) {
                            if (typeof object.compilerVersion !== "object")
                                throw TypeError(".google.protobuf.compiler.CodeGeneratorRequest.compilerVersion: object expected");
                            message.compilerVersion = $types[3].fromObject(object.compilerVersion);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a CodeGeneratorRequest message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.compiler.CodeGeneratorRequest.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.CodeGeneratorRequest} CodeGeneratorRequest
                     */
                    CodeGeneratorRequest.from = CodeGeneratorRequest.fromObject;
    
                    /**
                     * Creates a plain object from a CodeGeneratorRequest message. Also converts values to other types if specified.
                     * @param {google.protobuf.compiler.CodeGeneratorRequest} message CodeGeneratorRequest
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CodeGeneratorRequest.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.fileToGenerate = [];
                            object.protoFile = [];
                        }
                        if (options.defaults) {
                            object.parameter = "";
                            object.compilerVersion = null;
                        }
                        if (message.fileToGenerate !== undefined && message.fileToGenerate !== null && message.hasOwnProperty("fileToGenerate")) {
                            object.fileToGenerate = [];
                            for (let j = 0; j < message.fileToGenerate.length; ++j)
                                object.fileToGenerate[j] = message.fileToGenerate[j];
                        }
                        if (message.parameter !== undefined && message.parameter !== null && message.hasOwnProperty("parameter"))
                            object.parameter = message.parameter;
                        if (message.protoFile !== undefined && message.protoFile !== null && message.hasOwnProperty("protoFile")) {
                            object.protoFile = [];
                            for (let j = 0; j < message.protoFile.length; ++j)
                                object.protoFile[j] = $types[2].toObject(message.protoFile[j], options);
                        }
                        if (message.compilerVersion !== undefined && message.compilerVersion !== null && message.hasOwnProperty("compilerVersion"))
                            object.compilerVersion = $types[3].toObject(message.compilerVersion, options);
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this CodeGeneratorRequest message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CodeGeneratorRequest.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this CodeGeneratorRequest to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    CodeGeneratorRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CodeGeneratorRequest;
                })();
    
                compiler.CodeGeneratorResponse = (function() {
    
                    /**
                     * Constructs a new CodeGeneratorResponse.
                     * @exports google.protobuf.compiler.CodeGeneratorResponse
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function CodeGeneratorResponse(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CodeGeneratorResponse error.
                     * @type {string}
                     */
                    CodeGeneratorResponse.prototype.error = "";
    
                    /**
                     * CodeGeneratorResponse file.
                     * @type {Array.<google.protobuf.compiler.CodeGeneratorResponse.File>}
                     */
                    CodeGeneratorResponse.prototype.file = $util.emptyArray;
    
                    // Lazily resolved type references
                    const $types = {
                        1: "google.protobuf.compiler.CodeGeneratorResponse.File"
                    }; $lazyTypes.push($types);
    
                    /**
                     * Creates a new CodeGeneratorResponse instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse instance
                     */
                    CodeGeneratorResponse.create = function create(properties) {
                        return new CodeGeneratorResponse(properties);
                    };
    
                    /**
                     * Encodes the specified CodeGeneratorResponse message.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse|Object} message CodeGeneratorResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CodeGeneratorResponse.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error !== undefined && message.hasOwnProperty("error"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
                        if (message.file !== undefined && message.hasOwnProperty("file"))
                            for (let i = 0; i < message.file.length; ++i)
                                $types[1].encode(message.file[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CodeGeneratorResponse message, length delimited.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse|Object} message CodeGeneratorResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CodeGeneratorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CodeGeneratorResponse message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                     */
                    CodeGeneratorResponse.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.CodeGeneratorResponse();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = reader.string();
                                break;
                            case 15:
                                if (!(message.file && message.file.length))
                                    message.file = [];
                                message.file.push($types[1].decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CodeGeneratorResponse message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                     */
                    CodeGeneratorResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CodeGeneratorResponse message.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse|Object} message CodeGeneratorResponse message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    CodeGeneratorResponse.verify = function verify(message) {    
                        if (message.error !== undefined)
                            if (!$util.isString(message.error))
                                return "error: string expected";
                        if (message.file !== undefined) {
                            if (!Array.isArray(message.file))
                                return "file: array expected";
                            for (let i = 0; i < message.file.length; ++i) {
                                let error = $types[1].verify(message.file[i]);
                                if (error)
                                    return "file." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a CodeGeneratorResponse message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                     */
                    CodeGeneratorResponse.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.compiler.CodeGeneratorResponse)
                            return object;
                        let message = new $root.google.protobuf.compiler.CodeGeneratorResponse();
                        if (object.error !== undefined && object.error !== null)
                            message.error = String(object.error);
                        if (object.file) {
                            if (!Array.isArray(object.file))
                                throw TypeError(".google.protobuf.compiler.CodeGeneratorResponse.file: array expected");
                            message.file = [];
                            for (let i = 0; i < object.file.length; ++i) {
                                if (typeof object.file[i] !== "object")
                                    throw TypeError(".google.protobuf.compiler.CodeGeneratorResponse.file: object expected");
                                message.file[i] = $types[1].fromObject(object.file[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a CodeGeneratorResponse message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.compiler.CodeGeneratorResponse.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.compiler.CodeGeneratorResponse} CodeGeneratorResponse
                     */
                    CodeGeneratorResponse.from = CodeGeneratorResponse.fromObject;
    
                    /**
                     * Creates a plain object from a CodeGeneratorResponse message. Also converts values to other types if specified.
                     * @param {google.protobuf.compiler.CodeGeneratorResponse} message CodeGeneratorResponse
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CodeGeneratorResponse.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.file = [];
                        if (options.defaults)
                            object.error = "";
                        if (message.error !== undefined && message.error !== null && message.hasOwnProperty("error"))
                            object.error = message.error;
                        if (message.file !== undefined && message.file !== null && message.hasOwnProperty("file")) {
                            object.file = [];
                            for (let j = 0; j < message.file.length; ++j)
                                object.file[j] = $types[1].toObject(message.file[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this CodeGeneratorResponse message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CodeGeneratorResponse.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this CodeGeneratorResponse to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    CodeGeneratorResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    CodeGeneratorResponse.File = (function() {
    
                        /**
                         * Constructs a new File.
                         * @exports google.protobuf.compiler.CodeGeneratorResponse.File
                         * @constructor
                         * @param {Object} [properties] Properties to set
                         */
                        function File(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * File name.
                         * @type {string}
                         */
                        File.prototype.name = "";
    
                        /**
                         * File insertionPoint.
                         * @type {string}
                         */
                        File.prototype.insertionPoint = "";
    
                        /**
                         * File content.
                         * @type {string}
                         */
                        File.prototype.content = "";
    
                        /**
                         * Creates a new File instance using the specified properties.
                         * @param {Object} [properties] Properties to set
                         * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File instance
                         */
                        File.create = function create(properties) {
                            return new File(properties);
                        };
    
                        /**
                         * Encodes the specified File message.
                         * @param {google.protobuf.compiler.CodeGeneratorResponse.File|Object} message File message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        File.encode = function encode(message, writer) {    
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name !== undefined && message.hasOwnProperty("name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.insertionPoint !== undefined && message.hasOwnProperty("insertionPoint"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.insertionPoint);
                            if (message.content !== undefined && message.hasOwnProperty("content"))
                                writer.uint32(/* id 15, wireType 2 =*/122).string(message.content);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified File message, length delimited.
                         * @param {google.protobuf.compiler.CodeGeneratorResponse.File|Object} message File message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        File.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a File message from the specified reader or buffer.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                         */
                        File.decode = function decode(reader, length) {    
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.compiler.CodeGeneratorResponse.File();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.insertionPoint = reader.string();
                                    break;
                                case 15:
                                    message.content = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a File message from the specified reader or buffer, length delimited.
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                         */
                        File.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a File message.
                         * @param {google.protobuf.compiler.CodeGeneratorResponse.File|Object} message File message or plain object to verify
                         * @returns {?string} `null` if valid, otherwise the reason why it is not
                         */
                        File.verify = function verify(message) {    
                            if (message.name !== undefined)
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.insertionPoint !== undefined)
                                if (!$util.isString(message.insertionPoint))
                                    return "insertionPoint: string expected";
                            if (message.content !== undefined)
                                if (!$util.isString(message.content))
                                    return "content: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a File message from a plain object. Also converts values to their respective internal types.
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                         */
                        File.fromObject = function fromObject(object) {    
                            if (object instanceof $root.google.protobuf.compiler.CodeGeneratorResponse.File)
                                return object;
                            let message = new $root.google.protobuf.compiler.CodeGeneratorResponse.File();
                            if (object.name !== undefined && object.name !== null)
                                message.name = String(object.name);
                            if (object.insertionPoint !== undefined && object.insertionPoint !== null)
                                message.insertionPoint = String(object.insertionPoint);
                            if (object.content !== undefined && object.content !== null)
                                message.content = String(object.content);
                            return message;
                        };
    
                        /**
                         * Creates a File message from a plain object. Also converts values to their respective internal types.
                         * This is an alias of {@link google.protobuf.compiler.CodeGeneratorResponse.File.fromObject}.
                         * @function
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.protobuf.compiler.CodeGeneratorResponse.File} File
                         */
                        File.from = File.fromObject;
    
                        /**
                         * Creates a plain object from a File message. Also converts values to other types if specified.
                         * @param {google.protobuf.compiler.CodeGeneratorResponse.File} message File
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        File.toObject = function toObject(message, options) {    
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.insertionPoint = "";
                                object.content = "";
                            }
                            if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.insertionPoint !== undefined && message.insertionPoint !== null && message.hasOwnProperty("insertionPoint"))
                                object.insertionPoint = message.insertionPoint;
                            if (message.content !== undefined && message.content !== null && message.hasOwnProperty("content"))
                                object.content = message.content;
                            return object;
                        };
    
                        /**
                         * Creates a plain object from this File message. Also converts values to other types if specified.
                         * @param {$protobuf.ConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        File.prototype.toObject = function toObject(options) {
                            return this.constructor.toObject(this, options);
                        };
    
                        /**
                         * Converts this File to JSON.
                         * @returns {Object.<string,*>} JSON object
                         */
                        File.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return File;
                    })();
    
                    return CodeGeneratorResponse;
                })();
    
                return compiler;
            })();
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @exports google.protobuf.FileDescriptorSet
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @type {Array.<google.protobuf.FileDescriptorProto>}
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    0: "google.protobuf.FileDescriptorProto"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message.
                 * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file !== undefined && message.hasOwnProperty("file"))
                        for (let i = 0; i < message.file.length; ++i)
                            $types[0].encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited.
                 * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($types[0].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @param {google.protobuf.FileDescriptorSet|Object} message FileDescriptorSet message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {    
                    if (message.file !== undefined) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (let i = 0; i < message.file.length; ++i) {
                            let error = $types[0].verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    let message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (let i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $types[0].fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.FileDescriptorSet.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.from = FileDescriptorSet.fromObject;
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file !== undefined && message.file !== null && message.hasOwnProperty("file")) {
                        object.file = [];
                        for (let j = 0; j < message.file.length; ++j)
                            object.file[j] = $types[0].toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this FileDescriptorSet message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @exports google.protobuf.FileDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @type {string}
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @name google.protobuf.FileDescriptorProto#package
                 * @type {string}
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @type {Array.<string>}
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @type {Array.<number>}
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @type {Array.<number>}
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @type {Array.<google.protobuf.DescriptorProto>}
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @type {Array.<google.protobuf.EnumDescriptorProto>}
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @type {Array.<google.protobuf.ServiceDescriptorProto>}
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @type {Array.<google.protobuf.FieldDescriptorProto>}
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @type {google.protobuf.FileOptions}
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @type {google.protobuf.SourceCodeInfo}
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @type {string}
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                // Lazily resolved type references
                const $types = {
                    5: "google.protobuf.DescriptorProto",
                    6: "google.protobuf.EnumDescriptorProto",
                    7: "google.protobuf.ServiceDescriptorProto",
                    8: "google.protobuf.FieldDescriptorProto",
                    9: "google.protobuf.FileOptions",
                    10: "google.protobuf.SourceCodeInfo"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message.
                 * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] !== undefined && message.hasOwnProperty("package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency !== undefined && message.hasOwnProperty("dependency"))
                        for (let i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.publicDependency !== undefined && message.hasOwnProperty("publicDependency"))
                        for (let i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency !== undefined && message.hasOwnProperty("weakDependency"))
                        for (let i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.messageType !== undefined && message.hasOwnProperty("messageType"))
                        for (let i = 0; i < message.messageType.length; ++i)
                            $types[5].encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType !== undefined && message.hasOwnProperty("enumType"))
                        for (let i = 0; i < message.enumType.length; ++i)
                            $types[6].encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service !== undefined && message.hasOwnProperty("service"))
                        for (let i = 0; i < message.service.length; ++i)
                            $types[7].encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension !== undefined && message.hasOwnProperty("extension"))
                        for (let i = 0; i < message.extension.length; ++i)
                            $types[8].encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options && message.hasOwnProperty("options"))
                        $types[9].encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo && message.hasOwnProperty("sourceCodeInfo"))
                        $types[10].encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.syntax !== undefined && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited.
                 * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($types[5].decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($types[6].decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($types[7].decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($types[8].decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $types[9].decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.sourceCodeInfo = $types[10].decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @param {google.protobuf.FileDescriptorProto|Object} message FileDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] !== undefined)
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency !== undefined) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (let i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency !== undefined) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (let i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency !== undefined) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (let i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType !== undefined) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (let i = 0; i < message.messageType.length; ++i) {
                            let error = $types[5].verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType !== undefined) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (let i = 0; i < message.enumType.length; ++i) {
                            let error = $types[6].verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service !== undefined) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (let i = 0; i < message.service.length; ++i) {
                            let error = $types[7].verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension !== undefined) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (let i = 0; i < message.extension.length; ++i) {
                            let error = $types[8].verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[9].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo !== undefined && message.sourceCodeInfo !== null) {
                        let error = $types[10].verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax !== undefined)
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object["package"] !== undefined && object["package"] !== null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (let i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (let i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (let i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (let i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $types[5].fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (let i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $types[6].fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (let i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $types[7].fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (let i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $types[8].fromObject(object.extension[i]);
                        }
                    }
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $types[9].fromObject(object.options);
                    }
                    if (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $types[10].fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax !== undefined && object.syntax !== null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.FileDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.from = FileDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] !== undefined && message["package"] !== null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency !== undefined && message.dependency !== null && message.hasOwnProperty("dependency")) {
                        object.dependency = [];
                        for (let j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.publicDependency !== undefined && message.publicDependency !== null && message.hasOwnProperty("publicDependency")) {
                        object.publicDependency = [];
                        for (let j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency !== undefined && message.weakDependency !== null && message.hasOwnProperty("weakDependency")) {
                        object.weakDependency = [];
                        for (let j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.messageType !== undefined && message.messageType !== null && message.hasOwnProperty("messageType")) {
                        object.messageType = [];
                        for (let j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $types[5].toObject(message.messageType[j], options);
                    }
                    if (message.enumType !== undefined && message.enumType !== null && message.hasOwnProperty("enumType")) {
                        object.enumType = [];
                        for (let j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $types[6].toObject(message.enumType[j], options);
                    }
                    if (message.service !== undefined && message.service !== null && message.hasOwnProperty("service")) {
                        object.service = [];
                        for (let j = 0; j < message.service.length; ++j)
                            object.service[j] = $types[7].toObject(message.service[j], options);
                    }
                    if (message.extension !== undefined && message.extension !== null && message.hasOwnProperty("extension")) {
                        object.extension = [];
                        for (let j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $types[8].toObject(message.extension[j], options);
                    }
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[9].toObject(message.options, options);
                    if (message.sourceCodeInfo !== undefined && message.sourceCodeInfo !== null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $types[10].toObject(message.sourceCodeInfo, options);
                    if (message.syntax !== undefined && message.syntax !== null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Creates a plain object from this FileDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Constructs a new DescriptorProto.
                 * @exports google.protobuf.DescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @type {string}
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @type {Array.<google.protobuf.FieldDescriptorProto>}
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @type {Array.<google.protobuf.FieldDescriptorProto>}
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @type {Array.<google.protobuf.DescriptorProto>}
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @type {Array.<google.protobuf.EnumDescriptorProto>}
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @type {Array.<google.protobuf.DescriptorProto.ExtensionRange>}
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @type {Array.<google.protobuf.OneofDescriptorProto>}
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @type {google.protobuf.MessageOptions}
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @type {Array.<google.protobuf.DescriptorProto.ReservedRange>}
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @type {Array.<string>}
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.FieldDescriptorProto",
                    2: "google.protobuf.FieldDescriptorProto",
                    3: "google.protobuf.DescriptorProto",
                    4: "google.protobuf.EnumDescriptorProto",
                    5: "google.protobuf.DescriptorProto.ExtensionRange",
                    6: "google.protobuf.OneofDescriptorProto",
                    7: "google.protobuf.MessageOptions",
                    8: "google.protobuf.DescriptorProto.ReservedRange"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message.
                 * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field !== undefined && message.hasOwnProperty("field"))
                        for (let i = 0; i < message.field.length; ++i)
                            $types[1].encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.extension !== undefined && message.hasOwnProperty("extension"))
                        for (let i = 0; i < message.extension.length; ++i)
                            $types[2].encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.nestedType !== undefined && message.hasOwnProperty("nestedType"))
                        for (let i = 0; i < message.nestedType.length; ++i)
                            $types[3].encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType !== undefined && message.hasOwnProperty("enumType"))
                        for (let i = 0; i < message.enumType.length; ++i)
                            $types[4].encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange !== undefined && message.hasOwnProperty("extensionRange"))
                        for (let i = 0; i < message.extensionRange.length; ++i)
                            $types[5].encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.oneofDecl !== undefined && message.hasOwnProperty("oneofDecl"))
                        for (let i = 0; i < message.oneofDecl.length; ++i)
                            $types[6].encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.options && message.hasOwnProperty("options"))
                        $types[7].encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.reservedRange !== undefined && message.hasOwnProperty("reservedRange"))
                        for (let i = 0; i < message.reservedRange.length; ++i)
                            $types[8].encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName !== undefined && message.hasOwnProperty("reservedName"))
                        for (let i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited.
                 * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($types[1].decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($types[2].decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($types[3].decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($types[4].decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($types[5].decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($types[6].decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $types[7].decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($types[8].decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @param {google.protobuf.DescriptorProto|Object} message DescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field !== undefined) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (let i = 0; i < message.field.length; ++i) {
                            let error = $types[1].verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension !== undefined) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (let i = 0; i < message.extension.length; ++i) {
                            let error = $types[2].verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType !== undefined) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (let i = 0; i < message.nestedType.length; ++i) {
                            let error = $types[3].verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType !== undefined) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (let i = 0; i < message.enumType.length; ++i) {
                            let error = $types[4].verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange !== undefined) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (let i = 0; i < message.extensionRange.length; ++i) {
                            let error = $types[5].verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl !== undefined) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (let i = 0; i < message.oneofDecl.length; ++i) {
                            let error = $types[6].verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[7].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange !== undefined) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (let i = 0; i < message.reservedRange.length; ++i) {
                            let error = $types[8].verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName !== undefined) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (let i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (let i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $types[1].fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (let i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $types[2].fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (let i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $types[3].fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (let i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $types[4].fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (let i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $types[5].fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (let i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $types[6].fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $types[7].fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (let i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $types[8].fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (let i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.DescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.from = DescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.extension = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field !== undefined && message.field !== null && message.hasOwnProperty("field")) {
                        object.field = [];
                        for (let j = 0; j < message.field.length; ++j)
                            object.field[j] = $types[1].toObject(message.field[j], options);
                    }
                    if (message.extension !== undefined && message.extension !== null && message.hasOwnProperty("extension")) {
                        object.extension = [];
                        for (let j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $types[2].toObject(message.extension[j], options);
                    }
                    if (message.nestedType !== undefined && message.nestedType !== null && message.hasOwnProperty("nestedType")) {
                        object.nestedType = [];
                        for (let j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $types[3].toObject(message.nestedType[j], options);
                    }
                    if (message.enumType !== undefined && message.enumType !== null && message.hasOwnProperty("enumType")) {
                        object.enumType = [];
                        for (let j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $types[4].toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange !== undefined && message.extensionRange !== null && message.hasOwnProperty("extensionRange")) {
                        object.extensionRange = [];
                        for (let j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $types[5].toObject(message.extensionRange[j], options);
                    }
                    if (message.oneofDecl !== undefined && message.oneofDecl !== null && message.hasOwnProperty("oneofDecl")) {
                        object.oneofDecl = [];
                        for (let j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $types[6].toObject(message.oneofDecl[j], options);
                    }
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[7].toObject(message.options, options);
                    if (message.reservedRange !== undefined && message.reservedRange !== null && message.hasOwnProperty("reservedRange")) {
                        object.reservedRange = [];
                        for (let j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $types[8].toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName !== undefined && message.reservedName !== null && message.hasOwnProperty("reservedName")) {
                        object.reservedName = [];
                        for (let j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this DescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @exports google.protobuf.DescriptorProto.ExtensionRange
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @type {number}
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @type {number}
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message.
                     * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start !== undefined && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end !== undefined && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited.
                     * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @param {google.protobuf.DescriptorProto.ExtensionRange|Object} message ExtensionRange message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {    
                        if (message.start !== undefined)
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end !== undefined)
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        let message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start !== undefined && object.start !== null)
                            message.start = object.start | 0;
                        if (object.end !== undefined && object.end !== null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.DescriptorProto.ExtensionRange.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.from = ExtensionRange.fromObject;
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start !== undefined && message.start !== null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end !== undefined && message.end !== null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this ExtensionRange message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Constructs a new ReservedRange.
                     * @exports google.protobuf.DescriptorProto.ReservedRange
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @type {number}
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @type {number}
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message.
                     * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start !== undefined && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end !== undefined && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited.
                     * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @param {google.protobuf.DescriptorProto.ReservedRange|Object} message ReservedRange message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {    
                        if (message.start !== undefined)
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end !== undefined)
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        let message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start !== undefined && object.start !== null)
                            message.start = object.start | 0;
                        if (object.end !== undefined && object.end !== null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.DescriptorProto.ReservedRange.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.from = ReservedRange.fromObject;
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start !== undefined && message.start !== null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end !== undefined && message.end !== null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this ReservedRange message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @exports google.protobuf.FieldDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @type {string}
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @type {number}
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @type {number}
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @type {number}
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @type {string}
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @type {string}
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @type {string}
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @type {number}
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @type {string}
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @type {google.protobuf.FieldOptions}
                 */
                FieldDescriptorProto.prototype.options = null;
    
                // Lazily resolved type references
                const $types = {
                    2: "google.protobuf.FieldDescriptorProto.Label",
                    3: "google.protobuf.FieldDescriptorProto.Type",
                    9: "google.protobuf.FieldOptions"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message.
                 * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number !== undefined && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label !== undefined && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.label);
                    if (message.type !== undefined && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.type);
                    if (message.typeName !== undefined && message.hasOwnProperty("typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.extendee !== undefined && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.defaultValue !== undefined && message.hasOwnProperty("defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.oneofIndex !== undefined && message.hasOwnProperty("oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName !== undefined && message.hasOwnProperty("jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    if (message.options && message.hasOwnProperty("options"))
                        $types[9].encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited.
                 * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.uint32();
                            break;
                        case 5:
                            message.type = reader.uint32();
                            break;
                        case 6:
                            message.typeName = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.defaultValue = reader.string();
                            break;
                        case 9:
                            message.oneofIndex = reader.int32();
                            break;
                        case 10:
                            message.jsonName = reader.string();
                            break;
                        case 8:
                            message.options = $types[9].decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @param {google.protobuf.FieldDescriptorProto|Object} message FieldDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number !== undefined)
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label !== undefined)
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type !== undefined)
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName !== undefined)
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee !== undefined)
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue !== undefined)
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex !== undefined)
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName !== undefined)
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[9].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.number !== undefined && object.number !== null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName !== undefined && object.typeName !== null)
                        message.typeName = String(object.typeName);
                    if (object.extendee !== undefined && object.extendee !== null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue !== undefined && object.defaultValue !== null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex !== undefined && object.oneofIndex !== null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName !== undefined && object.jsonName !== null)
                        message.jsonName = String(object.jsonName);
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $types[9].fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.FieldDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.from = FieldDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.extendee = "";
                        object.defaultValue = "";
                        object.oneofIndex = 0;
                        object.jsonName = "";
                        object.options = null;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number !== undefined && message.number !== null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label !== undefined && message.label !== null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $types[2][message.label] : message.label;
                    if (message.type !== undefined && message.type !== null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $types[3][message.type] : message.type;
                    if (message.typeName !== undefined && message.typeName !== null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.extendee !== undefined && message.extendee !== null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.defaultValue !== undefined && message.defaultValue !== null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.oneofIndex !== undefined && message.oneofIndex !== null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName !== undefined && message.jsonName !== null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[9].toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Creates a plain object from this FieldDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name Type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @enum {number}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name Label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @enum {number}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @exports google.protobuf.OneofDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @type {string}
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @type {google.protobuf.OneofOptions}
                 */
                OneofDescriptorProto.prototype.options = null;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.OneofOptions"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message.
                 * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options && message.hasOwnProperty("options"))
                        $types[1].encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited.
                 * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $types[1].decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @param {google.protobuf.OneofDescriptorProto|Object} message OneofDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[1].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $types[1].fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.OneofDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.from = OneofDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[1].toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Creates a plain object from this OneofDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @exports google.protobuf.EnumDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @type {string}
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @type {Array.<google.protobuf.EnumValueDescriptorProto>}
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @type {google.protobuf.EnumOptions}
                 */
                EnumDescriptorProto.prototype.options = null;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.EnumValueDescriptorProto",
                    2: "google.protobuf.EnumOptions"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message.
                 * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value !== undefined && message.hasOwnProperty("value"))
                        for (let i = 0; i < message.value.length; ++i)
                            $types[1].encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options && message.hasOwnProperty("options"))
                        $types[2].encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited.
                 * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($types[1].decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $types[2].decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @param {google.protobuf.EnumDescriptorProto|Object} message EnumDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value !== undefined) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (let i = 0; i < message.value.length; ++i) {
                            let error = $types[1].verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[2].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (let i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $types[1].fromObject(object.value[i]);
                        }
                    }
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $types[2].fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.EnumDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.from = EnumDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value !== undefined && message.value !== null && message.hasOwnProperty("value")) {
                        object.value = [];
                        for (let j = 0; j < message.value.length; ++j)
                            object.value[j] = $types[1].toObject(message.value[j], options);
                    }
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[2].toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Creates a plain object from this EnumDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @exports google.protobuf.EnumValueDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @type {string}
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @type {number}
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @type {google.protobuf.EnumValueOptions}
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                // Lazily resolved type references
                const $types = {
                    2: "google.protobuf.EnumValueOptions"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message.
                 * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number !== undefined && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options && message.hasOwnProperty("options"))
                        $types[2].encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited.
                 * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $types[2].decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @param {google.protobuf.EnumValueDescriptorProto|Object} message EnumValueDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number !== undefined)
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[2].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.number !== undefined && object.number !== null)
                        message.number = object.number | 0;
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $types[2].fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.EnumValueDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.from = EnumValueDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number !== undefined && message.number !== null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[2].toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Creates a plain object from this EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @exports google.protobuf.ServiceDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @type {string}
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @type {Array.<google.protobuf.MethodDescriptorProto>}
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @type {google.protobuf.ServiceOptions}
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.MethodDescriptorProto",
                    2: "google.protobuf.ServiceOptions"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message.
                 * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method !== undefined && message.hasOwnProperty("method"))
                        for (let i = 0; i < message.method.length; ++i)
                            $types[1].encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options && message.hasOwnProperty("options"))
                        $types[2].encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited.
                 * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($types[1].decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $types[2].decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @param {google.protobuf.ServiceDescriptorProto|Object} message ServiceDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method !== undefined) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (let i = 0; i < message.method.length; ++i) {
                            let error = $types[1].verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[2].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (let i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $types[1].fromObject(object.method[i]);
                        }
                    }
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $types[2].fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.ServiceDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.from = ServiceDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method !== undefined && message.method !== null && message.hasOwnProperty("method")) {
                        object.method = [];
                        for (let j = 0; j < message.method.length; ++j)
                            object.method[j] = $types[1].toObject(message.method[j], options);
                    }
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[2].toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Creates a plain object from this ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @exports google.protobuf.MethodDescriptorProto
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @type {string}
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @type {string}
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @type {string}
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @type {google.protobuf.MethodOptions}
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @type {boolean}
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @type {boolean}
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                // Lazily resolved type references
                const $types = {
                    3: "google.protobuf.MethodOptions"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message.
                 * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType !== undefined && message.hasOwnProperty("inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType !== undefined && message.hasOwnProperty("outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options && message.hasOwnProperty("options"))
                        $types[3].encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming !== undefined && message.hasOwnProperty("clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming !== undefined && message.hasOwnProperty("serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited.
                 * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.inputType = reader.string();
                            break;
                        case 3:
                            message.outputType = reader.string();
                            break;
                        case 4:
                            message.options = $types[3].decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.clientStreaming = reader.bool();
                            break;
                        case 6:
                            message.serverStreaming = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @param {google.protobuf.MethodDescriptorProto|Object} message MethodDescriptorProto message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {    
                    if (message.name !== undefined)
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType !== undefined)
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType !== undefined)
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options !== undefined && message.options !== null) {
                        let error = $types[3].verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming !== undefined)
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming !== undefined)
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    let message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name !== undefined && object.name !== null)
                        message.name = String(object.name);
                    if (object.inputType !== undefined && object.inputType !== null)
                        message.inputType = String(object.inputType);
                    if (object.outputType !== undefined && object.outputType !== null)
                        message.outputType = String(object.outputType);
                    if (object.options !== undefined && object.options !== null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $types[3].fromObject(object.options);
                    }
                    if (object.clientStreaming !== undefined && object.clientStreaming !== null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming !== undefined && object.serverStreaming !== null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.MethodDescriptorProto.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.from = MethodDescriptorProto.fromObject;
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType !== undefined && message.inputType !== null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType !== undefined && message.outputType !== null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options !== undefined && message.options !== null && message.hasOwnProperty("options"))
                        object.options = $types[3].toObject(message.options, options);
                    if (message.clientStreaming !== undefined && message.clientStreaming !== null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming !== undefined && message.serverStreaming !== null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Creates a plain object from this MethodDescriptorProto message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Constructs a new FileOptions.
                 * @exports google.protobuf.FileOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @type {string}
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @type {string}
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @type {boolean}
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @type {boolean}
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @type {boolean}
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @type {number}
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @type {string}
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @type {boolean}
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @type {boolean}
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @type {boolean}
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @type {boolean}
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @type {boolean}
                 */
                FileOptions.prototype.ccEnableArenas = false;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @type {string}
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @type {string}
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions swiftPrefix.
                 * @type {string}
                 */
                FileOptions.prototype.swiftPrefix = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    5: "google.protobuf.FileOptions.OptimizeMode",
                    15: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message.
                 * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage !== undefined && message.hasOwnProperty("javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname !== undefined && message.hasOwnProperty("javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.javaMultipleFiles !== undefined && message.hasOwnProperty("javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.javaGenerateEqualsAndHash !== undefined && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.javaStringCheckUtf8 !== undefined && message.hasOwnProperty("javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.optimizeFor !== undefined && message.hasOwnProperty("optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.optimizeFor);
                    if (message.goPackage !== undefined && message.hasOwnProperty("goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices !== undefined && message.hasOwnProperty("ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices !== undefined && message.hasOwnProperty("javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices !== undefined && message.hasOwnProperty("pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.ccEnableArenas !== undefined && message.hasOwnProperty("ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix !== undefined && message.hasOwnProperty("objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace !== undefined && message.hasOwnProperty("csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.swiftPrefix !== undefined && message.hasOwnProperty("swiftPrefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[15].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited.
                 * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.javaPackage = reader.string();
                            break;
                        case 8:
                            message.javaOuterClassname = reader.string();
                            break;
                        case 10:
                            message.javaMultipleFiles = reader.bool();
                            break;
                        case 20:
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        case 27:
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        case 9:
                            message.optimizeFor = reader.uint32();
                            break;
                        case 11:
                            message.goPackage = reader.string();
                            break;
                        case 16:
                            message.ccGenericServices = reader.bool();
                            break;
                        case 17:
                            message.javaGenericServices = reader.bool();
                            break;
                        case 18:
                            message.pyGenericServices = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.ccEnableArenas = reader.bool();
                            break;
                        case 36:
                            message.objcClassPrefix = reader.string();
                            break;
                        case 37:
                            message.csharpNamespace = reader.string();
                            break;
                        case 39:
                            message.swiftPrefix = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[15].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @param {google.protobuf.FileOptions|Object} message FileOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {    
                    if (message.javaPackage !== undefined)
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname !== undefined)
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles !== undefined)
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash !== undefined)
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 !== undefined)
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor !== undefined)
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage !== undefined)
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices !== undefined)
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices !== undefined)
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices !== undefined)
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas !== undefined)
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix !== undefined)
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace !== undefined)
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.swiftPrefix !== undefined)
                        if (!$util.isString(message.swiftPrefix))
                            return "swiftPrefix: string expected";
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[15].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    let message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage !== undefined && object.javaPackage !== null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname !== undefined && object.javaOuterClassname !== null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles !== undefined && object.javaMultipleFiles !== null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash !== undefined && object.javaGenerateEqualsAndHash !== null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 !== undefined && object.javaStringCheckUtf8 !== null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage !== undefined && object.goPackage !== null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices !== undefined && object.ccGenericServices !== null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices !== undefined && object.javaGenericServices !== null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices !== undefined && object.pyGenericServices !== null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas !== undefined && object.ccEnableArenas !== null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix !== undefined && object.objcClassPrefix !== null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace !== undefined && object.csharpNamespace !== null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.swiftPrefix !== undefined && object.swiftPrefix !== null)
                        message.swiftPrefix = String(object.swiftPrefix);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[15].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.FileOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.from = FileOptions.fromObject;
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.javaMultipleFiles = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.javaStringCheckUtf8 = false;
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.deprecated = false;
                        object.ccEnableArenas = false;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                        object.swiftPrefix = "";
                    }
                    if (message.javaPackage !== undefined && message.javaPackage !== null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname !== undefined && message.javaOuterClassname !== null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.javaMultipleFiles !== undefined && message.javaMultipleFiles !== null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.javaGenerateEqualsAndHash !== undefined && message.javaGenerateEqualsAndHash !== null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.javaStringCheckUtf8 !== undefined && message.javaStringCheckUtf8 !== null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.optimizeFor !== undefined && message.optimizeFor !== null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $types[5][message.optimizeFor] : message.optimizeFor;
                    if (message.goPackage !== undefined && message.goPackage !== null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices !== undefined && message.ccGenericServices !== null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices !== undefined && message.javaGenericServices !== null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices !== undefined && message.pyGenericServices !== null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.ccEnableArenas !== undefined && message.ccEnableArenas !== null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix !== undefined && message.objcClassPrefix !== null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace !== undefined && message.csharpNamespace !== null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.swiftPrefix !== undefined && message.swiftPrefix !== null && message.hasOwnProperty("swiftPrefix"))
                        object.swiftPrefix = message.swiftPrefix;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[15].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this FileOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name OptimizeMode
                 * @memberof google.protobuf.FileOptions
                 * @enum {number}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Constructs a new MessageOptions.
                 * @exports google.protobuf.MessageOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @type {boolean}
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @type {boolean}
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @type {boolean}
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @type {boolean}
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    4: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message.
                 * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat !== undefined && message.hasOwnProperty("messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor !== undefined && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry !== undefined && message.hasOwnProperty("mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[4].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited.
                 * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageSetWireFormat = reader.bool();
                            break;
                        case 2:
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.mapEntry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[4].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @param {google.protobuf.MessageOptions|Object} message MessageOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {    
                    if (message.messageSetWireFormat !== undefined)
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor !== undefined)
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry !== undefined)
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[4].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    let message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat !== undefined && object.messageSetWireFormat !== null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor !== undefined && object.noStandardDescriptorAccessor !== null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry !== undefined && object.mapEntry !== null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[4].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.MessageOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.from = MessageOptions.fromObject;
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat !== undefined && message.messageSetWireFormat !== null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor !== undefined && message.noStandardDescriptorAccessor !== null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry !== undefined && message.mapEntry !== null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[4].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this MessageOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Constructs a new FieldOptions.
                 * @exports google.protobuf.FieldOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @type {number}
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @type {boolean}
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @type {number}
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @type {boolean}
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @type {boolean}
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @type {boolean}
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    0: "google.protobuf.FieldOptions.CType",
                    2: "google.protobuf.FieldOptions.JSType",
                    6: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message.
                 * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype !== undefined && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ctype);
                    if (message.packed !== undefined && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.jstype !== undefined && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.jstype);
                    if (message.lazy !== undefined && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.weak !== undefined && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[6].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited.
                 * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.uint32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.uint32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[6].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @param {google.protobuf.FieldOptions|Object} message FieldOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {    
                    if (message.ctype !== undefined)
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed !== undefined)
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype !== undefined)
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy !== undefined)
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak !== undefined)
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[6].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    let message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed !== undefined && object.packed !== null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy !== undefined && object.lazy !== null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak !== undefined && object.weak !== null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[6].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.FieldOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.from = FieldOptions.fromObject;
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.lazy = false;
                        object.deprecated = false;
                        object.weak = false;
                    }
                    if (message.ctype !== undefined && message.ctype !== null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $types[0][message.ctype] : message.ctype;
                    if (message.packed !== undefined && message.packed !== null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.jstype !== undefined && message.jstype !== null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $types[2][message.jstype] : message.jstype;
                    if (message.lazy !== undefined && message.lazy !== null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.weak !== undefined && message.weak !== null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[6].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this FieldOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name CType
                 * @memberof google.protobuf.FieldOptions
                 * @enum {number}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name JSType
                 * @memberof google.protobuf.FieldOptions
                 * @enum {number}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Constructs a new OneofOptions.
                 * @exports google.protobuf.OneofOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    0: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message.
                 * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[0].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited.
                 * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[0].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @param {google.protobuf.OneofOptions|Object} message OneofOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {    
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[0].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    let message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[0].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.OneofOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.from = OneofOptions.fromObject;
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[0].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this OneofOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Constructs a new EnumOptions.
                 * @exports google.protobuf.EnumOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @type {boolean}
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @type {boolean}
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    2: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message.
                 * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias !== undefined && message.hasOwnProperty("allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[2].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited.
                 * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allowAlias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[2].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @param {google.protobuf.EnumOptions|Object} message EnumOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {    
                    if (message.allowAlias !== undefined)
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[2].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    let message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias !== undefined && object.allowAlias !== null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[2].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.EnumOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.from = EnumOptions.fromObject;
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                    }
                    if (message.allowAlias !== undefined && message.allowAlias !== null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[2].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this EnumOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @exports google.protobuf.EnumValueOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @type {boolean}
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message.
                 * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[1].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited.
                 * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @param {google.protobuf.EnumValueOptions|Object} message EnumValueOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {    
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[1].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    let message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[1].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.EnumValueOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.from = EnumValueOptions.fromObject;
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[1].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this EnumValueOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Constructs a new ServiceOptions.
                 * @exports google.protobuf.ServiceOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @type {boolean}
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message.
                 * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[1].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited.
                 * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[1].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @param {google.protobuf.ServiceOptions|Object} message ServiceOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {    
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[1].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    let message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[1].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.ServiceOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.from = ServiceOptions.fromObject;
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[1].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this ServiceOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Constructs a new MethodOptions.
                 * @exports google.protobuf.MethodOptions
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @type {boolean}
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions idempotencyLevel.
                 * @type {number}
                 */
                MethodOptions.prototype.idempotencyLevel = 0;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @type {Array.<google.protobuf.UninterpretedOption>}
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    1: "google.protobuf.MethodOptions.IdempotencyLevel",
                    2: "google.protobuf.UninterpretedOption"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message.
                 * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated !== undefined && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotencyLevel !== undefined && message.hasOwnProperty("idempotencyLevel"))
                        writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.idempotencyLevel);
                    if (message.uninterpretedOption !== undefined && message.hasOwnProperty("uninterpretedOption"))
                        for (let i = 0; i < message.uninterpretedOption.length; ++i)
                            $types[2].encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited.
                 * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 34:
                            message.idempotencyLevel = reader.uint32();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($types[2].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @param {google.protobuf.MethodOptions|Object} message MethodOptions message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {    
                    if (message.deprecated !== undefined)
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.idempotencyLevel !== undefined)
                        switch (message.idempotencyLevel) {
                        default:
                            return "idempotencyLevel: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.uninterpretedOption !== undefined) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                            let error = $types[2].verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    let message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated !== undefined && object.deprecated !== null)
                        message.deprecated = Boolean(object.deprecated);
                    switch (object.idempotencyLevel) {
                    case "IDEMPOTENCY_UNKNOWN":
                    case 0:
                        message.idempotencyLevel = 0;
                        break;
                    case "NO_SIDE_EFFECTS":
                    case 1:
                        message.idempotencyLevel = 1;
                        break;
                    case "IDEMPOTENT":
                    case 2:
                        message.idempotencyLevel = 2;
                        break;
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $types[2].fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.MethodOptions.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.from = MethodOptions.fromObject;
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                    }
                    if (message.deprecated !== undefined && message.deprecated !== null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotencyLevel !== undefined && message.idempotencyLevel !== null && message.hasOwnProperty("idempotencyLevel"))
                        object.idempotencyLevel = options.enums === String ? $types[1][message.idempotencyLevel] : message.idempotencyLevel;
                    if (message.uninterpretedOption !== undefined && message.uninterpretedOption !== null && message.hasOwnProperty("uninterpretedOption")) {
                        object.uninterpretedOption = [];
                        for (let j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $types[2].toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this MethodOptions message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * IdempotencyLevel enum.
                 * @name IdempotencyLevel
                 * @memberof google.protobuf.MethodOptions
                 * @enum {number}
                 * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
                 * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
                 * @property {number} IDEMPOTENT=2 IDEMPOTENT value
                 */
                MethodOptions.IdempotencyLevel = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                    values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                    values[valuesById[2] = "IDEMPOTENT"] = 2;
                    return values;
                })();
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @exports google.protobuf.UninterpretedOption
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @type {Array.<google.protobuf.UninterpretedOption.NamePart>}
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @type {string}
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @type {number|$protobuf.Long}
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @type {number|$protobuf.Long}
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @type {number}
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @type {Uint8Array}
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @type {string}
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                // Lazily resolved type references
                const $types = {
                    0: "google.protobuf.UninterpretedOption.NamePart"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message.
                 * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name !== undefined && message.hasOwnProperty("name"))
                        for (let i = 0; i < message.name.length; ++i)
                            $types[0].encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue !== undefined && message.hasOwnProperty("identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue !== undefined && message.positiveIntValue !== null && message.hasOwnProperty("positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue !== undefined && message.negativeIntValue !== null && message.hasOwnProperty("negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue !== undefined && message.hasOwnProperty("doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue !== undefined && message.hasOwnProperty("aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited.
                 * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($types[0].decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifierValue = reader.string();
                            break;
                        case 4:
                            message.positiveIntValue = reader.uint64();
                            break;
                        case 5:
                            message.negativeIntValue = reader.int64();
                            break;
                        case 6:
                            message.doubleValue = reader.double();
                            break;
                        case 7:
                            message.stringValue = reader.bytes();
                            break;
                        case 8:
                            message.aggregateValue = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @param {google.protobuf.UninterpretedOption|Object} message UninterpretedOption message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {    
                    if (message.name !== undefined) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (let i = 0; i < message.name.length; ++i) {
                            let error = $types[0].verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue !== undefined)
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue !== undefined)
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue !== undefined)
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue !== undefined)
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue !== undefined)
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue !== undefined)
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    let message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (let i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $types[0].fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue !== undefined && object.identifierValue !== null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue !== undefined && object.positiveIntValue !== null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low, object.positiveIntValue.high).toNumber(true);
                    if (object.negativeIntValue !== undefined && object.negativeIntValue !== null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low, object.negativeIntValue.high).toNumber();
                    if (object.doubleValue !== undefined && object.doubleValue !== null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue !== undefined && object.stringValue !== null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue !== undefined && object.aggregateValue !== null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.UninterpretedOption.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.from = UninterpretedOption.fromObject;
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        object.stringValue = options.bytes === String ? "" : [];
                        object.aggregateValue = "";
                    }
                    if (message.name !== undefined && message.name !== null && message.hasOwnProperty("name")) {
                        object.name = [];
                        for (let j = 0; j < message.name.length; ++j)
                            object.name[j] = $types[0].toObject(message.name[j], options);
                    }
                    if (message.identifierValue !== undefined && message.identifierValue !== null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue !== undefined && message.positiveIntValue !== null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low, message.positiveIntValue.high).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue !== undefined && message.negativeIntValue !== null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low, message.negativeIntValue.high).toNumber() : message.negativeIntValue;
                    if (message.doubleValue !== undefined && message.doubleValue !== null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = message.doubleValue;
                    if (message.stringValue !== undefined && message.stringValue !== null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue !== undefined && message.aggregateValue !== null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Creates a plain object from this UninterpretedOption message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Constructs a new NamePart.
                     * @exports google.protobuf.UninterpretedOption.NamePart
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @type {string}
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @type {boolean}
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message.
                     * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited.
                     * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.namePart = reader.string();
                                break;
                            case 2:
                                message.isExtension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @param {google.protobuf.UninterpretedOption.NamePart|Object} message NamePart message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {    
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        let message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart !== undefined && object.namePart !== null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension !== undefined && object.isExtension !== null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.UninterpretedOption.NamePart.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.from = NamePart.fromObject;
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart !== undefined && message.namePart !== null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension !== undefined && message.isExtension !== null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this NamePart message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @exports google.protobuf.SourceCodeInfo
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @type {Array.<google.protobuf.SourceCodeInfo.Location>}
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    0: "google.protobuf.SourceCodeInfo.Location"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message.
                 * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location !== undefined && message.hasOwnProperty("location"))
                        for (let i = 0; i < message.location.length; ++i)
                            $types[0].encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited.
                 * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($types[0].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @param {google.protobuf.SourceCodeInfo|Object} message SourceCodeInfo message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {    
                    if (message.location !== undefined) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (let i = 0; i < message.location.length; ++i) {
                            let error = $types[0].verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    let message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (let i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $types[0].fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.SourceCodeInfo.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.from = SourceCodeInfo.fromObject;
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location !== undefined && message.location !== null && message.hasOwnProperty("location")) {
                        object.location = [];
                        for (let j = 0; j < message.location.length; ++j)
                            object.location[j] = $types[0].toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this SourceCodeInfo message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Constructs a new Location.
                     * @exports google.protobuf.SourceCodeInfo.Location
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Location(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @type {Array.<number>}
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @type {Array.<number>}
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @type {string}
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @type {string}
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @type {Array.<string>}
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message.
                     * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path && message.path.length && message.hasOwnProperty("path")) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (let i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span && message.span.length && message.hasOwnProperty("span")) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (let i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments !== undefined && message.hasOwnProperty("leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments !== undefined && message.hasOwnProperty("trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments !== undefined && message.hasOwnProperty("leadingDetachedComments"))
                            for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited.
                     * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leadingComments = reader.string();
                                break;
                            case 4:
                                message.trailingComments = reader.string();
                                break;
                            case 6:
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @param {google.protobuf.SourceCodeInfo.Location|Object} message Location message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {    
                        if (message.path !== undefined) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (let i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span !== undefined) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (let i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments !== undefined)
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments !== undefined)
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments !== undefined) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        let message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (let i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (let i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments !== undefined && object.leadingComments !== null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments !== undefined && object.trailingComments !== null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (let i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.SourceCodeInfo.Location.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.from = Location.fromObject;
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path !== undefined && message.path !== null && message.hasOwnProperty("path")) {
                            object.path = [];
                            for (let j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span !== undefined && message.span !== null && message.hasOwnProperty("span")) {
                            object.span = [];
                            for (let j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments !== undefined && message.leadingComments !== null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments !== undefined && message.trailingComments !== null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments !== undefined && message.leadingDetachedComments !== null && message.hasOwnProperty("leadingDetachedComments")) {
                            object.leadingDetachedComments = [];
                            for (let j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this Location message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @exports google.protobuf.GeneratedCodeInfo
                 * @constructor
                 * @param {Object} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @type {Array.<google.protobuf.GeneratedCodeInfo.Annotation>}
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                // Lazily resolved type references
                const $types = {
                    0: "google.protobuf.GeneratedCodeInfo.Annotation"
                }; $lazyTypes.push($types);
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @param {Object} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message.
                 * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {    
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation !== undefined && message.hasOwnProperty("annotation"))
                        for (let i = 0; i < message.annotation.length; ++i)
                            $types[0].encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited.
                 * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {    
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($types[0].decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @param {google.protobuf.GeneratedCodeInfo|Object} message GeneratedCodeInfo message or plain object to verify
                 * @returns {?string} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {    
                    if (message.annotation !== undefined) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (let i = 0; i < message.annotation.length; ++i) {
                            let error = $types[0].verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {    
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    let message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (let i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $types[0].fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * This is an alias of {@link google.protobuf.GeneratedCodeInfo.fromObject}.
                 * @function
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.from = GeneratedCodeInfo.fromObject;
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {    
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation !== undefined && message.annotation !== null && message.hasOwnProperty("annotation")) {
                        object.annotation = [];
                        for (let j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $types[0].toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Creates a plain object from this GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @param {$protobuf.ConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.prototype.toObject = function toObject(options) {
                    return this.constructor.toObject(this, options);
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Constructs a new Annotation.
                     * @exports google.protobuf.GeneratedCodeInfo.Annotation
                     * @constructor
                     * @param {Object} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @type {Array.<number>}
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @type {string}
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @type {number}
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @type {number}
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @param {Object} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message.
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {    
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path && message.path.length && message.hasOwnProperty("path")) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (let i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile !== undefined && message.hasOwnProperty("sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin !== undefined && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end !== undefined && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited.
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.decode = function decode(reader, length) {    
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation|Object} message Annotation message or plain object to verify
                     * @returns {?string} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {    
                        if (message.path !== undefined) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (let i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile !== undefined)
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin !== undefined)
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end !== undefined)
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {    
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        let message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (let i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile !== undefined && object.sourceFile !== null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin !== undefined && object.begin !== null)
                            message.begin = object.begin | 0;
                        if (object.end !== undefined && object.end !== null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * This is an alias of {@link google.protobuf.GeneratedCodeInfo.Annotation.fromObject}.
                     * @function
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.from = Annotation.fromObject;
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {    
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path !== undefined && message.path !== null && message.hasOwnProperty("path")) {
                            object.path = [];
                            for (let j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile !== undefined && message.sourceFile !== null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin !== undefined && message.begin !== null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end !== undefined && message.end !== null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Creates a plain object from this Annotation message. Also converts values to other types if specified.
                     * @param {$protobuf.ConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.prototype.toObject = function toObject(options) {
                        return this.constructor.toObject(this, options);
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    // Resolve lazy type references to actual types
    $util.lazyResolve($root, $lazyTypes);

    return $root;
});
