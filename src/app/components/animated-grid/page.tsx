import { AnimatedGrid as AnimatedGridUI } from "@/components/ui/animated-grid";
import { GlassCard } from "@/components/ui/glass-card";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import { cn } from "@/lib/utils";
import { useId, useEffect, useState } from "react";

export interface AnimatedGridProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  numSquares?: number;
}

export function AnimatedGrid({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 200,
  className,
  ...props
}: AnimatedGridProps) {
  const id = useId();
  const [squares, setSquares] = useState<Array<[number, number, number, number]>>([]);

  useEffect(() => {
    const generated = Array.from({ length: numSquares }).map(() => [
      Math.floor(Math.random() * 100) * width + 1,
      Math.floor(Math.random() * 100) * height + 1,
      Math.random() * 10,
      Math.random() * 10 + 5,
    ] as [number, number, number, number]);
    
    setSquares(generated);
  }, [numSquares, width, height]);

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-primary/10 stroke-border/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={\`M.5 \${height}V.5H\${width}\`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={\`url(#\${id})\`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(([sqX, sqY, delay, duration], i) => (
          <rect
            strokeWidth="0"
            key={\`\${i}-\${id}\`}
            width={width - 1}
            height={height - 1}
            x={sqX}
            y={sqY}
            className="animate-pulse"
            style={{ animationDelay: \`\${delay}s\`, animationDuration: \`\${duration}s\` }}
          />
        ))}
      </svg>
    </svg>
  );
}`;

export default function AnimatedGridPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">Animated Grid</h1>
           <NeonBadge variant="primary" pulse={false}>Eye Candy</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          Malha matemática animada em tempo real com blocos aleatórios apagáveis via SVG.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Preview</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 bg-background overflow-hidden flex relative items-center justify-center p-8">
           
           {/* Gird Absoluta no container base */}
           <AnimatedGridUI className="absolute inset-0 z-0 h-full w-full [mask-image:linear-gradient(to_bottom,white,transparent)]" />
           
           {/* Conteudo Protegido por uma Glass Card */}
           <GlassCard className="relative z-10 max-w-lg">
             <h2 className="text-2xl font-bold mb-2">Engenharia Leve</h2>
             <p className="text-muted-foreground text-sm">Esta malha não usa bibliotecas pesadas de 3D. É calculada de forma pura no navegador convertendo arrays diretamente em propriedades de path do SVG. Um Grid leve e incisivo.</p>
           </GlassCard>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">O Código Fonte</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
