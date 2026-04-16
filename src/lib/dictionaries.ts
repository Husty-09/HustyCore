import type { Dictionary } from "@/dictionaries/en";


const dictionaries = {
  en: () => import("@/dictionaries/en").then((module) => module.en),
  pt: () => import("@/dictionaries/pt").then((module) => module.pt),
};

export type Locale = keyof typeof dictionaries;
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (locale in dictionaries) {
    return dictionaries[locale as Locale](); 
  }
  return dictionaries.en(); 
};