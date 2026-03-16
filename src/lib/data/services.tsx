import { Trophy, Brain, Star, Sparkles, Heart, LucideIcon } from "lucide-react";

export interface Competitor {
  name: string;
  isUs: boolean;
}

export interface ComparisonFeature {
  name: string;
  values: boolean[];
  emoji: string;
}

export interface UniqueFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

export interface Benefit {
  text: string;
  icon: LucideIcon;
}

export const competitors: Competitor[] = [
  { name: "Learnsup", isUs: true },
  { name: "Superprof", isUs: false },
  { name: "Teach'R", isUs: false },
];

export const comparisonFeatures: ComparisonFeature[] = [
  {
    name: "Système de récompense",
    values: [true, false, false],
    emoji: "🏆",
  },
  {
    name: "Support prioritaire",
    values: [true, true, true],
    emoji: "⏱️",
  },
  {
    name: "Communauté active",
    values: [true, false, false],
    emoji: "🌟",
  },
  {
    name: "Prix accessible",
    values: [true, false, true],
    emoji: "💰",
  },
  { name: "Un suivi de l'étudiant", values: [false, true, true], emoji: "👨‍💻" },
];

export const uniqueFeatures: UniqueFeature[] = [
  {
    icon: Trophy,
    title: "Gamification",
    description:
      "Monte en niveau, débloque des badges, ... Apprendre n'a jamais été aussi fun !",
    color: "from-(--purple) to-(--purple-dark)",
    emoji: "🏆",
  },
  {
    icon: Brain,
    title: "Mentors Experts",
    description:
      "Des étudiants passionnés qui ont réussi et veulent t'aider. Pas de profs ennuyeux, juste de vrais mentors !",
    color: "from-(--green) to-[#7BC9A6]",
    emoji: "🧠",
  },
];

export const benefits: Benefit[] = [
  { text: "Interface intuitive et addictive", icon: Sparkles },
  { text: "Mentors passionnés", icon: Star },
  { text: "Communauté étudiante d'entraide", icon: Heart },
];
