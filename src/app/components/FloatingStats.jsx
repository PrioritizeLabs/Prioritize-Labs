// components/FloatingStats.jsx

"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Sparkles,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Revenue Growth",
    value: "+327%",
    subtitle: "Average Client Growth",
    icon: TrendingUp,
    color: "from-cyan-400 to-violet-500",
    position: "left-0 top-12",
  },
  {
    title: "Campaign Score",
    value: "98%",
    subtitle: "AI Optimization",
    icon: Activity,
    color: "from-violet-400 to-fuchsia-500",
    position: "right-0 top-40",
  },
  {
    title: "Ad Spend",
    value: "₹10Cr+",
    subtitle: "Successfully Managed",
    icon: BarChart3,
    color: "from-indigo-400 to-cyan-400",
    position: "left-8 bottom-8",
  },
];

export default function FloatingStats() {
  return (
    <>
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
              y: {
                repeat: Infinity,
                duration: 4 + index,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className={`absolute ${card.position} scale-60 md:scale-80 w-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40`}
          >
            {/* Glow */}

            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-[0.08]`}
            />

            {/* Header */}

            <div className="relative flex items-center justify-between px-6 pt-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                  {card.title}
                </p>

                <h3 className="mt-3 text-4xl font-black">{card.value}</h3>

                <p className="mt-2 text-sm text-gray-400">{card.subtitle}</p>
              </div>

              <div
                className={`rounded-2xl bg-gradient-to-br ${card.color} p-3 shadow-lg`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Chart */}

            <div className="relative mt-8 px-6 pb-6">
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "92%",
                  }}
                  transition={{
                    delay: 0.4 + index * 0.3,
                    duration: 1.5,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <ArrowUpRight className="h-4 w-4" />
                  Stable Growth
                </div>

                <div className="flex items-center gap-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] text-cyan-300">
                  <Sparkles className="h-3 w-3" />
                  Live
                </div>
              </div>
            </div>

            {/* Shine */}

            <motion.div
              animate={{
                x: ["-120%", "220%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: index,
              }}
              className="absolute top-0 h-full w-20 rotate-12 bg-white/10 blur-xl"
            />
          </motion.div>
        );
      })}
    </>
  );
}
