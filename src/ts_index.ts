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
import {printFileDescriptorTSServices, printFileDescriptorTSGRPC} from "./ts/fileDescriptorTSServices";

withAllStdIn((inputBuff: Buffer) => {
  try {
    const typedInputBuff = new Uint8Array(inputBuff.length);
    typedInputBuff.set(inputBuff);

    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(typedInputBuff);
    const codeGenResponse = new CodeGeneratorResponse();
    const exportMap = new ExportMap();
    const fileNameToDescriptor: {[key: string]: FileDescriptorProto} = {};
    const parameters = parseParameters(codeGenRequest.getParameter());

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

      // Generate separate `.ts` files for services if param is set
      if (parameters.service) {
        const fileDescriptorOutput = printFileDescriptorTSServices(fileNameToDescriptor[fileName], exportMap);
        if (fileDescriptorOutput !== "") {
          const thisServiceFile = new CodeGeneratorResponse.File();
          thisServiceFile.setName(outputFileName + "_service.ts");
          thisServiceFile.setContent(fileDescriptorOutput);
          codeGenResponse.addFile(thisServiceFile);
        }
      }

      if (parameters.grpc) {
        const fileDescriptorOutput = printFileDescriptorTSGRPC(fileNameToDescriptor[fileName], exportMap);
        if (fileDescriptorOutput !== "") {
          const fileName = outputFileName.replace(/_pb$/, "_grpc_pb.d.ts");
          const thisServiceFile = new CodeGeneratorResponse.File();
          thisServiceFile.setName(fileName);
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

interface ITSOutParameters {
  service: boolean;
  grpc: boolean;
}
function parseParameters(parametersString: string): ITSOutParameters {
  const keyValueArray = parametersString.split(",").map((parameterString) => {
    const split = parameterString.split("=");
    return {
      key: split[0].trim().toLowerCase(),
      value: (typeof split[1] !== undefined) ?
          split[1].trim().toLowerCase() : "true"
    };
  });

  const resolvedParameters: ITSOutParameters = {
    service: false,
    grpc: false
  };
  for (let i = 0; i < keyValueArray.length; i++) {
    const {key, value} = keyValueArray[i];
    switch (key) {
      case "service":
        resolvedParameters.service = (value === "true");
        break;
      case "grpc":
        resolvedParameters.grpc = (value === "true");
        break;
    }
  }

  return resolvedParameters;
}
