import { ptCommon } from "./_common";
import type { InfiniteMarqueeDict } from "../en/infinite-marquee";

export const ptInfiniteMarquee: InfiniteMarqueeDict = {
  common: ptCommon,
  components: {
    infiniteMarquee: {
      title: "Infinite Marquee",
      description:
        "Uma faixa infindável gerada matematicamente que percorre conteudos da direita para a esquerda usando força limpa da engine do CSS.",
      previewTitle: "Preview Interativo",
      usageTitle: "Excelente Exemplo de Uso",
      usageDesc:
        "Utilize arrays e mapeamento para preencher o conteúdo. O componente se encarrega de clonar para que o loop seja infinito e imperceptível.",
      sourceDesc:
        "**Atenção:** Este componente exige que você declare os keyframes de marquee no seu ",
    },
  },
};
