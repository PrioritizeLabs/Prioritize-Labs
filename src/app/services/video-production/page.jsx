"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Film,
  Youtube,
  ShoppingBag,
  Building2,
  Megaphone,
  Star,
  Calendar,
  BookOpen,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Mail,
  Check,
  ArrowRight,
  Clapperboard,
  Zap,
  Layers,
  Clock,
  Users,
  MapPin,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    id: "01",
    icon: Play,
    title: "Instagram & Facebook Reels",
    sub: "Short-form content engineered for reach",
    body: "Reels are the single fastest way to grow your audience on Instagram and Facebook right now. We edit Reels built for the algorithm and for real human attention — fast-paced openers, motion captions, trending audio sync, seamless transitions, and a clear hook-to-CTA structure.",
    items: [
      "Hook-first edit structure",
      "On-screen animated captions",
      "Trending audio sync or original music",
      "Colour grading for brand consistency",
      "Transition effects and motion graphics",
      "Brand watermark and logo placement",
      "Reel cover frame design",
      "Aspect ratio optimised for all platforms",
    ],
    best: "Local businesses, coaches, restaurants, e-commerce brands, schools",
    tag: "Most Popular",
    tagColor: "bg-purple-100 text-purple-700",
    accent: "border-purple-300",
    glow: "shadow-purple-100",
  },
  {
    id: "02",
    icon: Youtube,
    title: "YouTube Videos",
    sub: "Long-form content that builds authority and gets found",
    body: "YouTube is the second-largest search engine in the world. We edit YouTube videos that hold attention from first second to last — structured narrative, clean B-roll, chapter markers, and broadcast-quality sound. We also handle thumbnails, descriptions, and SEO setup.",
    items: [
      "Full video edit with narrative structure",
      "B-roll integration and cutaways",
      "On-screen text, titles, lower thirds",
      "Colour grading and correction",
      "Background music and sound levelling",
      "Intro and outro animation (branded)",
      "YouTube thumbnail design",
      "Chapter markers and timestamp structure",
      "Description copy and keyword optimisation",
    ],
    best: "Educators, coaches, product explainers, businesses building YouTube presence",
    tag: null,
    tagColor: "",
    accent: "border-gray-200",
    glow: "shadow-gray-100",
  },
  {
    id: "03",
    icon: ShoppingBag,
    title: "Promotional & Product Videos",
    sub: "Videos that turn viewers into buyers",
    body: "A great product video removes every doubt a buyer has before they make a decision. We create promotional videos that showcase your product or service at its absolute best — clear, compelling, and optimised to run across Instagram ads, Facebook ads, your website, and WhatsApp.",
    items: [
      "Product / service showcase edit",
      "Motion graphics and text overlays",
      "Voiceover sync (if required)",
      "Ad-format versions (15s, 30s, 60s)",
      "Aspect ratio cuts for feed, Reel, and story",
      "Colour grade to match brand palette",
      "Call-to-action end cards",
    ],
    best: "E-commerce brands, product launches, seasonal offers, restaurants, beauty & fashion",
    tag: null,
    tagColor: "",
    accent: "border-gray-200",
    glow: "shadow-gray-100",
  },
  {
    id: "04",
    icon: Building2,
    title: "Corporate & Brand Films",
    sub: "Tell your story the right way, once, for good",
    body: "A brand film is not a promotional video. It's the video that explains who you are, why you exist, and why someone should choose you over everyone else. Done well, it becomes your most powerful long-term asset — on your homepage, pitch decks, and LinkedIn.",
    items: [
      "Pre-production planning and script outline",
      "On-location shoot coordination (Agra & nearby)",
      "Multi-camera or single-camera edit",
      "Interview and talking-head editing",
      "Cinematic colour grading",
      "Background score and ambient sound",
      "Subtitles and captions",
      "Final deliverable in multiple formats",
    ],
    best: "Businesses building long-term credibility, schools, startup pitches, real estate",
    tag: "Premium",
    tagColor: "bg-amber-100 text-amber-700",
    accent: "border-amber-200",
    glow: "shadow-amber-50",
  },
  {
    id: "05",
    icon: Megaphone,
    title: "Ad Films for Meta & Google",
    sub: "Videos built to perform as paid advertisements",
    body: "A scroll-stopping video ad is one of the highest-ROI investments your business can make. Ad films need a hard hook in the first 3 seconds, a clear offer in the middle, and an unmistakable CTA at the end. We build for conversion, not just views.",
    items: [
      "Ad structure: hook → problem → solution → offer → CTA",
      "Multiple length versions (6s, 15s, 30s)",
      "Feed and story / Reel aspect ratios",
      "Subtitles (most ads are watched on mute)",
      "A/B format variants if needed",
      "Coordination with your ads manager for spec compliance",
    ],
    best: "Businesses running paid social campaigns, lead generation, e-commerce conversions",
    tag: "High ROI",
    tagColor: "bg-green-100 text-green-700",
    accent: "border-green-200",
    glow: "shadow-green-50",
  },
  {
    id: "06",
    icon: Star,
    title: "Testimonial & Review Videos",
    sub: "Your happiest customers, telling your story for you",
    body: "Nothing sells better than a real customer saying your name on camera. Testimonial videos are one of the most trusted and highest-converting content formats for local businesses — more credible than any ad you'll ever run.",
    items: [
      "Shoot guidance (advise on remote recording too)",
      "Edit with name and designation lower thirds",
      "Background music and ambient sound",
      "Colour grading",
      "Caption / subtitle overlay",
      "Short cut for social and long cut for website",
    ],
    best: "Schools, coaching institutes, salons, local services, healthcare, hospitality",
    tag: null,
    tagColor: "",
    accent: "border-gray-200",
    glow: "shadow-gray-100",
  },
  {
    id: "07",
    icon: Calendar,
    title: "Event Coverage & Highlights",
    sub: "Your events deserve to live beyond the day",
    body: "Whether it's an annual day, a product launch, a store opening, or a corporate event — an edited highlight reel extends the life and impact of every event, giving you content to post, share, and use for years.",
    items: [
      "Multi-clip highlight edit",
      "Titles and event branding overlays",
      "Music selection and sync",
      "Colour grade",
      "Short social version (60–90 seconds)",
      "Extended version (3–5 minutes)",
    ],
    best: "Schools, institutes, corporate events, store launches, conferences, social events",
    tag: null,
    tagColor: "",
    accent: "border-gray-200",
    glow: "shadow-gray-100",
  },
  {
    id: "08",
    icon: BookOpen,
    title: "Explainer & Educational Videos",
    sub: "Complex ideas made simple, fast",
    body: "If your product, service, or course needs explanation before a customer will buy it — an explainer video is your most efficient tool. Clear visuals, a clean script, and tight editing turn a complicated offer into an easy yes.",
    items: [
      "Script writing or review",
      "Screen recording integration (for apps/software)",
      "On-screen text and annotations",
      "Voiceover sync",
      "Motion graphics support",
      "Clean, distraction-free edit",
    ],
    best: "Coaching institutes, online courses, app & software businesses, healthcare, finance",
    tag: null,
    tagColor: "",
    accent: "border-gray-200",
    glow: "shadow-gray-100",
  },
];

const steps = [
  {
    num: "01",
    title: "Brief & Discovery",
    desc: "We start with a call to understand exactly what you need — the platform, the goal, the audience, and the message. You don't need to have everything figured out. We ask the right questions to get there together.",
  },
  {
    num: "02",
    title: "Pre-Production",
    desc: "Depending on the project, we handle script outlines, shot lists, storyboards, and shoot planning. If we're shooting on location, we handle coordination. If you're sending footage, we guide you on how to capture it.",
  },
  {
    num: "03",
    title: "Shooting",
    desc: "For projects requiring on-location production — brand films, testimonials, events — our team comes to you in Agra and nearby areas. For remote clients, we provide detailed shoot guides so footage is edit-ready.",
  },
  {
    num: "04",
    title: "Editing",
    desc: "We edit, colour grade, add motion graphics, sync audio, and lay in captions. You receive a first cut for review, followed by revision rounds until it's exactly right.",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Final files delivered in every format you need — Instagram, YouTube, WhatsApp, website. We keep your project files so future updates and variations are fast and easy.",
  },
];

const whyPoints = [
  {
    icon: Layers,
    title: "We edit for the platform, not just the project",
    desc: "A video that works on YouTube needs a completely different structure than a Reel or paid ad. We build every video specifically for where it will live.",
  },
  {
    icon: Zap,
    title: "Your brand stays consistent",
    desc: "Colour grading, fonts, music tone, logo placement — every video we produce feels like it belongs to the same brand. Consistency builds trust.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "Reels tied to trends or occasions can't wait two weeks. We work to fast turnaround timelines without sacrificing the quality of the final output.",
  },
  {
    icon: Layers,
    title: "One team for everything",
    desc: "Our design and social media team works alongside our video team — so thumbnails, captions, post copy, and ad creatives are created together, consistently.",
  },
  {
    icon: MapPin,
    title: "We understand local businesses",
    desc: "We've produced content for schools in Agra, restaurants, coaching institutes, and SMBs across UP. We know what your audience looks like.",
  },
];

const faqs = [
  {
    q: "Do you shoot the videos or only edit?",
    a: "Both. We offer editing-only services where you send us raw footage, and we also handle full production including the shoot for clients in Agra and nearby areas. For clients outside Agra, we provide detailed shoot guides so your footage is edit-ready.",
  },
  {
    q: "What format should I send raw footage in?",
    a: "Any format works — phone footage (4K preferred), camera files, or clips from any device. We'll let you know the best way to transfer large files securely.",
  },
  {
    q: "How many revisions do I get?",
    a: "All our video projects include revision rounds. The number depends on the package or project scope, but we stay with you until the final output is exactly right.",
  },
  {
    q: "Can you edit videos with a specific style or reference?",
    a: "Absolutely. Share any reference videos you like and we'll match the pacing, style, and tone. The more references you give us, the faster we hit the mark.",
  },
  {
    q: "How long does it take to deliver a Reel or short video?",
    a: "Standard turnaround for a Reel edit is 2–4 working days. For corporate or brand films, timelines depend on scope — we'll always give you a clear delivery date upfront.",
  },
  {
    q: "Do you write scripts?",
    a: "Yes. For explainer videos, ad films, and brand films, we can write or co-write the script as part of the project.",
  },
  {
    q: "Can you create videos for paid advertising?",
    a: "Yes. Ad-format video editing is one of our specialties. We build the structure specifically for paid platforms — Meta, Instagram, and YouTube pre-roll — and deliver in all required ad specs.",
  },
];

const industries = [
  { name: "Schools & Coaching Institutes", desc: "Admission promos, faculty intros, student testimonials, event highlights, annual day reels" },
  { name: "Restaurants & Food Brands", desc: "Dish showcase reels, ambience videos, chef videos, promotional ad films" },
  { name: "E-commerce & Product Brands", desc: "Product demos, unboxing edits, ad creatives, review compilations" },
  { name: "Coaches & Consultants", desc: "Brand films, educational content, testimonial videos, course trailers" },
  { name: "Local & Retail Stores", desc: "Grand opening reels, seasonal offers, store tour videos" },
  { name: "Healthcare & Wellness", desc: "Doctor introduction videos, patient testimonials, awareness content" },
  { name: "Real Estate", desc: "Property walkthrough videos, project launch films, testimonial reels" },
  { name: "Corporate & Events", desc: "Company culture films, event highlights, HR videos" },
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "", y = 24 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
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
    <FadeIn delay={0.04 * index}>
      <div
        className={`relative rounded-2xl border-2 ${service.accent} bg-white shadow-sm hover:shadow-lg ${service.glow} transition-all duration-400 overflow-hidden flex flex-col`}
      >
        {/* Colored left stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-l-2xl" />

        <div className="pl-6 pr-6 pt-6 pb-5 flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-purple-600" strokeWidth={1.7} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {service.id}
                  </span>
                  {service.tag && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${service.tagColor}`}>
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="heading font-bold text-gray-900 text-base leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Sub */}
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">
            {service.sub}
          </p>

          {/* Body */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
            {service.body}
          </p>

          {/* Best for */}
          <div className="text-xs text-gray-400 italic mb-4">
            <span className="font-semibold not-italic text-gray-500">Best for: </span>
            {service.best}
          </div>

          {/* Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1.5 text-xs font-semibold text-purple-500 hover:text-purple-700 transition-colors mb-3"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            {open ? "Hide what's included" : "See what's included"}
          </button>

          <div
            style={{
              maxHeight: open ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <div className="grid grid-cols-1 gap-1.5 pb-4 border-t border-gray-100 pt-3">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={0.05 * index}>
      <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="heading font-semibold text-gray-900 text-sm leading-snug">
            {faq.q}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-purple-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <div
          style={{
            maxHeight: open ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}
        >
          <div className="px-6 pb-5 pt-0">
            <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[92vh] flex items-center">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d8b4fe 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Purple glow blobs */}
      <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-purple-200 opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-violet-100 opacity-50 blur-3xl pointer-events-none" />

      {/* Clapperboard decorative icon */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.06]">
        <Clapperboard strokeWidth={0.5} className="w-[340px] h-[340px] text-purple-900" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <a href="/" className="hover:text-purple-500 transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="/services" className="hover:text-purple-500 transition-colors">Services</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-500">Video Production & Editing</span>
          </nav>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-xs font-bold tracking-widest uppercase mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Video Production & Editing
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1 className="heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-950 leading-[1.05] tracking-tight mb-6">
            Video content that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500">
              stops thumbs,
            </span>{" "}
            builds trust, and drives{" "}
            <span className="relative inline-block text-purple-500">
              real results
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden="true">
                <path d="M2 9 C80 2, 220 2, 298 9" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            From a 15-second Reel to a full-length brand film — we handle the
            complete video journey. Scripting, shooting, editing, sound design,
            captions, and delivery. Professional output, built for every platform.
          </p>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-200 hover:bg-purple-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Get a Free Consultation
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-purple-600 font-bold text-sm border border-purple-200 hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              See Our Work
            </a>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.38}>
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-gray-100">
            {[
              { val: "8+", label: "Video formats" },
              { val: "2–4 days", label: "Reel turnaround" },
              { val: "Agra & India", label: "Serving clients" },
              { val: "Full stack", label: "Shoot to delivery" },
            ].map((s) => (
              <div key={s.label}>
                <div className="heading text-2xl font-extrabold text-gray-900">{s.val}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOOK SECTION
───────────────────────────────────────────── */
function HookSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight">
              Video is no longer optional. It's how your audience decides whether to{" "}
              <span className="text-purple-500">trust you.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                In 2025, video content drives more engagement, more reach, and more
                conversions than any other format on Instagram, Facebook, YouTube, and
                Google. Businesses that show up consistently with high-quality video
                build credibility faster, attract better customers, and stay top-of-mind.
              </p>
              <p>
                The problem isn't that businesses don't have stories worth telling. The
                problem is that most videos never get made — because editing is
                time-consuming, technical, and easy to get wrong.
              </p>
              <p className="font-semibold text-gray-800">
                PrioritizeLabs handles your entire video pipeline — from the idea to the
                final file — so your brand shows up on every platform with content that
                actually performs.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function VideoProductionPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero />
      <HookSection />

      {/* ── Services ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">
              What We Produce
            </span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              What we produce for you
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Eight specialised video formats, each built for a specific goal, platform, and audience.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-purple-50 border-y border-purple-100 py-16 md:py-24 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-purple-200 opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-violet-200 opacity-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">
                Our Process
              </span>
              <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                From idea to final file — here's exactly how it works
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <FadeIn key={step.num} delay={0.1 * i}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-200">
                      <span className="heading font-extrabold text-white text-lg">{step.num}</span>
                    </div>
                    <h4 className="heading font-bold text-gray-900 mb-2 text-sm">{step.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">
                Why PrioritizeLabs
              </span>
              <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Video expertise, creative instinct, brand understanding — all in one team
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <FadeIn key={point.title} delay={0.07 * i}>
                  <div className="p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-5 h-5 text-purple-600" strokeWidth={1.7} />
                    </div>
                    <h4 className="heading font-bold text-gray-900 mb-2 text-sm">{point.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">
              Industries We Serve
            </span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Built for your industry
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We've produced video for businesses across every major vertical. Here's how we serve yours.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={0.05 * i}>
              <div className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-purple-500 mb-3 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Film className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <h4 className="heading font-bold text-gray-900 text-sm mb-1">{ind.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-t border-gray-100 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">
                FAQ
              </span>
              <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Questions we always get
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-violet-700 py-20 md:py-28">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white opacity-5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
              <Clapperboard className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white! mb-4 leading-tight">
              Ready to make video work for your business?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-purple-200 text-lg mb-10 leading-relaxed">
              Tell us what you have in mind — we'll tell you exactly what we can build for
              you. Free consultation, no commitment.
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
              Based in Agra &nbsp;·&nbsp; Serving clients across India &nbsp;·&nbsp; Reels, YouTube, Brand Films, Ad Videos & more
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}