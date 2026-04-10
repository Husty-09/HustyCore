import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";

export default function DocumentationPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          Entenda as regras de negócio virtuais, padrão de injeção de estilo e como gerenciar seus blocos.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">A Filosofia Zero-DB</h3>
        <p className="text-muted-foreground mb-4">
          O HustyCore é entregue como uma UI Library livre de vínculos de retaguarda. Não possuímos dependências com Prisma, Drizzle ou bancos Dockerizados para que você possa arrastar e soltar visualmente sem quebrar o ecossistema do seu app principal.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <GlassCard className="p-6">
                <NeonBadge variant="primary" className="mb-4">Responsividade</NeonBadge>
                <h4 className="font-semibold mb-2">Tailwind Purista</h4>
                <p className="text-sm text-muted-foreground">Todos os valores métricos de espaçamento (p-4, mt-2, flex) seguem o rigor do Tailwind nativo para que as telas colapsem perfeitamente em dispositivos móveis.</p>
            </GlassCard>
            <GlassCard className="p-6">
                <NeonBadge variant="secondary" className="mb-4">Motion Magic</NeonBadge>
                <h4 className="font-semibold mb-2">Framer Motion</h4>
                <p className="text-sm text-muted-foreground">Deixamos as transições de rota (CSS transitions) para animações brutas estáticas, mas todo o cálculo de interpolação elástica com física spring é ditado pelo Framer Motion (layoutId).</p>
            </GlassCard>
        </div>
      </div>

    </div>
  );
}
