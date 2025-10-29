"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// Eliminado EmailJS: ahora el formulario abre WhatsApp con el mensaje prellenado

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData(event.currentTarget)

      const email = String(formData.get("email") || "")
      const marca = String(formData.get("marca") || "")
      const anio = String(formData.get("año") || "")
      const combustible = String(formData.get("combustible") || "")
      const dni = String(formData.get("dni") || "")
      const telefono = String(formData.get("telefono") || "")
      const ciudad = String(formData.get("ciudad") || "")
      const codigoPostal = String(formData.get("codigoPostal") || "")

      const now = new Date()
      const formattedDate = now.toLocaleString("es-AR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })

      const message = [
        "📝 Nueva solicitud de cotización",
        `📅 ${formattedDate}`,
        "",
        "— Vehículo —",
        `• Marca/Modelo: ${marca}`,
        `• Año: ${anio}`,
        `• Combustible: ${combustible}`,
        "",
        "— Asegurado —",
        `• Email: ${email}`,
        `• DNI: ${dni}`,
        `• Teléfono: ${telefono}`,
        `• Ciudad: ${ciudad}`,
        `• Código Postal: ${codigoPostal}`,
      ].join("\n")

      // Número de WhatsApp de destino (sin símbolos). Si es necesario, agrega el código de país.
      const phoneNumber = "3402554953"
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

      window.open(waUrl, "_blank")

      setIsSubmitting(false)
      setSubmitStatus({ success: true, message: "¡Formulario enviado con éxito! Nos contactaremos pronto." })
      event.currentTarget.reset()
    } catch (error) {
      console.error("[v0] WhatsApp open error:", error)
      setIsSubmitting(false)
      setSubmitStatus({ success: false, message: "Error al enviar el formulario. Por favor, intenta nuevamente." })
    }
  }

  return (
    <Card className="max-w-2xl mx-auto border-border">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-center text-card-foreground">Cotizá tu Seguro</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Datos del Vehículo */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Datos del Vehículo</h3>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="border-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marca">Marca y Modelo (Auto o Moto) *</Label>
              <Input
                id="marca"
                name="marca"
                type="text"
                placeholder="Ej: Toyota Corolla / Honda Wave"
                required
                className="border-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="año">Año del Vehículo *</Label>
              <Input
                id="año"
                name="año"
                type="number"
                placeholder="2024"
                min="1900"
                max="2025"
                required
                className="border-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="combustible">Combustible *</Label>
              <Select name="combustible" required>
                <SelectTrigger className="border-input">
                  <SelectValue placeholder="Seleccioná el tipo de combustible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nafta">Nafta</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="gnc">GNC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Datos del Asegurado */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Datos del Asegurado</h3>

            <div className="space-y-2">
              <Label htmlFor="dni">DNI *</Label>
              <Input id="dni" name="dni" type="text" placeholder="12345678" required className="border-input" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="3402554953"
                required
                className="border-input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ciudad">Ciudad *</Label>
                <Input id="ciudad" name="ciudad" type="text" placeholder="Rosario" required className="border-input" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="codigoPostal">Código Postal *</Label>
                <Input
                  id="codigoPostal"
                  name="codigoPostal"
                  type="text"
                  placeholder="2000"
                  required
                  className="border-input"
                />
              </div>
            </div>
          </div>

          {submitStatus && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full font-semibold" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Cotización"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
