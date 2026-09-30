import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niche Artisanal Extrait de Parfum",
  description: "Parisian luxury extrait with 25% fragrance concentration. Leather, oud, and dark amber in 50ml crystal flacon....",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}
