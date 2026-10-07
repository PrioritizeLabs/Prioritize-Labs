"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Search, Compass, Zap, TrendingUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Audit & Diagnose",
    body: "Before we touch your budget, we find exactly where your growth is leaking. Which channels have the highest ROI potential? Where are visitors dropping off? What's your current cost per lead? We answer these questions first.",
  },
  {
    n: "02",
    icon: Compass,
    title: "Build the Strategy",
    body: "We map a full-funnel growth plan — the right channels for your business, realistic targets, and a clear 90-day roadmap. No guesswork, no generic templates.",
  },
  {
    n: "03",
    icon: Zap,
    title: "Execute Across Every Channel",
    body: "Our team runs your campaigns, content, SEO, and paid ads simultaneously — all aligned to the same revenue goal.",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "Measure, Learn & Scale",
    body: "Every week, you see what's working. Every month, we double down on what's performing and cut what isn't. When we find what converts, we pour fuel on it.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const scaleX = useTransform(lineProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Approach"
          heading="One Integrated Growth System. Not Five Disconnected Vendors."
        >
          At Prioritize Labs, every channel we run feeds every other channel. Your SEO builds the
          content your ads retarget. Your ads drive traffic to landing pages we&apos;ve optimised for
          conversion. Your leads enter an email sequence that warms them before your sales team ever
          picks up the phone. It&apos;s a system — and systems compound.
        </SectionHeading>

        <div ref={containerRef} className="relative mt-20">
          {/* connecting line — desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
          <motion.div
            style={{ scaleX }}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-accent shadow-glowSm md:block"
          />
          {/* connecting line — mobile (vertical) */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:hidden" />
          <motion.div
            style={{ scaleY: scaleX, transformOrigin: "top" }}
            className="absolute bottom-0 left-6 top-0 w-px bg-accent shadow-glowSm md:hidden"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-5 pl-16 md:block md:pl-0"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-borderStrong bg-surface md:relative">
                  <s.icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.2em] text-textMuted">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
