# Phase 3 : Développement MVP

## Objectif
Mettre en place un premier MVP fonctionnel permettant de gérer les idées et projets.

## Tâches issues de TODO.md
- Mettre en place le backend (API, base de données)
- Développer le frontend avec les écrans essentiels
- Intégrer la gestion des idées et leur conversion en projet
- Créer le tableau de bord avec indicateurs de base
- Implémenter une authentification simple

## Backend
Une API REST basique fournie par **Express** permet de créer, lister et convertir les idées en projets.

### Endpoints actuels

- `POST /login` pour obtenir un jeton JWT
- `GET /ideas`, `POST /ideas` et `POST /ideas/:id/convert` pour la gestion des idées
- `GET /projects` et `POST /projects` pour les projets

## Frontend
Une interface légère en JavaScript vanille permet de se connecter, d'ajouter des idées et de les convertir en projets. Les données sont récupérées via l'API sécurisée.

## Tableau de bord
La page principale affiche désormais le nombre d'idées et de projets enregistrés.

## Authentification
Les utilisateurs se connectent via `POST /login` pour obtenir un jeton JWT. Toutes les autres routes requièrent ce jeton dans l'en-tête `Authorization`.
