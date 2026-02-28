"use client"

import { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Target, 
  ShoppingCart, 
  Zap, 
  Users,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  BarChart3
} from 'lucide-react';

const results = [
  {
    title: "Increased online visibility and brand recognition",
    description: "Dominate search rankings and social media with strategic content and SEO optimization",
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-500',
    lightBg: 'group-hover:bg-violet-50',
    border: 'border-violet-100 group-hover:border-violet-300',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    progressColor: 'from-violet-500 to-purple-500',
    metricColor: 'from-violet-600 to-purple-600',
    metric: "+250%",
    metricLabel: "Avg. Visibility Boost"
  },
  {
    title: "Higher engagement rates across digital channels",
    description: "Create meaningful connections with your audience through compelling content",
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    lightBg: 'group-hover:bg-blue-50',
    border: 'border-blue-100 group-hover:border-blue-300',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    progressColor: 'from-blue-500 to-cyan-500',
    metricColor: 'from-blue-600 to-cyan-600',
    metric: "+180%",
    metricLabel: "Engagement Growth"
  },
  {
    title: "Improved conversion rates and sales",
    description: "Turn visitors into customers with optimized user experiences and persuasive design",
    icon: ShoppingCart,
    color: 'from-emerald-500 to-green-500',
    lightBg: 'group-hover:bg-emerald-50',
    border: 'border-emerald-100 group-hover:border-emerald-300',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    progressColor: 'from-emerald-500 to-green-500',
    metricColor: 'from-emerald-600 to-green-600',
    metric: "+320%",
    metricLabel: "Conversion Increase"
  },
  {
    title: "Streamlined creative and technical workflows",
    description: "Efficient processes that save time and reduce costs while maintaining quality",
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    lightBg: 'group-hover:bg-amber-50',
    border: 'border-amber-100 group-hover:border-amber-300',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    progressColor: 'from-amber-500 to-orange-500',
    metricColor: 'from-amber-600 to-orange-600',
    metric: "60%",
    metricLabel: "Time Saved"
  },
  {
    title: "Access to top-tier creative and technical talent",
    description: "Work with industry experts who bring specialized skills to every project",
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    lightBg: 'group-hover:bg-purple-50',
    border: 'border-purple-100 group-hover:border-purple-300',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    progressColor: 'from-purple-500 to-pink-500',
    metricColor: 'from-purple-600 to-pink-600',
    metric: "500+",
    metricLabel: "Expert Hours"
  },
];

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [counters, setCounters] = useState(results.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCounters(prev => prev.map(val => val < 100 ? Math.min(val + 2, 100) : val));
    }, 20);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl" />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-100 border border-violet-200 rounded-full transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-violet-500" />
            <span className="text-sm text-violet-600 font-medium">Proven Impact</span>
          </div>

          <h2 
            className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500">
              Results That Matter
            </span>
          </h2>

          <p 
            className={`max-w-2xl mx-auto text-lg text-slate-500 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Real outcomes from real partnerships. Here's what you can expect when working with us.
          </p>
        </div>

        {/* Results list */}
        <div className="max-w-5xl mx-auto space-y-6">
          {results.map((item, i) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === i;
            const progress = counters[i];
            
            return (
              <div
                key={i}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Subtle glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-all duration-500`} />

                {/* Card */}
                <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-white border ${item.border} rounded-2xl transition-all duration-500 overflow-hidden shadow-sm group-hover:shadow-md ${item.lightBg}`}>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${item.iconBg} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow relative">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {item.title}
                      </h3>
                      <CheckCircle2 className={`w-6 h-6 flex-shrink-0 transition-all duration-500 ${
                        isHovered ? 'text-emerald-500 scale-110' : 'text-slate-200'
                      }`} />
                    </div>
                    
                    <p className="text-slate-500 group-hover:text-slate-600 transition-colors leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-4 relative h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.progressColor} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="relative flex-shrink-0 text-right">
                    <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.metricColor} transition-transform duration-500 group-hover:scale-110`}>
                      {item.metric}
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
                      {item.metricLabel}
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Corner sparkle */}
                  <Sparkles className={`absolute top-4 right-4 w-5 h-5 text-violet-400 transition-all duration-500 ${
                    isHovered ? 'opacity-100 rotate-12 scale-110' : 'opacity-0 rotate-0 scale-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats summary */}
        <div 
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '250%', label: 'Avg ROI Increase' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-white border border-slate-100 rounded-xl hover:border-violet-200 hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transform transition-all duration-1000 delay-1400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-200 transition-all duration-300 hover:scale-105"
          >
            <span>See Our Case Studies</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}