import { Experience } from "@/lib/types/experience";

export function GlassCard({ item }: { item: Experience }) {
  return (
    <div className="w-[320px] rounded-xl border bg-background/70 backdrop-blur px-5 py-4 shadow-sm">
      <h3 className="font-medium">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.org}</p>

      <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
        {item.type}
      </p>

      <p className="mt-2 text-xs text-muted-foreground">
        {item.start} – {item.end ?? "Present"}
      </p>

      {item.description && (
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      )}
    </div>
  );
}
