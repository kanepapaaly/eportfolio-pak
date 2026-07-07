import type { Localized } from "@/i18n/dictionary";

export type TimelineItem = {
  id: string;
  period: Localized;
  title: Localized;
  org: Localized;
  location: Localized;
  /** Bullet points, kept short and results-oriented. */
  points: Localized<string[]>;
  /** Optional highlighted courses / keywords (education only). */
  tags?: string[];
};

export const education: TimelineItem[] = [
  {
    id: "master",
    period: { fr: "2025-2027", en: "2025-2027" },
    title: { fr: "Master Informatique", en: "MSc Computer Science" },
    org: { fr: "Université Gustave Eiffel", en: "Université Gustave Eiffel" },
    location: { fr: "Champs-sur-Marne", en: "Champs-sur-Marne, France" },
    points: {
      fr: ["Spécialisation en cours, orientée données, IA et systèmes."],
      en: ["Ongoing specialization in data, AI and systems."],
    },
    tags: [
      "Machine Learning",
      "Concurrence",
      "Optimisation",
      "Bases de données",
      "Cryptographie",
      "Réseaux",
    ],
  },
  {
    id: "licence",
    period: { fr: "2022-2025", en: "2022-2025" },
    title: { fr: "Licence Informatique", en: "BSc Computer Science" },
    org: { fr: "Université Gustave Eiffel", en: "Université Gustave Eiffel" },
    location: { fr: "Champs-sur-Marne", en: "Champs-sur-Marne, France" },
    points: {
      fr: ["Fondations solides en algorithmique, systèmes et mathématiques."],
      en: ["Solid foundations in algorithms, systems and mathematics."],
    },
    tags: [
      "Algorithmique avancée",
      "Graphes",
      "Combinatoire",
      "Systèmes",
      "Programmation fonctionnelle",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    id: "tutor",
    period: { fr: "Sept. 2023 à juil. 2025", en: "Sep 2023 to Jul 2025" },
    title: { fr: "Tuteur en informatique", en: "Computer Science tutor" },
    org: { fr: "Université Gustave Eiffel", en: "Université Gustave Eiffel" },
    location: { fr: "Champs-sur-Marne", en: "Champs-sur-Marne, France" },
    points: {
      fr: [
        "Accompagnement d'étudiants sur la manipulation de données, la POO et les algorithmes avancés.",
        "Développement de compétences pédagogiques et de communication technique.",
      ],
      en: [
        "Coached students on data handling, OOP and advanced algorithms.",
        "Sharpened teaching skills and technical communication.",
      ],
    },
  },
  {
    id: "export-trading",
    period: { fr: "Juin à octobre 2020", en: "Jun to Oct 2020" },
    title: { fr: "Stagiaire développement / data", en: "Development / data intern" },
    org: { fr: "Export Trading Senegal", en: "Export Trading Senegal" },
    location: { fr: "Dakar, Sénégal", en: "Dakar, Senegal" },
    points: {
      fr: [
        "Conception d'une base de données PostgreSQL pour un usage interne.",
        "Scripts Python de traitement de données et intégration front / back (HTML/CSS, Java).",
      ],
      en: [
        "Designed a PostgreSQL database for internal use.",
        "Python data-processing scripts and front/back integration (HTML/CSS, Java).",
      ],
    },
  },
  {
    id: "carrefour",
    period: { fr: "2021-2022", en: "2021-2022" },
    title: { fr: "Assistant de caisse", en: "Checkout assistant" },
    org: { fr: "Carrefour", en: "Carrefour" },
    location: { fr: "Île-de-France", en: "Île-de-France, France" },
    points: {
      fr: ["Rigueur, relation client et fiabilité au quotidien."],
      en: ["Reliability, customer service and day-to-day rigor."],
    },
  },
  {
    id: "mcdonalds",
    period: { fr: "Fév. 2022 à août 2024", en: "Feb 2022 to Aug 2024" },
    title: { fr: "Équipier polyvalent", en: "Team member" },
    org: { fr: "McDonald's", en: "McDonald's" },
    location: { fr: "Val d'Europe", en: "Val d'Europe, France" },
    points: {
      fr: ["Gestion du stress, travail d'équipe et respect des délais en environnement exigeant."],
      en: ["Stress management, teamwork and hitting deadlines under pressure."],
    },
  },
];
