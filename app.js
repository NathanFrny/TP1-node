const express = require('express')
const app = express()
const port = 3000

let requestsCount = {};

// Middleware pour enregistrer les requêtes
app.use((req, res, next) => {
    const currentDateTime = new Date().toISOString();
    console.log(`[${currentDateTime}]: ${req.path}`);

    if (!requestsCount[req.path]) {
        requestsCount[req.path] = 0;
    }
    requestsCount[req.path]++;

    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/welcome', (req, res) => {
  res.send('Bienvenue sur le TP 1 du cours d\'architecture logicielle');
});

app.get('/secret', (req, res) => {
  res.status(401).send('Vous ne possédez pas les droits pour accéder à ma page secrète');
});

app.get('/error', (req, res) => {
  res.status(500).json({ message: 'Erreur interne du serveur' });
});

app.get('/img', (req, res) => {
  res.sendFile('./ane.jpg', { root: __dirname})
});

app.get('/redirectMe', (req, res) => {
  res.redirect('https://extra.univ-littoral.fr');
});

app.get('/users/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Bienvenue sur la page de ${name}`);
});

app.get('/somme', (req, res) => {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  if (!isNaN(a) && !isNaN(b)) {
    const somme = a + b;
    res.send(`Le résultat de la somme est: ${somme}`);
  } else {
    res.status(400).send('Veuillez fournir des nombres valides pour a et b');
  }
});

app.get('/metrics', (req, res) => {
  res.json({
      status: "healthy",
      requestsCount: requestsCount,
      uptime: process.uptime()
  });
});

// Gestion des routes non supportées
app.use((req, res) => {
  res.status(404).send('Cette page n\'existe pas!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})