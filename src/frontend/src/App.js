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
          src="/novnc/embedded.html"
          className="vnc-iframe"
        >
          您的浏览器不支持 iframe。
        </iframe>
      </div>

      {/* 底部操作区域 */}
      <div className="bottom-panel">
        <iframe
          title="TTYD Terminal"
          src="/ttyd"
          className="ttyd-iframe"
        >
          您的浏览器不支持 iframe。
        </iframe>
      </div>
    </div>
  );
}

export default App;
