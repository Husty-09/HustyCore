import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { NeonBadge as NeonBadgeUI } from "@/components/ui/neon-badge";
import { CodeBlock } from "@/components/ui/code-block";

export default async function NeonBadgePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/neon-badge.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.neonBadge.title}</h1>
           <NeonBadgeUI variant="primary" pulse={false}>{dict.components.neonBadge.badge}</NeonBadgeUI>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.neonBadge.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex gap-4 items-center justify-center p-8">
          <NeonBadgeUI variant="primary">New Feature</NeonBadgeUI>
          <NeonBadgeUI variant="secondary">Pro Version</NeonBadgeUI>
          <NeonBadgeUI variant="primary" pulse={false}>Static Layout</NeonBadgeUI>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <p className="text-sm text-muted-foreground mb-2">{dict.common.copyInstructions}<code className="text-primary mr-1 bg-primary/10 px-1 rounded">components/ui/neon-badge.tsx</code></p>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
