import "./App.css";

import App from "./components/app";
import { Provider } from "react-redux";
import reactLogo from "./assets/react.svg";
import { render } from "react-dom";
import store from "./store";
import { useState } from "react";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
