"use client";

import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";
import { motion } from "framer-motion";

const previewCode = `import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      <BentoItem
        title="Modern Interfaces"
        description="Construa aplicações de cair o queixo com desfoque nativo."
        className="md:col-span-2"
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary to-secondary opacity-20" />}
      />
      <BentoItem
        title="100% Type-Safe"
        description="Forte tipagem para escala."
        className="md:col-span-1"
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-20" />}
      />
      {/* ... */}
    </BentoGrid>
  );
}`;

const sourceCode = `import React from "react";
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
        "bg-white/[0.01] dark:bg-white/[0.01] backdrop-blur-md",
        "border border-white/10 dark:border-white/[0.03]",
        "hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex-1 w-full h-full min-h-[8rem] mb-4 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover/bento:scale-110">
          {header}
        </div>
      </div>
      
      <div className="flex flex-col gap-2 transition-transform duration-500 ease-out group-hover/bento:-translate-y-1 relative z-10">
        {icon && <div className="text-foreground/80">{icon}</div>}
        <div className="font-bold text-lg text-foreground tracking-tight">{title}</div>
        <div className="font-medium text-muted-foreground text-sm leading-relaxed">{description}</div>
      </div>
    </div>
  );
};`;

export default function BentoGridPage() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Bento Grid</h1>
          <NeonBadge variant="primary">Premium</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          Construa layouts complexos com estética Apple-like, transparência real e interatividade fluida.
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2 text-foreground/80">Preview Interativo</h3>
        
        <div className="w-full flex items-center justify-center p-6 md:p-12 border border-border/40 rounded-[2.5rem] bg-grid-pattern relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background -z-10" />
          
          <BentoGrid className="max-w-4xl w-full mx-auto relative z-10">
            <BentoItem
              title="Modern Interfaces"
              description="Sinta a profundidade com desfoque de fundo inteligente que se adapta ao conteúdo."
              className="md:col-span-2"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary to-secondary relative flex-col items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                    <div className="text-4xl">✨</div>
                </div>
              }
            />
            <BentoItem
              title="Lightning Fast"
              description="Desempenho otimizado para animações constantes a 60fps."
              className="md:col-span-1"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex-col items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="text-4xl">⚡</div>
                </div>
              }
            />
            <BentoItem
              title="Crystal Glass"
              description="O segredo está na opacidade de 1% e no contraste das bordas."
              className="md:col-span-1"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex-col items-center justify-center">
                    <div className="text-4xl">💎</div>
                </div>
              }
            />
            <BentoItem
              title="Global Scale"
              description="Pronto para internacionalização e dispositivos móveis."
              className="md:col-span-2"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex-col items-center justify-center">
                    <div className="text-4xl">🌍</div>
                </div>
              }
            />
          </BentoGrid>
        </div>
      </div>

      {/* Code Section */}
      <div className="grid grid-cols-1 gap-8 mt-8">
        <div className="flex flex-col gap-4">
           <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Código Fonte</h3>
           <CodeBlock code={sourceCode} language="tsx" />
        </div>
      </div>

    </div>
  );
}
