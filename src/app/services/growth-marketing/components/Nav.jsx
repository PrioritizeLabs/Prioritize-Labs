"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-[72px] items-center justify-between">
        <a href="#top" className="font-display text-sm font-bold tracking-[0.08em] text-ink">
          PRIORITIZE<span className="text-accent">•</span>LABS
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[13px] font-medium text-textSecondary transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#audit" variant="primary" className="px-5 py-2.5 text-[13px]">
          Get Started
        </Button>
      </nav>
    </motion.header>
  );
}
