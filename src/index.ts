import {printFileDescriptorTSD} from "./ts/fileDescriptorTSD";
import {ExportMap} from "./ExportMap";
import {replaceProtoSuffix, withAllStdIn} from "./util";
import {CodeGeneratorRequest, CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
import {generateGrpcWebService} from "./service/grpcweb";
import {generateGrpcNodeService} from "./service/grpcnode";

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

    const parameter = codeGenRequest.getParameter();
    const [serviceParameter, modeParameter] = parameter.split(',');
    const generateGrpcWebServices = serviceParameter === "service=grpc-web" || serviceParameter === "service=true";
    const generateGrpcNodeServices = serviceParameter === "service=grpc-node";

    if (serviceParameter === "service=true") {
      console.warn("protoc-gen-ts warning: The service=true parameter has been deprecated. Use service=grpc-web instead.");
    }

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

      if (generateGrpcWebServices) {
        generateGrpcWebService(outputFileName, fileNameToDescriptor[fileName], exportMap)
          .forEach(file => codeGenResponse.addFile(file));
      } else if (generateGrpcNodeServices) {
        const file = generateGrpcNodeService(outputFileName, fileNameToDescriptor[fileName], exportMap, modeParameter);
        codeGenResponse.addFile(file);
      }
    });

    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary()));
  } catch (err) {
    console.error("protoc-gen-ts error: " + err.stack + "\n");
    process.exit(1);
  }
});
