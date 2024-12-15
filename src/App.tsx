import React from "react";
import "./styles.css";

function App() {
  console.log("API URL:", process.env.API_URL);
  if (module.hot) {
    module.hot.accept("./app.ts", () => {
      // 변경된 모듈을 처리하는 코드
      console.log("app.ts 모듈이 업데이트되었습니다.");
    });
  }
  return (
    <div className="app-container">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
