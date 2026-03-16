import React from "react";
import { NextApiRequest, NextApiResponse } from "next";
import { resend } from "@/lib/resend";
import { NewsletterWelcomeEmail } from "@/emails/NewsletterWelcomeEmail";

const emailRegex = /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "E-mail invalide. Veuillez vérifier le format." });
    }

    try {
      const audienceId = process.env.RESEND_AUDIENCE_ID;

      if (audienceId) {
        await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: audienceId,
        });
      } else {
        const fromEmail =
          process.env.RESEND_FROM_EMAIL ?? "LearnSup <no-reply@learnsup.fr>";

        await resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Bienvenue dans la newsletter LearnSup !",
          react: React.createElement(NewsletterWelcomeEmail),
        });
      }

      return res.status(200).json({ message: "Inscription réussie !" });
    } catch (error) {
      console.error("Erreur Resend:", error);
      return res
        .status(500)
        .json({ message: "Une erreur est survenue lors de l'inscription." });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Méthode ${req.method} non autorisée.`);
}
