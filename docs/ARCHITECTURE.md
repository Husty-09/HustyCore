# Architectural Philosophy: HustyCore

> 🌍 [Leia este guia em Português](./ARCHITECTURE.pt-BR.md)

HustyCore is engineered for front-end engineers who value **Zero-DB** freedom and atomic UI control.

## 1. Zero-DB Philosophy
Most UI libraries force architecture choices on you. HustyCore is **database-agnostic**.
- **No ORM Lock-in**: We don't care if you use Prisma, Drizzle, or raw SQL.
- **Client-Side Physics**: All interactivity is handled by Framer Motion, meaning no server-side logic is required for animations.
- **Copy & Paste**: Move components from this project to yours like building blocks.

## 2. Atomic Component Structure
Each component is designed to be self-contained:
```bash
src/components/ui/
├── glass-card.tsx    # Logic + Base Styling
├── neon-badge.tsx    # Atomic Visual Element
└── nexus-modal.tsx   # Complex Interactive Overlay
```

## 3. Performance Engineering
We target a consistent **60fps** on modern browsers.
- **GPU Acceleration**: We prefer `transform: translate3d` and `opacity` over properties that trigger re-flow (like `height` or `margin`).
- **WhileInView**: Animations are triggered only when the user scrolls to the element, saving CPU cycles on long pages.
- **Reduced Motion**: We implement `useReducedMotion` to respect system-level accessibility settings.
