import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "E-mail invalide." });
    }

    console.log("Nouvel e-mail enregistré :", email);

    return res.status(200).json({ message: "Inscription réussie !" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Méthode ${req.method} non autorisée.`);
}
