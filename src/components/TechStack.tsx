import { Badge } from "@/components/ui/badge";

const SOFTWARE = [
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind",
    "Flask",
    "PostgreSQL",
];

const HARDWARE = [
//   "C++",
//   "Embedded Systems",
    "Verilog HDL",
    // "Digital Logic",
    "Vivado",
    "NI Multisim",
    "Oscilloscopes",
    "Multimeters"
];

export function TechStack() {
  return (
    <section className="mt-12">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground">
        technologies I&apos;ve been working with
      </h2>

      <div className="mt-4 space-y-3">
        {/* Software */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground mr-2">
            software
          </span>
          {SOFTWARE.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Hardware */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground mr-2">
            hardware
          </span>
          {HARDWARE.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
