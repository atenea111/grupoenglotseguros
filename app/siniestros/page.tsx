import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, ClipboardList, Phone, FileText, Wrench, CheckCircle, Car, Shield } from "lucide-react"

export default function SiniestrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Car className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Qué hacer en caso de siniestro</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            En Grupo Englot Seguros te acompañamos en todo momento, especialmente cuando ocurre un siniestro. Por eso,
            te dejamos esta guía completa para que sepas qué hacer y qué datos reunir en cada paso del proceso.
          </p>
        </div>

        {/* Step 1 */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2 text-card-foreground">
                  1. Mantené la calma y priorizá la seguridad
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:pl-20">
            <ul className="space-y-2 text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Verificá que no haya heridos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Si alguien necesita asistencia médica, llamá inmediatamente al 911 o al servicio de emergencias.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Evitá discusiones en el lugar y tratá de mantener la calma.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Mové el vehículo solo si es seguro hacerlo, para no obstaculizar el tránsito.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2 text-card-foreground">
                  2. Reuní toda la información necesaria
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tomá nota o sacá fotos de todo lo siguiente (estos datos son fundamentales para iniciar la denuncia
                  del siniestro):
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:pl-20">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Datos tuyos (conductor asegurado):</h4>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Carnet de conducir del que manejaba el vehículo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>DNI del conductor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tarjeta verde o azul del vehículo (según corresponda).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comprobante del seguro (póliza o certificado digital).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nombre de la compañía aseguradora.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Número de póliza vigente.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Datos del hecho:</h4>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fecha exacta del accidente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hora del siniestro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dirección o intersección precisa donde ocurrió.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dirección en la que circulaba tu vehículo (sentido de marcha).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Condiciones del clima o visibilidad si fueran relevantes.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Datos del tercero involucrado:</h4>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nombre y apellido del otro conductor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Número de teléfono o correo electrónico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Patente del vehículo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nombre de su aseguradora.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Número de póliza (si la tiene visible o lo facilita).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fotos de los daños, patentes y del entorno del accidente.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2 text-card-foreground">
                  3. Comunicá el siniestro de inmediato
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Avisanos apenas puedas. Podés contactarnos por WhatsApp, teléfono o correo electrónico, las 24 horas:
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:pl-20">
            <a href="https://wa.me/5493402554953" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Reportar por WhatsApp
              </Button>
            </a>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Te vamos a indicar cómo proceder, qué documentación enviar y en qué plazos.
            </p>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2 text-card-foreground">4. Presentá la denuncia</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:pl-20">
            <ul className="space-y-2 text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>La denuncia del siniestro debe hacerse dentro de las 72 horas posteriores al hecho.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Nosotros te asistimos en la carga de la denuncia y el envío a tu compañía aseguradora.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Si el tercero te pide firmar documentos o asumir culpas, no firmes nada sin antes consultarnos.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2 text-card-foreground">5. Inspección y reparación</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:pl-20">
            <ul className="space-y-2 text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>La aseguradora designará un perito o inspector para evaluar los daños.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Una vez aprobada la reparación, te informamos el taller asignado o gestionamos tu preferencia.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Durante todo el proceso, te mantenemos informado por WhatsApp o email.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Step 6 */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl mb-2 text-card-foreground">
                  6. Seguimiento y cierre del siniestro
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pl-20">
            <p className="text-muted-foreground leading-relaxed mb-2">
              Nos encargamos de hacer el seguimiento hasta que tu caso esté completamente resuelto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro compromiso es que no tengas que preocuparte por nada más que tu tranquilidad.
            </p>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="mt-12 bg-accent text-accent-foreground rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Grupo Englot Seguros</h3>
          <p className="text-accent-foreground/80 mb-1">📍 Rosario, Santa Fe — Atención en todo el país</p>
          <p className="text-accent-foreground/90 font-medium">💬 Tu tranquilidad, nuestra prioridad.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
