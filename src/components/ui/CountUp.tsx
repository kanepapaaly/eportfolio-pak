"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

// Leading number of a pre-formatted figure: "2 000+", "17,7 %", "5 mois".
const NUMBER = /^(\d{1,3}(?:[   ]\d{3})*|\d+)(?:,(\d+))?/;

/** Counts a pre-formatted figure up from 0 when it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const match = value.match(NUMBER);
  const animated = match !== null && !reduce;

  useEffect(() => {
    if (!match || !inView || reduce) return;
    const [whole, int, dec = ""] = match;
    const separator = int.match(/[   ]/)?.[0] ?? "";
    const suffix = value.slice(whole.length);
    const target = Number(int.replace(/\D/g, "") + "." + (dec || "0"));

    const format = (n: number) => {
      const [i, d] = n.toFixed(dec.length).split(".");
      const grouped = separator ? i.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : i;
      return grouped + (d ? "," + d : "") + suffix;
    };

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => {
        if (ref.current) ref.current.textContent = format(n);
      },
    });
    return () => controls.stop();
    // match is derived from value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  // Start at 0 when animating; the full value is exposed to screen readers.
  const initial = animated ? value.replace(NUMBER, (_, __, dec?: string) => (dec ? "0," + "0".repeat(dec.length) : "0")) : value;

  return (
    <span ref={ref} className="tabular-nums" aria-label={value}>
      {initial}
    </span>
  );
}
