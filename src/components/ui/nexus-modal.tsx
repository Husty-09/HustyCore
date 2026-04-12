"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NexusModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/**
 * NexusModal Component
 * Usa AnimatePresence para renderizar e remover com suavidade um modal suspenso
 * com blur total de fundo. Acompanha botão Fechar (X) destrutivo e click-out para fechar.
 */
export function NexusModal({ isOpen, onClose, title, children }: NexusModalProps) {
  const shouldReduceMotion = useReducedMotion();

  // Evita o scroll do body quando aberto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modalWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 w-full h-full"
        >
          {/* Backdrop Escuro e focado */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container Vivo */}
          <motion.div
            key="modalContent"
            initial={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: shouldReduceMotion ? 1 : 0.95, opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            transition={shouldReduceMotion ? { duration: 0.15, ease: "easeOut" } : { type: "spring", damping: 25, stiffness: 300, delay: 0.05 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-glass-border bg-glass backdrop-blur-md shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Impede que cliques flutuantes aqui ativem o onClose subjacente
          >
            {/* Botão de Fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors duration-200"
              aria-label="Close modal"
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
            
            <div className="p-6 text-muted-foreground text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
