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

  const wrapInAMDModule = (contents: string) => {
    return `define("${args.input_base_path}/${args.output_module_name}", function(require, exports, module) {\n${contents}\n});`;
  };
  const replaceRecursiveFilePaths = (contents: string) => {
    return contents.replace(/(\.\.\/)+/g, `${args.workspace_name}/`);
  };
  const removeJsExtensionsFromRequires = (contents: string) => {
    return contents.replace(/(require\(.*).js/g, (_, captureGroup: string) => {
      return captureGroup;
    });
  };

  const initialContents = fs.readFileSync(args.input_file_path, "utf8");
  const transformations: ((c: string) => string)[] = [
    wrapInAMDModule,
    replaceRecursiveFilePaths,
    removeJsExtensionsFromRequires,
  ];
  const finalContents = transformations.reduce((currentContents, transform) => {
    return transform(currentContents);
  }, initialContents);

  fs.writeFileSync(args.output_file_path, finalContents, "utf8");
}

main();


