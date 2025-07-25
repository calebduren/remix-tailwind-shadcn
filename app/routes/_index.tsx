// _index.tsx: Main landing page route for the app ("/").
// Edit this file to customize your project's homepage.
// Uses Remix, Tailwind CSS, Shadcn UI, and Lucide icons as examples.

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { ArrowUpRight } from "lucide-react";

// meta(): Sets <title> and <meta> tags for SEO and sharing.
export const meta: MetaFunction = () => {
  return [
    { title: "Remix, Tailwind, and Shadcn Boilerplate" },
    {
      name: "description",
      content:
        "A boilerplate for Remix, Tailwind v4.1.11, and Shadcn components",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center">
      <div className="flex flex-col gap-8 sm:gap-16 w-full max-w-md mx-auto p-4">
        <header className="flex flex-col gap-4 w-full">
          <h1 className="leading text-3xl sm:text-4xl font-semibold text-foreground text-balance">
            A Remix, Tailwind v4, and Shadcn Boilerplate
          </h1>
          <p className="text-muted-foreground text-pretty">
            Use this boilerplate to get started with Remix v2.17.0, Tailwind
            v4.1.11, Shadcn components, and Lucide icons.
          </p>
          <p className="text-muted-foreground text-pretty">
            With light and dark theming out of the box.
          </p>
        </header>
        <div className="flex gap-2 flex-wrap">
          <Link
            to="https://remix.run"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Remix website"
          >
            <Button variant="outline">
              Remix framework
              <ArrowUpRight />
            </Button>
          </Link>

          <Link
            to="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Tailwind CSS website"
          >
            <Button variant="outline">
              Tailwind CSS
              <ArrowUpRight />
            </Button>
          </Link>

          <Link
            to="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Shadcn UI website"
          >
            <Button variant="outline">
              Shadcn UI components
              <ArrowUpRight />
            </Button>
          </Link>

          <Link
            to="https://lucide.dev"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Lucide icons website"
          >
            <Button variant="outline">
              Lucide icons
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link
            to="https://github.com/calebduren/remix-tailwind-shadcn"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to GitHub repository"
          >
            <Button>
              View this project on GitHub
              <ArrowUpRight />
            </Button>
          </Link>
          <Link
            to="https://github.com/calebduren"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to Caleb Durenberger GitHub profile"
          >
            <Button variant="outline" className="text-muted-foreground">
              By Caleb Durenberger
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
