import { readFileSync } from "fs";
import { join } from "path";
import { getDictionary } from "@/lib/dictionaries";
import { MotionDropdown as MotionDropdownUI } from "@/components/ui/motion-dropdown";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

export default async function MotionDropdownPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "motion-dropdown");
  const sourceCode = readFileSync(join(process.cwd(), "src/components/ui/motion-dropdown.tsx"), "utf-8");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.motionDropdown.title}</h1>
           <NeonBadge variant="primary" pulse={false}>{dict.components.motionDropdown.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.motionDropdown.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[300px] rounded-2xl border border-border/50 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background flex items-center justify-center p-12 relative">
           
           <MotionDropdownUI label={dict.components.motionDropdown.label}>
              <div className="flex flex-col gap-1">
                 {["Option 1", "Option 2", "Option 3"].map(opt => (
                    <button key={opt} className="px-3 py-2 text-sm text-left rounded-lg hover:bg-primary/10 transition-colors">
                       {opt}
                    </button>
                 ))}
              </div>
           </MotionDropdownUI>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
