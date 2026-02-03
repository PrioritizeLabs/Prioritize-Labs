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
      className="relative py-32 bg-gradient-to-br from-violet-700 via-purple-800 to-violet-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white/10 rotate-45" style={{ animation: 'spin 20s linear infinite reverse' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-violet-100 font-medium">Award-Winning Agency</span>
          </div>

          {/* Main heading */}
          <h2 
            className={`text-5xl md:text-7xl font-extrabold mb-8 leading-tight transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block mb-3">Ready to Elevate</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-violet-200">
              Your Brand?
            </span>
          </h2>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-violet-100 leading-relaxed transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Contact us today for a <span className="font-bold text-white">free consultation</span> and discover why businesses trust PrioritizeLabs.
          </p>

          {/* Trust indicators */}
          <div 
            className={`flex flex-wrap justify-center gap-6 mb-12 transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {[
              { icon: Star, text: '500+ Happy Clients' },
              { icon: Zap, text: '24/7 Support' },
              { icon: CheckCircle2, text: '100% Satisfaction' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <Icon className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm text-violet-100 font-medium">{item.text}</span>
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
              className="group relative inline-flex items-center gap-3 bg-white text-violet-700 px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105"
            >
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-violet-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="/portfolio"
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
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
              value: 'hello@prioritizelabs.com',
              color: 'from-blue-400 to-cyan-400'
            },
            { 
              icon: Phone, 
              title: 'Call Us', 
              value: '+1 (555) 123-4567',
              color: 'from-green-400 to-emerald-400'
            },
            { 
              icon: MessageCircle, 
              title: 'Live Chat', 
              value: 'Available 24/7',
              color: 'from-purple-400 to-pink-400'
            }
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-br ${contact.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-violet-200 group-hover:text-white transition-colors">{contact.value}</p>
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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-violet-100">
              <span className="font-bold text-white">Free consultation</span> • No commitment required • Response within 24 hours
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