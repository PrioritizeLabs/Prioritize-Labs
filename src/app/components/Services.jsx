"use client"
import { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Paintbrush2,
  Video,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { useCTAModal } from '../hooks/Usectamodal';
import CTAModal from './CTAModal';


const services = [
  {
    title: "Web Development Excellence",
    desc: "Custom websites and e-commerce platforms that are fast, responsive, and SEO-optimized.",
    icon: Code2,
    accentClass: 'violet',
    features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast'],
    link: '/services/web-dev',
  },
  {
    title: "Creative Content & Social Media",
    desc: "Viral, scroll-stopping content creation and social media management that grows your brand.",
    icon: Paintbrush2,
    accentClass: 'blue',
    features: ['Content Strategy', 'Analytics', 'Multi-Platform'],
    link: '/services/creative-services',
  },
  {
    title: "Video Production & Editing",
    desc: "Professional reels, TikToks, and corporate videos including shooting, editing, and sound design.",
    icon: Video,
    accentClass: 'orange',
    features: ['Professional Editing', 'Sound Design', 'Motion Graphics'],
    link: '/services/video-production',
  },
];

const accentConfig = {
  violet: {
    stripe: 'from-violet-600 to-violet-300',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-700',
    pillBg: 'bg-violet-100 text-violet-700',
    link: 'text-violet-700',
    hoverBorder: 'hover:border-violet-300',
    hoverNum: 'group-hover:text-violet-200',
    hoverGlow: 'group-hover:shadow-violet-100',
  },
  blue: {
    stripe: 'from-blue-600 to-blue-300',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    pillBg: 'bg-blue-100 text-blue-700',
    link: 'text-blue-700',
    hoverBorder: 'hover:border-blue-300',
    hoverNum: 'group-hover:text-blue-200',
    hoverGlow: 'group-hover:shadow-blue-100',
  },
  orange: {
    stripe: 'from-orange-600 to-orange-300',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-700',
    pillBg: 'bg-orange-100 text-orange-700',
    link: 'text-orange-700',
    hoverBorder: 'hover:border-orange-300',
    hoverNum: 'group-hover:text-orange-200',
    hoverGlow: 'group-hover:shadow-orange-100',
  },
};

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
const { isOpen, source, openModal, closeModal } = useCTAModal();


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: '#F7F5F0' }}
    >
      <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c4bfb0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'rgba(139,92,246,0.07)', filter: 'blur(80px)' }} />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'rgba(59,130,246,0.06)', filter: 'blur(80px)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'rgba(251,146,60,0.05)', filter: 'blur(80px)' }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white border rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ borderColor: '#E2DDD6' }}
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#7C6F5E' }}>
              What We Offer
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`font-serif text-6xl md:text-7xl leading-[1.05] tracking-tight mb-5 transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ color: '#1C1712',  }}
          >
            Our Core{' '}
            <em className="italic not-italic" style={{ color: '#7C3AED', fontStyle: '' }}>
              Services
            </em>
          </h2>

          {/* Subtext */}
          <p
            className={`text-lg max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ color: '#7C6F5E', fontWeight: 300 }}
          >
            Comprehensive solutions designed to transform your digital presence and drive measurable results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            const accent = accentConfig[service.accentClass];

            return (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl border overflow-hidden transition-all duration-500 ${accent.hoverBorder} hover:-translate-y-1 hover:shadow-xl ${accent.hoverGlow} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  borderColor: '#E8E3DB',
                  transitionDelay: `${400 + i * 100}ms`,
                }}
              >
                {/* Animated top stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.stripe} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400`}
                />

                <div className="p-8">
                  {/* Number badge */}
                  <span
                    className={`absolute top-6 right-6 font-serif text-3xl leading-none transition-colors duration-300 ${accent.hoverNum}`}
                    style={{ color: '#E8E3DB', fontFamily: '"DM Serif Display", Georgia, serif' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${accent.iconBg} ${accent.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-3 leading-snug transition-colors duration-200"
                    style={{ color: '#1C1712' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: '#7C6F5E', fontWeight: 300 }}
                  >
                    {service.desc}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${accent.pillBg}`}
                        style={{ letterSpacing: '0.02em' }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {service.link && (
                    <a
                      href={service.link}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-3 ${accent.link}`}
                    >
                      Learn more
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <hr style={{ borderColor: '#E8E3DB', borderTopWidth: '1px', marginBottom: '36px' }} />

        {/* Bottom CTA */}
        <div
          className={`flex items-center gap-5 flex-wrap transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm" style={{ color: '#9C8E7E' }}>
            Can't find what you're looking for?
          </p>
          <button
          onClick={() => openModal("Services Section")}
            
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#1C1712', color: '#F7F5F0' }}
          >
            Let's Discuss Your Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
      `}</style>
    </section>
  );
}