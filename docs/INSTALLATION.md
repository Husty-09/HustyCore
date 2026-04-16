# Installation Guide

Follow these steps to integrate HustyCore into your existing Next.js + Tailwind project.

## 1. Base Requirements
Ensure you have the following versions:
- **Node.js**: 18.17+
- **Next.js**: 14+ (App Router)
- **Tailwind CSS**: 3.4+

## 2. Install Core Dependencies
HustyCore relies on `framer-motion` for animations and structural utilities for class merging.

```bash
npm install framer-motion clsx tailwind-merge --legacy-peer-deps
```

## 3. Setup the Style Utility
Create `src/lib/utils.ts` and add the standard `cn` helper for dynamic class management:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 4. Configure Tailwind Tokens
Add the glassmorphism and neon tokens to your `tailwind.config.ts`:

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
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
        "glass-hover: "var(--glass-shadow-hover)",
      }
    }
  }
}
```

## 5. Global Variables
Apply the variables in your `src/app/globals.css`:

```css
@layer base {
  :root {
    --glass: rgba(255, 255, 255, 0.01);
    --glass-border: rgba(255, 255, 255, 0.05);
    /* ... more in docs/STYLING_GUIDE.md */
  }
}
```
