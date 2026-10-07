"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Zap,
  ShieldCheck,
} from "lucide-react";

import { useCTAModal } from "../hooks/Usectamodal";
import { useHydrated } from "../hooks/useHydrated";

import CircuitBackground from "./CircuitBackground";
import AICore from "./AICore";

export default function HeroSection() {
  const mounted = useHydrated();
  const { openModal } = useCTAModal();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useTransform(springY, [-200, 200], [10, -10]);
  const rotateY = useTransform(springX, [-200, 200], [-10, 10]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-[#03030A] text-white"
    >
      {/* Background */}
      <CircuitBackground />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative z-20 mx-auto flex flex-col items-center justify-center gap-10 px-6 md:px-16 py-10 md:py-16 lg:flex-row">
        {/* LEFT */}

        <div className="w-full lg:w-[52%]">
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />

            <span className="text-sm text-violet-100">
              AI Powered Growth Systems
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-8 text-[3.4rem] font-black leading-[0.92] tracking-tight md:text-[5rem]"
          >
            Growth,
            <br />

            <span className="bg-gradient-to-t from-purple-700 to-purple-300 bg-clip-text text-transparent md:text-[4rem]">
              Engineered by <span className="underline underline-offset-8">AI</span>.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
          >
            AI-powered marketing systems built to generate predictable
            growth, qualified leads, and measurable revenue.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => openModal("Hero")}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-sm font-semibold transition-all duration-500 hover:scale-105"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <span className="relative flex items-center justify-center gap-2">
                Get Free Strategy Session

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </button>

            <a
              href="/portfolio"
              className="group rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-semibold backdrop-blur-xl transition duration-500 hover:border-cyan-400/50 hover:bg-cyan-500/10"
            >
              <span className="flex items-center justify-center gap-2">
                View Portfolio

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          </motion.div>

          {/* Features */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              {
                icon: Cpu,
                title: "AI First",
              },
              {
                icon: Zap,
                title: "Fast Scaling",
              },
              {
                icon: ShieldCheck,
                title: "ROI Focused",
              },
            ].map((item, i) => (
              <motion.div
                whileHover={{
                  y: -6,
                }}
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-violet-500/5 flex items-center justify-center text-center gap-2"
              >
                <item.icon className="h-6 w-6 text-violet-400 transition duration-500 group-hover:scale-110" />

                <h3 className="font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          className="hidden relative sm:flex w-full items-center justify-center lg:w-[48%]"
        >
          <AICore mounted={mounted} />
        </motion.div>
      </div>
    </section>
  );
}


// "use client";

// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   Zap,
//   Cpu,
//   TrendingUp,
//   BarChart3,
//   Sparkles,
//   Activity,
//   Target,
// } from "lucide-react";
// import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
// import { useCTAModal } from "../hooks/Usectamodal";
// import CTAModal from "./CTAModal";

// // Display face for headings, utility face for HUD labels/readouts.
// // Body copy inherits whatever sans your app already loads.
// const display = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-display",
// });

// const mono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });

// // Deterministic pseudo-random positions so server/client render identically.
// const STARS = Array.from({ length: 70 }, (_, i) => ({
//   id: i,
//   top: ((i * 73.137) % 100).toFixed(2),
//   left: ((i * 113.509) % 100).toFixed(2),
//   size: i % 5 === 0 ? 2 : i % 3 === 0 ? 1.5 : 1,
//   opacity: (((i * 41) % 60) + 20) / 100,
//   twinkleDuration: 2 + (i % 5),
// }));

// const CAPABILITIES = [
//   { icon: Sparkles, label: "Strategy" },
//   { icon: Zap, label: "Creative" },
//   { icon: Activity, label: "Analytics" },
//   { icon: Target, label: "Scale" },
// ];

// export default function HeroSection() {
//   const [mounted, setMounted] = useState(false);
//   const { isOpen, source, openModal, closeModal } = useCTAModal();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Subtle mouse-parallax tilt on the visual cluster only — scoped to the
//   // right column so it never affects layout or text readability.
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
//   const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });
//   const rotateX = useTransform(springY, [-150, 150], [6, -6]);
//   const rotateY = useTransform(springX, [-150, 150], [-6, 6]);

//   function handleMove(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     mouseX.set(e.clientX - rect.left - rect.width / 2);
//     mouseY.set(e.clientY - rect.top - rect.height / 2);
//   }

//   function resetTilt() {
//     mouseX.set(0);
//     mouseY.set(0);
//   }

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-black text-white">
//       <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

//       {/* ── Base gradient ── */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,#2d1060_0%,#0d0520_40%,#000000_100%)]" />

//       {/* ── Circuit texture ── */}
//       <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden="true">
//         <defs>
//           <pattern id="circuitGrid" width="140" height="140" patternUnits="userSpaceOnUse">
//             <path d="M0 70 H45 M95 70 H140 M70 0 V45 M70 95 V140" stroke="#8b5cf6" strokeWidth="1" fill="none" />
//             <path d="M45 70 L60 70 L60 45 L70 45" stroke="#8b5cf6" strokeWidth="1" fill="none" />
//             <path d="M95 70 L80 70 L80 95 L70 95" stroke="#22d3ee" strokeWidth="1" fill="none" />
//             <circle cx="70" cy="70" r="2.5" fill="#8b5cf6" />
//             <circle cx="60" cy="45" r="1.5" fill="#22d3ee" />
//             <circle cx="80" cy="95" r="1.5" fill="#8b5cf6" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#circuitGrid)" />
//       </svg>

//       {/* ── Stars ── */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {STARS.map((star) => (
//           <motion.div
//             key={star.id}
//             className="absolute rounded-full bg-white"
//             style={{
//               top: `${star.top}%`,
//               left: `${star.left}%`,
//               width: `${star.size}px`,
//               height: `${star.size}px`,
//               opacity: star.opacity,
//             }}
//             animate={
//               mounted
//                 ? { opacity: [star.opacity, star.opacity * 0.2, star.opacity], scale: [1, 1.4, 1] }
//                 : {}
//             }
//             transition={{
//               duration: star.twinkleDuration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: (star.id * 0.07) % 3,
//             }}
//           />
//         ))}
//       </div>

//       {/* ── Ambient glow ── */}
//       <div className="absolute top-[-100px] right-[10%] h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[170px] pointer-events-none" />
//       <div className="absolute bottom-[-120px] right-[6%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

//       {/* ── One-time boot-up scan sweep ── */}
//       <motion.div
//         aria-hidden="true"
//         initial={{ y: "-100%", opacity: 0 }}
//         animate={mounted ? { y: "100vh", opacity: [0, 0.5, 0] } : {}}
//         transition={{ duration: 2.2, ease: "easeInOut" }}
//         className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent motion-reduce:hidden"
//       />

//       {/* ── HUD corner brackets ── */}
//       <div className="pointer-events-none absolute left-4 top-4 z-10 hidden h-8 w-8 border-l border-t border-violet-400/30 sm:block" />
//       <div className="pointer-events-none absolute right-4 top-4 z-10 hidden h-8 w-8 border-r border-t border-violet-400/30 sm:block" />
//       <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden h-8 w-8 border-b border-l border-cyan-400/20 sm:block" />
//       <div className="pointer-events-none absolute bottom-4 right-4 z-10 hidden h-8 w-8 border-b border-r border-cyan-400/20 sm:block" />

//       {/* ══════════════════════════════════════════
//           MAIN LAYOUT
//       ══════════════════════════════════════════ */}
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-center px-6 lg:px-6 py-16 gap-12 lg:gap-6">

//         {/* ── LEFT — content ── */}
//         <div className="flex flex-col justify-center lg:w-[56%] text-left">

//           {/* Eyebrow / status chip */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55 }}
//             className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60 motion-reduce:animate-none" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
//             </span>
//             <Zap className="h-3.5 w-3.5 text-violet-300" />
//             <span className={`${mono.className} text-[11px] font-medium uppercase tracking-[0.15em] text-violet-100`}>
//               Agra&apos;s #1 AI-Powered Marketing Agency
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className={`${display.className} text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.03] tracking-tight`}
//           >
//             <span className="block text-white">Growth,</span>
//             <span className="block bg-gradient-to-r from-violet-300 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
//               Engineered by AI.
//             </span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.15, duration: 0.7 }}
//             className="mt-7 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
//           >
//             From scroll-stopping creative to data-driven campaigns — PrioritizeLabs
//             is the AI-engineered growth partner built to move your numbers, not just your feed.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.25, duration: 0.7 }}
//             className="mt-9 flex flex-col gap-4 sm:flex-row"
//           >
//             <button
//               onClick={() => openModal("Hero Section")}
//               className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
//             >
//               <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//               <span className="relative">Get My Free Strategy Session</span>
//               <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//             <a
//               href="/portfolio"
//               className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
//             >
//               See Our Work
//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>
//           </motion.div>

//           {/* Stats strip — the only stats source on mobile, where the dashboard is hidden */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.7 }}
//             className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl"
//           >
//             <span className={`${mono.className} text-xs text-gray-400 sm:text-sm`}>
//               <b className="text-white">500+</b> Projects Delivered
//             </span>
//             <span className="text-violet-500">·</span>
//             <span className={`${mono.className} text-xs text-gray-400 sm:text-sm`}>
//               <b className="text-white">98%</b> Client Satisfaction
//             </span>
//             <span className="text-violet-500">·</span>
//             <span className={`${mono.className} text-xs text-gray-400 sm:text-sm`}>
//               <b className="text-white">₹10Cr+</b> Ad Spend Managed
//             </span>
//             <span className="hidden text-violet-500 sm:inline">·</span>
//             <span className={`${mono.className} hidden text-xs text-gray-400 sm:inline sm:text-sm`}>
//               Trusted Across Agra, Mathura &amp; Delhi NCR
//             </span>
//           </motion.div>
//         </div>

//         {/* ── RIGHT — The Growth Engine (hidden on mobile) ── */}
//         <div
//           onMouseMove={handleMove}
//           onMouseLeave={resetTilt}
//           className="relative hidden min-h-[580px] items-center justify-center lg:flex lg:w-[44%]"
//         >
//           <motion.div
//             style={{ rotateX, rotateY, transformPerspective: 1200 }}
//             className="relative flex h-full w-full items-center justify-center"
//           >
//             {/* Circuit traces linking the core to the metrics panel and capability rail */}
//             <svg
//               viewBox="0 0 800 600"
//               preserveAspectRatio="xMidYMid slice"
//               className="pointer-events-none absolute inset-0 h-full w-full"
//               aria-hidden="true"
//             >
//               <defs>
//                 <linearGradient id="traceGrad" x1="0" y1="0" x2="1" y2="1">
//                   <stop offset="0%" stopColor="#8b5cf6" />
//                   <stop offset="100%" stopColor="#22d3ee" />
//                 </linearGradient>
//                 <filter id="traceGlow" x="-100%" y="-100%" width="300%" height="300%">
//                   <feGaussianBlur stdDeviation="2.5" result="blur" />
//                   <feMerge>
//                     <feMergeNode in="blur" />
//                     <feMergeNode in="SourceGraphic" />
//                   </feMerge>
//                 </filter>
//               </defs>

//               <path id="traceToPanel" d="M 400 300 Q 300 380 220 430 L 150 465" fill="none" stroke="url(#traceGrad)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="7 5" />
//               <path id="traceToRail" d="M 400 300 Q 500 220 590 160 L 650 130" fill="none" stroke="url(#traceGrad)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="7 5" />
//               <path d="M400 300 L400 40" stroke="#8b5cf6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" />

//               <circle r="3" fill="#22d3ee" filter="url(#traceGlow)">
//                 <animateMotion dur="3s" repeatCount="indefinite" begin="0s">
//                   <mpath href="#traceToPanel" />
//                 </animateMotion>
//               </circle>
//               <circle r="3" fill="#8b5cf6" filter="url(#traceGlow)">
//                 <animateMotion dur="3.4s" repeatCount="indefinite" begin="0.8s">
//                   <mpath href="#traceToRail" />
//                 </animateMotion>
//               </circle>
//             </svg>

//             {/* Capability rail — top-right, static entrance only, no infinite motion */}
//             <div className="absolute right-0 top-[6%] z-20 flex flex-col gap-2">
//               {CAPABILITIES.map(({ icon: Icon, label }, i) => (
//                 <motion.div
//                   key={label}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
//                   className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-3.5 backdrop-blur-xl"
//                 >
//                   <Icon className="h-3 w-3 text-cyan-300" />
//                   <span className={`${mono.className} text-[10px] uppercase tracking-[0.12em] text-gray-300`}>
//                     {label}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Reactor core */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
//               className="relative z-10 flex h-[260px] w-[260px] items-center justify-center xl:h-[320px] xl:w-[320px]"
//             >
//               <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-[spin_50s_linear_infinite] motion-reduce:animate-none">
//                 <circle cx="100" cy="100" r="92" fill="none" stroke="#8b5cf6" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 6" />
//                 {Array.from({ length: 24 }).map((_, i) => (
//                   <line
//                     key={i}
//                     x1="100" y1="6" x2="100" y2="14"
//                     stroke="#8b5cf6" strokeOpacity="0.4" strokeWidth="1.5"
//                     transform={`rotate(${(i / 24) * 360} 100 100)`}
//                   />
//                 ))}
//               </svg>

//               <svg viewBox="0 0 200 200" className="absolute inset-[10%] h-[80%] w-[80%] animate-[spin_35s_linear_infinite] [animation-direction:reverse] motion-reduce:animate-none">
//                 <circle cx="100" cy="100" r="88" fill="none" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="10 4" />
//               </svg>

//               <div className="absolute inset-[6%] animate-[spin_9s_linear_infinite] motion-reduce:animate-none">
//                 <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]" />
//               </div>
//               <div className="absolute inset-[16%] animate-[spin_14s_linear_infinite] [animation-direction:reverse] motion-reduce:animate-none">
//                 <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_8px_2px_rgba(139,92,246,0.7)]" />
//               </div>

//               <div className="absolute h-[55%] w-[55%] animate-pulse rounded-full bg-gradient-to-br from-violet-500/60 via-violet-700/50 to-black/40 blur-2xl [animation-duration:4s] motion-reduce:animate-none" />
//               <div className="absolute h-[38%] w-[38%] rounded-full bg-gradient-to-br from-violet-300 via-violet-600 to-black shadow-[0_0_90px_rgba(139,92,246,0.6)]" />
