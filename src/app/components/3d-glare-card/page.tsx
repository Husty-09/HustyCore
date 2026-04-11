import { GlareCard } from "@/components/ui/3d-glare-card";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const previewCode = `import { GlareCard } from "@/components/ui/3d-glare-card";
import { NeonBadge } from "@/components/ui/neon-badge";

export function GlareCardDemo() {
  return (
    <GlareCard className="max-w-sm mx-auto p-8">
      <div className="flex flex-col h-full items-start justify-between">
        <NeonBadge variant="primary" pulse={false}>Premium Asset</NeonBadge>
        
        <div className="flex flex-col gap-2 mt-auto text-left">
          <h3 className="text-2xl font-bold text-white">3D Glare Card</h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-left">
            Passe o mouse por cima dessa carta para ver a bruxaria acontecer. 
            Este componente altera a perspectiva X/Y ativamente.
          </p>
        </div>
      </div>
    </GlareCard>
  );
}`;

const sourceCode = `"use client";

import React, { useRef } from "react";
import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlareCardProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export const GlareCard = ({ className, children, ...props }: GlareCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculates position relative to center of the component
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseYSpring, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-15, 15]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={cn(
        "relative group/card w-full h-[24rem] rounded-2xl bg-background/60 backdrop-blur-md border border-border/40 overflow-hidden flex flex-col items-center justify-center isolate",
        className
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-500 -z-10"
        style={{
          background: useMotionTemplate\`
            radial-gradient(
              400px circle at calc(50% + \${mouseXSpring}px) calc(50% + \${mouseYSpring}px),
              hsl(var(--primary) / 0.15),
              transparent 40%
            )
          \`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 -z-20 pointer-events-none" />

      <div
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full p-6 flex flex-col"
      >
        {children}
      </div>
    </motion.div>
  );
};`;

export default function GlareCardPage() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">3D Glare Card</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          Um bloco card premium com rastreamento físico em tempo real do mouse. Ele calcula a perspectiva (3D rotate) e simula uma reflexão metálica (glare).
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Preview Interativo</h3>
        
        <div className="w-full flex items-center justify-center p-12 border border-border/40 rounded-2xl relative overflow-hidden" 
             style={{ perspective: "1000px" }}> {/* Perpectiva no container é fundamental pro 3D saltar aos olhos! */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-secondary/10 -z-10" />
          
          <GlareCard className="max-w-sm mx-auto shadow-2xl">
            <div className="flex flex-col h-full items-start justify-between">
              <span className="text-3xl">💎</span>
              
              <div className="flex flex-col gap-2 mt-auto text-left">
                <h3 className="text-2xl font-bold text-white tracking-tight">Efeito Cartão Magnético</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-left">
                  Passe o mouse por cima dessa carta para ver a bruxaria acontecer. 
                  A renderização desse componente processa o <code className="bg-primary/20 text-primary px-1 rounded">onMouseMove</code> para aplicar matrizes transform em CSS puras.
                </p>
              </div>
            </div>
          </GlareCard>
        </div>
      </div>

      {/* Usage Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Exemplo de Uso</h3>
        <p className="text-sm text-muted-foreground mb-2">Para habilitar a imersão de ponta a ponta sem clipar o eixo Z, o ideal é que a div pai ou container dessa carta tenha uma propriedade de <code className="bg-primary/10 text-primary px-1 rounded">perspective: 1000px</code> aplicada no estilo.</p>
        <CodeBlock code={previewCode} language="tsx" />
      </div>

      {/* Component Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Código Fonte</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Crie o componente <code className="bg-primary/10 text-primary px-1 rounded">components/ui/3d-glare-card.tsx</code>. Este componente consome pesadamente o framer-motion (<code className="bg-primary/10 text-primary px-1 rounded">useTransform</code>, <code className="bg-primary/10 text-primary px-1 rounded">useSpring</code>).
        </p>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
