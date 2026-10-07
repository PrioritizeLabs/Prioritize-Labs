"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const faqs = [
  {
    q: "How long before we see results?",
    a: "Paid ads can show results within the first 2–4 weeks as we optimise campaigns. SEO typically takes 3–6 months to show significant organic movement. We set honest expectations upfront and give you visibility every step of the way.",
  },
  {
    q: "Do you require a minimum contract length?",
    a: "Our retainers start at 3 months — not because we want to trap you, but because meaningful marketing results require consistent execution over time. After 3 months, we move to a rolling monthly arrangement.",
  },
  {
    q: "What makes you different from other digital marketing agencies?",
    a: "Most agencies manage one or two channels in isolation. We build an integrated system where every channel connects and every rupee is tracked. You also work directly with experienced team members — not handed off to juniors.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We work with Indian businesses targeting global markets, and with international businesses targeting the Indian market.",
  },
  {
    q: "What information do I need to provide to get started?",
    a: "Nothing upfront. Our free Growth Audit is the starting point — we'll ask for access to your analytics and ad accounts (if any), and from there we'll show you exactly where the opportunities are.",
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-border"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-semibold text-ink sm:text-lg">{item.q}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 max-w-2xl text-sm leading-relaxed text-textSecondary">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="FAQ" heading="Frequently Asked Questions" />

        <div className="mt-12 border-t border-border">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} item={f} index={i} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
