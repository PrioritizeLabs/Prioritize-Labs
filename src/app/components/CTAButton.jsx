"use client";

import { ArrowRight } from "lucide-react";
import { useCTAModal } from "../hooks/Usectamodal";

export default function CTAButton({
  children,
  source = "Website CTA",
  className = "",
  showArrow = true,
}) {
  const { openModal } = useCTAModal();

  return (
    <button
      type="button"
      onClick={() => openModal(source)}
      className={className}
    >
      {children}
      {showArrow && <ArrowRight aria-hidden="true" className="h-4 w-4" />}
    </button>
  );
}
