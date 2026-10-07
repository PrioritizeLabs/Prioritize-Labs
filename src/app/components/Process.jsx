// "use client"
// import { useState, useEffect, useRef } from 'react';
// import {
//   Search,
//   Lightbulb,
//   Rocket,
//   TrendingUp,
//   ArrowRight,
//   CheckCircle2,
//   Sparkles
// } from 'lucide-react';
// import { useCTAModal } from '../hooks/Usectamodal';
// import CTAModal from './CTAModal';

// const steps = [
//   {
//     number: "01",
//     title: "Discovery & Strategy",
//     description: "Deep dive into your goals, challenges, and target audience to craft a winning strategy",
//     icon: Search,
//     color: 'from-violet-500 to-purple-500',
//     borderActive: 'border-violet-400',
//     glowColor: 'from-violet-500 to-purple-500',
//     activeNum: 'text-violet-600',
//     dimNum: 'text-violet-300',
//     features: ['Business Analysis', 'Market Research', 'Goal Setting']
//   },
//   {
//     number: "02",
//     title: "Custom Solution Design",
//     description: "Tailor-made solutions designed specifically for your unique business needs",
//     icon: Lightbulb,
//     color: 'from-blue-500 to-cyan-500',
//     borderActive: 'border-blue-400',
//     glowColor: 'from-blue-500 to-cyan-500',
//     activeNum: 'text-blue-600',
//     dimNum: 'text-blue-300',
//     features: ['Wireframing', 'Prototyping', 'Design Systems']
//   },
//   {
//     number: "03",
//     title: "Expert Execution",
//     description: "Flawless implementation by our team of seasoned professionals",
//     icon: Rocket,
//     color: 'from-purple-500 to-pink-500',
//     borderActive: 'border-purple-400',
//     glowColor: 'from-purple-500 to-pink-500',
//     activeNum: 'text-purple-600',
//     dimNum: 'text-purple-300',
//     features: ['Development', 'Testing', 'Launch']
//   },
//   {
//     number: "04",
//     title: "Optimization & Growth",
//     description: "Continuous improvement and scaling to maximize your ROI and impact",
//     icon: TrendingUp,
//     color: 'from-green-500 to-emerald-500',
//     borderActive: 'border-green-400',
//     glowColor: 'from-green-500 to-emerald-500',
//     activeNum: 'text-green-600',
//     dimNum: 'text-green-300',
//     features: ['Analytics', 'A/B Testing', 'Scaling']
//   },
// ];

// export default function Process() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const { isOpen, source, openModal, closeModal } = useCTAModal();


//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % steps.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isVisible]);

//   return (
//     <section
//       id="process"
//       ref={sectionRef}
//       className="relative py-32 overflow-hidden"
//       style={{ backgroundColor: '#F7F5F0' }}
//     >
//       <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

//       {/* Blobs */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse"
//         style={{ background: 'rgba(139,92,246,0.06)', filter: 'blur(80px)' }}
//       />
//       <div
//         className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none animate-pulse"
//         style={{ background: 'rgba(59,130,246,0.05)', filter: 'blur(80px)', animationDelay: '1.5s' }}
//       />

//       {/* Grid pattern */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
//           backgroundSize: '64px 64px',
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <div
//             className={`inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
//               isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
//             }`}
//             style={{ background: 'rgba(139,92,246,0.07)', borderColor: 'rgba(139,92,246,0.2)' }}
//           >
//             <Sparkles className="w-4 h-4 text-violet-500" />
//             <span className="text-sm font-medium text-violet-600">Our Proven Methodology</span>
//           </div>

//           <h2
//             className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}
//           >
//             <span className="block mb-2" style={{ color: '#1C1712' }}>Our Process:</span>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500">
//               Your Success, Prioritized
//             </span>
//           </h2>

//           <p
//             className={`max-w-2xl mx-auto text-lg transform transition-all duration-1000 delay-400 ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}
//             style={{ color: '#7C6F5E' }}
//           >
//             A streamlined approach that delivers results at every stage
//           </p>
//         </div>

//         {/* Steps grid */}
//         <div className="grid md:grid-cols-4 gap-8 mb-16">
//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             const isActive = activeStep === i;

//             return (
//               <div
//                 key={i}
//                 className={`relative transform transition-all duration-700 ${
//                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${600 + i * 150}ms` }}
//                 onMouseEnter={() => setActiveStep(i)}
//               >
//                 {/* Connector arrow */}
//                 {i < steps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/3 -right-8 z-10">
//                     <ArrowRight
//                       className={`w-8 h-8 text-violet-400 transition-all duration-500 ${
//                         isActive ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-2'
//                       }`}
//                     />
//                   </div>
//                 )}

//                 {/* Card */}
//                 <div
//                   className={`group relative h-full transition-all duration-500 ${
//                     isActive ? 'scale-105' : 'scale-100'
//                   }`}
//                 >
//                   {/* Glow */}
//                   <div
//                     className={`absolute -inset-1 bg-gradient-to-r ${step.glowColor} rounded-2xl blur-xl transition-all duration-500 ${
//                       isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
//                     }`}
//                   />

//                   {/* Card body */}
//                   <div
//                     className={`relative h-full p-8 rounded-2xl border transition-all duration-500 ${
//                       isActive ? step.borderActive : 'group-hover:border-violet-300'
//                     }`}
//                     style={{
//                       background: isActive ? '#fff' : '#FDFCFA',
//                       borderColor: isActive ? undefined : '#E8E3DB',
//                       boxShadow: isActive ? '0 8px 32px rgba(139,92,246,0.08)' : undefined,
//                     }}
//                   >
//                     {/* Icon */}
//                     <div
//                       className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${step.color} transform transition-all duration-500 shadow-sm ${
//                         isActive ? 'scale-110 rotate-6' : 'scale-100 group-hover:scale-110 group-hover:rotate-6'
//                       }`}
//                     >
//                       <Icon className="w-8 h-8 text-white" />
//                     </div>

//                     {/* Step number */}
//                     <div
//                       className={`text-4xl font-bold mb-3 transition-all duration-500 ${
//                         isActive ? step.activeNum : `${step.dimNum} group-hover:${step.activeNum}`
//                       }`}
//                     >
//                       {step.number}
//                     </div>

//                     {/* Title */}
//                     <h3
//                       className="text-xl font-bold mb-3 transition-colors duration-500"
//                       style={{ color: isActive ? '#1C1712' : '#3D3530' }}
//                     >
//                       {step.title}
//                     </h3>

//                     {/* Description */}
//                     <p
//                       className="text-sm leading-relaxed mb-6 transition-colors duration-500"
//                       style={{ color: isActive ? '#5C5148' : '#7C6F5E' }}
//                     >
//                       {step.description}
//                     </p>

//                     {/* Features */}
//                     <div className="space-y-2">
//                       {step.features.map((feature, idx) => (
//                         <div
//                           key={idx}
//                           className={`flex items-center gap-2 text-xs transition-all duration-500 ${
//                             isActive ? step.activeNum : 'text-slate-400 group-hover:' + step.activeNum
//                           }`}
//                         >
//                           <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
//                           <span>{feature}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Bottom accent bar */}
//                     <div
//                       className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transition-all duration-500 rounded-b-2xl origin-left ${
//                         isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
//                       }`}
//                     />

//                     {/* Corner decoration */}
//                     <div
//                       className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-bl-full transition-opacity duration-500 ${
//                         isActive ? 'opacity-5' : 'opacity-0 group-hover:opacity-[0.03]'
//                       }`}
//                     />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Progress dots */}
//         <div
//           className={`flex justify-center gap-3 mb-16 transform transition-all duration-1000 delay-1000 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}
//         >
//           {steps.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveStep(i)}
//               className={`h-2 rounded-full transition-all duration-500 ${
//                 activeStep === i
//                   ? 'w-12 bg-gradient-to-r from-violet-500 to-purple-500'
//                   : 'w-2 hover:bg-stone-300'
//               }`}
//               style={{ background: activeStep === i ? undefined : '#D6D0C8' }}
//               aria-label={`Go to step ${i + 1}`}
//             />
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div
//           className={`text-center transform transition-all duration-1000 delay-1200 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}
//         >
//           <div
//             className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl border"
//             style={{
//               background: 'rgba(139,92,246,0.05)',
//               borderColor: 'rgba(139,92,246,0.15)',
//             }}
//           >
//             <div className="text-left">
//               <p className="font-semibold text-lg mb-1" style={{ color: '#1C1712' }}>
//                 Ready to get started?
//               </p>
//               <p className="text-sm" style={{ color: '#7C6F5E' }}>
//                 Let's bring your vision to life with our proven process
//               </p>
//             </div>
//             <button
//               onClick={() => openModal("Process Section")}
//               className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-200 transition-all duration-300 hover:scale-105 whitespace-nowrap"
//             >
//               Start Your Project
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
import { useCTAModal } from '../hooks/Usectamodal';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your goals, challenges, and target audience to craft a winning strategy",
    icon: Search,
    color: 'from-violet-500 to-purple-500',
    borderActive: 'border-violet-500',
    glowColor: 'from-violet-500 to-purple-500',
    activeNum: 'text-violet-400',
    dimNum: 'text-violet-400/40',
    features: ['Business Analysis', 'Market Research', 'Goal Setting']
  },
  {
    number: "02",
    title: "Custom Solution Design",
    description: "Tailor-made solutions designed specifically for your unique business needs",
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500',
    borderActive: 'border-blue-500',
    glowColor: 'from-blue-500 to-cyan-500',
    activeNum: 'text-blue-400',
    dimNum: 'text-blue-400/40',
    features: ['Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    number: "03",
    title: "Expert Execution",
    description: "Flawless implementation by our team of seasoned professionals",
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    borderActive: 'border-purple-500',
    glowColor: 'from-purple-500 to-pink-500',
    activeNum: 'text-purple-400',
    dimNum: 'text-purple-400/40',
    features: ['Development', 'Testing', 'Launch']
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "Continuous improvement and scaling to maximize your ROI and impact",
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    borderActive: 'border-green-500',
    glowColor: 'from-green-500 to-emerald-500',
    activeNum: 'text-green-400',
    dimNum: 'text-green-400/40',
    features: ['Analytics', 'A/B Testing', 'Scaling']
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { openModal } = useCTAModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => { if (section) observer.unobserve(section); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#0B0A12' }}
    >

      {/* Blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse"
        style={{ background: 'rgba(139,92,246,0.04)', filter: 'blur(100px)' }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none animate-pulse"
        style={{ background: 'rgba(59,130,246,0.03)', filter: 'blur(100px)', animationDelay: '1.5s' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full backdrop-blur-sm transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
            style={{ background: 'rgba(139,92,246,0.15)', borderColor: 'rgba(139,92,246,0.3)' }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Our Proven Methodology</span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-extrabold mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="block mb-2" style={{ color: '#F3F4F6' }}>Our Process:</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
              Your Success, Prioritized
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ color: '#9CA3AF' }}
          >
            A streamlined approach that delivers results at every stage
          </p>
        </div>

        {/* Steps grid */}
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
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-5 z-10">
                    <ArrowRight
                      className={`w-6 h-6 text-violet-400 transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-2'
                      }`}
                    />
                  </div>
                )}

                {/* Card */}
                <div
                  className={`group relative h-full transition-all duration-500 ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${step.glowColor} rounded-2xl blur-xl transition-all duration-500 ${
                      isActive ? 'opacity-15' : 'opacity-0 group-hover:opacity-10'
                    }`}
                  />

                  {/* Card body */}
                  <div
                    className={`relative h-full p-8 rounded-2xl border transition-all duration-500 ${
                      isActive ? step.borderActive : 'group-hover:border-violet-500/50'
                    }`}
                    style={{
                      background: '#13111C',
                      borderColor: isActive ? undefined : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isActive ? '0 8px 32px rgba(0, 0, 0, 0.4)' : undefined,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${step.color} transform transition-all duration-500 shadow-sm ${
                        isActive ? 'scale-110 rotate-6' : 'scale-100 group-hover:scale-110 group-hover:rotate-6'
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step number */}
                    <div
                      className={`text-4xl font-bold mb-3 transition-all duration-500 ${
                        isActive ? step.activeNum : `${step.dimNum} group-hover:${step.activeNum}`
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-3 transition-colors duration-500"
                      style={{ color: '#F3F4F6' }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-6 transition-colors duration-500"
                      style={{ color: '#9CA3AF' }}
                    >
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 text-xs transition-all duration-500 ${
                            isActive ? step.activeNum : 'text-gray-500 group-hover:' + step.activeNum
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom accent bar */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transition-all duration-500 rounded-b-2xl origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />

                    {/* Corner decoration */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} rounded-bl-full transition-opacity duration-500 ${
                        isActive ? 'opacity-5' : 'opacity-0 group-hover:opacity-[0.03]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div
          className={`flex justify-center gap-3 mb-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-2 rounded-full transition-all duration-500`}
              style={{
                width: activeStep === i ? 48 : 8,
                background: activeStep === i 
                  ? 'linear-gradient(90deg, #8B5CF6, #A855F7)' 
                  : 'rgba(255, 255, 255, 0.2)'
              }}
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
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl border backdrop-blur-sm"
            style={{
              background: 'rgba(139,92,246,0.1)',
              borderColor: 'rgba(139,92,246,0.2)',
            }}
          >
            <div className="text-left">
              <p className="font-semibold text-lg mb-1" style={{ color: '#F3F4F6' }}>
                Ready to get started?
              </p>
              <p className="text-sm" style={{ color: '#9CA3AF' }}>
                Let&apos;s bring your vision to life with our proven process
              </p>
            </div>
            <button
              onClick={() => openModal("Process Section")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-950/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}