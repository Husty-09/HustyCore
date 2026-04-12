"use client";

import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { CodeBlock } from "@/components/ui/code-block";

const installCode = `npm install framer-motion tailwind-merge clsx --legacy-peer-deps
npm install -D tailwindcss postcss autoprefixer`;

const utilCode = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

export default function InstallationPage() {
  const { lang } = useParams() as { lang: string };
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
         <h1 className="text-4xl font-bold tracking-tight">{dict.components.install.title}</h1>
         <p className="text-xl text-muted-foreground w-full max-w-xl">
           {dict.components.install.description}
         </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.components.install.step1Title}</h3>
        <p className="text-sm text-muted-foreground">{dict.components.install.step1Desc}</p>
        <CodeBlock code={installCode} language="bash" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.components.install.step2Title}</h3>
        <p className="text-sm text-muted-foreground">{dict.components.install.step2Desc}</p>
        <CodeBlock code={utilCode} language="tsx" />
      </div>

    </div>
  );
}
