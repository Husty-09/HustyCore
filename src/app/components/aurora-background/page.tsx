import { AuroraBackground as AuroraBackgroundUI } from "@/components/ui/aurora-background";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

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
            "--aurora": \`repeating-linear-gradient(100deg,hsl(var(--primary))_10%,hsl(var(--secondary))_15%,hsl(var(--destructive))_20%,hsl(var(--primary))_25%,hsl(var(--secondary))_30%)\`
          } as React.CSSProperties}
        ></div>
      </div>
      {children}
    </div>
  );
};`;

export default function AuroraBackgroundPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">Aurora Background</h1>
           <NeonBadge variant="primary" pulse={false}>Eye Candy</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          Fundo responsivo animado suavemente com gradientes em CSS, perfeito para causar alto impacto visual em seções Hero.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Preview</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 overflow-hidden flex relative relative">
          <AuroraBackgroundUI className="h-full w-full absolute inset-0">
             <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center gap-4">
                <h2 className="text-3xl font-bold tracking-tight">Cores Livres</h2>
                <p className="text-muted-foreground max-w-sm">A aurora acima é gerada puramente via Tailwind e suas variáveis HSL globais (Primary, Secondary, Destructive), sem Canvas ou WebGL.</p>
             </div>
          </AuroraBackgroundUI>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Configuração Prévia (Importante)</h3>
        <p className="text-sm text-muted-foreground mb-4">Adicione as seguintes chaves dentro do seu <code className="bg-primary/10 text-primary px-1 rounded">tailwind.config.ts</code>:</p>
        <CodeBlock code={`keyframes: {
  aurora: {
    from: { backgroundPosition: "50% 50%, 50% 50%" },
    to: { backgroundPosition: "350% 50%, 350% 50%" },
  }
},
animation: {
  aurora: "aurora 60s linear infinite",
}`} language="tsx" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">O Código Fonte</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
