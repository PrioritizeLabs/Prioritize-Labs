"use client";

import { useState, useRef, useEffect } from "react";
import {
  Palette,
  Video,
  Globe,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Mail,
  Zap,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Sparkles,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    id: "01",
    slug: "creatives",
    label: "Design & Visual Identity",
    title: "Visuals that stop the scroll — every single time",
    icon: Palette,
    accent: "from-purple-500 to-violet-600",
    lightAccent: "bg-purple-50",
    borderAccent: "border-purple-200",
    tagBg: "bg-purple-100 text-purple-700",
    body: "Your audience forms an opinion about your brand in under three seconds. We make sure that opinion is unforgettable. Our design team crafts creatives built for your specific brand, your target audience, and the platform they live on.",
    cta: "Get a Free Creative Sample",
    items: [
      "Logo Design & Brand Identity",
      "Social Media Post Design (Static, Carousel, Story)",
      "Festival & Occasion Posts",
      "Banners & Posters",
      "Infographics & Data Visuals",
      "YouTube Thumbnails",
      "Icon Design & Illustrations",
      "Brochures, Flyers & Menu Cards",
      "Business Cards & Stationery",
      "Packaging Design",
      "Digital Ad Creatives (Meta, Google)",
      "Reel Covers & Highlight Icons",
      "Presentation Decks",
    ],
  },
  {
    id: "02",
    slug: "video",
    label: "Short & Long Form Video Production",
    title: "Videos that hook in 3 seconds — and hold till the end",
    icon: Video,
    accent: "from-fuchsia-500 to-purple-600",
    lightAccent: "bg-fuchsia-50",
    borderAccent: "border-fuchsia-200",
    tagBg: "bg-fuchsia-100 text-fuchsia-700",
    body: "Video is the highest-performing content format on every major platform right now. We edit content built for how people actually watch — fast-paced openers, on-screen captions, seamless cuts, colour grading that matches your brand aesthetic.",
    cta: "See Our Video Work",
    items: [
      "Instagram Reels & Facebook Reels",
      "YouTube Videos (Short & Long Form)",
      "Promotional & Product Videos",
      "Corporate & Brand Films",
      "Ad Films for Meta & Google",
      "Explainer Videos",
      "Podcast Clips & Audiograms",
      "Event Highlight Videos",
      "Testimonial Video Edits",
      "Colour Grading & Correction",
      "Motion Captions & Subtitles",
      "Sound Design & Background Music",
      "Intro / Outro Animation",
      "Voiceover Sync",
    ],
  },
  {
    id: "03",
    slug: "web",
    label: "React & WordPress Development",
    title: "Websites that load fast, rank well, and convert visitors",
    icon: Globe,
    accent: "from-violet-500 to-purple-700",
    lightAccent: "bg-violet-50",
    borderAccent: "border-violet-200",
    tagBg: "bg-violet-100 text-violet-700",
    body: "Your website is your most powerful salesperson — it works 24/7. We build on two best-in-class platforms. WordPress for flexibility and ease. React for blazing-fast performance and cutting-edge interactions.",
    cta: "Discuss Your Project",
    items: [
      "Static Business Websites (React + Next.js)",
      "Dynamic Web Applications",
      "High-Performance Landing Pages",
      "API & Third-Party Integrations",
      "AI Chatbot Integration",
      "Custom Admin Dashboards",
      "E-Commerce Stores (WooCommerce)",
      "School & Institute Portals",
      "Restaurant Websites with Menu",
      "Portfolio & Personal Branding Sites",
      "Custom Theme Development",
      "On-Page SEO Setup & Speed Optimisation",
      "Google Analytics Setup",
    ],
  },
  {
    id: "04",
    slug: "social",
    label: "Content Strategy & Community Growth",
    title: "Your brand — always on, always consistent, always growing",
    icon: BarChart3,
    accent: "from-purple-600 to-indigo-600",
    lightAccent: "bg-indigo-50",
    borderAccent: "border-indigo-200",
    tagBg: "bg-indigo-100 text-indigo-700",
    body: "Posting once in a while and hoping it works is not a strategy. We take complete ownership of your social media — from the content calendar to the captions, from creatives to posting schedules, from community replies to monthly reports.",
    cta: "View Our Packages",
    items: [
      "Monthly Content Calendar",
      "Post Scheduling & Publishing",
      "Graphic & Reel Creation",
      "Caption Copywriting",
      "Hashtag Research & Strategy",
      "Profile Optimisation",
      "Community Management (Comments & DMs)",
      "Occasion & Festival Posts",
      "Google Business Profile Management",
      "Meta & Instagram Ads Management",
      "Google Ads Campaigns",
      "WhatsApp Broadcast Campaigns",
      "Monthly Analytics & Performance Report",
      "Competitor Tracking",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Brief",
    desc: "We start with a free consultation call. We learn about your business, your goals, your audience, and what's not working right now. No jargon — just a real conversation.",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "Based on what we learn, we build a custom plan — content calendar, design direction, website wireframe, or ad strategy. You see the roadmap before we execute a single task.",
  },
  {
    num: "03",
    title: "Creation & Delivery",
    desc: "Our team gets to work. You get regular updates, review rounds, and revisions. Everything is delivered on time, every time.",
  },
  {
    num: "04",
    title: "Optimise & Scale",
    desc: "We track what's working, report it clearly, and keep improving. The longer we work together, the sharper and more effective everything becomes.",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Everything under one roof",
    desc: "Design, video, web, and social — one team, one point of contact, one consistent brand voice across all your channels.",
  },
  {
    icon: Users,
    title: "We understand the local market",
    desc: "We've worked with schools, restaurants, coaches, and SMBs in Agra and across UP. We know what your customers respond to.",
  },
  {
    icon: Clock,
    title: "Fast turnaround, no compromise",
    desc: "Urgent festival post? Website update needed tonight? We move fast without cutting corners.",
  },
  {
    icon: Shield,
    title: "Transparent communication",
    desc: "No vague reports or buzzword updates. You always know exactly what was done, what's performing, and what's coming next.",
  },
  {
    icon: TrendingUp,
    title: "Built for growth",
    desc: "We don't just execute tasks. We think about your long-term brand and build everything with growth as the goal.",
  },
  {
    icon: Sparkles,
    title: "Custom, never generic",
    desc: "Every creative is built for your brand. No cookie-cutter templates. Every deliverable is made to make you stand out.",
  },
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─────────────────────────────────────────────
   SMALL COMPONENTS
───────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <FadeIn delay={0.05 * index}>
      <div
        className={`group relative rounded-3xl border ${service.borderAccent} bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}
      >
        {/* Gradient bar top */}
        <div className={`h-1 w-full bg-gradient-to-r ${service.accent}`} />

        <div className="p-8 md:p-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
            <div
              className={`flex-shrink-0 w-14 h-14 rounded-2xl ${service.lightAccent} flex items-center justify-center`}
            >
              <Icon className="w-7 h-7 text-purple-600" strokeWidth={1.6} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                  {service.id}
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.tagBg}`}
                >
                  {service.label}
                </span>
              </div>
              <h3 className="heading text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Body */}
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {service.body}
          </p>

          {/* Expandable list */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-sm font-semibold text-purple-600 mb-4 hover:text-purple-800 transition-colors"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
            {open
              ? "Hide services"
              : `Show all ${service.items.length} services`}
          </button>

          <div
            style={{
              maxHeight: open ? "700px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.45s ease",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pb-6">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${service.accent} text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
          >
            {service.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

function StepCard({ step, index }) {
  return (
    <FadeIn delay={0.1 * index}>
      <div className="relative flex gap-5">
        {index < steps.length - 1 && (
          <div className="absolute left-6 top-14 w-px h-full bg-purple-100 z-0" />
        )}
        <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-200">
          {step.num}
        </div>
        <div className="pt-1 pb-10">
          <h4 className="heading font-bold text-gray-900 text-lg mb-1.5">
            {step.title}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </FadeIn>
  );
}

function WhyCard({ item, index }) {
  const Icon = item.icon;
  return (
    <FadeIn delay={0.07 * index}>
      <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 h-full">
        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
          <Icon className="w-5 h-5 text-purple-600" strokeWidth={1.7} />
        </div>
        <h4 className="heading font-bold text-gray-900 mb-2">{item.title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
      </div>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-100 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-violet-100 opacity-30 blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d8b4fe 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-purple-500 mb-5 px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
            <Sparkles className="w-3.5 h-3.5" />
            Our Services
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-950 leading-tight tracking-tight mb-6">
            We Build Brands That{" "}
            <span className="relative inline-block text-purple-500">
              Move People
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9 C80 2, 220 2, 298 9"
                  stroke="#a855f7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Online
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            PrioritizeLabs is your end-to-end digital partner — from the first
            creative your audience sees, to the website they land on, to the
            content that keeps them coming back.{" "}
            <span className="text-purple-600 font-semibold">
              Based in Agra. Built for India.
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-200 hover:bg-purple-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-purple-600 font-bold text-sm border border-purple-200 hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Send an Enquiry
            </a>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.35}>
          <div className="mt-14 flex flex-col items-center gap-1.5 text-gray-400">
            <span className="text-xs tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* ── Hero ── */}
      <Hero />

      {/* ── Services Grid ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              What We Do
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Four core disciplines. One unified team. Infinite possibilities
              for your brand.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-white border-y border-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="lg:sticky lg:top-28">
                <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-4">
                  Our Process
                </span>
                <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Your success, prioritized from day one
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  We don't just take briefs and disappear. Every engagement is a
                  genuine partnership built on clarity, communication, and
                  measurable results.
                </p>
                <div className="mt-8 p-5 rounded-2xl bg-purple-50 border border-purple-100">
                  <p className="text-sm text-purple-700 font-medium leading-relaxed">
                    💬&nbsp; Every project starts with a{" "}
                    <strong>free consultation call</strong>. No commitment, no
                    pressure. Just a real conversation about your goals.
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <StepCard key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <FadeIn>
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-4">
              Why PrioritizeLabs
            </span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Why Businesses Choose Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Beyond deliverables — we're a growth partner that genuinely cares
              about your brand's success.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-violet-700 py-20 md:py-28"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white opacity-5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to grow your brand online?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-purple-200 text-lg mb-10 leading-relaxed">
              Get a free consultation — no commitment, no pressure. Tell us what
              you need and we'll tell you exactly how we can help.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7">
              <a
                href="https://wa.me/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold text-sm shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>
              <a
                href="mailto:hello@prioritizelabs.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur text-white font-bold text-sm border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Send an Enquiry
              </a>
            </div>
            <p className="text-purple-300 text-xs">
              Response within 24 hours &nbsp;·&nbsp; Based in Agra, serving
              clients across India
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}