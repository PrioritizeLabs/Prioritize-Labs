"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Maximize2 } from "lucide-react";
import { FaRegFilePdf } from "react-icons/fa";

const PDFS = [
  {
    id: 1,
    title: "Landing Page UI",
    file: "/pdfs/ui1.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 2,
    title: "Dashboard UI",
    file: "/pdfs/ui2.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 3,
    title: "Dashboard UI",
    file: "/pdfs/ui3.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 4,
    title: "Landing Page UI",
    file: "/pdfs/ui4.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 5,
    title: "Dashboard UI",
    file: "/pdfs/ui5.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 6,
    title: "Mobile App UI",
    file: "/pdfs/ui6.pdf",
    description: "iOS/Android app screens",
    pages: 24,
  },
    {
    id: 7,
    title: "Landing Page UI",
    file: "/pdfs/ui7.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 8,
    title: "Dashboard UI",
    file: "/pdfs/ui8.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 9,
    title: "Dashboard UI",
    file: "/pdfs/ui9.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
    {
    id: 10,
    title: "Landing Page UI",
    file: "/pdfs/ui10.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 11,
    title: "Dashboard UI",
    file: "/pdfs/ui11.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 12,
    title: "Mobile App UI",
    file: "/pdfs/ui12.pdf",
    description: "iOS/Android app screens",
    pages: 24,
  },
    {
    id: 13,
    title: "Landing Page UI",
    file: "/pdfs/ui13.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 14,
    title: "Dashboard UI",
    file: "/pdfs/ui14.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 15,
    title: "Mobile App UI",
    file: "/pdfs/ui15.pdf",
    description: "iOS/Android app screens",
    pages: 24,
  },
    {
    id: 16,
    title: "Landing Page UI",
    file: "/pdfs/ui16.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 17,
    title: "Dashboard UI",
    file: "/pdfs/ui17.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 18,
    title: "Mobile App UI",
    file: "/pdfs/ui18.pdf",
    description: "iOS/Android app screens",
    pages: 24,
  },
    {
    id: 19,
    title: "Landing Page UI",
    file: "/pdfs/ui19.pdf",
    description: "Modern landing page design",
    pages: 12,
  },
  {
    id: 20,
    title: "Dashboard UI",
    file: "/pdfs/ui20.pdf",
    description: "Analytics dashboard layout",
    pages: 8,
  },
  {
    id: 21,
    title: "Mobile App UI",
    file: "/pdfs/ui21.pdf",
    description: "iOS/Android app screens",
    pages: 24,
  },
];

export default function PdfGallery({
  showAll = true,
  rowLimit = 3,
}) {
  const [activePdf, setActivePdf] = useState(null);
  const returnFocusRef = useRef(null);
  const ITEMS_PER_ROW = 3; // because lg:grid-cols-3

  const visiblePDFs = showAll
    ? PDFS
    : PDFS.slice(0, rowLimit * ITEMS_PER_ROW);

  function openPdf(pdf, trigger) {
    returnFocusRef.current = trigger;
    setActivePdf(pdf);
  }

  function closePdf() {
    setActivePdf(null);
    requestAnimationFrame(() => returnFocusRef.current?.focus());
  }

  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePDFs.map((pdf, index) => (
          <motion.div
            key={pdf.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.25) }}
          >
            <PdfCard
              pdf={pdf}
              onOpen={(trigger) => openPdf(pdf, trigger)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activePdf && (
          <PdfModal pdf={activePdf} onClose={closePdf} />
        )}
      </AnimatePresence>
    </div>
  );
}

function PdfCard({ pdf, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 transition-colors hover:border-violet-300/30">
      <div className="flex aspect-video items-center justify-center gap-5 border-b border-white/10 bg-[radial-gradient(ellipse_at_50%_25%,rgba(139,92,246,0.22),transparent_70%)]">
        <div className="flex h-20 w-16 items-center justify-center rounded-md border border-violet-300/30 bg-zinc-950/70 shadow-xl shadow-violet-950/30">
          <FaRegFilePdf aria-hidden="true" className="text-3xl text-violet-300" />
        </div>
        <div className="space-y-2" aria-hidden="true">
          <span className="block h-1 w-24 rounded bg-white/20" />
          <span className="block h-1 w-16 rounded bg-white/15" />
          <span className="block h-1 w-20 rounded bg-white/15" />
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-base font-semibold text-white transition-colors group-hover:text-violet-200">
            {pdf.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400">{pdf.description}</p>
          <p className="mt-3 text-xs text-zinc-500">{pdf.pages} pages · PDF</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={(event) => onOpen(event.currentTarget)}
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-violet-700 px-3 text-sm font-medium text-white transition-colors hover:bg-violet-600"
          >
            <Maximize2 aria-hidden="true" className="h-4 w-4" />
            Preview PDF
          </button>
          <a
            href={pdf.file}
            download
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-sm text-zinc-200 transition-colors hover:border-violet-300/40 hover:bg-white/5"
            aria-label={`Download ${pdf.title}`}
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </a>
          <a
            href={pdf.file}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-sm text-zinc-200 transition-colors hover:border-violet-300/40 hover:bg-white/5"
            aria-label={`Open ${pdf.title} in a new tab`}
          >
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">Open in a new tab</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function PdfModal({ pdf, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      role="presentation"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-2 backdrop-blur-sm sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-dialog-title"
        className="relative flex h-[90dvh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-zinc-900/80 px-3 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-violet-500/20 bg-violet-500/10">
              <FaRegFilePdf aria-hidden="true" className="text-violet-300" />
            </div>
            <div className="min-w-0">
              <p id="pdf-dialog-title" className="truncate text-sm font-semibold text-white">
                {pdf.title}
              </p>
              <p className="truncate text-xs text-zinc-400">{pdf.description}</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdf.file}
              download
              className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 px-3 text-sm text-white hover:bg-white/5"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition-colors hover:bg-violet-500/20 hover:text-violet-200"
              aria-label="Close PDF preview"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-zinc-900">
          <iframe
            src={pdf.file}
            title={`${pdf.title} PDF preview`}
            className="h-full w-full border-0"
          />
        </div>
        <div className="border-t border-white/10 bg-zinc-950 px-4 py-2 text-center text-xs text-zinc-400 sm:hidden">
          <a href={pdf.file} target="_blank" rel="noreferrer" className="text-violet-200 underline underline-offset-4">
            Open this PDF in a new tab
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}