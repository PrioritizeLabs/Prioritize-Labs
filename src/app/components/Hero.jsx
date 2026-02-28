"use client"
import { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Zap, Rocket, Star, Play } from 'lucide-react';

const WORDS = ['Web Development', 'Social Media', 'Video Production', 'Brand Identity', 'Creative Strategy'];
const wordColors = [
  'from-violet-600 to-purple-600',
  'from-blue-600 to-cyan-500',
  'from-orange-500 to-red-500',
  'from-pink-500 to-fuchsia-600',
  'from-emerald-500 to-teal-500',
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Visibility + mouse parallax
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIndex];
    let t;
    if (typing) {
      if (displayed.length < word.length) {
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 65);
      } else {
        t = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, wordIndex]);

  // Animated canvas mesh
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
    }));
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = (pts[i].x - pts[j].x) * w;
          const dy = (pts[i].y - pts[j].y) * h;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,92,246,${0.1 * (1 - d / 140)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(pts[i].x * w, pts[i].y * h);
            ctx.lineTo(pts[j].x * w, pts[j].y * h);
            ctx.stroke();
          }
        }
      }
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139,92,246,0.22)';
        ctx.fill();
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animFrameRef.current); };
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Mesh canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none', opacity: 0.65 }} />

      {/* Parallax gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167,139,250,0.16) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.55}px, ${mousePosition.y * 0.55}px)`,
            transition: 'transform 0.45s ease-out',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(216,180,254,0.18) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px)`,
            transition: 'transform 0.45s ease-out',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(245,208,254,0.2) 0%, transparent 65%)',
            transform: `translate(calc(-50% + ${mousePosition.x * 0.18}px), calc(-50% + ${mousePosition.y * 0.18}px))`,
            transition: 'transform 0.6s ease-out',
          }}
        />
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-12 right-12 w-80 h-80 rounded-full border border-violet-100/80"
          style={{ transform: `translate(${mousePosition.x * 0.12}px, ${mousePosition.y * 0.12}px)`, transition: 'transform 0.7s ease-out' }}
        />
        <div
          className="absolute top-20 right-20 w-56 h-56 rounded-full border border-purple-100/70"
          style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`, transition: 'transform 0.6s ease-out' }}
        />
        <div
          className="absolute bottom-16 left-12 w-52 h-52 rounded-full border border-fuchsia-100/70"
          style={{ transform: `translate(${-mousePosition.x * 0.15}px, ${-mousePosition.y * 0.15}px)`, transition: 'transform 0.6s ease-out' }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-violet-200/70 rounded-sm" style={{ animation: 'floatY 6s ease-in-out infinite', transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) rotate(45deg)`, transition: 'transform 0.4s ease-out' }} />
        <div className="absolute top-1/3 right-16 w-4 h-4 rounded-full bg-purple-300/50" style={{ animation: 'floatY 8s ease-in-out infinite 1.2s', transform: `translate(${-mousePosition.x * 0.35}px, ${-mousePosition.y * 0.35}px)`, transition: 'transform 0.4s ease-out' }} />
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 border-2 border-fuchsia-300/50 rotate-12" style={{ animation: 'floatY 7s ease-in-out infinite 2.1s' }} />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-amber-300/60" style={{ animation: 'floatY 9s ease-in-out infinite 0.6s' }} />
        <div className="absolute top-1/2 left-1/3 w-2 h-8 bg-gradient-to-b from-violet-300/30 to-transparent rounded-full" style={{ animation: 'floatY 5s ease-in-out infinite 3s' }} />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 flex flex-col items-center text-center">

        {/* Badge with live pulse */}
        <div
          className={`mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-full shadow-sm transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-sm text-violet-700 font-semibold tracking-wide">Crafting Digital Excellence</span>
        </div>

        {/* Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold mb-6 leading-[1.04] tracking-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="block text-slate-900 mb-1">Transform Your</span>
          <span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500"
            style={{ backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite' }}
          >
            Digital Presence
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className={`mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-2">
            Your complete creative partner for
          </p>
          <div className="flex items-center justify-center gap-1.5 h-9 sm:h-11 md:h-13">
            <span
              className={`text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${wordColors[wordIndex]}`}
            >
              {displayed}
            </span>
            <span
              className="w-0.5 h-6 sm:h-8 bg-violet-500 rounded-full flex-shrink-0"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-14 sm:mb-16 transition-all duration-1000 delay-600 w-full max-w-md sm:max-w-none ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-300/50 hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10">Get Free Consultation</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            {/* Shine sweep */}
            <span className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20 w-1/2" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-2.5 bg-white text-slate-700 px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg border border-slate-200 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-700 transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-100 group-hover:bg-violet-200 transition-colors flex-shrink-0">
              <Play className="w-3 h-3 text-violet-600 ml-0.5" />
            </span>
            <span>View Our Work</span>
          </a>
        </div>

        {/* Stats card */}
        <div
          className={`w-full max-w-lg sm:max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="grid grid-cols-3 gap-0 divide-x divide-slate-100 p-5 sm:p-6 bg-white/90 backdrop-blur-md border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50">
            {[
              { value: '500+', label: 'Projects Done', color: 'text-violet-600' },
              { value: '98%', label: 'Satisfaction', color: 'text-purple-600' },
              { value: '24/7', label: 'Support', color: 'text-fuchsia-600' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-2 sm:px-4 group">
                <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color} group-hover:scale-110 transition-transform inline-block`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature pills */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {[
            { icon: Zap, label: 'Lightning Fast', color: 'text-amber-500', bg: 'bg-amber-50 border-amber-100 hover:bg-amber-100' },
            { icon: Rocket, label: 'Innovative', color: 'text-violet-600', bg: 'bg-violet-50 border-violet-100 hover:bg-violet-100' },
            { icon: Star, label: 'Award Winning', color: 'text-purple-500', bg: 'bg-purple-50 border-purple-100 hover:bg-purple-100' },
          ].map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 shadow-sm cursor-default ${bg}`}
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-sm text-slate-600 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
} 