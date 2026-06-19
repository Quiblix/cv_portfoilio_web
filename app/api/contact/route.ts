import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'antoine.heurtevent1@gmail.com';
const SENDER_EMAIL = 'no-reply@vlrnt.dev';

let defaultTransporter = null as any;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  defaultTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const mailOptions = {
      from: `${name} <${SENDER_EMAIL}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Nouveau message de ${name} (${email})`,
      text: `Nom / Prénom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      html: `<p><strong>Nom / Prénom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Message :</strong></p><p>${message.replace(/\n/g, '<br />')}</p>`,
    };

    // Use configured transporter if available, otherwise use a test account in dev
    if (defaultTransporter) {
      const info = await defaultTransporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return NextResponse.json({ success: true });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      const testTransporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      const info = await testTransporter.sendMail(mailOptions);
      const preview = nodemailer.getTestMessageUrl(info);
      console.log('Ethereal preview URL:', preview);
      return NextResponse.json({ success: true, preview });
    }
  } catch (error: any) {
    console.error('Contact API error:', error);
    const message = (error && error.message) ? String(error.message) : 'Erreur lors de l’envoi du message.';
    // Retourne le message d'erreur pour faciliter le debug en local. Retirer en production.
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
