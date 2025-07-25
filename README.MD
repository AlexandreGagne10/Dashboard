# 💡 Dashboard – Gestion d’Idées et de Projets pour Développeurs

**Dashboard** est une application web intuitive conçue spécifiquement pour les développeurs afin de collecter, organiser, prioriser et transformer des idées en projets structurés.

---

## 🎯 Objectif

Fournir un environnement simple, visuel et collaboratif pour passer de l’idée brute au projet complet, tout en gardant un suivi précis de l’avancement et de la qualité du code.

---

## 👥 Public Cible

- Développeurs indépendants
- Équipes de développement logiciel
- Étudiants en informatique ou programmation

---

## 🔧 Fonctionnalités Clés

- **Tableau de bord visuel** avec KPIs et graphiques
- **Saisie rapide d’idées** (notes, extraits de code, liens)
- **Système de priorisation** avec votes et tags
- **Conversion d’idée en projet** avec setup automatique
- **Gestion de projets** (tâches, jalons, Kanban, Gantt, etc.)
- **Intégrations GitHub / GitLab / Bitbucket**
- **Collaboration en temps réel** avec rôles et commentaires
- **Interface codage-friendly** avec thème sombre/clair

---

## 🛠️ Technologies

| Frontend        | Backend       | Base de données | Hébergement      |
|----------------|---------------|-----------------|------------------|
| React.js/Vue.js| Node.js/Django| PostgreSQL/MongoDB | AWS, Azure, Heroku |

---

## 🚀 Roadmap de Développement

 - ~~**Phase 1 :** Analyse & conception~~
 - ~~**Phase 2 :** Prototypage UI/UX~~
- **Phase 3 :** MVP fonctionnel
- **Phase 4 :** Tests utilisateurs & feedback
- **Phase 5 :** Version complète
- **Phase 6 :** Déploiement & suivi
- **Phase 7 :** Évolutions futures (IA, mobile, intégrations tierces)

---

## 📦 Installation

```bash
git clone https://github.com/AlexandreGagne10/Dashboard.git
cd Dashboard/backend
npm install
npm start
```

L'application sera ensuite disponible sur http://localhost:3000.

## 📡 API REST

Un petit serveur Express expose des routes pour manipuler les idées et projets.

### Endpoints Principaux

- `GET /ideas` : retourne la liste des idées enregistrées.
- `POST /ideas` : ajoute une idée. Corps JSON attend `title` et
  optionnellement `description`.
- `GET /projects` : liste les projets.
- `POST /projects` : crée un projet.

Lancer l'API avec :

```bash
cd backend
npm install
npm start
```
