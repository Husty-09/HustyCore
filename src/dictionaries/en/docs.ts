export const enDocs = {
  components: {
    docs: {
      title: "Documentation",
      description:
        "Understand the virtual business rules, style injection pattern, and how to manage your blocks.",
      p1Title: "The Zero-DB Philosophy",
      p1Desc:
        "HustyCore is delivered as a back-end free UI Library. We have no dependencies on Prisma, Drizzle, or Dockerized databases so you can visually drag and drop without breaking your main app's ecosystem.",
      card1Title: "Purist Tailwind",
      card1Desc:
        "All spacing metrics (p-4, mt-2, flex) strictly follow native Tailwind so screens collapse perfectly on mobile devices.",
      card2Title: "Framer Motion",
      card2Desc:
        "We leave route transitions (CSS transitions) for raw static animations, but all elastic interpolation calculations using spring physics are dictated by Framer Motion (layoutId).",
      stylingTitle: "The Styling System",
      stylingDesc:
        "HustyCore uses a semantic token system for Glassmorphism. Colors like --glass-border and --glass-input-border ensure that translucency remains consistent across themes.",
      perfTitle: "60fps Engineering",
      perfDesc:
        "Every component is profiled to avoid layout thrashing. By using transform and opacity for animations, we ensure smooth rendering even on low-end devices.",
      accessibilityTitle: "Inclusive Design (A11y)",
      accessibilityDesc:
        "We strictly follow ARIA patterns and implement native support for 'prefers-reduced-motion', ensuring the interface is usable by everyone.",
      tokensTitle: "Design Tokens",
      tokensDesc:
        "Our CSS variables are the backbone of the library. They allow for instant theme switching and deep customization of the glass effects.",
      badge1: "Core Philosophy",
      badge2: "Responsivity",
      badge3: "Motion Magic",
    },
  },
};

export type DocsDict = typeof enDocs;
