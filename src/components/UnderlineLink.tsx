"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { EASE_RESPONSE, DURATION } from "@/lib/motion";

export function UnderlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={{ position: "relative", textDecoration: "none", color: "inherit", display: "inline-block" }}
    >
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: DURATION.micro, ease: EASE_RESPONSE }}
        style={{
          position: "absolute",
          left: 0,
          bottom: -2,
          height: 1,
          width: "100%",
          background: "currentColor",
          transformOrigin: "left",
          display: "block",
        }}
      />
    </a>
  );
}
