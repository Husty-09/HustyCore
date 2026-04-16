# HustyCore | Biblioteca UI Premium

![Next.js](https://img.shields.io/badge/Next.js-15%2B-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18%2B-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Estrito-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> 🌍 [Read this documentation in English](./README.md)

HustyCore é uma biblioteca open-source de **componentes premium e altamente interativos** construídos para a web moderna. Focada em performance, acessibilidade e integração sem fricção, ela fornece blocos de "Copiar e Colar" desenhados nativamente com física de `framer-motion` e Tailwind CSS.

## 🚀 A Solução
O HustyCore nasce como um **acelerador de Time-to-Market**. Nós disponibilizamos uma suíte comissionada de blocos de interface — de Grids Animados e Cartões Magnéticos até Modais flutuantes com interpolação de molas — prontos para serem usados.
- **Filosofia Zero-DB**: Totalmente agnóstico ao backend. Sem amarras com bancos de dados.
- **Blocos Atômicos**: Componentes puramente visuais e de alta performance.
- **Metodologia**: Você é o dono do seu código. Copie a receita e cole no seu projeto.

## 🛠️ Tecnologias
- **Next.js 15+** (App Router)
- **TypeScript** (Tipagem estrita e segura)
- **Tailwind CSS** (Engine de estilo utilitária)
- **Framer Motion** (Orquestração de animações físicas)
- **Vitest** (Suíte robusta de testes unitários)

---

## 📚 Documentação Especializada
Explore nossos guias detalhados para informações técnicas aprofundadas:
- [**Guia de Instalação**](./docs/INSTALLATION.md) — Como configurar tokens e utilitários.
- [**Estilo & Design**](./docs/STYLING_GUIDE.md) — Entenda Glassmorphism e os tokens de Neon.
- [**Arquitetura & Filosofia**](./docs/ARCHITECTURE.md) — Métricas de performance e regras Zero-DB.

## ⚡ Início Rápido

### 1. Instalação
Clone o projeto e instale as dependências:
```bash
git clone https://github.com/MatheusCalonico/HustyCore.git
cd HustyCore
npm install --legacy-peer-deps
```

### 2. Execução Local
```bash
npm run dev
```

### 3. Executando Testes
```bash
npm run test        # Execução única
npm run test:watch  # Modo desenvolvimento
```

---

## 🤖 Automação DevOps
Este projeto utiliza **Conventional Commits** e versonamento semântico (**SemVer**).
- Para sugerir mudanças: `git commit -m "feat: sua funcionalidade"`
- Para realizar um release: `npm run release` (isso atualizará o CHANGELOG.md e a versão no package.json automaticamente).

Copyright © 2026 Matheus Calonico. Todos os direitos reservados. Veja o arquivo [LICENSE](./LICENSE) para detalhes.
