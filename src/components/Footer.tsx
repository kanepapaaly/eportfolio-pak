"use client";

import { useLanguage } from "@/lib/i18n";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-mono text-sm text-ink"
            >
              <span className="grid h-6 w-6 place-items-center rounded border border-border-strong text-mint-strong">
                /
              </span>
              {profile.name}
            </a>
            <p className="mt-3 max-w-sm text-sm text-ink-muted">{t.footer.built}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-muted">
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-mint-strong">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mint-strong"
            >
              LinkedIn
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-mint-strong"
            >
              {t.nav.resume}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 font-mono text-[0.7rem] tracking-wide text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer.location}</span>
          <span className="flex items-center gap-3">
            <span>{profile.origin.coordinates}</span>
            <span aria-hidden="true">·</span>
            <span>© {year} {profile.name}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
