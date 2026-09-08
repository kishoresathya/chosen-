"use client";
import { motion } from "framer-motion";
import { EASE_REVEAL, DURATION } from "@/lib/motion";

export function RevealOnScroll({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: DURATION.medium, ease: EASE_REVEAL, delay }}
    >
      {children}
    </motion.div>
  );
}
