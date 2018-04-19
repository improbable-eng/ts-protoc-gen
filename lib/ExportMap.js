"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExportMap = (function () {
    function ExportMap() {
        this.messageMap = {};
        this.enumMap = {};
    }
    ExportMap.prototype.exportNested = function (scope, fileDescriptor, message) {
        var _this = this;
        var messageEntry = {
            pkg: fileDescriptor.getPackage(),
            fileName: fileDescriptor.getName(),
            messageOptions: message.getOptions(),
            mapFieldOptions: message.getOptions() && message.getOptions().getMapEntry() ? {
                key: [message.getFieldList()[0].getType(), message.getFieldList()[0].getTypeName().slice(1)],
                value: [message.getFieldList()[1].getType(), message.getFieldList()[1].getTypeName().slice(1)],
            } : undefined,
        };
        var packagePrefix = scope ? scope + "." : "";
        var entryName = "" + packagePrefix + message.getName();
        this.messageMap[entryName] = messageEntry;
        message.getNestedTypeList().forEach(function (nested) {
            _this.exportNested("" + packagePrefix + message.getName(), fileDescriptor, nested);
        });
        message.getEnumTypeList().forEach(function (enumType) {
            var identifier = "" + packagePrefix + message.getName() + "." + enumType.getName();
            _this.enumMap[identifier] = {
                pkg: fileDescriptor.getPackage(),
                fileName: fileDescriptor.getName(),
                enumOptions: enumType.getOptions(),
            };
        });
    };
    ExportMap.prototype.addFileDescriptor = function (fileDescriptor) {
        var _this = this;
        var scope = fileDescriptor.getPackage();
        fileDescriptor.getMessageTypeList().forEach(function (messageType) {
            _this.exportNested(scope, fileDescriptor, messageType);
        });
        fileDescriptor.getEnumTypeList().forEach(function (enumType) {
            var packagePrefix = scope ? scope + "." : "";
            _this.enumMap[packagePrefix + enumType.getName()] = {
                pkg: fileDescriptor.getPackage(),
                fileName: fileDescriptor.getName(),
                enumOptions: enumType.getOptions(),
            };
        });
    };
    ExportMap.prototype.getMessage = function (str) {
        return this.messageMap[str];
    };
    ExportMap.prototype.getEnum = function (str) {
        return this.enumMap[str];
    };
    return ExportMap;
}());
exports.ExportMap = ExportMap;
//# sourceMappingURL=ExportMap.js.map