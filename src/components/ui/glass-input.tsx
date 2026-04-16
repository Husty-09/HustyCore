"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
}

/**
 * GlassInput — translucent input with a glowing focus ring.
 * Pass an `id` prop alongside `label` to ensure proper accessibility binding.
 */
export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type, icon, label, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm font-medium ml-1 text-muted-foreground"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {icon && (
            <div className="absolute left-3 text-muted-foreground z-10">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-11 w-full rounded-xl px-3 py-2 text-sm shadow-sm transition-all duration-300",
              "bg-glass-input backdrop-blur-lg",
              "border border-glass-input-border",
              "text-foreground placeholder:text-foreground/60",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-transparent focus-visible:shadow-[0_0_15px_rgba(16,185,129,0.2)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
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