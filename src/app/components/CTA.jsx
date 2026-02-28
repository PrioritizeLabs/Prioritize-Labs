"use client"
import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Mail,
  Phone,
  MessageCircle,
  Zap,
  Star,
  Trophy,
  CheckCircle2
} from 'lucide-react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-200/50 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-fuchsia-100/40 rounded-full blur-3xl" />

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
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

        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-violet-200/60 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-purple-200/60 rotate-45" style={{ animation: 'spin 20s linear infinite reverse' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border border-violet-100 rounded-full shadow-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-violet-700 font-medium">Award-Winning Agency</span>
          </div>

          {/* Main heading */}
          <h2 
            className={`text-5xl md:text-7xl font-extrabold mb-8 leading-tight transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block mb-3 text-slate-800">Ready to Elevate</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500">
              Your Brand?
            </span>
          </h2>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-slate-500 leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Contact us today for a <span className="font-bold text-violet-700">free consultation</span> and discover why businesses trust PrioritizeLabs.
          </p>

          {/* Trust indicators */}
          <div 
            className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {[
              { icon: Star, text: '500+ Happy Clients', color: 'text-amber-500' },
              { icon: Zap, text: '24/7 Support', color: 'text-violet-500' },
              { icon: CheckCircle2, text: '100% Satisfaction', color: 'text-emerald-500' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm"
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-slate-600 font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a
              href="/contact-us"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-200 hover:scale-105"
            >
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/portfolio"
              className="group inline-flex items-center gap-3 bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform text-violet-400" />
              <span>View Portfolio</span>
            </a>
          </div>
        </div>

        {/* Contact methods */}
        <div 
          className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { 
              icon: Mail, 
              title: 'Email Us', 
              value: 'info@prioritizelabs.com',
              iconBg: 'bg-blue-100',
              iconColor: 'text-blue-600',
              border: 'border-blue-100 hover:border-blue-200',
              hover: 'hover:bg-blue-50'
            },
            { 
              icon: Phone, 
              title: 'Call Us', 
              value: '+91 745-7863-965',
              iconBg: 'bg-emerald-100',
              iconColor: 'text-emerald-600',
              border: 'border-emerald-100 hover:border-emerald-200',
              hover: 'hover:bg-emerald-50'
            },
            { 
              icon: MessageCircle, 
              title: 'Live Chat', 
              value: 'Available 24/7',
              iconBg: 'bg-purple-100',
              iconColor: 'text-purple-600',
              border: 'border-purple-100 hover:border-purple-200',
              hover: 'hover:bg-purple-50'
            }
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className={`group relative p-6 bg-white border ${contact.border} rounded-2xl ${contact.hover} transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md`}
              >
                <div className="relative">
                  <div className={`inline-flex p-3 mb-4 rounded-xl ${contact.iconBg}`}>
                    <Icon className={`w-6 h-6 ${contact.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{contact.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-700 transition-colors">{contact.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom guarantee */}
        <div 
          className={`mt-16 text-center transform transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-500">
              <span className="font-bold text-slate-700">Free consultation</span> • No commitment required • Response within 24 hours
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 0.7; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
}