import { Piazzolla } from "next/font/google";
import { Github, Linkedin } from "lucide-react";
import { Highlight } from "@/components/Highlight";
import { TechStack } from "@/components/TechStack";

const piazzolla = Piazzolla({
  subsets: ["latin"],
  weight: "400",
});

export function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-24 ">
      <h1 className={`${piazzolla.className} text-5xl tracking-tight`}>
        Eva Zheng
      </h1>

      <p className="mt-3 text-xl text-muted-foreground">
        EECS @ Yale | Silicon Validation SWE Intern @ Cirrus Logic
      </p>
      <p className="mt-1 text-xl text-muted-foreground">
        Incoming SWE Intern @ IBM
      </p>

      <div className="mt-4 flex items-center gap-4 text-muted-foreground">
        <a
          href="https://github.com/evhuh"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-foreground transition"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/eva-zheng-"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-foreground transition"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-6 text-muted-foreground leading-relaxed">
        Rising senior at Yale studying electrical engineering and computer science!
        I like understanding systems end to end-- from how signals and hardware behave at a low level,
        to how software controls, tests, and validates that behavior.
      </p>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        Currently, I sit at the intersection of <Highlight>hardware</Highlight> and <Highlight>software</Highlight>, building an internal data platform that ingests extensive real-world hardware measurement data and gives product test engineers a self-service, composable way to work with different representations of it, retiring a lot of manual workflows in the process. My focus is on <Highlight>observability</Highlight> and <Highlight>scalability</Highlight>.
      </p>

      <p className="mt-6 text-muted-foreground leading-relaxed">
        I&apos;m a fan of bouldering, baking, and logical redstone!
      </p>

      <TechStack />
    </section>
  );
}
