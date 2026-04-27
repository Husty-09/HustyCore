import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { TextReveal as TextRevealUI } from "@/components/ui/text-reveal";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function TextRevealPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "text-reveal");
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/text-reveal.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.textReveal.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.textReveal.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.textReveal.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="flex flex-col items-center justify-center gap-8 w-full">
           <div className="w-full text-center py-10 bg-secondary/5 rounded-2xl border border-border/40">
              <h2 className="text-2xl font-bold">{dict.components.textReveal.previewTitle}</h2>
              <p className="text-muted-foreground">{dict.components.textReveal.previewDesc}</p>
              <div className="mt-4 animate-bounce text-primary">↓ Scroll Down ↓</div>
           </div>
           
           <TextRevealUI text="HustyCore transforms your entire visual environment Delivering deep engagement that magnetizes clients and converts views into premium loyalty. This is the new standard of interface engineering." />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
