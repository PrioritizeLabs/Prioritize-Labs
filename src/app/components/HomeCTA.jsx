"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";

export default function HomeCTA() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="relative isolate w-full overflow-hidden border-y border-violet-300/15 bg-[#0c0914] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.26),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />
      <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-violet-300">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Your next stage starts here
          </p>
          <h2
            id="home-cta-heading"
            className="mt-4 text-balance font-neue text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Ready to make your next move?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Tell us what you want to achieve. We&apos;ll help you find the right
            next step across growth marketing, creative production, and
            technology and automation.
          </p>
        </div>
        <CTAButton
          source="Homepage final CTA"
          showArrow={false}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.24)] transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.38)]"
        >
          Talk to our team <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </CTAButton>
      </div>
    </section>
  );
}
