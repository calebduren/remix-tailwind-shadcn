<img width="1280" height="640" alt="boilerplate2" src="https://github.com/user-attachments/assets/d5b87a73-bafb-44d8-ae76-c72285ea511a" />

# Remix + Tailwind + shadcn/ui Boilerplate

Getting a Remix app working with Tailwind v4 can be a pain. This boilerplate lets you skip the hassle and start building.

This boilerplate comes with with:

- [Remix v2.17.0](https://remix.run/) (React-based full stack framework)
- [Tailwind v4.1.11](https://tailwindcss.com/) (utility-first CSS)
- [All Shadcn components](https://ui.shadcn.com/) (accessible, customizable React components)
- [Lucide icons](https://lucide.dev/) (icon set)
- [Vite](https://vitejs.dev/) (fast dev/build tool)

<img width="1181" height="1056" alt="Screenshot 2025-07-25 at 12 10 44 PM" src="https://github.com/user-attachments/assets/8020bc04-8070-46ca-a4bc-bbd424558fa2" />
<img width="1181" height="1056" alt="Screenshot 2025-07-25 at 12 10 51 PM" src="https://github.com/user-attachments/assets/68e44b67-565c-4cb3-bfba-1a995a239151" />

---

## Quick Start

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Netlify SSR Ready

This template is pre-configured for **SSR deployment on Netlify** using the official [@netlify/remix-adapter](https://github.com/netlify/remix-compute) for Remix v2. All routes, loaders, and server-side features work out-of-the-box on Netlify—no extra setup required!

### Netlify Configuration

The template includes these key files for Netlify deployment:

- **`netlify.toml`**: Configures build settings, function locations, and routing rules
- **`netlify/functions/remix-server.js`**: Custom server function that handles SSR requests
- **`vite.config.ts`**: Includes the Netlify adapter plugin for Remix

### Deployment Steps

1. Push your code to GitHub (or GitLab/Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the Remix configuration
4. Your site will be built and deployed with SSR support

### Key Dependencies

- `@netlify/remix-adapter`: The official Remix v2 adapter for Netlify
- `@netlify/functions`: Required for serverless function support

### Troubleshooting Netlify Deployment

If you encounter a 404 error after deploying to Netlify, check the following:

1. **Build Output Directory**: Verify that `publish = "build/client"` in `netlify.toml` matches where Vite is generating your client assets

2. **Functions Directory**: Ensure `directory = "netlify/functions"` in `netlify.toml` points to where your custom server function is located

3. **Redirect Rule**: Confirm that the redirect in `netlify.toml` points to `/.netlify/functions/remix-server`

4. **Function Name**: Make sure your function file is named `remix-server.js` in the `netlify/functions` directory

5. **Deploy Logs**: Check Netlify deploy logs for any errors or mismatches in directory paths

**Deploying elsewhere?**

- You can adapt this template for other hosts by following the [Remix deployment docs](https://remix.run/docs/en/main/deployment). You'll need to replace the Netlify adapter with the appropriate adapter for your hosting platform.

---

## Project Structure & Key Files

- `app/root.tsx` – Main app shell (theming, layout, global logic)
- `app/routes/_index.tsx` – Home page route (edit this for your landing page)
- `app/entry.server.tsx` & `app/entry.client.tsx` – Remix SSR & hydration entry points
- `app/tailwind.css` – Tailwind and custom CSS setup
- `vite.config.ts` – Vite and Remix build configuration
- `package.json` – Project scripts and dependencies

**Tip:** All important files now have inline comments explaining their purpose and key sections. Read the code for onboarding and extension tips!

---

## Styling & Theming

- Uses Tailwind CSS with a sensible default config
- Supports light/dark mode out of the box (see `root.tsx` and theme logic)
- shadcn/ui components and Lucide icons are pre-installed and ready to use
- Extend or override styles in `app/tailwind.css` using Tailwind layers

---

## Extending This Boilerplate

- Add new routes in `app/routes/`
- Add or customize UI components in `app/components/`
- Extend theming or SSR logic in `root.tsx`
- Update dependencies and scripts in `package.json`

---

## Build & Deploy

1. **Build for production:**
   ```sh
   npm run build
   ```
2. **Run in production mode:**
   ```sh
   npm start
   ```

You can deploy the output on any Node.js host, or use platforms like Vercel, Netlify, or Fly.io. See the [Remix deployment docs](https://remix.run/docs/en/main/pages/deployment) for more info.

---

## Resources

- [Remix Docs](https://remix.run/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Vite Docs](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/)
