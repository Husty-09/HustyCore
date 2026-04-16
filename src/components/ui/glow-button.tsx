"use client";

import * as React from "react";
import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlowButtonProps extends HTMLMotionProps<"button"> {
  /** Color modifier based on global HSL tokens (primary, secondary, destructive, default). */
  variant?: "primary" | "secondary" | "destructive" | "default";
}

/**
 * GlowButton — premium button with a neon glow aura and spring scale on interaction.
 */
export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();

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
