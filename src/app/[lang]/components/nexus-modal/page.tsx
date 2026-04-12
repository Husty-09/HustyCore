"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { NexusModal as NexusModalUI } from "@/components/ui/nexus-modal";
import { GlowButton } from "@/components/ui/glow-button";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface NexusModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function NexusModal({ isOpen, onClose, title, children }: NexusModalProps) {
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl pointer-events-auto relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {title && (
                <div className="px-6 pt-6 pb-4 border-b border-border/30">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
                </div>
              )}
              
              <div className="p-6 text-muted-foreground">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}`;

export default function NexusModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useParams() as { lang: string };
  const dict = getDictionary(lang);

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
