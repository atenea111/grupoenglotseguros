import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Headphones, Car, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { QuoteForm } from "@/components/quote-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl border-4 border-blue-500 bg-blue-100/70 p-4 sm:p-6 md:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Logos de Seguros */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Seguros</h2>
          <p className="text-lg text-center text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Trabajamos con compañías líderes. Confianza y respaldo en cada póliza.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch max-w-6xl mx-auto">
            {[
              { src: "/sancristobal.png", alt: "San Cristóbal Seguros" },
              { src: "/federacion patronal seguros.png", alt: "Federación Patronal Seguros" },
              { src: "/nacion seguros.png", alt: "La Nación Seguros" },
              { src: "/triunfo-seguros-auto-opiniones-removebg-preview.png", alt: "Triunfo Seguros" },
            ].map((logo) => (
              <div
                key={logo.src}
                className="bg-background border border-border rounded-xl p-4 sm:p-6 flex items-center justify-center transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative w-full h-20 sm:h-24 md:h-28">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain opacity-90 hover:opacity-100 transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">¿Quiénes somos?</h2>
            <p className="text-lg text-center text-muted-foreground leading-relaxed mb-12">
              Somos un equipo de productores asesores con más de 35 años de experiencia. Combinamos trayectoria con
              herramientas digitales para atención personalizada desde cualquier lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">¿Por qué elegirnos?</h2>
          <p className="text-lg text-center text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Soporte real, tecnología y asesoramiento profesional. Todo claro y simple. Te acompañamos en cada paso.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Soporte Real</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Atención humana y cercana cuando más lo necesitás
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Headphones className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Tecnología</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Herramientas digitales para gestionar todo desde donde estés
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Asesoramiento Profesional</h3>
                  <p className="text-muted-foreground leading-relaxed">Más de 35 años de experiencia a tu servicio</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">¿Qué puedo asegurar?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Car className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Vehículos</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">Auto • Moto • Pickup • Flota</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Riesgos varios</h3>
                  <ul className="text-left text-muted-foreground leading-relaxed space-y-2">
                    <li>Bicicletas y monopatines</li>
                    <li>ART</li>
                    <li>Accidentes personales</li>
                    <li>Combinado familiar (hogar)</li>
                    <li>Bolso protegido</li>
                    <li>Caución</li>
                    <li>Integral de comercio</li>
                    <li>Agrícolas de granizo</li>
                    <li>Personas</li>
                    <li>Praxis médica</li>
                    <li>Seguro técnico</li>
                    <li>Incendio</li>
                    <li>Vida</li>
                    <li>Transporte de mercadería</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Sobre nosotros</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                En E.G.T Seguros creemos que la confianza se construye con experiencia, cercanía y tecnología. Unimos la
                atención humana de siempre con la inmediatez digital de hoy.
              </p>
              <p className="font-semibold">
                Asegurar tu vehículo es moderno, claro y con respaldo. Estamos cerca, online y para vos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">¿Necesitás reportar un siniestro?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Accedé a nuestra guía completa y reportá tu siniestro de manera rápida y
            sencilla.
          </p>
          <Link href="/siniestros">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Ver Guía de Siniestros
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
