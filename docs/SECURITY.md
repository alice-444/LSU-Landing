# Sécurité - LearnSup Vitrine

Ce document décrit les mesures prises pour assurer la sécurité et la confidentialité du site.

## Variables d'Environnement

- **Strictement confidentiel** : Aucune clé API (Resend) ne doit être incluse dans le code ou versionnée.
- **Préfixes `NEXT_PUBLIC_`** : Utilisés uniquement pour les variables devant être exposées côté client (ex: Clarity ID). Toutes les autres variables restent invisibles côté serveur.

## Protection des Formulaires

- **Validation d'Input** : Chaque champ (email, nom, message) est vérifié par regex ou contraintes avant d'être traité pour éviter les injections de texte basiques.
- **Limitation de Méthode** : Les routes d'API n'acceptent que les requêtes `POST` pour prévenir les scans via navigateur.
- **Échappement automatique** : React et Next.js s'occupent d'échapper les chaînes de caractères affichées pour prévenir les attaques XSS.

## Confidentialité (Analytics & Mailing)

- **Microsoft Clarity** : Le tracking s'arrête avant les champs sensibles si configuré. Les données sont agrégées pour ne pas identifier d'utilisateurs individuels.
- **Resend** : Les emails envoyés incluent systématiquement une adresse `replyTo` pour que les utilisateurs puissent répondre en toute sécurité.
- **Confidentialité** : Les emails inscrits à la newsletter ne sont jamais stockés dans la base de données du site (qui n'en possède pas), ils sont envoyés directement à Resend pour minimiser la surface d'attaque en cas de fuite de données locale.

## Hébergement (Docker)

- **Utilisation d'un utilisateur non-root** : L'image Docker de production crée et utilise un utilisateur dédié (`nextjs`) pour limiter les droits en cas de compromission du conteneur.
- **Multi-stage builds** : Le Dockerfile final ne contient que le nécessaire (le bundle compilé), supprimant ainsi les outils de développement et le code source sensible de l'image de production.
