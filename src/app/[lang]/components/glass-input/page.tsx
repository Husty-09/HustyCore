import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { GlassInput } from "@/components/ui/glass-input";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function GlassInputPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "glass-input");
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/glass-input.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.glassInput.title}</h1>
           <NeonBadge variant="secondary" pulse={false}>{dict.components.glassInput.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.glassInput.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex flex-col gap-6 items-center justify-center p-12">
          <div className="w-full max-w-sm flex flex-col gap-4">
            <GlassInput label={dict.components.glassInput.preview1} placeholder="johndoe@example.com" />
            <GlassInput label={dict.components.glassInput.preview2} type="password" placeholder="••••••••" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
