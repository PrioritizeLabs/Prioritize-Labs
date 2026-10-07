import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="client-stories-heading"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a0a0a] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.12),transparent_70%)]"
      />
      <div className="section-shell relative">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
          <span className="h-px w-6 bg-violet-400/70" />
          Client stories
        </p>
        <div className="mt-5 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h2
              id="client-stories-heading"
              className="max-w-xl text-balance font-neue text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Good work is best told by the people behind it.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              We share client feedback only with permission. Approved stories
              will appear here as they are ready.
            </p>
          </div>
          <div className="flex min-h-36 items-start gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <Quote
              aria-hidden="true"
              className="mt-0.5 h-6 w-6 shrink-0 text-violet-300/70"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-neue text-xl font-semibold text-white sm:text-2xl">
                Every partnership starts with a conversation.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Explore our services to see how we bring growth marketing,
                creative production, and technology together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
