import { json, type LoaderFunctionArgs } from "@remix-run/node";

/**
 * Remix loader for the app shell (root route).
 *
 * - Runs only on the server.
 * - Reads the user's theme preference (dark/light) from cookies for SSR hydration.
 * - Uses a dynamic import for 'cookie' to ensure this file is server-only and never bundled for the browser.
 *   This is necessary for Vite/Netlify compatibility—see README for details.
 *
 * If you fork or extend this project, you can add more global loader logic here.
 */
export async function loader({ request }: LoaderFunctionArgs) {
  // Dynamic import ensures 'cookie' is never bundled for the client.
  const { parse: parseCookie } = await import("cookie");

  // Read the Cookie header from the incoming request
  const cookieHeader = request.headers.get("Cookie") || "";

  // Parse cookies using the 'cookie' package
  const cookies = parseCookie(cookieHeader);

  // Only accept 'dark' or 'light' as valid theme values
  const initialTheme =
    cookies.theme === "dark" || cookies.theme === "light"
      ? cookies.theme
      : null;

  // Return the theme value to the client for SSR hydration
  return json({ initialTheme });
}
