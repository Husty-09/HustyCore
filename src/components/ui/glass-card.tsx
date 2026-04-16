"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
}

/**
 * GlassCard — glassmorphism surface card with spring hover animation.
 * Ideal for floating elements over the app background.
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-glass-border bg-glass backdrop-blur-md shadow-glass p-6 transition-[color,background-color,border-color,box-shadow] duration-300 hover:bg-glass-hover hover:shadow-glass-hover",
          className
        )}
        {...props}
      >
        {/* Subtle gradient simulating internal glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-glass-hover to-transparent pointer-events-none -z-10" />
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
