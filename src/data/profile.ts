import type { Localized } from "@/i18n/dictionary";

export const profile = {
  name: "Papa Aly Kane",
  email: "papaalykane1605@gmail.com",
  phone: "+33 7 45 32 33 31",
  phoneHref: "tel:+33745323331",
  linkedin: "https://www.linkedin.com/in/papaalykane1605/",
  linkedinHandle: "in/papaalykane1605",
  resumePath: "/CV_Papa-Aly-Kane.pdf",
  location: {
    fr: "Île-de-France, France",
    en: "Île-de-France, France",
  } as Localized,
  /** Discreet Senegal reference: Dakar coordinates used as a mono easter egg. */
  origin: {
    label: { fr: "Kaolack, Sénégal", en: "Kaolack, Senegal" } as Localized,
    coordinates: "14.69° N · 17.44° W",
  },
} as const;
