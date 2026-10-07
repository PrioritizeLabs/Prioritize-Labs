"use client";

import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  heading,
  children,
  align = "left",
  maxW = "max-w-2xl",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "mx-auto text-center" : ""}
    >
      <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl text-balance">
        {heading}
      </h2>
      {children && (
        <p className={`mt-5 text-base leading-relaxed text-textSecondary sm:text-lg ${maxW} ${align === "center" ? "mx-auto" : ""}`}>
          {children}
        </p>
      )}
    </motion.div>
  );
}
