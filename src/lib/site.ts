/**
 * Canonical site URL, resolved at build/runtime.
 * Priority: explicit override → Vercel production domain → local fallback.
 * Set NEXT_PUBLIC_SITE_URL in Vercel once you attach a custom domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://papaalykane.vercel.app");
