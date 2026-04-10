"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "filter blur-[10px] sm:blur-[25px] xl:blur-[50px] opacity-40 will-change-transform",
            "absolute -inset-[10%] opacity-50",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]",
            "after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference"
          )}
          style={{
            "--white-gradient": "repeating-linear-gradient(100deg,var(--transparent)_0%,var(--transparent)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--transparent)_16%)",
            "--aurora": `repeating-linear-gradient(100deg,hsl(var(--primary))_10%,hsl(var(--secondary))_15%,hsl(var(--destructive))_20%,hsl(var(--primary))_25%,hsl(var(--secondary))_30%)`
          } as React.CSSProperties}
        ></div>
      </div>
      {children}
    </div>
  );
};
