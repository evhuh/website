import { Experience } from "@/lib/types/experience";
import { TimelineItem } from "./TimelineItem";

function sortByRecency(items: Experience[]) {
  return [...items].sort((a, b) => {
    const aEnd = a.end ?? "9999-12";
    const bEnd = b.end ?? "9999-12";
    return bEnd.localeCompare(aEnd);
  });
}

export function Timeline({ items }: { items: Experience[] }) {
  const sorted = sortByRecency(items);

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-24">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-border/60" />

      <div className="space-y-24">
        {sorted.map((item) => (
          <TimelineItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
