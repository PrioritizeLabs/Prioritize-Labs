"use client";
import { motion } from "framer-motion";
import {
  Palette,
  Video,
  Megaphone,
  Globe,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  Award,
  Target,
  Star,
  Shield,
} from "lucide-react";
import { useState } from "react";

export default function DigitalMarketingServices() {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-100/30 via-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_auto] animate-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-200 border border-blue-400/20"
          >
            <Sparkles className="w-4 h-4" />
            Enterprise-Grade Digital Solutions
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-slate-900">Digital Marketing</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
              Reimagined
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Cutting-edge digital solutions engineered to elevate your brand,
            maximize engagement, and deliver exponential growth.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400/50" />
            <Star className="w-4 h-4 text-blue-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
        </motion.div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <ServiceCard icon={<Palette className="w-6 h-6" />} title="Graphic Design & Social Media" gradient="from-pink-500 via-rose-500 to-pink-500" delay={0.1}>
            <div className="space-y-4">
              <FeatureItem icon={<CheckCircle2 />}>20–24 premium creatives monthly</FeatureItem>
              <FeatureItem icon={<CheckCircle2 />}>2–6 engagement-optimized carousels</FeatureItem>
              <FeatureItem icon={<CheckCircle2 />}>Platform-specific brand alignment</FeatureItem>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <PriceTag price="₹7,000" period="/ month" />
                <p className="text-xs text-slate-400 mt-2 font-light">6-month commitment plan available</p>
              </div>
            </div>
          </ServiceCard>

          <ServiceCard icon={<Video className="w-6 h-6" />} title="Video Production & Editing" gradient="from-blue-500 via-cyan-500 to-blue-500" delay={0.2}>
            <div className="space-y-4">
              <FeatureItem icon={<Zap />}>Professional editing: ₹1,000/min</FeatureItem>
              <FeatureItem icon={<Zap />}>Full production: ₹1,800/min</FeatureItem>
              <FeatureItem icon={<Zap />}>Premium reels: +₹500/reel</FeatureItem>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600">
                  <Shield className="w-4 h-4" />
                  Broadcast-quality assured
                </span>
              </div>
            </div>
          </ServiceCard>

          <ServiceCard icon={<Megaphone className="w-6 h-6" />} title="Performance Marketing" gradient="from-purple-500 via-indigo-500 to-purple-500" delay={0.3}>
            <div className="space-y-4">
              <FeatureItem icon={<Target />}>Google & Meta certified expertise</FeatureItem>
              <FeatureItem icon={<Target />}>AI-powered audience targeting</FeatureItem>
              <FeatureItem icon={<Target />}>Real-time optimization & analytics</FeatureItem>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <PriceTag price="30%" period="of ad budget" />
                <p className="text-xs text-slate-400 mt-2 font-light">Direct platform billing</p>
              </div>
            </div>
          </ServiceCard>
        </div>

        {/* Web Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/50" />
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 border border-blue-100">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/50" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Web Development Excellence
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              Modern, scalable web solutions built with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <WebDevCard title="WordPress Development" gradient="from-orange-500 via-red-500 to-orange-500" delay={0.4}>
              <div className="space-y-3">
                <PricingRow label="Professional Website" price="₹10,000" desc="Up to 10 pages, fully responsive" />
                <PricingRow label="E-Commerce Platform" price="₹15,000 – ₹20,000" desc="Custom features & product catalog" />
              </div>
            </WebDevCard>

            <WebDevCard title="React Development" gradient="from-blue-500 via-purple-500 to-blue-500" delay={0.5}>
              <div className="space-y-3">
                <PricingRow label="Static Website" price="₹15,000" desc="10 pages, optimized performance" />
                <PricingRow label="Dynamic Application" price="₹20,000 – ₹25,000" desc="Advanced functionality & APIs" />
              </div>
            </WebDevCard>
          </div>
        </motion.div>

        {/* Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 bg-[length:200%_auto] animate-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-emerald-200 border border-emerald-400/20"
            >
              <Award className="w-4 h-4" />
              Curated Package Solutions
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Strategic Monthly Plans
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              Comprehensive packages designed to scale with your ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <PackageCard title="Starter" subtitle="Foundation Package" price="₹12,499" sixMonth="₹62,499" features={["18 premium creatives", "3 carousel posts", "4 reels monthly", "Menu/calendar design suite", "Reel production: ₹500/reel"]} isPopular={false} index={0} hoveredPackage={hoveredPackage} setHoveredPackage={setHoveredPackage} />
            <PackageCard title="Growth" subtitle="Accelerator Package" price="₹9,999" sixMonth="₹54,499" features={["16 premium creatives", "2 carousel posts", "4 reels per month", "Reel production: ₹500/reel"]} isPopular={true} index={1} hoveredPackage={hoveredPackage} setHoveredPackage={setHoveredPackage} />
            <PackageCard title="Professional" subtitle="Performance Package" price="₹14,999" sixMonth="₹74,999" features={["21 premium creatives", "4 carousel posts", "5 professional reels", "Google & Meta Ads", "₹1,000 managed ad budget"]} isPopular={false} index={2} hoveredPackage={hoveredPackage} setHoveredPackage={setHoveredPackage} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PackageCard title="Enterprise" subtitle="Premium Package" price="₹24,999" sixMonth="₹99,999" features={["21 premium creatives", "7 professional reels", "Full ads management", "5 print-ready materials", "WordPress website (10 pages)"]} isPopular={false} isPremium={true} index={3} hoveredPackage={hoveredPackage} setHoveredPackage={setHoveredPackage} />
            <PackageCard title="Ultimate" subtitle="Elite Package" price="₹29,999" sixMonth="₹1,19,999" features={["24 premium creatives", "10 professional reels", "Full ads management", "7 print-ready materials", "React website (10 pages)"]} isPopular={false} isPremium={true} index={4} hoveredPackage={hoveredPackage} setHoveredPackage={setHoveredPackage} />
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100/80 p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-50/80 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg shadow-blue-200">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">The Competitive Edge</h3>
                <p className="text-slate-400 mt-1 font-light">Why industry leaders choose us</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Users className="w-5 h-5" />, text: "End-to-end integrated services under one roof", gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
                { icon: <Target className="w-5 h-5" />, text: "Transparent pricing with scalable solutions", gradient: "from-purple-500 to-pink-500", bg: "bg-purple-50" },
                { icon: <TrendingUp className="w-5 h-5" />, text: "Data-driven performance marketing strategies", gradient: "from-emerald-500 to-green-500", bg: "bg-emerald-50" },
                { icon: <Zap className="w-5 h-5" />, text: "Lightning-fast, SEO-optimized web solutions", gradient: "from-orange-500 to-red-500", bg: "bg-orange-50" },
                { icon: <Award className="w-5 h-5" />, text: "24/7 dedicated support & consultation", gradient: "from-indigo-500 to-purple-500", bg: "bg-indigo-50" },
                { icon: <Sparkles className="w-5 h-5" />, text: "Proven track record with Fortune 500 clients", gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-50" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 bg-white border border-slate-100 group-hover:border-slate-200 group-hover:shadow-md rounded-xl transition-all duration-300">
                    <div className={`p-2.5 bg-gradient-to-br ${item.gradient} rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm font-light pt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient { animation: gradient 3s ease infinite; }
      `}</style>
    </section>
  );
}

function ServiceCard({ icon, title, gradient, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200"
    >
      <div className={`h-1 bg-gradient-to-r ${gradient} bg-[length:200%_auto] animate-gradient`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

      <div className="relative p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
            <div className="text-white">{icon}</div>
          </div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <div className="text-slate-600">{children}</div>
      </div>
    </motion.div>
  );
}

function WebDevCard({ title, gradient, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 overflow-hidden border border-slate-100"
    >
      <div className={`p-6 bg-gradient-to-br ${gradient} bg-[length:200%_auto] animate-gradient relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <h3 className="relative text-xl font-bold text-white flex items-center gap-3">
          <Globe className="w-6 h-6" />
          {title}
        </h3>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
}

function PackageCard({ title, subtitle, price, sixMonth, features, isPopular, isPremium, index, hoveredPackage, setHoveredPackage }) {
  const isHovered = hoveredPackage === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
      onHoverStart={() => setHoveredPackage(index)}
      onHoverEnd={() => setHoveredPackage(null)}
      className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
        isPopular
          ? "border-blue-300 shadow-blue-100"
          : isPremium
          ? "border-purple-200 shadow-purple-100"
          : "border-slate-100"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-bl-2xl text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-md">
            <Star className="w-3.5 h-3.5 fill-current" />
            BEST VALUE
          </div>
        </div>
      )}
      {isPremium && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-bl-2xl text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            PREMIUM
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`relative p-8 ${
        isPopular ? "bg-gradient-to-br from-blue-50 to-cyan-50" : isPremium ? "bg-gradient-to-br from-purple-50 to-pink-50" : "bg-slate-50"
      }`}>
        <p className="text-sm font-semibold text-slate-400 mb-1 tracking-wide uppercase">{subtitle}</p>
        <h4 className="text-3xl font-bold text-slate-900 mb-4">{title}</h4>
        <div className="flex items-baseline gap-2 mb-4">
          <span className={`text-5xl font-bold ${
            isPopular ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
            : isPremium ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            : "text-slate-800"
          }`}>
            {price}
          </span>
          <span className="text-slate-400 font-light">/ month</span>
        </div>
        <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <p className="text-sm font-semibold text-emerald-700">6-month plan: {sixMonth}</p>
        </div>
      </div>

      {/* Features */}
      <div className="relative p-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                isPopular ? "text-blue-500" : isPremium ? "text-purple-500" : "text-emerald-500"
              }`} />
              <span className="text-slate-600 text-sm leading-relaxed font-light">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
            isPopular
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-200 hover:shadow-blue-300"
              : isPremium
              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-200 hover:shadow-purple-300"
              : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white shadow-lg shadow-slate-200"
          }`}
        >
          Get Started
          <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
        </motion.button>
      </div>
    </motion.div>
  );
}

function FeatureItem({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-emerald-500 mt-0.5 flex-shrink-0">{icon}</div>
      <span className="text-sm text-slate-600 leading-relaxed font-light">{children}</span>
    </div>
  );
}

function PriceTag({ price, period }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold text-slate-800">{price}</span>
      <span className="text-sm text-slate-400 font-light">{period}</span>
    </div>
  );
}

function PricingRow({ label, price, desc }) {
  return (
    <div className="flex items-start justify-between gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200 border border-slate-100 hover:border-slate-200 group">
      <div>
        <p className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-200">{label}</p>
        <p className="text-xs text-slate-400 mt-1 font-light">{desc}</p>
      </div>
      <span className="font-bold text-blue-600 whitespace-nowrap text-lg">{price}</span>
    </div>
  );
}
