const apiUrl = 'http://localhost:3001';
let token = localStorage.getItem('token');

const loginDiv = document.getElementById('login');
const appDiv = document.getElementById('app');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const countsP = document.getElementById('counts');
const ideaTitle = document.getElementById('ideaTitle');
const addIdeaBtn = document.getElementById('addIdeaBtn');
const ideasUl = document.getElementById('ideas');
const projectsUl = document.getElementById('projects');

function setAuthHeader() {
  return token ? { 'Authorization': 'Bearer ' + token } : {};
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const res = await fetch(apiUrl + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (res.ok) {
    const data = await res.json();
    token = data.token;
    localStorage.setItem('token', token);
    loginDiv.style.display = 'none';
    appDiv.style.display = 'block';
    loadData();
  } else {
    loginError.textContent = 'Échec de la connexion';
  }
}

async function loadData() {
  await Promise.all([loadIdeas(), loadProjects()]);
  countsP.textContent = `Idées: ${ideasUl.children.length} / Projets: ${projectsUl.children.length}`;
}

async function loadIdeas() {
  const res = await fetch(apiUrl + '/ideas', { headers: setAuthHeader() });
  const ideas = await res.json();
  ideasUl.innerHTML = '';
  ideas.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i.title + ' ';
    const btn = document.createElement('button');
    btn.textContent = 'Convertir';
    btn.onclick = () => convertIdea(i.id);
    li.appendChild(btn);
    ideasUl.appendChild(li);
  });
}

async function loadProjects() {
  const res = await fetch(apiUrl + '/projects', { headers: setAuthHeader() });
  const projects = await res.json();
  projectsUl.innerHTML = '';
  projects.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p.title;
    projectsUl.appendChild(li);
  });
}

async function addIdea() {
  const title = ideaTitle.value.trim();
  if (!title) return;
  await fetch(apiUrl + '/ideas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...setAuthHeader() },
    body: JSON.stringify({ title })
  });
  ideaTitle.value = '';
  loadData();
}

async function convertIdea(id) {
  await fetch(apiUrl + `/ideas/${id}/convert`, {
    method: 'POST',
    headers: setAuthHeader()
  });
  loadData();
}

loginBtn.onclick = login;
addIdeaBtn.onclick = addIdea;

if (token) {
  loginDiv.style.display = 'none';
  appDiv.style.display = 'block';
  loadData();
}
