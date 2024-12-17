import { NextApiRequest, NextApiResponse } from "next";

const emailRegex = /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "E-mail invalide. Veuillez vérifier le format." });
    }

    console.log("Nouvel e-mail enregistré :", email);

    return res.status(200).json({ message: "Inscription réussie !" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Méthode ${req.method} non autorisée.`);
}
