# Architecture du Projet - LearnSup Vitrine

Ce document détaille les choix techniques et l'organisation du projet.

## Stack Technologique

- **Framework** : [Next.js](https://nextjs.org/) (Version 16, avec support Turbopack en dév).
- **Styles** : [Tailwind CSS](https://tailwindcss.com/) (Version 4).
- **Animations** : [Framer Motion](https://www.framer.com/motion/).
- **Mailing** : [Resend](https://resend.com/).
- **Analytics** : [Microsoft Clarity](https://clarity.microsoft.com/).
- **Formulaires** : [React Hook Form](https://react-hook-form.com/).

## Structure des Dossiers

```text
├───public/         # Fichiers statiques (images, polices, logo)
│   ├───typo/       # Police Omnes
│   └───logo/       # Logos officiels
├───src/
│   ├───components/
│   │   ├───ui/         # Composants primitifs et réutilisables (PricingCard, FAQItem, FormField…)
│   │   ├───shared/     # Composants transversaux présents sur toutes les pages (Navbar, Footer, CTA, Newsletter, Clarity…)
│   │   └───domain/     # Composants spécifiques à une page ou fonctionnalité
│   │       ├───home/
│   │       ├───contact/
│   │       ├───pricing/
│   │       ├───faq/
│   │       ├───learnsup/
│   │       ├───legal/
│   │       ├───school/
│   │       └───services/
│   ├───emails/     # Templates d'emails (React components)
│   ├───lib/        # Types et données statiques
│   ├───pages/      # Pages du site et routes d'API
│   └───styles/     # Styles globaux CSS
└───docker/         # Configuration Docker (Dev et Prod)
```

## Routes d'API (`src/pages/api/`)

### `POST /api/newsletter`

Enregistre un utilisateur à la newsletter.

- Utilise `RESEND_AUDIENCE_ID` si configuré pour ajouter un contact.
- Sinon, envoie un email de bienvenue via le template `NewsletterWelcomeEmail`.

### `POST /api/contact`

Envoie un email via Resend lors de la soumission du formulaire de contact.

- Utilise le template `ContactFormEmail`.
- Les emails sont envoyés à l'adresse définie par `SEND_EMAIL`.
