"use client";

import { useLanguage } from "@/lib/i18n";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const contactChannels = [
  {
    id: "email",
    labelKey: "emailLabel" as const,
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
    icon: (
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
    ),
  },
  {
    id: "phone",
    labelKey: "phoneLabel" as const,
    value: profile.phone,
    href: profile.phoneHref,
    external: false,
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    ),
  },
  {
    id: "linkedin",
    labelKey: "linkedinLabel" as const,
    value: profile.linkedinHandle,
    href: profile.linkedin,
    external: true,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v6M8 7v.5M12 16v-3.5a1.5 1.5 0 013 0V16" />
      </>
    ),
  },
  {
    id: "github",
    labelKey: "githubLabel" as const,
    value: profile.githubHandle,
    href: profile.github,
    external: true,
    icon: (
      <path d="M9 19c-4 1.3-4-2-5.5-2.5M15 21v-3.3c0-.9.2-1.6-.4-2.2 2.5-.3 5-1.3 5-5.5a4.2 4.2 0 00-1.2-3 3.9 3.9 0 00-.1-3s-1-.3-3.2 1.2a11 11 0 00-5.7 0C6.2 3.7 5.2 4 5.2 4a3.9 3.9 0 00-.1 3A4.2 4.2 0 004 10c0 4.2 2.5 5.2 5 5.5-.6.6-.6 1.2-.5 2.2V21" />
    ),
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative border-t border-border bg-bg-elevated px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          kicker={t.sections.contactKicker}
          title={t.sections.contactTitle}
          lede={t.contact.lede}
        />

        <Reveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-mint sm:p-6"
            >
              <span className="flex items-center justify-between">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-ink-muted transition-colors group-hover:border-mint group-hover:text-mint-strong">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {channel.icon}
                  </svg>
                </span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint-strong" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="mono-label block">{t.contact[channel.labelKey]}</span>
                <span className="mt-1 block truncate text-sm text-ink">{channel.value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 dark:bg-mint dark:text-[#06110b]"
          >
            {t.hero.ctaResume}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
            </svg>
          </a>
          <p className="font-mono text-xs tracking-wide text-ink-faint">
            {t.contact.availability}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
