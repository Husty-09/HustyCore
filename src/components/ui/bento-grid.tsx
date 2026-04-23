"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export interface BentoItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid md:auto-rows-[minmax(18rem,auto)] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BentoGrid.displayName = "BentoGrid";

export const BentoItem = React.forwardRef<HTMLDivElement, BentoItemProps>(
  ({ className, title, description, header, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "row-span-1 rounded-3xl p-6 group/bento flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-out",
          "bg-glass backdrop-blur-md",
          "border border-glass-border",
          "hover:shadow-glass-hover",
          className
        )}
        {...props}
      >
        {/* Hover spotlight gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Header with zoom-on-hover effect */}
        <div className="flex-1 w-full h-full min-h-[8rem] mb-4 rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover/bento:scale-110">
            {header}
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-col gap-2 transition-transform duration-500 ease-out group-hover/bento:-translate-y-1 relative z-10">
          {icon && (
            <div className="text-foreground/80">
              {icon}
            </div>
          )}
          <div className="font-bold text-lg text-foreground tracking-tight">
            {title}
          </div>
          <div className="font-medium text-muted-foreground text-sm leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    );
  }
);
BentoItem.displayName = "BentoItem";
