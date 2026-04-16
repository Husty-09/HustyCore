# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

---

## [1.2.5](https://github.com/Husty-09/HustyCore/compare/v1.2.4...v1.2.5) (2026-04-16)

### Features

* implement specialized documentation site with three-tier structure: `docs/ARCHITECTURE.md`, `docs/STYLING_GUIDE.md`, `docs/INSTALLATION.md` ([e4b274e](https://github.com/Husty-09/HustyCore/commit/e4b274e))
* configure DevOps automation: `standard-version`, `commitlint`, and Husky `commit-msg` hook for Conventional Commits enforcement ([e4b274e](https://github.com/Husty-09/HustyCore/commit/e4b274e))
* add `release` script to `package.json` for one-command SemVer releases ([e4b274e](https://github.com/Husty-09/HustyCore/commit/e4b274e))
* enrich documentation page with Design Tokens visualization, 60fps performance section, and A11y section ([e4b274e](https://github.com/Husty-09/HustyCore/commit/e4b274e))
* rewrite README.md (EN) and README.pt-BR.md (PT) as premium high-impact landing pages ([e4b274e](https://github.com/Husty-09/HustyCore/commit/e4b274e))

---

## [1.2.4](https://github.com/Husty-09/HustyCore/compare/v1.2.3...v1.2.4) (2026-04-16)

### Bug Fixes

* replace broken `sourceCode` template literal strings with `fs.readFileSync` across all 13 component `page.tsx` files, permanently eliminating escaping errors ([9cd4fed](https://github.com/Husty-09/HustyCore/commit/9cd4fed), [e68acc4](https://github.com/Husty-09/HustyCore/commit/e68acc4))
* fix missing closing `</div>` in `glass-input.tsx` component causing TypeScript parse error ([e68acc4](https://github.com/Husty-09/HustyCore/commit/e68acc4))
* add `"use client"` directive to `3d-glare-card` component ([e68acc4](https://github.com/Husty-09/HustyCore/commit/e68acc4))

---

## [1.2.3](https://github.com/Husty-09/HustyCore/compare/v1.2.2...v1.2.3) (2026-04-15)

### Features

* integrate Vitest, Husky, and lint-staged to establish a robust testing and pre-commit CI/CD pipeline ([b06f8ea](https://github.com/Husty-09/HustyCore/commit/b06f8ea))
* implement accessibility enhancements: ARIA focus states and `useReducedMotion` support across all UI components ([8d837b0](https://github.com/Husty-09/HustyCore/commit/8d837b0))
* add Portuguese documentation (`README.pt-BR.md`) ([8d837b0](https://github.com/Husty-09/HustyCore/commit/8d837b0))

### Refactors

* update CI pipeline and improve test suite and linting configuration ([131ac38](https://github.com/Husty-09/HustyCore/commit/131ac38))

---

## [1.2.2](https://github.com/Husty-09/HustyCore/compare/v1.2.1...v1.2.2) (2026-04-15)

### Refactors

* migrate entire component directory structure to support internationalization (i18n) via `[lang]` dynamic route ([05779ef](https://github.com/Husty-09/HustyCore/commit/05779ef))
* add full bilingual localization support (EN/PT) with dictionary system ([05779ef](https://github.com/Husty-09/HustyCore/commit/05779ef))
* standardize Glassmorphism design tokens and apply them consistently across all UI components ([35f94db](https://github.com/Husty-09/HustyCore/commit/35f94db))

---

## [1.2.1](https://github.com/Husty-09/HustyCore/compare/v1.2.0...v1.2.1) (2026-04-15)

### Bug Fixes

* remove conflicting `eslint.config.mjs` file that was causing linting build errors ([e1731cd](https://github.com/Husty-09/HustyCore/commit/e1731cd))

---

## [1.2.0](https://github.com/Husty-09/HustyCore/compare/v1.1.0...v1.2.0) (2026-04-15)

### Features

* add **BentoGrid** layout component with Apple-like aesthetics and glassmorphism ([ce5d848](https://github.com/Husty-09/HustyCore/commit/ce5d848))
* add **InfiniteMarquee** component: CSS-powered seamless scrolling ribbon ([ce5d848](https://github.com/Husty-09/HustyCore/commit/ce5d848))
* add **3D Glare Card** component with real-time Framer Motion mouse tracking and metallic reflection ([ce5d848](https://github.com/Husty-09/HustyCore/commit/ce5d848))

### Improvements

* overhaul BentoGrid with premium glassmorphism styling and motion-based layout animations ([82f2a3c](https://github.com/Husty-09/HustyCore/commit/82f2a3c))
* enhance bento grid with improved spacing, interactive hover effects, and responsive polish ([9d7dbb0](https://github.com/Husty-09/HustyCore/commit/9d7dbb0))

---

## [1.1.0](https://github.com/Husty-09/HustyCore/compare/v1.0.0...v1.1.0) (2026-04-14)

### Features

* add **AnimatedGrid** component: real-time SVG mathematical mesh with animated erasable blocks ([c1df912](https://github.com/Husty-09/HustyCore/commit/c1df912))
* add **TextReveal** component: scroll-triggered blur entrance animation with Framer Motion stagger ([c1df912](https://github.com/Husty-09/HustyCore/commit/c1df912))
* add **GlowBorder** component: rotating neon laser via overlapping conic gradients ([c1df912](https://github.com/Husty-09/HustyCore/commit/c1df912))
* add dedicated documentation and preview pages for all new components ([c1df912](https://github.com/Husty-09/HustyCore/commit/c1df912))

---

## [1.0.0](https://github.com/Husty-09/HustyCore/compare/e1926a4...v1.0.0) (2026-04-14)

### Features

* initialize Next.js project with Tailwind CSS, TypeScript, and Framer Motion setup ([81d658d](https://github.com/Husty-09/HustyCore/commit/81d658d))
* implement core component library with Glassmorphism UI and Zero-DB architecture ([349deb3](https://github.com/Husty-09/HustyCore/commit/349deb3))
* add **GlassCard**, **GlassInput**, **NeonBadge**, **GlowButton**, **MotionDropdown**, and **NexusModal** components ([349deb3](https://github.com/Husty-09/HustyCore/commit/349deb3))
* add **AuroraBackground** Eye-Candy component with Tailwind keyframe animations ([349deb3](https://github.com/Husty-09/HustyCore/commit/349deb3))
* add initial project overview, installation, and documentation pages ([349deb3](https://github.com/Husty-09/HustyCore/commit/349deb3))
