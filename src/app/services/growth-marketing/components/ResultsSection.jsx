"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";
import AnimatedNumber from "./ui/AnimatedNumber";
import AmbientBackground from "./ui/AmbientBackground";

const results = [
  {
    value: 4,
    suffix: "×",
    label: "Return on ad spend",
    description: "D2C brand in Agra — went from ₹8 CPL to ₹2 CPL in 60 days after funnel restructure and audience rebuild.",
  },
  {
    value: 1200,
    label: "Leads in 90 days",
    description: "B2B service company — zero paid ads prior. We launched Meta campaigns + a lead magnet sequence and filled their pipeline in 3 months.",
  },
  {
    value: 3,
    suffix: "×",
    label: "Organic traffic growth",
    description: "E-commerce brand — 6-month SEO engagement. Monthly organic visitors grew from 800 to 2,600 with zero additional ad spend.",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-24 sm:py-32">
      <AmbientBackground variant="center" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Results" heading="Results Our Clients Have Seen">
          We let the numbers do the talking.
        </SectionHeading>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {results.map((r, i) => (
            <GlowCard key={r.label} delay={i * 0.08}>
              <div className="font-display text-5xl font-extrabold tracking-[-0.02em] text-ink sm:text-6xl">
                <AnimatedNumber value={r.value} suffix={r.suffix || ""} />
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {r.label}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-textSecondary">{r.description}</p>
            </GlowCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative mt-6 rounded-lg p-8 sm:p-10"
        >
          <Quote className="h-7 w-7 text-accent/60" strokeWidth={1.5} />
          <p className="mt-5 max-w-2xl font-display text-lg font-medium leading-relaxed text-textPrimary sm:text-xl">
            Before Prioritize Labs, we had no idea which of our channels was actually bringing
            clients. Now we have a dashboard that tells us exactly where every lead came from. It
            changed how we make decisions.
          </p>
          <div className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-textMuted">
            Founder, B2B Service Business — Delhi NCR
          </div>
        </motion.div>
      </div>
    </section>
  );
}
