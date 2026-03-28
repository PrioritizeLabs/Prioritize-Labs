"use client"
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Code2,
  Video,
  ArrowRight,
  Paintbrush2
} from 'lucide-react';
import { useCTAModal } from '../hooks/Usectamodal';
import CTAModal from './CTAModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isOpen, source, openModal, closeModal } = useCTAModal();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const services = [
    { icon: Code2, name: 'Web Development', href: '/services/web-dev' },
    { icon: Paintbrush2, name: 'Creative Services', href: '/services/creative-services' },
    { icon: Video, name: 'Video Production', href: '/services/video-production' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', hasDropdown: true },
    { name: 'Process', href: '/#process' },
    { name: 'Industries', href: '/#industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  return (
    <>
      {/* Nav bar */}
      <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-violet-100 border-b border-violet-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <img
                src="/prioritizelabs_logo.png"
                alt="PrioritizeLabs Logo"
                className="h-12 w-fit object-contain"
                fetchPriority="high"
              />
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
                    className="flex items-center gap-1 text-slate-600 hover:text-violet-600 transition-colors font-medium group relative"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform text-slate-400 ${
                          activeDropdown === link.name ? 'rotate-180 text-violet-500' : ''
                        }`}
                      />
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>

                  {/* Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-violet-100/60 overflow-hidden">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-violet-50 transition-colors group"
                          >
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl group-hover:from-violet-500 group-hover:to-purple-500 transition-all">
                              <Icon className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-slate-600 group-hover:text-violet-700 transition-colors font-medium text-sm">
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
              <button
                onClick={() => openModal("Navbar CTA")}
                // href="/contact-us"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-300/60 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-slate-500 hover:text-violet-600 transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — rendered OUTSIDE nav to avoid clipping */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-6 pt-24 pb-8">
          {/* Mobile Nav Links */}
          <div className="space-y-1 mb-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.hasDropdown ? undefined : link.href}
                  onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all font-medium"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </a>

                {/* Mobile Services Submenu — always visible when menu is open */}
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                       <a 
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all"
                        >
                          <div className="flex items-center justify-center w-8 h-8 bg-violet-100 rounded-lg">
                            <Icon className="w-4 h-4 text-violet-600" />
                          </div>
                          <span className="text-sm font-medium">{service.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 mb-6" />

          {/* Mobile CTA */}
          <button
            onClick={() => {
              openModal("Mobile Menu");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold shadow-md shadow-violet-200"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}