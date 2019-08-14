/**
 * Converts a list of generated protobuf-js files from commonjs modules into named AMD modules.
 *
 * Arguments:
 *   --workspace_name
 *   --input_base_path
 *   --output_module_name
 *   --input_file_path
 *   --output_file_path
 */
import minimist = require("minimist");
import fs = require("fs");

function main() {
  const args = minimist(process.argv.slice(2));

  const initialContents = fs.readFileSync(args.input_file_path, "utf8");

  const umdContents = convertToUmd(args, initialContents);
  fs.writeFileSync(args.output_umd_path, umdContents, "utf8");

  const commonJsContents = processCommonJs(args, initialContents);
  fs.writeFileSync(args.output_es6_path, commonJsContents, "utf8");
}

function replaceRecursiveFilePaths(args: any) {
  return (contents: string) => {
    return contents.replace(/(\.\.\/)+/g, `${args.workspace_name}/`);
  };
}

function removeJsExtensionsFromRequires(contents: string) {
  return contents.replace(/(require\(.*).js/g, (_, captureGroup: string) => {
    return captureGroup;
  });
}

function convertToUmd(args: any, initialContents: string): string {
  const wrapInAMDModule = (contents: string) => {
    return `// GENERATED CODE DO NOT EDIT
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  }
  else if (typeof define === "function" && define.amd) {
    define("${args.input_base_path}/${args.output_module_name}",  factory);
  }
})(function (require, exports) {
  ${contents}
});
`;
  };

  const transformations: ((c: string) => string)[] = [
    wrapInAMDModule,
    replaceRecursiveFilePaths(args),
    removeJsExtensionsFromRequires,
  ];
  return transformations.reduce((currentContents, transform) => {
    return transform(currentContents);
  }, initialContents);
}

function processCommonJs(args: any, initialContents: string): string {
  // Rollup can't resolve the commonjs exports when using goog.object.extend so we replace it with:
  // 'exports.MyProto = proto.namespace.MyProto;'
  const replaceGoogExtendWithExports = (contents: string) => {
    const googSymbolRegex = /goog.exportSymbol\('(.*\.([A-z0-9_]+))',.*;/g;
    let match;
    const symbols = [];
    while (match = googSymbolRegex.exec(initialContents)) {
      symbols.push([match[2], match[1]]);
    }

    const exportSymbols = symbols.reduce((currentSymbols, symbol) => {
      return currentSymbols + `exports.${symbol[0]} = ${symbol[1]};\n`;
    }, "");
    return contents.replace(/goog.object.extend\(exports, .*;/g, `${exportSymbols}`);
  };

  const transformations: ((c: string) => string)[] = [
    replaceRecursiveFilePaths(args),
    removeJsExtensionsFromRequires,
    replaceGoogExtendWithExports,
  ];
  return transformations.reduce((currentContents, transform) => {
    return transform(currentContents);
  }, initialContents);
}

main();


