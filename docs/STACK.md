# Stack Technique - LearnSup Vitrine

Ce document détaille les outils et versions utilisés, ainsi que les raisons de ces choix.

## Core Framework
- **Next.js 16** : Choisi pour ses performances de rendu (SSR/SSG), son routing basé sur le dossier `pages` et son support natif de TypeScript.
- **React 19** : Utilisation des dernières fonctionnalités de React pour une gestion fluide de l'UI.
- **TypeScript 5** : Typage fort pour réduire les erreurs en production et améliorer l'autocomplétion.

## Styling & UI
- **Tailwind CSS 4** : Pour un styling rapide, utilitaire et ultra-performant.
- **Framer Motion 12** : Bibliothèque d'animation pour rendre l'interface "vivante" et interactive.
- **Lucide React** : Set d'icônes légères et modernes.
- **React Hot Toast** : Système de notifications léger pour les retours utilisateurs (succès/erreur).

## Backend & Services
- **Resend** : Service d'envoi d'emails moderne avec support natif pour React Email.
- **Microsoft Clarity** : Outil d'analyse comportementale (heatmaps, sessions) respectueux des performances.
- **Docker** : Conteneurisation pour garantir un environnement identique en dév et en prod.

## Outils de Qualité
- **ESLint 10** : Analyse statique du code pour maintenir des standards élevés.
- **PostCSS 8** : Transformation du CSS pour la compatibilité navigateur.
- **Turbopack** : Utilisé en développement pour des temps de compilation extrêmement courts.
