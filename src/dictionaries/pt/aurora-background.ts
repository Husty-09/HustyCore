import { ptCommon } from "./_common";
import type { AuroraBackgroundDict } from "../en/aurora-background";

export const ptAuroraBackground: AuroraBackgroundDict = {
  common: ptCommon,
  components: {
    auroraBackground: {
      title: "Aurora Background",
      badge: "Eye Candy",
      description:
        "Fundo responsivo animado suavemente com gradientes em CSS, perfeito para causar alto impacto visual em seções Hero.",
      previewTitle: "Cores Livres",
      previewDesc:
        "A aurora acima é gerada puramente via Tailwind e suas variáveis HSL globais (Primary, Secondary, Destructive), sem Canvas ou WebGL.",
      setupLabel: "Adicione as seguintes chaves dentro do seu",
    },
  },
};
