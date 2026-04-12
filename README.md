# HustyCore

![Next.js](https://img.shields.io/badge/Next.js-16%2B-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18%2B-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat)

> 🌍 [Read this documentation in Portuguese (Leia em Português)](./README.pt-BR.md)

HustyCore is an open-source library of premium, highly-interactive UI components built for the modern web. Focused on performance, accessibility (AA/AAA), and frictionless integration, it provides pre-built "Copy & Paste" blocks designed with fluid Framer Motion animations and Tailwind CSS utility classes.

## Features

- **Interactive UI Blocks:** Pre-assembled, beautifully crafted components (Glassmorphism, Neon glow, 3D parralax).
- **Vestibular Safe:** Native implementation of `useReducedMotion`, respecting OS-level accessibility preferences seamlessly.
- **Strict TypeScript:** No `any` types. Everything is strictly typed extending native DOM attributes where it matters.
- **Copy & Paste Methodology:** No heavy NPM packages. You own the code.

## System Requirements

- Node.js 18.17 or later.
- Next.js 14+ (App Router).
- React 18+.

## Quickstart

### 1. Install Dependencies
You need a few foundational dependencies to power the motion and utility class merging:

```bash
npm install framer-motion clsx tailwind-merge
```

### 2. Configure `tailwind.config.ts`
HustyCore relies on a few robust CSS variables for its multi-layered themes (specifically the Glassmorphism primitives).
Add the following to your `tailwind.config.ts` inside `theme.extend`:

```typescript
colors: {
  glass: {
    DEFAULT: "var(--glass)",
    hover: "var(--glass-hover)",
    border: "var(--glass-border)",
    input: "var(--glass-input)",
    "input-border": "var(--glass-input-border)",
  },
},
boxShadow: {
  glass: "var(--glass-shadow)",
  "glass-hover": "var(--glass-shadow-hover)",
}
```

### 3. Setup Global Tokens
In your `globals.css` (or main CSS file), define the root variables for light and dark modes:

```css
@layer base {
  :root {
    --glass: rgba(255, 255, 255, 0.01);
    --glass-hover: rgba(255, 255, 255, 0.04);
    --glass-border: rgba(255, 255, 255, 0.05);
    --glass-input: rgba(255, 255, 255, 0.2);
    --glass-input-border: rgba(255, 255, 255, 0.3);
    --glass-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    --glass-shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  .dark {
    --glass: rgba(255, 255, 255, 0.01);
    --glass-hover: rgba(255, 255, 255, 0.04);
    --glass-border: rgba(255, 255, 255, 0.03);
    --glass-input: rgba(255, 255, 255, 0.1);
    --glass-input-border: rgba(255, 255, 255, 0.2);
    --glass-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    --glass-shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  /* Accessibility AA/AAA Requirements */
  *:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
    border-radius: 2px;
  }
}
```

### 4. Copy & Paste Components
You're all set! Browse the component files inside `src/components/ui/` and simply copy the ones you need directly into your project.

## License
Copyright © 2026 Matheus Calonico. All rights reserved. See the [LICENSE](./LICENSE) file for details.
