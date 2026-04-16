import { getDictionary } from "@/lib/dictionaries";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedGrid } from "@/components/ui/animated-grid";

export default async function ComponentsOverview({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-10 relative w-full h-full pb-20">
      
      {/* Background Matrix */}
      <div className="absolute inset-x-0 top-0 h-[600px] -z-10 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] opacity-50">
        <AnimatedGrid />
      </div>

      <div className="flex flex-col gap-4 items-start w-full max-w-3xl mt-8 md:mt-12">
        <NeonBadge variant="secondary" pulse={true}>{dict.components.overview.badge}</NeonBadge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {dict.components.overview.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mt-2">
          {dict.components.overview.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        
        <GlassCard className="p-8 flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
          <NeonBadge variant="primary" pulse={false} className="w-fit mb-2">{dict.components.overview.card1Badge}</NeonBadge>
          <h3 className="text-2xl font-bold">{dict.components.overview.card1Title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {dict.components.overview.card1Desc} <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-sm font-medium">components/ui</code>.
          </p>
        </GlassCard>

        <GlassCard className="p-8 flex flex-col gap-4 relative overflow-hidden group">
           <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-500" />
           <NeonBadge variant="secondary" pulse={false} className="w-fit mb-2">{dict.components.overview.card2Badge}</NeonBadge>
           <h3 className="text-2xl font-bold">{dict.components.overview.card2Title}</h3>
           <p className="text-muted-foreground leading-relaxed">
            {dict.components.overview.card2Desc}
           </p>
        </GlassCard>

      </div>

      {/* Como usar section */}
      <div className="mt-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold border-b border-border/40 pb-4">{dict.components.overview.guideTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
           <div className="bg-secondary/5 rounded-2xl p-6 border border-border/50">
             <div className="text-4xl mb-4">🗺️</div>
             <p className="text-sm text-muted-foreground">{dict.components.overview.guide1}</p>
           </div>
           <div className="bg-secondary/5 rounded-2xl p-6 border border-border/50">
             <div className="text-4xl mb-4">🕹️</div>
             <p className="text-sm text-muted-foreground">{dict.components.overview.guide2}</p>
           </div>
           <div className="bg-secondary/5 rounded-2xl p-6 border border-border/50">
             <div className="text-4xl mb-4">📋</div>
             <p className="text-sm text-muted-foreground">{dict.components.overview.guide3}</p>
           </div>
        </div>
      </div>

    </div>
  );
}
