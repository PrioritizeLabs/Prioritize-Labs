import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import CTAButton from "../../components/CTAButton";

const SITE_URL = "https://prioritizelabs.com";

export default function ServiceLandingPage({ service }) {
  const pageUrl = `${SITE_URL}${service.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.name,
        description: service.description,
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "City", name: "Agra" },
          { "@type": "Country", name: "India" },
        ],
        serviceType: service.serviceTypes,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#e5e5e5]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.18),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />

        <section className="section-shell relative pb-20 pt-36 sm:pb-28 sm:pt-44">
          <nav aria-label="Breadcrumb" className="text-xs text-white/45">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href="/services" className="transition-colors hover:text-white">Services</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span aria-current="page">{service.name}</span>
          </nav>

          <div className="mt-12 max-w-4xl">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
              <span className="h-px w-6 bg-violet-400/70" />
              {service.eyebrow}
            </p>
            <h1 className="mt-6 text-balance font-neue text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
              {service.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                source={`Service enquiry: ${service.name}`}
                showArrow={false}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.24)] transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.38)]"
              >
                Discuss your project
              </CTAButton>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/35 hover:text-white"
              >
                Explore what we do
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.12em] text-white/45">
              <span>Agra, India</span>
              <span>Mobile-first delivery</span>
              <span>Strategy through execution</span>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell relative scroll-mt-24 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
              What we do
            </p>
            <h2 className="mt-4 text-balance font-neue text-3xl font-bold text-white sm:text-5xl">
              {service.sectionTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-white/60">{service.sectionIntro}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-7"
              >
                <span className="font-mono text-xs text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-neue text-lg font-bold text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell relative py-16 sm:py-24">
          <div className="grid gap-10 border-y border-white/10 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
                How we work
              </p>
              <h2 className="mt-4 text-balance font-neue text-3xl font-bold text-white sm:text-4xl">
                Clear steps. No guesswork.
              </h2>
            </div>
            <ol className="space-y-6">
              {service.process.map((step, index) => (
                <li key={step.title} className="flex gap-4 border-b border-white/10 pb-6 last:border-0">
                  <span className="pt-1 font-mono text-xs text-violet-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-shell relative py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
              Frequently asked
            </p>
            <h2 className="mt-4 font-neue text-3xl font-bold text-white sm:text-4xl">
              {service.faqTitle}
            </h2>
          </div>
          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {service.faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-white marker:hidden">
                  {question}
                  <span aria-hidden="true" className="text-xl text-violet-300 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-relaxed text-white/60">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-shell relative pb-24 pt-12 sm:pb-32">
          <div className="rounded-lg border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.08] to-purple-500/[0.04] px-6 py-10 sm:px-10 sm:py-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
              Start a conversation
            </p>
            <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="font-neue text-3xl font-bold text-white sm:text-4xl">
                  {service.ctaTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Tell us what you are building and what success looks like. We will help you
                  identify the right next step.
                </p>
              </div>
              <CTAButton
                source={`Service enquiry: ${service.name}`}
                showArrow={false}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.24)] transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.38)]"
              >
                Discuss your project
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
