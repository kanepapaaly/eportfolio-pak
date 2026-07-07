"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { education, experience, type TimelineItem } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Parcours() {
  const { t } = useLanguage();

  return (
    <section id="parcours" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          kicker={t.sections.educationKicker}
          title={t.sections.educationTitle}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Track label={t.education.formation} items={education} />
          <Track label={t.education.experience} items={experience} />
        </div>
      </div>
    </section>
  );
}

function Track({ label, items }: { label: string; items: TimelineItem[] }) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-mint" />
        <h3 className="mono-label !text-ink">{label}</h3>
      </div>
      <ol className="relative space-y-8 border-l border-border pl-6">
        {items.map((item, i) => (
          <TimelineNode key={item.id} item={item} delay={i * 0.05} />
        ))}
      </ol>
    </div>
  );
}

function TimelineNode({ item, delay }: { item: TimelineItem; delay: number }) {
  const { tr } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative"
    >
      {/* Node marker on the rail */}
      <span className="absolute -left-[1.7rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-mint bg-bg" />

      <p className="font-mono text-xs tracking-wide text-mint-strong">
        {tr(item.period)}
      </p>
      <h4 className="mt-1.5 font-display text-lg font-semibold tracking-tight">
        {tr(item.title)}
      </h4>
      <p className="mt-0.5 text-sm text-ink-muted">
        {tr(item.org)} · {tr(item.location)}
      </p>

      <ul className="mt-3 space-y-1.5">
        {tr(item.points).map((point, idx) => (
          <li key={idx} className="text-sm leading-relaxed text-ink-muted">
            {point}
          </li>
        ))}
      </ul>

      {item.tags && item.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[0.68rem] text-ink-faint"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  );
}
