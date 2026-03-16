import React from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { resend } from "@/lib/resend";
import { ContactFormEmail } from "@/emails/ContactFormEmail";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Veuillez remplir tous les champs." });
    }

    try {
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'LearnSup <onboarding@resend.dev>';
      const toEmail = process.env.SEND_EMAIL || 'contact@learnsup.com';

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `Contact Form: ${subject}`,
        replyTo: email,
        react: React.createElement(ContactFormEmail, { name, email, subject, message }),
      });

      if (error) {
        console.error("Erreur Resend:", error);
        return res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
      }

      return res.status(200).json({ message: "Message envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur:", error);
      return res.status(500).json({ message: "Une erreur est survenue." });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Méthode ${req.method} non autorisée.`);
}
