import { GlassInput } from "@/components/ui/glass-input";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

/**
 * GlassInput Component
 * Input limpo com fundo opaco e um anel de brilho (ring glow) ativado apenas no foco.
 */
export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-3 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-xl border border-border/50 bg-background/40 backdrop-blur-md px-3 py-2 text-sm text-foreground shadow-sm transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-transparent focus-visible:shadow-[0_0_15px_rgba(16,185,129,0.2)] disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-10",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";`;

export default function GlassInputPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">Glass Input</h1>
           <NeonBadge variant="primary" pulse={false}>Interactive Form</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          Campos de entrada polidos que se comunicam nativamente através de anel brilhante no estado Focus.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Preview</h3>
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex items-center justify-center p-8">
          <div className="w-full max-w-sm flex flex-col gap-4">
             <GlassInput placeholder="Focus on me..." />
             <GlassInput disabled placeholder="Disabled field" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">O Código Fonte</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
