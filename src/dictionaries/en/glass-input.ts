import { enCommon } from "./_common";

export const enGlassInput = {
  common: enCommon,
  components: {
    glassInput: {
      title: "Glass Input",
      badge: "Interactive Form",
      description:
        "Polished input fields that naturally communicate via a glowing ring on Focus.",
      preview1: "Focus on me...",
      preview2: "Disabled field",
    },
  },
};

export type GlassInputDict = typeof enGlassInput;
