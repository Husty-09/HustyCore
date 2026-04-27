import type { LayoutDict } from "@/dictionaries/en/layout";
import type { HomeDict } from "@/dictionaries/en/home";
import type { ComponentsLayoutDict } from "@/dictionaries/en/components-layout";
import type { OverviewDict } from "@/dictionaries/en/overview";
import type { DocsDict } from "@/dictionaries/en/docs";
import type { InstallDict } from "@/dictionaries/en/install";
import type { AuroraBackgroundDict } from "@/dictionaries/en/aurora-background";
import type { AnimatedGridDict } from "@/dictionaries/en/animated-grid";
import type { GlowBorderDict } from "@/dictionaries/en/glow-border";
import type { TextRevealDict } from "@/dictionaries/en/text-reveal";
import type { BentoGridDict } from "@/dictionaries/en/bento-grid";
import type { InfiniteMarqueeDict } from "@/dictionaries/en/infinite-marquee";
import type { GlareCardDict } from "@/dictionaries/en/glare-card";
import type { GlassCardDict } from "@/dictionaries/en/glass-card";
import type { NeonBadgeDict } from "@/dictionaries/en/neon-badge";
import type { GlowButtonDict } from "@/dictionaries/en/glow-button";
import type { GlassInputDict } from "@/dictionaries/en/glass-input";
import type { MotionDropdownDict } from "@/dictionaries/en/motion-dropdown";
import type { NexusModalDict } from "@/dictionaries/en/nexus-modal";

export type { LayoutDict } from "@/dictionaries/en/layout";
export type { HomeDict } from "@/dictionaries/en/home";
export type { ComponentsLayoutDict } from "@/dictionaries/en/components-layout";
export type { OverviewDict } from "@/dictionaries/en/overview";
export type { DocsDict } from "@/dictionaries/en/docs";
export type { InstallDict } from "@/dictionaries/en/install";
export type { AuroraBackgroundDict } from "@/dictionaries/en/aurora-background";
export type { AnimatedGridDict } from "@/dictionaries/en/animated-grid";
export type { GlowBorderDict } from "@/dictionaries/en/glow-border";
export type { TextRevealDict } from "@/dictionaries/en/text-reveal";
export type { BentoGridDict } from "@/dictionaries/en/bento-grid";
export type { InfiniteMarqueeDict } from "@/dictionaries/en/infinite-marquee";
export type { GlareCardDict } from "@/dictionaries/en/glare-card";
export type { GlassCardDict } from "@/dictionaries/en/glass-card";
export type { NeonBadgeDict } from "@/dictionaries/en/neon-badge";
export type { GlowButtonDict } from "@/dictionaries/en/glow-button";
export type { GlassInputDict } from "@/dictionaries/en/glass-input";
export type { MotionDropdownDict } from "@/dictionaries/en/motion-dropdown";
export type { NexusModalDict } from "@/dictionaries/en/nexus-modal";

export type NamespaceMap = {
  "layout": LayoutDict;
  "home": HomeDict;
  "components-layout": ComponentsLayoutDict;
  "overview": OverviewDict;
  "docs": DocsDict;
  "install": InstallDict;
  "aurora-background": AuroraBackgroundDict;
  "animated-grid": AnimatedGridDict;
  "glow-border": GlowBorderDict;
  "text-reveal": TextRevealDict;
  "bento-grid": BentoGridDict;
  "infinite-marquee": InfiniteMarqueeDict;
  "glare-card": GlareCardDict;
  "glass-card": GlassCardDict;
  "neon-badge": NeonBadgeDict;
  "glow-button": GlowButtonDict;
  "glass-input": GlassInputDict;
  "motion-dropdown": MotionDropdownDict;
  "nexus-modal": NexusModalDict;
};

export type Namespace = keyof NamespaceMap;
export type Locale = "en" | "pt";

type Loaders = { [N in Namespace]: () => Promise<NamespaceMap[N]> };

const enLoaders: Loaders = {
  "layout": () => import("@/dictionaries/en/layout").then((m) => m.enLayout),
  "home": () => import("@/dictionaries/en/home").then((m) => m.enHome),
  "components-layout": () => import("@/dictionaries/en/components-layout").then((m) => m.enComponentsLayout),
  "overview": () => import("@/dictionaries/en/overview").then((m) => m.enOverview),
  "docs": () => import("@/dictionaries/en/docs").then((m) => m.enDocs),
  "install": () => import("@/dictionaries/en/install").then((m) => m.enInstall),
  "aurora-background": () => import("@/dictionaries/en/aurora-background").then((m) => m.enAuroraBackground),
  "animated-grid": () => import("@/dictionaries/en/animated-grid").then((m) => m.enAnimatedGrid),
  "glow-border": () => import("@/dictionaries/en/glow-border").then((m) => m.enGlowBorder),
  "text-reveal": () => import("@/dictionaries/en/text-reveal").then((m) => m.enTextReveal),
  "bento-grid": () => import("@/dictionaries/en/bento-grid").then((m) => m.enBentoGrid),
  "infinite-marquee": () => import("@/dictionaries/en/infinite-marquee").then((m) => m.enInfiniteMarquee),
  "glare-card": () => import("@/dictionaries/en/glare-card").then((m) => m.enGlareCard),
  "glass-card": () => import("@/dictionaries/en/glass-card").then((m) => m.enGlassCard),
  "neon-badge": () => import("@/dictionaries/en/neon-badge").then((m) => m.enNeonBadge),
  "glow-button": () => import("@/dictionaries/en/glow-button").then((m) => m.enGlowButton),
  "glass-input": () => import("@/dictionaries/en/glass-input").then((m) => m.enGlassInput),
  "motion-dropdown": () => import("@/dictionaries/en/motion-dropdown").then((m) => m.enMotionDropdown),
  "nexus-modal": () => import("@/dictionaries/en/nexus-modal").then((m) => m.enNexusModal),
};

const ptLoaders: Loaders = {
  "layout": () => import("@/dictionaries/pt/layout").then((m) => m.ptLayout),
  "home": () => import("@/dictionaries/pt/home").then((m) => m.ptHome),
  "components-layout": () => import("@/dictionaries/pt/components-layout").then((m) => m.ptComponentsLayout),
  "overview": () => import("@/dictionaries/pt/overview").then((m) => m.ptOverview),
  "docs": () => import("@/dictionaries/pt/docs").then((m) => m.ptDocs),
  "install": () => import("@/dictionaries/pt/install").then((m) => m.ptInstall),
  "aurora-background": () => import("@/dictionaries/pt/aurora-background").then((m) => m.ptAuroraBackground),
  "animated-grid": () => import("@/dictionaries/pt/animated-grid").then((m) => m.ptAnimatedGrid),
  "glow-border": () => import("@/dictionaries/pt/glow-border").then((m) => m.ptGlowBorder),
  "text-reveal": () => import("@/dictionaries/pt/text-reveal").then((m) => m.ptTextReveal),
  "bento-grid": () => import("@/dictionaries/pt/bento-grid").then((m) => m.ptBentoGrid),
  "infinite-marquee": () => import("@/dictionaries/pt/infinite-marquee").then((m) => m.ptInfiniteMarquee),
  "glare-card": () => import("@/dictionaries/pt/glare-card").then((m) => m.ptGlareCard),
  "glass-card": () => import("@/dictionaries/pt/glass-card").then((m) => m.ptGlassCard),
  "neon-badge": () => import("@/dictionaries/pt/neon-badge").then((m) => m.ptNeonBadge),
  "glow-button": () => import("@/dictionaries/pt/glow-button").then((m) => m.ptGlowButton),
  "glass-input": () => import("@/dictionaries/pt/glass-input").then((m) => m.ptGlassInput),
  "motion-dropdown": () => import("@/dictionaries/pt/motion-dropdown").then((m) => m.ptMotionDropdown),
  "nexus-modal": () => import("@/dictionaries/pt/nexus-modal").then((m) => m.ptNexusModal),
};

const loaders: Record<Locale, Loaders> = { en: enLoaders, pt: ptLoaders };

export async function getDictionary<N extends Namespace>(
  locale: string,
  namespace: N
): Promise<NamespaceMap[N]> {
  const lang: Locale = locale in loaders ? (locale as Locale) : "en";
  return loaders[lang][namespace]();
}
