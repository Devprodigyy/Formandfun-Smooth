import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initAnimations } from "./custom/Animation.js";

createRoot(document.getElementById("root")).render(
    <App />
);

// Run after React mounts
setTimeout(() => {
  initAnimations();
}, 0);
