"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Tipos ────────────────────────────────────────────────
interface TextRevealProps {
  text: string;
  className?: string;
}

// ─── Componente Atômico ───────────────────────────────────
export const TextReveal = ({ text, className }: TextRevealProps) => {
  // CORREÇÃO Fase 1: `useReducedMotion` ausente no original
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  // CORREÇÃO Fase 3: stiffness rebaixado (100→150 + damping 12→20)
  // Spring mais suave e físico, sem o "bounce" excessivo do original
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { type: "spring", damping: 20, stiffness: 150 },
    },
    // FIX HYDRATION: y: 0 no estado `hidden` evita CLS no primeiro paint do servidor
    // O deslocamento visual (y: 20) só é aplicado quando JS está ativo
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        // CORREÇÃO: stagger desabilitado para usuários com prefers-reduced-motion
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.04 * i,
      },
    }),
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("flex flex-wrap gap-x-2", className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          // `word-${index}` é aceitável aqui pois a lista é determinística e estática
          key={`word-${index}`}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
// ─── Fim do Componente ────────────────────────────────────
