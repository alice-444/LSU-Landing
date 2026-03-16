import {
  Users,
  BarChart3,
  Shield,
  Headphones,
  TrendingUp,
  Sparkles,
  Zap,
  Target,
  Rocket,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

export interface Feature {
  text: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  emoji: string;
  color: string;
}

export const benefits: Benefit[] = [
  {
    icon: Users,
    title: "Tableau de Bord Admin",
    description:
      "Suivez les progrès de tous vos étudiants en temps réel avec des rapports détaillés et des analytics ultra-puissants.",
    color: "from-(--brand-orange) to-(--brand-orange-dark)",
    emoji: "📊",
  },
  {
    icon: BarChart3,
    title: "Rapports Personnalisés",
    description:
      "Générez des rapports sur mesure pour analyser les performances par classe, niveau ou matière en quelques clics.",
    color: "from-(--primary-blue) to-(--blue)",
    emoji: "📈",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description:
      "Conforme RGPD avec authentification SSO et gestion des rôles. Vos données sont en sécurité dans l'UE.",
    color: "from-(--green) to-[#7BC9A6]",
    emoji: "🔒",
  },
  {
    icon: Headphones,
    title: "Support Dédié",
    description:
      "Un gestionnaire de compte dédié et une assistance prioritaire 24/7 pour votre établissement.",
    color: "from-(--purple) to-(--purple-dark)",
    emoji: "💬",
  },
];

export const features: Feature[] = [
  { text: "Licences en volume avec tarifs dégressifs", icon: TrendingUp },
  { text: "Intégration avec vos systèmes LMS existants", icon: Zap },
  { text: "Personnalisation aux couleurs de votre école", icon: Sparkles },
  { text: "Ateliers sur mesure adaptés à vos programmes", icon: Target },
  { text: "Statistiques et rapports avancés", icon: BarChart3 },
  { text: "Stockage de données sécurisé dans l'UE", icon: Shield },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Démo Personnalisée",
    description:
      "On vous montre comment Learnsup s'adapte à votre établissement",
    icon: MessageSquare,
    emoji: "👋",
    color: "from-(--brand-orange) to-(--brand-orange-dark)",
  },
  {
    step: "02",
    title: "Configuration Sur Mesure",
    description: "On configure la plateforme selon vos besoins spécifiques",
    icon: Target,
    emoji: "⚙️",
    color: "from-(--primary-blue) to-(--blue)",
  },
  {
    step: "03",
    title: "Formation des Équipes",
    description: "Vos enseignants sont formés et prêts à démarrer",
    icon: Users,
    emoji: "👨‍🏫",
    color: "from-(--purple) to-(--purple-dark)",
  },
  {
    step: "04",
    title: "Déploiement & Suivi",
    description: "On reste à vos côtés pour garantir votre succès",
    icon: Rocket,
    emoji: "🎯",
    color: "from-(--green) to-[#7BC9A6]",
  },
];
