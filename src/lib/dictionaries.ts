import type { Dictionary } from "@/dictionaries/en";
import { en } from "@/dictionaries/en";
import { pt } from "@/dictionaries/pt";

const dictionaries = {
  en,
  pt,
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = (locale: string): Dictionary => {
  if (locale in dictionaries) {
    return dictionaries[locale as Locale];
  }
  return dictionaries.en; // Fallback language
};
