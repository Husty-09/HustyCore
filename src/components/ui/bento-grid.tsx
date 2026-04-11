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

/**
 * BentoGrid Wrapper
 * Organiza elementos num layout assimétrico nativo via display:grid com colunas auto-adaptáveis.
 */
export const BentoGrid = ({ className, children, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * BentoItem Element
 * Um bloco Glassmórfico otimizado para o grid.
 */
export const BentoItem = ({
  className,
  title,
  description,
  header,
  icon,
  ...props
}: BentoItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-background/40 dark:border-border/50 bg-white border border-transparent hover:border-primary/30 hover:bg-primary/5 flex flex-col space-y-4 relative overflow-hidden backdrop-blur-md",
        className
      )}
      {...props}
    >
      {/* Background Gradient Effect - Hidden by default, visible slightly behind content */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none -z-10 opacity-0 group-hover/bento:opacity-100 transition duration-300" />
      
      {header}
      
      <div className="group-hover/bento:translate-x-2 transition duration-200 mt-2">
        {icon}
        <div className="font-bold text-foreground mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-muted-foreground text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
