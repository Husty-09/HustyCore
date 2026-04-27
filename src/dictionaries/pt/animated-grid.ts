import { ptCommon } from "./_common";
import type { AnimatedGridDict } from "../en/animated-grid";

export const ptAnimatedGrid: AnimatedGridDict = {
  common: ptCommon,
  components: {
    animatedGrid: {
      title: "Animated Grid",
      badge: "Eye Candy",
      description:
        "Malha matemática animada em tempo real com blocos aleatórios apagáveis via SVG.",
      previewTitle: "Engenharia Leve",
      previewDesc:
        "Esta malha não usa bibliotecas pesadas de 3D. É calculada de forma pura no navegador convertendo arrays diretamente em propriedades de path do SVG. Um Grid leve e incisivo.",
    },
  },
};
