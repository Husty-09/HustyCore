"use client";

import React, { useRef } from "react";
import {
  HTMLMotionProps,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlareCardProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

/**
 * GlareCard Component
 * Rastrea o mouse para inclinar o card via física de mola (Spring) em 3D,
 * e gera um gradiente responsivo que atua como luz "reflexiva".
 */
export const GlareCard = ({ className, children, ...props }: GlareCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // ── Pixel offsets para o gradiente de glare ─────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // ── Ângulos de rotação (em graus) ────────────────────────────────────────
  // FIX: Usar MotionValues diretamente para rotação evita o bug do useTransform
  // que captura dimensões = 0 no momento da renderização inicial (stale ref).
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);
  const rotateXSpring = useSpring(rotateXVal, { stiffness: 300, damping: 30 });
  const rotateYSpring = useSpring(rotateYVal, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    // Normaliza para -0.5…+0.5 relativo ao tamanho real do card
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    // Rotação: ±15° dependendo da posição normalizada
    rotateXVal.set(-ny * 15);
    rotateYVal.set(nx * 15);

    // Offset de pixel para o gradiente radial de glare
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    rotateXVal.set(0);
    rotateYVal.set(0);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: shouldReduceMotion ? 0 : rotateXSpring,
        rotateY: shouldReduceMotion ? 0 : rotateYSpring,
      }}
      className={cn(
        "relative group/card w-full h-[24rem] rounded-2xl bg-background/60 backdrop-blur-md border border-border/40 overflow-hidden flex flex-col items-center justify-center isolate",
        className
      )}
      {...props}
    >
      {/* Glare Mask: gradiente radial que segue o mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-500 -z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at calc(50% + ${mouseXSpring}px) calc(50% + ${mouseYSpring}px),
              hsl(var(--primary) / 0.15),
              transparent 40%
            )
          `,
        }}
      />
      {/* Filtro escuro de fundo para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 -z-20 pointer-events-none" />

      {/* Conteúdo com profundidade (pop-out effect) */}
      <div
        style={{ transform: shouldReduceMotion ? "translateZ(0px)" : "translateZ(50px)" }}
        className="w-full h-full p-6 flex flex-col"
      >
        {children}
      </div>
    </motion.div>
  );
};
