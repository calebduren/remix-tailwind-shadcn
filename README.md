<img width="1280" height="640" alt="boilerplate2" src="https://github.com/user-attachments/assets/d5b87a73-bafb-44d8-ae76-c72285ea511a" />

# Remix + Tailwind + shadcn/ui Boilerplate

A modern starter template for building web apps with:

- [Remix](https://remix.run/) (React-based full stack framework)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [shadcn/ui](https://ui.shadcn.com/) (accessible, customizable React components)
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
