import { Star, Zap, School, LucideIcon } from "lucide-react";

export interface PricingPlan {
  name: string;
  price: { monthly: number; annual: number } | null;
  description: string;
  icon: LucideIcon;
  emoji: string;
  color: string;
  badgeText?: string;
  badgeColor: string;
  popular?: boolean;
  features: string[];
  limitations: string[];
  cta: string;
  highlight: boolean;
  savings?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  emoji: string;
  category: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Gratuit",
    price: { monthly: 0, annual: 0 },
    description: "Parfait pour tester et découvrir",
    icon: Star,
    emoji: "⭐",
    color: "from-[#A8D5BA] to-[#7BC9A6]",
    badgeText: "Découverte",
    badgeColor: "bg-[#A8D5BA]",
    features: [
      "Accès à 20 ateliers essentiels",
      "Progression basique",
      "Communauté étudiante",
      "n credits par mois",
    ],
    limitations: ["Ateliers limités", "Pas de certificats"],
    cta: "Commencer Gratuitement",
    highlight: false,
  },
  {
    name: "Premium",
    price: { monthly: 9.99, annual: 7.99 },
    description: "Le meilleur rapport qualité/prix 🔥",
    icon: Zap,
    emoji: "⚡",
    color: "from-[#FFB647] to-[#FF9500]",
    badgeText: "Le Plus Populaire",
    badgeColor: "bg-linear-to-r from-[#FFB647] to-[#FF9500]",
    popular: true,
    features: [
      "Accès illimité à TOUS les ateliers",
      "Système de gamification",
      "Certificats reconnus",
      "Statistiques détaillées",
      "Support prioritaire (24h)",
      "Badges exclusifs à débloquer",
    ],
    limitations: [],
    cta: "Choisir Premium",
    highlight: true,
    savings: "24€/an",
  },
  {
    name: "Etablissement",
    price: null,
    description: "Pour les écoles en études supérieures",
    icon: School,
    emoji: "👑",
    color: "from-[#C9A0DC] to-[#A66FD9]",
    badgeColor: "bg-linear-to-r from-[#C9A0DC] to-[#A66FD9]",
    features: ["TOUT du plan Premium"],
    limitations: [],
    cta: "Contactez-nous pour un devis",
    highlight: false,
  },
];

export const faqs: FAQ[] = [
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express), PayPal, et les virements bancaires pour les abonnements annuels.",
    emoji: "💳",
    category: "Paiement",
  },
  {
    question: "Puis-je changer de plan à tout moment ?",
    answer:
      "Oui ! Vous pouvez upgrader ou downgrader votre plan à tout moment. Si vous upgradez, vous ne payez que la différence au prorata. Si vous downgrader, le crédit restant sera appliqué à votre prochaine facture.",
    emoji: "🔄",
    category: "Abonnement",
  },
  {
    question: "Comment fonctionne l'abonnement annuel ?",
    answer:
      "L'abonnement annuel vous fait économiser jusqu'à 20% par rapport au paiement mensuel. Vous payez une seule fois pour 12 mois d'accès complet à la plateforme.",
    emoji: "💰",
    category: "Abonnement",
  },
  {
    question: "Puis-je annuler mon abonnement ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre compte. L'annulation prend effet à la fin de la période de facturation en cours, vous conservez donc l'accès jusqu'à cette date.",
    emoji: "✅",
    category: "Abonnement",
  },
  {
    question: "Les prix incluent-ils la TVA ?",
    answer:
      "Les prix affichés sont hors taxes. La TVA applicable sera ajoutée lors du paiement en fonction de votre pays de résidence.",
    emoji: "📊",
    category: "Tarifs",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer:
      "Non, absolument aucun frais caché. Le prix que vous voyez est le prix que vous payez. Aucun frais de résiliation, aucun frais supplémentaire.",
    emoji: "🚫",
    category: "Tarifs",
  },
  {
    question: "Proposez-vous des réductions pour les étudiants ?",
    answer:
      "Nos tarifs sont déjà pensés pour les étudiants ! Cependant, nous proposons parfois des promotions spéciales. Inscrivez-vous à notre newsletter pour ne rien manquer.",
    emoji: "🎓",
    category: "Tarifs",
  },
  {
    question: "Est-ce que je reçois une facture ?",
    answer:
      "Oui, une facture est automatiquement générée et envoyée par email après chaque paiement. Vous pouvez également télécharger toutes vos factures depuis votre espace personnel.",
    emoji: "📧",
    category: "Paiement",
  },
  {
    question: "Que se passe-t-il si je rate un paiement ?",
    answer:
      "Si un paiement échoue, nous vous enverrons un email de rappel. Vous aurez 7 jours pour mettre à jour vos informations de paiement avant que votre compte ne soit suspendu. Vos données restent sauvegardées.",
    emoji: "⚠️",
    category: "Paiement",
  },
];

export const faqCategories = ["Tout", "Paiement", "Abonnement", "Tarifs"];
