"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/data/projects";

function LinkIcon({ kind }: { kind: Project["links"][number]["kind"] }) {
  if (kind === "code") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, tr } = useLanguage();
  const reduce = useReducedMotion();
  const idx = String(index + 1).padStart(2, "0");
  const hasImages = project.images.length > 0;
  const hasLinks = project.links.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-mint sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-12">
        {/* Meta rail */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-2xl font-medium text-ink-faint transition-colors group-hover:text-mint-strong">
              {idx}
            </span>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] tracking-wide text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {tr(project.statusTag)}
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs tracking-wide text-ink-faint">
              {tr(project.kind)} · {tr(project.period)}
            </p>
          </div>

          {/* Stack */}
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[0.72rem] text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          {hasLinks && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    link.kind === "primary"
                      ? "bg-ink text-bg hover:opacity-90 dark:bg-mint dark:text-[#06110b]"
                      : "border border-border-strong text-ink hover:border-mint"
                  }`}
                >
                  {tr(link.label)}
                  <LinkIcon kind={link.kind} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="min-w-0">
          <p className="font-display text-lg font-medium leading-snug text-balance text-ink sm:text-xl">
            {tr(project.tagline)}
          </p>

          <div className="mt-6 space-y-5">
            <Block label={t.project.problem} text={tr(project.problem)} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Block label={t.project.role} text={tr(project.role)} />
              <Block label={t.project.result} text={tr(project.result)} />
            </div>
          </div>

          {/* Signature: "what it proves" */}
          <div className="mt-6 rounded-lg border-l-2 border-mint bg-mint-soft/60 px-4 py-3 dark:bg-mint-soft">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-mint-strong">
              {t.project.proves}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink">
              {tr(project.proves)}
            </p>
          </div>

          {/* Gallery: rendered only when screenshots exist */}
          {hasImages && (
            <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
              {project.images.map((img) => (
                <div
                  key={img.src}
                  className="relative w-[128px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border-strong bg-bg shadow-sm"
                  style={{ aspectRatio: "1206 / 2622" }}
                >
                  <Image
                    src={img.src}
                    alt={tr(img.alt)}
                    fill
                    sizes="128px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mono-label">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
