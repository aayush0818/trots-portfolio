import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Canonical host guard – redirect non-primary hosts to the canonical domain
// This prevents Google from indexing preview/staging URLs with wrong favicons
const CANONICAL_HOST = "trotsarchitects.com";
if (
  typeof window !== "undefined" &&
  window.location.hostname !== CANONICAL_HOST &&
  window.location.hostname !== "localhost" &&
  !window.location.hostname.startsWith("192.168.") &&
  !window.location.hostname.startsWith("127.")
) {
  // Add noindex meta tag for non-canonical hosts instead of redirecting
  // (redirecting would break preview/dev environments)
  const meta = document.createElement("meta");
  meta.name = "robots";
  meta.content = "noindex, nofollow";
  document.head.appendChild(meta);
}

createRoot(document.getElementById("root")!).render(<App />);
