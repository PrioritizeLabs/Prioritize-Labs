"use client"
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  Code2,
  Share2,
  Box,
  Video,
  Users,
  ArrowRight,
  Paintbrush2
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const services = [
    { icon: Code2, name: 'Web Development', href: '/services/web-dev' },
    { icon: Paintbrush2, name: 'Creative Services', href: '/services/creative-services' },
    // { icon: Box, name: '3D Modeling', href: '/services/3d-modeling' },
    { icon: Video, name: 'Video Production', href: '/services/video-production' },
    { icon: Users, name: 'Creative Staffing', href: '/services/creative-staffing' }
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Process', href: '/#process' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-violet-500/10 border-b border-violet-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center gap-2 group"
            >
              <img src="/prioritizelabs_logo.png" alt="PrioritizeLabs Logo" className="h-12 w-fit object-contain"/>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-slate-300 hover:text-violet-400 transition-colors font-medium group"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </a>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-slate-900/95 backdrop-blur-md border border-violet-500/20 rounded-xl shadow-xl shadow-violet-500/10 overflow-hidden">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-violet-500/10 transition-colors group"
                          >
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-slate-300 group-hover:text-violet-400 transition-colors">
                              {service.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="/contact-us"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-violet-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 top-20 bg-black/98 backdrop-blur-md transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-full overflow-y-auto px-6 py-8">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-slate-300 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-all font-medium"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </a>

                  {/* Mobile Services Submenu */}
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-all"
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm">{service.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <a
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-violet-500/30"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
}