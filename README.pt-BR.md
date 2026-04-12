# HustyCore

![Next.js](https://img.shields.io/badge/Next.js-16%2B-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18%2B-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat)

> 🌍 [Read this documentation in English](./README.md)

O HustyCore é uma biblioteca open-source de componentes premium e altamente interativos construídos para a web moderna. Focada em performance, acessibilidade (AA/AAA) e integração sem fricção, ela fornece blocos de "Copiar e Colar" desenhados nativamente com `framer-motion` animado com fluidez e classes utilitárias do Tailwind CSS.

## Funcionalidades

- **Blocos UI Interativos:** Componentes pré-fabricados lindamente esculpidos (Glassmorphism, brilho Neon, Parallax 3D).
- **Segurança Vestibular:** Implementação nativa do `useReducedMotion`, respeitando as preferências de acessibilidade de movimento em nível de Sistema Operacional de forma engrenada.
- **TypeScript Estrito:** Zero tipos `any`. Tudo é tipado estritamente estendendo atributos HTML e SVG nativos sempre que necessário.
- **Metodologia Copy & Paste:** Sem pacotes NPM pesados empurrados contra você. Você é o dono do seu código.

## Pré-requisitos Sistêmicos

- Node.js 18.17 ou superior.
- Next.js 14+ (App Router).
- React 18+.

## Quickstart

### 1. Instalar Dependências
Você precisa de algumas dependências base para dar o motor das animações e viabilizar a injeção condicional de classes utilitárias:

```bash
npm install framer-motion clsx tailwind-merge
```

### 2. Configurar o `tailwind.config.ts`
O HustyCore depende de tokens CSS robustos para trabalhar os sistemas de camadas Glassmorphism.
Adicione no seu `tailwind.config.ts` injetando diretamente nos escopos do `theme.extend`:

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

### 3. Setup de Tokens Globais
Acesse seu arquivo base `globals.css` e engatilhe as chaves paramétricas de design que vão guiar o frontend do ambiente claro e escuro:

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

  /* Suporte de Acessibilidade AA/AAA para navegação focada */
  *:focus-visible {
    outline: 2px solid hsl(var(--primary));
    outline-offset: 2px;
    border-radius: 2px;
  }
}
```

### 4. Copiar e Colar Componentes
Está livre e pronto pra voar! Navegue pelas pastas e arquivos de componentes de sistema que estão dentro de `src/components/ui/` e simplesmente os copie de forma ilimitada para dentro de onde você desejar no seu projeto.

## Licença
Copyright © 2026 Matheus Calonico. Todos os direitos reservados. Veja o arquivo [LICENSE](./LICENSE) para suporte e detalhes extraídos.
