"use client";

import { motion } from "framer-motion";

export default function GlowCard({ children, className = "", delay = 0, as = "div" }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-lg border border-border bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-borderStrong hover:bg-white/[0.04] hover:shadow-glowSm sm:p-8 ${className}`}
    >
      {children}
    </Comp>
  );
}
