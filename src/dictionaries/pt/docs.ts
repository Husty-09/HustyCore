import type { DocsDict } from "../en/docs";

export const ptDocs: DocsDict = {
  components: {
    docs: {
      title: "Documentação",
      description:
        "Entenda as regras de negócio virtuais, padrão de injeção de estilo e como gerenciar seus blocos.",
      p1Title: "A Filosofia Zero-DB",
      p1Desc:
        "O HustyCore é entregue como uma UI Library livre de vínculos de retaguarda. Não possuímos dependências com Prisma, Drizzle ou bancos Dockerizados para que você possa arrastar e soltar visualmente sem quebrar o ecossistema do seu app principal.",
      card1Title: "Tailwind Purista",
      card1Desc:
        "Todos os valores métricos de espaçamento (p-4, mt-2, flex) seguem o rigor do Tailwind nativo para que as telas colapsem perfeitamente em dispositivos móveis.",
      card2Title: "Framer Motion",
      card2Desc:
        "Deixamos as transições de rota (CSS transitions) para animações brutas estáticas, mas todo o cálculo de interpolação elástica com física spring é ditado pelo Framer Motion (layoutId).",
      stylingTitle: "O Sistema de Estilo",
      stylingDesc:
        "HustyCore utiliza um sistema de tokens semânticos para Glassmorphism. Cores como --glass-border e --glass-input-border garantem que a translucidez permaneça consistente entre temas.",
      perfTitle: "Engenharia 60fps",
      perfDesc:
        "Cada componente é perfilado para evitar o layout thrashing. Ao usar transform e opacity para animações, garantimos uma renderização suave mesmo em dispositivos modestos.",
      accessibilityTitle: "Design Inclusivo (A11y)",
      accessibilityDesc:
        "Seguimos rigorosamente os padrões ARIA e implementamos suporte nativo para 'prefers-reduced-motion', garantindo que a interface seja utilizável por todos.",
      tokensTitle: "Design Tokens",
      tokensDesc:
        "Nossas variáveis CSS são a espinha dorsal da biblioteca. Elas permitem a troca instantânea de temas e personalização profunda dos efeitos de vidro.",
      badge1: "Filosofia Central",
      badge2: "Responsividade",
      badge3: "Magia em Movimento",
    },
  },
};
