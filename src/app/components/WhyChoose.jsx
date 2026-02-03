"use client"
import { useState, useEffect, useRef } from 'react';
import { Target, Lightbulb, Users, Zap, TrendingUp, Award, Shield, Rocket } from 'lucide-react';

export default function WhyChoose() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align every solution with your core business objectives and growth targets',
      color: 'from-violet-500 to-purple-500',
      glow: 'violet'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that keep you ahead of the competition',
      color: 'from-blue-500 to-cyan-500',
      glow: 'blue'
    },
    {
      icon: Users,
      title: 'True Partnership',
      description: 'Your success is our success. We invest in long-term relationships',
      color: 'from-purple-500 to-pink-500',
      glow: 'purple'
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Fast turnaround without compromising on quality or attention to detail',
      color: 'from-yellow-500 to-orange-500',
      glow: 'yellow'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Data-driven strategies that deliver measurable ROI and growth',
      color: 'from-green-500 to-emerald-500',
      glow: 'green'
    },
    {
      icon: Shield,
      title: 'Full Transparency',
      description: 'Clear communication, honest timelines, and complete visibility',
      color: 'from-indigo-500 to-blue-500',
      glow: 'indigo'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Award className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Your Strategic Partner</span>
          </div>

          {/* Main heading */}
          <h2 
            className={`text-4xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block mb-2 text-white">Why Choose</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              PrioritizeLabs?
            </span>
          </h2>

          {/* Description with emphasis */}
          <p 
            className={`max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            We're not just another agency. We're your{' '}
            <span className="text-violet-400 font-semibold relative">
              strategic partner
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4">
                <path d="M0,2 Q50,0 100,2" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-400/50" />
              </svg>
            </span>
            —focused on understanding your challenges and delivering solutions aligned with your business priorities.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                
                {/* Card content */}
                <div className="relative h-full p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl group-hover:border-violet-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                  {/* Icon container */}
                  <div className={`inline-flex p-4 mb-6 rounded-xl bg-gradient-to-br ${feature.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div 
          className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 border-2 border-slate-900 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Ready to elevate your brand?</p>
                <p className="text-slate-400 text-sm">Join 500+ satisfied clients</p>
              </div>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}