"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { profile } from "@/data/profile";

export function Hero() {
  const { t, locale } = useLanguage();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const readout = [
    { k: "focus", v: "IA · Data · Full-Stack" },
    { k: "building", v: ":flex → App Store" },
    { k: locale === "fr" ? "études" : "studying", v: "M1 · Gustave Eiffel" },
    { k: locale === "fr" ? "basé" : "based", v: "Île-de-France" },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40"
    >
      {/* Ambient technical grid + mint glow */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "var(--glow)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center"
      >
        {/* Left: the thesis */}
        <div className="min-w-0">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs tracking-wide text-ink-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              {t.hero.status}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mono-label mt-6"
          >
            {t.hero.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {t.hero.headline}{" "}
            <span className="text-mint-strong">{t.hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {t.hero.lede}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projets"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 dark:bg-mint dark:text-[#06110b]"
            >
              {t.hero.ctaProjects}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-mint"
            >
              {t.hero.ctaResume}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>

        {/* Right: technical readout, the mono signature */}
        <motion.div variants={item} className="w-full min-w-0 lg:justify-self-end">
          <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[0_1px_2px_rgba(13,20,17,0.04),0_12px_40px_-12px_rgba(13,20,17,0.12)] dark:shadow-[inset_0_1px_0_rgba(62,207,142,0.08),0_24px_60px_-24px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              <span className="ml-2 font-mono text-xs text-ink-faint">
                ~ whoami
              </span>
            </div>
            <dl className="divide-y divide-border font-mono text-sm">
              {readout.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 px-4 py-3"
                >
                  <dt className="text-ink-faint">{row.k}</dt>
                  <dd className="text-right text-ink">{row.v}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 px-4 py-3">
                <dt className="text-ink-faint">status</dt>
                <dd className="flex items-center gap-2 text-mint-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  open to work
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="relative mx-auto mt-16 flex max-w-6xl justify-center lg:justify-start"
      >
        <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-ink-faint">
          <span className="h-8 w-px bg-gradient-to-b from-mint to-transparent" />
          {t.hero.scroll.toUpperCase()}
        </span>
      </motion.div>
    </section>
  );
}
