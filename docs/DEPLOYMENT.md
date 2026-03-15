# Déploiement et Docker - LearnSup Vitrine

Ce document explique comment déployer le projet en utilisant Docker.

## Configuration Docker

Le projet inclut une configuration Docker optimisée pour le développement et la production.

### Emplacement des fichiers

- `docker/Dockerfile.dev` : Configuration pour le développement.
- `docker/Dockerfile.prod` : Configuration optimisée pour la production.
- `docker/docker-compose.dev.yml` : Gestion des conteneurs en développement.
- `docker/docker-compose.prod.yml` : Gestion des conteneurs en production.

## Déploiement avec Docker Compose (Production)

Pour déployer le projet en production avec Docker :

1. Assurez-vous d'avoir Docker et Docker Compose installés.
2. Créez votre fichier `.env.local` avec les variables réelles.
3. Lancez le déploiement :

   ```bash
   docker compose -f docker/docker-compose.prod.yml up -d --build
   ```

### Avantages de Docker

- Environnement identique entre développement et production.
- Gestion facile des certificats SSL (via Traefik si configuré).
- Performance optimisée (build `standalone` de Next.js).

## Intégration Continue (CI/CD)

Le projet inclut une configuration GitHub Actions dans `.github/workflows/deploy-prod.yaml` pour automatiser les déploiements vers votre serveur de production.

### Workflow

1. Build de l'image Docker.
2. Push de l'image.
3. Déploiement automatique sur le serveur.
