import { ptCommon } from "./_common";
import type { NexusModalDict } from "../en/nexus-modal";

export const ptNexusModal: NexusModalDict = {
  common: ptCommon,
  components: {
    nexusModal: {
      title: "Nexus Modal",
      badge: "UI Sobreposta",
      description:
        "Caixas de diálogo responsivas que desfocam a página principal. Acompanhadas da mágica do desmonte da tela pelo Framer Motion.",
      btnLoad: "Abrir Demo Ao Vivo",
      modalTitle: "Componente Funcionando 🎉",
      modalBadgeReady: "Renderizado via Portal",
      modalBadgeDesc:
        "Este modal é injetado diretamente no document.body via React Portal, ignorando todos os transforms e stacking contexts dos elementos pai.",
      modalP1: "Você está vendo o",
      modalP2:
        "Suporta foco capturado, trava de scroll e respeita prefers-reduced-motion. Copie e adicione em qualquer projeto.",
      cancel: "Fechar",
      save: "Entendido!",
    },
  },
};
