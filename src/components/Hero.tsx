"use client";

import { motion } from "framer-motion";
import { Highlight } from "@/components/Highlight";
import { TechStack } from "@/components/TechStack";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-2xl px-6 pt-24"
    >
      <h1 className="text-5xl font-medium tracking-tight">
        Hi there! I am Eva 👾
      </h1>

      <p className="mt-3 text-3xl text-muted-foreground">
        EECS @ Yale
        {/* Currently @ <span className="text-foreground/80">Y-IEEE</span> · 
        Previously @<span className="text-foreground/80">Y-IEEE</span> */}
      </p>

      <p className="mt-6 text-muted-foreground leading-relaxed">
        I am a junior at Yale studying electrical engineering and computer science. 
        I like understanding systems end to end-- from how signals and hardware behave at a low level, 
        to how software controls, tests, and validates that behavior.
      </p>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        Recently, I’ve been building <Highlight>data-driven</Highlight> web apps, apps for fun,
        and want to get into projects at the intersection of <Highlight>software and hardware</Highlight>.
      </p>

      <p className="mt-5 text-muted-foreground leading-relaxed">
        I&apos;m a fan of bouldering, baking, and logical redstone!
      </p>

      <TechStack />
    </motion.section>
  );
}
