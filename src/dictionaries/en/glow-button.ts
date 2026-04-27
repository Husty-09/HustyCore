import { enCommon } from "./_common";

export const enGlowButton = {
  common: enCommon,
  components: {
    glowButton: {
      title: "Glow Button",
      badge: "Atomic Block",
      description:
        'A highly interactive button that scales natively using Framer Motion. It projects its own "Neon" aura on the Hover state.',
      btn1: "Confirm Submission",
      btn2: "Explore Galaxy",
      btn3: "Delete Account",
    },
  },
};

export type GlowButtonDict = typeof enGlowButton;
