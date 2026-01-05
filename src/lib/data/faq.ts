export interface FAQ {
  question: string;
  answer: string;
  emoji: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "C'est quoi LearnSup ?",
    answer:
      "LearnSup est une plateforme d'apprentissage collaboratif qui permet aux étudiants de progresser ensemble, de partager leurs connaissances et de s'entraider dans leur parcours éducatif, personnel et professionnel.",
    emoji: "🎓",
    category: "Général",
  },
  {
    question: "LearnSup est-il gratuit ?",
    answer:
      "LearnSup propose une version gratuite avec des fonctionnalités de base, ainsi que des abonnements premium qui offrent des fonctionnalités avancées pour une expérience d'apprentissage optimale.",
    emoji: "💰",
    category: "Tarifs",
  },
  {
    question: "Comment fonctionne LearnSup ?",
    answer:
      "L'apprentissage collaboratif sur LearnSup se fait à travers des activités entre pairs et un espace de discussion où les étudiants peuvent échanger et s'entraider.",
    emoji: "⚙️",
    category: "Fonctionnalités",
  },
  {
    question: "Qui peut utiliser LearnSup ?",
    answer:
      "LearnSup est conçu pour tous les étudiants, quel que soit leur niveau d'études. Que vous soyez au lycée, à l'université ou en formation continue, notre plateforme s'adapte à vos besoins.",
    emoji: "👥",
    category: "Général",
  },
  {
    question: "Comment puis-je commencer ?",
    answer:
      "Pour commencer, créez simplement un compte gratuit sur notre plateforme. Une fois inscrit, vous aurez accès à toutes les fonctionnalités de base et pourrez commencer à interagir avec la communauté.",
    emoji: "🚀",
    category: "Démarrage",
  },
  {
    question: "Comment réserver un atelier ?",
    answer:
      "Pour réserver un atelier, connectez-vous à votre compte, parcourez les ateliers disponibles et cliquez sur 'Réserver'. Vous recevrez une confirmation par email avec tous les détails de l'atelier.",
    emoji: "📅",
    category: "Fonctionnalités",
  },
];

export const faqCategories = [
  "Tout",
  "Général",
  "Démarrage",
  "Fonctionnalités",
  "Tarifs",
];
