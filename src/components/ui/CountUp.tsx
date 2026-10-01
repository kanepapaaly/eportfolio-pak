"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Leading number of a pre-formatted figure: "2 000+", "17,7 %", "5 mois".
const NUMBER = /^(\d{1,3}(?:[   ]\d{3})*|\d+)(?:,(\d+))?/;

/** Rewrite the leading number of a figure, keeping its separators and suffix. */
function withNumber(value: string, n: number) {
  const match = value.match(NUMBER);
  if (!match) return value;
  const [whole, int, dec = ""] = match;
  const separator = int.match(/[   ]/)?.[0] ?? "";
  const [i, d] = n.toFixed(dec.length).split(".");
  const grouped = separator ? i.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : i;
  return grouped + (d ? "," + d : "") + value.slice(whole.length);
}

function numberOf(value: string) {
  const match = value.match(NUMBER);
  if (!match) return null;
  return Number(match[1].replace(/\D/g, "") + "." + (match[2] ?? "0"));
}

/** Counts a pre-formatted figure up from 0 the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const target = numberOf(value);
  const countable = target !== null && !reduce;
  // 0 before the figure is seen, 1 once counted. Switching language keeps it at 1.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!countable || !inView) return;
    const controls = animate(0, 1, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setProgress,
    });
    return () => controls.stop();
  }, [countable, inView]);

  const shown = countable ? withNumber(value, target * progress) : value;

  // Screen readers always get the real figure.
  return (
    <span ref={ref} className="tabular-nums" aria-label={value}>
      {shown}
    </span>
  );
}
