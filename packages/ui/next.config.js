const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: "ts-loader", // TypeScript 파일을 처리
      exclude: /node_modules/,
    });
    return config;
  },
});
