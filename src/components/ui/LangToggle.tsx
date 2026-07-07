"use client";

import { useLanguage } from "@/lib/i18n";

export function LangToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.lang.toggle}
      title={t.lang.toggle}
      className="flex h-9 items-center gap-1 rounded-full border border-border px-3 font-mono text-xs font-medium tracking-wider text-ink-muted transition-colors hover:border-mint hover:text-ink"
    >
      <span className={locale === "fr" ? "text-mint-strong" : ""}>FR</span>
      <span className="text-ink-faint">/</span>
      <span className={locale === "en" ? "text-mint-strong" : ""}>EN</span>
    </button>
  );
}
