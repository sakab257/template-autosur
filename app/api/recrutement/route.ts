import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const message = formData.get('message') as string
        const cvFile = formData.get('cv') as File | null

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Tous les champs obligatoires doivent être remplis' },
                { status: 400 }
            )
        }

        // Configuration du transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Préparer les pièces jointes
        const attachments: nodemailer.SendMailOptions['attachments'] = []

        if (cvFile && cvFile.size > 0) {
            const buffer = Buffer.from(await cvFile.arrayBuffer())
            attachments.push({
                filename: cvFile.name,
                content: buffer,
            })
        }

        // Contenu de l'email
        const mailOptions: nodemailer.SendMailOptions = {
            from: `"Formulaire Recrutement" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: `Nouvelle candidature de ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                        Nouvelle candidature spontanée
                    </h2>

                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; background-color: #f1f5f9; font-weight: bold; width: 120px;">Nom</td>
                            <td style="padding: 10px; background-color: #f8fafc;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; background-color: #f1f5f9; font-weight: bold;">Email</td>
                            <td style="padding: 10px; background-color: #f8fafc;">
                                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                            </td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px;">
                        <h3 style="color: #334155; margin-bottom: 10px;">Message</h3>
                        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                    </div>

                    ${cvFile ? `
                    <div style="margin-top: 20px; padding: 10px; background-color: #dbeafe; border-radius: 8px;">
                        <strong>CV joint :</strong> ${cvFile.name}
                    </div>
                    ` : ''}

                    <p style="margin-top: 30px; color: #64748b; font-size: 12px;">
                        Ce message a été envoyé depuis le formulaire de recrutement du site.
                    </p>
                </div>
            `,
            attachments,
        }

        // Envoyer l'email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Erreur envoi email:', error)
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email' },
            { status: 500 }
        )
    }
}
