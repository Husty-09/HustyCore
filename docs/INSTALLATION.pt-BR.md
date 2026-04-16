# Guia de Instalação

> 🌍 [Read this guide in English](./INSTALLATION.md)

Siga estes passos para integrar o HustyCore ao seu projeto Next.js + Tailwind existente.

## 1. Requisitos Base
Certifique-se de ter as seguintes versões:
- **Node.js**: 18.17+
- **Next.js**: 14+ (App Router)
- **Tailwind CSS**: 3.4+

## 2. Instalar Dependências Principais
O HustyCore depende do `framer-motion` para animações e utilitários estruturais para mesclagem de classes.

```bash
npm install framer-motion clsx tailwind-merge --legacy-peer-deps
```

## 3. Configurar o Utilitário de Estilo
Crie `src/lib/utils.ts` e adicione o helper padrão `cn` para gerenciamento dinâmico de classes:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 4. Configurar os Tokens do Tailwind
Adicione os tokens de glassmorphism e neon ao seu `tailwind.config.ts`:

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
        "glass-hover": "var(--glass-shadow-hover)",
      }
    }
  }
}
```

## 5. Variáveis Globais
Aplique as variáveis no seu `src/app/globals.css`:

```css
@layer base {
  :root {
    --glass: rgba(255, 255, 255, 0.01);
    --glass-border: rgba(255, 255, 255, 0.05);
    /* ... mais detalhes em docs/STYLING_GUIDE.pt-BR.md */
  }
}
```
