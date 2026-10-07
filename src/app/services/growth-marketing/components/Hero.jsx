"use client";

import { motion } from "framer-motion";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import AICore from "./AICore";
import AmbientBackground from "./ui/AmbientBackground";
import { useCTAModal } from "../../../hooks/Usectamodal";

const trust = [
  { value: "₹10Cr+", label: "Ad Spend Managed" },
  { value: "500+", label: "Campaigns Delivered" },
  { value: "India & Global", label: "Client Markets" },
];

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { openModal } = useCTAModal();

  return (
    <section id="top" className="relative overflow-hidden py-20 min-h-screen">
      <AmbientBackground variant="top" />

      {/* AI core, positioned as an ambient full-bleed backdrop behind the copy */}
      <div className="pointer-events-none max-md:hidden md:absolute right-[-120px] top-[100px] h-[560px] w-[560px] opacity-70 sm:right-[-40px] md:right-[-60px] lg:right-[1px]">
        <AICore className="h-full w-full" />
      </div>

      <div className="section-shell relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Eyebrow>Growth Marketing</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="mt-6 font-display text-[42px] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink sm:text-6xl md:text-7xl"
          >
            We Don&apos;t Run Campaigns.
            <br />
            We Build <span className="text-accent">Revenue Pipelines.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-textSecondary sm:text-lg"
          >
            Most agencies hand you a report full of impressions and reach. We hand you leads,
            booked calls, and paying customers — with every rupee tracked back to the result it produced.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              as="button"
              onClick={() => openModal("Growth Marketing hero CTA")}
              variant="primary"
            >
              Get Your Free Growth Audit
            </Button>
            <Button href="#results" variant="secondary">
              See Client Results
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-8"
          >
            {trust.map((t) => (
              <div key={t.label}>
                <div className="font-mono text-lg font-semibold text-ink sm:text-xl">{t.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-textMuted">{t.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
