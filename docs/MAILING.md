# Intégration Resend - LearnSup Vitrine

Ce document explique l'utilisation de Resend pour l'envoi d'emails sur le site.

## Configuration de Resend

Le projet utilise le package officiel `resend`.
- **Client Initialisé** : `src/lib/resend.ts`
- **Variables d'Environnement** :
  - `RESEND_API_KEY` : Clé API à récupérer sur le dashboard Resend.
  - `RESEND_FROM_EMAIL` : Adresse qui apparaît comme expéditeur. Doit être vérifiée sur le domaine dans Resend.
  - `SEND_EMAIL` : Adresse mail de destination pour les formulaires de contact.

## Templates d'Emails (React Emails)

Les templates sont des composants React situés dans `src/emails/`. Ils sont conçus pour être simples et respecter la charte graphique orange.

### 1. `ContactFormEmail.tsx`
Utilisé pour notifier l'équipe LearnSup d'un nouveau message.
- Affiche le nom, l'email de l'expéditeur, le sujet et le message.
- Inclut le logo LearnSup pour une identification rapide.

### 2. `NewsletterWelcomeEmail.tsx`
Email de bienvenue envoyé aux nouveaux abonnés de la newsletter.
- Design épuré avec un bouton d'appel à l'action vers le site.

## Envoi d'Emails via l'API

L'envoi se fait dans les routes API Next.js :
```typescript
import { resend } from "@/lib/resend";
import { MyTemplate } from "@/emails/MyTemplate";

await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL,
  to: recipient,
  subject: "Objet du mail",
  react: MyTemplate({ ...props }),
});
```

## Gestion des Audiences
Le code supporte optionnellement `RESEND_AUDIENCE_ID`. Si cette variable est définie, les nouveaux abonnés à la newsletter seront ajoutés directement à l'audience spécifiée dans Resend.
