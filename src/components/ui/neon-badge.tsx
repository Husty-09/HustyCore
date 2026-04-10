"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NeonBadgeProps extends HTMLMotionProps<"div"> {
  variant?: "primary" | "secondary";
  pulse?: boolean;
  children?: React.ReactNode;
}

/**
 * NeonBadge Component
 * Badges estilizadas para destacar features, novidades ou tags com um sútil neon glow.
 */
export const NeonBadge = React.forwardRef<HTMLDivElement, NeonBadgeProps>(
  ({ className, variant = "primary", pulse = true, children, ...props }, ref) => {
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full border",
          variant === "primary" 
             ? "bg-primary/10 text-primary border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.4)]" 
             : "bg-secondary/10 text-secondary border-secondary/20 shadow-[0_0_15px_hsl(var(--secondary)/0.4)]",
          (pulse && variant === "primary") && "animate-glow",
          className
        )}
        {...props}
      >
        {pulse && (
          <span 
            className={cn(
              "flex h-1.5 w-1.5 rounded-full mr-2",
              variant === "secondary" && "animate-pulse",
              variant === "primary" ? "bg-primary shadow-[0_0_8px_hsl(var(--primary))]" : "bg-secondary shadow-[0_0_8px_hsl(var(--secondary))]"
            )}
          />
        )}
        {children}
      </motion.div>
    );
  }
);

NeonBadge.displayName = "NeonBadge";
