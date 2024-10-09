import React from "react";
import ReactDOM from "react-dom/client";
import Favicon from "react-favicon";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Favicon url="/image/portfolio-outline.png" />
    <App />
  </React.StrictMode>
);
