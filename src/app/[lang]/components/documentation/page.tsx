"use client";

import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassCard } from "@/components/ui/glass-card";

export default function DocumentationPage() {
  const { lang } = useParams() as { lang: string };
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{dict.components.docs.title}</h1>
        <p className="text-xl text-muted-foreground w-full max-w-2xl">
          {dict.components.docs.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold border-b border-border/40 pb-2">{dict.components.docs.p1Title}</h3>
        <p className="text-muted-foreground mb-4">
          {dict.components.docs.p1Desc}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <GlassCard className="p-6">
                <NeonBadge variant="primary" className="mb-4">Responsividade</NeonBadge>
                <h4 className="font-semibold mb-2">{dict.components.docs.card1Title}</h4>
                <p className="text-sm text-muted-foreground">{dict.components.docs.card1Desc}</p>
            </GlassCard>
            <GlassCard className="p-6">
                <NeonBadge variant="secondary" className="mb-4">Motion Magic</NeonBadge>
                <h4 className="font-semibold mb-2">{dict.components.docs.card2Title}</h4>
                <p className="text-sm text-muted-foreground">{dict.components.docs.card2Desc}</p>
            </GlassCard>
        </div>
      </div>

    </div>
  );
}
