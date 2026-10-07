"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * value: numeric target (e.g. 1200, 4, 3)
 * prefix / suffix: strings rendered around the number, e.g. suffix="×" or prefix="₹"
 * decimals: number of decimal places to show
 */
export default function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0, duration = 1.4 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
