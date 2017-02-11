


const processFileDescriptor = function (fileName, fileDescriptor) {
    output = "file: " + fileDescriptor.getName() + "\n";
    output += "package: " + fileDescriptor.getPackage() + "\n";
    
    
    output += "\n";

    
    Array.from(fileDescriptor.getMessageTypeList()).forEach(message => {
        output += outputMessage(message)
    });
    return output
}


const outputMessage = function (messageDescriptor) {
    output = "message " + messageDescriptor.getName() + "{\n";

    Array.from(messageDescriptor.getFieldList()).forEach( field => {
        output += "\t" + field.getType() + ": " + field.getName() + "\n";
    });


    output += "}\n"
    return output

}

module.exports = { 
    processFileDescriptor: processFileDescriptor,
}