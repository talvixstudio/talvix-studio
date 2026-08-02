/**
 * Single, guarded service-worker registrar.
 *
 * Offline support is a production-only feature: the worker never registers in
 * dev, inside an iframe, on Lovable preview hosts, or when `?sw=off` is set —
 * and in those contexts it actively unregisters a stale `/sw.js`.
 */
const SW_URL = "/sw.js";

function isPreviewHost(hostname: string) {
  return (
    hostname.startsWith("id-preview--") ||
    hostname.startsWith("preview--") ||
    hostname === "lovableproject.com" ||
    hostname.endsWith(".lovableproject.com") ||
    hostname === "lovableproject-dev.com" ||
    hostname.endsWith(".lovableproject-dev.com") ||
    hostname === "beta.lovable.dev" ||
    hostname.endsWith(".beta.lovable.dev")
  );
}

async function unregisterAppWorker() {
  if (!("serviceWorker" in navigator)) return;
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.allSettled(
    registrations
      .filter((r) => (r.active?.scriptURL ?? r.installing?.scriptURL ?? "").endsWith(SW_URL))
      .map((r) => r.unregister()),
  );
}

export function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  const refused =
    !import.meta.env.PROD ||
    window.self !== window.top ||
    isPreviewHost(window.location.hostname) ||
    new URLSearchParams(window.location.search).get("sw") === "off";

  if (refused) {
    void unregisterAppWorker();
    return;
  }

  window.addEventListener("load", () => {
    void navigator.serviceWorker.register(SW_URL, { scope: "/" }).catch(() => {
      /* offline support is progressive enhancement — never block the app */
    });
  });
}
