import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix, Tailwind v4, and Shadcn Boilerplate" },
    {
      name: "description",
      content: "A boilerplate for Remix, Tailwind v4, and Shadcn components",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Remix, Tailwind v4, and Shadcn boilerplate
            <ul className="flex gap-2">
              <li>
                <Link to="https://remix.run" target="_blank">
                  Remix
                </Link>
              </li>
              <li>
                <Link to="https://tailwindcss.com" target="_blank">
                  Tailwind
                </Link>
              </li>
              <li>
                <Link to="https://ui.shadcn.com" target="_blank">
                  Shadcn
                </Link>
              </li>
            </ul>
          </h1>
        </header>
      </div>
    </div>
  );
}
