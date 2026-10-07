"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Megaphone, Search, Share2, Users, BarChart3 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const services = [
  {
    n: "01",
    icon: Megaphone,
    title: "Performance Marketing (Paid Ads)",
    tags: ["META ADS", "GOOGLE ADS", "YOUTUBE"],
    body: "We manage Meta Ads, Google Ads, and YouTube campaigns built to generate measurable pipeline — not just traffic. From audience research and creative strategy to A/B testing and budget optimisation, every rupee is accountable.",
    items: [
      "Meta Ads (Facebook & Instagram) — lead generation, retargeting, and conversion campaigns",
      "Google Search & Display Ads — capture high-intent buyers at the moment they're searching",
      "YouTube Ads — brand awareness and remarketing at scale",
      "Landing page alignment — your ads and your destination page always match",
      "Weekly performance reporting with real revenue attribution",
    ],
  },
  {
    n: "02",
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    tags: ["TECHNICAL", "CONTENT", "AUTHORITY"],
    body: "We build organic traffic that doesn't disappear the moment you stop spending. Our SEO work covers technical health, content strategy, and authority building — the three pillars that actually move rankings over time.",
    items: [
      "Full technical SEO audit and fixes (speed, crawlability, schema, Core Web Vitals)",
      "Keyword strategy built around buyer intent, not just search volume",
      "On-page optimisation across every key page",
      "Content marketing — blog strategy, pillar pages, and topic clusters",
      "Link building and domain authority growth",
      "Monthly ranking reports with traffic and lead attribution",
    ],
  },
  {
    n: "03",
    icon: Share2,
    title: "Social Media Marketing",
    tags: ["INSTAGRAM", "LINKEDIN", "FACEBOOK"],
    body: "We don't post for the sake of posting. Every piece of content we create has a job — to build awareness, generate trust, or move someone closer to a conversation with you.",
    items: [
      "Platform strategy for Instagram, LinkedIn, and Facebook",
      "Content creation — carousels, reels, graphics, and captions",
      "Community management and engagement",
      "Influencer and collab strategy",
      "Monthly analytics with engagement and lead metrics",
    ],
  },
  {
    n: "04",
    icon: Users,
    title: "Lead Generation",
    tags: ["FUNNELS", "AUTOMATION", "CRM"],
    body: "We build the end-to-end system that turns strangers into leads — lead magnets, landing pages, DM automation, email sequences, and CRM setup — so your pipeline fills itself.",
    items: [
      "Lead magnet creation (audits, guides, scorecards, templates)",
      "Landing page strategy and copywriting",
      "Email nurture sequences (welcome, education, offer)",
      "DM automation (Instagram, WhatsApp)",
      "CRM setup and pipeline management",
    ],
  },
  {
    n: "05",
    icon: BarChart3,
    title: "Analytics & Reporting",
    tags: ["GA4", "PIXEL", "DASHBOARDS"],
    body: "You'll always know what's working and why. We set up proper tracking from day one so every decision is backed by data — not instinct.",
    items: [
      "Google Analytics 4 setup and configuration",
      "Meta Pixel + Conversion API integration",
      "UTM tracking across all campaigns",
      "Custom dashboard (weekly + monthly reporting)",
      "Revenue attribution — which channels are actually closing clients",
    ],
  },
];

function ServiceModule({ service, isOpen, onToggle }) {
  const Icon = service.icon;
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border transition-colors duration-300 ${
        isOpen ? "border-borderStrong bg-white/[0.03]" : "border-border bg-white/[0.015] hover:border-borderStrong"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-xs text-textMuted">{service.n}</span>
        <Icon className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
        <span className="flex-1 font-display text-base font-semibold text-ink sm:text-lg">
          {service.title}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-textMuted transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
              <p className="max-w-2xl text-sm leading-relaxed text-textSecondary">{service.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-textMuted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-textSecondary">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <span
        className={`pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-accent transition-transform duration-300 ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      />
    </div>
  );
}

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="What We Do" heading="What's Included in Growth Marketing">
          A complete suite of services that work as one system — not a menu of things you have to
          coordinate yourself.
        </SectionHeading>

        <div className="mt-14 space-y-3">
          {services.map((s, i) => (
            <ServiceModule
              key={s.n}
              service={s}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
