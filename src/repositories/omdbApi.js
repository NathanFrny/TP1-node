const axios = require('axios');

const omdbApiKey = 'b1e5a419';
const omdbApiUrl = 'http://www.omdbapi.com/';

const fetchMovieData = async (title) => {
  try {
    const response = await axios.get(omdbApiUrl, {
      params: {
        apikey: omdbApiKey,
        t: title
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données du film :', error);
    throw error;
  }
};

module.exports = {
  fetchMovieData
};
