// components/TrustMetrics.jsx

"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Rocket,
  BrainCircuit,
} from "lucide-react";

const metrics = [
  {
    value: "500+",
    label: "Projects Delivered",
    icon: Rocket,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: CheckCircle2,
  },
  {
    value: "₹10Cr+",
    label: "Ad Spend Managed",
    icon: BrainCircuit,
  },
  {
    value: "150+",
    label: "Businesses Scaled",
    icon: Users,
  },
];

export default function TrustMetrics() {
  return (
    <section className="relative mt-24">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {metrics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl"
            >
              {/* Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-cyan-500/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Border Glow */}

              <div className="absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-cyan-400/30" />

              {/* Icon */}

              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 shadow-[0_0_35px_rgba(124,58,237,.35)]">
                <Icon className="h-6 w-6 text-white" />
              </div>

              {/* Number */}

              <motion.h3
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                className="relative text-4xl font-black tracking-tight"
              >
                {item.value}
              </motion.h3>

              {/* Label */}

              <p className="relative mt-3 text-sm leading-6 text-gray-400">
                {item.label}
              </p>

              {/* Bottom Line */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: "100%",
                }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 1,
                }}
                className="relative mt-6 h-[2px] rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}