# Guide de Démarrage - LearnSup Vitrine

Ce document explique comment installer et lancer le projet localement.

## Prérequis

- **Node.js** (v18 ou supérieur recommandé)
- **npm** (inclus avec Node.js)

## Installation

1. Clonez le dépôt (si ce n'est pas déjà fait).
2. Installez les dépendances :

   ```bash
   npm install
   ```

## Configuration

Copiez le fichier `.env.example` vers `.env.local` et remplissez les variables nécessaires :

```bash
cp .env.example .env.local
```

### Variables requises

- `RESEND_API_KEY` : Votre clé API Resend.
- `RESEND_FROM_EMAIL` : L'adresse d'expédition (ex: `LearnSup <contact@votre-domaine.com>`).
- `SEND_EMAIL` : L'adresse de réception pour le formulaire de contact.
- `NEXT_PUBLIC_CLARITY_ID` : Votre ID Microsoft Clarity.

## Développement

Lancez le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Build pour la Production

Pour générer une version optimisée :

```bash
npm run build
npm run start
```

## Linting

Pour vérifier la qualité du code :

```bash
npm run lint
```
