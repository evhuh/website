"use client";

import { motion } from "framer-motion";
import { Experience } from "@/lib/types/experience";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="relative grid grid-cols-2">
      {/* Left */}
      <div className={cn(
        "flex",
        item.side === "left" ? "justify-end pr-8" : "justify-end"
      )}>
        {item.side === "left" && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <GlassCard item={item} />
          </motion.div>
        )}
      </div>

      {/* Right */}
      <div className={cn(
        "flex",
        item.side === "right" ? "justify-start pl-8" : "justify-start"
      )}>
        {item.side === "right" && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <GlassCard item={item} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
