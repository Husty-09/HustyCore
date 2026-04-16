import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { AnimatedGrid as AnimatedGridUI } from "@/components/ui/animated-grid";
import { GlassCard } from "@/components/ui/glass-card";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function AnimatedGridPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/animated-grid.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.animatedGrid.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.animatedGrid.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.animatedGrid.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 bg-background overflow-hidden flex relative items-center justify-center p-8">
           
           {/* Grid Absoluta no container base */}
           <AnimatedGridUI className="absolute inset-0 z-0 h-full w-full [mask-image:linear-gradient(to_bottom,white,transparent)]" />
           
           {/* Conteudo Protegido por uma Glass Card */}
           <GlassCard className="relative z-10 max-w-lg">
             <h2 className="text-2xl font-bold mb-2">{dict.components.animatedGrid.previewTitle}</h2>
             <p className="text-muted-foreground text-sm">{dict.components.animatedGrid.previewDesc}</p>
           </GlassCard>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
