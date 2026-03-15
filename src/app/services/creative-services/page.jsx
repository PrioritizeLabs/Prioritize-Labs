// "use client";

// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCoverflow,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import {
//   Sparkles,
//   GraduationCap,
//   Utensils,
//   ShoppingCart,
//   TrendingUp,
//   MapPin,
//   CheckCircle,
//   ArrowRight,
//   Zap,
//   Target,
//   BarChart3,
//   Play,
// } from "lucide-react";

// export default function CreativeServicePage() {
//   const containerRef = useRef(null);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-white text-slate-800 overflow-hidden"
//     >
//       {/* Background blobs */}
//       <div className="fixed inset-0 pointer-events-none -z-10">
//         <motion.div
//           animate={{ x: ["0%", "20%", "0%"], y: ["0%", "15%", "0%"], scale: [1, 1.2, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[-25%] left-[-15%] w-[800px] h-[800px] rounded-full"
//           style={{
//             background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, rgba(167,139,250,0.08) 40%, transparent 70%)",
//             filter: "blur(60px)",
//           }}
//         />
//         <motion.div
//           animate={{ x: ["0%", "-15%", "0%"], y: ["0%", "20%", "0%"], scale: [1, 1.3, 1] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[5%] right-[-10%] w-[700px] h-[700px] rounded-full"
//           style={{
//             background: "radial-gradient(circle, rgba(216,180,254,0.2) 0%, rgba(216,180,254,0.08) 40%, transparent 70%)",
//             filter: "blur(70px)",
//           }}
//         />
//         <motion.div
//           animate={{ x: ["0%", "10%", "0%"], y: ["0%", "-10%", "0%"], scale: [1, 1.15, 1] }}
//           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-[-20%] left-[10%] w-[750px] h-[750px] rounded-full"
//           style={{
//             background: "radial-gradient(circle, rgba(245,208,254,0.22) 0%, rgba(245,208,254,0.08) 40%, transparent 70%)",
//             filter: "blur(65px)",
//           }}
//         />
//         <motion.div
//           animate={{ x: ["0%", "-8%", "0%"], y: ["0%", "8%", "0%"], scale: [1, 1.1, 1] }}
//           transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[40%] right-[20%] w-[900px] h-[900px] rounded-full"
//           style={{
//             background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
//             filter: "blur(80px)",
//           }}
//         />

//         {/* Animated grid */}
//         <motion.div
//           animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)`,
//             backgroundSize: "80px 80px",
//             maskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 40%, transparent 100%)",
//             WebkitMaskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 40%, transparent 100%)",
//           }}
//         />
//       </div>

//       {/* HERO */}
//       <section className="relative container mx-auto px-6 py-32 md:py-40">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-5xl mx-auto text-center"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 px-4 py-2 rounded-full text-violet-700 text-sm mb-6 shadow-sm"
//           >
//             <Sparkles size={16} className="animate-pulse text-violet-500" />
//             <span className="font-medium">Premium Creative Services</span>
//           </motion.div>

//           <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
//             <span className="text-slate-900">Viral, Scroll-Stopping</span>
//             <br />
//             <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
//               Social Media Creatives
//             </span>
//           </h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="mt-6 text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
//           >
//             Prioritize Labs crafts high-quality, viral-ready social media
//             creatives designed to stop the scroll, spark engagement, and turn
//             attention into real business growth.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             className="mt-12 flex flex-wrap justify-center gap-4"
//           >
//             <button className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 text-white shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-105">
//               Get Free Content Audit
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-slate-700 hover:text-violet-700 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2">
//               <span className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-100 group-hover:bg-violet-200 transition-colors">
//                 <Play size={13} className="text-violet-600 ml-0.5" />
//               </span>
//               View Our Work
//             </button>
//           </motion.div>

//           {/* Stats Row */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//             className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {[
//               { label: "Viral Campaigns", value: "500+" },
//               { label: "Client Retention", value: "95%" },
//               { label: "Avg. Engagement", value: "2.8x" },
//               { label: "Industries Served", value: "12+" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
//                 className="text-center p-4 bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-violet-100 transition-all duration-300 group"
//               >
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* SWIPER SLIDER */}
//       <FadeInSection>
//         <section className="relative container mx-auto px-6 py-24">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
//               Our Recent{" "}
//               <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
//                 Creative Work
//               </span>
//             </h2>
//             <p className="text-slate-500 text-lg">
//               See how we've helped brands go viral and drive real results
//             </p>
//           </div>
//           <SwiperSlider />
//         </section>
//       </FadeInSection>

//       {/* PHILOSOPHY */}
//       <FadeInSection>
//         <section className="relative container mx-auto px-6 py-24">
//           <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-xl shadow-slate-100/80">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-100">
//                   <Zap className="text-violet-600" size={22} />
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//                   Our Creative Formula
//                 </h2>
//               </div>

//               <p className="text-xl text-slate-500 mb-3">
//                 Creativity + Strategy ={" "}
//                 <span className="text-violet-600 font-semibold">Viral Growth</span>
//               </p>

//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
//                 {[
//                   { icon: Target, text: "Unique brand storytelling" },
//                   { icon: TrendingUp, text: "Viral hooks & trend psychology" },
//                   { icon: Sparkles, text: "Eye-catching visuals & motion" },
//                   { icon: BarChart3, text: "Platform-specific optimization" },
//                   { icon: Zap, text: "Engagement-focused CTAs" },
//                   { icon: CheckCircle, text: "Data-driven creative iteration" },
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.1, duration: 0.5 }}
//                     whileHover={{ scale: 1.04, y: -4 }}
//                     className="flex gap-4 items-start bg-white border border-slate-100 hover:border-violet-200 hover:shadow-md rounded-2xl p-5 transition-all duration-300 group shadow-sm"
//                   >
//                     <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-100 transition-colors">
//                       <item.icon size={20} />
//                     </div>
//                     <p className="text-slate-600 font-medium pt-1.5">{item.text}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </FadeInSection>

//       {/* SERVICES BY INDUSTRY */}
//       <FadeInSection>
//         <section className="relative container mx-auto px-6 py-24">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
//               High-Impact Creatives for{" "}
//               <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
//                 Every Industry
//               </span>
//             </h2>
//             <p className="text-slate-500 text-lg max-w-2xl mx-auto">
//               Tailored content strategies that resonate with your audience and drive measurable results
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
//             <ServiceCard icon={<GraduationCap />} title="Education & Schools" description="Emotion-driven reels, parent-trust content, admission carousels, and classroom storytelling that drives enquiries and fills seats." delay={0.1} />
//             <ServiceCard icon={<Utensils />} title="Restaurants & Food Brands" description="Sizzling food reels, ASMR shots, viral challenges, and local-flavored creatives that convert views into footfall." delay={0.2} />
//             <ServiceCard icon={<ShoppingCart />} title="E-Commerce Brands" description="High-converting product reels, unboxings, before/after visuals, and social-commerce creatives that boost ROAS." delay={0.3} />
//             <ServiceCard icon={<TrendingUp />} title="All Other Businesses" description="Custom creatives for real estate, services, offline stores, and local brands — built to stand out and stay memorable." delay={0.4} />
//           </div>
//         </section>
//       </FadeInSection>

//       {/* LOCAL EDGE */}
//       <FadeInSection>
//         <section className="relative container mx-auto px-6 py-24">
//           <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-lg shadow-violet-100/50">
//             <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-transparent to-transparent" />
//             <div className="absolute top-0 right-0 w-48 h-48 bg-violet-200/30 rounded-full blur-3xl" />

//             <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
//               <div className="flex-1">
//                 <h3 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
//                   Local Insight.{" "}
//                   <span className="text-violet-600">National Impact.</span>
//                 </h3>
//                 <p className="text-slate-500 leading-relaxed text-lg">
//                   We understand local audience behavior, cultural triggers, and regional trends — while building creatives that scale across platforms like Instagram, Facebook, YouTube Shorts, and WhatsApp.
//                 </p>
//               </div>

//               <div className="flex flex-col items-center gap-3 bg-white border border-violet-100 px-8 py-6 rounded-2xl shadow-md">
//                 <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100">
//                   <MapPin className="text-violet-600" size={28} />
//                 </div>
//                 <div className="text-center">
//                   <div className="text-violet-700 font-semibold">Agra-Focused</div>
//                   <div className="text-slate-400 text-sm">India-Ready</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </FadeInSection>

//       {/* FINAL CTA */}
//       <FadeInSection>
//         <section className="relative container mx-auto px-6 py-32">
//           <div className="text-center relative">
//             <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-purple-50/40 to-transparent blur-3xl -z-10 rounded-full" />

//             <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
//               Let's Create Content People{" "}
//               <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
//                 Love & Share
//               </span>
//             </h2>

//             <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
//               From ideation to posting and optimization, Prioritize Labs delivers viral-ready creatives that grow your brand, engagement, and revenue.
//             </p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 px-12 py-5 rounded-2xl font-semibold inline-flex items-center gap-3 text-lg text-white shadow-xl shadow-violet-200 hover:shadow-violet-300"
//             >
//               Start Your Creative Journey
//               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
//             >
//               {["No long-term contracts", "Free content audit", "Results-driven approach"].map((text, i) => (
//                 <div key={i} className="flex items-center gap-2">
//                   <CheckCircle size={16} className="text-violet-500" />
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       </FadeInSection>
//     </div>
//   );
// }

// function FadeInSection({ children }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function SwiperSlider() {
//   const images = [
//     { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop", title: "Social Media Campaign", category: "Instagram Reels" },
//     { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop", title: "Brand Storytelling", category: "Video Content" },
//     { url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop", title: "Product Showcase", category: "E-commerce" },
//     { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop", title: "Creative Direction", category: "Brand Strategy" },
//     { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop", title: "Viral Content", category: "Trending Reels" },
//     { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop", title: "Data-Driven Campaigns", category: "Analytics" },
//   ];

//   return (
//     <div className="relative max-w-6xl mx-auto px-4">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         coverflowEffect={{ rotate: 20, stretch: 0, depth: 200, modifier: 1, slideShadows: true }}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         pagination={{ clickable: true, dynamicBullets: true }}
//         navigation={true}
//         loop={true}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index} style={{ width: "400px" }}>
//             <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/60 group">
//               <img
//                 src={image.url}
//                 alt={image.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
//                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//                   <span className="inline-block bg-violet-500/20 border border-violet-400/40 px-3 py-1 rounded-full text-violet-200 text-xs font-medium mb-3">
//                     {image.category}
//                   </span>
//                   <h3 className="text-2xl font-bold text-white">{image.title}</h3>
//                 </motion.div>
//               </div>
//               <div className="absolute top-4 right-4 w-3 h-3 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-100/60 rounded-full blur-3xl -z-10" />
//       <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100/60 rounded-full blur-3xl -z-10" />
//     </div>
//   );
// }

// function ServiceCard({ icon, title, description, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ delay, duration: 0.6 }}
//       whileHover={{ y: -8, scale: 1.02 }}
//       className="bg-white border border-slate-100 hover:border-violet-200 rounded-3xl p-8 md:p-10 group cursor-pointer relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-100/60"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-violet-50/0 group-hover:from-violet-50/60 group-hover:to-purple-50/40 transition-all duration-500" />
//       <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50/0 group-hover:bg-violet-100/40 rounded-bl-full transition-all duration-500" />

//       <div className="relative z-10">
//         <motion.div
//           whileHover={{ rotate: 5, scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-6 group-hover:bg-violet-100 transition-colors duration-300"
//         >
//           {icon}
//         </motion.div>

//         <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-violet-700 transition-colors">
//           {title}
//         </h3>

//         <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
//           {description}
//         </p>

//         <motion.div
//           initial={{ opacity: 0, x: -10 }}
//           whileHover={{ opacity: 1, x: 0 }}
//           className="mt-6 flex items-center gap-2 text-violet-600 font-medium"
//         >
//           Learn more <ArrowRight size={16} />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { useState, useRef, useEffect } from "react";
import {
  Palette,
  Instagram,
  LayoutGrid,
  BarChart2,
  Youtube,
  Image,
  Bookmark,
  Printer,
  PenTool,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Mail,
  Check,
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  Eye,
  TrendingUp,
  Shield,
} from "lucide-react";

/* ─────────────────────────────────────────────
   UNSPLASH IMAGES (design / creative themed)
───────────────────────────────────────────── */
const heroImg =
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop";
const brandImg =
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80&auto=format&fit=crop";
const socialImg =
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80&auto=format&fit=crop";
const infoImg =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop";
const thumbImg =
  "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80&auto=format&fit=crop";
const printImg =
  "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80&auto=format&fit=crop";
const illustImg =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format&fit=crop";
const storyImg =
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    id: "01",
    icon: Palette,
    title: "Logo Design & Brand Identity",
    sub: "The foundation everything else is built on",
    body: "Your logo is the shorthand for everything your business stands for. We design logos that are clean, distinctive, versatile, and built to last — plus a full brand identity system so your entire visual presence is consistent.",
    img: brandImg,
    items: [
      "Logo design (multiple initial concepts)",
      "Logo variations — horizontal, stacked, icon-only, monochrome",
      "Colour palette with hex, RGB, and CMYK values",
      "Typography selection — primary and secondary fonts",
      "Brand usage guidelines document",
      "All source files (AI, EPS, SVG, PNG, PDF)",
      "Social media profile versions",
      "Favicon version",
    ],
    best: "New businesses launching, existing businesses rebranding",
    tag: "Foundation",
    tagColor: "bg-violet-100 text-violet-700",
    accent: "from-violet-400 to-purple-500",
    border: "border-violet-200",
  },
  {
    id: "02",
    icon: Instagram,
    title: "Social Media Post Design",
    sub: "Daily content that looks like it came from a premium brand",
    body: "The most consistent thing your audience sees is your feed. We design posts that are on-brand, scroll-stopping, and built for the specific platform and format they live on.",
    img: socialImg,
    items: [
      "Static single-image posts (Instagram, Facebook)",
      "Festival and occasion posts",
      "Promotional and offer posts",
      "Product and service highlight posts",
      "Quote and motivational posts",
      "Announcement posts",
      "Testimonial and review posts",
      "Educational and did-you-know posts",
    ],
    best: "All businesses with an active social media presence",
    tag: "Most Ordered",
    tagColor: "bg-pink-100 text-pink-700",
    accent: "from-pink-400 to-rose-500",
    border: "border-pink-200",
  },
  {
    id: "03",
    icon: LayoutGrid,
    title: "Carousel & Swipe Posts",
    sub: "Multi-slide content that drives saves and shares",
    body: "Carousels are one of the highest-saving formats on Instagram. We design them like mini-articles — a strong hook on slide one, useful content in the middle, and a clear CTA at the end.",
    img: illustImg,
    items: [
      "Educational and tip carousels",
      "Step-by-step how-to posts",
      "Before and after slides",
      "Product feature breakdowns",
      "Service explainer carousels",
      "Myth vs. fact posts",
      "Industry insight posts",
      "Client result showcases",
    ],
    best: "Coaches, educators, service businesses, consultants",
    tag: "High Engagement",
    tagColor: "bg-amber-100 text-amber-700",
    accent: "from-amber-400 to-orange-500",
    border: "border-amber-200",
  },
  {
    id: "04",
    icon: BarChart2,
    title: "Infographics",
    sub: "Complex information made instantly understandable",
    body: "Infographics are the most shareable content format for data, processes, and educational material. We take your expertise and turn it into a visual that communicates clearly at a glance.",
    img: infoImg,
    items: [
      "Statistical and data infographics",
      "Process and step-by-step infographics",
      "Comparison and vs. infographics",
      "Timeline and history infographics",
      "How-it-works explainer graphics",
      "Industry fact sheets",
      "Annual report infographics",
    ],
    best: "Consultants, data-heavy businesses, educational brands",
    tag: null,
    tagColor: "",
    accent: "from-teal-400 to-cyan-500",
    border: "border-teal-200",
  },
  {
    id: "05",
    icon: Youtube,
    title: "YouTube Thumbnails",
    sub: "The single image that decides whether your video gets clicked",
    body: "Your video can be perfect and still get no views because of a weak thumbnail. We design thumbnails that make the right promise to the right viewer — clear from a distance and built to compete.",
    img: thumbImg,
    items: [
      "Custom thumbnail per video",
      "Face-forward, text + image, or full graphic compositions",
      "Legible title text optimised for mobile and desktop",
      "Colour and contrast optimised for attention-grab",
      "Consistent template system for channel unity",
      "A/B variant if needed",
    ],
    best: "YouTubers, educators, coaches, businesses on YouTube",
    tag: "High CTR",
    tagColor: "bg-red-100 text-red-700",
    accent: "from-red-400 to-rose-500",
    border: "border-red-200",
  },
  {
    id: "06",
    icon: Image,
    title: "Banners & Posters",
    sub: "Print and digital designs that command attention",
    body: "Whether it's a hoarding, a WhatsApp banner, or an event poster — banners need to communicate the essential message in a single glance. Maximum clarity, minimum clutter.",
    img: printImg,
    items: [
      "Event posters and promotional posters",
      "Digital banners (web ads, WhatsApp, stories)",
      "Flex and hoarding designs",
      "Festive sale and offer banners",
      "Grand opening and launch banners",
      "Restaurant daily specials boards",
      "Awareness and campaign posters",
    ],
    best: "Retail stores, restaurants, events, local businesses",
    tag: null,
    tagColor: "",
    accent: "from-blue-400 to-indigo-500",
    border: "border-blue-200",
  },
  {
    id: "07",
    icon: Bookmark,
    title: "Stories & Highlight Covers",
    sub: "Your Instagram profile, looking the part",
    body: "Your Highlight covers are permanent fixtures on your profile and the first thing a new visitor sees when deciding whether to follow you. We design sets that are consistent and polished.",
    img: storyImg,
    items: [
      "Branded story templates (promo, educational, poll, Q&A)",
      "Highlight cover icon sets (full icon families)",
      "Story countdown and launch announcement templates",
      "New post alert story designs",
      "Testimonial story formats",
      "Behind-the-scenes story frames",
    ],
    best: "Any brand with an active Instagram presence",
    tag: null,
    tagColor: "",
    accent: "from-fuchsia-400 to-purple-500",
    border: "border-fuchsia-200",
  },
  {
    id: "08",
    icon: Printer,
    title: "Branding & Print Collateral",
    sub: "Everything your business hands out, done right",
    body: "Your offline brand materials are still critical. A visiting card that looks cheap or a brochure that's hard to read sends a signal. We design print materials to the same standard as your digital identity.",
    img: brandImg,
    items: [
      "Business and visiting cards",
      "Letterheads and envelopes",
      "Company brochures (bi-fold, tri-fold)",
      "Product catalogues",
      "Menu cards (restaurants, cafes, hotels)",
      "Packaging design",
      "Presentation decks and pitch decks",
      "Certificates, ID cards, and badge designs",
    ],
    best: "All businesses needing offline brand materials",
    tag: "Print-Ready",
    tagColor: "bg-green-100 text-green-700",
    accent: "from-emerald-400 to-green-500",
    border: "border-emerald-200",
  },
];

const whyPoints = [
  {
    icon: PenTool,
    title: "Made from scratch every time",
    desc: "We don't use templates. Every creative is built around your brand identity, your audience, and the platform it will live on.",
  },
  {
    icon: Eye,
    title: "Designed to perform",
    desc: "Every deliverable is made with an understanding of what performs — what makes someone pause, read, and take action.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    desc: "Festival post due tomorrow? New launch today? We move at the speed your business needs without sacrificing quality.",
  },
  {
    icon: Shield,
    title: "Consistent brand voice",
    desc: "Every creative we produce looks like it came from the same brand. Consistency is what turns viewers into recognisers.",
  },
  {
    icon: TrendingUp,
    title: "Built for growth",
    desc: "We start at the beginning of the trust chain — good design → recognition → trust → customers. Everything we make accelerates that.",
  },
  {
    icon: Star,
    title: "Full source files, always",
    desc: "You own everything we make. Source files, editable formats, multiple sizes — delivered with every project.",
  },
];

/* ─────────────────────────────────────────────
   ANIMATION HOOK
───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
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

function FadeIn({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(30px)", left: "translateX(-30px)", right: "translateX(30px)", down: "translateY(-20px)" };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0,0)" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FLOATING SHAPES (decorative bg elements)
───────────────────────────────────────────── */
function FloatingShapes() {
  return (
    <>
      <div className="absolute top-16 right-16 w-72 h-72 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-20 left-8 w-56 h-56 rounded-full bg-gradient-to-br from-violet-200 to-fuchsia-200 opacity-25 blur-2xl pointer-events-none animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-100 opacity-40 blur-2xl pointer-events-none animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
    </>
  );
}

/* ─────────────────────────────────────────────
   TICKER
───────────────────────────────────────────── */
const tickerItems = [
  "Logo Design", "Brand Identity", "Social Media Posts", "Carousel Design",
  "Infographics", "YouTube Thumbnails", "Posters & Banners", "Story Templates",
  "Business Cards", "Packaging Design", "Presentation Decks", "Menu Cards",
];

function Ticker() {
  return (
    <div className="relative overflow-hidden bg-purple-600 py-3 my-0">
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-inner { display: flex; width: max-content; animation: ticker 30s linear infinite; }
        .ticker-inner:hover { animation-play-state: paused; }
      `}</style>
      <div className="ticker-inner">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-5 text-white text-sm font-semibold whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300 inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <FadeIn delay={0.05 * (index % 3)} direction="up">
      <div className={`group rounded-3xl border-2 ${service.border} bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col`}>
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`} />
          {/* Gradient top bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accent}`} />
          {/* Icon badge */}
          <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-lg`}>
            <Icon className="w-5 h-5 text-white" strokeWidth={1.7} />
          </div>
          {/* Tags */}
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="text-[10px] font-bold text-white/80 tracking-widest uppercase bg-black/30 backdrop-blur px-2 py-1 rounded-full">
              {service.id}
            </span>
            {service.tag && (
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${service.tagColor}`}>
                {service.tag}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <p className={`text-xs font-bold uppercase tracking-wide bg-gradient-to-r ${service.accent} bg-clip-text text-transparent mb-1.5`}>
            {service.sub}
          </p>
          <h3 className="heading font-bold text-gray-900 text-lg leading-tight mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
            {service.body}
          </p>

          <div className="text-xs text-gray-400 italic mb-4">
            <span className="font-semibold not-italic text-gray-500">Best for: </span>
            {service.best}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide bg-gradient-to-r ${service.accent} bg-clip-text text-transparent hover:opacity-80 transition-opacity mb-3`}
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 text-purple-500 ${open ? "rotate-180" : ""}`} />
            {open ? "Hide details" : "What's included"}
          </button>

          <div style={{ maxHeight: open ? "500px" : "0", overflow: "hidden", transition: "max-height 0.45s ease" }}>
            <div className="grid grid-cols-1 gap-1.5 pt-3 border-t border-gray-100 pb-2">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className={`mt-4 inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r ${service.accent} text-white px-4 py-2 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 w-fit`}
          >
            Get Started <ArrowRight className="w-3 h-3" />
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
      <FloatingShapes />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e9d5ff 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Breadcrumb */}
        <FadeIn>
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 pt-4">
            <a href="/" className="hover:text-purple-500 transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="/services" className="hover:text-purple-500 transition-colors">Services</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-500">Graphic Design & Creative Services</span>
          </nav>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">
          {/* Left */}
          <div>
            <FadeIn delay={0.05} direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-xs font-bold tracking-widest uppercase mb-6">
                <Palette className="w-3.5 h-3.5" />
                Graphic Design & Creative Services
              </div>
            </FadeIn>

            <FadeIn delay={0.12} direction="left">
              <h1 className="heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-950 leading-[1.06] tracking-tight mb-6">
                Creatives that look{" "}
                <span className="relative text-purple-500">
                  unmistakably
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 10" fill="none">
                    <path d="M2 7 C80 2, 220 2, 298 7" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                </span>{" "}
                like your brand
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
                Great design isn't decoration. It's the first impression your audience forms about your business. We create graphics, visuals, and brand assets that make people stop, look twice, and remember you.
              </p>
            </FadeIn>

            <FadeIn delay={0.27} direction="left">
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-200 hover:bg-purple-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4" />
                  Get a Free Creative Sample
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-purple-600 font-bold text-sm border border-purple-200 hover:border-purple-400 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  View Our Work
                </a>
              </div>
            </FadeIn>

            {/* Stat pills */}
            <FadeIn delay={0.34} direction="left">
              <div className="flex flex-wrap gap-3">
                {[
                  { val: "9+", label: "Design categories" },
                  { val: "100%", label: "Custom — no templates" },
                  { val: "All platforms", label: "Sized for every channel" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2">
                    <span className="heading font-extrabold text-purple-600 text-sm">{s.val}</span>
                    <span className="text-xs text-gray-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — image collage */}
          <FadeIn delay={0.15} direction="right">
            <div className="relative h-[480px] hidden lg:block">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-72 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-purple-100 border-4 border-white">
                <img src={heroImg} alt="Design work" className="w-full h-full object-cover" />
              </div>
              {/* Secondary */}
              <div className="absolute bottom-8 left-0 w-56 h-64 rounded-3xl overflow-hidden shadow-xl shadow-pink-100 border-4 border-white">
                <img src={brandImg} alt="Brand identity" className="w-full h-full object-cover" />
              </div>
              {/* Floating badge 1 */}
              <div className="absolute top-36 left-16 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-purple-100 z-10">
                <div className="w-8 h-8 rounded-xl bg-purple-500 flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" fill="white" />
                </div>
                <div>
                  <div className="heading text-xs font-bold text-gray-900">Premium Quality</div>
                  <div className="text-[10px] text-gray-400">Every deliverable</div>
                </div>
              </div>
              {/* Floating badge 2 */}
              <div className="absolute bottom-32 right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-green-100 z-10">
                <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="heading text-xs font-bold text-gray-900">Source files included</div>
                  <div className="text-[10px] text-gray-400">AI, EPS, SVG, PNG</div>
                </div>
              </div>
              {/* Colour swatches decoration */}
              <div className="absolute top-4 left-8 flex gap-1.5">
                {["bg-purple-400","bg-pink-400","bg-amber-400","bg-teal-400","bg-blue-400"].map((c) => (
                  <div key={c} className={`w-6 h-6 rounded-full ${c} shadow-md`} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Ticker */}
      <Ticker />
    </section>
  );
}

/* ─────────────────────────────────────────────
   OPENING STATEMENT
───────────────────────────────────────────── */
function OpeningStatement() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative rounded-3xl overflow-hidden h-72 shadow-xl">
              <img src={illustImg} alt="Creative work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <p className="heading font-bold text-gray-900 text-sm leading-tight">
                    "Your visuals are speaking for your brand before your copy ever gets a chance."
                  </p>
                  <p className="text-xs text-purple-600 font-semibold mt-1">— PrioritizeLabs</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1} direction="right">
              <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
                Your audience decides whether to trust you before they read{" "}
                <span className="text-purple-500">a single word.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.18} direction="right">
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>A poorly designed post tells people your business isn't serious. A generic template tells them you're one of thousands. A sharp, consistent, well-crafted creative tells them you're worth their attention.</p>
                <p>We're not a template shop. Every creative we produce is made from scratch, built around your brand identity, your audience, and the specific platform it's going to live on.</p>
                <p className="font-semibold text-gray-700">Consistent creatives build recognition. Recognition builds trust. Trust builds customers.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">
              What We Design
            </span>
            <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              What we design for you
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Nine design disciplines, each executed with the same standard: custom, on-brand, and built to perform.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY US
───────────────────────────────────────────── */
function WhySection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn direction="left">
              <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-4">
                Why PrioritizeLabs
              </span>
              <h2 className="heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Design that works as hard as you do
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyPoints.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <FadeIn key={pt.title} delay={0.06 * i} direction="left">
                    <div className="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                      <div className="w-9 h-9 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center mb-3 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-purple-600" strokeWidth={1.7} />
                      </div>
                      <h4 className="heading font-bold text-gray-900 text-sm mb-1">{pt.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{pt.desc}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <FadeIn delay={0.1} direction="right">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden h-96 shadow-2xl shadow-purple-100">
                <img src={printImg} alt="Design quality" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-purple-100 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(n => <Star key={n} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-xs text-gray-700 font-medium leading-snug">"Our brand finally looks as good as our product."</p>
                <p className="text-[10px] text-gray-400 mt-1">— Client, Agra</p>
              </div>
              {/* Floating counter */}
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white rounded-2xl shadow-xl p-4 text-center">
                <div className="heading text-2xl font-extrabold">50+</div>
                <div className="text-[10px] font-semibold opacity-80">Design types</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROCESS STRIP
───────────────────────────────────────────── */
function ProcessStrip() {
  const steps = [
    { num: "01", title: "Brief", desc: "We learn your brand, audience, and goal." },
    { num: "02", title: "Concept", desc: "Initial directions crafted from scratch." },
    { num: "03", title: "Review", desc: "You review and share your feedback." },
    { num: "04", title: "Refine", desc: "We revise until it's exactly right." },
    { num: "05", title: "Deliver", desc: "Final files in all formats, ready to use." },
  ];
  return (
    <section className="bg-white border-y border-gray-100 py-14 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-500 block mb-3">Our Process</span>
            <h2 className="heading text-2xl md:text-3xl font-extrabold text-gray-900">How every creative gets made</h2>
          </div>
        </FadeIn>
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={0.1 * i}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-200">
                    <span className="heading font-extrabold text-white text-lg">{s.num}</span>
                  </div>
                  <h4 className="heading font-bold text-gray-900 mb-1.5 text-sm">{s.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SHOWCASE STRIP
───────────────────────────────────────────── */
function ShowcaseStrip() {
  const imgs = [heroImg, brandImg, socialImg, infoImg, thumbImg, printImg, illustImg, storyImg];
  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <FadeIn>
        <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
          A glimpse of what we create
        </p>
      </FadeIn>
      <div className="relative overflow-hidden">
        <style>{`
          @keyframes gallery { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .gallery-inner { display: flex; width: max-content; animation: gallery 24s linear infinite; gap: 16px; padding: 0 8px; }
          .gallery-inner:hover { animation-play-state: paused; }
        `}</style>
        <div className="gallery-inner">
          {[...imgs, ...imgs].map((img, i) => (
            <div key={i} className="w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
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
            <Palette className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white! mb-4 leading-tight">
            Ready to make your brand look as good as it is?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-purple-200 text-lg mb-10 leading-relaxed">
            Get a free creative sample — no commitment, no pressure. Tell us about your brand and we'll show you what we can build for you.
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
            Response within 24 hours &nbsp;·&nbsp; Based in Agra, serving clients across India
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function DigitalCreativesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <OpeningStatement />
      <ServicesSection />
      <ShowcaseStrip />
      <ProcessStrip />
      <WhySection />
      <CTA />
    </main>
  );
}