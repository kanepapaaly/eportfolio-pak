"use client";

import { useState, type FormEvent } from "react";
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
    icon: (
      <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
    ),
  },
  {
    id: "phone",
    labelKey: "phoneLabel" as const,
    value: profile.phone,
    href: profile.phoneHref,
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    ),
  },
  {
    id: "linkedin",
    labelKey: "linkedinLabel" as const,
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v6M8 7v.5M12 16v-3.5a1.5 1.5 0 013 0V16" />
      </>
    ),
  },
];

export function Contact() {
  const { t } = useLanguage();
  const [opening, setOpening] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = `${t.contact.formSubject} — ${name || email}`;
    const body = `${message}\n\n${name}${email ? `\n${email}` : ""}`;
    setOpening(true);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => setOpening(false), 2500);
  }

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

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Direct channels */}
          <Reveal className="flex flex-col gap-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.id === "linkedin" ? "_blank" : undefined}
                rel={channel.id === "linkedin" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-mint"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-ink-muted transition-colors group-hover:border-mint group-hover:text-mint-strong">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {channel.icon}
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="mono-label block">{t.contact[channel.labelKey]}</span>
                  <span className="block truncate text-sm text-ink">{channel.value}</span>
                </span>
              </a>
            ))}

            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 dark:bg-mint dark:text-[#06110b]"
            >
              {t.hero.ctaResume}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
              </svg>
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label={t.contact.formName}
                  placeholder={t.contact.formNamePlaceholder}
                  autoComplete="name"
                  required
                />
                <Field
                  id="email"
                  type="email"
                  label={t.contact.formEmail}
                  placeholder={t.contact.formEmailPlaceholder}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mono-label block">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t.contact.formMessagePlaceholder}
                  className="mt-2 w-full resize-y rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-mint"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 sm:w-auto dark:bg-mint dark:text-[#06110b]"
              >
                {opening ? t.contact.formOpening : t.contact.formSend}
                {!opening && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono-label block">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-mint"
      />
    </div>
  );
}
