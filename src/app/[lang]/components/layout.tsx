import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";

export default async function ComponentsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "components-layout");

  const sidebarLinks = [
    {
      title: dict.sidebar.gettingStarted,
      links: [
        { name: dict.nav.components || "Introduction", href: `/${lang}/components` },
        { name: dict.nav.docs || "Documentation", href: `/${lang}/components/documentation` },
        { name: dict.nav.install || "Installation", href: `/${lang}/components/installation` },
      ]
    },
    {
      title: dict.sidebar.atomicBlocks,
      links: [
        { name: "Glow Button", href: `/${lang}/components/glow-button` },
        { name: "Glass Card", href: `/${lang}/components/glass-card` },
        { name: "Neon Badge", href: `/${lang}/components/neon-badge` },
      ]
    },
    {
      title: dict.sidebar.interactive,
      links: [
        { name: "Glass Input", href: `/${lang}/components/glass-input` },
        { name: "Motion Dropdown", href: `/${lang}/components/motion-dropdown` },
        { name: "Nexus Modal", href: `/${lang}/components/nexus-modal` },
      ]
    },
    {
      title: dict.sidebar.eyeCandy,
      links: [
        { name: "Aurora Background", href: `/${lang}/components/aurora-background` },
        { name: "Animated Grid", href: `/${lang}/components/animated-grid` },
        { name: "Glow Border", href: `/${lang}/components/glow-border` },
        { name: "Text Reveal", href: `/${lang}/components/text-reveal` },
      ]
    },
    {
      title: dict.sidebar.layoutShowcase,
      links: [
        { name: "Bento Grid", href: `/${lang}/components/bento-grid` },
        { name: "Infinite Marquee", href: `/${lang}/components/infinite-marquee` },
        { name: "3D Glare Card", href: `/${lang}/components/3d-glare-card` },
      ]
    }
  ];
  return (
    <div className="container relative flex-1 pt-24 md:pt-28 pb-10 mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
        
        {/* Sticky Sidebar */}
        <aside className="fixed md:sticky top-20 z-30 hidden w-full shrink-0 md:block md:w-56 lg:w-64 h-[calc(100vh-6rem)] overflow-y-auto pr-6 border-r border-border/40 pb-10">
          <div className="flex flex-col gap-6 pt-4">
            {sidebarLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h4 className="font-semibold text-sm tracking-tight text-foreground">{section.title}</h4>
                <div className="flex flex-col gap-1 border-l border-border/40 ml-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-1.5 text-sm text-muted-foreground hover:text-primary hover:border-l-primary/50 transition-colors border-l-2 border-transparent -ml-[1px]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 w-full animate-fade-in pl-0 md:pl-2">
          {children}
        </main>
      </div>
    </div>
  );
}
