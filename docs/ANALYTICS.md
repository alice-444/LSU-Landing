# Analytics avec Microsoft Clarity - LearnSup Vitrine

Ce document explique comment Microsoft Clarity est intégré au projet.

## Fonctionnement de Clarity

Le script Clarity est chargé via le composant optimisé `<Script />` de Next.js dans `src/pages/_app.tsx`.

### Pourquoi cette méthode ?

- **Performance** : Le script ne bloque pas le rendu de la page (`strategy="afterInteractive"`).
- **Flexibilité** : Le script s'active uniquement si la variable d'environnement `NEXT_PUBLIC_CLARITY_ID` est présente.
- **Maintenance** : Aucun package supplémentaire n'est nécessaire.

## Configuration

Ajoutez votre ID Clarity dans le fichier `.env.local` :

```env
NEXT_PUBLIC_CLARITY_ID=votre_id_clarity
```

## Vérification de l'Installation

Une fois déployé avec l'ID configuré :

1. Visitez votre site.
2. Ouvrez la console de votre navigateur.
3. Clarity commencera à collecter les données de session (Recordings, Heatmaps).
4. Les données apparaissent sur le dashboard Clarity (clarity.microsoft.com) après environ 30 à 60 minutes.

## Désactivation

Pour désactiver le tracking sans modifier le code, il suffit de supprimer ou de commenter la variable `NEXT_PUBLIC_CLARITY_ID` dans votre environnement de production.
