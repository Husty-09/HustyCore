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
          "relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-xl shadow-lg p-6 transition-colors hover:border-primary/30",
          className
        )}
        {...props}
      >
        {/* Efeito sútil de gradiente interno simulando a reflexão do vidro */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none -z-10" />
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
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex items-center justify-center p-8">
          <GlassCardUI className="max-w-md">
            <h4 className="text-lg font-bold mb-2">Translucidez Nativa</h4>
            <p className="text-muted-foreground text-sm">Qualquer elemento ou cor da página que passar por debaixo deste cartão será primorosamente desfocado usando a classe backdrop-blur-xl do Tailwind.</p>
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
