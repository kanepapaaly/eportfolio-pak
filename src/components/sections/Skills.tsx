"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  const { t, tr } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <section
      id="competences"
      className="relative border-t border-border bg-bg-elevated px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          kicker={t.sections.skillsKicker}
          title={t.sections.skillsTitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className={`group rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-mint sm:p-7 ${
                // An odd number of groups: the last card spans the full row.
                skillGroups.length % 2 === 1 && i === skillGroups.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-ink-faint transition-colors group-hover:text-mint-strong">
                  {group.index}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                  {tr(group.title)}
                </h3>
              </div>
              <p className="mt-2 text-sm text-ink-muted">{tr(group.note)}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[0.72rem] text-ink-muted transition-colors hover:border-mint hover:text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
