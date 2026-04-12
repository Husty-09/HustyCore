"use client";

import { useState } from "react";
import { GlowButton } from "@/components/ui/glow-button";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonBadge } from "@/components/ui/neon-badge";
import { GlassInput } from "@/components/ui/glass-input";
import { MotionDropdown } from "@/components/ui/motion-dropdown";
import { NexusModal } from "@/components/ui/nexus-modal";
import type { Dictionary } from "@/dictionaries/en";

export default function HomeClient({ dict }: { dict: Dictionary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-24 pt-32 overflow-hidden">
      
      {/* Background Grid Vibe */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10" />

      {/* Main Container */}
      <div className="z-10 text-center animate-fade-in w-full max-w-5xl">
        
        <NeonBadge variant="secondary" className="mb-6">
          {dict.home.badge}
        </NeonBadge>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
            {dict.home.titlePart1}
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {dict.home.titlePart2}
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-4 text-xl text-muted-foreground">
          {dict.home.description}
        </p>

        {/* Global Component Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Section 1: Glass Elements */}
          <GlassCard className="flex flex-col items-start gap-4 h-full">
            <NeonBadge variant="primary">{dict.home.card1.badge}</NeonBadge>
            <h3 className="text-xl font-bold">{dict.home.card1.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">
              {dict.home.card1.description}
            </p>
            <div className="flex flex-col gap-4 w-full mt-auto">
              {/* Glass Input Showcase */}
              <GlassInput placeholder={dict.home.card1.inputPlaceholder} type="email" />
              
              {/* Motion Dropdown Showcase */}
              <div className="flex items-center gap-2 w-full">
                <MotionDropdown 
                  label={dict.home.card1.dropdownLabel} 
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
            <NeonBadge variant="secondary" pulse={false}>{dict.home.card2.badge}</NeonBadge>
            <h3 className="text-xl font-bold">{dict.home.card2.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {dict.home.card2.description}
            </p>
            <div className="flex w-full mt-auto">
               <GlowButton 
                 variant="secondary" 
                 className="w-full" 
                 onClick={() => setIsModalOpen(true)}
               >
                 {dict.home.card2.buttonLabel}
               </GlowButton>
            </div>
          </GlassCard>

        </div>
      </div>
      
      {/* O componente da Modal em repouso - será ativado p/ isModalOpen */}
      <NexusModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={dict.home.modal.title}
      >
        <p className="mb-4">
          {dict.home.modal.p1}
        </p>
        <p className="text-sm border-t border-border/50 pt-4 mt-4">
          {dict.home.modal.p2}
        </p>
      </NexusModal>

    </main>
  );
}
