import * as React from "react";
import { MousePointerClick, HeartHandshake } from "lucide-react";
import { FiUsers, FiClock, FiMessageSquare, FiBarChart2 } from "react-icons/fi";
import { FeatureCardProps, KeyPointProps, ComparisonRow } from "@/lib/types";

export const features: FeatureCardProps[] = [
  {
    icon: <FiUsers className="text-4xl" />,
    title: "Apprentissage Collaboratif",
    description:
      "Travaillez en groupe, partagez vos connaissances et progressez ensemble.",
    badge: "Unique",
  },
  {
    icon: <FiClock className="text-4xl" />,
    title: "Flexibilité Totale",
    description: "Apprenez à votre rythme, quand vous voulez.",
  },
  {
    icon: <FiMessageSquare className="text-4xl" />,
    title: "Communication Instantanée",
    description:
      "Discutez en temps réel avec vos pairs et vos accompagnateurs.",
  },
];

export const keyPoints: KeyPointProps[] = [
  {
    icon: <MousePointerClick className="text-[var(--primary-blue)] text-xl" />,
    label: "Interface intuitive",
  },
  {
    icon: <HeartHandshake className="text-[var(--primary-blue)] text-xl" />,
    label: "Collaboration en temps réel",
  },
];

export const comparisonRows: ComparisonRow[] = [
  { label: "DarkMode", lsu: true, sp: false, tr: false },
  { label: "Système de récompense", lsu: true, sp: false, tr: false },
  { label: "Support prioritaire", lsu: true, sp: true, tr: true },
  { label: "Contenus interactifs", lsu: true, sp: false, tr: false },
  { label: "Accès hors ligne", lsu: true, sp: false, tr: false },
  { label: "Stockage de fichiers", lsu: true, sp: false, tr: false },
  {
    label: "Accès aux planning des utilisateurs",
    lsu: true,
    sp: false,
    tr: false,
  },
  { label: "Un suivi de l'élève", lsu: false, sp: true, tr: true },
  { label: "Conseiller à l'écoute", lsu: false, sp: false, tr: true },
];
