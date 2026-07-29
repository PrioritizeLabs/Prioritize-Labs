"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Activity,
  Database,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import FloatingStats from "./FloatingStats";

export default function AICore({ mounted }) {
  const nodes = [
    { top: "18%", left: "50%", icon: Cpu },
    { top: "33%", left: "78%", icon: Activity },
    { top: "68%", left: "75%", icon: Database },
    { top: "82%", left: "50%", icon: BrainCircuit },
    { top: "68%", left: "22%", icon: Sparkles },
    { top: "33%", left: "22%", icon: Cpu },
  ];

  return (
    <div className="relative flex h-[620px] w-[620px] items-center justify-center">
      {/* OUTER RINGS */}

      <motion.div
        animate={mounted ? { rotate: 360 } : {}}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[560px] w-[560px] rounded-full border border-violet-500/10"
      />

      <motion.div
        animate={mounted ? { rotate: -360 } : {}}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
        className="absolute h-[470px] w-[470px] rounded-full border border-cyan-400/10 border-dashed"
      />

      <motion.div
        animate={mounted ? { rotate: 360 } : {}}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="absolute h-[390px] w-[390px] rounded-full border border-violet-400/20"
      />

      {/* GLOW */}

      <div className="absolute h-[280px] w-[280px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* CORE */}

      <motion.div
        animate={
          mounted
            ? {
                scale: [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-600 to-cyan-400 shadow-[0_0_100px_rgba(139,92,246,.6)]"
      >
        <div className="absolute inset-[10px] rounded-full border border-white/20" />

        <div className="absolute inset-[24px] rounded-full border border-white/10" />

        <BrainCircuit className="h-16 w-16 text-white" />
      </motion.div>

      {/* CONNECTIONS */}

      <svg className="absolute inset-0 h-full w-full">
        {nodes.map((node, index) => (
          <line
            key={index}
            x1="50%"
            y1="50%"
            x2={node.left}
            y2={node.top}
            stroke="rgba(139,92,246,.25)"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* FLOATING NODES */}

      {nodes.map((node, i) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={i}
            animate={
              mounted
                ? {
                    y: [0, -12, 0],
                    scale: [1, 1.08, 1],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 4 + i,
              delay: i * 0.3,
            }}
            className="absolute"
            style={{
              top: node.top,
              left: node.left,
              transform: "translate(-50%,-50%)",
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,.2)]">
              <Icon className="h-7 w-7 text-cyan-300" />
            </div>
          </motion.div>
        );
      })}

      {/* FLOATING DASHBOARD */}

    <FloatingStats/>
      {/* <motion.div
        animate={
          mounted
            ? {
                y: [0, -10, 0],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute left-[-10px] top-[120px] w-[220px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          AI SYSTEM
        </p>

        <h3 className="mt-4 text-4xl font-bold">98%</h3>

        <p className="mt-2 text-sm text-gray-400">
          Campaign Accuracy
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              width: ["20%", "98%", "98%"],
            }}
            transition={{
              duration: 2,
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          />
        </div>
      </motion.div>

      <motion.div
        animate={
          mounted
            ? {
                y: [0, 12, 0],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-[120px] right-[-10px] w-[220px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
          PROJECTS
        </p>

        <h3 className="mt-4 text-4xl font-bold">500+</h3>

        <p className="mt-2 text-sm text-gray-400">
          Successfully Delivered
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              width: ["10%", "86%", "86%"],
            }}
            transition={{
              duration: 2,
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500"
          />
        </div>
      </motion.div> */}
    </div>
  );
}