import { getDictionary } from "@/lib/dictionaries";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";

const installCode = `npm install framer-motion tailwind-merge clsx --legacy-peer-deps`;
const devToolsCode = `npm install -D standard-version @commitlint/cli @commitlint/config-conventional husky`;

const utilCode = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

export default async function InstallationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-12 pb-20">
      
      {/* Header */}
      <div className="flex flex-col gap-3">
         <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
           {dict.components.install.title}
         </h1>
         <p className="text-xl text-muted-foreground w-full max-w-2xl leading-relaxed">
           {dict.components.install.description}
         </p>
      </div>

      {/* Step 1: Core */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-border/40 pb-2">
           <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
           <h3 className="text-xl font-semibold tracking-tight">{dict.components.install.step1Title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{dict.components.install.step1Desc}</p>
        <CodeBlock code={installCode} language="bash" />
      </section>

      {/* Step 2: Automation */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-border/40 pb-2">
           <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">2</span>
           <h3 className="text-xl font-semibold tracking-tight">Automation & SemVer</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          To maintain high quality, we recommend setting up **Commitlint** and **Standard Version** to automate your deployment pipeline.
        </p>
        <CodeBlock code={devToolsCode} language="bash" />
      </section>

      {/* Step 3: Global Utils */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3 border-b border-border/40 pb-2">
           <span className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground font-bold text-sm">3</span>
           <h3 className="text-xl font-semibold tracking-tight">{dict.components.install.step2Title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{dict.components.install.step2Desc}</p>
        <CodeBlock code={utilCode} language="tsx" />
      </section>

      {/* Warning / Tips */}
      <GlassCard className="p-8 border-primary/30 bg-primary/5 flex gap-6 items-start">
         <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-2xl">💡</span>
         </div>
         <div className="flex flex-col gap-2">
            <h4 className="font-bold text-lg">Pro Tip: Peer Dependencies</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you encounter version conflicts with React 19 (which is currently in RC), use the <code className="bg-primary/20 text-primary px-1 rounded">--legacy-peer-deps</code> flag during installation to ensure compatibility with Framer Motion.
            </p>
         </div>
      </GlassCard>

    </div>
  );
}
