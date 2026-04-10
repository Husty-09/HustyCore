import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { TextReveal } from "@/components/ui/text-reveal";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { GlowBorder } from "@/components/ui/glow-border";

export default function ComponentsOverview() {
  return (
    <div className="flex flex-col gap-10 relative w-full h-full pb-20">
      
      {/* Background Matrix */}
      <div className="absolute inset-x-0 top-0 h-[600px] -z-10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] opacity-50">
        <AnimatedGrid />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col gap-4 mt-8 md:mt-12">
        <NeonBadge variant="primary" pulse={false} className="w-fit mb-2">Welcome to HustyCore</NeonBadge>
        <TextReveal text="Beautifully Crafted Components" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" />
        <p className="text-xl text-muted-foreground w-full max-w-3xl mt-4 leading-relaxed">
          Navegue pelo nosso acervo premium de Blocos Atômicos e Interfaces Interativas construídas com React, Tailwind CSS e Framer Motion. Totalmente agnóstico e sem banco de dados.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        
        {/* GlowBorder Feature */}
        <GlowBorder className="p-8 h-full flex flex-col" containerClassName="w-full">
            <NeonBadge variant="secondary" className="mb-6 w-fit" pulse={false}>Código Livre</NeonBadge>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Copy & Paste</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nós não amarramos você a pacotes NPM invasivos que engessam seu projeto. Cada componente foi desenhado de forma isolada. Você detém 100% do código e pode modificá-lo da forma que a sua regra de negócios exigir diretamente dentro da sua <code className="bg-primary/20 text-primary px-1.5 py-0.5 rounded text-sm font-mono">components/ui</code>.
            </p>
        </GlowBorder>

        {/* GlassCard Feature */}
        <GlassCard className="p-8 flex flex-col h-full border-primary/20 bg-background/60">
            <NeonBadge variant="primary" className="mb-6 w-fit" pulse={true}>Física Real</NeonBadge>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Framer Dynamics</h3>
            <p className="text-muted-foreground leading-relaxed">
              Diga adeus às transições lineares duras do CSS antigo. O HustyCore injeta animações elásticas baseadas em mola (Spring) impulsionadas pelo coração do Framer Motion, garantindo que as micro-interações dos seus botões respondam como objetos táteis reais.
            </p>
        </GlassCard>

      </div>

      {/* Como usar section */}
      <div className="mt-8 flex flex-col gap-6 p-8 rounded-2xl border border-border/40 bg-muted/20">
         <h3 className="text-2xl font-bold text-foreground">A Rota de Viagem</h3>
         <ul className="flex flex-col gap-4 text-muted-foreground">
           <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold shrink-0">1</span>
              <p className="mt-1">Explore o nosso menu lateral esquerdo para descobrir e escolher os componentes ideais pro seu ecossistema.</p>
           </li>
           <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold shrink-0">2</span>
              <p className="mt-1">Brinque livremente com eles na caixa principal de <b>Preview</b>.</p>
           </li>
           <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold shrink-0">3</span>
              <p className="mt-1">Gostou? Basta deslizar um pouco para baixo e copiar o <b>Código Fonte</b> na prancheta que disponibilizamos. Simples assim.</p>
           </li>
         </ul>
      </div>

    </div>
  );
}
