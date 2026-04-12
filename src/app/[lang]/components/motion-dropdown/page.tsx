"use client";

import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { MotionDropdown as MotionDropdownUI } from "@/components/ui/motion-dropdown";
import { CodeBlock } from "@/components/ui/code-block";
import { NeonBadge } from "@/components/ui/neon-badge";

const sourceCode = `"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
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

export function MotionDropdown({ label, items, className }: MotionDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

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
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
}`;

export default function MotionDropdownPage() {
  const { lang } = useParams() as { lang: string };
  const dict = getDictionary(lang);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
           <h1 className="text-4xl font-bold tracking-tight">{dict.components.motionDropdown.title}</h1>
           <NeonBadge variant="secondary" pulse={false}>{dict.components.motionDropdown.badge}</NeonBadge>
        </div>
        <p className="text-xl text-muted-foreground w-full max-w-xl">
          {dict.components.motionDropdown.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.previewTitle}</h3>
        <div className="min-h-[300px] rounded-2xl border border-border/50 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex items-start justify-center p-8 pt-16">
          <MotionDropdownUI 
            label={dict.components.motionDropdown.label} 
            items={[
              { label: dict.components.motionDropdown.item1, value: "front" },
              { label: dict.components.motionDropdown.item2, value: "back" },
              { label: dict.components.motionDropdown.item3, value: "ui" }
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold border-b border-border/40 pb-2">{dict.common.sourceCodeTitle}</h3>
        <CodeBlock code={sourceCode} language="tsx" />
      </div>

    </div>
  );
}
