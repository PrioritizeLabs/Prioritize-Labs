"use client"

import { useState, useEffect, useRef } from 'react';
import {
  ShoppingBag, Cpu, Heart, Home, GraduationCap,
  Coffee, Briefcase, ChevronLeft, ChevronRight,
  Sparkles, ArrowUpRight, Store
} from 'lucide-react';

import { useCTAModal } from '../hooks/Usectamodal';
import CTAModal from './CTAModal';

const industries = [
  {
    title: "E-commerce",
    description: "Drive sales with optimized online stores, compelling product visuals, and conversion-focused design",
    icon: ShoppingBag,
    color: 'from-violet-500 to-purple-500',
    statsBg: 'bg-violet-50 text-violet-700 border-violet-200',
    activeBorder: '#A78BFA',
    stats: "500+ stores launched",
    services: ['Store Development', 'Product Photography', 'Marketing Automation']
  },
  {
    title: "Technology",
    description: "Showcase innovation with cutting-edge web experiences, technical documentation, and developer tools",
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    statsBg: 'bg-blue-50 text-blue-700 border-blue-200',
    activeBorder: '#60A5FA',
    stats: "200+ tech clients",
    services: ['SaaS Platforms', 'API Documentation', 'Tech Marketing']
  },
  {
    title: "Healthcare",
    description: "Build trust with compliant, accessible platforms that prioritize patient experience and data security",
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    statsBg: 'bg-red-50 text-red-700 border-red-200',
    activeBorder: '#F87171',
    stats: "150+ healthcare projects",
    services: ['HIPAA Compliance', 'Patient Portals', 'Medical Marketing']
  },
  {
    title: "Real Estate",
    description: "Sell properties faster with immersive 3D tours, stunning photography, and lead-generation websites",
    icon: Home,
    color: 'from-green-500 to-emerald-500',
    statsBg: 'bg-green-50 text-green-700 border-green-200',
    activeBorder: '#4ADE80',
    stats: "1000+ properties marketed",
    services: ['3D Virtual Tours', 'Property Websites', 'Drone Photography']
  },
  {
    title: "Education",
    description: "Engage students with interactive learning platforms, course materials, and educational content",
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-500',
    statsBg: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    activeBorder: '#FBBF24',
    stats: "100+ educational platforms",
    services: ['LMS Development', 'Educational Videos', 'Student Portals']
  },
  {
    title: "Hospitality",
    description: "Attract guests with beautiful booking experiences, virtual tours, and engaging social media content",
    icon: Coffee,
    color: 'from-purple-500 to-fuchsia-500',
    statsBg: 'bg-purple-50 text-purple-700 border-purple-200',
    activeBorder: '#C084FC',
    stats: "300+ venues promoted",
    services: ['Booking Systems', 'Menu Design', 'Social Media']
  },
  {
    title: "Professional Services",
    description: "Establish authority with polished websites, thought leadership content, and client management tools",
    icon: Briefcase,
    color: 'from-indigo-500 to-blue-500',
    statsBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    activeBorder: '#818CF8',
    stats: "250+ firms served",
    services: ['Corporate Websites', 'Client Portals', 'Brand Strategy']
  },
  {
    title: "Retail",
    description: "Elevate in-store and omnichannel experiences with eye-catching branding, signage, and digital touchpoints that keep shoppers coming back",
    icon: Store,
    color: 'from-rose-500 to-orange-400',
    statsBg: 'bg-rose-50 text-rose-700 border-rose-200',
    activeBorder: '#FB7185',
    stats: "350+ retail brands served",
    services: ['Visual Merchandising', 'Loyalty Programs', 'In-store Signage']
  }
];

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const { isOpen, source, openModal, closeModal } = useCTAModal();


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  const nextSlide = () => { setCurrentIndex((prev) => (prev + 1) % industries.length); setIsAutoPlaying(false); };
  const prevSlide = () => { setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length); setIsAutoPlaying(false); };
  const goToSlide = (index) => { setCurrentIndex(index); setIsAutoPlaying(false); };

  const getVisibleSlides = () => {
    if (isMobile) {
      return [{ ...industries[currentIndex], offset: 0, index: currentIndex }];
    }
    return [-1, 0, 1].map(i => {
      const index = (currentIndex + i + industries.length) % industries.length;
      return { ...industries[index], offset: i, index };
    });
  };

  const CARD_WIDTH = isMobile ? 300 : 320;
  const SLIDE_OFFSET = isMobile ? 0 : 340;

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#F7F5F0' }}
    >
      <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full border" style={{ width: 700, height: 700, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderColor: 'rgba(120,100,80,0.07)' }} />
        <div className="absolute rounded-full border" style={{ width: 460, height: 460, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderColor: 'rgba(120,100,80,0.09)' }} />
        <div className="absolute rounded-full border" style={{ width: 260, height: 260, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderColor: 'rgba(120,100,80,0.11)' }} />
        <div className="absolute top-0 right-0 w-64 h-64" style={{ background: 'radial-gradient(ellipse at top right, rgba(139,92,246,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(34,197,94,0.05) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(120,100,80,0.1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 mb-4 border rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ background: 'rgba(139,92,246,0.07)', borderColor: 'rgba(139,92,246,0.2)' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-violet-600">Diverse Expertise</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-3 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="block mb-1" style={{ color: '#1C1712' }}>Industries</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500">We Serve</span>
          </h2>

          <p
            className={`max-w-lg mx-auto text-sm md:text-base transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ color: '#7C6F5E' }}
          >
            Specialized expertise across sectors to deliver tailored solutions that drive results
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="relative flex items-center justify-center mx-auto overflow-hidden"
            style={{ height: isMobile ? 410 : 440 }}
          >
            {getVisibleSlides().map((industry) => {
              const Icon = industry.icon;
              const isCenter = industry.offset === 0;

              return (
                <div
                  key={industry.index}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${industry.offset * SLIDE_OFFSET}px) scale(${isCenter ? 1 : 0.83})`,
                    opacity: isCenter ? 1 : 0.28,
                    zIndex: isCenter ? 20 : 10,
                    pointerEvents: isCenter ? 'auto' : 'none',
                    width: CARD_WIDTH,
                  }}
                >
                  {/* Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${industry.color} rounded-2xl blur-lg transition-opacity duration-500`}
                    style={{ opacity: isCenter ? 0.1 : 0 }}
                  />

                  {/* Card */}
                  <div
                    className="relative rounded-2xl border transition-all duration-500 overflow-hidden"
                    style={{
                      background: '#fff',
                      borderColor: isCenter ? industry.activeBorder : '#E8E3DB',
                      borderWidth: isCenter ? '1.5px' : '1px',
                      boxShadow: isCenter
                        ? '0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)'
                        : '0 2px 8px rgba(0,0,0,0.03)',
                      height: isMobile ? 390 : 420,
                    }}
                  >
                    <div className="p-6">
                      {/* Icon */}
                      <div
                        className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-br ${industry.color} shadow-sm transition-transform duration-500 ${isCenter ? 'scale-105' : 'scale-100'}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#1C1712' }}>
                        {industry.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed mb-4" style={{ color: '#7C6F5E', fontWeight: 300 }}>
                        {industry.description}
                      </p>

                      {/* Stats badge */}
                      <div className={`inline-flex items-center px-3 py-1 mb-4 rounded-full border text-xs font-semibold ${industry.statsBg}`}>
                        {industry.stats}
                      </div>

                      {/* Services */}
                      <div className="space-y-1.5">
                        {industry.services.map((service, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs" style={{ color: '#9C8E7E' }}>
                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${industry.color}`} />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${industry.color} transition-opacity duration-500`}
                      style={{ opacity: isCenter ? 1 : 0 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full border transition-all duration-200 group hover:shadow-md"
            style={{ background: '#fff', borderColor: '#E8E3DB' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-stone-400 group-hover:text-violet-500 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full border transition-all duration-200 group hover:shadow-md"
            style={{ background: '#fff', borderColor: '#E8E3DB' }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-stone-400 group-hover:text-violet-500 transition-colors" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-7 flex-wrap">
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="h-1.5 rounded-full transition-all duration-400"
              style={{
                width: currentIndex === idx ? 24 : 6,
                background: currentIndex === idx
                  ? 'linear-gradient(90deg,#7C3AED,#9333EA)'
                  : '#D6D0C8',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Autoplay toggle */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs transition-colors"
            style={{ color: '#B0A898' }}
            onMouseEnter={e => e.target.style.color = '#7C3AED'}
            onMouseLeave={e => e.target.style.color = '#B0A898'}
          >
            {isAutoPlaying ? 'Pause' : 'Resume'} Auto-play
          </button>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm" style={{ color: '#9C8E7E' }}>
            Don't see your industry? We adapt to any sector.
          </p>
          <button            onClick={() => openModal("Industries Section")}
            // href="/contact-us"
            className="group inline-flex items-center gap-2 text-white text-sm px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-100 bg-gradient-to-r from-violet-600 to-purple-600"
          >
            Discuss Your Industry Needs
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}