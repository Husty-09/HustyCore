"use client";

import { motion } from "framer-motion";
import { GlassCard as GlassCardUI } from "@/components/ui/glass-card";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLMotionProps<"div"> {}

/**
 * GlassCard Component
 * Uma surface primária baseada em glassmorphism (translucidez e desfoque),
 * perfeita para apresentar elementos flutuantes sobre o fundo da aplicação.
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.4)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/5 dark:border-white/[0.03] bg-white/[0.01] dark:bg-white/[0.01] backdrop-blur-md shadow-lg p-6 transition-colors hover:bg-white/[0.04]",
          className
        )}
        {...props}
      >
        {/* Efeito sútil de gradiente interno simulando a reflexão do vidro */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none -z-10" />
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";`;

export default function GlassCardPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">Glass Card</h1>
           <NeonBadge variant="secondary" pulse={false}>Container</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          Superfícies de vidro translucidas com desfoque de fundo avançado.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Preview</h3>
        <div className="relative min-h-[400px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] flex items-center justify-center p-8 overflow-hidden">
          
          {/* Animated background element to demonstrate translucency */}
          <motion.div 
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 90, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-64 h-64 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full blur-3xl"
          />

          <GlassCardUI className="max-w-md z-10">
            <h4 className="text-lg font-bold mb-2">Translucidez Real</h4>
            <p className="text-muted-foreground text-sm">
              Note como o elemento vibrante se move por trás deste card. O efeito de 
              <span className="text-primary font-medium"> backdrop-blur-md</span> preserva as cores e formas 
              enquanto mantém o texto legível através do vidro ultra-fino.
            </p>
          </GlassCardUI>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">O Código Fonte</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
