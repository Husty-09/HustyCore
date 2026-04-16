import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { motion } from "framer-motion";
import { GlassCard as GlassCardUI } from "@/components/ui/glass-card";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function GlassCardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/glass-card.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.glassCard.title}</h1>
           <NeonBadge variant="secondary" pulse={false}>{dict.components.glassCard.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.glassCard.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[300px] rounded-2xl border border-border/50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background flex items-center justify-center p-12">
           <GlassCardUI className="max-w-md shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">{dict.components.glassCard.previewP1}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {dict.components.glassCard.previewP2}
              </p>
              <div className="mt-6 flex gap-3">
                 <div className="h-2 w-12 rounded-full bg-primary/40" />
                 <div className="h-2 w-12 rounded-full bg-border" />
                 <div className="h-2 w-12 rounded-full bg-border" />
              </div>
           </GlassCardUI>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
