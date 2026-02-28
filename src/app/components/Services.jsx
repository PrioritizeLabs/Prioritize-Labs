"use client"
import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Share2, 
  Box, 
  Video, 
  Users, 
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Paintbrush2
} from 'lucide-react';


const services = [
  {
    title: "Web Development Excellence",
    desc: "Custom websites and e-commerce platforms that are fast, responsive, and SEO-optimized.",
    icon: Code2,
    color: 'from-violet-500 to-purple-500',
    glowColor: 'violet',
    features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast'],
    link: '/services/web-dev'
  },
  {
    title: "Creative Content & Social Media",
    desc: "Viral, scroll-stopping content creation and social media management that grows your brand.",
    icon: Paintbrush2,
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'blue',
    features: ['Content Strategy', 'Analytics', 'Multi-Platform'],
    link: '/services/creative-services'
  },
  // {
  //   title: "3D Modeling & Visualization",
  //   desc: "Photorealistic 3D models, renders, animations, and immersive visual experiences.",
  //   icon: Box,
  //   color: 'from-purple-500 to-pink-500',
  //   glowColor: 'purple',
  //   features: ['Photorealistic', '3D Animation', 'VR Ready']
  // },
  {
    title: "Video Production & Editing",
    desc: "Professional reels, TikToks, and corporate videos including shooting, editing, and sound design.",
    icon: Video,
    color: 'from-orange-500 to-red-500',
    glowColor: 'orange',
    features: ['Professional Editing', 'Sound Design', 'Motion Graphics'],
    link: '/services/video-production'
  },
  {
    title: "Creative Staffing Solutions",
    desc: "Flexible staffing solutions with top-tier creative and technical talent.",
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    glowColor: 'green',
    features: ['Top Talent', 'Flexible Terms', 'Quick Onboarding'],
    link: '/services/creative-staffing'
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={`${20 * i}%`}
              x2="100%"
              y2={`${20 * i + 10}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">What We Offer</span>
          </div>

          {/* Main heading */}
          <h2 
            className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-white mb-2">Our Core</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              Services
            </span>
          </h2>

          <p 
            className={`max-w-2xl mx-auto text-lg text-slate-400 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Comprehensive solutions designed to transform your digital presence and drive measurable results
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;
            
            return (
              <div
                key={i}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />

                {/* Card */}
                <div className="relative h-full p-8 bg-gradient-to-br from-slate-900 to-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl group-hover:border-violet-500/50 transition-all duration-500 overflow-hidden">
                  {/* Animated background gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl text-[#ffffff]! font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                      {service.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-violet-400 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn more link */}
                    <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-4 transition-all cursor-pointer">
                      {service.link && (
                        <a href={service.link} className="text-violet-400 hover:text-violet-300">
                          <span className="flex items-center gap-2">
                            Learn More
                            <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-transform" />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-violet-400 font-bold text-lg opacity-50 group-hover:opacity-100 transition-opacity">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-20 text-center transform transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-slate-400 mb-6">
            Can't find what you're looking for?
          </p>
          <a
            href="/contact-us"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}