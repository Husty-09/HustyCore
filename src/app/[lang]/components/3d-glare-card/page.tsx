import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
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

export default async function GlareCardPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/3d-glare-card.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{dict.components.glareCard.title}</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          {dict.components.glareCard.description}
        </p>
      </div>

      {/* Preview Section */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">{dict.components.glareCard.previewTitle}</h3>
        
        <div className="w-full flex items-center justify-center p-12 border border-border/40 rounded-2xl relative overflow-hidden" 
             style={{ perspective: "1000px" }}> {/* Perpectiva no container é fundamental pro 3D saltar aos olhos! */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-secondary/10 -z-10" />
          
          <GlareCard className="max-w-sm mx-auto shadow-2xl">
            <div className="flex flex-col h-full items-start justify-between">
              <span className="text-3xl">💎</span>
              
              <div className="flex flex-col gap-2 mt-auto text-left">
                <h3 className="text-2xl font-bold text-white tracking-tight">{dict.components.glareCard.cardTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-left">
                  {dict.components.glareCard.cardDesc}
                </p>
              </div>
            </div>
          </GlareCard>
        </div>
      </div>

      {/* Usage Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">{dict.components.infiniteMarquee.usageTitle}</h3>
        <p className="text-sm text-muted-foreground mb-2">{dict.components.glareCard.usageLabel} <code className="bg-primary/10 text-primary px-1 rounded">perspective: 1000px</code> {dict.components.glareCard.usageSpan}</p>
        <CodeBlock code={previewCode} language="tsx" />
      </div>

      {/* Component Code */}
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {dict.components.glareCard.sourceDesc} <code className="bg-primary/10 text-primary px-1 rounded">components/ui/3d-glare-card.tsx</code>.
        </p>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
