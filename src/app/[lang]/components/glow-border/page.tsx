import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { GlowBorder as GlowBorderUI } from "@/components/ui/glow-border";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function GlowBorderPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "glow-border");
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/glow-border.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.glowBorder.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.glowBorder.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.glowBorder.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden flex relative items-center justify-center p-8">
           
           <GlowBorderUI containerClassName="w-80 h-96 shadow-2xl" className="p-8 flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-2xl font-bold">{dict.components.glowBorder.previewTitle}</h2>
              <p className="text-sm text-muted-foreground">{dict.components.glowBorder.previewDesc}</p>
              <h3 className="text-4xl font-extrabold mt-4 text-primary">{dict.components.glowBorder.previewPrice}</h3>
           </GlowBorderUI>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
