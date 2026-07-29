"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { useCTAModal } from '../hooks/Usectamodal';
import CTAModal from "./CTAModal";
import { GiGrowth } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";



// Solution: Define positions statically or generate them client-side after mount.
const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  top: ((i * 137.508) % 100).toFixed(2),   // deterministic pseudo-random via golden angle
  left: ((i * 97.3141) % 100).toFixed(2),
  duration: 3 + i * 0.2,
}));

// Static stars for the starry background — same reasoning
const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: ((i * 73.137) % 100).toFixed(2),
  left: ((i * 113.509) % 100).toFixed(2),
  size: i % 5 === 0 ? 2 : i % 3 === 0 ? 1.5 : 1,
  opacity: (((i * 41) % 60) + 20) / 100,
  twinkleDuration: 2 + (i % 5),
}));

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { isOpen, source, openModal, closeModal } = useCTAModal();


  // Prevent any hydration-sensitive animations from running until client is ready
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

      {/* ── Deep space gradient ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,#2d1060_0%,#0d0520_40%,#000000_100%)]" />

      {/* ── Grid Overlay ── */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ── Stars ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {STARS.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={
              mounted
                ? {
                    opacity: [star.opacity, star.opacity * 0.2, star.opacity],
                    scale: [1, 1.4, 1],
                  }
                : {}
            }
            transition={{
              duration: star.twinkleDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (star.id * 0.07) % 3,
            }}
          />
        ))}
      </div>

      {/* ── Ambient glow ── */}
      <div className="absolute top-[-100px] right-[15%] h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[10%] h-[400px] w-[400px] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />

      {/* ── Floating micro-particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/60"
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
            animate={
              mounted
                ? { opacity: [0.2, 0.9, 0.2], y: [-10, 10, -10] }
                : { opacity: 0.2 }
            }
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          MAIN LAYOUT  —  two columns, screen-height aware
      ══════════════════════════════════════════ */}
      <div className="relative z-10 mx-auto flex  max-w-7xl flex-col lg:flex-row lg:items-center px-6 lg:px-6 py-16 gap-12 lg:gap-8">

        {/* ── LEFT  — Textual content ── */}
        <div className="flex flex-col justify-center lg:w-[52%] text-left">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <BsGraphUpArrow className="h-4 w-4 text-violet-300" />
            <span className="text-sm font-medium tracking-wide text-violet-100">
              For founders who want revenue, not just reach.

            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold leading-[1.1] tracking-tight "
          >
            We Don&apos;t Just Market Your Brand,
            <span className="block bg-gradient-to-r from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent mt-1 text-5xl sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,4.5vw,4rem)] uppercase">
              We Engineer Its Growth.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            Most agencies give you content. We build you a system — strategy, creative, technology, and paid media working together — so every rupee you invest compounds into predictable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button
             onClick={() => openModal("Hero Section")}
            className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-violet-200">
              Get Your Free Growth Audit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
            href="/portfolio"
            className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10">
             See Our Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-xs text-gray-400 backdrop-blur-xl sm:text-sm"
          >
            <span>500+ Projects Delivered</span>
            <span className="text-violet-500">·</span>
            <span>98% Client Satisfaction</span>
            <span className="text-violet-500">·</span>
            <span>₹10 Lakh+ Ad Spend Managed</span>
            <span className="hidden text-violet-500 sm:inline">·</span>
            <span className="hidden sm:inline">Trusted Across India & Global Markets</span>
          </motion.div>
        </div>

        {/* ── RIGHT  — Orb + Floating Cards (hidden on mobile) ── */}
        <div className="hidden lg:flex lg:w-[48%] items-center justify-center relative min-h-[520px]">

          {/* Left stat card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="absolute left-0 top-[18%] z-20 w-[200px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-400">Performance</span>
              <div className="rounded-full bg-white/10 p-2">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold">500+</h3>
            <p className="mt-1 text-xs text-gray-400">Projects Successfully Delivered</p>
            <div className="mt-4 h-[5px] w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-400 to-violet-600" />
            </div>
          </motion.div>

          {/* Right stat card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute right-0 top-[38%] z-20 w-[200px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-400">Satisfaction</span>
              <div className="rounded-full bg-white/10 p-2">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold">98%</h3>
            <p className="mt-1 text-xs text-gray-400">Long-term Client Retention Rate</p>
            <div className="mt-4 h-[5px] w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-violet-400 to-violet-600" />
            </div>
          </motion.div>

          {/* Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={
                mounted
                  ? { y: [0, -18, 0], rotate: [0, 2, -2, 0] }
                  : {}
              }
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[380px] w-[380px] xl:h-[460px] xl:w-[460px]"
            >
              {/* Core orb */}
              <div className="absolute inset-0 rounded-[42%_58%_63%_37%/45%_40%_60%_55%] bg-gradient-to-br from-violet-300 via-violet-700 to-black shadow-[0_0_140px_rgba(139,92,246,0.5)] blur-[0.5px]" />
              {/* Highlight */}
              <div className="absolute left-[18%] top-[12%] h-[35%] w-[35%] rounded-full bg-white/20 blur-3xl" />
              {/* Depth shadow */}
              <div className="absolute bottom-[8%] right-[10%] h-[30%] w-[30%] rounded-full bg-black/50 blur-2xl" />
              {/* Outer glow ring */}
              <div className="absolute inset-[-8%] rounded-full border border-violet-500/10 blur-xl scale-110" />
              {/* Secondary shimmer */}
              <div className="absolute inset-[5%] rounded-full border border-violet-300/5 blur-md" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}