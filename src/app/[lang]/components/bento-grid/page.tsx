import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function BentoGridPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "bento-grid");
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/bento-grid.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.bentoGrid.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.bentoGrid.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.bentoGrid.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="w-full max-w-5xl mx-auto py-10">
          <BentoGrid>
            <BentoItem className="md:col-span-2 bg-gradient-to-br from-primary/20 to-secondary/20" title={dict.components.bentoGrid.b1Title} description={dict.components.bentoGrid.b1Desc} />
            <BentoItem className="bg-muted/30" title={dict.components.bentoGrid.b2Title} description={dict.components.bentoGrid.b2Desc} />
            <BentoItem className="bg-muted/30" title={dict.components.bentoGrid.b3Title} description={dict.components.bentoGrid.b3Desc} />
            <BentoItem className="md:col-span-2 bg-primary/5" title={dict.components.bentoGrid.b4Title} description={dict.components.bentoGrid.b4Desc} />
          </BentoGrid>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
