// root.tsx: Main app shell for Remix. Handles global layout, theming, and SSR hydration.
// This is the entry point for all routes and shared logic. Edit this file to customize your app's shell.

import {
  Links, // Injects <link> tags (e.g., stylesheets, fonts)
  Meta, // Injects <meta> tags (SEO, viewport, etc.)
  Outlet, // Renders the matched child route
  Scripts, // Injects Remix's JS bundle
  ScrollRestoration, // Handles scroll position on navigation
  useLoaderData, // Accesses loader data from server
} from "@remix-run/react";
import { json, type LoaderFunctionArgs, LinksFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

import "./tailwind.css"; // Import global Tailwind styles

// links(): Add global <link> tags (e.g., fonts, icons, extra stylesheets)
export const links: LinksFunction = () => [
  // Example: { rel: "stylesheet", href: "https://fonts.googleapis.com/..." }
];

// loader(): Runs on server before rendering. Used here to SSR the user's theme preference from cookies.
// You can extend this loader to provide other global data to your app shell.
import { loader } from "./root.loader";

// ThemeScript: Injects a script that sets the initial theme (dark/light) before React hydration.
// This prevents a flash of incorrect theme (FOUC) on first load.
function ThemeScript() {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (!theme) {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.classList.toggle('dark', theme === 'dark');
        // Set cookie for SSR hydration
        document.cookie = 'theme=' + theme + '; path=/; max-age=31536000';
      } catch {}
    })();
  `;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}

// App: Main app component. Wraps all routes. Handles theme logic and layout wrappers.
export default function App() {
  // initialTheme is loaded via SSR for correct first paint
  const data = useLoaderData<typeof loader>() ?? { initialTheme: null };
  const initialTheme = data.initialTheme;
  const [theme, setTheme] = useState<string | null>(initialTheme);

  // Sync theme between localStorage, cookie, and <html> class
  useEffect(() => {
    let t = localStorage.getItem("theme");
    if (!t) {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
    // Set cookie for SSR hydration
    document.cookie = `theme=${t}; path=/; max-age=31536000`;
  }, []);

  return (
    <html lang="en" className={theme === "dark" ? "dark" : undefined}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark light" />
        {/* Dynamic favicon for dark/light mode */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚪️</text></svg>"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚫️</text></svg>"
          media="(prefers-color-scheme: light)"
        />
        <ThemeScript />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
