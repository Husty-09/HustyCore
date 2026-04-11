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
        "grid md:auto-rows-[minmax(18rem,auto)] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
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
 * Um bloco Glassmórfico Premium otimizado para o grid.
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
        "row-span-1 rounded-3xl p-6 group/bento flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-out",
        "bg-white/[0.01] dark:bg-black/[0.1] backdrop-blur-md",
        "border border-white/10 dark:border-white/[0.03]",
        "hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]",
        className
      )}
      {...props}
    >
      {/* Spotlight Effect - Subtle glow that follows the gradient logic */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header Container with Zoom Effect */}
      <div className="flex-1 w-full h-full min-h-[8rem] mb-4 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover/bento:scale-110">
          {header}
        </div>
      </div>
      
      {/* Content Section */}
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
};
