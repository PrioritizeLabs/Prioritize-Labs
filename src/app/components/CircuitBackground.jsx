"use client";

import { motion } from "framer-motion";

const CIRCUITS = [
  { x1: "5%", y1: "12%", x2: "32%", y2: "12%" },
  { x1: "32%", y1: "12%", x2: "32%", y2: "38%" },
  { x1: "32%", y1: "38%", x2: "58%", y2: "38%" },
  { x1: "58%", y1: "38%", x2: "58%", y2: "20%" },
  { x1: "58%", y1: "20%", x2: "82%", y2: "20%" },
  { x1: "12%", y1: "62%", x2: "38%", y2: "62%" },
  { x1: "38%", y1: "62%", x2: "38%", y2: "86%" },
  { x1: "38%", y1: "86%", x2: "70%", y2: "86%" },
  { x1: "70%", y1: "86%", x2: "70%", y2: "56%" },
  { x1: "70%", y1: "56%", x2: "95%", y2: "56%" },
  { x1: "18%", y1: "25%", x2: "18%", y2: "80%" },
  { x1: "18%", y1: "80%", x2: "52%", y2: "80%" },
  { x1: "52%", y1: "80%", x2: "52%", y2: "48%" },
  { x1: "52%", y1: "48%", x2: "90%", y2: "48%" },
];

const NODES = [
  ["5%", "12%"],
  ["32%", "12%"],
  ["32%", "38%"],
  ["58%", "38%"],
  ["58%", "20%"],
  ["82%", "20%"],
  ["12%", "62%"],
  ["38%", "62%"],
  ["38%", "86%"],
  ["70%", "86%"],
  ["70%", "56%"],
  ["95%", "56%"],
  ["18%", "25%"],
  ["18%", "80%"],
  ["52%", "80%"],
  ["52%", "48%"],
  ["90%", "48%"],
];

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: ((i * 73.73) % 100).toFixed(2),
  left: ((i * 41.17) % 100).toFixed(2),
  size: i % 4 === 0 ? 2 : 1,
}));

export default function CircuitBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#241042_0%,#0b0618_45%,#020204_100%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STARS.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [1, 1.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + (star.id % 5),
              delay: star.id * 0.05,
            }}
          />
        ))}
      </div>

      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
      >
        {CIRCUITS.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(120,120,255,.18)"
            strokeWidth="2"
          />
        ))}
      </svg>

      {NODES.map(([left, top], i) => (
        <motion.div
          key={i}
          className="absolute h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_18px_#8b5cf6]"
          style={{
            left,
            top,
            transform: "translate(-50%,-50%)",
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {CIRCUITS.map((line, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_#67e8f9]"
          style={{
            left: line.x1,
            top: line.y1,
            transform: "translate(-50%,-50%)",
          }}
          animate={{
            left: [line.x1, line.x2],
            top: [line.y1, line.y2],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay: i * 0.35,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="absolute right-[15%] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="absolute left-[10%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-fuchsia-600/10 blur-[120px]" />
    </>
  );
}