import { cn } from "@/lib/utils";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[hsl(var(--highlight))] font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
