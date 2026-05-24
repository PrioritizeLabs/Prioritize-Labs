"use client"
import { useState, useEffect, useRef } from 'react';
import { Target, Lightbulb, Users, Zap, TrendingUp, Award, Shield, Rocket } from 'lucide-react';
import { useCTAModal } from '../hooks/Usectamodal';
import CTAModal from './CTAModal';

export default function WhyChoose() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isOpen, source, openModal, closeModal } = useCTAModal();


  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align every solution with your core business objectives and growth targets',
      color: 'from-violet-500 to-purple-500',
      lightBg: 'bg-violet-50',
      border: 'border-violet-100 group-hover:border-violet-300',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600',
      accentLine: 'from-transparent via-violet-400 to-transparent'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge solutions that keep you ahead of the competition',
      color: 'from-blue-500 to-cyan-500',
      lightBg: 'bg-blue-50',
      border: 'border-blue-100 group-hover:border-blue-300',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      accentLine: 'from-transparent via-blue-400 to-transparent'
    },
    {
      icon: Users,
      title: 'True Partnership',
      description: 'Your success is our success. We invest in long-term relationships',
      color: 'from-purple-500 to-pink-500',
      lightBg: 'bg-purple-50',
      border: 'border-purple-100 group-hover:border-purple-300',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      accentLine: 'from-transparent via-purple-400 to-transparent'
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Fast turnaround without compromising on quality or attention to detail',
      color: 'from-amber-500 to-orange-500',
      lightBg: 'bg-amber-50',
      border: 'border-amber-100 group-hover:border-amber-300',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      accentLine: 'from-transparent via-amber-400 to-transparent'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Data-driven strategies that deliver measurable ROI and growth',
      color: 'from-emerald-500 to-green-500',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-100 group-hover:border-emerald-300',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      accentLine: 'from-transparent via-emerald-400 to-transparent'
    },
    {
      icon: Shield,
      title: 'Full Transparency',
      description: 'Clear communication, honest timelines, and complete visibility',
      color: 'from-indigo-500 to-blue-500',
      lightBg: 'bg-indigo-50',
      border: 'border-indigo-100 group-hover:border-indigo-300',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      accentLine: 'from-transparent via-indigo-400 to-transparent'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-tr from-black-950 to-purple-950 overflow-hidden">
      <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/50 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-100 border border-violet-200 rounded-full transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Award className="w-4 h-4 text-violet-500" />
            <span className="text-sm text-violet-600 font-medium">Your Strategic Partner</span>
          </div>

          <h2 
            className={`text-4xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block mb-2 text-white">Why Choose</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500">
              PrioritizeLabs?
            </span>
          </h2>

          <p 
            className={`max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            We're not just another agency. We're your{' '}
            <span className="text-violet-100 font-semibold relative">
              strategic partner
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4">
                <path d="M0,2 Q50,0 100,2" stroke="currentColor" strokeWidth="2" fill="none" className="text-violet-400/60" />
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
                {/* Subtle glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`} />

                {/* Card */}
                <div className={`relative h-full p-8 bg-black/50 overflow-hidden rounded-2xl transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:-translate-y-2`}>
                  {/* Tinted corner bg */}
                  <div className={`absolute top-0 right-0 w-28 h-28 ${feature.lightBg} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`inline-flex p-4 mb-6 rounded-xl ${feature.iconBg} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.accentLine} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-100/10 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 border-2 border-white flex items-center justify-center shadow-sm">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-slate-100 font-semibold text-lg">Ready to elevate your brand?</p>
                <p className="text-slate-400 text-sm">Join 500+ satisfied clients</p>
              </div>
            </div>
            <button
              onClick={() => openModal("Why Choose Us Section")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-900 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}