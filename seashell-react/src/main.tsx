import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18n from "./app/i18n.ts";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")!).render(
  <>
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <App />
    </I18nextProvider>
  </>
);
