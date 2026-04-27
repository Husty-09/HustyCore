import { enCommon } from "./_common";

export const enInfiniteMarquee = {
  common: enCommon,
  components: {
    infiniteMarquee: {
      title: "Infinite Marquee",
      description:
        "An endless mathematically generated ribbon that spans content right-to-left using clean CSS engine power.",
      previewTitle: "Interactive Preview",
      usageTitle: "Great Usage Example",
      usageDesc:
        "Use arrays and mapping to populate content. The component handles cloning so the loop is infinite and seamless.",
      sourceDesc:
        '**Warning:** This component requires you to declare marquee keyframes in your ',
    },
  },
};

export type InfiniteMarqueeDict = typeof enInfiniteMarquee;
