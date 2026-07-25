import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Self-host fonts instead of blocking the render with @import.
// Only the weights actually used by the app.
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
