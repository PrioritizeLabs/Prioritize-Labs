"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { useCTAModal } from "../../../hooks/Usectamodal";

const tiers = [
  {
    n: "01",
    name: "Starter Growth",
    bestFor: "Businesses new to paid marketing or with limited history",
    scope: ["1 primary channel (Meta Ads or Google Ads)", "Monthly reporting"],
    price: "₹25,000",
    featured: false,
  },
  {
    n: "02",
    name: "Growth Retainer",
    bestFor: "Businesses ready to run 2–3 channels simultaneously",
    scope: ["Paid ads + SEO", "Social media", "Lead gen system"],
    price: "₹60,000",
    featured: true,
  },
  {
    n: "03",
    name: "Full-Stack Growth",
    bestFor: "Scaling businesses that need a complete marketing team",
    scope: ["All channels + content", "Analytics", "Weekly strategy calls"],
    price: "₹1,20,000",
    featured: false,
  },
];

export default function PricingSection() {
  const { openModal } = useCTAModal();

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Engagement" heading="How We Work Together">
          We don&apos;t believe in lock-in contracts that serve the agency, not the client. Here&apos;s
          how our engagements are typically structured.
        </SectionHeading>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-lg p-7 sm:p-8 ${
                t.featured
                  ? "border border-accent/40 bg-accent/[0.05] shadow-glowMd"
                  : "border border-border bg-white/[0.02]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-7 rounded-sm bg-accent px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  Most Chosen
                </span>
              )}
              <span className="font-mono text-xs text-textMuted">{t.n}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{t.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-textSecondary">{t.bestFor}</p>

              <ul className="mt-6 space-y-2.5">
                {t.scope.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-textPrimary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <div className="font-mono text-2xl font-semibold text-ink">
                  {t.price}
                  <span className="text-sm font-normal text-textMuted">/month</span>
                </div>
                <div className="mt-1 text-xs text-textMuted">Starting from</div>
                <Button
                  as="button"
                  onClick={() => openModal(`Growth Marketing ${t.name} CTA`)}
                  variant={t.featured ? "primary" : "secondary"}
                  className="mt-6 w-full justify-center"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-textMuted">
          Every engagement starts with a free Growth Audit. We won&apos;t recommend a plan until we
          understand your business, your current numbers, and where the real opportunity is.
        </p>
      </div>
    </section>
  );
}
