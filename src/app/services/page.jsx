import Link from "next/link";
import {
  ArrowUpRight,
  Palette,
  TrendingUp,
  Wrench,
} from "lucide-react";
import CTAButton from "../components/CTAButton";

const services = [
  {
    number: "01",
    title: "Growth Marketing",
    category: "Build a measurable pipeline",
    description:
      "Performance campaigns, SEO, social media and lead generation—connected into a growth system with clear measurement.",
    href: "/services/growth-marketing",
    Icon: TrendingUp,
    accent: "from-violet-500/20 to-purple-500/[0.03]",
    icon: "text-violet-300",
  },
  {
    number: "02",
    title: "Creative Production",
    category: "Make the brand memorable",
    description:
      "Brand identity, social content, campaign creative and video designed for your audience and the channels they use.",
    href: "/services/creative-services",
    Icon: Palette,
    accent: "from-fuchsia-500/15 to-violet-500/[0.03]",
    icon: "text-fuchsia-300",
  },
  {
    number: "03",
    title: "Technology & Automation",
    category: "Remove friction as you grow",
    description:
      "Websites, applications and workflow automation shaped around real customer journeys and business needs.",
    href: "/services/technology",
    Icon: Wrench,
    accent: "from-indigo-500/20 to-violet-500/[0.03]",
    icon: "text-indigo-300",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.2),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <section className="section-shell relative pb-16 pt-36 sm:pb-24 sm:pt-44">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
          <span className="h-px w-6 bg-violet-400/70" />
          Our Services
        </p>
        <h1 className="mt-6 max-w-4xl text-balance font-neue text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
          We build brands that{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
            move people.
          </span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Prioritize Labs brings growth, creative and technology together—from
          the first impression to the experience that turns interest into action.
          Based in Agra. Built for India.
        </p>
        <CTAButton
          source="Services page CTA"
          showArrow={false}
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.24)] transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.38)]"
        >
          Discuss your project <ArrowUpRight className="h-4 w-4" />
        </CTAButton>
      </section>

      <section className="section-shell relative pb-24 sm:pb-32">
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet-300">
              One connected team
            </p>
            <h2 className="mt-3 font-neue text-2xl font-bold text-white sm:text-3xl">
              Services built around your next stage.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            Bring us a specific challenge or combine capabilities into a plan
            tailored to your goals.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, title, category, description, href, Icon, accent, icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex min-h-72 flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-white/[0.04] hover:shadow-[0_18px_50px_rgba(91,33,182,0.14)] sm:p-7"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${accent} opacity-70`}
              />
              <div className="relative flex items-start justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-black/25 ${icon}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <span className="font-mono text-sm text-white/30">{number}</span>
              </div>
              <div className="relative mt-auto pt-10">
                <p className={`font-mono text-[10px] uppercase tracking-[0.22em] ${icon}`}>
                  {category}
                </p>
                <h3 className="mt-3 font-neue text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors group-hover:text-violet-200">
                  Explore service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
