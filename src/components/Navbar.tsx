"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
        {/* LEFT SPACER */}
        <div className="w-[120px]" />

        {/* CENTER NAV */}
        <ul className="flex items-center gap-6 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition">
              home
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-foreground transition">
              experience
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-foreground transition">
              projects
            </Link>
          </li>

          {/* MEDIA DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setMediaOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-foreground transition"
            >
              media
              <ChevronDown className="h-3 w-3" />
            </button>

            {mediaOpen && (
              <div
                className="absolute top-6 left-1/2 -translate-x-1/2 rounded-md border bg-background shadow-sm"
                onMouseLeave={() => setMediaOpen(false)}
              >
                <ul className="py-1 text-sm">
                  <li
                    className="px-4 py-2 text-muted-foreground cursor-not-allowed opacity-60"
                    title="Coming soon"
                  >
                    blog
                  </li>
                  <li
                    className="px-4 py-2 text-muted-foreground cursor-not-allowed opacity-60"
                    title="Coming soon"
                  >
                    art
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="w-[120px] flex items-center justify-end gap-4 text-muted-foreground">
          <a
            href="https://github.com/evhuh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/eva-zheng-"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
