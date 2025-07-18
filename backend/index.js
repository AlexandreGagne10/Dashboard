const express = require('express');

const app = express();
app.use(express.json());

// In-memory storage acting as a very small 'database'
// Idea: { id: number, title: string, description: string }
// Project: { id: number, title: string, description: string, tasks: array }
const ideas = [];
const projects = [];
let ideaId = 1;
let projectId = 1;

app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API Dashboard" });
});

// --- Ideas Routes ---
app.get('/ideas', (req, res) => {
  res.json(ideas);
});

app.post('/ideas', (req, res) => {
  const { title, description = '' } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const idea = { id: ideaId++, title, description };
  ideas.push(idea);
  res.status(201).json(idea);
});

// --- Projects Routes (basic example) ---
app.get('/projects', (req, res) => {
  res.json(projects);
});

app.post('/projects', (req, res) => {
  const { title, description = '', tasks = [] } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const project = { id: projectId++, title, description, tasks };
  projects.push(project);
  res.status(201).json(project);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
