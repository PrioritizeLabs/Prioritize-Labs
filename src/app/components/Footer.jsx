"use client"
import { useState } from 'react';
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
  Code2,
  Share2,
  Box,
  Video,
  Users,
  Heart
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const services = [
    { icon: Code2, name: 'Web Development', href: '#web-dev' },
    { icon: Share2, name: 'Social Media Management', href: '#social' },
    { icon: Box, name: '3D Modeling & Visualization', href: '#3d' },
    { icon: Video, name: 'Video Production', href: '#video' },
    { icon: Users, name: 'Creative Staffing', href: '#staffing' }
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
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-black border-t border-violet-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group mb-6">
                <img src="/prioritizelabs_logo.png" alt="PrioritizeLabs Logo" className="h-12 w-fit object-contain"/>
            </a>

            <p className="text-slate-400 mb-6 leading-relaxed">
              Your complete digital creative partner, delivering innovative solutions across web development, social media, video production, and more.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:hello@prioritizelabs.com" 
                className="flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">hello@prioritizelabs.com</span>
              </a>

              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <div className="flex items-center justify-center w-10 h-10 bg-violet-500/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">123 Creative Street, Innovation District, CA 94102</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`flex items-center justify-center w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 ${social.color} hover:border-violet-500/50 transition-all hover:scale-110`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors group text-sm"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors group text-sm flex items-center gap-2"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full" />
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <a
                    href={industry.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors group text-sm flex items-center gap-2"
                  >
                    <span>{industry.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-violet-400" />
                Stay Updated
              </h3>
              <p className="text-slate-400">
                Get the latest insights, tips, and industry news delivered to your inbox.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="group px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} PrioritizeLabs. All rights reserved. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current" /> by our amazing team.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}