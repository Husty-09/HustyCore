import { enCommon } from "./_common";

export const enNexusModal = {
  common: enCommon,
  components: {
    nexusModal: {
      title: "Nexus Modal",
      badge: "Overlay UI",
      description:
        "Responsive dialog boxes that blur the main page. Accompanied by Framer Motion's unmount magic.",
      btnLoad: "Open Live Demo",
      modalTitle: "Component Working 🎉",
      modalBadgeReady: "Portal Rendered",
      modalBadgeDesc:
        "This modal is injected directly into document.body via React Portal, bypassing all parent transforms and stacking contexts.",
      modalP1: "You are looking at the",
      modalP2:
        "It supports focus trapping, scroll lock, and respects prefers-reduced-motion. Copy and drop it into any project.",
      cancel: "Dismiss",
      save: "Got it!",
    },
  },
};

export type NexusModalDict = typeof enNexusModal;
