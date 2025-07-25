import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useEffect, useState } from "react";
import { parse as parseCookie } from "cookie";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  // Put links here, e.g., Google Fonts
];

// Loader: SSR theme from cookie
export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookies = parseCookie(cookieHeader);
  // Only accept 'dark' or 'light' as valid
  const initialTheme =
    cookies.theme === "dark" || cookies.theme === "light"
      ? cookies.theme
      : null;
  return json({ initialTheme });
}

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

export default function App() {
  const { initialTheme } = useLoaderData<typeof loader>();
  const [theme, setTheme] = useState<string | null>(initialTheme);

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
