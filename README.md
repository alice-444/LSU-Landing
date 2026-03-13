# LearnSup - Landing Page

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-Mailing-000?style=for-the-badge&logo=resend&logoColor=white)
![Clarity](https://img.shields.io/badge/Clarity-Analytics-0078D4?style=for-the-badge&logo=microsoft-clarity&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📚 Documentation Complète
Pour plus de détails sur l'architecture, le design, le mailing ou le déploiement, consultez le dossier [**/docs**](./docs/README.md).

---

## English version

- [Technologies](#technologies-en)
- [Getting Started](#getting-started-en)
- [Setup Docker](#setup-docker-en)

### Technologies (EN)

- **[Next.js 16](https://nextjs.org/)**: React framework for SSR and SSG.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[Resend](https://resend.com/)**: Email API for contact forms and newsletters.
- **[Microsoft Clarity](https://clarity.microsoft.com/)**: Behavior analytics and session recordings.
- **[Docker](https://www.docker.com/)**: Containerization for dev and prod.

### Getting Started (EN)

1. Clone and install:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

---

## Version Française

- [Technologies](#technologies-fr)
- [Getting Started](#getting-started-fr)
- [Configuration Docker](#configuration-docker-fr)

### Technologies (FR)

- **[Next.js 16](https://nextjs.org/)**: Framework React pour le rendu côté serveur et la génération de sites statiques.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS utilitaire pour concevoir des designs modernes et flexibles.
- **[Resend](https://resend.com/)**: Service d'envoi d'emails pour le formulaire de contact et la newsletter.
- **[Microsoft Clarity](https://clarity.microsoft.com/)**: Outil d'analyse comportementale et enregistrement de sessions.
- **[Docker](https://www.docker.com/)**: Simplifie le déploiement et l'exécution via conteneurs.

### Getting Started (FR)

1. Clonez et installez :
   ```bash
   npm install
   ```
2. Configurez l'environnement :
   ```bash
   cp .env.example .env.local
   # Remplissez les clés RESEND_API_KEY et NEXT_PUBLIC_CLARITY_ID
   ```
3. Lancez le serveur :
   ```bash
   npm run dev
   ```

### Configuration Docker (FR)

Lancement en production :
```bash
docker compose -f docker/docker-compose.prod.yml up -d --build
```
