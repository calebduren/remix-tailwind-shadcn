/**
 * entry.client.tsx: Handles client-side hydration for your Remix app.
 * This is where Remix attaches React to the DOM after SSR.
 * You can customize this file for advanced client-side logic (e.g., analytics, error boundaries, etc).
 * Most apps can leave this as-is.
 * More info: https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
