"use client"

import { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, 
  Cpu, 
  Heart, 
  Home, 
  GraduationCap, 
  Coffee,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const industries = [
  {
    title: "E-commerce",
    description: "Drive sales with optimized online stores, compelling product visuals, and conversion-focused design",
    icon: ShoppingBag,
    color: 'from-violet-500 to-purple-500',
    stats: "500+ stores launched",
    services: ['Store Development', 'Product Photography', 'Marketing Automation']
  },
  {
    title: "Technology",
    description: "Showcase innovation with cutting-edge web experiences, technical documentation, and developer tools",
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    stats: "200+ tech clients",
    services: ['SaaS Platforms', 'API Documentation', 'Tech Marketing']
  },
  {
    title: "Healthcare",
    description: "Build trust with compliant, accessible platforms that prioritize patient experience and data security",
    icon: Heart,
    color: 'from-red-500 to-pink-500',
    stats: "150+ healthcare projects",
    services: ['HIPAA Compliance', 'Patient Portals', 'Medical Marketing']
  },
  {
    title: "Real Estate",
    description: "Sell properties faster with immersive 3D tours, stunning photography, and lead-generation websites",
    icon: Home,
    color: 'from-green-500 to-emerald-500',
    stats: "1000+ properties marketed",
    services: ['3D Virtual Tours', 'Property Websites', 'Drone Photography']
  },
  {
    title: "Education",
    description: "Engage students with interactive learning platforms, course materials, and educational content",
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-500',
    stats: "100+ educational platforms",
    services: ['LMS Development', 'Educational Videos', 'Student Portals']
  },
  {
    title: "Hospitality",
    description: "Attract guests with beautiful booking experiences, virtual tours, and engaging social media content",
    icon: Coffee,
    color: 'from-purple-500 to-fuchsia-500',
    stats: "300+ venues promoted",
    services: ['Booking Systems', 'Menu Design', 'Social Media']
  },
  {
    title: "Professional Services",
    description: "Establish authority with polished websites, thought leadership content, and client management tools",
    icon: Briefcase,
    color: 'from-indigo-500 to-blue-500',
    stats: "250+ firms served",
    services: ['Corporate Websites', 'Client Portals', 'Brand Strategy']
  }
];

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible slides for carousel effect
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + industries.length) % industries.length;
      slides.push({ ...industries[index], offset: i, index });
    }
    return slides;
  };

  return (
    <section id='industries' ref={sectionRef} className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Diverse Expertise</span>
          </div>

          <h2 
            className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-white mb-2">Industries</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              We Serve
            </span>
          </h2>

          <p 
            className={`max-w-3xl mx-auto text-lg text-slate-400 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Bringing specialized expertise across multiple sectors to deliver tailored solutions that drive results
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Slider container */}
          <div className="relative h-[550px] flex items-center justify-center">
            {getVisibleSlides().map((industry) => {
              const Icon = industry.icon;
              const isCenter = industry.offset === 0;
              const scale = isCenter ? 1 : 0.85;
              const opacity = isCenter ? 1 : 0.4;
              const zIndex = isCenter ? 20 : 10;
              const translateX = industry.offset * 380;
              
              return (
                <div
                  key={industry.index}
                  className="absolute transition-all duration-700 ease-out "
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    pointerEvents: isCenter ? 'auto' : 'none'
                  }}
                >
                  {/* Card */}
                  <div className="w-[360px] relative">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${industry.color} rounded-3xl blur-xl ${isCenter ? 'opacity-40' : 'opacity-0'} transition-opacity duration-700`} />
                    
                    {/* Card content */}
                    <div className={`relative  h-[500px] p-8 bg-gradient-to-br from-slate-900 to-slate-900/50 backdrop-blur-sm border rounded-3xl transition-all duration-700 ${
                      isCenter ? 'border-violet-500' : 'border-slate-800'
                    }`}>
                      {/* Icon */}
                      <div className={`inline-flex p-5 mb-6 rounded-2xl bg-gradient-to-br ${industry.color} transform transition-all duration-500 ${
                        isCenter ? 'scale-110' : 'scale-100'
                      } shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white! mb-4">
                        {industry.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {industry.description}
                      </p>

                      {/* Stats */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r ${industry.color} bg-opacity-10 border border-violet-500/20`}>
                        <span className="text-sm text-violet-300 font-semibold">
                          {industry.stats}
                        </span>
                      </div>

                      {/* Services */}
                      <div className="space-y-2">
                        {industry.services.map((service, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-500"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.color}`} />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn more (only visible on center card) */}
                      {isCenter && (
                        <div className="absolute bottom-8 right-8">
                          <button className="group flex items-center gap-2 text-violet-400 font-semibold hover:text-violet-300 transition-colors">
                            <span className="text-sm">Learn More</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                          </button>
                        </div>
                      )}

                      {/* Bottom gradient */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} rounded-b-3xl ${
                        isCenter ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-700`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-violet-400 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-full hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-violet-400 transition-colors" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === idx 
                  ? 'w-12 bg-gradient-to-r from-violet-500 to-purple-500' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-slate-500 hover:text-violet-400 transition-colors"
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">
            Don't see your industry? We adapt to any sector.
          </p>
          <a
            href="/contact-us"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>Discuss Your Industry Needs</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}