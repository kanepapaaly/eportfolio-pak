import type { Localized } from "@/i18n/dictionary";

export type ProjectLink = {
  label: Localized;
  href: string;
  /** Primary link renders as a filled button, others as ghost. */
  kind: "primary" | "code" | "external";
};

export type ProjectImage = {
  src: string;
  alt: Localized;
};

export type Project = {
  id: string;
  /** Display name, kept identical across locales. */
  name: string;
  /** Short qualifier shown next to the name, e.g. "App mobile". */
  kind: Localized;
  period: Localized;
  /** One-line hook under the title. */
  tagline: Localized;
  /** The concrete problem the project solves. */
  problem: Localized;
  /** What the author personally did. */
  role: Localized;
  /** Outcome / current status, results-oriented. */
  result: Localized;
  /** The single "what it proves I can do" line. */
  proves: Localized;
  stack: string[];
  links: ProjectLink[];
  images: ProjectImage[];
  /** Featured projects get the largest cards, first. */
  featured?: boolean;
  /** Status chip label, e.g. "En production". */
  statusTag: Localized;
};

export const projects: Project[] = [
  {
    id: "flex",
    name: ":flex",
    kind: {
      fr: "App mobile · EdTech",
      en: "Mobile app · EdTech",
    },
    period: { fr: "Depuis 2025", en: "Since 2025" },
    tagline: {
      fr: "Apprendre l'anglais quand les méthodes occidentales ne parlent pas de ton quotidien.",
      en: "Learning English when Western methods don't speak to your daily life.",
    },
    problem: {
      fr: "Les lycéens et jeunes actifs sénégalais apprennent l'anglais sur des apps pensées pour un public occidental : contenus hors-sol, exemples culturellement décalés, motivation qui s'effondre. :flex reconstruit l'apprentissage autour de leur quotidien : Sénégal, Afrique, francophonie.",
      en: "Senegalese students and young professionals learn English on apps built for a Western audience: disconnected content, culturally off examples, motivation that collapses. :flex rebuilds learning around their own world: Senegal, Africa, the francophone context.",
    },
    role: {
      fr: "Conception produit et développement de bout en bout : app mobile React Native/Expo, API FastAPI, base Supabase. J'ai ancré la pédagogie sur des fondations solides (input compréhensible de Krashen, pivot words d'Ogden, double codage de Paivio), puis fait les choix techniques : synthèse vocale ElevenLabs, module Culture Générale en format \"discovery\" façon TikTok avec lecteur audio karaoké.",
      en: "End-to-end product design and development: React Native/Expo app, FastAPI backend, Supabase database. I grounded the pedagogy on solid foundations (Krashen's comprehensible input, Ogden's pivot words, Paivio's dual coding), then made the technical calls: ElevenLabs speech synthesis, a TikTok-style \"discovery\" General Knowledge module with a karaoke audio player.",
    },
    result: {
      fr: "En test externe TestFlight (build 1.0.0), distribué activement via WhatsApp et Instagram à de vrais utilisateurs. Stratégie de rétention par défis mensuels thématiques. Un produit vivant, pas une maquette.",
      en: "In external TestFlight testing (build 1.0.0), actively distributed to real users via WhatsApp and Instagram. Retention driven by monthly themed challenges. A living product, not a mockup.",
    },
    proves: {
      fr: "Que je peux porter un produit du concept jusqu'à de vrais utilisateurs, avec des choix pédagogiques et techniques que je sais justifier.",
      en: "That I can carry a product from concept to real users, with pedagogical and technical choices I can defend.",
    },
    stack: ["React Native", "Expo", "FastAPI", "Supabase", "PostgreSQL", "ElevenLabs"],
    statusTag: { fr: "En test · TestFlight", en: "Testing · TestFlight" },
    links: [
      {
        label: { fr: "Site web", en: "Website" },
        href: "https://www.flex-app.app",
        kind: "primary",
      },
    ],
    images: [],
    featured: true,
  },
  {
    id: "campus",
    name: "Campus",
    kind: {
      fr: "App mobile · Productivité étudiante",
      en: "Mobile app · Student productivity",
    },
    period: { fr: "Janvier à mars 2026", en: "Jan to Mar 2026" },
    tagline: {
      fr: "Un seul endroit pour l'emploi du temps, les tâches et les notes, même hors-ligne.",
      en: "One place for schedule, tasks and notes, even offline.",
    },
    problem: {
      fr: "Les étudiants jonglent entre l'ENT, un agenda, une app de notes et des rappels dispersés. Campus centralise tout : synchronisation automatique de l'emploi du temps (ICS/ADE), gestion des tâches et des notes, le tout utilisable sans connexion.",
      en: "Students juggle the university portal, a calendar, a notes app and scattered reminders. Campus centralizes everything: automatic schedule sync (ICS/ADE), task and note management, all usable without a connection.",
    },
    role: {
      fr: "Architecture full-stack modulaire de A à Z. API REST FastAPI pour la synchronisation d'emploi du temps et la persistance, front React Native avec mode hors-ligne. Pensé dès le départ pour l'évolutivité vers des fonctionnalités collaboratives.",
      en: "Modular full-stack architecture from scratch. FastAPI REST API for schedule sync and persistence, React Native front with offline mode. Designed from day one to scale toward collaborative features.",
    },
    result: {
      fr: "Application fonctionnelle avec parsing ICS robuste, mode hors-ligne opérationnel et architecture prête à accueillir de nouvelles fonctionnalités.",
      en: "Working app with robust ICS parsing, functional offline mode and an architecture ready for new features.",
    },
    proves: {
      fr: "Que je conçois des architectures full-stack propres et évolutives, pas juste du code qui marche une fois.",
      en: "That I design clean, scalable full-stack architectures, not just code that works once.",
    },
    stack: ["React Native", "FastAPI", "Python", "SQLite", "ICS / ADE"],
    statusTag: { fr: "Fonctionnel", en: "Working build" },
    links: [
      {
        label: { fr: "Site web", en: "Website" },
        href: "https://www.campus-app.app",
        kind: "primary",
      },
    ],
    images: [
      { src: "/projects/campus/dashboard.png", alt: { fr: "Tableau de bord Campus", en: "Campus dashboard" } },
      { src: "/projects/campus/calendar.png", alt: { fr: "Emploi du temps synchronisé", en: "Synced schedule" } },
      { src: "/projects/campus/tasks.png", alt: { fr: "Gestion des tâches", en: "Task management" } },
      { src: "/projects/campus/notes.png", alt: { fr: "Prise de notes", en: "Note taking" } },
    ],
    featured: true,
  },
  {
    id: "aicodementor",
    name: "AiCodeMentor",
    kind: {
      fr: "Full-stack · IA générative",
      en: "Full-stack · Generative AI",
    },
    period: { fr: "Septembre à décembre 2025", en: "Sep to Dec 2025" },
    tagline: {
      fr: "Générer et corriger des exercices de programmation avec un LLM local.",
      en: "Generating and grading programming exercises with a local LLM.",
    },
    problem: {
      fr: "Produire des exercices de code variés et les corriger à la main coûte cher en temps enseignant. AiCodeMentor génère automatiquement énoncés, code de référence et tests via un LLM exécuté en local, sans dépendre d'une API externe payante.",
      en: "Producing varied coding exercises and grading them by hand is expensive in teacher time. AiCodeMentor auto-generates prompts, reference code and tests via a locally-run LLM, without depending on a paid external API.",
    },
    role: {
      fr: "Application pédagogique full-stack en Java 25 / Spring Boot côté back et Angular côté front. Intégration d'un LLM local dans le pipeline de génération et architecture modulaire pensée pour ajouter de nouveaux types d'exercices.",
      en: "Full-stack teaching app with Java 25 / Spring Boot on the back and Angular on the front. Integrated a local LLM into the generation pipeline with a modular architecture designed to add new exercise types.",
    },
    result: {
      fr: "Chaîne complète fonctionnelle : de l'énoncé généré à l'exécution des tests, avec une architecture extensible.",
      en: "Complete working chain: from generated prompt to test execution, on an extensible architecture.",
    },
    proves: {
      fr: "Que je maîtrise l'écosystème Java entreprise (Spring Boot, Angular) et que je sais intégrer un LLM dans un vrai produit.",
      en: "That I'm fluent in the enterprise Java stack (Spring Boot, Angular) and can wire an LLM into a real product.",
    },
    stack: ["Java 25", "Spring Boot", "Angular", "LLM local", "JUnit"],
    statusTag: { fr: "Projet abouti", en: "Completed" },
    links: [],
    images: [],
  },
  {
    id: "dvf-ml",
    name: "Prédiction de valeurs foncières",
    kind: {
      fr: "Machine Learning · Data",
      en: "Machine Learning · Data",
    },
    period: { fr: "Mars 2026", en: "Mar 2026" },
    tagline: {
      fr: "Prédire le prix d'un appartement sur 240 000+ transactions réelles.",
      en: "Predicting apartment prices across 240,000+ real transactions.",
    },
    problem: {
      fr: "Estimer un prix immobilier fiable à partir de l'Open Data DVF, un dataset brut de 240k+ lignes, bruité et hétérogène. L'enjeu est autant dans le nettoyage et le feature engineering que dans le modèle.",
      en: "Estimating a reliable property price from the DVF Open Data, a raw, noisy, heterogeneous 240k+ row dataset. The challenge lies as much in cleaning and feature engineering as in the model itself.",
    },
    role: {
      fr: "Pipeline ML complet : nettoyage rigoureux, feature engineering avancé (encodage catégoriel, transformation logarithmique, analyse de saisonnalité), puis implémentation et comparaison de régressions linéaires et de réseaux de neurones.",
      en: "Full ML pipeline: rigorous cleaning, advanced feature engineering (categorical encoding, log transform, seasonality analysis), then building and comparing linear regressions against neural networks.",
    },
    result: {
      fr: "Modèles évalués et comparés sur R², MAE et RMSE avec Scikit-Learn. Décision argumentée par les métriques, pas par intuition.",
      en: "Models evaluated and compared on R², MAE and RMSE with Scikit-Learn. A model choice argued by metrics, not intuition.",
    },
    proves: {
      fr: "Que je maîtrise la chaîne Data complète, de la donnée sale à un modèle évalué proprement.",
      en: "That I own the full data chain, from dirty data to a properly evaluated model.",
    },
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    statusTag: { fr: "Projet abouti", en: "Completed" },
    links: [],
    images: [],
  },
];
