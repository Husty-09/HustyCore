export const en = {
  home: {
    badge: "V2.0 Forms & Modals Live",
    titlePart1: "Build Fast. ",
    titlePart2: "Look Premium.",
    description: "Explore the power of floating fields and screens from the new HustyCore library.",
    card1: {
      badge: "Glass Patterns",
      title: "Forms & Text",
      description: "Just click the field below to focus. It activates native dynamic opacity with glow state borders.",
      inputPlaceholder: "Enter your best email...",
      dropdownLabel: "Select Framework",
    },
    card2: {
      badge: "Interactive Frames",
      title: "Modals & Popovers",
      description: "Our modals don't just \"appear\" and close: they rise animated with perfect blurred backgrounds, without impairing readability.",
      buttonLabel: "Open Nexus Modal",
    },
    modal: {
      title: "Payment Successful ✅",
      p1: "Thank you for preferring your interface in a superior standard. The modal component has closing animation via AnimatePresence.",
      p2: "Try clicking the dark background or the red (X) button above to gracefully close.",
    }
  },
  nav: {
    docs: "Documentation",
    install: "Installation",
    components: "Components",
    showcase: "Showcase",
    getStarted: "Get Started"
  },
  sidebar: {
    gettingStarted: "Getting Started",
    atomicBlocks: "Atomic Blocks",
    interactive: "Interactive Components",
    eyeCandy: "Eye-Candy Components",
    layoutShowcase: "Layout & Showcase"
  },
  common: {
    previewTitle: "Preview",
    sourceCodeTitle: "Source Code",
    copyInstructions: "Copy the base code and place it in your folder ",
    importantSetup: "Important Setup"
  },
  components: {
    auroraBackground: {
      title: "Aurora Background",
      badge: "Eye Candy",
      description: "Smoothly animated responsive background using CSS gradients, perfect for high visual impact in Hero sections.",
      previewTitle: "Free Colors",
      previewDesc: "The aurora above is generated purely via Tailwind and its global HSL variables (Primary, Secondary, Destructive), without Canvas or WebGL.",
      setupLabel: "Add the following keys inside your",
    },
    animatedGrid: {
      title: "Animated Grid",
      badge: "Eye Candy",
      description: "Real-time animated mathematical mesh with random erasable blocks via SVG.",
      previewTitle: "Lightweight Engineering",
      previewDesc: "This mesh doesn't use heavy 3D libraries. It is purely calculated in the browser by converting arrays directly into SVG path properties. A sharp and lightweight Grid."
    },
    glowBorder: {
      title: "Glow Border",
      badge: "Eye Candy",
      description: "Dynamic rotating neon laser injected through overlapping absolute Conic Gradients.",
      previewTitle: "Pro Plan",
      previewDesc: "Everything you need to launch your business to the Moon.",
      previewPrice: "$ 99"
    },
    textReveal: {
      title: "Text Reveal",
      badge: "Eye Candy",
      description: "Powerful scaled Blur entrance based on Framer Motion (Stagger) activated only when texts enter the view (WhileInView).",
      previewTitle: "Software that Moves",
      previewDesc: "Say goodbye to stiff and lifeless pages. HustyCore transforms your entire visual environment delivering deep engagement that magnetizes clients."
    },
    bentoGrid: {
      title: "Bento Grid",
      badge: "Premium",
      description: "Build complex layouts with Apple-like aesthetics, true transparency, and fluid interactivity.",
      previewTitle: "Interactive Preview",
      b1Title: "Modern Interfaces",
      b1Desc: "Feel the depth with smart background blur that adapts to content.",
      b2Title: "Lightning Fast",
      b2Desc: "Optimized performance for steady 60fps animations.",
      b3Title: "Crystal Glass",
      b3Desc: "The secret lies in the 1% opacity and edge contrast.",
      b4Title: "Global Scale",
      b4Desc: "Ready for internationalization and mobile devices."
    },
    infiniteMarquee: {
      title: "Infinite Marquee",
      description: "An endless mathematically generated ribbon that spans content right-to-left using clean CSS engine power.",
      previewTitle: "Interactive Preview",
      usageTitle: "Great Usage Example",
      usageDesc: "Use arrays and mapping to populate content. The component handles cloning so the loop is infinite and seamless.",
      sourceDesc: "**Warning:** This component requires you to declare marquee keyframes in your "
    },
    glareCard: {
      title: "3D Glare Card",
      description: "A premium card block with real-time physical mouse tracking. It calculates perspective (3D rotate) and simulates a metallic reflection (glare).",
      previewTitle: "Interactive Preview",
      cardBadge: "Premium Asset",
      cardTitle: "Magnetic Card Effect",
      cardDesc: "Hover over this card to see the magic happen. The rendering processes onMouseMove to apply pure CSS transform matrices.",
      usageLabel: "To enable edge-to-edge immersion without clipping the Z axis, ideally the parent div should have a",
      usageSpan: "property applied to its style.",
      sourceDesc: "This component heavily consumes framer-motion (useTransform, useSpring). Create the component "
    },
    docs: {
      title: "Documentation",
      description: "Understand the virtual business rules, style injection pattern, and how to manage your blocks.",
      p1Title: "The Zero-DB Philosophy",
      p1Desc: "HustyCore is delivered as a back-end free UI Library. We have no dependencies on Prisma, Drizzle, or Dockerized databases so you can visually drag and drop without breaking your main app's ecosystem.",
      card1Title: "Purist Tailwind",
      card1Desc: "All spacing metrics (p-4, mt-2, flex) strictly follow native Tailwind so screens collapse perfectly on mobile devices.",
      card2Title: "Framer Motion",
      card2Desc: "We leave route transitions (CSS transitions) for raw static animations, but all elastic interpolation calculations using spring physics are dictated by Framer Motion (layoutId).",
      stylingTitle: "The Styling System",
      stylingDesc: "HustyCore uses a semantic token system for Glassmorphism. Colors like --glass-border and --glass-input-border ensure that translucency remains consistent across themes.",
      perfTitle: "60fps Engineering",
      perfDesc: "Every component is profiled to avoid layout thrashing. By using transform and opacity for animations, we ensure smooth rendering even on low-end devices.",
      accessibilityTitle: "Inclusive Design (A11y)",
      accessibilityDesc: "We strictly follow ARIA patterns and implement native support for 'prefers-reduced-motion', ensuring the interface is usable by everyone.",
      tokensTitle: "Design Tokens",
      tokensDesc: "Our CSS variables are the backbone of the library. They allow for instant theme switching and deep customization of the glass effects.",
      badge1: "Core Philosophy",
      badge2: "Responsivity",
      badge3: "Motion Magic"
    },
    install: {
      title: "Installation",
      description: "How to inject HustyCore's power directly into your Next.js + Tailwind project.",
      step1Title: "1. Install Dependencies",
      step1Desc: "HustyCore is extremely lightweight, relying primarily on Framer Motion for fluidity and tailwind-merge for class compatibility.",
      step2AutoTitle: "2. Automation & SemVer",
      step2AutoDesc: "To maintain high quality, we recommend setting up Commitlint and Standard Version to automate your deployment pipeline.",
      step2Title: "3. Create the Style Utility",
      step2Desc: "Create a file at src/lib/utils.ts and add the cn() function.",
      tipTitle: "Pro Tip: Peer Dependencies",
      tipDesc: "If you encounter version conflicts with React 19 (which is currently in RC), use the --legacy-peer-deps flag during installation to ensure compatibility with Framer Motion."
    },
    overview: {
      badge: "Welcome to HustyCore",
      title: "Beautifully Crafted Components",
      description: "Browse our premium collection of Atomic Blocks and Interactive Interfaces built with React, Tailwind CSS, and Framer Motion. Completely agnostic and database-free.",
      card1Badge: "Open Source",
      card1Title: "Copy & Paste",
      card1Desc: "We don't tie you to invasive NPM packages that stiffen your project. Each component was designed in isolation. You own 100% of the code and can modify it however your business logic demands directly inside your",
      card2Badge: "Real Physics",
      card2Title: "Framer Dynamics",
      card2Desc: "Say goodbye to the harsh linear transitions of old CSS. HustyCore injects elastic spring-based animations powered by Framer Motion's core, ensuring your interactions respond like real tactile objects.",
      guideTitle: "The Journey Map",
      guide1: "Explore our left sidebar to discover and choose the ideal components for your ecosystem.",
      guide2: "Play freely with them in the main Preview box.",
      guide3: "Like it? Just scroll down a bit and copy the Source Code from the clipboard we provide. Simple as that."
    },
    glassCard: {
      title: "Glass Card",
      badge: "Container",
      description: "Translucent glass surfaces with advanced background blur.",
      previewP1: "True Translucency",
      previewP2: "Notice how the vibrant element moves behind this card. The backdrop-blur-md effect preserves colors and shapes while keeping text readable through ultra-thin glass."
    },
    neonBadge: {
      title: "Neon Badge",
      badge: "Atomic Block",
      description: "Small labeling modules that pulse with clean animation.",
    },
    glowButton: {
      title: "Glow Button",
      badge: "Atomic Block",
      description: "A highly interactive button that scales natively using Framer Motion. It projects its own \"Neon\" aura on the Hover state.",
      btn1: "Confirm Submission",
      btn2: "Explore Galaxy",
      btn3: "Delete Account"
    },
    glassInput: {
      title: "Glass Input",
      badge: "Interactive Form",
      description: "Polished input fields that naturally communicate via a glowing ring on Focus.",
      preview1: "Focus on me...",
      preview2: "Disabled field"
    },
    motionDropdown: {
      title: "Motion Dropdown",
      badge: "Floating UI",
      description: "Dropdown menus that spring open perfectly, guarded by Animate Presence.",
      label: "Select Category",
      item1: "Frontend dev",
      item2: "Backend eng",
      item3: "UI Design"
    },
    nexusModal: {
      title: "Nexus Modal",
      badge: "Overlay UI",
      description: "Responsive dialog boxes that blur the main page. Accompanied by Framer Motion's unmount magic.",
      btnLoad: "Test Clean Modal",
      modalTitle: "Privacy Control",
      modalBadgeReady: "Setup Ready 🎉",
      modalBadgeDesc: "The modal now retains independent physics and prevents click leakage.",
      modalP1: "This is an organic central view of",
      modalP2: "It fully traps window focus with extreme Blur, popping up with Spring acceleration for genuine iOS-like bounce.",
      cancel: "Cancel",
      save: "Save"
    }
  }
};

export type Dictionary = typeof en;
