import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./index.css"; // Import CSS khusus kita
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log("Application started.");
console.log("Rendering App component.");
console.log("Strict mode is enabled.");