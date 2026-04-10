"use client";

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

GlassInput.displayName = "GlassInput";
