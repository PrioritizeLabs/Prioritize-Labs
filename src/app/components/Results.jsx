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
    metric: "+250%",
    metricLabel: "Avg. Visibility Boost"
  },
  {
    title: "Higher engagement rates across digital channels",
    description: "Create meaningful connections with your audience through compelling content",
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    metric: "+180%",
    metricLabel: "Engagement Growth"
  },
  {
    title: "Improved conversion rates and sales",
    description: "Turn visitors into customers with optimized user experiences and persuasive design",
    icon: ShoppingCart,
    color: 'from-green-500 to-emerald-500',
    metric: "+320%",
    metricLabel: "Conversion Increase"
  },
  {
    title: "Streamlined creative and technical workflows",
    description: "Efficient processes that save time and reduce costs while maintaining quality",
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    metric: "60%",
    metricLabel: "Time Saved"
  },
  {
    title: "Access to top-tier creative and technical talent",
    description: "Work with industry experts who bring specialized skills to every project",
    icon: Users,
    color: 'from-purple-500 to-pink-500',
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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCounters(prev => 
        prev.map((val, idx) => {
          if (val < 100) return Math.min(val + 2, 100);
          return val;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-green-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Radial grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Proven Impact</span>
          </div>

          <h2 
            className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              Results That Matter
            </span>
          </h2>

          <p 
            className={`max-w-2xl mx-auto text-lg text-slate-400 transform transition-all duration-1000 delay-400 ${
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
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />

                {/* Card */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-gradient-to-br from-slate-900 to-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl group-hover:border-violet-500/50 transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon section */}
                  <div className="relative flex-shrink-0">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="flex-grow relative">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h3>
                      <CheckCircle2 className={`w-6 h-6 flex-shrink-0 transition-all duration-500 ${
                        isHovered ? 'text-green-400 scale-110' : 'text-slate-600'
                      }`} />
                    </div>
                    
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-4 relative h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Metric section */}
                  <div className="relative flex-shrink-0 text-right">
                    <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color} transition-transform duration-500 group-hover:scale-110`}>
                      {item.metric}
                    </div>
                    <div className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
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
              className="text-center p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-violet-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
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
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
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