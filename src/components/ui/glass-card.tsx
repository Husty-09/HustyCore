"use client";

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

GlassCard.displayName = "GlassCard";
