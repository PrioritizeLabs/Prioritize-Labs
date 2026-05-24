
// "use client"
// import { useState, useEffect } from 'react';
// import { Sparkles, ArrowRight, Zap, Rocket, Star, Play } from 'lucide-react';
// import { useCTAModal } from '../hooks/Usectamodal';
// import CTAModal from './CTAModal';

// const WORDS = ['Web Development', 'Social Media', 'Video Production', 'Brand Identity', 'Creative Strategy'];
// const wordColors = [
//   'from-violet-400 to-purple-400',
//   'from-blue-400 to-cyan-400',
//   'from-orange-400 to-red-400',
//   'from-pink-400 to-fuchsia-400',
//   'from-emerald-400 to-teal-400',
// ];

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayed, setDisplayed] = useState('');
//   const [typing, setTyping] = useState(true);
//   const { isOpen, source, openModal, closeModal } = useCTAModal();

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Typewriter
//   useEffect(() => {
//     const word = WORDS[wordIndex];
//     let t;
//     if (typing) {
//       if (displayed.length < word.length) {
//         t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 65);
//       } else {
//         t = setTimeout(() => setTyping(false), 1400);
//       }
//     } else {
//       if (displayed.length > 0) {
//         t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
//       } else {
//         setWordIndex((i) => (i + 1) % WORDS.length);
//         setTyping(true);
//       }
//     }
//     return () => clearTimeout(t);
//   }, [displayed, typing, wordIndex]);

//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center">
//       <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

//       {/* Subtle radial glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
//           style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
//         />
//       </div>

//       {/* Main content */}
//       <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 flex flex-col items-center text-center">

//         {/* Badge */}
//         <div className={`mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full transition-all duration-700 ${
//           isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
//         }`}>
//           <span className="flex h-2 w-2 relative flex-shrink-0">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
//           </span>
//           <Sparkles className="w-3.5 h-3.5 text-violet-400" />
//           <span className="text-sm text-violet-300 font-semibold tracking-wide">Crafting Digital Excellence</span>
//         </div>

//         {/* Heading */}
//         <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold mb-6 leading-[1.04] tracking-tight transition-all duration-700 delay-150 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//         }`}>
//           <span className="block text-white mb-1">Transform Your</span>
//           <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
//             Digital Presence
//           </span>
//         </h1>

//         {/* Typewriter */}
//         <div className={`mb-10 transition-all duration-700 delay-300 ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//         }`}>
//           <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-2">
//             Your complete creative partner for
//           </p>
//           <div className="flex items-center justify-center gap-1.5 h-9 sm:h-11">
//             <span className={`text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${wordColors[wordIndex]}`}>
//               {displayed}
//             </span>
//             <span
//               className="w-0.5 h-6 sm:h-8 bg-violet-400 rounded-full flex-shrink-0"
//               style={{ animation: 'blink 1s step-end infinite' }}
//             />
//           </div>
//         </div>

//         {/* CTAs */}
//         <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-14 sm:mb-16 transition-all duration-700 delay-[450ms] w-full max-w-md sm:max-w-none ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//         }`}>
//           <button
//             onClick={() => openModal("Hero Section")}
//             className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-violet-900/50 w-full sm:w-auto"
//           >
//             <span>Get Free Consultation</span>
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//           </button>
//           <a
//             href="/portfolio"
//             className="group inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg border border-white/10 hover:border-white/20 transition-all duration-200 w-full sm:w-auto"
//           >
//             <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/15 transition-colors flex-shrink-0">
//               <Play className="w-3 h-3 text-violet-400 ml-0.5" />
//             </span>
//             <span>View Our Work</span>
//           </a>
//         </div>

//         {/* Stats card */}
//         <div className={`w-full max-w-lg sm:max-w-2xl mx-auto mb-8 transition-all duration-700 delay-[550ms] ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//         }`}>
//           <div className="grid grid-cols-3 gap-0 divide-x divide-white/10 p-5 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
//             {[
//               { value: '500+', label: 'Projects Done', color: 'text-violet-400' },
//               { value: '98%', label: 'Satisfaction', color: 'text-purple-400' },
//               { value: '24/7', label: 'Support', color: 'text-fuchsia-400' },
//             ].map((stat, idx) => (
//               <div key={idx} className="text-center px-2 sm:px-4">
//                 <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
//                 <div className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Feature pills */}
//         <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-700 delay-[650ms] ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
//         }`}>
//           {[
//             { icon: Zap, label: 'Lightning Fast', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20 hover:bg-amber-400/15' },
//             { icon: Rocket, label: 'Innovative', color: 'text-violet-400', bg: 'bg-violet-400/10 border-violet-400/20 hover:bg-violet-400/15' },
//             { icon: Star, label: 'Award Winning', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20 hover:bg-purple-400/15' },
//           ].map(({ icon: Icon, label, color, bg }) => (
//             <div
//               key={label}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-200 cursor-default ${bg}`}
//             >
//               <Icon className={`w-4 h-4 ${color}`} />
//               <span className="text-sm text-gray-400 font-medium">{label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useMemo, useRef, useState, Suspense } from "react";
// import Link from "next/link";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, MeshDistortMaterial, Sphere, Html } from "@react-three/drei";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   ArrowRight,
//   Play,
//   BarChart3,
//   BrainCircuit,
//   Target,
//   TrendingUp,
// } from "lucide-react";
// import { useCTAModal } from "../hooks/Usectamodal";
// import CTAModal from "./CTAModal";

// const TYPING_WORDS = [
//   "AI Ads",
//   "Performance Marketing",
//   "SEO Growth",
//   "Social Media Campaigns",
//   "Creative Funnels",
// ];

// function AnimatedOrb() {
//   const meshRef = useRef();
//   useFrame((state) => {
//     if (!meshRef.current) return;
//     meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
//     meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
//   });

//   return (
//     <Float speed={2.5} rotationIntensity={1.8} floatIntensity={2.5}>
//       <Sphere ref={meshRef} args={[1.9, 128, 128]} scale={1.35}>
//         <MeshDistortMaterial
//           color="#e12afb"
//           emissive="#e12afb"
//           emissiveIntensity={1.2}
//           distort={0.45}
//           speed={2.2}
//           roughness={0.05}
//           metalness={0.9}
//         />
//       </Sphere>
//     </Float>
//   );
// }

// function HeroCanvas() {
//   return (
//     <div className="absolute inset-0 opacity-90 pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
//         <ambientLight intensity={1.4} />
//         <directionalLight position={[3, 3, 3]} intensity={2} />
//         <Suspense fallback={null}>
//           <AnimatedOrb />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// function FloatingCard({ icon: Icon, text, className }) {
//   return (
//     <motion.div
//       animate={{ y: [0, -14, 0] }}
//       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       className={`absolute hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 ${className}`}
//     >
//       <div className="rounded-xl bg-[#e12afb]/20 p-2">
//         <Icon className="h-5 w-5 text-[#e12afb]" />
//       </div>
//       <span className="text-sm text-white/85 font-medium">{text}</span>
//     </motion.div>
//   );
// }

// export default function Hero() {
//   const [visible, setVisible] = useState(false);
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayed, setDisplayed] = useState("");
//   const [typing, setTyping] = useState(true);
//   const { isOpen, source, openModal, closeModal } = useCTAModal();

//   useEffect(() => setVisible(true), []);

//   useEffect(() => {
//     const word = TYPING_WORDS[wordIndex];
//     let timer;
//     if (typing) {
//       if (displayed.length < word.length) {
//         timer = setTimeout(() => {
//           setDisplayed(word.slice(0, displayed.length + 1));
//         }, 70);
//       } else {
//         timer = setTimeout(() => setTyping(false), 1200);
//       }
//     } else {
//       if (displayed.length > 0) {
//         timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
//       } else {
//         setTyping(true);
//         setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [displayed, typing, wordIndex]);

//   const stats = useMemo(
//     () => [
//       "500+ Projects Delivered",
//       "98% Client Satisfaction",
//       "₹10Cr+ Ad Spend Managed",
//       "Agra • Mathura • Delhi NCR",
//     ],
//     []
//   );

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4">
//       <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

//       <HeroCanvas />

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,42,251,0.18),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.2),#000)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

//       <FloatingCard icon={BarChart3} text="ROAS Optimized Campaigns" className="top-[18%] left-[8%]" />
//       <FloatingCard icon={BrainCircuit} text="AI-Powered Automation" className="top-[35%] right-[8%]" />
//       <FloatingCard icon={Target} text="Conversion Funnel Engineering" className="bottom-[22%] left-[10%]" />
//       <FloatingCard icon={TrendingUp} text="Growth That Scales" className="bottom-[18%] right-[10%]" />

//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 mb-8"
//         >
//           <Sparkles className="h-4 w-4 text-[#e12afb]" />
//           <span className="text-sm font-medium text-[#f3b3ff]">
//             Agra's #1 AI-Powered Marketing Agency
//           </span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.15, duration: 0.8 }}
//           className="font-[neue-kaine] text-4xl md:text-6xl  font-bold leading-[0.95] tracking-[-0.04em] max-w-2xl mx-auto"
//         >
//           We Don&apos;t Just Market Your Brand.
//           <span className="block bg-gradient-to-r from-white via-[#f09cff] to-[#e12afb] bg-clip-text text-transparent">
//             We Engineer Its Growth.
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
//         >
//           From scroll-stopping creatives to data-driven ad campaigns — PrioritizeLabs is your complete digital partner, powered by AI and built for results that actually move the needle.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.45 }}
//           className="mt-6 h-10 flex items-center justify-center"
//         >
//           <span className="text-lg md:text-2xl font-semibold text-[#eab2f5]">
//             Scaling with {displayed}
//           </span>
//           <span className="ml-1 h-7 w-[3px] bg-[#e12afb] animate-pulse rounded-full" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <button
//             onClick={() => openModal("Hero Section")}
//             className="group inline-flex items-center gap-3 rounded-2xl bg-[#e12afb] hover:scale-105 px-8 py-4 font-semibold text-black transition-all duration-300 shadow-[0_0_40px_rgba(225,42,251,0.35)]"
//           >
//             <span>Get My Free Strategy Session</span>
//             <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//           </button>

//           <Link
//             href="/portfolio"
//             className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-xl px-8 py-4 font-semibold transition-all duration-300"
//           >
//             <Play className="h-4 w-4 text-[#e12afb]" />
//             <span>See Our Work</span>
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {stats.map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-5 text-sm md:text-base text-white/85 hover:border-[#e12afb]/40 transition-all"
//             >
//               {item}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// Hero.jsx
// "use client";

// import { useEffect, useRef, useState, Suspense } from "react";
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   ArrowRight,
//   Play,
//   BarChart3,
//   BrainCircuit,
//   Target,
//   TrendingUp,
// } from "lucide-react";
// import { useCTAModal } from "../hooks/Usectamodal";
// import CTAModal from "./CTAModal";

// const Canvas = dynamic(
//   () => import("@react-three/fiber").then((mod) => mod.Canvas),
//   { ssr: false }
// );

// const Float = dynamic(
//   () => import("@react-three/drei").then((mod) => mod.Float),
//   { ssr: false }
// );

// const Sphere = dynamic(
//   () => import("@react-three/drei").then((mod) => mod.Sphere),
//   { ssr: false }
// );

// const MeshDistortMaterial = dynamic(
//   () => import("@react-three/drei").then((mod) => mod.MeshDistortMaterial),
//   { ssr: false }
// );

// const TYPING_WORDS = [
//   "AI Advertising",
//   "Performance Marketing",
//   "SEO Growth",
//   "Conversion Funnels",
//   "Social Media Campaigns",
// ];

// function Orb() {
//   const meshRef = useRef(null);
//   const { useFrame } = require("@react-three/fiber");

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
//     meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
//   });

//   return (
//     <Float speed={2.2} rotationIntensity={1.4} floatIntensity={2.2}>
//       <Sphere ref={meshRef} args={[1.9, 128, 128]} scale={1.01}>
//         <MeshDistortMaterial
//           color="#e12afb"
//           emissive="#b517d4"
//           emissiveIntensity={1.9}
//           distort={0.42}
//           speed={2.1}
//           roughness={0.05}
//           metalness={0.88}
//         />
//       </Sphere>
//     </Float>
//   );
// }

// function HeroCanvas() {
//   return (
//     <div className="absolute inset-0 pointer-events-none opacity-90">
//       <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[3, 2, 5]} intensity={2.5} />
//         <pointLight position={[-3, -2, 2]} intensity={2} color="#e12afb" />
//         <Suspense fallback={null}>
//           <Orb />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// function FloatingCard({ icon: Icon, text, className, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: [0, -12, 0] }}
//       transition={{
//         opacity: { duration: 0.6, delay },
//         y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
//       }}
//       className={`absolute hidden xl:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl px-4 py-3 shadow-2xl ${className}`}
//     >
//       <div className="rounded-xl bg-[#e12afb]/20 p-2">
//         <Icon className="w-5 h-5 text-[#e12afb]" />
//       </div>
//       <span className="text-sm text-white/90 font-medium whitespace-nowrap">
//         {text}
//       </span>
//     </motion.div>
//   );
// }

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const [displayed, setDisplayed] = useState("");
//   const [typing, setTyping] = useState(true);
//   const [wordIndex, setWordIndex] = useState(0);

//   const { isOpen, source, openModal, closeModal } = useCTAModal();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const word = TYPING_WORDS[wordIndex];
//     let timer;

//     if (typing) {
//       if (displayed.length < word.length) {
//         timer = setTimeout(() => {
//           setDisplayed(word.slice(0, displayed.length + 1));
//         }, 70);
//       } else {
//         timer = setTimeout(() => setTyping(false), 1200);
//       }
//     } else {
//       if (displayed.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayed(displayed.slice(0, -1));
//         }, 35);
//       } else {
//         setTyping(true);
//         setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayed, typing, wordIndex]);

//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 bg-[#06040a] text-white">
//       <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,42,251,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.12),transparent_30%),linear-gradient(180deg,#090611_0%,#0b0815_50%,#05030a_100%)]" />

//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] opacity-60" />

//       <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(225,42,251,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />

//       {mounted && <HeroCanvas />}

//       <FloatingCard
//         icon={BarChart3}
//         text="ROAS Optimized Campaigns"
//         className="top-[18%] left-[7%]"
//         delay={0.2}
//       />

//       <FloatingCard
//         icon={BrainCircuit}
//         text="AI Growth Automation"
//         className="top-[34%] right-[7%]"
//         delay={0.4}
//       />

//             <FloatingCard
//         icon={Target}
//         text="Conversion Funnel Engineering"
//         className="bottom-[22%] left-[10%]"
//         delay={0.6}
//       />

//       <FloatingCard
//         icon={TrendingUp}
//         text="Predictable Revenue Scaling"
//         className="bottom-[18%] right-[9%]"
//         delay={0.8}
//       />

//       <div className="relative z-10 max-w-6xl mx-auto text-center py-24 md:py-32">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-2.5 mb-8"
//         >
//           <Sparkles className="w-4 h-4 text-[#e12afb]" />
//           <span className="text-sm md:text-base text-[#f3b3ff] font-medium">
//             Agra&apos;s #1 AI-Powered Marketing Agency
//           </span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.15, duration: 0.8 }}
//           className="font-[neue-kaine] text-4xl sm:text-5xl md:text-7xl lg:text-[6.2rem] leading-[0.92] tracking-[-0.045em] font-bold max-w-5xl mx-auto"
//         >
//           We Don&apos;t Just Market Your Brand.
//           <span className="block bg-gradient-to-r from-white via-[#ffb6ff] to-[#e12afb] bg-clip-text text-transparent">
//             We Engineer Its Growth.
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="mt-6 text-base sm:text-lg md:text-xl text-white/72 max-w-4xl mx-auto leading-relaxed px-2"
//         >
//           From scroll-stopping creatives to data-driven ad campaigns —
//           PrioritizeLabs is your complete digital partner, powered by AI and
//           built for results that actually move the needle.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.45 }}
//           className="mt-7 h-10 flex items-center justify-center"
//         >
//           <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0c3ff]">
//             Scaling with {displayed}
//           </span>

//           <span className="ml-1 h-7 w-[3px] rounded-full bg-[#e12afb] animate-pulse" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//           className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <button
//             onClick={() => openModal("Hero Section")}
//             className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#e12afb] hover:bg-[#f047ff] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(225,42,251,0.35)] w-full sm:w-auto"
//           >
//             <span>Get My Free Strategy Session</span>

//             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//           </button>

//           <Link
//             href="/portfolio"
//             className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 hover:bg-white/15 backdrop-blur-xl px-8 py-4 font-semibold transition-all duration-300 w-full sm:w-auto"
//           >
//             <Play className="w-4 h-4 text-[#e12afb]" />
//             <span>See Our Work</span>
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {[
//             "500+ Projects Delivered",
//             "98% Client Satisfaction",
//             "₹10Cr+ Ad Spend Managed",
//             "Trusted Across Agra, Mathura & NCR",
//           ].map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl px-5 py-5 text-sm md:text-base text-white/90 hover:border-[#e12afb]/40 transition-all"
//             >
//               {item}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   ArrowRight,
//   Play,
//   BarChart3,
//   BrainCircuit,
//   Target,
//   TrendingUp,
//   Zap,
//   Rocket,
//   Flame,
// } from "lucide-react";

// const TYPING_WORDS = [
//   "AI Advertising",
//   "Performance Marketing",
//   "SEO Growth",
//   "Conversion Funnels",
//   "Social Media Campaigns",
//   "Revenue Scaling",
// ];

// const METRICS = [
//   { label: "500+", desc: "Projects Delivered", icon: Rocket },
//   { label: "98%", desc: "Client Satisfaction", icon: Sparkles },
//   { label: "₹10Cr+", desc: "Ad Spend Managed", icon: TrendingUp },
//   { label: "24/7", desc: "AI Support", icon: Zap },
// ];

// const FEATURES = [
//   {
//     icon: BarChart3,
//     text: "ROAS Optimized",
//     desc: "Data-driven campaigns",
//     position: "top-[12%] left-[5%]",
//     delay: 0.1,
//   },
//   {
//     icon: BrainCircuit,
//     text: "AI Automation",
//     desc: "Smart optimization",
//     position: "top-[28%] right-[8%]",
//     delay: 0.3,
//   },
//   {
//     icon: Target,
//     text: "Conversion Focus",
//     desc: "Funnel engineering",
//     position: "bottom-[24%] left-[8%]",
//     delay: 0.5,
//   },
//   {
//     icon: Flame,
//     text: "Growth Engine",
//     desc: "Predictable scaling",
//     position: "bottom-[20%] right-[6%]",
//     delay: 0.7,
//   },
// ];

// // Animated SVG Orb Component
// function AnimatedOrb() {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-95">
//       <svg
//         className="w-full h-full max-w-2xl max-h-2xl animate-float-orb"
//         viewBox="0 0 400 400"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="8" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>

//           <radialGradient id="orbGradient" cx="35%" cy="35%">
//             <stop offset="0%" style={{ stopColor: "#f047ff", stopOpacity: 0.9 }} />
//             <stop offset="50%" style={{ stopColor: "#e12afb", stopOpacity: 0.6 }} />
//             <stop offset="100%" style={{ stopColor: "#b517d4", stopOpacity: 0.3 }} />
//           </radialGradient>

//           <filter id="distortion">
//             <feTurbulence
//               type="fractalNoise"
//               baseFrequency="0.02"
//               numOctaves="4"
//               result="noise"
//               seed="2"
//             />
//             <feDisplacementMap
//               in="SourceGraphic"
//               in2="noise"
//               scale="15"
//               xChannelSelector="R"
//               yChannelSelector="G"
//             />
//           </filter>

//           <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" style={{ stopColor: "#e12afb", stopOpacity: 0.8 }} />
//             <stop offset="50%" style={{ stopColor: "#6366f1", stopOpacity: 0.4 }} />
//             <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 0.2 }} />
//           </linearGradient>
//         </defs>

//         {/* Background glow circles */}
//         <circle
//           cx="200"
//           cy="200"
//           r="180"
//           fill="none"
//           stroke="url(#ringGradient)"
//           strokeWidth="1"
//           opacity="0.3"
//           className="animate-pulse-ring"
//         />
//         <circle
//           cx="200"
//           cy="200"
//           r="150"
//           fill="none"
//           stroke="url(#ringGradient)"
//           strokeWidth="0.5"
//           opacity="0.2"
//           className="animate-pulse-ring-2"
//         />

//         {/* Main distorted orb */}
//         <circle
//           cx="200"
//           cy="200"
//           r="120"
//           fill="url(#orbGradient)"
//           filter="url(#distortion)"
//           className="animate-orb-shift"
//           opacity="0.95"
//         />

//         {/* Inner highlight */}
//         <ellipse
//           cx="160"
//           cy="160"
//           rx="50"
//           ry="45"
//           fill="white"
//           opacity="0.4"
//           filter="url(#glow)"
//           className="animate-highlight-shift"
//         />

//         {/* Rotating accent rings */}
//         <circle
//           cx="200"
//           cy="200"
//           r="130"
//           fill="none"
//           stroke="#e12afb"
//           strokeWidth="2"
//           opacity="0.4"
//           className="animate-spin-slow"
//           style={{ filter: "drop-shadow(0 0 20px #e12afb)" }}
//         />

//         {/* Floating particles */}
//         <g className="animate-float-particles">
//           <circle cx="280" cy="120" r="3" fill="#e12afb" opacity="0.6" />
//           <circle cx="320" cy="200" r="2.5" fill="#6366f1" opacity="0.5" />
//           <circle cx="280" cy="280" r="2" fill="#ec4899" opacity="0.4" />
//           <circle cx="120" cy="320" r="2.5" fill="#e12afb" opacity="0.5" />
//           <circle cx="80" cy="200" r="3" fill="#6366f1" opacity="0.6" />
//           <circle cx="120" cy="80" r="2" fill="#ec4899" opacity="0.4" />
//         </g>

//         {/* Pulsing core */}
//         <circle
//           cx="200"
//           cy="200"
//           r="40"
//           fill="#e12afb"
//           opacity="0.8"
//           filter="url(#glow)"
//           className="animate-pulse-core"
//         />
//       </svg>

//       <style jsx>{`
//         @keyframes float-orb {
//           0%, 100% {
//             transform: translateY(0px) rotateX(0deg) rotateY(0deg);
//           }
//           33% {
//             transform: translateY(-20px) rotateX(20deg) rotateY(20deg);
//           }
//           66% {
//             transform: translateY(-10px) rotateX(-15deg) rotateY(-25deg);
//           }
//         }

//         @keyframes orb-shift {
//           0%, 100% {
//             filter: url(#distortion);
//             opacity: 0.95;
//           }
//           50% {
//             opacity: 0.98;
//           }
//         }

//         @keyframes highlight-shift {
//           0%, 100% {
//             cx: 160;
//             cy: 160;
//           }
//           50% {
//             cx: 170;
//             cy: 150;
//           }
//         }

//         @keyframes spin-slow {
//           0% {
//             transform: rotate(0deg);
//             transform-origin: 200px 200px;
//           }
//           100% {
//             transform: rotate(360deg);
//             transform-origin: 200px 200px;
//           }
//         }

//         @keyframes pulse-ring {
//           0%, 100% {
//             r: 180;
//             opacity: 0.3;
//           }
//           50% {
//             r: 185;
//             opacity: 0.1;
//           }
//         }

//         @keyframes pulse-ring-2 {
//           0%, 100% {
//             r: 150;
//             opacity: 0.2;
//           }
//           50% {
//             r: 160;
//             opacity: 0.05;
//           }
//         }

//         @keyframes pulse-core {
//           0%, 100% {
//             r: 40;
//             opacity: 0.8;
//           }
//           50% {
//             r: 50;
//             opacity: 0.6;
//           }
//         }

//         @keyframes float-particles {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-30px);
//           }
//         }

//         .animate-float-orb {
//           animation: float-orb 8s ease-in-out infinite;
//         }

//         .animate-orb-shift {
//           animation: orb-shift 6s ease-in-out infinite;
//         }

//         .animate-highlight-shift {
//           animation: highlight-shift 5s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         .animate-pulse-ring {
//           animation: pulse-ring 4s ease-in-out infinite;
//         }

//         .animate-pulse-ring-2 {
//           animation: pulse-ring-2 5s ease-in-out infinite;
//         }

//         .animate-pulse-core {
//           animation: pulse-core 3s ease-in-out infinite;
//         }

//         .animate-float-particles {
//           animation: float-particles 6s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Enhanced Floating Card with more details
// function FeatureCard({
//   icon: Icon,
//   text,
//   desc,
//   position,
//   delay = 0,
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8, y: 20 }}
//       animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
//       whileHover={{ scale: 1.08, y: -12 }}
//       transition={{
//         opacity: { duration: 0.6, delay },
//         scale: { duration: 0.6, delay },
//         y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
//       }}
//       className={`absolute hidden lg:flex flex-col gap-1 rounded-2xl border border-white/15 bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-3xl px-5 py-4 shadow-2xl hover:border-[#e12afb]/40 transition-all duration-300 ${position} group cursor-pointer`}
//     >
//       <div className="flex items-center gap-2.5">
//         <div className="rounded-lg bg-gradient-to-br from-[#e12afb]/30 to-[#b517d4]/20 p-2.5 group-hover:from-[#e12afb]/40 group-hover:to-[#b517d4]/30 transition-all">
//           <Icon className="w-4.5 h-4.5 text-[#e12afb]" />
//         </div>
//         <span className="text-sm font-semibold text-white/95 whitespace-nowrap">
//           {text}
//         </span>
//       </div>
//       <span className="text-xs text-white/60 font-medium pl-11">
//         {desc}
//       </span>
//     </motion.div>
//   );
// }

// // Animated text cursor
// function TypedText({ words }) {
//   const [displayed, setDisplayed] = useState("");
//   const [typing, setTyping] = useState(true);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const word = words[wordIndex];
//     let timer;

//     if (typing) {
//       if (displayed.length < word.length) {
//         timer = setTimeout(() => {
//           setDisplayed(word.slice(0, displayed.length + 1));
//         }, 60);
//       } else {
//         timer = setTimeout(() => setTyping(false), 1500);
//       }
//     } else {
//       if (displayed.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayed(displayed.slice(0, -1));
//         }, 30);
//       } else {
//         setTyping(true);
//         setWordIndex((prev) => (prev + 1) % words.length);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayed, typing, wordIndex, words]);

//   return (
//     <div className="flex items-center justify-center gap-3">
//       <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f0c3ff] via-[#e12afb] to-[#b517d4] bg-clip-text text-transparent">
//         {displayed}
//       </span>
//       <motion.span
//         animate={{ opacity: [1, 0.4, 1] }}
//         transition={{ duration: 1.2, repeat: Infinity }}
//         className="w-1 h-7 md:h-8 rounded-full bg-gradient-to-b from-[#e12afb] to-[#b517d4]"
//       />
//     </div>
//   );
// }

// // Metrics Counter Component
// function MetricCard({ label, desc, icon: Icon }) {
//   const [count, setCount] = useState(0);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     if (!inView) return;

//     const numValue = parseInt(label.replace(/[^0-9]/g, ""));
//     if (isNaN(numValue)) return;

//     let current = 0;
//     const increment = numValue / 30;
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= numValue) {
//         setCount(numValue);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, 30);

//     return () => clearInterval(timer);
//   }, [label, inView]);

//   return (
//     <motion.div
//       onViewportEnter={() => setInView(true)}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -4 }}
//       className="group relative rounded-2xl border border-white/12 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-2xl px-6 py-8 hover:border-[#e12afb]/30 transition-all duration-300 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-[#e12afb]/0 via-[#e12afb]/5 to-[#e12afb]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
//       <div className="relative">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-[#ffb6ff] to-[#e12afb] bg-clip-text text-transparent">
//             {count}{label.replace(/[0-9]/g, "")}
//           </span>
//           <Icon className="w-6 h-6 text-[#e12afb]/80 group-hover:text-[#e12afb] transition-colors" />
//         </div>
//         <p className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wide">
//           {desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// // Main Hero Component
// export default function Hero({ onCtaClick }) {
//   const [mounted, setMounted] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     setMounted(true);

//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 bg-[#06040a] text-white pt-20 md:pt-0">
//       {/* Animated Background Layers */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Gradient Mesh Background */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,42,251,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.15),transparent_35%),linear-gradient(180deg,#090611_0%,#0b0815_50%,#05030a_100%)]" />

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-70" />

//         {/* Dot Pattern */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(225,42,251,0.12)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />

//         {/* Animated Orbs */}
//         <motion.div
//           animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-10 -right-40 w-80 h-80 bg-gradient-to-br from-[#e12afb]/20 to-transparent rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#6366f1]/15 to-transparent rounded-full blur-3xl"
//         />
//       </div>

//       {/* 3D Canvas Background */}
//       {mounted && <HeroCanvas />}

//       {/* Feature Cards */}
//       {FEATURES.map((feature) => (
//         <FeatureCard key={feature.text} {...feature} />
//       ))}

//       {/* Main Content */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 max-w-5xl mx-auto text-center"
//         style={{ y: scrollY * 0.5 }}
//       >
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-gradient-to-r from-white/12 to-white/5 backdrop-blur-2xl px-6 py-3 mb-8 hover:border-[#e12afb]/40 transition-all cursor-pointer group"
//         >
//           <motion.div
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <Sparkles className="w-4 h-4 text-[#e12afb]" />
//           </motion.div>
//           <span className="text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wide">
//             ✨ Agra's #1 AI-Powered Marketing Agency
//           </span>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
//           className="font-[neue-kaine] text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-[-0.03em] font-black max-w-6xl mx-auto mb-4"
//         >
//           <span className="block">We Don&apos;t Just Market.</span>
//           <span className="block bg-gradient-to-r from-[#ffb6ff] via-[#e12afb] to-[#b517d4] bg-clip-text text-transparent">
//             We Engineer Growth.
//           </span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.35, duration: 0.7 }}
//           className="mt-6 text-lg sm:text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-light px-4"
//         >
//           Data-driven campaigns. AI automation. Results that move the needle.
//           Your complete digital partner.
//         </motion.p>

//         {/* Typing Animation Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//           className="mt-10 mb-12"
//         >
//           <div className="inline-block">
//             <p className="text-white/70 text-sm md:text-base font-medium mb-3 uppercase tracking-wide">
//               Scaling with
//             </p>
//             <TypedText words={TYPING_WORDS} />
//           </div>
//         </motion.div>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.65, duration: 0.7 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//         >
//           <button
//             onClick={() => onCtaClick?.("Hero Section")}
//             className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#e12afb] to-[#b517d4] hover:from-[#f047ff] hover:to-[#d029e8] px-8 sm:px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 shadow-[0_0_60px_rgba(225,42,251,0.4)] w-full sm:w-auto overflow-hidden"
//           >
//             <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
//             <span className="relative">Free Strategy Session</span>
//             <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1.5" />
//           </button>

//           <Link
//             href="/portfolio"
//             className="group relative inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/20 bg-white/8 hover:bg-white/12 hover:border-[#e12afb]/50 backdrop-blur-xl px-8 sm:px-10 py-4 font-bold transition-all duration-300 w-full sm:w-auto"
//           >
//             <Play className="w-5 h-5 text-[#e12afb] transition-transform group-hover:scale-110" />
//             <span>View Our Work</span>
//           </Link>
//         </motion.div>

//         {/* Metrics Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
//         >
//           {METRICS.map((metric) => (
//             <MetricCard key={metric.label} {...metric} />
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
//       >
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-xs text-white/50 font-semibold uppercase tracking-widest">
//             Scroll to explore
//           </span>
//           <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-1.5 h-2 rounded-full bg-[#e12afb]"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   ArrowRight,
//   Play,
//   BarChart3,
//   BrainCircuit,
//   Target,
//   TrendingUp,
// } from "lucide-react";
// import { useCTAModal } from "../hooks/Usectamodal";
// import CTAModal from "./CTAModal";

// const TYPING_WORDS = [
//   "AI Advertising",
//   "Performance Marketing",
//   "SEO Growth",
//   "Conversion Funnels",
//   "Social Media Campaigns",
// ];

// function MetallicOrb() {
//   return (
//     <motion.div
//       animate={{
//         rotate: [0, 180, 360],
//         scale: [1, 1.04, 1],
//       }}
//       transition={{
//         rotate: {
//           duration: 28,
//           repeat: Infinity,
//           ease: "linear",
//         },
//         scale: {
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         },
//       }}
//       className="absolute inset-0 flex items-center justify-center pointer-events-none"
//     >
//       <div className="relative w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] opacity-80">
//         <svg
//           viewBox="0 0 800 800"
//           className="w-full h-full drop-shadow-[0_0_80px_rgba(225,42,251,0.18)]"
//         >
//           <defs>
//             <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#ffffff" />
//               <stop offset="18%" stopColor="#d1d5db" />
//               <stop offset="36%" stopColor="#6b7280" />
//               <stop offset="52%" stopColor="#f3f4f6" />
//               <stop offset="70%" stopColor="#9ca3af" />
//               <stop offset="85%" stopColor="#e5e7eb" />
//               <stop offset="100%" stopColor="#374151" />
//             </linearGradient>

//             <radialGradient id="pinkGlow">
//               <stop offset="0%" stopColor="#e12afb" stopOpacity="0.55" />
//               <stop offset="100%" stopColor="#e12afb" stopOpacity="0" />
//             </radialGradient>

//             <filter id="blurGlow">
//               <feGaussianBlur stdDeviation="20" />
//             </filter>
//           </defs>

//           <circle cx="400" cy="400" r="280" fill="url(#pinkGlow)" filter="url(#blurGlow)" />

//           <path
//             d="M400 120
//                C520 120 650 220 650 400
//                C650 580 520 680 400 680
//                C280 680 150 580 150 400
//                C150 220 280 120 400 120Z"
//             fill="url(#metalGradient)"
//             opacity="0.9"
//           />

//           <path
//             d="M240 260
//                C320 180 500 180 580 260
//                C660 340 660 460 580 540
//                C500 620 320 620 240 540
//                C160 460 160 340 240 260Z"
//             fill="none"
//             stroke="url(#metalGradient)"
//             strokeWidth="42"
//             opacity="0.8"
//           />

//           <path
//             d="M310 180
//                C450 110 620 220 620 390
//                C620 560 500 660 350 620
//                C220 580 140 420 200 280
//                C230 220 260 205 310 180Z"
//             fill="none"
//             stroke="#ffffff"
//             strokeOpacity="0.2"
//             strokeWidth="10"
//           />
//         </svg>
//       </div>
//     </motion.div>
//   );
// }

// function FloatingCard({ icon: Icon, text, className, delay }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{
//         opacity: 1,
//         y: [0, -12, 0],
//       }}
//       transition={{
//         opacity: { duration: 0.6, delay },
//         y: {
//           duration: 4.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay,
//         },
//       }}
//       className={`absolute hidden xl:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl px-4 py-3 shadow-2xl ${className}`}
//     >
//       <div className="rounded-xl bg-[#e12afb]/20 p-2">
//         <Icon className="w-5 h-5 text-[#e12afb]" />
//       </div>
//       <span className="text-sm text-white/90 font-medium whitespace-nowrap">
//         {text}
//       </span>
//     </motion.div>
//   );
// }

// export default function Hero() {
//   const [displayed, setDisplayed] = useState("");
//   const [typing, setTyping] = useState(true);
//   const [wordIndex, setWordIndex] = useState(0);

//   const { isOpen, source, openModal, closeModal } = useCTAModal();

//   useEffect(() => {
//     const word = TYPING_WORDS[wordIndex];
//     let timer;

//     if (typing) {
//       if (displayed.length < word.length) {
//         timer = setTimeout(() => {
//           setDisplayed(word.slice(0, displayed.length + 1));
//         }, 70);
//       } else {
//         timer = setTimeout(() => setTyping(false), 1200);
//       }
//     } else {
//       if (displayed.length > 0) {
//         timer = setTimeout(() => {
//           setDisplayed(displayed.slice(0, -1));
//         }, 35);
//       } else {
//         setTyping(true);
//         setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
//       }
//     }

//     return () => clearTimeout(timer);
//   }, [displayed, typing, wordIndex]);

//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 bg-[#06040a] text-white">
//       <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(225,42,251,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.12),transparent_30%),linear-gradient(180deg,#090611_0%,#0b0815_50%,#05030a_100%)]" />

//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px] opacity-60" />

//       <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(225,42,251,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40" />

//       {/* <MetallicOrb /> */}

//       <FloatingCard
//         icon={BarChart3}
//         text="ROAS Optimized Campaigns"
//         className="top-[18%] left-[7%]"
//         delay={0.2}
//       />

//       <FloatingCard
//         icon={BrainCircuit}
//         text="AI Growth Automation"
//         className="top-[34%] right-[7%]"
//         delay={0.4}
//       />

//       <FloatingCard
//         icon={Target}
//         text="Conversion Funnel Engineering"
//         className="bottom-[22%] left-[10%]"
//         delay={0.6}
//       />

//       <FloatingCard
//         icon={TrendingUp}
//         text="Predictable Revenue Scaling"
//         className="bottom-[18%] right-[9%]"
//         delay={0.8}
//       />

//       <div className="relative z-10 max-w-6xl mx-auto text-center py-24 md:py-32">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-2.5 mb-8"
//         >
//           <Sparkles className="w-4 h-4 text-[#e12afb]" />
//           <span className="text-sm md:text-base text-[#f3b3ff] font-medium">
//             Agra&apos;s #1 AI-Powered Marketing Agency
//           </span>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.15, duration: 0.8 }}
//           className="font-[neue-kaine] text-4xl sm:text-5xl md:text-6xl text-white! leading-[0.92] tracking-[-0.045em] font-bold max-w-3xl mx-auto"
//         >
//           We Don&apos;t Just Market Your Brand.
//           <span className="block bg-gradient-to-r from-white via-[#ffb6ff] to-[#e12afb] bg-clip-text text-transparent">
//             We Engineer Its Growth.
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="mt-6 text-base sm:text-lg md:text-xl text-white/72 max-w-4xl mx-auto leading-relaxed px-2"
//         >
//           From scroll-stopping creatives to data-driven ad campaigns —
//           PrioritizeLabs is your complete digital partner, powered by AI and
//           built for results that actually move the needle.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.45 }}
//           className="mt-7 h-10 flex items-center justify-center"
//         >
//           <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#f0c3ff]">
//             Scaling with {displayed}
//           </span>
//           <span className="ml-1 h-7 w-[3px] rounded-full bg-[#e12afb] animate-pulse" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//           className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <button
//             onClick={() => openModal("Hero Section")}
//             className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#e12afb] hover:bg-[#f047ff] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(225,42,251,0.35)] w-full sm:w-auto"
//           >
//             <span>Get My Free Strategy Session</span>
//             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//           </button>

//           <Link
//             href="/portfolio"
//             className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 hover:bg-white/15 backdrop-blur-xl px-8 py-4 font-semibold transition-all duration-300 w-full sm:w-auto"
//           >
//             <Play className="w-4 h-4 text-[#e12afb]" />
//             <span>See Our Work</span>
//           </Link>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {[
//             "500+ Projects Delivered",
//             "98% Client Satisfaction",
//             "₹10Cr+ Ad Spend Managed",
//             "Trusted Across Agra, Mathura & NCR",
//           ].map((item) => (
//             <div
//               key={item}
//               className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl px-5 py-5 text-sm md:text-base text-white/90 hover:border-[#e12afb]/40 transition-all"
//             >
//               {item}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// 


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { useCTAModal } from '../hooks/Usectamodal';
import CTAModal from "./CTAModal";



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
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-sm font-medium tracking-wide text-violet-100">
              Agra&apos;s #1 AI-Powered Marketing Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold leading-[1.1] tracking-tight "
          >
            We Don&apos;t Just Market{" "}
            <span className="block">Your Brand.</span>
            <span className="block bg-gradient-to-r from-violet-200 via-violet-400 to-violet-600 bg-clip-text text-transparent mt-1 text-5xl sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,4.5vw,4rem)]">
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
            From scroll-stopping creatives to data-driven ad campaigns —
            PrioritizeLabs is your complete digital partner, powered by AI and
            built for results that actually move the needle.
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
              Get My Free Strategy Session
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
            <span>₹10Cr+ Ad Spend Managed</span>
            <span className="hidden text-violet-500 sm:inline">·</span>
            <span className="hidden sm:inline">Trusted Across Agra, Mathura & Delhi NCR</span>
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