import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider // Client ID for authentication (replace with your own).
    clientId={import.meta.env.VITE_CLIENT_ID}
    // Set the active blockchain chain (e.g., ChainId.Goerli).
    activeChain={ChainId.Goerli}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
