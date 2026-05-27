"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  const [mediaOpen, setMediaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMediaOpen(false);
  }, [pathname]);

  return (
    <header className="w-full">
      <nav className="mx-auto max-w-3xl px-6 py-6 sm:py-8 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="font-sans text-sm text-muted-foreground hover:text-foreground transition"
        >
          home
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-3 sm:gap-5 font-sans text-sm text-muted-foreground">
            <li>
              <Link
                href="/experience"
                className="hover:text-foreground transition"
              >
                experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-foreground transition"
              >
                projects
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-foreground transition"
              >
                media
                <ChevronDown className="h-3 w-3" />
              </button>

              {mediaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-10">
                  <div className="rounded-md border border-border bg-background shadow-sm">
                    <ul className="py-1 text-sm">
                      <li>
                        <Link
                          href="/blog"
                          className="block px-4 py-2 hover:text-foreground transition"
                        >
                          blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/art"
                          className="block px-4 py-2 hover:text-foreground transition"
                        >
                          art
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
