# HustyCore | Premium UI Library

## O Problema Real
No desenvolvimento moderno de interfaces, engenheiros de front-end frequentemente se deparam com a dolorosa necessidade de reinventar a roda. Criação de componentes visuais complexos — repletos de micro-interações físicas elásticas, transições de estado e refrações com desfoque de fundo (*glassmorphism*) — consome dezenas de horas preciosas que deveriam ser alocadas para regras de negócio fundamentais. Além disso, a manutenção e acessibilidade de elementos sobrepostos costuma se transformar em um emaranhado difícil de refatorar.

## A Solução
O **HustyCore** nasce como um acelerador de *Time-to-Market*. Nós disponibilizamos uma suíte comissionada de componentes Premium já montados, agnósticos, escaláveis e completamente performáticos, pensados em 60 frames por segundo. A filosofia de uso é livre de *vendor lock-in*: basta copiar a receita do bloco de interface, colar diretamente em seu projeto e alterar livremente pois todo controle lógico estará nativamente presente na sua pasta. De Animações de Malha (Grid), Cartões Magnéticos, até caixas modais flutuantes com interpolação de molas.

## Tecnologias e Arquitetura
Este projeto foi rigorosamente arquiteto sobre pilares sólidos de engenharia de software atual:
- **[Next.js 16](https://nextjs.org/)** — Runtime hibrido estático e servidor (App Router).
- **[TypeScript](https://www.typescriptlang.org/)** — Rigidez de modelagem e prevenção de erros dinâmicos.
- **[Tailwind CSS](https://tailwindcss.com/)** — Engine utilitária veloz de styling e padronização.
- **[Framer Motion](https://www.framer.com/motion/)** — Orquestração de animações orgânicas (Física *Spring*).
- **[Vitest](https://vitest.dev/)** — Pipeline purista para cobertura de Testes Unitários de alta velocidade.

---

## Primeiros Passos

### Instalação
Faça a inicialização com a base do projeto clonando o repositório:
```bash
git clone https://github.com/SeuWorkspace/HustyCore.git
cd HustyCore
npm install --legacy-peer-deps
```

### Execução Local
Levante o seu ambiente de desenvolvimento e Showcase em porta local:
```bash
npm run dev
```

### Testes Automatizados (Vitest)
As rotinas de teste da biblioteca verificam injunções do Tailwind, merge de classes limpas e validações condicionais visuais de falses/nulls. Execute:
```bash
# Para varrer o Test Suite em modo de single-run (Padrão para CI)
npm run test

# Para visualizar e observar mudanças em tempo real no terminal
npm run test:watch
```

### Garantia de Qualidade (Linting)
Garantimos a estilização estruturada dos artefatos:
```bash
npm run lint
```

---

Copyright © 2026 Matheus Calonico. Todos os direitos reservados.
