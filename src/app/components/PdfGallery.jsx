"use client";

import { useState } from "react";
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

export default function PdfGallery() {
  const [activePdf, setActivePdf] = useState(null);

  return (
    <div className="min-h-screen">


      {/* Gallery */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PDFS.map((pdf, index) => (
          <motion.div
            key={pdf.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PdfCard pdf={pdf} onOpen={() => setActivePdf(pdf)} />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activePdf && (
          <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function PdfCard({ pdf, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverScrollDistance = 900;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      onClick={onOpen}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-xl border border-white/5 hover:border-white/10 transition-all duration-300"
    >
      {/* 16:9 Preview */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        <motion.iframe
          animate={{ y: isHovered ? -hoverScrollDistance : 0 }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
          src={`${pdf.file}#toolbar=0&navpanes=0&scrollbar=0`}
          className="absolute left-0 top-0 h-[1200px] w-full scale-[1.01] origin-top"
          style={{ border: "none" }}
        />

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

        {/* Hover badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-4 py-2 text-xs font-medium text-white border border-white/10"
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Preview
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ opacity: isHovered ? 0 : 1 }}
          className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-xs text-white/80 border border-white/10"
        >
          <FaRegFilePdf className="text-red-400" />
          Hover to scroll
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Description */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {pdf.title}
          </h3>
          <p className="text-sm text-zinc-400">{pdf.description}</p>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
            {pdf.pages} pages
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
            PDF
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={onOpen}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            <Maximize2 className="h-4 w-4" />
            View Full
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(pdf.file, '_blank');
            }}
            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}

function PdfModal({ pdf, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl border border-white/10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/50 backdrop-blur-xl px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20">
              <FaRegFilePdf className="text-red-400 text-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{pdf.title}</p>
              <p className="text-xs text-zinc-400">{pdf.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.open(pdf.file, '_blank')}
              className="rounded-xl bg-white/5 p-2.5 text-white hover:bg-white/10 transition-colors border border-white/10"
              title="Download"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="rounded-xl bg-white/5 p-2.5 text-white hover:bg-red-500/20 hover:text-red-400 transition-colors border border-white/10"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="h-[calc(92vh-73px)] w-full bg-zinc-900">
          <iframe
            src={pdf.file}
            className="h-full w-full"
            style={{ border: "none" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}