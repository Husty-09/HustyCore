import { enCommon } from "./_common";

export const enGlassCard = {
  common: enCommon,
  components: {
    glassCard: {
      title: "Glass Card",
      badge: "Container",
      description: "Translucent glass surfaces with advanced background blur.",
      previewP1: "True Translucency",
      previewP2:
        "Notice how the vibrant element moves behind this card. The backdrop-blur-md effect preserves colors and shapes while keeping text readable through ultra-thin glass.",
    },
  },
};

export type GlassCardDict = typeof enGlassCard;
