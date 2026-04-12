"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DropdownItem {
  label: string;
  value: string;
  onClick?: () => void;
}

export interface MotionDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

/**
 * MotionDropdown Component
 * Dropdown elegante que desliza via spring physic, servindo para inputs ou seleções curtas.
 */
export function MotionDropdown({ label, items, className }: MotionDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className={cn("relative inline-block text-left w-full sm:w-auto", className)} ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-full sm:w-48 px-4 py-2.5 rounded-xl border border-border/50 bg-background/40 backdrop-blur-md shadow-sm text-sm font-medium hover:bg-muted/30 transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {label}
        <svg 
          className={cn("ml-2 h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10, scale: shouldReduceMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10, scale: shouldReduceMotion ? 1 : 0.95 }}
            transition={shouldReduceMotion ? { duration: 0.15, ease: "easeOut" } : { type: "spring", stiffness: 400, damping: 30 }}
            className="absolute z-50 w-full min-w-48 mt-2 origin-top-left rounded-xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-lg ring-1 ring-black/5"
          >
            <div className="py-1 p-1">
              {items.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                  className="w-full text-left flex items-center px-3 py-2 text-sm text-muted-foreground hover:bg-secondary/15 hover:text-secondary-foreground rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
