import { printFileDescriptorPatch } from "./ts/fileDescriptorPatch";
import {printFileDescriptorTSD} from "./ts/fileDescriptorTSD";
import {ExportMap} from "./ExportMap";
import {replaceProtoSuffix, withAllStdIn} from "./util";
import {CodeGeneratorRequest, CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {generateGrpcWebService} from "./service/grpcweb";

/**
 * This is the ProtoC compiler plugin.
 *
 * The Protocol Buffers Compiler can be extended to [support new languages via plugins](https://developers.google.com/protocol-buffers/docs/reference/other).
 * A plugin is just a program which reads a CodeGeneratorRequest protocol buffer from standard input
 * and then writes a CodeGeneratorResponse protocol buffer to standard output.
 * These message types are defined in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 *
 */
withAllStdIn((inputBuff: Buffer) => {
  try {
    const typedInputBuff = new Uint8Array(inputBuff.length);
    typedInputBuff.set(inputBuff);

    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(typedInputBuff);
    const codeGenResponse = new CodeGeneratorResponse();
    const exportMap = new ExportMap();
    const fileNameToDescriptor: {[key: string]: FileDescriptorProto} = {};

    // Generate separate `.ts` files for services if param is set
    const generateServices = codeGenRequest.getParameter() === "service=true";

    codeGenRequest.getProtoFileList().forEach(protoFileDescriptor => {
      fileNameToDescriptor[protoFileDescriptor.getName()] = protoFileDescriptor;
      exportMap.addFileDescriptor(protoFileDescriptor);
    });

    codeGenRequest.getFileToGenerateList().forEach(fileName => {
      const outputFileName = replaceProtoSuffix(fileName);
      const thisFile = new CodeGeneratorResponse.File();
      thisFile.setName(outputFileName + ".d.ts");
      thisFile.setContent(printFileDescriptorTSD(fileNameToDescriptor[fileName], exportMap));
      codeGenResponse.addFile(thisFile);

      // patch file is created to add 'deserializeJson' function to proto model
      const patchFile = new CodeGeneratorResponse.File();
      patchFile.setName(outputFileName + ".patch.js");
      patchFile.setContent(printFileDescriptorPatch(fileNameToDescriptor[fileName], exportMap));
      codeGenResponse.addFile(patchFile);

      // type definition file is added for TypeScript imports
      const patchFileName = outputFileName.split('/').pop();
      const patchFileType = new CodeGeneratorResponse.File();
      patchFileType.setName(outputFileName + ".patch.d.ts");
      let patchFileContent = '// this dummy constant is created for TypeScript compiler not to freak out when this module (empty) is imported\n';
      patchFileContent += `export const ${patchFileName} = "${patchFileName}";`;
      patchFileContent += '\n';
      patchFileType.setContent(patchFileContent);
      codeGenResponse.addFile(patchFileType);

      if (generateServices) {
        generateGrpcWebService(outputFileName, fileNameToDescriptor[fileName], exportMap)
          .forEach(file => codeGenResponse.addFile(file));
      }
    });

    process.stdout.write(new Buffer(codeGenResponse.serializeBinary()));
  } catch (err) {
    console.error("protoc-gen-ts error: " + err.stack + "\n");
    process.exit(1);
  }
});
