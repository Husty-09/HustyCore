import { enCommon } from "./_common";

export const enAuroraBackground = {
  common: enCommon,
  components: {
    auroraBackground: {
      title: "Aurora Background",
      badge: "Eye Candy",
      description:
        "Smoothly animated responsive background using CSS gradients, perfect for high visual impact in Hero sections.",
      previewTitle: "Free Colors",
      previewDesc:
        "The aurora above is generated purely via Tailwind and its global HSL variables (Primary, Secondary, Destructive), without Canvas or WebGL.",
      setupLabel: "Add the following keys inside your",
    },
  },
};

export type AuroraBackgroundDict = typeof enAuroraBackground;
