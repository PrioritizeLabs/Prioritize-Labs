"use client"
import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your goals, challenges, and target audience to craft a winning strategy",
    icon: Search,
    color: 'from-violet-500 to-purple-500',
    features: ['Business Analysis', 'Market Research', 'Goal Setting']
  },
  {
    number: "02",
    title: "Custom Solution Design",
    description: "Tailor-made solutions designed specifically for your unique business needs",
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500',
    features: ['Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    number: "03",
    title: "Expert Execution",
    description: "Flawless implementation by our team of seasoned professionals",
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    features: ['Development', 'Testing', 'Launch']
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "Continuous improvement and scaling to maximize your ROI and impact",
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    features: ['Analytics', 'A/B Testing', 'Scaling']
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
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

  // Auto-rotate through steps
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#0F172A] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Connecting lines (desktop) */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 border border-violet-500/20 rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">Our Proven Methodology</span>
          </div>

          <h2 
            className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block text-white mb-2">Our Process:</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              Your Success, Prioritized
            </span>
          </h2>

          <p 
            className={`max-w-2xl mx-auto text-lg text-slate-400 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            A streamlined approach that delivers results at every stage
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            
            return (
              <div
                key={i}
                className={`relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + i * 150}ms` }}
                onMouseEnter={() => setActiveStep(i)}
              >
                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-8 z-10">
                    <ArrowRight className={`w-8 h-8 text-violet-500 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-2'}`} />
                  </div>
                )}

                {/* Card */}
                <div 
                  className={`group relative h-full transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Glow effect */}
                  <div 
                    className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur-xl transition-all duration-500 ${
                      isActive ? 'opacity-40' : 'opacity-0 group-hover:opacity-20'
                    }`}
                  />

                  {/* Card content */}
                  <div className={`relative h-full p-8 bg-gradient-to-br from-slate-900 to-slate-900/50 backdrop-blur-sm border rounded-2xl transition-all duration-500 ${
                    isActive ? 'border-violet-500' : 'border-slate-800 group-hover:border-violet-500/50'
                  }`}>
                    {/* Number badge */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${step.color} transform transition-all duration-500 ${
                      isActive ? 'scale-110 rotate-6' : 'scale-100 group-hover:scale-110 group-hover:rotate-6'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div className={`text-4xl font-bold mb-3 transition-all duration-500 ${
                      isActive ? 'text-violet-400' : 'text-violet-500/50 group-hover:text-violet-400'
                    }`}>
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                      isActive ? 'text-violet-300' : 'text-white group-hover:text-violet-300'
                    }`}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                      isActive ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-300'
                    }`}>
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-center gap-2 text-xs transition-all duration-500 ${
                            isActive ? 'text-violet-400' : 'text-slate-500 group-hover:text-violet-400'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transition-all duration-500 rounded-b-2xl ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    } origin-left`} />

                    {/* Corner decoration */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} opacity-0 rounded-bl-full transition-opacity duration-500 ${
                      isActive ? 'opacity-10' : 'group-hover:opacity-5'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div 
          className={`flex justify-center gap-3 mb-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeStep === i 
                  ? 'w-12 bg-gradient-to-r from-violet-500 to-purple-500' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center transform transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-2xl backdrop-blur-sm">
            <div className="text-left">
              <p className="text-white font-semibold text-lg mb-1">Ready to get started?</p>
              <p className="text-slate-400 text-sm">Let's bring your vision to life with our proven process</p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}