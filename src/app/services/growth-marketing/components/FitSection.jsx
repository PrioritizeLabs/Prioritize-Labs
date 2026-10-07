"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const fits = [
  "You're spending on ads but can't clearly see the revenue they're generating",
  "You've tried multiple agencies and felt like you were being managed, not grown",
  "You want one team handling everything — strategy, execution, and reporting",
  "You're ready to scale and need a system that can grow with you",
  "You're a founder, marketing manager, or business owner tired of vanity metrics",
];

export default function FitSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-10">
          <div>
            <SectionHeading eyebrow="Fit Check" heading="This Is Built For You If...">
              {null}
            </SectionHeading>

            <ul className="mt-10 space-y-4">
              {fits.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.7} />
                  <span className="text-[15px] leading-relaxed text-textPrimary">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-fit rounded-lg border border-accent/25 bg-accent/[0.04] p-7 sm:p-8"
          >
            <AlertTriangle className="h-5 w-5 text-accent" strokeWidth={1.7} />
            <p className="mt-4 text-sm leading-relaxed text-textSecondary">
              We&apos;re probably not the right fit if you&apos;re looking for the cheapest option
              in the market, or if you want someone to just &quot;post content&quot; without a
              strategy behind it. We work with businesses that are serious about growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
