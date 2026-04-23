"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClassName?: string;
  glowColors?: string[];
  borderWidth?: number;
}

export const GlowBorder = React.forwardRef<HTMLDivElement, GlowBorderProps>(
  (
    {
      children,
      className,
      containerClassName,
      glowColors = [
        "#10b981",
        "#06b6d4",
        "#3b82f6",
        "#14b8a6",
        "#10b981",
      ],
      borderWidth = 2,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden rounded-2xl", containerClassName)}
        style={{ padding: borderWidth }}
        {...props}
      >
        {/* Spinning conic gradient layer */}
        <div
          className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
          style={{
            background: `conic-gradient(from 90deg at 50% 50%, ${glowColors.join(
              ","
            )})`,
          }}
        />
        {/* Inner clipping container */}
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
);
GlowBorder.displayName = "GlowBorder";
