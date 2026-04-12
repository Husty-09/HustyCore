import type { Dictionary } from "./en";

export const pt: Dictionary = {
  home: {
    badge: "V2.0 Forms & Modals Live",
    titlePart1: "Construa Rápido. ",
    titlePart2: "Aparência Premium.",
    description: "Explore o poder dos campos e telas flutuantes da nova biblioteca HustyCore.",
    card1: {
      badge: "Padrões Glass",
      title: "Formulários e Texto",
      description: "Basta clicar no campo abaixo para focar. Ele ativa a opacidade dinâmica nativa com bordas em glow state.",
      inputPlaceholder: "Insira o seu melhor email...",
      dropdownLabel: "Selecione o Framework",
    },
    card2: {
      badge: "Frames Interativos",
      title: "Modais e Popovers",
      description: "Nossas modais não apenas \"aparecem\" e fecham: elas sobem animadas com fundos borrados perfeitos, sem prejudicar a leitura.",
      buttonLabel: "Abrir Nexus Modal",
    },
    modal: {
      title: "Pagamento Efetuado ✅",
      p1: "Obrigado por preferir a sua interface em padrão superior. O componente modal possui animação no fechamento via AnimatePresence.",
      p2: "Tente clicar no fundo escuro ou no botão vermelho de (X) acima para fechar graciosamente.",
    }
  },
  nav: {
    docs: "Documentação",
    install: "Instalação",
    components: "Componentes",
    showcase: "Showcase",
    getStarted: "Começar"
  },
  sidebar: {
    gettingStarted: "Para Começar",
    atomicBlocks: "Blocos Atômicos",
    interactive: "Componentes Interativos",
    eyeCandy: "Visuais Mágicos (Eye-Candy)",
    layoutShowcase: "Layout e Showcase"
  },
  common: {
    previewTitle: "Preview",
    sourceCodeTitle: "O Código Fonte",
    copyInstructions: "Copie o código base e posicione na sua pasta ",
    importantSetup: "Configuração Prévia (Importante)"
  },
  components: {
    auroraBackground: {
      title: "Aurora Background",
      badge: "Eye Candy",
      description: "Fundo responsivo animado suavemente com gradientes em CSS, perfeito para causar alto impacto visual em seções Hero.",
      previewTitle: "Cores Livres",
      previewDesc: "A aurora acima é gerada puramente via Tailwind e suas variáveis HSL globais (Primary, Secondary, Destructive), sem Canvas ou WebGL.",
      setupLabel: "Adicione as seguintes chaves dentro do seu"
    },
    animatedGrid: {
      title: "Animated Grid",
      badge: "Eye Candy",
      description: "Malha matemática animada em tempo real com blocos aleatórios apagáveis via SVG.",
      previewTitle: "Engenharia Leve",
      previewDesc: "Esta malha não usa bibliotecas pesadas de 3D. É calculada de forma pura no navegador convertendo arrays diretamente em propriedades de path do SVG. Um Grid leve e incisivo."
    },
    glowBorder: {
      title: "Glow Border",
      badge: "Eye Candy",
      description: "Laser neon rotativo dinâmico injetado através da sobreposição de Conic Gradients absolutos.",
      previewTitle: "Plano Pro",
      previewDesc: "Tudo o que você precisa para alavancar seu negócio na Lua.",
      previewPrice: "R$ 99"
    },
    textReveal: {
      title: "Text Reveal",
      badge: "Eye Candy",
      description: "Poderosa entrada de Blur Escalada baseada no Framer Motion (Stagger) ativada apenas quando os textos entram na visão (WhileInView).",
      previewTitle: "Software que se Move",
      previewDesc: "Diga adeus as páginas engessadas e inanimadas. O HustyCore transforma todo o seu ambiente visual entregando engajamento profundo que magnetiza clientes."
    },
    bentoGrid: {
      title: "Bento Grid",
      badge: "Premium",
      description: "Construa layouts complexos com estética Apple-like, transparência real e interatividade fluida.",
      previewTitle: "Preview Interativo",
      b1Title: "Interfaces Modernas",
      b1Desc: "Sinta a profundidade com desfoque de fundo inteligente que se adapta ao conteúdo.",
      b2Title: "Desempenho Extremo",
      b2Desc: "Desempenho otimizado para animações constantes a 60fps.",
      b3Title: "Efeito Glass",
      b3Desc: "O segredo está na opacidade de 1% e no contraste das bordas.",
      b4Title: "Escala Global",
      b4Desc: "Pronto para internacionalização e dispositivos móveis."
    },
    infiniteMarquee: {
      title: "Infinite Marquee",
      description: "Uma faixa infindável gerada matematicamente que percorre conteudos da direita para a esquerda usando força limpa da engine do CSS.",
      previewTitle: "Preview Interativo",
      usageTitle: "Excelente Exemplo de Uso",
      usageDesc: "Utilize arrays e mapeamento para preencher o conteúdo. O componente se encarrega de clonar para que o loop seja infinito e imperceptível.",
      sourceDesc: "**Atenção:** Este componente exige que você declare os keyframes de marquee no seu "
    },
    glareCard: {
      title: "3D Glare Card",
      description: "Um bloco card premium com rastreamento físico em tempo real do mouse. Ele calcula a perspectiva (3D rotate) e simula uma reflexão metálica (glare).",
      previewTitle: "Preview Interativo",
      cardBadge: "Ativo Premium",
      cardTitle: "Efeito Cartão Magnético",
      cardDesc: "Passe o mouse por cima dessa carta para ver a bruxaria acontecer. A renderização desse componente processa o onMouseMove para aplicar matrizes transform em CSS puras.",
      usageLabel: "Para habilitar a imersão de ponta a ponta sem clipar o eixo Z, o ideal é que a div pai ou container dessa carta tenha uma propriedade de",
      usageSpan: "aplicada no estilo.",
      sourceDesc: "Este componente consome pesadamente o framer-motion (useTransform, useSpring). Crie o componente "
    },
    docs: {
      title: "Documentação",
      description: "Entenda as regras de negócio virtuais, padrão de injeção de estilo e como gerenciar seus blocos.",
      p1Title: "A Filosofia Zero-DB",
      p1Desc: "O HustyCore é entregue como uma UI Library livre de vínculos de retaguarda. Não possuímos dependências com Prisma, Drizzle ou bancos Dockerizados para que você possa arrastar e soltar visualmente sem quebrar o ecossistema do seu app principal.",
      card1Title: "Tailwind Purista",
      card1Desc: "Todos os valores métricos de espaçamento (p-4, mt-2, flex) seguem o rigor do Tailwind nativo para que as telas colapsem perfeitamente em dispositivos móveis.",
      card2Title: "Framer Motion",
      card2Desc: "Deixamos as transições de rota (CSS transitions) para animações brutas estáticas, mas todo o cálculo de interpolação elástica com física spring é ditado pelo Framer Motion (layoutId)."
    },
    install: {
      title: "Instalação",
      description: "Como injetar o poder do HustyCore diretamente no seu projeto Next.js + Tailwind.",
      step1Title: "1. Instale as Dependências",
      step1Desc: "O HustyCore é extremamente leve, dependendo primariamente do Framer Motion para fluidez e tailwind-merge para compatibilidade de classes.",
      step2Title: "2. Crie o Utilitário de Estilo",
      step2Desc: "Crie um arquivo em src/lib/utils.ts e adicione a função cn()."
    },
    overview: {
      badge: "Bem-vindo ao HustyCore",
      title: "Componentes Criados Finamente",
      description: "Navegue pelo nosso acervo premium de Blocos Atômicos e Interfaces Interativas construídas com React, Tailwind CSS e Framer Motion. Totalmente agnóstico e sem banco de dados.",
      card1Badge: "Código Livre",
      card1Title: "Copiar e Colar",
      card1Desc: "Nós não amarramos você a pacotes NPM invasivos que engessam seu projeto. Cada componente foi desenhado de forma isolada. Você detém 100% do código e pode modificá-lo da forma que a sua regra de negócios exigir diretamente dentro da sua",
      card2Badge: "Física Real",
      card2Title: "Framer Dynamics",
      card2Desc: "Diga adeus às transições lineares duras do CSS antigo. O HustyCore injeta animações elásticas baseadas em mola (Spring) impulsionadas pelo coração do Framer Motion, garantindo que as micro-interações respondam como objetos táteis reais.",
      guideTitle: "A Rota de Viagem",
      guide1: "Explore o nosso menu lateral esquerdo para descobrir e escolher os componentes ideais pro seu ecossistema.",
      guide2: "Brinque livremente com eles na caixa principal de Preview.",
      guide3: "Gostou? Basta deslizar um pouco para baixo e copiar o Código Fonte na prancheta que disponibilizamos. Simples assim."
    },
    glassCard: {
      title: "Glass Card",
      badge: "Container",
      description: "Superfícies de vidro translucidas com desfoque de fundo avançado.",
      previewP1: "Translucidez Real",
      previewP2: "Note como o elemento vibrante se move por trás deste card. O efeito de backdrop-blur-md preserva as cores e formas enquanto mantém o texto legível através do vidro ultra-fino."
    },
    neonBadge: {
      title: "Neon Badge",
      badge: "Bloco Atômico",
      description: "Módulos pequenos de rotulação que pulsam com animação limpa.",
    },
    glowButton: {
      title: "Glow Button",
      badge: "Bloco Atômico",
      description: "Um botão altamente interativo que escala nativamente utilizando o Framer Motion. Ele projeta sua própria aura de \"Neon\" no estágio de Hover.",
      btn1: "Confirmar Envio",
      btn2: "Explorar Galáxia",
      btn3: "Excluir Conta"
    },
    glassInput: {
      title: "Glass Input",
      badge: "Formulário Interativo",
      description: "Campos de entrada polidos que se comunicam nativamente através de anel brilhante no estado Focus.",
      preview1: "Foque em mim...",
      preview2: "Campo desabilitado"
    },
    motionDropdown: {
      title: "Motion Dropdown",
      badge: "UI Flutuante",
      description: "Menus suspensos que abrem como uma mola perfeita, protegidos por Animate Presence.",
      label: "Selecione Categoria",
      item1: "Desenvolvedor Frontend",
      item2: "Engenheiro Backend",
      item3: "Design UI"
    },
    nexusModal: {
      title: "Nexus Modal",
      badge: "UI Sobreposta",
      description: "Caixas de diálogo responsivas que desfocam a página principal. Acompanhadas da mágica do desmonte da tela pelo Framer Motion.",
      btnLoad: "Testar Modal Limpa",
      modalTitle: "Controle de Privacidade",
      modalBadgeReady: "Configuração Pronta 🎉",
      modalBadgeDesc: "O modal agora retém a física independente e previne cliques vazando.",
      modalP1: "Esta é uma visualização central orgânica do",
      modalP2: "Ele bloqueia totalmente o foco da janela com seu Blur extremo, subindo utilizando acelerações do tipo Spring para um rebote nativo como no ambiente iOS.",
      cancel: "Cancelar",
      save: "Salvar"
    }
  }
};
