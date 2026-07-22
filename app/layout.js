import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sanmartinsr.com"),
  title: {
    default: "Carnes San Mart\u00edn | Tiendas en Granada, Masaya y Nindir\u00ed",
    template: "%s | Carnes San Mart\u00edn",
  },
  description:
    "Carne nicarag\u00fcense con est\u00e1ndares internacionales. Conoce nuestras tiendas en Granada, Masaya y Nindir\u00ed, compra en l\u00ednea y descubre la calidad de Carnes San Mart\u00edn.",
  keywords: [
    "Carnes San Mart\u00edn",
    "carne Nicaragua",
    "cortes de carne",
    "carne premium",
    "Carnes San Mart\u00edn Granada",
    "Carnes San Mart\u00edn Masaya",
    "Carnes San Mart\u00edn Nindir\u00ed",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_NI",
    url: "/",
    siteName: "Carnes San Mart\u00edn",
    title: "Carnes San Mart\u00edn | Carne nicarag\u00fcense con calidad internacional",
    description:
      "Tiendas, productos, calidad, exportaciones y compra en l\u00ednea de Carnes San Mart\u00edn.",
    images: [
      {
        url: "/nindiri-express.jpeg",
        width: 1600,
        height: 740,
        alt: "Sucursal Carnes San Mart\u00edn Nindir\u00ed Express",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnes San Mart\u00edn",
    description:
      "Carne nicarag\u00fcense, tiendas locales y compra en l\u00ednea.",
    images: ["/nindiri-express.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${sans.variable} ${display.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
