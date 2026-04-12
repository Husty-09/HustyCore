"use client";

import React, { useRef } from "react";
import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
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

  // Física de Spring (mola) para suavidade na transição 3D
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calcula posição relativa ao centro do elemento
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    // Retorna ao centro graciosamente
    x.set(0);
    y.set(0);
  }

  // Interpola o deslocamento linear do mouse para uma angulação máxima de ~15 graus
  // Assumimos que a tela não é maior que 600px para o card nesse uso ideal
  const rotateX = useTransform(mouseYSpring, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-15, 15]);

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

      {/* Conteúdo Renderizado com transform-z permitindo profundidade (pop-out effect) */}
      <div
        style={{ transform: shouldReduceMotion ? "translateZ(0px)" : "translateZ(50px)" }}
        className="w-full h-full p-6 flex flex-col"
      >
        {children}
      </div>
    </motion.div>
  );
};
