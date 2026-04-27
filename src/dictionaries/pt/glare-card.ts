import { ptCommon } from "./_common";
import type { GlareCardDict } from "../en/glare-card";

export const ptGlareCard: GlareCardDict = {
  common: ptCommon,
  components: {
    glareCard: {
      title: "3D Glare Card",
      description:
        "Um bloco card premium com rastreamento físico em tempo real do mouse. Ele calcula a perspectiva (3D rotate) e simula uma reflexão metálica (glare).",
      previewTitle: "Preview Interativo",
      cardBadge: "Ativo Premium",
      cardTitle: "Efeito Cartão Magnético",
      cardDesc:
        "Passe o mouse por cima dessa carta para ver a bruxaria acontecer. A renderização desse componente processa o onMouseMove para aplicar matrizes transform em CSS puras.",
      usageTitle: "Excelente Exemplo de Uso",
      usageLabel:
        "Para habilitar a imersão de ponta a ponta sem clipar o eixo Z, o ideal é que a div pai ou container dessa carta tenha uma propriedade de",
      usageSpan: "aplicada no estilo.",
      sourceDesc:
        "Este componente consome pesadamente o framer-motion (useTransform, useSpring). Crie o componente ",
    },
  },
};
