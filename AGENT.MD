
---

### 🧠 `AGENT.md`

```markdown
# 🤖 AGENT.md – Spécifications pour OpenAI Codex

Ce document décrit les consignes de fonctionnement d’un agent OpenAI Codex pour assister dans le développement de l’application **IdeaForge**.

---

## 🧭 Objectif de l’agent

Aider les développeurs à :

- Générer automatiquement du code (backend, frontend)
- Produire des composants d’interface React/Vue
- Écrire ou corriger des tests unitaires
- Générer des migrations de base de données
- Automatiser la documentation technique
- Suggérer des améliorations ou refactors

---

## ⚙️ Configuration Recommandée

| Paramètre           | Valeur              |
|---------------------|---------------------|
| Modèle              | `gpt-4o` ou `gpt-4` |
| Température         | `0.3`               |
| Max Tokens          | `1500`              |
| Top-p               | `1.0`               |
| Frequency Penalty   | `0.0`               |
| Presence Penalty    | `0.0`               |

---

## 💬 Exemple de Prompt

```plaintext
Tu es un assistant de codage spécialisé pour une application de gestion d'idées destinée aux développeurs. Ton but est de générer du code maintenable et structuré en React et Node.js.

Tâche :
Créer un composant React nommé IdeaCard qui affiche un résumé d'une idée (titre, description courte, priorité, tags, bouton "Convertir en projet").
```

```

