import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { CodeBlock } from "@/components/ui/code-block";

const installCode = `npm install framer-motion tailwind-merge clsx
npm install -D tailwindcss postcss autoprefixer`;

const utilCode = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

export default function InstallationPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
         <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
         <p className="text-xl text-muted-foreground w-full max-w-xl">
           Como injetar o poder do HustyCore diretamente no seu projeto Next.js + Tailwind.
         </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">1. Instale as Dependências</h3>
        <p className="text-sm text-muted-foreground">O HustyCore é extremamente leve, dependendo primariamente do Framer Motion para fluidez e tailwind-merge para compatibilidade de classes.</p>
        <CodeBlock code={installCode} language="bash" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">2. Crie o Utilitário de Estilo</h3>
        <p className="text-sm text-muted-foreground">Crie um arquivo em <code className="bg-primary/10 text-primary px-1 rounded">src/lib/utils.ts</code> e adicione a função <code className="bg-primary/10 text-primary px-1 rounded">cn()</code>.</p>
        <CodeBlock code={utilCode} language="tsx" />
      </div>

    </div>
  );
}
