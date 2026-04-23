"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

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
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
            "after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference",
            !shouldReduceMotion && "after:animate-aurora"
          )}
          style={{
            "--white-gradient": "repeating-linear-gradient(100deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 3%, transparent 5%, transparent 12%, rgba(255,255,255,0.4) 16%)",
            "--aurora": `repeating-linear-gradient(100deg, hsl(var(--primary)) 10%, hsl(150 84% 39%) 15%, hsl(var(--primary)) 20%, hsl(170 84% 39%) 25%, hsl(var(--primary)) 30%)`
          } as React.CSSProperties}
        ></div>
      </div>
      {children}
    </div>
  );
};
