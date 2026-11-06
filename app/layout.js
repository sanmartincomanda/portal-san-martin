import { Space_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site-data.mjs";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carnes San Martín | El mejor sabor, cerca de vos",
    template: "%s | Carnes San Martín",
  },
  description:
    "Descubrí las líneas Gold, Parrillera y Diaria de Carnes San Martín. Comprá en línea o visitanos en Granada, Masaya y Nindirí, Nicaragua.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_NI",
    url: SITE_URL,
    siteName: "Carnes San Martín · Distribuidores SR",
    title: "La carne perfecta. Todos los días.",
    description:
      "Cortes Gold, parrilladas y el sabor de cada día. Descubrí Carnes San Martín en Granada, Masaya y Nindirí.",
    images: [
      {
        url: "/brand/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Carne a la parrilla, Carnes San Martín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La carne perfecta. Todos los días.",
    images: ["/brand/og-cover.jpg"],
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};
export default function RootLayout({ children }) {
  return (
    <html lang="es-NI">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
