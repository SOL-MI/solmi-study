const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // 개발 모드 설정
  devtool: "eval-cheap-module-source-map", // 빠른 빌드와 디버깅을 위한 소스맵 설정
  devServer: {
    open: true, // 개발 서버 시작 시 브라우저 자동 열기
    host: "localhost", // 호스트 설정
    port: 3000, // 포트 번호 설정 (필요 시 추가)
    // host: "0.0.0.0", // 모든 IPv4 주소에서 접속 허용
    // allowedHosts: "all", // 모든 호스트 허용
    hot: true, // 핫 모듈 교체 활성화
    historyApiFallback: true, // 히스토리 API를 사용하는 SPA에 유용
    liveReload: true, // 파일 변경 시 자동으로 브라우저 새로고침
    proxy: {
      "/api": {
        target: "http://api.example.com", //프록시할 대상 서버의 주소
        changeOrigin: true, // 대상 서버에 요청할 때 호스트 헤더의 값을 변경할지 여부
        pathRewrite: { "^/api": "" }, //경로를 재작성하여 실제 요청 시 URL을 변경할 수 있다
      },
    },
    // https: {
    //   key: fs.readFileSync("/path/to/server.key"),
    //   cert: fs.readFileSync("/path/to/server.crt"),
    //   ca: fs.readFileSync("/path/to/ca.pem"),
    // },
    // https: true, // 자체 서명된 인증서 사용
  },
});
