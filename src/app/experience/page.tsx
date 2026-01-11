import { Timeline } from "@/components/timeline/Timeline";
import { EXPERIENCES } from "@/data/experiences";

export default function ExperiencePage() {
  return <Timeline items={EXPERIENCES} />;
}
