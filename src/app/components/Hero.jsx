"use client"
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap, Rocket, Star } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-linear-to-br from-black via-[#0F172A] to-[#1E1B4B] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div 
          className="absolute top-20 -left-20 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Floating badge */}
        <div 
          className={`mb-8 inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-violet-300 font-medium">Crafting Digital Excellence</span>
        </div>

        {/* Main heading with stagger animation */}
        <h1 
          className={`text-3xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-center leading-tighter tracking-tighter transform transition-all duration-1000 delay-200 uppercase ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Transform Your
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 animate-gradient">
            Digital Presence
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className={`text-lg md:text-2xl max-w-3xl mx-auto mb-12 text-slate-300 text-center leading-relaxed transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Your Complete Digital Creative Partner for{' '}
          <span className="text-violet-400 font-semibold">Web Development</span>,{' '}
          <span className="text-purple-400 font-semibold">Social Media</span>,{' '}
          <span className="text-fuchsia-400 font-semibold">Video Production</span> & More
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 items-center transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105"
          >
            <span className="relative z-10">Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/10 hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>View Our Work</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Feature icons */}
        <div 
          className={` z-20 mt-20 flex flex-wrap justify-center gap-8 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {[
            { icon: Zap, label: 'Lightning Fast', color: 'text-yellow-400' },
            { icon: Rocket, label: 'Innovative', color: 'text-violet-400' },
            { icon: Star, label: 'Award Winning', color: 'text-purple-400' }
          ].map(({ icon: Icon, label, color }, idx) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-115"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Icon className={`w-8 h-8 ${color}  transition-transform`} />
              <span className="text-sm text-slate-300 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 1; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}