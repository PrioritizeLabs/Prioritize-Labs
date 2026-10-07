"use client";

import { useCallback, useMemo, useState } from "react";
import { CTAModalContext } from "../hooks/CTAModalContext";
import CTAModal from "./CTAModal";

export default function CTAProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("Website CTA");

  const openModal = useCallback((triggerSource = "Website CTA") => {
    setSource(triggerSource);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);
  const context = useMemo(
    () => ({ isOpen, source, openModal, closeModal }),
    [isOpen, source, openModal, closeModal],
  );

  return (
    <CTAModalContext.Provider value={context}>
      {children}
      <CTAModal isOpen={isOpen} onClose={closeModal} source={source} />
    </CTAModalContext.Provider>
  );
}
