import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CTAButton from "../components/CTAButton";

const contactDetails = [
  {
    label: "Email",
    value: "info@prioritizelabs.com",
    href: "mailto:info@prioritizelabs.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 94104 24657",
    href: "tel:+919410424657",
    Icon: Phone,
  },
];

const services = [
  { name: "Growth Marketing", href: "/services/growth-marketing" },
  { name: "Creative Production", href: "/services/creative-services" },
  { name: "Technology & Automation", href: "/services/technology" },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.2),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[650px] opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <section className="section-shell relative pb-16 pt-36 sm:pb-20 sm:pt-44">
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-violet-300">
          <span className="h-px w-6 bg-violet-400/70" />
          Contact Prioritize Labs
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-balance font-neue text-4xl font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
              Let&apos;s build what&apos;s{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                next.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Tell us where you want to go. Our team will help you find the right
              next step across growth marketing, creative production, and
              technology and automation.
            </p>
            <CTAButton
              source="Contact page CTA"
              showArrow={false}
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.24)] transition-all hover:-translate-y-0.5 hover:from-violet-500 hover:to-purple-500 hover:shadow-[0_0_32px_rgba(139,92,246,0.38)]"
            >
              Start a conversation <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </CTAButton>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Clock3 aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Prompt response</p>
                <p className="mt-1 text-xs text-white/50">Our team will be in touch soon.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">A private conversation</p>
                <p className="mt-1 text-xs text-white/50">Your enquiry stays with our team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell relative pb-24 sm:pb-32">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-violet-300">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
              The right team for your next stage
            </p>
            <h2 className="mt-4 font-neue text-2xl font-bold text-white sm:text-3xl">
              What can we help you with?
            </h2>
            <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {services.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between gap-4 py-4 text-sm font-medium text-white/75 transition-colors hover:text-violet-200"
                >
                  {name}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-200"
                  />
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Not sure where to start? Use the enquiry form and tell us about
              your goals. We&apos;ll help you work out the best fit.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <h2 className="font-neue text-2xl font-bold text-white sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Prefer email or phone? Reach our team directly.
            </p>
            <div className="mt-6 space-y-3">
              {contactDetails.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/20 p-4 transition-colors hover:border-violet-400/30 hover:bg-white/[0.03]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.14em] text-white/40">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium text-white/80">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <MapPin aria-hidden="true" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-white/40">
                    Based in
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-relaxed text-white/80">
                    E-3/2060 Shaheed Nagar
                    <br />
                    Agra, Uttar Pradesh, India
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
