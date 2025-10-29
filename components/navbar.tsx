import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logofinalnavbar-removebg-preview.png"
              alt="E.G.T Grupo Englot Seguros"
              width={640}
              height={320}
              quality={100}
              className="h-28 sm:h-36 md:h-40 lg:h-44 w-auto"
              priority
            />
          </Link>

          {/* Acciones desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5493402554953"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Button variant="outline" className="font-semibold bg-transparent">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </a>
            <Link href="/siniestros">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Siniestros
              </Button>
            </Link>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="bg-transparent">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-72">
                <div className="flex flex-col gap-3 mt-8">
                  <a
                    href="https://wa.me/5493402554953"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Button variant="outline" className="w-full font-semibold">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </a>
                  <Link href="/siniestros" className="w-full">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      Siniestros
                    </Button>
                  </Link>
                  <a
                    href="https://www.instagram.com/grupo.englot.seguros?igsh=ZjQzbWd5NHZ6MWZn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">Instagram</Button>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1D7FycuaEc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">Facebook</Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
