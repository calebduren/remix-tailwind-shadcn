/**
 * Netlify Function: remix-server.js
 * 
 * This file serves as the entry point for the Netlify Function that handles
 * server-side rendering for your Remix application. It creates a request handler
 * using the Netlify Remix adapter and imports your server build.
 * 
 * The function processes all incoming requests, handles server-side rendering,
 * data loading, and returns the appropriate HTML response.
 */

// Import the Netlify Remix adapter's request handler creator
import { createRequestHandler } from "@netlify/remix-adapter";

// Import the server build generated by Remix
// This contains all your routes, loaders, actions, and other server code
import * as build from "../../build/server/index.js";

// Create and export the request handler
// This is the main function that Netlify will invoke for all requests
export default createRequestHandler({
  // Pass in the server build
  build,
  // Use the current environment (development, production, etc.)
  mode: process.env.NODE_ENV,
});
