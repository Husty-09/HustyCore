# Filosofia Arquitetural: HustyCore

> 🌍 [Read this guide in English](./ARCHITECTURE.md)

O HustyCore é projetado para engenheiros front-end que valorizam a liberdade **Zero-DB** e o controle atômico de UI.

## 1. Filosofia Zero-DB
A maioria das bibliotecas de UI impõe escolhas arquiteturais sobre você. O HustyCore é **agnóstico a banco de dados**.
- **Sem Lock-in de ORM**: Não importa se você usa Prisma, Drizzle ou SQL puro.
- **Física Client-Side**: Toda interatividade é gerenciada pelo Framer Motion, sem necessidade de lógica server-side para animações.
- **Copiar & Colar**: Mova componentes deste projeto para o seu como blocos de construção.

## 2. Estrutura de Componentes Atômicos
Cada componente é projetado para ser autocontido:
```bash
src/components/ui/
├── glass-card.tsx    # Lógica + Estilo Base
├── neon-badge.tsx    # Elemento Visual Atômico
└── nexus-modal.tsx   # Overlay Interativo Complexo
```

## 3. Engenharia de Performance
Nosso alvo é um consistente **60fps** em navegadores modernos.
- **Aceleração GPU**: Preferimos `transform: translate3d` e `opacity` sobre propriedades que disparam re-flow (como `height` ou `margin`).
- **WhileInView**: Animações são disparadas apenas quando o usuário rola até o elemento, economizando ciclos de CPU em páginas longas.
- **Movimento Reduzido**: Implementamos `useReducedMotion` para respeitar as configurações de acessibilidade do sistema operacional.
