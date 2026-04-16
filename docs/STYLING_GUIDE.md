# Styling Guide: Glass & Neon

> 🌍 [Leia este guia em Português](./STYLING_GUIDE.pt-BR.md)

HustyCore is built on the intersection of **Glassmorphism** and **Dynamic Glows**.

## 1. The Glass System
We avoid hard-coded background colors. Instead, we use transparent layers with high-refraction blurs.

### Key CSS Variables
- `--glass`: The base translucent layer (Target 1-3% opacity).
- `--glass-border`: High contrast thin borders (Target 5-8% opacity white).
- `backdrop-blur`: Typically `md` (8px) or `lg` (16px) for premium depth.

### Example Token
```css
.glass-effect {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
}
```

## 2. Neon & Glow Patterns
We use **Conic Gradients** and **Box Shadows** with HSL values to create "vibrating" edges.

### Pulse Animations
Many components, like `NeonBadge`, use keyframes to alternate opacity:
```css
@keyframes pulse-glow {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
```

## 3. Theming
HustyCore is dark-mode first but supports light mode by inverting the luminosity of values:
- **Dark**: Deep blacks with 1% white glass.
- **Light**: Crisp whites with 10% white glass and stronger shadows.
