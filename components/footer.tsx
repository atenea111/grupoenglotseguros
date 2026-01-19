import { MapPin, Phone, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Oficinas Section - Centered */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-accent">OFICINAS</h3>
            <div className="space-y-6">
              {/* Rosario - Sorrento */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Rosario:</p>
                    <p>Sorrento 1270 (Estación Puma Energy)</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5493417445610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>341 7445610</span>
                </a>
              </div>

              {/* Rosario - Santa Fe */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Rosario:</p>
                    <p>Santa Fe 5482 (estación esi Gnc)</p>
                  </div>
                </div>
                <a
                  href="tel:+5493413292618"
                  className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>3413 292618</span>
                </a>
              </div>

              {/* Social Media */}
              <div className="flex flex-col items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/grupo.englot.seguros?igsh=ZjQzbWd5NHZ6MWZn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Grupo.englot.seguros</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1D7FycuaEc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Grupo Englot Seguros</span>
                </a>
              </div>
            </div>
          </div>

          {/* SSN Logo - Centered Below */}
          <div className="flex justify-center items-center pt-6 border-t border-primary-foreground/20 w-full">
            <Image
              src="/ssn-logo.png"
              alt="Productor matrícula 94433 autorizado por la Superintendencia de Seguros de la Nación (SSN)"
              width={400}
              height={80}
              className="h-auto w-auto max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} E.G.T Grupo Englot Seguros. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
