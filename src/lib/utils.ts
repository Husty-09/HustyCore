import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina condicionalmente classes Tailwind e previne conflitos 
 * de utilidade. É a espinha dorsal de todo e qualquer 
 * componente flexível em React que venhamos a criar.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
