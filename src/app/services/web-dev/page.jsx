"use client";

import { useState, useRef, useEffect } from "react";
import {
  Globe,
  Zap,
  Search,
  Smartphone,
  ShoppingCart,
  MessageCircle,
  BarChart3,
  Shield,
  Mail,
  ChevronDown,
  ChevronRight,
  Check,
  ArrowRight,
  Code2,
  Layout,
  Layers,
  Server,
  Star,
  Clock,
  Users,
  Award,
  Rocket,
  BookOpen,
  Coffee,
  Heart,
  Building,
  Home,
  Stethoscope,
  TrendingUp,
  Cpu,
} from "lucide-react";

/* ─────────────────────────────────────────────
   IMAGES
───────────────────────────────────────────── */
const imgs = {
  hero:     "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80&auto=format&fit=crop",
  react:    "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=900&q=80&auto=format&fit=crop",
  wp:       "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80&auto=format&fit=crop",
  mobile:   "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
  seo:      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80&auto=format&fit=crop",
  ecomm:    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
  school:   "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80&auto=format&fit=crop",
  resto:    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop",
  desk:     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80&auto=format&fit=crop",
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const reactFeatures = [
  "Business and corporate websites",
  "High-performance landing pages",
  "Portfolio and personal branding sites",
  "Product showcase sites",
  "Startup and tech company websites",
  "Single-page applications (SPAs)",
  "Multi-page dynamic websites",
  "AI chatbot integration",
  "Third-party API integrations",
  "Custom admin dashboards",
  "Progressive Web Apps (PWAs)",
];

const wpFeatures = [
  "Business and corporate websites",
  "School and coaching institute websites",
  "Restaurant and café websites (with menus)",
  "E-commerce stores (WooCommerce)",
  "Service provider and consultancy websites",
  "Healthcare and clinic websites",
  "Real estate websites",
  "Blog and content-driven websites",
  "Portfolio websites",
  "Local business websites with Google Maps",
  "Event and booking websites",
  "Membership and course websites",
];

const baseIncludes = [
  { icon: Smartphone,    title: "Mobile-First Design",        desc: "Designed for mobile first — 75%+ of India's web traffic comes from phones. Perfect on every screen size." },
  { icon: Search,        title: "On-Page SEO Setup",          desc: "Page titles, meta descriptions, heading hierarchy, alt text, sitemaps, and Google Search Console connection." },
  { icon: Zap,           title: "Speed Optimisation",         desc: "Image compression, lazy loading, caching, clean code. Fast sites also rank higher on Google." },
  { icon: MessageCircle, title: "WhatsApp CTA Integration",   desc: "One-tap WhatsApp button so visitors can reach you directly — no form friction, no waiting." },
  { icon: Mail,          title: "Contact Form Integration",   desc: "Clean forms connected directly to your inbox with notifications, spam filtering, and mobile layouts." },
  { icon: BarChart3,     title: "Google Analytics Setup",     desc: "Know who visits, where they come from, and what they do — visibility from day one." },
  { icon: Globe,         title: "Google Business Connection", desc: "Properly linked to your Google Business Profile for maximum local search visibility." },
  { icon: Shield,        title: "SSL Certificate",            desc: "Every site runs on HTTPS — a security requirement, a Google ranking signal, and a trust indicator." },
  { icon: Check,         title: "Cross-Browser Testing",      desc: "Tested across Chrome, Safari, Firefox, and Edge on desktop and mobile before going live." },
  { icon: Server,        title: "Domain & Hosting Guidance",  desc: "Help choosing, setting up, and deploying on the right hosting for your project and budget." },
];

const industries = [
  { icon: BookOpen, title: "Schools & Coaching Institutes", img: imgs.school, desc: "Admission enquiry pages, faculty info, gallery sections, result showcases, and clear CTAs that convert interest into actual enquiries." },
  { icon: Coffee,   title: "Restaurants & Food Businesses", img: imgs.resto,  desc: "Digital menus, home delivery integrations, reservation forms, gallery sections, and WhatsApp ordering buttons." },
  { icon: ShoppingCart, title: "E-Commerce Brands",        img: imgs.ecomm,  desc: "Full WooCommerce stores with catalogues, Razorpay/PayU/UPI integrations, order management, and discount systems." },
  { icon: Users,    title: "Coaches & Consultants",        img: imgs.desk,   desc: "Personal branding sites, service landing pages, lead magnet integrations, testimonials, and booking forms." },
  { icon: Stethoscope, title: "Healthcare & Clinics",      img: imgs.seo,    desc: "Doctor introduction pages, service listings, appointment systems, patient testimonials, and local search structuring." },
  { icon: Home,     title: "Real Estate",                  img: imgs.mobile, desc: "Property listings with filters, project showcases, virtual tour embeds, enquiry forms, and WhatsApp CTAs." },
  { icon: Building, title: "Local & Retail Stores",        img: imgs.hero,   desc: "Store info, product showcases, offer pages, Google Maps, and WhatsApp / call buttons built for mobile searchers." },
  { icon: TrendingUp, title: "Corporate & Service",        img: imgs.desk,   desc: "Multi-page corporate sites, service detail pages, team sections, case studies, and CRM-connected lead forms." },
];

const steps = [
  { num: "01", title: "Discovery & Requirements",  desc: "We ask the right questions upfront — your business, audience, competitors, and what the site needs to do. Scope, timeline, and shared goals defined." },
  { num: "02", title: "Sitemap & Structure",        desc: "We map every page before any design. You approve the architecture first — prevents rework and ensures logical structure for users and search engines." },
  { num: "03", title: "Design (UI/UX)",             desc: "High-fidelity mockups so you see every page before any code is written. Designed for your brand, your audience, and the conversion goal of each page." },
  { num: "04", title: "Development",               desc: "Clean, performant, component-based code for React. Custom theme from approved design for WordPress — never a purchased template being adjusted." },
  { num: "05", title: "Testing & Review",           desc: "Extensive testing — mobile and desktop, all browsers, all forms, page speed, SEO, and content accuracy. You get a staging link before launch." },
  { num: "06", title: "Launch & Handover",          desc: "Full launch handled — deployment, domain, SSL, sitemap to Google. WordPress: content training. React: codebase documentation. You own everything." },
];

const faqs = [
  { q: "How long does it take to build a website?",                      a: "A standard WordPress business website typically takes 2–4 weeks. A React website or e-commerce store takes 4–8 weeks depending on scope and complexity. We give you a clear timeline at the start of every project and stick to it." },
  { q: "I already have a website. Can you redesign it?",                 a: "Yes. Website redesigns are a significant part of our work. We assess your existing site, understand what's not working, and rebuild it properly — keeping everything that's valuable while replacing everything that's holding you back." },
  { q: "Which is better — React or WordPress?",                          a: "Neither is universally better. If you want maximum performance, a highly custom experience, or a complex interactive product, React is the answer. If you want to manage your own content, need e-commerce, or are a local business, WordPress is the right choice. We always recommend what's genuinely best for your situation." },
  { q: "Will I be able to update my website myself after launch?",       a: "For WordPress websites, yes — absolutely. We build with Elementor Pro or a clean custom theme, and we train you at handover so you're comfortable making basic changes without any developer help. React sites require developer involvement for content updates." },
  { q: "Do you provide hosting?",                                         a: "We don't sell hosting directly, but we guide you to the right hosting solution for your project and budget — and we handle all the technical setup." },
  { q: "Will my website rank on Google?",                                 a: "We build every website with proper on-page SEO — the technical foundation that makes it possible for Google to find, understand, and rank your site. SEO is a long-term process, but we make sure your website starts with the best possible foundation." },
  { q: "Can you integrate an AI chatbot into my website?",               a: "Yes. AI chatbot integration is available for both React and WordPress websites — chatbots that answer visitor questions, capture leads, book appointments, and connect to your WhatsApp, operating 24/7." },
  { q: "What do you need from us to get started?",                        a: "A clear brief — your business type, the goal of the website, any references you like, and your existing brand assets if you have them. We'll guide you through everything else. If you don't have brand assets, we can build those first." },
];

const whyUs = [
  { icon: Rocket,  title: "Built for performance, not just appearance",  desc: "We optimise every decision — design, code, structure — for the outcome that matters: more business." },
  { icon: Code2,   title: "No templates. Custom every time.",            desc: "We never buy a theme and change the colours. Every website is designed from scratch for your specific brand." },
  { icon: Users,   title: "We understand local business needs",          desc: "We've built for schools, restaurants, and service providers across UP and India. We know what works locally." },
  { icon: Layers,  title: "One team for website and marketing",          desc: "Design, video, social, and ads all aligned. Your website, Instagram, and ads feel like they come from the same brand." },
  { icon: Award,   title: "Clean code, proper handover",                 desc: "You own everything — fully. No lock-in, no monthly fees to keep your site accessible. You can take it anywhere." },
  { icon: Clock,   title: "Post-launch support",                         desc: "We don't disappear after launch. Updates, new features, and ongoing support available for every client." },
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "", dir = "up" }) {
  const [ref, inView] = useInView();
  const t = { up: "translateY(28px)", left: "translateX(-28px)", right: "translateX(28px)", none: "none" };
  return (
    <div ref={ref} className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : t[dir],
        transition: `opacity 0.65s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TICKER
───────────────────────────────────────────── */
const techStack = ["Next.js","React","Tailwind CSS","WordPress","WooCommerce","Framer Motion","Node.js","Elementor Pro","Yoast SEO","REST APIs","WP Rocket","Vercel","MySQL","PHP","Custom Themes"];

function TechTicker() {
  return (
    <div className="overflow-hidden bg-gray-950 py-3">
      <style>{`
        @keyframes techscroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .tech-inner { display:flex; width:max-content; animation:techscroll 28s linear infinite; }
        .tech-inner:hover { animation-play-state:paused; }
      `}</style>
      <div className="tech-inner">
        {[...techStack, ...techStack].map((t, i) => (
          <span key={i} className="flex items-center gap-3 px-5 text-gray-400 text-xs font-mono font-semibold whitespace-nowrap">
            <span className="w-1 h-1 rounded-full bg-purple-500 inline-block" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PLATFORM TOGGLE CARD
───────────────────────────────────────────── */
function PlatformCard({ platform }) {
  const [open, setOpen] = useState(false);
  const isReact = platform === "react";

  return (
    <FadeIn dir={isReact ? "left" : "right"} delay={isReact ? 0 : 0.1}>
      <div className={`rounded-3xl overflow-hidden border-2 ${isReact ? "border-purple-200" : "border-blue-200"} bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group`}>
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img src={isReact ? imgs.react : imgs.wp} alt={isReact ? "React" : "WordPress"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Top bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 ${isReact ? "bg-gradient-to-r from-purple-500 to-violet-600" : "bg-gradient-to-r from-blue-500 to-cyan-500"}`} />
          {/* Icon + label */}
          <div className="absolute top-4 left-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isReact ? "bg-purple-500" : "bg-blue-500"} shadow-lg mb-2`}>
              {isReact ? <Cpu className="w-5 h-5 text-white" /> : <Layout className="w-5 h-5 text-white" />}
            </div>
          </div>
          {/* Bottom headline */}
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="heading text-white font-extrabold text-xl leading-tight">
              {isReact ? "React Websites" : "WordPress Websites"}
            </h3>
            <p className={`text-xs font-semibold mt-1 ${isReact ? "text-purple-300" : "text-blue-300"}`}>
              {isReact ? "Fastest. Most modern. Built for performance." : "World's most trusted platform. Yours to manage."}
            </p>
          </div>
        </div>

        <div className="p-7">
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {isReact
              ? "React is the technology behind Facebook, Airbnb, and Netflix. It produces websites that are extraordinarily fast, highly interactive, and capable of doing things a traditional website simply cannot."
              : "WordPress powers over 40% of all websites on the internet. Built right — custom-designed, performance-optimised, SEO-structured — it gives you a professional site you can manage yourself without ever needing a developer for basic changes."}
          </p>

          {/* Right-choice pills */}
          <div className={`rounded-2xl p-4 mb-5 ${isReact ? "bg-purple-50 border border-purple-100" : "bg-blue-50 border border-blue-100"}`}>
            <p className={`text-xs font-bold uppercase tracking-wide mb-3 ${isReact ? "text-purple-600" : "text-blue-600"}`}>
              Choose this if you…
            </p>
            <div className="space-y-1.5">
              {(isReact
                ? ["Want the fastest possible website performance","Need custom features or integrations","Want a site that feels genuinely different from competitors","Are building a product or application, not just a brochure","Long-term scalability is a priority"]
                : ["Want to manage your own content after launch","Need a full e-commerce store","Are a local business, school, restaurant, or service provider","Budget efficiency is important","Need a site that can be easily expanded over time"]
              ).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isReact ? "text-purple-500" : "text-blue-500"}`} />
                  <span className="text-xs text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable feature list */}
          <button onClick={() => setOpen(!open)} className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide mb-3 hover:opacity-70 transition-opacity ${isReact ? "text-purple-600" : "text-blue-600"}`}>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            {open ? "Hide all services" : "See all services"}
          </button>
          <div style={{ maxHeight: open ? "600px" : "0", overflow: "hidden", transition: "max-height 0.45s ease" }}>
            <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-gray-100 pb-4">
              {(isReact ? reactFeatures : wpFeatures).map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isReact ? "text-purple-400" : "text-blue-400"}`} />
                  <span className="text-xs text-gray-600">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 shadow-md ${isReact ? "bg-gradient-to-r from-purple-500 to-violet-600 shadow-purple-200" : "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-200"}`}>
            Start with {isReact ? "React" : "WordPress"} <ArrowRight className="w-4 h-4" />
          </a>
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
    <section className="relative overflow-hidden bg-white pt-20 pb-0">
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #e9d5ff 1.5px, transparent 1.5px)", backgroundSize: "34px 34px", opacity: 0.5 }} />
      {/* Blobs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-purple-100 opacity-50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-blue-100 opacity-30 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 pt-4">
            <a href="/" className="hover:text-purple-500 transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="/services" className="hover:text-purple-500 transition-colors">Services</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-500">Web Development</span>
          </nav>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pb-20">
          {/* Left copy */}
          <div>
            <FadeIn delay={0.04} dir="left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-xs font-bold tracking-widest uppercase mb-6">
                <Code2 className="w-3.5 h-3.5" />
                Web Development — React & WordPress
              </div>
            </FadeIn>

            <FadeIn delay={0.1} dir="left">
              <h1 className="heading text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold text-gray-950 leading-[1.07] tracking-tight mb-6">
                Websites that load{" "}
                <span className="relative text-purple-500">
                  in a blink,
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 260 10" fill="none">
                    <path d="M2 7 C70 2, 190 2, 258 7" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                rank on Google, and{" "}
                <span className="text-blue-500">turn visitors into customers</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18} dir="left">
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
                We build on two of the world's best platforms — React for speed and performance, WordPress for flexibility and control. Every site is mobile-first, SEO-ready, and built to grow your business.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} dir="left">
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-200 hover:bg-purple-600 hover:-translate-y-0.5 transition-all duration-200">
                  <Rocket className="w-4 h-4" /> Start Your Project
                </a>
                <a href="#platforms" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-gray-700 font-bold text-sm border border-gray-200 hover:border-purple-300 hover:-translate-y-0.5 transition-all duration-200">
                  <Globe className="w-4 h-4" /> View Our Work
                </a>
              </div>
            </FadeIn>

            {/* Platform chips */}
            <FadeIn delay={0.32} dir="left">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-xl px-4 py-2">
                  <Cpu className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-bold text-purple-700">React / Next.js</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2">
                  <Layout className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-bold text-blue-700">WordPress / WooCommerce</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right image collage */}
          <FadeIn delay={0.14} dir="right">
            <div className="relative h-[460px] hidden lg:block">
              {/* Main */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-purple-100 border-4 border-white">
                <img src={imgs.hero} alt="Web development" className="w-full h-full object-cover" />
              </div>
              {/* Secondary */}
              <div className="absolute bottom-4 left-0 w-56 h-56 rounded-3xl overflow-hidden shadow-xl shadow-blue-100 border-4 border-white">
                <img src={imgs.react} alt="React code" className="w-full h-full object-cover" />
              </div>
              {/* Badge: speed */}
              <div className="absolute top-32 left-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-green-100 z-10">
                <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="heading text-xs font-bold text-gray-900">Blazing Fast</div>
                  <div className="text-[10px] text-gray-400">Performance optimised</div>
                </div>
              </div>
              {/* Badge: SEO */}
              <div className="absolute bottom-28 right-2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-purple-100 z-10">
                <div className="w-8 h-8 rounded-xl bg-purple-500 flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="heading text-xs font-bold text-gray-900">SEO-Ready</div>
                  <div className="text-[10px] text-gray-400">Built in from day one</div>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-3 left-20 bg-gray-950 text-white rounded-2xl shadow-xl px-4 py-3 text-center z-10">
                <div className="heading text-xl font-extrabold text-purple-400">100%</div>
                <div className="text-[10px] font-semibold text-gray-400">Custom — no templates</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Tech ticker */}
      <TechTicker />
    </section>
  );
}

/* ─────────────────────────────────────────────
   OPENING STATEMENT
───────────────────────────────────────────── */
function Opening() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn dir="left">
            <div className="relative rounded-3xl overflow-hidden h-72 shadow-xl">
              <img src={imgs.desk} alt="Developer workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 to-blue-600/10" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <p className="heading font-bold text-gray-900 text-sm leading-tight">
                    "Every hour your website is slow or confusing, it's sending customers to your competitors."
                  </p>
                  <p className="text-xs text-purple-600 font-semibold mt-1">— PrioritizeLabs</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.08} dir="right">
              <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                Your website is working for your business right now —{" "}
                <span className="text-purple-500">or it's working against it.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.16} dir="right">
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>Most businesses in Agra still have websites that take six seconds to load on a phone, look broken on smaller screens, and have no clear reason for a visitor to take action. This is a fixable problem — and fixing it directly impacts how many calls you get.</p>
                <p>We don't build websites to tick a box. Every decision — the layout, the load time, the CTA, the SEO structure — is made with one outcome in mind: converting visitors into enquiries and customers.</p>
                <p className="font-semibold text-gray-800">Two platforms. Both world-class. We help you choose the right one.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PLATFORMS
───────────────────────────────────────────── */
function Platforms() {
  return (
    <section id="platforms" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">Platforms</span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Two platforms. Both best-in-class.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We help you choose the one that's genuinely right for your situation — not the one that's more profitable for us.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PlatformCard platform="react" />
          <PlatformCard platform="wordpress" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BASE INCLUDES
───────────────────────────────────────────── */
function BaseIncludes() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">Our Baseline</span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">This comes with every single website. No exceptions.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">These aren't add-ons. They're part of what it means to build a website properly.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {baseIncludes.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="group p-5 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-5 h-5 text-purple-600" strokeWidth={1.6} />
                  </div>
                  <h4 className="heading font-bold text-gray-900 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INDUSTRIES
───────────────────────────────────────────── */
function Industries() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">Industries</span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">We've built for these businesses. We understand what yours needs.</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <FadeIn key={ind.title} delay={0.05 * i}>
                <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-400 bg-white">
                  <div className="relative h-36 overflow-hidden">
                    <img src={ind.img} alt={ind.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-white" strokeWidth={1.6} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="heading font-bold text-gray-900 text-sm mb-1.5">{ind.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROCESS
───────────────────────────────────────────── */
function Process() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">Our Process</span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">From your brief to a live website — here's exactly how it works</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={0.07 * i}>
              <div className="group flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md shadow-purple-200">
                  <span className="heading font-extrabold text-white text-sm">{s.num}</span>
                </div>
                <div>
                  <h4 className="heading font-bold text-gray-900 mb-1">{s.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY US
───────────────────────────────────────────── */
function WhyUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn dir="left">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-4">Why PrioritizeLabs</span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              We build for performance, not just appearance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <FadeIn key={pt.title} delay={0.06 * i} dir="left">
                    <div className="group p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="w-9 h-9 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-2.5 transition-colors">
                        <Icon className="w-4 h-4 text-purple-600" strokeWidth={1.7} />
                      </div>
                      <h4 className="heading font-bold text-gray-900 text-xs mb-1">{pt.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{pt.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} dir="right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96 shadow-2xl shadow-purple-100">
                <img src={imgs.seo} alt="Web performance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl" />
              </div>
              {/* Floating review */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-purple-100 max-w-[200px]">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(n => <Star key={n} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-xs text-gray-700 font-medium leading-snug">"Our enquiries doubled in the first month after launch."</p>
                <p className="text-[10px] text-gray-400 mt-1">— Restaurant client, Agra</p>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-2xl shadow-xl p-4 text-center">
                <div className="heading text-2xl font-extrabold">6+</div>
                <div className="text-[10px] font-semibold opacity-80">Industries served</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">FAQ</span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900">Every question you're thinking about</h2>
          </div>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={0.04 * i}>
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="heading font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-purple-400 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div style={{ maxHeight: open === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p className="px-6 pb-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA
───────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-violet-700 py-20 md:py-28">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white opacity-5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <FadeIn>
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white! mb-4 leading-tight">
            Ready to build a website that actually works for your business?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-purple-200 text-lg mb-10 leading-relaxed">
            Tell us what you need — a brand new website, a redesign, or something more complex. Free conversation, clear picture of what we'd build and how long it would take.
          </p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7">
            <a href="https://wa.me/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold text-sm shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <Rocket className="w-4 h-4" /> Start Your Project
            </a>
            <a href="https://wa.me/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur text-white font-bold text-sm border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
            </a>
          </div>
          <p className="text-purple-300 text-xs">React & WordPress · Mobile-First · SEO-Ready · Based in Agra, serving clients across India</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function WebDevPage() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Opening />
      <Platforms />
      <BaseIncludes />
      <Industries />
      <Process />
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  );
}