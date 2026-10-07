"use client";

import { Unlink, EyeOff, Boxes } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

const cards = [
  {
    icon: Unlink,
    title: "Your ads and your website speak different languages",
    body: "Clicks are coming in but visitors aren't converting. That's not an ads problem — it's a funnel problem. Fixing one channel without fixing the whole journey is money down the drain.",
  },
  {
    icon: EyeOff,
    title: "You're measuring the wrong things",
    body: "Reach, impressions, follower count — these are vanity metrics. If your agency can't tell you exactly how many leads last month's campaign generated and what each one cost, you're flying blind.",
  },
  {
    icon: Boxes,
    title: "Every channel is siloed",
    body: "Your social team doesn't talk to your SEO team. Your ads agency doesn't know what the website converts at. When nothing connects, nothing compounds.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="The Problem" heading="You're Spending on Marketing. So Why Isn't It Growing?">
          Most businesses come to us after the same experience. They hired an agency, ran ads for
          three months, got a deck full of graphs — and couldn&apos;t point to a single client who
          came from it. The problem isn&apos;t the budget. It&apos;s that the pieces were never connected.
        </SectionHeading>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <GlowCard key={c.title} delay={i * 0.08}>
              <c.icon className="h-6 w-6 text-accent" strokeWidth={1.6} />
              <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-ink">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-textSecondary">{c.body}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
