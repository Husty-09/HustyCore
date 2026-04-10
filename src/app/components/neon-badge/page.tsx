import { NeonBadge as NeonBadgeUI } from "@/components/ui/neon-badge";
import { CodeBlock } from "@/components/ui/code-block";

const sourceCode = `"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NeonBadgeProps extends HTMLMotionProps<"div"> {
  variant?: "primary" | "secondary";
  pulse?: boolean;
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

NeonBadge.displayName = "NeonBadge";`;

export default function NeonBadgePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">Neon Badge</h1>
           <NeonBadgeUI variant="primary" pulse={false}>Atomic Block</NeonBadgeUI>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          Módulos pequenos de rotulação que pulsam com animação limpa.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Preview</h3>
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex gap-4 items-center justify-center p-8">
          <NeonBadgeUI variant="primary">New Feature</NeonBadgeUI>
          <NeonBadgeUI variant="secondary">Pro Version</NeonBadgeUI>
          <NeonBadgeUI variant="primary" pulse={false}>Static Layout</NeonBadgeUI>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">O Código Fonte</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
