"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Button from "./ui/Button";
import AmbientBackground from "./ui/AmbientBackground";
import { useCTAModal } from "../../../hooks/Usectamodal";

export default function FinalCTA() {
  const { openModal } = useCTAModal();

  return (
    <section id="audit" className="relative py-28 sm:py-36">
      <AmbientBackground variant="center" />
      <div className="section-shell relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
            Ready to Build a Marketing System That Actually Works?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-textSecondary sm:text-lg">
            The first step is a free 30-minute Growth Audit. We&apos;ll analyse your current
            channels, identify where you&apos;re losing leads, and show you exactly what we&apos;d
            do differently. No pitch deck. No pressure. Just a straight conversation about your growth.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button
              as="button"
              onClick={() => openModal("Growth Marketing final CTA")}
              variant="primary"
            >
              Book Your Free Growth Audit
            </Button>
            <a
              href="mailto:hello@prioritizelabs.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-textSecondary transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              hello@prioritizelabs.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
