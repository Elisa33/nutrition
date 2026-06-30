import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutrición — Mariel Martínez",
  description:
    "Comienza a nutrir tu vida. Asesoramiento nutricional personalizado con enfoque integral.",
  keywords:
    "nutrición, nutricionista, dieta, alimentación saludable, Buenos Aires, Mariel Martínez",
  openGraph: {
    title: "Nutrición — Mariel Martínez",
    description:
      "Comienza a nutrir tu vida. Asesoramiento nutricional personalizado.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&family=Seaweed+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-base">{children}</body>
    </html>
  );
}
