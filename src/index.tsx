import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Layout from "./components/Layout/Layout";
import Algo from "./providers/Algo.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Algo>
      <Layout />
    </Algo>
  </React.StrictMode>
);
