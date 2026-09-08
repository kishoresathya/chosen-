"use client";
import { motion } from "framer-motion";
import { EASE_REVEAL, DURATION, STAGGER_UNIT } from "@/lib/motion";

export function AnimatedHeadline({ lines }: { lines: string[] }) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: STAGGER_UNIT } },
      }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={i}
          style={{ display: "block", overflow: "hidden" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: DURATION.large, ease: EASE_REVEAL },
            },
          }}
        >
          {line}
        </motion.span>
      ))}
    </motion.h1>
  );
}
