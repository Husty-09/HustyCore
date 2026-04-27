import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { AuroraBackground as AuroraBackgroundUI } from "@/components/ui/aurora-background";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function AuroraBackgroundPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "aurora-background");
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/aurora-background.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.auroraBackground.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.auroraBackground.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.auroraBackground.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[400px] w-full max-w-4xl rounded-2xl border border-border/50 overflow-hidden flex relative">
          <AuroraBackgroundUI className="h-full w-full absolute inset-0">
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center gap-4">
                <h2 className="text-3xl font-bold tracking-tight">{dict.components.auroraBackground.previewTitle}</h2>
                <p className="text-muted-foreground max-w-sm">{dict.components.auroraBackground.previewDesc}</p>
              </div>
          </AuroraBackgroundUI>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.importantSetup}</h3>
        <p className="text-sm text-muted-foreground mb-4">{dict.components.auroraBackground.setupLabel} <code className="bg-primary/10 text-primary px-1 rounded">tailwind.config.ts</code>:</p>
        <CodeBlock code={`keyframes: {
  aurora: {
    from: { backgroundPosition: "50% 50%, 50% 50%" },
    to: { backgroundPosition: "350% 50%, 350% 50%" },
  }
},
animation: {
  aurora: "aurora 15s ease-in-out infinite alternate",
}`} language="tsx" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
