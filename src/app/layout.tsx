import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
