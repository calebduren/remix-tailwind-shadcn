// server.js - Custom server entry for Netlify
import { createRequestHandler } from "@netlify/remix-adapter";
import * as build from "@remix-run/dev/server-build";

// Create and export the request handler
export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
