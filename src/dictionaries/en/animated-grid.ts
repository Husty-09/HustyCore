import { enCommon } from "./_common";

export const enAnimatedGrid = {
  common: enCommon,
  components: {
    animatedGrid: {
      title: "Animated Grid",
      badge: "Eye Candy",
      description:
        "Real-time animated mathematical mesh with random erasable blocks via SVG.",
      previewTitle: "Lightweight Engineering",
      previewDesc:
        "This mesh doesn't use heavy 3D libraries. It is purely calculated in the browser by converting arrays directly into SVG path properties. A sharp and lightweight Grid.",
    },
  },
};

export type AnimatedGridDict = typeof enAnimatedGrid;
