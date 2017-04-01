/**
 * This is the ProtoC compiler plugin.
 *
 * It only accepts stdin/stdout output according to the protocol
 * specified in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 */
import {printFileDescriptorTSD} from "./ts/fileDescriptorTSD";
import {ExportMap} from "./ExportMap";
import {filePathFromProtoWithoutExtension, withAllStdIn} from "./util";
import {CodeGeneratorRequest, CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {printFileDescriptorTSServices} from "./ts/fileDescriptorTSServices";

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
      const outputFileName = filePathFromProtoWithoutExtension(fileName);
      const thisFile = new CodeGeneratorResponse.File();
      thisFile.setName(outputFileName + ".d.ts");
      thisFile.setContent(printFileDescriptorTSD(fileNameToDescriptor[fileName], exportMap));
      codeGenResponse.addFile(thisFile);

      if (generateServices) {
        const fileDescriptorOutput = printFileDescriptorTSServices(fileNameToDescriptor[fileName], exportMap);
        if (fileDescriptorOutput != "") {
          const thisServiceFile = new CodeGeneratorResponse.File();
          thisServiceFile.setName(outputFileName + "_service.ts");
          thisServiceFile.setContent(fileDescriptorOutput);
          codeGenResponse.addFile(thisServiceFile);
        }
      }
    });

    process.stdout.write(new Buffer(codeGenResponse.serializeBinary()));
  } catch (err) {
    console.error("protoc-gen-ts error: " + err.stack + "\n");
    process.exit(1);
  }
});
