import type { Metadata, Viewport } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";

/**
 * Substitución declarada por el sistema de diseño: Archivo (display) y Barlow
 * (cuerpo) son lo más cercano en Google Fonts al logotipo original. Si el
 * cliente entrega las fuentes reales, cámbialas por next/font/local.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Interra — Tierra con vocación, lista para construirse",
    template: "%s · Grupo Interra",
  },
  description:
    "Adquirimos, urbanizamos y comercializamos reservas territoriales residenciales, industriales y comerciales en el Bajío mexicano.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Grupo Interra",
    title: "Grupo Interra — Tierra con vocación, lista para construirse",
    description:
      "Reservas territoriales residenciales, industriales y comerciales en el corredor Querétaro–Bajío.",
  },
};

export const viewport: Viewport = {
  themeColor: "#002639",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${archivo.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
