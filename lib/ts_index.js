"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileDescriptorTSD_1 = require("./ts/fileDescriptorTSD");
var ExportMap_1 = require("./ExportMap");
var util_1 = require("./util");
var plugin_pb_1 = require("google-protobuf/google/protobuf/compiler/plugin_pb");
var fileDescriptorTSServices_1 = require("./ts/fileDescriptorTSServices");
util_1.withAllStdIn(function (inputBuff) {
    try {
        var typedInputBuff = new Uint8Array(inputBuff.length);
        typedInputBuff.set(inputBuff);
        var codeGenRequest = plugin_pb_1.CodeGeneratorRequest.deserializeBinary(typedInputBuff);
        var codeGenResponse_1 = new plugin_pb_1.CodeGeneratorResponse();
        var exportMap_1 = new ExportMap_1.ExportMap();
        var fileNameToDescriptor_1 = {};
        var generateServices_1 = codeGenRequest.getParameter() === "service=true";
        codeGenRequest.getProtoFileList().forEach(function (protoFileDescriptor) {
            fileNameToDescriptor_1[protoFileDescriptor.getName()] = protoFileDescriptor;
            exportMap_1.addFileDescriptor(protoFileDescriptor);
        });
        codeGenRequest.getFileToGenerateList().forEach(function (fileName) {
            var outputFileName = util_1.filePathFromProtoWithoutExtension(fileName);
            var thisFile = new plugin_pb_1.CodeGeneratorResponse.File();
            thisFile.setName(outputFileName + ".d.ts");
            thisFile.setContent(fileDescriptorTSD_1.printFileDescriptorTSD(fileNameToDescriptor_1[fileName], exportMap_1));
            codeGenResponse_1.addFile(thisFile);
            if (generateServices_1) {
                var fileDescriptorOutput = fileDescriptorTSServices_1.printFileDescriptorTSServices(fileNameToDescriptor_1[fileName], exportMap_1);
                if (fileDescriptorOutput != "") {
                    var thisServiceFile = new plugin_pb_1.CodeGeneratorResponse.File();
                    thisServiceFile.setName(outputFileName + "_service.ts");
                    thisServiceFile.setContent(fileDescriptorOutput);
                    codeGenResponse_1.addFile(thisServiceFile);
                }
            }
        });
        process.stdout.write(new Buffer(codeGenResponse_1.serializeBinary()));
    }
    catch (err) {
        console.error("protoc-gen-ts error: " + err.stack + "\n");
        process.exit(1);
    }
});
//# sourceMappingURL=ts_index.js.map