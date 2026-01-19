import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E.G.T Grupo Englot Seguros",
  description: "Tu tranquilidad, nuestra prioridad",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/5493417445610"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50"
          aria-label="WhatsApp"
        >
          <span className="sr-only">Contactar por WhatsApp</span>
          <div className="bg-[#25D366] text-white rounded-full shadow-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:shadow-xl transition animate-bounce hover:animate-none">
            {/* Logo WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.54 4.1 1.56 5.9L0 24l6.27-1.63A11.96 11.96 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.06-1.36l-.36-.21-3.72.97.99-3.63-.23-.37A9.95 9.95 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.65-7.35c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.21-.18.2-.36.23-.66.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.06-.38-.02-.54-.08-.16-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.52.08-.79.38-.27.31-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.08 3.17 5.03 4.45.7.3 1.25.47 1.67.6.7.22 1.34.19 1.85.11.57-.08 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.6-.37Z" />
            </svg>
          </div>
        </a>
        <Analytics />
      </body>
    </html>
  )
}
