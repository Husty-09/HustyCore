"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LayoutDict } from "@/lib/dictionaries";
import { MotionDropdown } from "@/components/ui/motion-dropdown";

export function Navbar({ dict, currentLang = "en" }: { dict?: LayoutDict, currentLang?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleSwitch = (locale: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = locale; // Replace the first path segment which is [lang]
    router.push(segments.join('/'));
  };

  const navLinks = [
    { name: dict?.nav?.docs || "Documentation", href: `/${currentLang}/components/documentation` },
    { name: dict?.nav?.install || "Installation", href: `/${currentLang}/components/installation` },
    { name: dict?.nav?.components || "Components", href: `/${currentLang}/components` },
    { name: dict?.nav?.showcase || "Showcase", href: `/${currentLang}/components/bento-grid` },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300">
            <span className="text-primary-foreground font-bold text-lg">H</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Husty<span className="text-muted-foreground font-medium">Core</span>
          </span>
        </Link>

        {/* Navigation Links with Framer Motion Hoover Pill */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover-pill"
                  className="absolute inset-0 bg-secondary/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side Actions */}
        <div className="flex items-center gap-4">
          <MotionDropdown 
            label={currentLang.toUpperCase()} 
            items={[
               { label: "EN (English)", value: "en", onClick: () => handleLocaleSwitch('en') },
               { label: "PT (Português)", value: "pt", onClick: () => handleLocaleSwitch('pt') }
            ]}
          />
          <Link
            href="https://github.com/Husty-09/HustyCore"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={`/${currentLang}/components`} className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-foreground text-background hover:bg-muted-foreground transition-colors shadow-sm">
            {dict?.nav?.getStarted || "Get Started"}
          </Link>
        </div>

      </div>
    </header>
  );
}
