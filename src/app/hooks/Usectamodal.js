"use client";

import { useContext } from "react";
import { CTAModalContext } from "./CTAModalContext";

export function useCTAModal() {
  const context = useContext(CTAModalContext);

  if (!context) {
    throw new Error("useCTAModal must be used within CTAProvider");
  }

  return context;
}