import { getDictionary } from "@/lib/dictionaries";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";

export default async function DocumentationPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "docs");

  return (
    <div className="flex flex-col gap-12 pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
          {dict.components.docs.title}
        </h1>
        <p className="text-xl text-muted-foreground w-full max-w-3xl leading-relaxed">
          {dict.components.docs.description}
        </p>
      </div>

      {/* Philosophy Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-border/40 pb-2">
           <h3 className="text-2xl font-semibold tracking-tight">{dict.components.docs.p1Title}</h3>
           <NeonBadge variant="primary" pulse={false}>{dict.components.docs.badge1}</NeonBadge>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-4xl italic">
          &quot;{dict.components.docs.p1Desc}&quot;
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <GlassCard className="p-8 border-primary/20 bg-primary/5">
                <NeonBadge variant="primary" className="mb-4">{dict.components.docs.badge2}</NeonBadge>
                <h4 className="text-lg font-bold mb-3">{dict.components.docs.card1Title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{dict.components.docs.card1Desc}</p>
            </GlassCard>
            <GlassCard className="p-8 border-secondary/20 bg-secondary/5">
                <NeonBadge variant="secondary" className="mb-4">{dict.components.docs.badge3}</NeonBadge>
                <h4 className="text-lg font-bold mb-3">{dict.components.docs.card2Title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{dict.components.docs.card2Desc}</p>
            </GlassCard>
        </div>
      </section>

      {/* Technical Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <GlassCard className="p-6 flex flex-col gap-4">
            <h4 className="text-lg font-bold text-primary">{dict.components.docs.stylingTitle}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{dict.components.docs.stylingDesc}</p>
         </GlassCard>
         <GlassCard className="p-6 flex flex-col gap-4">
            <h4 className="text-lg font-bold text-secondary">{dict.components.docs.perfTitle}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{dict.components.docs.perfDesc}</p>
         </GlassCard>
         <GlassCard className="p-6 flex flex-col gap-4">
            <h4 className="text-lg font-bold text-destructive">{dict.components.docs.accessibilityTitle}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{dict.components.docs.accessibilityDesc}</p>
         </GlassCard>
      </div>

      {/* Design System / Tokens Section */}
      <section className="flex flex-col gap-6 bg-secondary/5 rounded-3xl p-8 border border-border/40">
        <div className="flex flex-col gap-2">
           <h3 className="text-2xl font-bold tracking-tight">{dict.components.docs.tokensTitle}</h3>
           <p className="text-muted-foreground text-sm">
             {dict.components.docs.tokensDesc}
           </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           {[
             { label: "--glass", value: "rgba(255, 255, 255, 0.01)", bg: "bg-white/5" },
             { label: "--glass-border", value: "rgba(255, 255, 255, 0.05)", bg: "border-white/20 border-2" },
             { label: "--primary", value: "hsl(142, 70%, 50%)", bg: "bg-primary" },
             { label: "--secondary", value: "hsl(246, 80%, 65%)", bg: "bg-secondary" },
           ].map((token) => (
             <div key={token.label} className="p-4 rounded-xl bg-background border border-border/50 flex flex-col gap-2">
                <div className={`h-12 w-full rounded-lg ${token.bg}`} />
                <span className="text-xs font-mono font-bold block">{token.label}</span>
                <span className="text-[10px] text-muted-foreground block truncate">{token.value}</span>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
