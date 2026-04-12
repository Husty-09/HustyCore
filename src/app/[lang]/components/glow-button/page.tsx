"use client";

import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { GlowButton as GlowButtonUI } from "@/components/ui/glow-button";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "destructive" | "default";
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    
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

GlowButton.displayName = "GlowButton";`;

export default function GlowButtonPage() {
  const { lang } = useParams() as { lang: string };
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-10">
      
      {/* Header Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.glowButton.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.glowButton.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.glowButton.description}
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex items-center justify-center gap-6 p-8 relative">
          <GlowButtonUI variant="primary">{dict.components.glowButton.btn1}</GlowButtonUI>
          <GlowButtonUI variant="secondary">{dict.components.glowButton.btn2}</GlowButtonUI>
          <GlowButtonUI variant="destructive">{dict.components.glowButton.btn3}</GlowButtonUI>
        </div>
      </div>

      {/* Code Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <p className="text-sm text-muted-foreground mb-2">{dict.common.copyInstructions}<code className="text-primary mr-1 bg-primary/10 px-1 rounded">components/ui/glow-button.tsx</code></p>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
