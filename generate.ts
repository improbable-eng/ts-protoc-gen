const { spawnSync } = require("child_process");
const { existsSync, mkdirSync } = require("fs");
const glob = require("glob");
const { resolve } = require("path");

const protocVersion = "3.5.1";

const examplesGeneratedPath = resolve(__dirname, "examples", "generated");

const binSuffix = process.platform === "win32" ? ".cmd" : "";
const nodeModulesBin = resolve(__dirname, "node_modules", ".bin");

const downloadPath =
  resolve(nodeModulesBin, "download") +
  binSuffix;

const protocRoot = resolve(__dirname, "protoc");
const protocPath = resolve(protocRoot, "bin", "protoc");

const protocPluginPath = resolve(__dirname, "bin", "protoc-gen-ts") + binSuffix;

const rimrafPath = resolve(nodeModulesBin, "rimraf") + binSuffix;

interface Platform {
  readonly downloadSuffix: string;
  readonly name: string;
}

const supportedPlatforms: { [k: string]: Platform } = {
  darwin: {
    downloadSuffix: "osx-x86_64",
    name: "Mac"
  },
  linux: {
    downloadSuffix: "linux-x86_64",
    name: "Linux"
  },
  win32: {
    downloadSuffix: "win32",
    name: "Windows"
  }
};

const platform = supportedPlatforms[process.platform];
const platformName = platform ?
  platform.name :
  `UNKNOWN:${process.platform}`;
console.log("You appear to be running on", platformName);

requireBuild();
requireProtoc();

if (existsSync(examplesGeneratedPath)) {
  run(rimrafPath, examplesGeneratedPath);
}

mkdirSync(examplesGeneratedPath);

run(protocPath,
  `--proto_path=${__dirname}`,
  `--plugin=protoc-gen-ts=${protocPluginPath}`,
  `--js_out=import_style=commonjs,binary:${examplesGeneratedPath}`,
  `--ts_out=service=true:${examplesGeneratedPath}`,
  ...glob.sync(resolve(__dirname, "proto", "**/*.proto"))
);

run(rimrafPath, protocRoot);

function requireBuild() {
  console.log("Ensuring we have NPM packages installed...");
  run("npm", "install");

  console.log("Compiling ts-protoc-gen...");
  run("npm", "run", "build");
}

function requireProtoc() {
  if (existsSync(protocPath)) {
    return;
  }

  if (!platform) {
    throw new Error(
      "Cannot download protoc. " +
      platformName +
      " is not currently supported by ts-protoc-gen"
    );
  }

  console.log(`Downloading protoc v${protocVersion} for ${platform.name}`);
  const protocUrl =
    `https://github.com/google/protobuf/releases/download/v${protocVersion}/protoc-${protocVersion}-${platform.downloadSuffix}.zip`;

  run(downloadPath,
    "--extract",
    "--out", protocRoot,
    protocUrl);
}

function run(executablePath: string, ...args: string[]) {
  const result = spawnSync(executablePath, args, { shell: true, stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`Exited ${executablePath} with status ${result.status}`);
  }
}
