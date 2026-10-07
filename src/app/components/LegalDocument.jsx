import Link from "next/link";
import JsonLd from "./JsonLd";

const legalPages = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export default function LegalDocument({ title, intro, path, sections }) {
  const url = `https://prioritizelabs.com${path}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: title,
          description: intro,
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://prioritizelabs.com/#website" },
          publisher: { "@id": "https://prioritizelabs.com/#organization" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://prioritizelabs.com/" },
              { "@type": "ListItem", position: 2, name: title, item: url },
            ],
          },
        }}
      />
      <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-32 text-[#e5e5e5] sm:px-10 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.16),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-xs text-white/45">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
            Legal
          </p>
          <h1 className="mt-4 text-balance font-neue text-4xl font-bold text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/65">{intro}</p>
          <p className="mt-5 text-xs text-white/40">Last updated: October 8, 2026</p>

          <div className="mt-10 flex flex-wrap gap-2 border-y border-white/10 py-4">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                aria-current={page.href === path ? "page" : undefined}
                className={`rounded-sm border px-3 py-2 text-xs transition-colors ${
                  page.href === path
                    ? "border-violet-400/50 bg-violet-500/[0.08] text-white"
                    : "border-white/10 text-white/55 hover:border-white/30 hover:text-white"
                }`}
              >
                {page.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-neue text-xl font-bold text-white sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-white/65 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/55">
            Questions about this page? Contact{" "}
            <a
              href="mailto:info@prioritizelabs.com"
              className="text-white underline decoration-violet-400/70 underline-offset-4 hover:text-violet-300"
            >
              info@prioritizelabs.com
            </a>
            .
          </div>
        </div>
      </main>
    </>
  );
}
