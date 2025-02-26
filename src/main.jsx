import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReferralProvider } from "./Context/ReferralContext.jsx";
createRoot(document.getElementById("root")).render(
  <ReferralProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ReferralProvider>
);
