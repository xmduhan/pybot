// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* 主显示区域 */}
      <div className="main-display">
        <iframe
          title="VNC Viewer"
          src="/novnc/vnc_lite.html"
          className="vnc-iframe"
        >
          您的浏览器不支持 iframe。
        </iframe>
      </div>

      {/* 底部操作区域 */}
      <div className="bottom-panel">
        <div className="tabs">
          <button className="tab-button">代码</button>
          <button className="tab-button">命令</button>
        </div>
        <input
          type="text"
          placeholder="请输入内容"
          className="input-box"
        />
        <button className="send-button">发送</button>
      </div>
    </div>
  );
}

export default App;