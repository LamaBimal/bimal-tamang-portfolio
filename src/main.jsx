import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { I18nProvider } from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider defaultLocale={"en"}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
