const columns = [
  {
    title: "Services",
    links: ["Performance Ads", "SEO", "Social Media", "Lead Generation", "Analytics"],
  },
  {
    title: "Company",
    links: ["About", "Process", "Results", "Careers"],
  },
  {
    title: "Connect",
    links: ["hello@prioritizelabs.com", "Instagram", "LinkedIn"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-full opacity-[0.4]" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="grid gap-14 pb-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
              Let&apos;s Talk
            </span>
            <h3 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-4xl">
              Ready To Build What&apos;s Next?
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-textSecondary">
              Let&apos;s engineer your next stage of growth.
            </p>
            <a
              href="#audit"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accentSoft hover:shadow-glowMd"
            >
              Start a Project →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:justify-items-end">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-textMuted">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-textSecondary transition-colors hover:text-ink"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
          <div>
            <div className="font-display text-sm font-bold tracking-[0.08em] text-ink">
              PRIORITIZE<span className="text-accent">•</span>LABS
            </div>
            <div className="mt-1 text-xs text-textMuted">AI-powered growth systems.</div>
          </div>
          <div className="text-xs text-textMuted">
            © {new Date().getFullYear()} Prioritize Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
