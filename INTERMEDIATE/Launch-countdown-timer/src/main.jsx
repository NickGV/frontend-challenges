import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
<div className="timer">
      <div className="timer__card">
        <span className="timer__card-timer">00</span>
        <h2 className="timer__card-name">DAYS</h2>
      </div>
      <div className="timer__card">
        <span className="timer__card-timer">00</span>
        <h2 className="timer__card-name">HOURS</h2>
      </div>
      <div className="timer__card">
        <span className="timer__card-timer">00</span>
        <h2 className="timer__card-name">MINUTES</h2>
      </div>
      <div className="timer__card">
        <span className="timer__card-timer">00</span>
        <h2 className="timer__card-name">SECONDS</h2>
      </div>
  </div>