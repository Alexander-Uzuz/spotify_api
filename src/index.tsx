import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "antd/dist/antd.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );



