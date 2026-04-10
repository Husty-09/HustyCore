import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";

export default function ComponentsOverview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Componentes</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          Navegue pelo nosso acervo de Blocos Atômicos e Interfaces Interativas construídas com TypeScript, Tailwind CSS e Framer Motion.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <GlassCard className="p-6">
           <NeonBadge variant="secondary" className="mb-4">Evolução UI</NeonBadge>
           <h3 className="text-lg font-semibold mb-2">Desempenho Estático</h3>
           <p className="text-sm text-muted-foreground">
              Todo o código dos componentes foi desenhado de forma isolada. Eles não são dependentes de um NPM Package; eles residem na sua pasta de componentes, permitindo que você os edite a baixo nível e altere como desejar.
           </p>
        </GlassCard>

        <GlassCard className="p-6">
           <NeonBadge variant="primary" className="mb-4">Plug & Play</NeonBadge>
           <h3 className="text-lg font-semibold mb-2">Ctrl+C e Ctrl+V</h3>
           <p className="text-sm text-muted-foreground">
              Use o menu ao lado para explorar os blocos. Visualize a resposta de interatividade deles vivos e depois basta usar a funcionalidade de "Copiar Código" engastada em cada página.
           </p>
        </GlassCard>
      </div>
    </div>
  );
}
