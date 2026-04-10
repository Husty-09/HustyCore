"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
        <>
          {/* Backdrop Escuro Focado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl pointer-events-auto relative"
            >
              {/* Botão de Fechar Vermeho Vibrante */}
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
              
              <div className="p-6 text-muted-foreground">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
