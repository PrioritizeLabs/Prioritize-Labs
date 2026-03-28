"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Youtube, X } from "lucide-react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const videos = [
  { id: "Iu8U9eFnjxE", title: "Video 2"  },
  { id: "bzXDuVfLlnY", title: "Video 1"  },
  { id: "LPoVRIo-iDU", title: "Video 3"  },
  { id: "Nktf6KuWmTg", title: "Video 4"  },
  { id: "lS98Vqp9Bug", title: "Video 5"  },
  { id: "SO3_TzWDf2U", title: "Video 6"  },
  { id: "lqyBUsROsww", title: "Video 7"  },
  { id: "pzaljP0zc24", title: "Video 8"  },
  { id: "Xyy7LxSu8so", title: "Video 9"  },
  { id: "QTL0wVKHvQc", title: "Video 10" },
  { id: "iOU8y2qQhxw", title: "Video 11" },
];

const thumb    = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const videoUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

/* ─────────────────────────────────────────────
   Hook: responsive card dimensions
───────────────────────────────────────────── */
function useCardDims() {
  const [dims, setDims] = useState({ fw: 680, fh: 382, sw: 300, sh: 169, gap: 20 });

  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;
      let fw, sw, gap;

      if (vw < 480) {
        gap = 10;
        fw  = Math.round(vw * 0.86);
        sw  = Math.round(vw * 0.40);
      } else if (vw < 768) {
        gap = 14;
        fw  = Math.round(vw * 0.78);
        sw  = Math.round(vw * 0.36);
      } else if (vw < 1100) {
        gap = 18;
        fw  = Math.min(580, Math.round(vw * 0.58));
        sw  = Math.round(fw * 0.48);
      } else {
        gap = 20;
        fw  = 680;
        sw  = 320;
      }

      setDims({
        fw, fh: Math.round((fw * 9) / 16),
        sw, sh: Math.round((sw * 9) / 16),
        gap,
      });
    }

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return dims;
}

/* ─────────────────────────────────────────────
   Embed Modal
───────────────────────────────────────────── */
function VideoModal({ video, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-10"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all"
      >
        <X className="w-5 h-5" />
      </button>

      <motion.div
        key={video.id}
        className="relative z-10 flex flex-col items-center gap-4 w-full max-w-5xl"
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1,    y: 0,  opacity: 1 }}
        exit={{    scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        <div
          className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10"
          style={{ aspectRatio: "16/9", boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(220,38,38,0.15)" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
            title={video.title}
          />
        </div>
        <div className="flex items-center justify-between w-full px-1 gap-3">
          <p className="text-white font-semibold text-sm sm:text-base truncate">{video.title}</p>
          <a
            href={videoUrl(video.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={{ background: "rgba(220,38,38,0.15)", borderColor: "rgba(220,38,38,0.4)", color: "#f87171" }}
          >
            <Youtube className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Watch on </span>YouTube
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main
───────────────────────────────────────────── */
export function LongFormSection() {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [modalVideo, setModalVideo] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const { fw, fh, sw, sh, gap } = useCardDims();

  const dragStartX = useRef(0);
  const dragDelta  = useRef(0);

  const goTo = useCallback((idx) => {
    setActiveIdx((idx + videos.length) % videos.length);
  }, []);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowLeft")  goTo(activeIdx - 1);
      if (e.key === "ArrowRight") goTo(activeIdx + 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [activeIdx, goTo]);

  const onDragStart = (e) => {
    setIsDragging(false);
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    dragDelta.current  = 0;
  };
  const onDragMove = (e) => {
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    dragDelta.current = clientX - dragStartX.current;
    if (Math.abs(dragDelta.current) > 6) setIsDragging(true);
  };
  const onDragEnd = () => {
    if (Math.abs(dragDelta.current) > 45) {
      goTo(dragDelta.current < 0 ? activeIdx + 1 : activeIdx - 1);
    }
    setTimeout(() => setIsDragging(false), 10);
  };

  const getCardStyle = (i) => {
    let offset = i - activeIdx;
    if (offset >  videos.length / 2) offset -= videos.length;
    if (offset < -videos.length / 2) offset += videos.length;

    const isCenter = offset === 0;
    const absOff   = Math.abs(offset);

    if (absOff > 2.5) return null;

    const w     = isCenter ? fw : sw;
    const h     = isCenter ? fh : sh;
    const scale = isCenter ? 1  : 0.9  - Math.max(0, absOff - 1) * 0.05;
    const op    = isCenter ? 1  : 0.38 - Math.max(0, absOff - 1) * 0.10;
    const blur  = isCenter ? 0  : 1.5  + (absOff - 1) * 2;

    let x = 0;
    if (offset !== 0) {
      const sign = Math.sign(offset);
      x = sign * (fw / 2 + gap + sw / 2);
      if (absOff > 1) x += sign * (absOff - 1) * (sw + gap);
    }

    return { x, w, h, scale, op, blur, zIndex: isCenter ? 20 : 10 - absOff, isCenter };
  };

  const playBtnSize = fw < 360 ? 48 : fw < 480 ? 58 : 72;
  const playIconSize = fw < 360 ? 16 : fw < 480 ? 22 : 28;

  return (
    <div
      className="w-full py-12 sm:py-20 select-none overflow-hidden"
      style={{ fontFamily: "'Syne', sans-serif", background: "#0a0a0a" }}
    >
      

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="mb-8 sm:mb-14 flex items-end justify-between">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-red-500/60 mb-2 sm:mb-3">
              Long Form Content
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white! leading-none tracking-tight">
              YouTube{" "}
              <span
                className="text-red-500"
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: "1.1em" }}
              >
                Videos
              </span>
            </h2>
          </div>
          <p className="hidden sm:block text-white/20 text-xs tracking-widest mb-1">
            {videos.length} EPISODES
          </p>
        </div>

        {/* Swiper */}
        <div className="flex flex-col items-center">

          <div
            className="relative w-full cursor-grab active:cursor-grabbing"
            style={{ height: fh + 16, touchAction: "none" }}
            onMouseDown={onDragStart}
            onMouseMove={isDragging ? onDragMove : undefined}
            onMouseUp={onDragEnd}
            onMouseLeave={isDragging ? onDragEnd : undefined}
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {videos.map((v, i) => {
                const s = getCardStyle(i);
                if (!s) return null;
                const { x, w, h, scale, op, blur, zIndex, isCenter } = s;

                return (
                  <motion.div
                    key={v.id}
                    className="absolute"
                    style={{ zIndex, pointerEvents: "auto" }}
                    animate={{ x, scale, opacity: op, filter: `blur(${blur}px)` }}
                    transition={{ type: "spring", stiffness: 340, damping: 32, mass: 0.9 }}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{
                        width: w,
                        height: h,
                        borderRadius: isCenter ? 16 : 10,
                        cursor: isCenter ? "default" : "pointer",
                        boxShadow: isCenter
                          ? "0 0 0 1.5px rgba(220,38,38,0.55), 0 24px 70px rgba(0,0,0,0.7), 0 0 50px rgba(220,38,38,0.1)"
                          : "0 8px 24px rgba(0,0,0,0.5)",
                      }}
                      onClick={() => { if (!isCenter && !isDragging) goTo(i); }}
                    >
                      <img
                        src={thumb(v.id)}
                        alt={v.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />

                      <div
                        className="absolute inset-0"
                        style={{
                          background: isCenter
                            ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.08) 52%, transparent 100%)"
                            : "rgba(0,0,0,0.52)",
                        }}
                      />

                      {isCenter && (
                        <div
                          className="absolute top-0 left-0 right-0 h-[2px]"
                          style={{ background: "linear-gradient(90deg, #dc2626, #f97316, transparent)" }}
                        />
                      )}

                      {isCenter && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.button
                            className="flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
                            style={{ width: playBtnSize, height: playBtnSize }}
                            whileHover={{ scale: 1.12, background: "rgba(220,38,38,0.4)", borderColor: "rgba(220,38,38,0.7)" }}
                            whileTap={{ scale: 0.94 }}
                            onClick={(e) => { e.stopPropagation(); if (!isDragging) setModalVideo(v); }}
                          >
                            <Play
                              className="text-white fill-white translate-x-0.5"
                              style={{ width: playIconSize, height: playIconSize }}
                            />
                          </motion.button>
                        </div>
                      )}

                      {isCenter && (
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex items-end justify-between gap-2">
                          <div className="min-w-0">
                            <span
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-bold tracking-widest uppercase mb-1"
                              style={{ background: "rgba(220,38,38,0.2)", color: "#f87171", border: "1px solid rgba(220,38,38,0.3)" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block" />
                              Now Spotlit
                            </span>
                            <p className="text-white font-bold text-sm sm:text-lg leading-snug truncate">
                              {v.title}
                            </p>
                          </div>
                          <a
                            href={videoUrl(v.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex flex-shrink-0 items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-semibold border transition-all"
                            style={{ background: "rgba(220,38,38,0.15)", borderColor: "rgba(220,38,38,0.4)", color: "#f87171" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Youtube className="w-3.5 h-3.5" />
                            Watch
                          </a>
                        </div>
                      )}

                      {!isCenter && (
                        <p className="absolute bottom-2 left-2.5 right-2.5 text-white/60 text-[9px] sm:text-[11px] font-semibold line-clamp-2 leading-snug">
                          {v.title}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Nav + Dots */}
          <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6">
            <motion.button
              onClick={() => goTo(activeIdx - 1)}
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all"
              style={{ width: 40, height: 40 }}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {videos.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  animate={{
                    width:      i === activeIdx ? 20 : 5,
                    opacity:    i === activeIdx ? 1  : 0.28,
                    background: i === activeIdx ? "#dc2626" : "#ffffff",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="h-[5px] rounded-full"
                  style={{ minWidth: 5 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => goTo(activeIdx + 1)}
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/12 hover:border-white/20 transition-all"
              style={{ width: 40, height: 40 }}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <p className="mt-3 text-white/20 text-[10px] sm:text-xs tracking-[0.2em] font-medium">
            {String(activeIdx + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {modalVideo && (
          <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}