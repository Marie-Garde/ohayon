export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { firstname, lastname, email, phone, subject, message } = body

  const subjectLabels: Record<string, string> = {
    devis: 'Demande de devis',
    rdv: 'Prise de rendez-vous',
    info: "Demande d'informations",
    collaboration: 'Candidature / collaboration',
    autre: 'Autre',
  }

  const toEmail = subject === 'collaboration'
    ? process.env.BREVO_TO_EMAIL_RH!
    : process.env.BREVO_TO_EMAIL!

  const result = await $fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: {
      sender: { email: process.env.BREVO_FROM_EMAIL, name: process.env.BREVO_FROM_NAME },
      to: [{ email: toEmail }],
      replyTo: { email, name: `${firstname} ${lastname}` },
      subject: `[Contact] ${subjectLabels[subject] ?? subject}`,
      textContent: `
Nouveau message reçu via le formulaire de contact.

Prénom : ${firstname}
Nom : ${lastname}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Objet : ${subjectLabels[subject] ?? subject}

Message :
${message}
      `.trim(),
    },
  })

  console.log('Brevo response:', JSON.stringify(result))

  return { success: true }
})
