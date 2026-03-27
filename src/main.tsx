import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Canonical host guard – redirect non-primary hosts to the canonical domain
const CANONICAL_HOST = "trotsarchitects.com";
if (
  typeof window !== "undefined" &&
  window.location.hostname !== CANONICAL_HOST &&
  window.location.hostname !== "localhost" &&
  !window.location.hostname.startsWith("192.168.") &&
  !window.location.hostname.startsWith("127.") &&
  !window.location.hostname.endsWith(".lovable.app")
) {
  // Hard redirect non-canonical hosts (e.g. www) to canonical
  window.location.replace(
    `https://${CANONICAL_HOST}${window.location.pathname}${window.location.search}${window.location.hash}`
  );
} else if (
  typeof window !== "undefined" &&
  window.location.hostname.endsWith(".lovable.app")
) {
  // Prevent preview/staging from being indexed
  const meta = document.createElement("meta");
  meta.name = "robots";
  meta.content = "noindex, nofollow";
  document.head.appendChild(meta);
}

createRoot(document.getElementById("root")!).render(<App />);
