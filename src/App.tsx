import { StrictMode } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function App() {
  return <Home />;
}
