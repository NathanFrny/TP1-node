const axios = require('axios');
const { validateItem } = require('../repositories/jsonSchema');
const { insertOne, findOne } = require('../services/db/crud');

const omdbApiKey = 'b1e5a419';

const getMovieData = async (title) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${omdbApiKey}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données du film:', error);
        throw error;
    }
};

const addItem = async (req, res, next) => {
    const itemData = req.body;
    const validation = validateItem(itemData);

    if (validation.errors.length > 0) {
        return res.status(400).json({ errors: validation.errors });
    }

    try {
        const movieData = await getMovieData(itemData.titre);
        const itemToInsert = { ...itemData, ...movieData };
        const result = await insertOne('items', itemToInsert);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'item:', error);
        res.status(500).send('Erreur lors de l\'ajout de l\'item');
    }
};

const getItem = async (req, res, next) => {
    const itemId = req.params.id;

    try {
        const item = await findOne('items', { id: itemId });

        if (!item) {
            return res.status(404).send('Item not found');
        }

        res.status(200).json(item);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'item:', error);
        res.status(500).send('Erreur lors de la récupération de l\'item');
    }
};

module.exports = { addItem, getItem };