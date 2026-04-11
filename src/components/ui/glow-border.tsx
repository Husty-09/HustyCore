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
    "#10b981", // Emerald 500
    "#06b6d4", // Cyan 500
    "#3b82f6", // Blue 500
    "#14b8a6", // Teal 500
    "#10b981", // Loop back
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
