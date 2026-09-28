import type { Localized } from "@/i18n/dictionary";

export type SkillGroup = {
  id: string;
  /** Two-digit index used as a mono marker. */
  index: string;
  title: Localized;
  /** One-line framing of the category. */
  note: Localized;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack",
    index: "01",
    title: { fr: "Full-Stack & Mobile", en: "Full-Stack & Mobile" },
    note: {
      fr: "Du mobile natif au back applicatif.",
      en: "From native mobile to application back-end.",
    },
    skills: [
      "React Native",
      "Expo",
      "React",
      "TypeScript",
      "Angular",
      "Java / Spring Boot",
      "Django",
      "Flask",
      "FastAPI",
      "HTML / CSS",
    ],
  },
  {
    id: "data-ai",
    index: "02",
    title: { fr: "Data & IA", en: "Data & AI" },
    note: {
      fr: "De la donnée brute au modèle, jusqu'aux agents IA et au RAG, avec de l'open source dès que c'est possible.",
      en: "From raw data to models, all the way to AI agents and RAG, open source whenever possible.",
    },
    skills: [
      "Python",
      "SQL",
      "PostgreSQL / MySQL",
      "Scikit-Learn",
      "Machine Learning",
      "RAG : découpage, embeddings, recherche hybride",
      "Ollama · LangChain · Hugging Face",
      "LLM open source en local",
      "Claude · Codex · Qwen · DeepSeek",
    ],
  },
  {
    id: "cs-fundamentals",
    index: "03",
    title: { fr: "Algorithmique & fondamentaux", en: "Algorithms & fundamentals" },
    note: {
      fr: "Les bases qui font la différence sur les problèmes durs.",
      en: "The fundamentals that matter on hard problems.",
    },
    skills: [
      "Tri & graphes",
      "Optimisation",
      "Combinatoire",
      "Structures de données",
      "Complexité",
      "Programmation fonctionnelle",
    ],
  },
  {
    id: "network-concurrency",
    index: "04",
    title: { fr: "Réseaux & concurrence", en: "Networking & concurrency" },
    note: {
      fr: "Programmation réseau en Java, du socket brut au serveur multi-clients.",
      en: "Network programming in Java, from raw sockets to multi-client servers.",
    },
    skills: [
      "Sockets TCP / UDP",
      "I/O bloquantes & non bloquantes",
      "Java NIO / Selector",
      "Serveur multi-clients",
      "Multithreading",
      "Concurrence & synchronisation",
      "Protocoles applicatifs",
    ],
  },
  {
    id: "devops",
    index: "05",
    title: { fr: "Outils & DevOps", en: "Tooling & DevOps" },
    note: {
      fr: "Livrer proprement, pas juste coder.",
      en: "Shipping cleanly, not just coding.",
    },
    skills: [
      "Git",
      "Docker",
      "CI / CD",
      "GitHub / GitLab",
      "Linux / Shell",
      "JUnit",
    ],
  },
  {
    id: "method",
    index: "06",
    title: { fr: "Méthode", en: "How I work" },
    note: {
      fr: "Je choisis l'outil selon le problème : à la main quand il faut comprendre, avec l'IA quand il faut aller vite, et je relis tout.",
      en: "I pick the tool for the problem: by hand when I need to understand, with AI when I need speed, and I review everything.",
    },
    skills: [
      "Code écrit à la main",
      "Lecture et revue de code",
      "Orchestration d'agents IA",
      "Développement assisté par IA",
    ],
  },
];
