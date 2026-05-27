import { Entry } from "@/components/Entry";
import { EXPERIENCES } from "@/data/experiences";
import { Experience, ExperienceType } from "@/lib/types/experience";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatMonth(mmYYYY: string) {
  const [mm, yyyy] = mmYYYY.split("-");
  return `${MONTHS[Number(mm) - 1]} ${yyyy}`;
}

function formatRange(start: string, end?: string) {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}

function sortByRecency(items: Experience[]) {
  return [...items].sort((a, b) => {
    const aEnd = a.end ?? "9999-12";
    const bEnd = b.end ?? "9999-12";
    return bEnd.localeCompare(aEnd);
  });
}

function Section({
  heading,
  items,
}: {
  heading: string;
  items: Experience[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="font-sans text-4xl font-bold tracking-tight">{heading}</h2>
      <div className="mt-8 divide-y divide-border">
        {items.map((item) => (
          <Entry
            key={item.org + item.start}
            title={item.org}
            subtitle={item.title}
            date={formatRange(item.start, item.end)}
            description={item.description ? <p>{item.description}</p> : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  const byType = (t: ExperienceType) =>
    sortByRecency(EXPERIENCES.filter((e) => e.type === t));

  return (
    <main className="mx-auto max-w-3xl px-6 pt-16">
      <Section heading="Education" items={byType("education")} />
      <Section heading="Experience" items={byType("work")} />
    </main>
  );
}
