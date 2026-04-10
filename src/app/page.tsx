"use client";

import { useState } from "react";
import { GlowButton } from "@/components/ui/glow-button";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassInput } from "@/components/ui/glass-input";
import { MotionDropdown } from "@/components/ui/motion-dropdown";
import { NexusModal } from "@/components/ui/nexus-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-24 pt-32 overflow-hidden">
      
      {/* Background Grid Vibe */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10" />

      {/* Main Container */}
      <div className="z-10 text-center animate-fade-in w-full max-w-5xl">
        
        <NeonBadge variant="secondary" className="mb-6">
          V2.0 Forms & Modals Live
        </NeonBadge>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
            Build Fast.{" "}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Look Premium.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-4 text-xl text-muted-foreground">
          Explore o poder dos campos e telas flutuantes da nova biblioteca HustyCore.
        </p>

        {/* Global Component Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Section 1: Glass Elements */}
          <GlassCard className="flex flex-col items-start gap-4 h-full">
            <NeonBadge variant="primary">Glass Patterns</NeonBadge>
            <h3 className="text-xl font-bold">Forms & Text</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Basta clicar no campo abaixo para focar. Ele ativa a opacidade dinâmica nativa com bordas em glow state.
            </p>
            <div className="flex flex-col gap-4 w-full mt-auto">
              {/* Glass Input Showcase */}
              <GlassInput placeholder="Enter your best email..." type="email" />
              
              {/* Motion Dropdown Showcase */}
              <div className="flex items-center gap-2 w-full">
                <MotionDropdown 
                  label="Select Framework" 
                  items={[
                    { label: "Next.js", value: "next" },
                    { label: "React", value: "react" },
                    { label: "Svelte", value: "svelte" },
                  ]}
                  className="w-full"
                />
              </div>
            </div>
          </GlassCard>
          
          {/* Section 2: Modals & Motions */}
          <GlassCard className="flex flex-col items-start gap-4 h-full">
            <NeonBadge variant="secondary" pulse={false}>Interactive Frames</NeonBadge>
            <h3 className="text-xl font-bold">Modals & Popovers</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Nossas modais não apenas "aparecem" e fecham: elas sobem animadas com fundos borrados perfeitos, sem prejudicar a leitura.
            </p>
            <div className="flex w-full mt-auto">
               <GlowButton 
                 variant="secondary" 
                 className="w-full" 
                 onClick={() => setIsModalOpen(true)}
               >
                 Open Nexus Modal
               </GlowButton>
            </div>
          </GlassCard>

        </div>
      </div>
      
      {/* O componente da Modal em repouso - será ativado p/ isModalOpen */}
      <NexusModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Payment Successful ✅"
      >
        <p className="mb-4">
          Obrigado por preferir a sua interface em padrão superior. O componente modal possui animação no fechamento via <code className="text-primary bg-primary/10 px-1 rounded">AnimatePresence</code>.
        </p>
        <p className="text-sm border-t border-border/50 pt-4 mt-4">
          Tente clicar no fundo escuro ou no botão vermelho de (X) acima para fechar graciosamente.
        </p>
      </NexusModal>

    </main>
  );
}
