import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { CodeBlock } from "@/components/ui/code-block";

const previewCode = `import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      <BentoItem
        title="Modern Interfaces"
        description="Construa aplicações de cair o queixo."
        className="md:col-span-2"
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />}
      />
      <BentoItem
        title="100% Type-Safe"
        description="Forte tipagem."
        className="md:col-span-1"
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-neutral-800" />}
      />
      <BentoItem
        title="Lightning Fast"
        description="Sem gargalos."
        className="md:col-span-1"
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-secondary/20 to-neutral-800" />}
      />
      <BentoItem
        title="Premium Quality"
        description="Atenção minuciosa aos detalhes."
        className="md:col-span-2"
        header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />}
      />
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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-background/40 dark:border-border/50 bg-white border border-transparent flex flex-col space-y-4 relative overflow-hidden backdrop-blur-md",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none -z-10 opacity-50" />
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 mt-2">
        {icon}
        <div className="font-bold text-foreground mb-2 mt-2">{title}</div>
        <div className="font-normal text-muted-foreground text-sm">{description}</div>
      </div>
    </div>
  );
};`;

export default function BentoGridPage() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Bento Grid</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          Um layout de grid assimétrico, excelente para montar Showcases Premium ou Dashboards organizados.
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Preview Interativo</h3>
        
        <div className="w-full flex items-center justify-center p-8 border border-border/40 rounded-2xl bg-grid-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-background/80 -z-10" />
          
          <BentoGrid className="max-w-4xl w-full mx-auto">
            <BentoItem
              title="Modern Interfaces"
              description="Construa aplicações de cair o queixo."
              className="md:col-span-2"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />}
            />
            <BentoItem
              title="100% Type-Safe"
              description="Forte tipagem."
              className="md:col-span-1"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-neutral-800" />}
            />
            <BentoItem
              title="Lightning Fast"
              description="Sem gargalos."
              className="md:col-span-1"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-secondary/20 to-neutral-800" />}
            />
            <BentoItem
              title="Premium Quality"
              description="Atenção minuciosa aos detalhes."
              className="md:col-span-2"
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />}
            />
          </BentoGrid>
        </div>
      </div>

      {/* Usage Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Exemplo de Uso</h3>
        <CodeBlock code={previewCode} language="tsx" />
      </div>

      {/* Component Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Código Fonte</h3>
        <p className="text-sm text-muted-foreground mb-2">Crie o arquivo <code className="bg-primary/10 text-primary px-1 rounded">components/ui/bento-grid.tsx</code> e cole as duas exportações.</p>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
