import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "HustyCore | Premium UI Library",
  description: "An open-source library of premium graphic components by Matheus Calonico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
