import Link from "next/link";

const sidebarLinks = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/components" },
      { name: "Installation", href: "/components/installation" },
    ]
  },
  {
    title: "Atomic Blocks",
    links: [
      { name: "Glow Button", href: "/components/glow-button" },
      { name: "Glass Card", href: "/components/glass-card" },
      { name: "Neon Badge", href: "/components/neon-badge" },
    ]
  },
  {
    title: "Interactive Components",
    links: [
      { name: "Glass Input", href: "/components/glass-input" },
      { name: "Motion Dropdown", href: "/components/motion-dropdown" },
      { name: "Nexus Modal", href: "/components/nexus-modal" },
    ]
  }
];

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
