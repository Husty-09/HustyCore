import { enCommon } from "./_common";

export const enGlareCard = {
  common: enCommon,
  components: {
    glareCard: {
      title: "3D Glare Card",
      description:
        "A premium card block with real-time physical mouse tracking. It calculates perspective (3D rotate) and simulates a metallic reflection (glare).",
      previewTitle: "Interactive Preview",
      cardBadge: "Premium Asset",
      cardTitle: "Magnetic Card Effect",
      cardDesc:
        "Hover over this card to see the magic happen. The rendering processes onMouseMove to apply pure CSS transform matrices.",
      usageTitle: "Great Usage Example",
      usageLabel:
        "To enable edge-to-edge immersion without clipping the Z axis, ideally the parent div should have a",
      usageSpan: "property applied to its style.",
      sourceDesc:
        "This component heavily consumes framer-motion (useTransform, useSpring). Create the component ",
    },
  },
};

export type GlareCardDict = typeof enGlareCard;
