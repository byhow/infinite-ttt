import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./components/game.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
