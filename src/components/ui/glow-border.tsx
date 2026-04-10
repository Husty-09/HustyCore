"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClassName?: string;
  glowColors?: string[];
  borderWidth?: number;
}

/**
 * Glow Border Container
 * Um wrapper poderoso que insere fita de borda giratória luminosa no contêiner interno.
 * Excelente para "Planos Premium" e Cards de Destaque.
 */
export function GlowBorder({
  children,
  className,
  containerClassName,
  glowColors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--destructive))",
    "hsl(var(--primary))",
  ],
  borderWidth = 2,
  ...props
}: GlowBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", containerClassName)}
      style={{ padding: borderWidth }}
      {...props}
    >
      {/* Elemento de laser rotativo */}
      <div
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, ${glowColors.join(
            ","
          )})`,
        }}
      />
      {/* Container Ocultante */}
      <div
        className={cn(
          "relative h-full w-full rounded-[calc(1rem-2px)] bg-background",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
