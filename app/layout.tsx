import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://flautaflow.vercel.app";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json",
  
  // --- Conteúdo Principal ---
  title: "FlautaFlow - Digitação Interativa",
  description: "Aplicação interativa para aprender as digitações das notas musicais na flauta transversal. Pratique e memorize com pauta e diagrama.",
  keywords: ["flautaflow", "flauta flow", "flute flow", "fluteflow", "flauta transversal", "digitação de flauta", "notas musicais", "aprender música", "tutorial de flauta", "pauta musical"],

  // --- Verificação para Motores de Busca ---
  verification: {
      google: "Yxyyrxgiwqhpk81mvFANHNCqmPAZQVsuAgJ1nyoVsVU",
  },

  // --- Autoria e SEO ---
  authors: [{ name: "Matheus Alcântara", url: siteUrl }],
  creator: "Matheus Alcântara",
  publisher: "Matheus Alcântara",
  robots: {
      index: true,
      follow: true,
      googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
    }
  },

  // ... TODO: Adicionar as tags Open Graph para redes sociais depois!
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        {children}
        <footer className="w-full border-t border-slate-800 p-4 text-center">
          <p className="text-sm text-slate-500">
              Desenvolvido com ❤ por{' '}
              <a
                  href="https://instagram.com/matheusalcantaraofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-indigo-400 hover:decoration-indigo-400"
              >
                  Matheus
              </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
