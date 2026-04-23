# Contributing to HustyCore

Thank you for your interest in contributing. This guide covers everything you need to get started.

## Before You Start

HustyCore uses a **Dual License**. By submitting a pull request, you agree that your contribution will be licensed under the same terms as the project. Read the [LICENSE](./LICENSE) file before contributing.

Key restrictions:
- You may not resell contributed components as part of a competing UI kit or library.
- The platform code (showcase site) is proprietary and not open for contributions.

## What You Can Contribute

- Bug fixes in existing components
- Accessibility improvements (`useReducedMotion`, ARIA)
- Performance improvements (must stay within `transform`/`opacity` only)
- New components (open an issue first to align before building)
- Documentation fixes

## Setup

```bash
git clone https://github.com/Husty-09/HustyCore.git
cd HustyCore
npm install --legacy-peer-deps
npm run dev
```

## Component Standards

Every component must:

1. Use `React.forwardRef` and set `displayName`
2. Respect `prefers-reduced-motion` via `useReducedMotion()` from Framer Motion
3. Accept and forward a `className` prop via `cn()` from `@/lib/utils`
4. Be typed with an exported `interface`, never an inline anonymous `type`
5. Use only `framer-motion`, `clsx`, and `tailwind-merge` as dependencies

## Tests

Tests live in `src/components/ui/__tests__/[component-name].test.tsx`.

Every component needs:
- Structure tests: renders children, forwards ref, applies className
- Behavior tests: event handlers if applicable
- A11y test: `axe(container)` must pass with no violations

Run tests:

```bash
npm run test
```

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

```
feat(component-name): short description
fix(component-name): short description
refactor(component-name): short description
docs: short description
test(component-name): short description
chore: short description
```

No emojis. No periods at the end of the subject line.

## Pull Request Process

1. Open an issue before working on a new component or large change.
2. Branch from `main` using the format `feat/component-name` or `fix/issue-description`.
3. Fill in the PR template.
4. Ensure `npm run test` and `npm run build` pass locally before submitting.
5. One feature or fix per PR. Do not bundle unrelated changes.

## Questions

Open a [GitHub Discussion](https://github.com/Husty-09/HustyCore/discussions) or reach out at matheusscalonico@gmail.com.
