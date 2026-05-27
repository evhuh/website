"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Entry } from "@/components/Entry";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  date: string;        // human-readable, shown in the row
  endDate: string;     // "YYYY-MM" — used for sorting only
  tags: string[];
  href?: string;
  selected: boolean;
  media?: ReactNode;
  description: ReactNode;
};

// ────────────────────────────────────────────────────────────────────────────
// To feature/un-feature a project in the default "Selected Projects" view,
// flip its `selected` field below. Sort order on screen is driven by `endDate`
// (most recent first); for in-progress work, omit `endDate` and it floats top.
// ────────────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    title: "Battleship over Serial UART",
    date: "Apr 2026 - May 2026",
    endDate: "2026-05",
    tags: ["Hardware", "Embedded", "Arduino", "I2C", "Concurrency", "ADC"],
    href: "https://github.com/evhuh/battleship_uart",
    selected: true,
    media: (
      <video
        src="/projects/battleship-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      />
    ),
    description: (
      <>
        <p>
          Two independent Arduino stations each run a full Battleship game — OLED display, analog joystick, and tactile buttons — linked by a single 3-wire UART connection. Players navigate a 10×10 grid with the joystick, whose two analog axes are read through the ADC with dead-zone calibration and debounce timing, and confirm actions or rotate ships with buttons wired to external interrupts for responsive input.
        </p>
        <p className="mt-3">
          The technical core is concurrency: an interrupt-driven UART receive buffer accumulates incoming bytes in the background while the foreground loop reads the joystick ADC, drives the I2C OLED, and runs game logic. Boards communicate through a custom packet protocol — start byte, command ID, coordinate payload, CRC-8 checksum, end byte — and a protocol state machine handles error detection, communication timeouts, and coordinated mid-game resets (one board requests, the other confirms or denies).
        </p>
      </>
    ),
  },
  {
    title: "Out-of-Order PARCv2 Processor with Speculation",
    date: "Mar 2026 – May 2026",
    endDate: "2026-05",
    tags: ["Computer Architecture", "VerilogHDL"],
    // href: "https://github.com/evhuh/mc-stats",
    selected: true,
    media: (
      <Image
        src="/projects/parcv2-pipeline.png"
        alt="Out-of-order PARCv2 pipeline diagram and reorder buffer table"
        width={2162}
        height={1462}
        className="w-full h-auto"
      />
    ),
    description: (
      <>
        <p>
          Extended a 5-stage pipelined PARCv2 processor into a single-issue, out-of-order machine in Verilog. Built a 16-entry reorder buffer that lets three execution pipes of different latencies (ALU, memory, multiply) finish out of order while still committing in program order, and bypasses not-yet-committed results back into decode. Exposed a latent writeback-ordering bug in the baseline by designing a targeted WAW hazard test the original suite missed.
        </p>
        <p className="mt-3">
          A second variant speculates past unresolved branches, with the ROB tracking which instructions are speculative and rolling back on a mispredict. Against the in-order baseline, it cut cycle counts by up to 6× on a matrix-multiply kernel.
        </p>
      </>
    ),
  },
  {
    title: "SuiteEase — All-in-one System for Shared Living Spaces",
    date: "Apr 2026",
    endDate: "2026-04",
    tags: ["React", "TypeScript", "Tailwind", "MongoDB", "NextAuth"],
    href: "https://github.com/evhuh/yhack2026",
    selected: false,
    media: (
      <video
        src="/projects/SuiteEase-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      />
    ),
    description: (
      <p>
        A full-stack shared-living web app for roommates and suitemates. It combines chores, a shared bulletin board, expense tracking, settle-up flows, Google sign-in, and multi-suite membership.
      </p>
    ),
  },
  {
    title: "MC Stats — Hypixel Minecraft Player Analytics Platform",
    date: "Dec 2025 – Jan 2026",
    endDate: "2026-01",
    tags: ["Next.js", "TypeScript", "Tailwind", "Flask", "Redis"],
    href: "https://github.com/evhuh/mc-stats",
    selected: false,
    media: (
      <video
        src="/projects/mc-stats-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
      />
    ),
    description: (
      <p>
        A data-driven analytics platform for competitive statistics, featuring
        live aggregation, game-mode breakdowns, and performance insights.
      </p>
    ),
  },
  {
    title: "inki — Real-time Annotating with Friends",
    date: "Sep 2025 – Dec 2025",
    endDate: "2025-12",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Agile", "CI/CD"],
    href: "https://github.com/yale-swe/f25-inki",
    selected: true,
    description: (
      <>
        <p>
          Scalable web platform for real-time collaborative annotation and
          discussion, integrating Supabase Realtime for live updates and
          presence tracking.
        </p>
        <p className="mt-3">
          Designed RESTful APIs and enforced role-based access control for
          secure document sharing and multi-user editing on a cloud-hosted
          Supabase backend.
        </p>
      </>
    ),
  },
  {
    title: "DouDiZhu Recurrent Learning Bot",
    date: "Aug 2025 – Oct 2025",
    endDate: "2025-10",
    tags: ["Python", "PyTorch", "Stable Baselines3", "Gymnasium"],
    href: "https://github.com/evhuh/doudizhu-rl",
    selected: true,
    description: (
      <>
        <p>
          Designed and implemented a custom 1v1 Dou Dizhu environment for a
          multi-stage PPO reinforcement learning pipeline with PyTorch neural
          networks via Stable Baselines3 framework, action masking, reward
          tuning, and baseline agents.
        </p>
        <p className="mt-3">
          Trained agents through a staged curriculum, with automated
          benchmarking against baseline agents achieving an 86.4% win-rate.
        </p>
      </>
    ),
  },
];

const SORTED = [...PROJECTS].sort((a, b) =>
  (b.endDate ?? "9999-99").localeCompare(a.endDate ?? "9999-99"),
);

type Filter = "selected" | "all";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("selected");

  const visible = SORTED.filter((p) => (filter === "selected" ? p.selected : true));

  return (
    <main className="mx-auto max-w-3xl px-6 pt-16">
      <h1 className="font-sans text-4xl font-bold tracking-tight">Projects</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        <FilterChip
          label="Selected Projects"
          active={filter === "selected"}
          onClick={() => setFilter("selected")}
        />
        <FilterChip
          label="All Projects"
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
      </div>

      <div className="mt-8 divide-y divide-border">
        {visible.length === 0 ? (
          <p className="py-8 text-muted-foreground">
            No projects to show.
          </p>
        ) : (
          visible.map((p) => (
            <Entry
              key={p.title}
              title={p.title}
              date={p.date}
              tags={p.tags}
              href={p.href}
              media={p.media}
              description={p.description}
            />
          ))
        )}
      </div>
    </main>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "font-sans text-xs rounded-md border px-2.5 py-1 transition",
        active
          ? "border-[hsl(var(--highlight))] text-[hsl(var(--highlight))] bg-[hsl(var(--highlight)/0.08)]"
          : "border-border text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
