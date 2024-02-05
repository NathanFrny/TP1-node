const express = require('express');
const path = require('path');
const { connectToDb } = require('./services/db/connection');
const { fetchMovieData } = require('./repositories/omdbApi');
const userRoutes = require('./routes/userRoutes.js');
const itemRoutes = require('./routes/itemRoutes.js');
const watchlistRoutes = require('./routes/watchlistRoutes.js');


const app = express();
const port = 3000;

app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/movie', async (req, res) => {
  try {
    const title = req.query.title;
    const movieData = await fetchMovieData(title);
    res.json(movieData);
  } catch (error) {
    res.status(500).send('Erreur lors de la récupération des données du film');
  }
});

app.get('/presentation', (req, res) => {
  res.render('index', { title: 'Test API' });
});


app.use('/user', userRoutes);

app.use('/item', itemRoutes);

app.use('/watchlist', watchlistRoutes);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    await connectToDb();
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
});

