"use client";

import * as React from "react";
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
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
    const shouldReduceMotion = useReducedMotion();

    // CORREÇÃO Zero-DB: usa `hsl(var(--token))` para respeitar qualquer tema customizado
    // rgba hardcoded anteriores quebravam temas onde --primary não era verde (#10B981)
    const variantClasses = {
      primary:
        "bg-primary text-primary-foreground shadow-[0_0_10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]",
      secondary:
        "bg-secondary text-secondary-foreground shadow-[0_0_10px_hsl(var(--secondary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--secondary)/0.6)]",
      destructive:
        "bg-destructive text-destructive-foreground shadow-[0_0_10px_hsl(var(--destructive)/0.3)] hover:shadow-[0_0_25px_hsl(var(--destructive)/0.6)]",
      default: "bg-muted text-muted-foreground hover:bg-muted/80",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold",
          "transition-[box-shadow,background-color,transform] duration-300",
          // focus-visible: apenas para navegação por teclado (não aparece no clique com mouse)
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
