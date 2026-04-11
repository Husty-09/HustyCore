import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { GlowButton } from "@/components/ui/glow-button";
import { CodeBlock } from "@/components/ui/code-block";

const previewCode = `import { InfiniteMarquee } from "@/components/ui/infinite-marquee";

export function MarqueeDemo() {
  return (
    <InfiniteMarquee pauseOnHover className="[--duration:20s]">
      <div className="w-32 h-16 rounded flex items-center justify-center bg-white/5 border border-white/10 font-bold">Logo 1</div>
      <div className="w-32 h-16 rounded flex items-center justify-center bg-white/5 border border-white/10 font-bold">Logo 2</div>
      <div className="w-32 h-16 rounded flex items-center justify-center bg-white/5 border border-white/10 font-bold">Logo 3</div>
      <div className="w-32 h-16 rounded flex items-center justify-center bg-white/5 border border-white/10 font-bold">Logo 4</div>
      <div className="w-32 h-16 rounded flex items-center justify-center bg-white/5 border border-white/10 font-bold">Logo 5</div>
    </InfiniteMarquee>
  );
}`;

const sourceCode = `import { cn } from "@/lib/utils";
import React from "react";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function InfiniteMarquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        { "flex-row": !vertical, "flex-col": vertical },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}`;

export default function InfiniteMarqueePage() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Infinite Marquee</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          Uma faixa infindável gerada matematicamente que percorre conteudos da direita para a esquerda usando força limpa da engine do CSS.
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Preview Interativo</h3>
        
        <div className="w-full flex flex-col gap-8 p-12 border border-border/40 rounded-2xl bg-grid-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-background/90 -z-10" />
          
          <InfiniteMarquee pauseOnHover className="[--duration:25s]">
            {["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Shadcn", "Prisma"].map((tech) => (
              <div key={tech} className="w-40 h-20 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur border border-white/10 font-bold text-lg hover:border-primary/50 transition-colors">
                {tech}
              </div>
            ))}
          </InfiniteMarquee>

          <InfiniteMarquee pauseOnHover reverse className="[--duration:30s] mt-4">
            {["Acme Corp", "Vercel", "OpenAI", "Supabase", "Stripe", "PlanetScale"].map((partner) => (
              <GlowButton key={partner} variant="secondary" className="w-40 shrink-0">
                {partner}
              </GlowButton>
            ))}
          </InfiniteMarquee>
        </div>
      </div>

      {/* Usage Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Exemplo de Uso</h3>
        <p className="text-sm text-muted-foreground mb-2">Utilize arrays e mapeamento para preencher o conteúdo. O componente se encarrega de clonar para que o loop seja infinito e imperceptível.</p>
        <CodeBlock code={previewCode} language="tsx" />
      </div>

      {/* Component Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">Código Fonte</h3>
        <p className="text-sm text-muted-foreground mb-4">
          **Atenção:** Este componente exige que você declare os keyframes de <code>marquee</code> no seu <code>tailwind.config.ts</code>!
        </p>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
