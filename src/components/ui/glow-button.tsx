"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlowButtonProps extends HTMLMotionProps<"button"> {
  /** Modificador de cor que se baseia nas variáveis HSL globais (primary, secondary, etc) */
  variant?: "primary" | "secondary" | "destructive" | "default";
}

/**
 * GlowButton Component
 * Um botão premium com um sútil efeito de brilho e animação nativa de escala ao clique.
 */
export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    
    // Mapeamos a variante para utilizar classes semânticas do Tailwind
    const variantClasses = {
      primary: "bg-primary text-primary-foreground shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]",
      secondary: "bg-secondary text-secondary-foreground shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
      destructive: "bg-destructive text-destructive-foreground shadow-[0_0_10px_rgba(239,68,68,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
      default: "bg-muted text-muted-foreground hover:bg-muted/80",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

GlowButton.displayName = "GlowButton";
