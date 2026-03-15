# Design et Identité Visuelle - LearnSup Vitrine

Ce document détaille les éléments visuels et les composants graphiques du site.

## Couleurs Principales

Les couleurs sont définies dans `src/styles/globals.css` et utilisées via des variables CSS.

- **Orange Primaire** : `#FFB647` (`--primary-orange`)
- **Orange Foncé** : `#e69a2f` (`--primary-orange-dark`)
- **Fonds Alternatifs** : `#fffaf5` (Utilisé pour les fonds doux).

### Utilisation de l'Orange
L'orange est la couleur d'accentuation principale pour les boutons, les icônes et les en-têtes.

## Typographie : Omnes

La police **Omnes** est utilisée pour l'ensemble du site. Elle est chargée localement pour garantir la performance et le respect de la DA.

- **Emplacement** : `public/typo/omnes/`
- **Configuration** : `src/pages/_app.tsx` via `next/font/local`.
- **Intégration Tailwind** : Configurée comme police `sans` par défaut dans `tailwind.config.ts`.

### Poids supportés :
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)

## Composants de Style Récurrents

### Soft Noise Background
Applique une texture de bruit subtile à certains arrière-plans.
- Classe CSS : `.soft-noise-bg`

### Bounce Horizontal
Une animation personnalisée pour les indicateurs (ex : flèches).
- Classe Tailwind : `animate-bounce-horizontal`

## Logos

Les logos officiels se trouvent dans `public/logo/`.
- `logo.png` : Version principale colorée.
- `logo_blanc.svg` : Version pour fonds foncés.
- `icon.png` : Icône de la marque.
