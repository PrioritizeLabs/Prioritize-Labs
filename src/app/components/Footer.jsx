// "use client"
// import { useState } from 'react';
// import {
//   Sparkles,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
//   ArrowRight,
//   Code2,
//   Video,
//   Users,
//   Heart,
//   Paintbrush2
// } from 'lucide-react';

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const currentYear = new Date().getFullYear();

//   const services = [
//     { icon: Code2, name: 'Web Development', href: '/services/web-dev' },
//     { icon: Paintbrush2, name: 'Social Media Management', href: '/services/creative-services' },
//     { icon: Video, name: 'Video Production', href: '/services/video-production' },
//     // { icon: Users, name: 'Creative Staffing', href: '/services/creative-staffing' }
//   ];

//   const company = [
//     { name: 'About Us', href: '/contact-us' },
//     { name: 'Our Process', href: '#process' },
//     { name: 'Case Studies', href: '/portfolio' },
//     { name: 'Careers', href: '#careers' },
//     { name: 'Blog', href: '#blog' }
//   ];

//   const industries = [
//     { name: 'E-commerce', href: '#ecommerce' },
//     { name: 'Technology', href: '#technology' },
//     { name: 'Healthcare', href: '#healthcare' },
//     { name: 'Real Estate', href: '#realestate' },
//     { name: 'Education', href: '#education' }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586540791615', label: 'Facebook', hoverColor: '#3B82F6' },
//     // { icon: Twitter, href: 'https://twitter.com/prioritizelabs', label: 'Twitter', hoverColor: '#0EA5E9' },
//     { icon: Instagram, href: 'https://www.instagram.com/prioritizelabs/', label: 'Instagram', hoverColor: '#EC4899' },
//     { icon: Linkedin, href: 'https://www.linkedin.com/company/prioritize-labs/people/?viewAsMember=true', label: 'LinkedIn', hoverColor: '#2563EB' },
//     // { icon: Youtube, href: 'https://www.youtube.com/channel/UC_XtAa2J5mX8v9v9v9v9v9', label: 'YouTube', hoverColor: '#EF4444' }
//   ];

//   const handleSubscribe = () => {
//     if (email) {
//       alert(`Thank you for subscribing with ${email}!`);
//       setEmail('');
//     }
//   };

//   return (
//     <footer
//       className="relative overflow-hidden"
//       style={{ backgroundColor: '#ffffff', borderTop: '1px solid #fca0ff' }}
//     >
//       {/* Background depth — concentric rings + corner blots */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div
//           className="absolute rounded-full border"
//           style={{ width: 700, height: 700, bottom: '-200px', right: '-200px', borderColor: 'rgba(120,100,80,0.07)' }}
//         />
//         <div
//           className="absolute rounded-full border"
//           style={{ width: 480, height: 480, bottom: '-120px', right: '-120px', borderColor: 'rgba(120,100,80,0.09)' }}
//         />
//         <div
//           className="absolute"
//           style={{
//             top: 0, left: 0, width: 320, height: 320,
//             background: 'radial-gradient(ellipse at top left, rgba(139,92,246,0.06) 0%, transparent 70%)',
//           }}
//         />
//         <div
//           className="absolute"
//           style={{
//             bottom: 0, right: 0, width: 280, height: 280,
//             background: 'radial-gradient(ellipse at bottom right, rgba(139,92,246,0.05) 0%, transparent 70%)',
//           }}
//         />
//         {/* Dot grid — very faint */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(120,100,80,0.13) 1px, transparent 1px)',
//             backgroundSize: '32px 32px',
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* Main grid */}
//         <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* Company info */}
//           <div className="lg:col-span-2">
//             <a href="#home" className="flex items-center gap-2 mb-6">
//               <img src="/prioritizelabs_logo.png" alt="PrioritizeLabs Logo" className="h-12 w-fit object-contain" />
//             </a>

//             <p className="leading-relaxed mb-6 text-sm" style={{ color: '#000000', fontWeight: 300 }}>
//               Your complete digital creative partner, delivering innovative solutions across web development, social media, video production, and more.
//             </p>

//             {/* Contact */}
//             <div className="space-y-3">
//               {[
//                 {
//                   href: 'mailto:info@prioritizelabs.com',
//                   icon: Mail,
//                   label: 'info@prioritizelabs.com'
//                 },
//                 {
//                   href: 'tel:+919410424657',
//                   icon: Phone,
//                   label: '+91 94104 24657'
//                 },
//               ].map(({ href, icon: Icon, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   className="flex items-center gap-3 group transition-colors"
//                   style={{ color: '#000000' }}
//                   onMouseEnter={e => e.currentTarget.style.color = '#6D28D9'}
//                   onMouseLeave={e => e.currentTarget.style.color = '#000000'}
//                 >
//                   <div
//                     className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 transition-colors"
//                     style={{ background: 'rgba(139,92,246,0.08)' }}
//                   >
//                     <Icon className="w-4 h-4 text-violet-500" />
//                   </div>
//                   <span className="text-sm">{label}</span>
//                 </a>
//               ))}

//               <div className="flex items-start gap-3" style={{ color: '#000000' }}>
//                 <div
//                   className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
//                   style={{ background: 'rgba(139,92,246,0.08)' }}
//                 >
//                   <MapPin className="w-4 h-4 text-violet-500" />
//                 </div>
//                 <span className="text-sm leading-relaxed" style={{ fontWeight: 300 }}>
//                   E-3/2060 Shaheed Nagar, Agra
//                 </span>
//               </div>
//             </div>

//             {/* Socials */}
//             <div className="flex items-center gap-2 mt-7">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     aria-label={social.label}
//                     className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 hover:scale-110"
//                     style={{ background: '#fff', borderColor: '#E2DDD6', color: '#000000' }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.color = social.hoverColor;
//                       e.currentTarget.style.borderColor = social.hoverColor + '55';
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.color = '#000000';
//                       e.currentTarget.style.borderColor = '#E2DDD6';
//                     }}
//                   >
//                     <Icon className="w-4 h-4" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ color: '#1C1712' }}>
//               <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-purple-500" />
//               Services
//             </h3>
//             <ul className="space-y-3">
//               {services.map((service) => {
//                 const Icon = service.icon;
//                 return (
//                   <li key={service.name}>
//                     <a
//                       href={service.href}
//                       className="flex items-center gap-2 text-sm transition-colors group"
//                       style={{ color: '#000000' }}
//                       onMouseEnter={e => e.currentTarget.style.color = '#6D28D9'}
//                       onMouseLeave={e => e.currentTarget.style.color = '#000000'}
//                     >
//                       <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
//                       <span>{service.name}</span>
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ color: '#1C1712' }}>
//               <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-purple-500" />
//               Company
//             </h3>
//             <ul className="space-y-3">
//               {company.map((item) => (
//                 <li key={item.name}>
//                   <a
//                     href={item.href}
//                     className="text-sm flex items-center gap-1.5 transition-colors group"
//                     style={{ color: '#000000' }}
//                     onMouseEnter={e => e.currentTarget.style.color = '#6D28D9'}
//                     onMouseLeave={e => e.currentTarget.style.color = '#000000'}
//                   >
//                     <span>{item.name}</span>
//                     <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Industries */}
//           {/* <div>
//             <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ color: '#1C1712' }}>
//               <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-purple-500" />
//               Industries
//             </h3>
//             <ul className="space-y-3">
//               {industries.map((industry) => (
//                 <li key={industry.name}>
//                   <a
//                     href={industry.href}
//                     className="text-sm flex items-center gap-1.5 transition-colors group"
//                     style={{ color: '#000000' }}
//                     onMouseEnter={e => e.currentTarget.style.color = '#6D28D9'}
//                     onMouseLeave={e => e.currentTarget.style.color = '#000000'}
//                   >
//                     <span>{industry.name}</span>
//                     <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//         </div>

//         {/* Newsletter */}
//         {/* <div className="py-10" style={{ borderTop: '1px solid #E2DDD6' }}>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: '#1C1712' }}>
//                 <Sparkles className="w-5 h-5 text-violet-500" />
//                 Stay Updated
//               </h3>
//               <p className="text-sm" style={{ color: '#000000', fontWeight: 300 }}>
//                 Get the latest insights, tips, and industry news delivered to your inbox.
//               </p>
//             </div>

//             <div className="flex gap-3">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-3 rounded-lg text-sm outline-none transition-colors"
//                 style={{
//                   background: '#fff',
//                   border: '1px solid #E2DDD6',
//                   color: '#1C1712',
//                 }}
//                 onFocus={e => e.target.style.borderColor = '#A78BFA'}
//                 onBlur={e => e.target.style.borderColor = '#E2DDD6'}
//               />
//               <button
//                 onClick={handleSubscribe}
//                 className="group px-5 py-3 text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-100 flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-violet-600 to-purple-600"
//               >
//                 Subscribe
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div> */}

//         {/* Bottom bar */}
//         <div className="py-7" style={{ borderTop: '1px solid #E2DDD6' }}>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-sm text-center md:text-left" style={{ color: '#000000' }}>
//               © {currentYear} PrioritizeLabs. All rights reserved. Made with{' '}
//               <Heart className="inline w-3.5 h-3.5 text-red-400 fill-current" /> by our amazing team.
//             </div>

//             <div className="flex items-center gap-6">
//               {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
//                 <a
//                   key={label}
//                   href={`#${label.toLowerCase().replace(/ /g, '-')}`}
//                   className="text-sm transition-colors"
//                   style={{ color: '#000000' }}
//                   onMouseEnter={e => e.target.style.color = '#6D28D9'}
//                   onMouseLeave={e => e.target.style.color = '#000000'}
//                 >
//                   {label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
  Paintbrush2,
  Cpu,
  TrendingUp,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const services = [
    { icon: TrendingUp, name: 'Growth Marketing', href: '/services/growth-marketing' },
    { icon: Paintbrush2, name: 'Creative Production', href: '/services/creative-services' },
    { icon: Cpu, name: 'Technology & Automation', href: '/services/technology' },
  ];

  const company = [
    { name: 'About Us', href: '/contact-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' }
  ];

  const industries = [
    { name: 'E-commerce', href: '#ecommerce' },
    { name: 'Technology', href: '#technology' },
    { name: 'Healthcare', href: '#healthcare' },
    { name: 'Real Estate', href: '#realestate' },
    { name: 'Education', href: '#education' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586540791615', label: 'Facebook', hoverColor: '#3B82F6' },
    // { icon: Twitter, href: 'https://twitter.com/prioritizelabs', label: 'Twitter', hoverColor: '#0EA5E9' },
    { icon: Instagram, href: 'https://www.instagram.com/prioritizelabs/', label: 'Instagram', hoverColor: '#EC4899' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/prioritize-labs/people/?viewAsMember=true', label: 'LinkedIn', hoverColor: '#2563EB' },
    // { icon: Youtube, href: 'https://www.youtube.com/channel/UC_XtAa2J5mX8v9v9v9v9v9', label: 'YouTube', hoverColor: '#EF4444' }
  ];

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0B0A12', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
    >
      {/* Background depth — concentric rings + corner blots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full border"
          style={{ width: 700, height: 700, bottom: '-200px', right: '-200px', borderColor: 'rgba(255, 255, 255, 0.03)' }}
        />
        <div
          className="absolute rounded-full border"
          style={{ width: 480, height: 480, bottom: '-120px', right: '-120px', borderColor: 'rgba(255, 255, 255, 0.04)' }}
        />
        <div
          className="absolute"
          style={{
            top: 0, left: 0, width: 320, height: 320,
            background: 'radial-gradient(ellipse at top left, rgba(139,92,246,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: 0, right: 0, width: 280, height: 280,
            background: 'radial-gradient(ellipse at bottom right, rgba(139,92,246,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Dot grid — very faint */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company info */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Image
                src="/prioritizelabs_logo.png"
                alt="PrioritizeLabs Logo"
                className="h-12 w-fit object-contain brightness-115"
                width={200}
                height={52}
              />
            </a>

            <p className="leading-relaxed mb-6 text-sm" style={{ color: '#9CA3AF', fontWeight: 300 }}>
              Your growth partner for marketing, creative production, and technology and automation.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                {
                  href: 'mailto:info@prioritizelabs.com',
                  icon: Mail,
                  label: 'info@prioritizelabs.com'
                },
                {
                  href: 'tel:+919410424657',
                  icon: Phone,
                  label: '+91 94104 24657'
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group transition-colors"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#A78BFA'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 transition-colors"
                    style={{ background: 'rgba(139,92,246,0.15)' }}
                  >
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}

              <div className="flex items-start gap-3" style={{ color: '#9CA3AF' }}>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                  style={{ background: 'rgba(139,92,246,0.15)' }}
                >
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <span className="text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  E-3/2060 Shaheed Nagar, Agra
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-7">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 hover:scale-110"
                    style={{ background: '#13111C', borderColor: 'rgba(255, 255, 255, 0.08)', color: '#9CA3AF' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = social.hoverColor;
                      e.currentTarget.style.borderColor = social.hoverColor + '55';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#9CA3AF';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ color: '#F3F4F6' }}>
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-purple-500" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-sm transition-colors group"
                      style={{ color: '#9CA3AF' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#A78BFA'}
                      onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base mb-5 flex items-center gap-2" style={{ color: '#F3F4F6' }}>
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-purple-500" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm flex items-center gap-1.5 transition-colors group"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#A78BFA'}
                    onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-left" style={{ color: '#9CA3AF' }}>
              © {currentYear} PrioritizeLabs. All rights reserved. Made with{' '}
              <Heart className="inline w-3.5 h-3.5 text-violet-400 fill-current" /> by our amazing team.
            </div>

            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Refund Policy', href: '/refund-policy' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm transition-colors"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={e => e.target.style.color = '#A78BFA'}
                  onMouseLeave={e => e.target.style.color = '#9CA3AF'}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}