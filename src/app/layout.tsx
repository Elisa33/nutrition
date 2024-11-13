import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutricion- Mariel Martinez",
  description: "Cmienza a nutrir tu vida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
