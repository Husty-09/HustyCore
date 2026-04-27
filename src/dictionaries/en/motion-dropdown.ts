import { enCommon } from "./_common";

export const enMotionDropdown = {
  common: enCommon,
  components: {
    motionDropdown: {
      title: "Motion Dropdown",
      badge: "Floating UI",
      description:
        "Dropdown menus that spring open perfectly, guarded by Animate Presence.",
      label: "Select Category",
      item1: "Frontend dev",
      item2: "Backend eng",
      item3: "UI Design",
    },
  },
};

export type MotionDropdownDict = typeof enMotionDropdown;
