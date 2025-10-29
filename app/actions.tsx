"use server"

export async function submitQuoteForm(formData: FormData) {
  const data = {
    // Datos del vehículo
    email: formData.get("email"),
    marca: formData.get("marca"),
    año: formData.get("año"),
    combustible: formData.get("combustible"),
    // Datos del asegurado
    dni: formData.get("dni"),
    telefono: formData.get("telefono"),
    ciudad: formData.get("ciudad"),
    codigoPostal: formData.get("codigoPostal"),
  }

  // In production, you would use a service like Resend, SendGrid, or Nodemailer
  try {
    // For now, we'll just log the data
    console.log("[v0] Form submission:", data)

    // TODO: Implement actual email sending to ezegonzalez800@gmail.com
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'ezegonzalez800@gmail.com',
    //   subject: 'Nueva Cotización - E.G.T Seguros',
    //   html: `<h2>Nueva solicitud de cotización</h2>...`
    // })

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    return { success: false, error: "Error al enviar el formulario" }
  }
}
