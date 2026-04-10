"use client";

import { GlowBorder as GlowBorderUI } from "@/components/ui/glow-border";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerClassName?: string;
  glowColors?: string[];
  borderWidth?: number;
}

export function GlowBorder({
  children,
  className,
  containerClassName,
  glowColors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--destructive))",
    "hsl(var(--primary))",
  ],
  borderWidth = 2,
  ...props
}: GlowBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", containerClassName)}
      style={{ padding: borderWidth }}
      {...props}
    >
      <div
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
        style={{
          background: \`conic-gradient(from 90deg at 50% 50%, \${glowColors.join(",")})\`,
        }}
      />
      <div
        className={cn("relative h-full w-full rounded-[calc(1rem-2px)] bg-background", className)}
      >
        {children}
      </div>
    </div>
  );
}`;

export default function GlowBorderPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">Glow Border</h1>
           <NeonBadge variant="primary" pulse={false}>Eye Candy</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          Laser neon rotativo dinâmico injetado através da sobreposição de Conic Gradients absolutos.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">Preview</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden flex relative items-center justify-center p-8">
           
           <GlowBorderUI containerClassName="w-80 h-96 shadow-2xl" className="p-8 flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-2xl font-bold">Plano Pro</h2>
              <p className="text-sm text-muted-foreground">Tudo o que você precisa para alavancar seu negócio na Lua.</p>
              <h3 className="text-4xl font-extrabold mt-4 text-primary">R$ 99</h3>
           </GlowBorderUI>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">O Código Fonte</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
