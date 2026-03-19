import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nelson Rippes · TecnoBeer",
  description: "Portafolio de Nelson Rippes — artesano cervecero apasionado por crear experiencias únicas en cada sorbo.",
  keywords: ["cerveza artesanal", "craft beer", "TecnoBeer", "Nelson Rippes", "Chile"],
  openGraph: {
    title: "Nelson Rippes · TecnoBeer",
    description: "Artesano cervecero. Cada cerveza cuenta una historia.",
    images: ["/images/hero-beer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
