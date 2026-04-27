"use client";

import { useState } from "react";
import { NexusModal as NexusModalUI } from "@/components/ui/nexus-modal";
import { GlowButton } from "@/components/ui/glow-button";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";
import type { NexusModalDict } from "@/lib/dictionaries";

export function NexusModalClient({ dict, sourceCode }: { dict: NexusModalDict, sourceCode: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.nexusModal.title}</h1>
           <NeonBadge variant="secondary" pulse={false}>{dict.components.nexusModal.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.nexusModal.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[250px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex gap-4 items-center justify-center p-8">
          <GlowButton variant="secondary" onClick={() => setIsOpen(true)}>
             {dict.components.nexusModal.btnLoad}
          </GlowButton>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

      <NexusModalUI 
        title={dict.components.nexusModal.modalTitle}
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
         <div className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-xl mb-6 flex flex-col gap-2">
           <strong className="text-sm">{dict.components.nexusModal.modalBadgeReady}</strong>
           <span className="text-xs opacity-90">{dict.components.nexusModal.modalBadgeDesc}</span>
         </div>
         <p className="mb-2">{dict.components.nexusModal.modalP1} <strong>NexusModal</strong>.</p>
         <p className="opacity-80">{dict.components.nexusModal.modalP2}</p>
         <div className="mt-8 flex justify-end gap-3 border-t border-border/40 pt-4">
            <GlowButton variant="default" onClick={() => setIsOpen(false)} className="px-4 py-2">{dict.components.nexusModal.cancel}</GlowButton>
            <GlowButton onClick={() => setIsOpen(false)} className="px-5 py-2">{dict.components.nexusModal.save}</GlowButton>
         </div>
      </NexusModalUI>

    </div>
  );
}
