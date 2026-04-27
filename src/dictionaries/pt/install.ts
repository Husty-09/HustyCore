import type { InstallDict } from "../en/install";

export const ptInstall: InstallDict = {
  components: {
    install: {
      title: "Instalação",
      description:
        "Como injetar o poder do HustyCore diretamente no seu projeto Next.js + Tailwind.",
      step1Title: "1. Instale as Dependências",
      step1Desc:
        "O HustyCore é extremamente leve, dependendo primariamente do Framer Motion para fluidez e tailwind-merge para compatibilidade de classes.",
      step2AutoTitle: "2. Automação & Versionamento",
      step2AutoDesc:
        "Para manter a alta qualidade, recomendamos configurar o Commitlint e o Standard Version para automatizar seu pipeline de deployment.",
      step2Title: "3. Crie o Utilitário de Estilo",
      step2Desc: "Crie um arquivo em src/lib/utils.ts e adicione a função cn().",
      tipTitle: "Dica Pro: Dependências de Peer",
      tipDesc:
        "Se você encontrar conflitos de versão com o React 19 (que está atualmente em RC), use a flag --legacy-peer-deps durante a instalação para garantir compatibilidade com o Framer Motion.",
    },
  },
};
