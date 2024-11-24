import React from "react";
import "./App.css";
import Timer from "./components/timer";

function App() {
  return (
    <div
      style={{ height: "100vh" }}
      className="App"
      onDoubleClick={() =>
        document.fullscreenElement === null
          ? document.body.requestFullscreen()
          : document.exitFullscreen()
      }
    >
      <Timer />
    </div>
  );
}

export default App;
