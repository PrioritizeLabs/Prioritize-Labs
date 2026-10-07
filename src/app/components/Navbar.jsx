"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Paintbrush2,
  Cpu,
  TrendingUp,
} from "lucide-react";
import { useCTAModal } from "../hooks/Usectamodal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { openModal } = useCTAModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    { icon: TrendingUp, name: "Growth Marketing", href: "/services/growth-marketing" },
    {
      icon: Paintbrush2,
      name: "Creative Production",
      href: "/services/creative-services",
    },
    {
      icon: Cpu,
      name: "Technology & Automation",
      href: "/services/technology",
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", hasDropdown: true },
    { name: "Process", href: "/#process" },
    { name: "Industries", href: "/#industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* Nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/95 backdrop-blur-md shadow-sm shadow-violet-900/30 border-b border-zinc-800"
            : "bg-zinc-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/prioritizelabs_logo.png"
                alt="PrioritizeLabs Logo"
                className="h-12 w-fit object-contain"
                width={200}
                height={52}
                loading="eager"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  ref={link.hasDropdown ? dropdownRef : null}
                >
                  {link.hasDropdown ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        )
                      }
                      className="flex items-center gap-1 text-zinc-300 hover:text-violet-400 transition-colors font-medium group relative bg-transparent border-none cursor-pointer"
                    >
                      {link.name}

                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.name
                            ? "rotate-180 text-violet-400"
                            : "text-zinc-500"
                        }`}
                      />

                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-zinc-300 hover:text-violet-400 transition-colors font-medium group relative"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  )}

                  {/* Desktop Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-700/60 rounded-2xl shadow-xl shadow-black/60 overflow-hidden">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-800 transition-colors group"
                          >
                            <div className="flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-xl group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-purple-600 transition-all">
                              <Icon className="w-5 h-5 text-violet-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-zinc-300 group-hover:text-violet-300 transition-colors font-medium text-sm">
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
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-700/50 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                if (isMobileMenuOpen) setMobileServicesOpen(false);
                setIsMobileMenuOpen((prev) => !prev);
              }}
              className="lg:hidden p-2 text-zinc-400 hover:text-violet-400 transition-colors relative z-50"
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 pt-24 pb-8">
          {/* Mobile Nav Links */}
          <div className="space-y-1 mb-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-violet-400 hover:bg-zinc-800/60 rounded-xl transition-all font-medium bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-500 transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180 text-violet-400" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center justify-between px-4 py-3 text-zinc-300 hover:text-violet-400 hover:bg-zinc-800/60 rounded-xl transition-all font-medium"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Mobile Services Submenu — toggled */}
                {link.hasDropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen
                        ? "max-h-64 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 space-y-1">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-violet-400 hover:bg-zinc-800/60 rounded-xl transition-all"
                          >
                            <div className="flex items-center justify-center w-8 h-8 bg-zinc-800 rounded-lg">
                              <Icon className="w-4 h-4 text-violet-400" />
                            </div>
                            <span className="text-sm font-medium">
                              {service.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 mb-6" />

          {/* Mobile CTA */}
          <button
            onClick={() => {
              openModal("Mobile Menu");
              setIsMobileMenuOpen(false);
              setMobileServicesOpen(false);
            }}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold shadow-md shadow-violet-900/50"
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
