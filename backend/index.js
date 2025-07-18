const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET = process.env.JWT_SECRET || 'secret';

const USERS = [
  { username: 'admin', password: 'admin' }
];

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

// In-memory storage acting as a very small 'database'
// Idea: { id: number, title: string, description: string }
// Project: { id: number, title: string, description: string, tasks: array }
const ideas = [];
const projects = [];
let ideaId = 1;
let projectId = 1;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ username: user.username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API Dashboard" });
});

// --- Ideas Routes ---
app.get('/ideas', authenticate, (req, res) => {
  res.json(ideas);
});

app.post('/ideas', authenticate, (req, res) => {
  const { title, description = '' } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const idea = { id: ideaId++, title, description };
  ideas.push(idea);
  res.status(201).json(idea);
});

app.post('/ideas/:id/convert', authenticate, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const ideaIndex = ideas.findIndex(i => i.id === id);
  if (ideaIndex === -1) {
    return res.status(404).json({ error: 'Idea not found' });
  }
  const idea = ideas.splice(ideaIndex, 1)[0];
  const project = { id: projectId++, title: idea.title, description: idea.description, tasks: [] };
  projects.push(project);
  res.status(201).json(project);
});

// --- Projects Routes (basic example) ---
app.get('/projects', authenticate, (req, res) => {
  res.json(projects);
});

app.post('/projects', authenticate, (req, res) => {
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
