const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// 1. Force Metro to resolve modules from the local node_modules first
config.resolver.nodeModulesPaths = [path.resolve(__dirname, "node_modules")];

// 2. Tell Metro to "watch" the workspace root
config.watchFolders = [path.resolve(__dirname, "node_modules")];

module.exports = withNativeWind(config, { input: "./global.css" });
