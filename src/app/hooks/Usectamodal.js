"use client";

import { useState, useCallback } from "react";

/**
 * useCTAModal — lightweight hook to control the CTA modal
 *
 * Usage:
 *   const { isOpen, source, openModal, closeModal } = useCTAModal();
 */
export function useCTAModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("Website CTA");

  const openModal = useCallback((src = "Website CTA") => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, source, openModal, closeModal };
}