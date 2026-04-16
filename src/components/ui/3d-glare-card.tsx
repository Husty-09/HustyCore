"use client";

import React, { useRef, useEffect } from "react";
import {
  HTMLMotionProps,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
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

  // Valores de tracking (Posição do mouse relativa ao centro)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Física de Spring para suavidade na transição 3D
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // CORREÇÃO Fase 3: dimensões reais do card via ResizeObserver
  // O range anterior [-300, 300] era fixo e causava rotação desproporcional em
  // cards menores (exagerada) e maiores (fraca)
  const cardWidth = useRef(0);
  const cardHeight = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        cardWidth.current = ref.current.offsetWidth;
        cardHeight.current = ref.current.offsetHeight;
      }
    };
    updateDimensions();
    const ro = new ResizeObserver(updateDimensions);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // CORREÇÃO: normaliza pelo tamanho real do elemento para rotação proporcional
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX * cardWidth.current);
    y.set(normalizedY * cardHeight.current);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Interpola para ±15° com base no tamanho real do card
  const rotateX = useTransform(mouseYSpring, [-cardHeight.current / 2, cardHeight.current / 2], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-cardWidth.current / 2, cardWidth.current / 2], [-15, 15]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
      }}
      className={cn(
        "relative group/card w-full h-[24rem] rounded-2xl bg-background/60 backdrop-blur-md border border-border/40 overflow-hidden flex flex-col items-center justify-center isolate",
        className
      )}
      {...props}
    >
      {/* Glare Mask (Brilho dinâmico) */}
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
      {/* Fallback Glass Dark Filter */}
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
