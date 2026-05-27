import { ArrowUpRight } from "lucide-react";

type EntryProps = {
  title: string;
  subtitle?: string;
  date?: string;
  tags?: string[];
  description?: React.ReactNode;
  media?: React.ReactNode;
  href?: string;
};

export function Entry({
  title,
  subtitle,
  date,
  tags = [],
  description,
  media,
  href,
}: EntryProps) {
  return (
    <article className="py-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-sans text-xl font-semibold text-[hsl(var(--highlight))] flex items-center gap-1.5">
          {title}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} — external link`}
              className="text-muted-foreground hover:text-[hsl(var(--highlight))] transition"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </h2>
        {date && (
          <span className="shrink-0 font-sans text-sm text-muted-foreground">
            {date}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-1 font-sans text-sm text-foreground/80">{subtitle}</p>
      )}

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs text-muted-foreground border border-border rounded-md px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {media && (
        <div className="mt-4 overflow-hidden rounded-md border border-border">
          {media}
        </div>
      )}

      {description && (
        <div className="mt-4 text-muted-foreground leading-relaxed">
          {description}
        </div>
      )}
    </article>
  );
}
