import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "../components/ui/button";
import { ArrowUpRight } from "lucide-react";

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
      <div className="flex flex-col gap-16 w-full max-w-md mx-auto">
        <header className="flex flex-col gap-4 w-full">
          <h1 className="leading text-4xl font-semibold text-foreground">
            A Remix, Tailwind v4, and Shadcn Boilerplate
          </h1>
          <p className="text-muted-foreground">
            Use this boilerplate to get started with Remix, Tailwind v4.1.11,
            Shadcn components, and Lucide icons.
          </p>
          <p className="text-muted-foreground">
            Supports light and dark theming out of the box.
          </p>
        </header>
        <div className="flex gap-2 flex-wrap">
          <Link to="https://remix.run" target="_blank">
            <Button variant="outline">
              Remix framework
              <ArrowUpRight />
            </Button>
          </Link>

          <Link to="https://tailwindcss.com" target="_blank">
            <Button variant="outline">
              Tailwind CSS
              <ArrowUpRight />
            </Button>
          </Link>

          <Link to="https://ui.shadcn.com" target="_blank">
            <Button variant="outline">
              Shadcn UI components
              <ArrowUpRight />
            </Button>
          </Link>

          <Link to="https://lucide.dev" target="_blank">
            <Button variant="outline">
              Lucide icons
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            to="https://github.com/calebduren/remix-tailwind-shadcn"
            target="_blank"
          >
            <Button>
              View this project on GitHub
              <ArrowUpRight />
            </Button>
          </Link>
          <Link to="https://github.com/calebduren" target="_blank">
            <Button variant="link">
              By Caleb Durenberger
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
