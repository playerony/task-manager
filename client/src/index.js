import React from "react";
import ReactDOM from "react-dom";

import Root from "./Root";
import App from "./components/App";

import "./index.scss";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
