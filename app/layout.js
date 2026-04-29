import { Bebas_Neue, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const accent = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
});

export const metadata = {
  title: {
    default: "Distribuidores SR",
    template: "%s | Distribuidores SR",
  },
  description:
    "Distribuidores oficiales de Carnes San Martin con tienda virtual, sucursales en Granada y Masaya, y acceso interno para operacion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${sans.variable} ${display.variable} ${accent.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
