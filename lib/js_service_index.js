"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExportMap_1 = require("./ExportMap");
var fileDescriptorJSServices_1 = require("./js/fileDescriptorJSServices");
var util_1 = require("./util");
var plugin_pb_1 = require("google-protobuf/google/protobuf/compiler/plugin_pb");
util_1.withAllStdIn(function (inputBuff) {
    try {
        var typedInputBuff = new Uint8Array(inputBuff.length);
        typedInputBuff.set(inputBuff);
        var codeGenRequest = plugin_pb_1.CodeGeneratorRequest.deserializeBinary(typedInputBuff);
        var codeGenResponse_1 = new plugin_pb_1.CodeGeneratorResponse();
        var exportMap_1 = new ExportMap_1.ExportMap();
        var fileNameToDescriptor_1 = {};
        codeGenRequest.getProtoFileList().forEach(function (protoFileDescriptor) {
            fileNameToDescriptor_1[protoFileDescriptor.getName()] = protoFileDescriptor;
            exportMap_1.addFileDescriptor(protoFileDescriptor);
        });
        codeGenRequest.getFileToGenerateList().forEach(function (fileName) {
            var fileDescriptorOutput = fileDescriptorJSServices_1.printFileDescriptorJSServices(fileNameToDescriptor_1[fileName], exportMap_1);
            if (fileDescriptorOutput != "") {
                var outputFileName = util_1.filePathFromProtoWithoutExtension(fileName);
                var thisFile = new plugin_pb_1.CodeGeneratorResponse.File();
                thisFile.setName(outputFileName + "_service.js");
                thisFile.setContent(fileDescriptorOutput);
                codeGenResponse_1.addFile(thisFile);
            }
        });
        process.stdout.write(new Buffer(codeGenResponse_1.serializeBinary()));
    }
    catch (err) {
        console.error("protoc-gen-ts error: " + err.stack + "\n");
        process.exit(1);
    }
});
//# sourceMappingURL=js_service_index.js.map