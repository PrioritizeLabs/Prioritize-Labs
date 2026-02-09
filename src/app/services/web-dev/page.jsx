"use client"

import { motion } from "framer-motion"
import {
  Bot,
  Globe,
  ShoppingCart,
  GraduationCap,
  Utensils,
  Store,
  Gem,
  Building2,
  Shirt,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Star,
  MessageSquare,
  Rocket
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const industries = [
  {
    title: "Education",
    icon: GraduationCap,
    description: "AI chatbots, admission portals, and SEO-optimized school websites",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI & Tech",
    icon: Bot,
    description: "Interactive demos, API integrations, and intelligent workflows",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    description: "Smart recommendations and conversion-optimized online stores",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Food & Dining",
    icon: Utensils,
    description: "Online ordering, reservations, and local SEO for restaurants",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Retail",
    icon: Store,
    description: "Bridge physical stores to digital with AI-powered platforms",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "Jewelry",
    icon: Gem,
    description: "Virtual try-ons and elegant luxury brand showcases",
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    title: "Real Estate",
    icon: Building2,
    description: "Virtual tours and AI property recommendation systems",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Fashion",
    icon: Shirt,
    description: "Personalized AI styling and high-converting storefronts",
    gradient: "from-pink-500 to-rose-500"
  }
]

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "40%", label: "Avg. Conversion Boost" },
  { number: "24/7", label: "AI Support Available" },
  { number: "98%", label: "Client Satisfaction" }
]

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-2s load times"
  },
  {
    icon: TrendingUp,
    title: "SEO Mastery",
    description: "Dominate local Agra searches and beyond"
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Smart chatbots that convert 24/7"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Designs that visitors love to use"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Launch in 2-4 weeks, not months"
  },
  {
    icon: Sparkles,
    title: "Future-Proof",
    description: "Built with cutting-edge tech stacks"
  }
]

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-block">
            <span className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket size={16} className="text-purple-400" />
              Agra's Leading AI Web Agency
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Build Websites That
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Work While You Sleep
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered websites that generate leads, answer customer questions automatically, 
            and transform your business into a 24/7 growth machine.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70">
              Get Free AI Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-purple-500/50 hover:border-purple-500 px-8 py-4 rounded-full hover:bg-purple-500/10 transition-all">
              View Portfolio
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            variants={fadeUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Why Businesses Choose Us
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              We don't just build websites. We engineer digital experiences that drive real results.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all"
                >
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Industries We Empower
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              From schools to jewelry brands, we bring AI innovation to every sector in Agra and beyond.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry, i) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-transparent overflow-hidden transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${industry.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Our Process
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              From idea to launch in four simple steps
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Discover", desc: "We analyze your business goals and target audience" },
              { step: "02", title: "Design", desc: "Create stunning, conversion-focused mockups" },
              { step: "03", title: "Develop", desc: "Build with cutting-edge AI and web technologies" },
              { step: "04", title: "Deploy", desc: "Launch, optimize, and scale your digital presence" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group flex items-center gap-6 bg-gradient-to-r from-slate-800/30 to-transparent p-8 rounded-2xl border border-slate-700/30 hover:border-purple-500/50 transition-all"
              >
                <div className="text-5xl font-bold text-purple-500/30 group-hover:text-purple-500/50 transition-colors">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                <CheckCircle2 className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Loved by Businesses
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Rajesh Kumar", role: "Education Director", quote: "Our admissions increased by 60% after the new AI website launch." },
              { name: "Priya Sharma", role: "E-commerce Owner", quote: "The chatbot handles 80% of customer queries. Game changer!" },
              { name: "Amit Verma", role: "Restaurant Owner", quote: "Online orders tripled. Best investment we've made." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



    </div>
  )
}