"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Paintbrush2, Video, ArrowUpRight, Sparkles, TrendingUp, LucidePaintbrush2, Cpu } from "lucide-react";
import { useCTAModal } from "../hooks/Usectamodal";

/* ─── Data ─────────────────────────────────────────────────────── */



const services = [
  {
    id: "01",
    title: "Growth Marketing",
    subtitle: "Fill your pipeline",
    desc: "Performance campaigns, social media, SEO, and lead generation — every channel connected, every rupee tracked back to revenue.",
    icon: TrendingUp,
    accent: "violet",
    features: ["Performance Ads", "SEO & Lead Gen", "ROI Reporting"],
    link: "/services/growth-marketing",
  },
  {
    id: "02",
    title: "Creative Production",
    subtitle: "Build brand equity",
    desc: "Scroll-stopping content that makes your brand unforgettable — graphics, reels, video, and campaigns built for the platforms your audience actually uses.",
    icon: LucidePaintbrush2,
    accent: "indigo",
    features: ["Reels & Video", "Brand Design", "Content Strategy"],
    link: "/services/creative-services",
  },
  {
    id: "03",
    title: "Technology & Automation",
    subtitle: "Scale without friction",
    desc: "Websites, web apps, and custom automations that work while you sleep — built to grow with your business, not hold it back.",
    icon: Cpu,
    accent: "fuchsia",
    features: ["Web & App Dev", "Workflow Automation", "No-Code & Custom"],
    link: "/services/technology",
  },
];

const accents = {
  violet: {
    glow: "rgba(139,92,246,0.25)",
    border: "rgba(139,92,246,0.35)",
    hoverBorder: "rgba(139,92,246,0.7)",
    pill: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    icon: "text-violet-400",
    iconBg: "bg-violet-500/10",
    line: "from-violet-600 via-violet-400 to-transparent",
    link: "text-violet-400 hover:text-violet-200",
    num: "text-violet-900",
    numHover: "group-hover:text-violet-700",
  },
  indigo: {
    glow: "rgba(99,102,241,0.25)",
    border: "rgba(99,102,241,0.35)",
    hoverBorder: "rgba(99,102,241,0.7)",
    pill: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    icon: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    line: "from-indigo-600 via-indigo-400 to-transparent",
    link: "text-indigo-400 hover:text-indigo-200",
    num: "text-indigo-900",
    numHover: "group-hover:text-indigo-700",
  },
  fuchsia: {
    glow: "rgba(217,70,239,0.2)",
    border: "rgba(217,70,239,0.3)",
    hoverBorder: "rgba(217,70,239,0.6)",
    pill: "bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20",
    icon: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/10",
    line: "from-fuchsia-600 via-fuchsia-400 to-transparent",
    link: "text-fuchsia-400 hover:text-fuchsia-200",
    num: "text-fuchsia-900",
    numHover: "group-hover:text-fuchsia-700",
  },
};

/* ─── Card ─────────────────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const a = accents[service.accent];
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${a.border}`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: `0 0 0 0 ${a.glow}`,
        transition: "box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease",
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 24px 60px ${a.glow}, 0 0 0 1px ${a.hoverBorder}`,
        transition: { duration: 0.3 },
      }}
    >
      {/* Animated top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r ${a.line} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
      />

      {/* Faint inner glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${a.glow} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Number */}
        <span
          className={`absolute top-7 right-7 text-5xl font-black leading-none select-none transition-colors duration-300 ${a.num} ${a.numHover}`}
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {service.id}
        </span>

        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-7 ${a.iconBg} ${a.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold leading-tight text-white mb-1">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-white/40 mb-4">{service.subtitle}</p>

        {/* Desc */}
        <p className="text-sm leading-relaxed text-white/50 mb-6 flex-1">{service.desc}</p>

        {/* Pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          {service.features.map((f) => (
            <span
              key={f}
              className={`text-xs font-medium px-3 py-1 rounded-full ${a.pill}`}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={service.link}
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-3 ${a.link}`}
        >
          Explore service
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45 duration-200" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */
export default function Services() {
  const { openModal } = useCTAModal();
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden bg-black text-white">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,#2d1060_0%,transparent_70%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Side ambient glows */}
      <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-800/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-200px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-fuchsia-900/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div ref={headingRef} className="mb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-xs font-medium tracking-widest uppercase text-violet-200">
              Services
            </span>
          </motion.div>

          {/* Heading — stacked asymmetric treatment */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight"
            >
              {/* <span className="block text-white">Our Core</span> */}
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
               Your Complete Growth Stack
              </span>
            </motion.h2>
          </div>

          {/* Subtext + horizontal rule */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <p className="text-base leading-relaxed text-white/45 max-w-lg">
             Three capabilities, one team. No juggling vendors. No gaps in your strategy.
            </p>

            {/* Inline stat pair */}
            <div className="flex items-center gap-8 shrink-0">
              {[["500+", "Projects"], ["98%", "Retention"]].map(([val, label]) => (
                <div key={label} className="text-right">
                  <div className="text-2xl font-black text-white">{val}</div>
                  <div className="text-xs text-white/35 tracking-wider uppercase">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Thin divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-[1px] bg-gradient-to-r from-violet-500/40 via-white/10 to-transparent origin-left"
          />
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/[0.06]"
        >
          <div>
            <p className="text-sm text-white/40">Can&apos;t find what you&apos;re looking for?</p>
            <p className="text-sm text-white/60 mt-0.5">
              We build custom solutions tailored to your exact goals.
            </p>
          </div>

          <button
            onClick={() => openModal("Services Section")}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-violet-100 shrink-0"
          >
            Let&apos;s Discuss Your Project
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}