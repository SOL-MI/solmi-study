const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { TanStackRouterWebpack } = require("@tanstack/router-plugin/webpack");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 48KB
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // import 시 확장자를 생략할 수 있게 해줍니다.
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false, // 타입 체크가 완료된 후에 빌드가 완료
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 파일 경로
      filename: "index.html", // 생성될 HTML 파일 이름
      inject: "body", // 스크립트를 body 태그 끝에 삽입
    }),
    TanStackRouterWebpack({
      output: path.resolve(__dirname, "src/routes/routeTree.gen.ts"), // 생성될 파일 경로
    }),
    new VanillaExtractPlugin(),
    new Dotenv({
      path: `./.env.${process.env.APP_PHASE || "local"}`, // .env 파일 경로 설정
    }),
  ],
};
