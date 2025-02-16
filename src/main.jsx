import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppStore from "./redux/store.js";
import "./index.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
