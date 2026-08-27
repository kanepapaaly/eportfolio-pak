import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Papa Aly Kane · IA, Data & Développement Full-Stack",
    template: "%s · Papa Aly Kane",
  },
  description:
    "Étudiant M1 Informatique en recherche d'alternance 2026/2027 en IA, Data et développement Full-Stack. Des produits réels, livrés et testés par de vrais utilisateurs.",
  keywords: [
    "Papa Aly Kane",
    "alternance",
    "IA",
    "Data",
    "développement full-stack",
    "React Native",
    "Machine Learning",
    "FastAPI",
    "Spring Boot",
    "portfolio développeur",
  ],
  authors: [{ name: "Papa Aly Kane" }],
  creator: "Papa Aly Kane",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Papa Aly Kane",
    title: "Papa Aly Kane · IA, Data & Développement Full-Stack",
    description:
      "En recherche d'alternance 2026/2027. Des produits réels, livrés et testés par de vrais utilisateurs, du mobile au Machine Learning.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Papa Aly Kane · IA, Data & Développement Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Papa Aly Kane · IA, Data & Développement Full-Stack",
    description:
      "En recherche d'alternance 2026/2027. Des produits réels, livrés et testés par de vrais utilisateurs.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
