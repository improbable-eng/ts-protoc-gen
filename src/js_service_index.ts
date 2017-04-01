/**
 * This is the ProtoC compiler plugin.
 *
 * It only accepts stdin/stdout output according to the protocol
 * specified in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 */
import {ExportMap} from "./ExportMap";
import {printFileDescriptorJSServices} from "./js/fileDescriptorJSServices";
import {filePathFromProtoWithoutExtension, withAllStdIn} from "./util";
import {CodeGeneratorRequest, CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";

withAllStdIn((inputBuff: Buffer) => {
  try {
    const typedInputBuff = new Uint8Array(inputBuff.length);
    typedInputBuff.set(inputBuff);

    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(typedInputBuff);
    const codeGenResponse = new CodeGeneratorResponse();
    const exportMap = new ExportMap();
    const fileNameToDescriptor: {[key: string]: FileDescriptorProto} = {};

    codeGenRequest.getProtoFileList().forEach(protoFileDescriptor => {
      fileNameToDescriptor[protoFileDescriptor.getName()] = protoFileDescriptor;
      exportMap.addFileDescriptor(protoFileDescriptor);
    });

    codeGenRequest.getFileToGenerateList().forEach(fileName => {
      const fileDescriptorOutput = printFileDescriptorJSServices(fileNameToDescriptor[fileName], exportMap);
      if (fileDescriptorOutput != "") {
        const outputFileName = filePathFromProtoWithoutExtension(fileName);
        const thisFile = new CodeGeneratorResponse.File();
        thisFile.setName(outputFileName + "_service.js");
        thisFile.setContent(fileDescriptorOutput);
        codeGenResponse.addFile(thisFile)
      }
    });

    process.stdout.write(new Buffer(codeGenResponse.serializeBinary()));
  } catch (err) {
    console.error("protoc-gen-ts error: " + err.stack + "\n");
    process.exit(1);
  }
});
