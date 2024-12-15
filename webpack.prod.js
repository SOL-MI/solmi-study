const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production", // 프로덕션 모드 설정
  devtool: false, // 소스맵 비활성화
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }), // 프로덕션 환경에선 CSS를 별도의 파일로 추출
    // Sentry Plugin 설정
  ],
});
