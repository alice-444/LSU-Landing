# Patterns et Conventions - LearnSup Vitrine

Ce document décrit les conventions de code et les modèles de conception suivis dans le projet.

## Composants (React)
- **Organisation** : Séparés en trois couches dans `src/components/` :
  - `ui/` — composants primitifs et réutilisables sans logique métier (ex: `PricingCard`, `FAQItem`, `FormField`).
  - `shared/` — composants transversaux présents sur toutes les pages (ex: `Navbar`, `Footer`, `CTA`, `Newsletter`, `Clarity`).
  - `domain/` — composants spécifiques à une page ou fonctionnalité, organisés par sous-dossier (ex: `domain/home/Hero.tsx`, `domain/pricing/FAQSection.tsx`).
- **Interfaces** : Définies clairement au-dessus du composant ou dans `src/lib/types.ts`.
- **Animations** : Centralisées via Framer Motion pour garantir la fluidité sur tous les supports.

## Gestion des Formulaires
- Utilisation systématique de **React Hook Form**.
- Validation côté client via des regex (`emailRegex`) et des contraintes de champs (required, pattern).
- Retour immédiat à l'utilisateur via **React Hot Toast**.

## Routes d'API (Next.js)
- Toutes les routes d'API doivent comporter une validation de la méthode (ex: `if (req.method !== 'POST') return res.status(405).end()`).
- Utilisation de `try/catch` pour capturer les erreurs d'API tierces (Resend).
- Retour d'un code statut approprié (200, 400, 405, 500) avec un message clair.

## Mailing
- Séparation du template (`src/emails/`) et de la logique d'envoi (`src/pages/api/`).
- Les templates doivent rester simples et utiliser des styles inline (pour garantir la compatibilité client mail).

## Typographie
- Utilisation de la variable CSS `--font-omnes` via Tailwind (`font-sans`).
- Ne pas définir de police en dur dans les fichiers pour permettre une maintenance centralisée.
