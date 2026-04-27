export const enInstall = {
  components: {
    install: {
      title: "Installation",
      description:
        "How to inject HustyCore's power directly into your Next.js + Tailwind project.",
      step1Title: "1. Install Dependencies",
      step1Desc:
        "HustyCore is extremely lightweight, relying primarily on Framer Motion for fluidity and tailwind-merge for class compatibility.",
      step2AutoTitle: "2. Automation & SemVer",
      step2AutoDesc:
        "To maintain high quality, we recommend setting up Commitlint and Standard Version to automate your deployment pipeline.",
      step2Title: "3. Create the Style Utility",
      step2Desc: "Create a file at src/lib/utils.ts and add the cn() function.",
      tipTitle: "Pro Tip: Peer Dependencies",
      tipDesc:
        "If you encounter version conflicts with React 19 (which is currently in RC), use the --legacy-peer-deps flag during installation to ensure compatibility with Framer Motion.",
    },
  },
};

export type InstallDict = typeof enInstall;
