"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Sparkles,
  GraduationCap,
  Utensils,
  ShoppingCart,
  TrendingUp,
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  Play,
} from "lucide-react";

export default function CreativeServicePage() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white text-slate-800 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ x: ["0%", "20%", "0%"], y: ["0%", "15%", "0%"], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-25%] left-[-15%] w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, rgba(167,139,250,0.08) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ x: ["0%", "-15%", "0%"], y: ["0%", "20%", "0%"], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] right-[-10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(216,180,254,0.2) 0%, rgba(216,180,254,0.08) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <motion.div
          animate={{ x: ["0%", "10%", "0%"], y: ["0%", "-10%", "0%"], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[10%] w-[750px] h-[750px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245,208,254,0.22) 0%, rgba(245,208,254,0.08) 40%, transparent 70%)",
            filter: "blur(65px)",
          }}
        />
        <motion.div
          animate={{ x: ["0%", "-8%", "0%"], y: ["0%", "8%", "0%"], scale: [1, 1.1, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[20%] w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Animated grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.06) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative container mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 px-4 py-2 rounded-full text-violet-700 text-sm mb-6 shadow-sm"
          >
            <Sparkles size={16} className="animate-pulse text-violet-500" />
            <span className="font-medium">Premium Creative Services</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-slate-900">Viral, Scroll-Stopping</span>
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Social Media Creatives
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
          >
            Prioritize Labs crafts high-quality, viral-ready social media
            creatives designed to stop the scroll, spark engagement, and turn
            attention into real business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <button className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 text-white shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:scale-105">
              Get Free Content Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 text-slate-700 hover:text-violet-700 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-100 group-hover:bg-violet-200 transition-colors">
                <Play size={13} className="text-violet-600 ml-0.5" />
              </span>
              View Our Work
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Viral Campaigns", value: "500+" },
              { label: "Client Retention", value: "95%" },
              { label: "Avg. Engagement", value: "2.8x" },
              { label: "Industries Served", value: "12+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                className="text-center p-4 bg-white/70 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-violet-100 transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SWIPER SLIDER */}
      <FadeInSection>
        <section className="relative container mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Our Recent{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Creative Work
              </span>
            </h2>
            <p className="text-slate-500 text-lg">
              See how we've helped brands go viral and drive real results
            </p>
          </div>
          <SwiperSlider />
        </section>
      </FadeInSection>

      {/* PHILOSOPHY */}
      <FadeInSection>
        <section className="relative container mx-auto px-6 py-24">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-xl shadow-slate-100/80">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-100">
                  <Zap className="text-violet-600" size={22} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Our Creative Formula
                </h2>
              </div>

              <p className="text-xl text-slate-500 mb-3">
                Creativity + Strategy ={" "}
                <span className="text-violet-600 font-semibold">Viral Growth</span>
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {[
                  { icon: Target, text: "Unique brand storytelling" },
                  { icon: TrendingUp, text: "Viral hooks & trend psychology" },
                  { icon: Sparkles, text: "Eye-catching visuals & motion" },
                  { icon: BarChart3, text: "Platform-specific optimization" },
                  { icon: Zap, text: "Engagement-focused CTAs" },
                  { icon: CheckCircle, text: "Data-driven creative iteration" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="flex gap-4 items-start bg-white border border-slate-100 hover:border-violet-200 hover:shadow-md rounded-2xl p-5 transition-all duration-300 group shadow-sm"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 group-hover:bg-violet-100 transition-colors">
                      <item.icon size={20} />
                    </div>
                    <p className="text-slate-600 font-medium pt-1.5">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* SERVICES BY INDUSTRY */}
      <FadeInSection>
        <section className="relative container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              High-Impact Creatives for{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Tailored content strategies that resonate with your audience and drive measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <ServiceCard icon={<GraduationCap />} title="Education & Schools" description="Emotion-driven reels, parent-trust content, admission carousels, and classroom storytelling that drives enquiries and fills seats." delay={0.1} />
            <ServiceCard icon={<Utensils />} title="Restaurants & Food Brands" description="Sizzling food reels, ASMR shots, viral challenges, and local-flavored creatives that convert views into footfall." delay={0.2} />
            <ServiceCard icon={<ShoppingCart />} title="E-Commerce Brands" description="High-converting product reels, unboxings, before/after visuals, and social-commerce creatives that boost ROAS." delay={0.3} />
            <ServiceCard icon={<TrendingUp />} title="All Other Businesses" description="Custom creatives for real estate, services, offline stores, and local brands — built to stand out and stay memorable." delay={0.4} />
          </div>
        </section>
      </FadeInSection>

      {/* LOCAL EDGE */}
      <FadeInSection>
        <section className="relative container mx-auto px-6 py-24">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-lg shadow-violet-100/50">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-200/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-5 text-slate-900">
                  Local Insight.{" "}
                  <span className="text-violet-600">National Impact.</span>
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  We understand local audience behavior, cultural triggers, and regional trends — while building creatives that scale across platforms like Instagram, Facebook, YouTube Shorts, and WhatsApp.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white border border-violet-100 px-8 py-6 rounded-2xl shadow-md">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100">
                  <MapPin className="text-violet-600" size={28} />
                </div>
                <div className="text-center">
                  <div className="text-violet-700 font-semibold">Agra-Focused</div>
                  <div className="text-slate-400 text-sm">India-Ready</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FINAL CTA */}
      <FadeInSection>
        <section className="relative container mx-auto px-6 py-32">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/80 via-purple-50/40 to-transparent blur-3xl -z-10 rounded-full" />

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
              Let's Create Content People{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Love & Share
              </span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              From ideation to posting and optimization, Prioritize Labs delivers viral-ready creatives that grow your brand, engagement, and revenue.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 px-12 py-5 rounded-2xl font-semibold inline-flex items-center gap-3 text-lg text-white shadow-xl shadow-violet-200 hover:shadow-violet-300"
            >
              Start Your Creative Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
            >
              {["No long-term contracts", "Free content audit", "Results-driven approach"].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-violet-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}

function FadeInSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function SwiperSlider() {
  const images = [
    { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop", title: "Social Media Campaign", category: "Instagram Reels" },
    { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop", title: "Brand Storytelling", category: "Video Content" },
    { url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop", title: "Product Showcase", category: "E-commerce" },
    { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop", title: "Creative Direction", category: "Brand Strategy" },
    { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop", title: "Viral Content", category: "Trending Reels" },
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop", title: "Data-Driven Campaigns", category: "Analytics" },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{ rotate: 20, stretch: 0, depth: 200, modifier: 1, slideShadows: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "400px" }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/60 group">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <span className="inline-block bg-violet-500/20 border border-violet-400/40 px-3 py-1 rounded-full text-violet-200 text-xs font-medium mb-3">
                    {image.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                </motion.div>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-100/60 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100/60 rounded-full blur-3xl -z-10" />
    </div>
  );
}

function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white border border-slate-100 hover:border-violet-200 rounded-3xl p-8 md:p-10 group cursor-pointer relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-100/60"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-violet-50/0 group-hover:from-violet-50/60 group-hover:to-purple-50/40 transition-all duration-500" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50/0 group-hover:bg-violet-100/40 rounded-bl-full transition-all duration-500" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-6 group-hover:bg-violet-100 transition-colors duration-300"
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-violet-700 transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
          {description}
        </p>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="mt-6 flex items-center gap-2 text-violet-600 font-medium"
        >
          Learn more <ArrowRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
}