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

/** A single usage figure. Kept as a pre-formatted string: these are read, not computed. */
export type ProjectMetric = {
  value: string;
  label: Localized;
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
  /** Real usage figures. Omitted when the project has none to show. */
  metrics?: ProjectMetric[];
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
      fr: "500 téléchargements en quatre semaines, sans un euro de publicité : un post sur X et du bouche-à-oreille. La fiche App Store convertit à 23 % quand la moyenne du store tourne entre 3 et 5 %. Aucun bug remonté à ce jour, les correctifs sont partis avant les utilisateurs.",
      en: "500 downloads in four weeks with zero ad spend: one X post and word of mouth. The App Store page converts at 23% where the store average sits between 3 and 5%. No bug reported so far, fixes shipped ahead of users.",
    },
    proves: {
      fr: "Que je peux porter un produit du concept jusqu'à de vrais utilisateurs, avec des choix pédagogiques et techniques que je sais justifier.",
      en: "That I can carry a product from concept to real users, with pedagogical and technical choices I can defend.",
    },
    stack: ["React Native", "Expo", "FastAPI", "Supabase", "PostgreSQL", "ElevenLabs"],
    metrics: [
      { value: "500+", label: { fr: "téléchargements en 4 semaines", en: "downloads in 4 weeks" } },
      { value: "300", label: { fr: "utilisateurs actifs", en: "active users" } },
      { value: "23 %", label: { fr: "fiche App Store → installation", en: "App Store page → install" } },
    ],
    statusTag: { fr: "En production · App Store", en: "Live · App Store" },
    links: [
      {
        label: { fr: "Site web", en: "Website" },
        href: "https://www.flex-app.app",
        kind: "primary",
      },
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/app/flex-apprendre-langlais/id6785300394",
        kind: "external",
      },
    ],
    images: [
      { src: "/projects/flex/accueil.png", alt: { fr: "Accueil :flex avec série et XP de la semaine", en: ":flex home screen with streak and weekly XP" } },
      { src: "/projects/flex/challenge.png", alt: { fr: "Challenge à trous chronométré", en: "Timed fill-in-the-blank challenge" } },
      { src: "/projects/flex/resultat.png", alt: { fr: "Écran de résultat d'un challenge", en: "Challenge results screen" } },
      { src: "/projects/flex/culture.png", alt: { fr: "Module Culture Générale en lecture karaoké", en: "General Knowledge module in karaoke reading mode" } },
      { src: "/projects/flex/profil-nuit.png", alt: { fr: "Profil et statistiques en thème sombre", en: "Profile and stats in dark theme" } },
    ],
    featured: true,
  },
  {
    id: "campus",
    name: "Campus",
    kind: {
      fr: "App mobile · Productivité étudiante",
      en: "Mobile app · Student productivity",
    },
    period: { fr: "Depuis janvier 2026", en: "Since Jan 2026" },
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
      fr: "Parti d'un besoin perso, publié sur l'App Store (version 1.1.0) et adopté par 150 étudiants par simple bouche-à-oreille : parsing ICS robuste, mode hors-ligne opérationnel, architecture prête pour de nouvelles fonctionnalités.",
      en: "Started as a personal need, shipped on the App Store (version 1.1.0) and picked up by 150 students through word of mouth alone: robust ICS parsing, working offline mode, an architecture ready for new features.",
    },
    proves: {
      fr: "Que je conçois des architectures full-stack propres et évolutives, pas juste du code qui marche une fois.",
      en: "That I design clean, scalable full-stack architectures, not just code that works once.",
    },
    stack: ["React Native", "FastAPI", "Python", "SQLite", "ICS / ADE"],
    metrics: [
      { value: "150", label: { fr: "téléchargements", en: "downloads" } },
    ],
    statusTag: { fr: "En production · App Store", en: "Live · App Store" },
    links: [
      {
        label: { fr: "Site web", en: "Website" },
        href: "https://www.campus-app.app",
        kind: "primary",
      },
      {
        label: { fr: "App Store", en: "App Store" },
        href: "https://apps.apple.com/app/campus-agenda-etudiant/id6765494880",
        kind: "external",
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
    id: "acbarber",
    name: "AC Barber",
    kind: {
      fr: "Web · Prise de rendez-vous",
      en: "Web · Online booking",
    },
    period: { fr: "Depuis mars 2026", en: "Since Mar 2026" },
    tagline: {
      fr: "Un coiffeur à domicile qui remplit son planning sans décrocher son téléphone.",
      en: "A home-visit barber who fills his schedule without picking up the phone.",
    },
    problem: {
      fr: "Un coiffeur à domicile prenait tous ses rendez-vous par appels et messages : créneaux oubliés, doubles réservations, allers-retours permanents. AC Barber met le planning en ligne : le client réserve en quelques secondes, sans créer de compte, et le coiffeur garde la main sur ses disponibilités.",
      en: "A home-visit barber was booking everything by calls and messages: forgotten slots, double bookings, endless back and forth. AC Barber puts the schedule online: clients book in seconds without creating an account, and the barber keeps full control of his availability.",
    },
    role: {
      fr: "Produit livré seul, du schéma de base de données à la mise en production sur son propre domaine. Front React/TypeScript, API FastAPI, PostgreSQL Supabase, espace admin protégé par JWT pour ouvrir des créneaux ou bloquer une période. Emails transactionnels automatiques via Resend : confirmation, rappels, annulation, avec un lien unique qui permet de modifier son rendez-vous sans compte.",
      en: "Shipped solo, from database schema to production on its own domain. React/TypeScript front, FastAPI backend, Supabase PostgreSQL, JWT-protected admin area to open slots or block a period. Automatic transactional emails via Resend: confirmation, reminders, cancellation, with a unique link that lets clients change their booking without an account.",
    },
    result: {
      fr: "Plus de 150 rendez-vous pris en ligne en cinq mois, sur acbarber.fr, par un vrai professionnel et ses clients. Le téléphone n'est plus le point de passage obligé.",
      en: "More than 150 bookings taken online in five months at acbarber.fr, by a real professional and his clients. The phone is no longer the mandatory step.",
    },
    proves: {
      fr: "Que je sais livrer un service en production pour un client réel : hébergement, domaine, emails, sécurité de l'espace admin, et le support qui va avec.",
      en: "That I can ship a production service for a real client: hosting, domain, emails, admin security, and the support that comes with it.",
    },
    stack: ["React", "TypeScript", "Vite", "Tailwind", "FastAPI", "PostgreSQL / Supabase", "Resend"],
    metrics: [
      { value: "150+", label: { fr: "rendez-vous pris en ligne", en: "bookings taken online" } },
      { value: "5 mois", label: { fr: "en production sans interruption", en: "in production without downtime" } },
    ],
    statusTag: { fr: "En production", en: "In production" },
    links: [
      {
        label: { fr: "Voir le site", en: "Visit the site" },
        href: "https://www.acbarber.fr",
        kind: "primary",
      },
    ],
    images: [],
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
