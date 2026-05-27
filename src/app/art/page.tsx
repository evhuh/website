type Painting = {
  src: string;
  alt: string;
  title: string;
  date: string;   // "YYYY-MM" — used for sorting and display
  medium?: string;
};

// ── Add a painting ────────────────────────────────────────────────────────────
// 1. Drop the file into public/art/
// 2. Add an entry to PAINTINGS (newest first)
// ─────────────────────────────────────────────────────────────────────────────

const PAINTINGS: Painting[] = [
  { src: "/art/paint_2.jpeg", alt: "...", title: "My Painting", date: "2026-05" },

  { src: "/art/paint_1-1.jpeg", alt: "...", title: "My Painting", date: "2025-05" },
  { src: "/art/paint_1-0.jpeg", alt: "...", title: "My Painting", date: "2025-05" },

  { src: "/art/paint_0.jpeg", alt: "...", title: "My Painting", date: "2024-05" },
];

function formatDate(yyyyMM: string) {
  const [year, month] = yyyyMM.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export default function ArtPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16">
      <h1 className="font-sans text-4xl font-bold tracking-tight">Art</h1>

      {PAINTINGS.length === 0 ? (
        <p className="mt-6 text-muted-foreground">Paintings coming soon!</p>
      ) : (
        <div className="mt-8 columns-2 gap-4 sm:columns-3">
          {PAINTINGS.map((p) => (
            <div key={p.src} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 px-1">
                <p className="font-sans text-sm font-medium text-foreground leading-snug">
                  {p.title}
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  {formatDate(p.date)}
                  {p.medium && <span className="ml-2 opacity-70">{p.medium}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
