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
    default: "Grupo Interra — Parques industriales y desarrollos residenciales",
    template: "%s · Grupo Interra",
  },
  description:
    "Fortalecemos el desarrollo económico de Nuevo León construyendo parques industriales, desarrollos residenciales y espacios comerciales con infraestructura, servicios y amenidades de primer nivel.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Grupo Interra",
    title: "Grupo Interra — Parques industriales y desarrollos residenciales",
    description:
      "Parques industriales, desarrollos residenciales y espacios comerciales en Nuevo León.",
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
