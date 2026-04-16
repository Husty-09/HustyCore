import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { getDictionary } from "@/lib/dictionaries";

export const metadata: Metadata = {
  title: "HustyCore | Premium UI Library",
  description: "An open-source library of premium graphic components by Matheus Calonico",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="dark">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <Navbar dict={dict} currentLang={lang} />
        {children}
      </body>
    </html>
  );
}
