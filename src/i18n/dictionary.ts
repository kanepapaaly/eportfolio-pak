export type Locale = "fr" | "en";

export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

/** A value that exists in both languages. */
export type Localized<T = string> = Record<Locale, T>;

/** Resolve a localized value for the active locale. */
export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

/** UI chrome strings (navigation, buttons, section headers). */
export const dictionary = {
  fr: {
    nav: {
      projects: "Projets",
      skills: "Compétences",
      education: "Parcours",
      contact: "Contact",
      resume: "CV",
    },
    hero: {
      status: "Disponible pour une alternance 2026 / 2027",
      role: "Étudiant M1 Informatique · Université Gustave Eiffel",
      headline: "Je conçois des produits qui tiennent en production,",
      headlineAccent: "de la donnée à l'interface.",
      lede: "IA, Data et développement Full-Stack. Je ne fais pas des projets de classe : je livre des applications réelles, testées par de vrais utilisateurs.",
      ctaProjects: "Voir mes projets",
      ctaResume: "Télécharger le CV",
      ctaContact: "Me contacter",
      scroll: "Défiler",
    },
    sections: {
      projectsKicker: "Sélection de projets",
      projectsTitle: "Ce que je construis",
      projectsLede:
        "Cinq projets, cinq preuves de compétence, du produit mobile livré jusqu'au pipeline de Machine Learning.",
      skillsKicker: "Compétences",
      skillsTitle: "La boîte à outils",
      educationKicker: "Parcours",
      educationTitle: "Formation & expérience",
      contactKicker: "Contact",
      contactTitle: "Parlons de votre alternance",
    },
    education: {
      formation: "Formation",
      experience: "Expérience",
    },
    project: {
      problem: "Le problème",
      role: "Mon rôle",
      stack: "Stack",
      result: "Résultat",
      status: "Statut",
      proves: "Ce que ça prouve",
      viewProject: "Voir le projet",
      viewCode: "Code source",
    },
    contact: {
      lede: "Un poste, un projet, ou juste envie d'échanger ? Email, téléphone ou LinkedIn : je réponds vite.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      linkedinLabel: "LinkedIn",
      availability: "Réponse sous 24 h · Île-de-France et télétravail",
    },
    footer: {
      built: "Conçu et développé avec Next.js, TypeScript & Tailwind.",
      location: "Île-de-France, France · originaire du Sénégal",
      rights: "Tous droits réservés.",
    },
    theme: {
      toggle: "Changer de thème",
    },
    lang: {
      toggle: "Switch to English",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      education: "Background",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      status: "Open to work for a 2026 / 2027 apprenticeship",
      role: "MSc Computer Science · Université Gustave Eiffel",
      headline: "I build products that hold up in production,",
      headlineAccent: "from data to interface.",
      lede: "AI, Data and Full-Stack development. Not classroom projects: I ship real apps, tested by real users.",
      ctaProjects: "See my work",
      ctaResume: "Download resume",
      ctaContact: "Get in touch",
      scroll: "Scroll",
    },
    sections: {
      projectsKicker: "Selected work",
      projectsTitle: "What I build",
      projectsLede:
        "Five projects, five proofs of skill, from a shipped mobile product to a full Machine Learning pipeline.",
      skillsKicker: "Skills",
      skillsTitle: "The toolbox",
      educationKicker: "Background",
      educationTitle: "Education & experience",
      contactKicker: "Contact",
      contactTitle: "Let's talk about your apprenticeship",
    },
    education: {
      formation: "Education",
      experience: "Experience",
    },
    project: {
      problem: "The problem",
      role: "My role",
      stack: "Stack",
      result: "Outcome",
      status: "Status",
      proves: "What it proves",
      viewProject: "View project",
      viewCode: "Source code",
    },
    contact: {
      lede: "A role, a project, or just a chat? Email, phone or LinkedIn: I reply fast.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      availability: "Reply within 24 h · Île-de-France and remote",
    },
    footer: {
      built: "Designed and built with Next.js, TypeScript & Tailwind.",
      location: "Île-de-France, France · from Kaolack, Senegal",
      rights: "All rights reserved.",
    },
    theme: {
      toggle: "Toggle theme",
    },
    lang: {
      toggle: "Passer en français",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];
