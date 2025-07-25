// vite.config.ts: Vite configuration for building and running your Remix app.
// This file controls the dev server, build process, and plugin integration.
// You can add or adjust plugins here for custom behavior (e.g., new loaders, env vars, etc).

import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from '@tailwindcss/vite'

// Extend Remix's type definitions for future flags (optional)
declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

// Main Vite config export
export default defineConfig({
  plugins: [
    // Remix plugin: enables Remix features and future flags
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(), // Allows using paths defined in tsconfig.json
    tailwindcss(),   // Enables Tailwind CSS support
  ],
});
