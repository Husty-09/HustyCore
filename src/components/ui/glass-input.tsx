"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
}

/**
 * GlassInput Component
 * Input com efeito Glassmorphism (translúcido real) e anel de brilho no foco.
 */
export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type, icon, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && <label className="text-sm font-medium ml-1 text-muted-foreground">{label}</label>}
        <div className="relative flex items-center w-full">
        {icon && (
          <div className="absolute left-3 text-muted-foreground z-10">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            // 1. Estrutura base
            "flex h-11 w-full rounded-xl px-3 py-2 text-sm shadow-sm transition-all duration-300",
            
            // 2. O Segredo do Vidro (Background + Blur)
            // Aumentamos a opacidade do fundo para 20% no tema claro e 10% no escuro
            "bg-glass-input",
            // Aplicamos um desfoque maior para o fundo não brigar com o texto digitado
            "backdrop-blur-lg", 
            
            // 3. Bordas do Vidro (Dão o contorno de brilho)
            "border border-glass-input-border",
            
            // 4. Texto e Placeholders (Totalmente opacos)
            "text-foreground placeholder:text-foreground/60",
            
            // 5. Estados de Foco e Disabled (Mantidos do seu código original)
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-transparent focus-visible:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            
            // Ajuste de padding se tiver ícone
            icon && "pl-10",
            className
          )}
          ref={ref}
          {...props}
        />
        </div>
      </div>
    );
  }
);


GlassInput.displayName = "GlassInput";