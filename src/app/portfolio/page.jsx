"use client";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";
import { Sparkles, FileText, Eye } from "lucide-react";
import PdfGallery from "../components/PdfGallery";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative px-6 py-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mb-16 md:mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-5 py-2.5 mb-8 border border-white/10 shadow-lg shadow-blue-500/5"
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-white">Design Portfolio</span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>
            
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                UI Design PDFs
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed mb-8"
            >
              Explore our collection of carefully crafted UI design mockups and documentation.
              <br />
              <span className="text-zinc-500 text-base">
                Hover to preview scroll • Click to open full PDF
              </span>
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-4 py-2.5 border border-white/10">
                <Eye className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-zinc-300">Interactive Preview</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-4 py-2.5 border border-white/10">
                <FileText className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-zinc-300">High Quality</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-4 py-2.5 border border-white/10">
                <FaRegFilePdf className="h-4 w-4 text-red-400" />
                <span className="text-sm text-zinc-300">PDF Format</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PdfGallery />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </main>
  );
}