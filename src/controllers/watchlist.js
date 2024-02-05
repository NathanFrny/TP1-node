const { validateWatchlist } = require('../repositories/jsonSchema');
const { insertOne, findOne, find, updateOne } = require('../services/db/crud');

const addWatchlist = async (req, res, next) => {
    const watchlistData = req.body;
    const validation = validateWatchlist(watchlistData);

    if (validation.errors.length > 0) {
        return res.status(400).json({ errors: validation.errors });
    }

    try {
        const result = await insertOne('watchlists', watchlistData);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erreur lors de l\'insertion de la watchlist:', error);
        res.status(500).send('Erreur lors de l\'ajout de la watchlist');
    }
};

// Permet de récupérer une watchlist en fonction de son id
const getWatchlist = async (req, res, next) => {
    const watchlistId = req.params.id;

    try {
        const watchlist = await findOne('watchlists', { watchlistId });

        if (!watchlist) {
            return res.status(404).send('Watchlist not found');
        }

        res.status(200).json(watchlist);
    } catch (error) {
        console.error('Erreur lors de la récupération de la watchlist:', error);
        res.status(500).send('Erreur lors de la récupération de la watchlist');
    }
};

// Permet de récupérer une watchlist en fonction de l'id de l'utilisateur
const getUserWatchlist = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        console.log("Requête:", { userId: userId });
        const watchlist = await find('watchlists', { userId: userId });

        if (!watchlist) {
            return res.status(404).send('Watchlist not found');
        }

        res.status(200).json(watchlist);
    } catch (error) {
        console.error('Erreur lors de la récupération de la watchlist:', error);
        res.status(500).send('Erreur lors de la récupération de la watchlist');
    }
};

const addItemInWatchlist = async (req, res, next) => {
    const watchlistId = req.params.watchlistId;
    const itemData = req.body;

    try {
        const watchlist = await findOne('watchlists', { id: watchlistId });

        if (!watchlist) {
            return res.status(404).send('Watchlist not found');
        }

        const result = await updateOne('watchlists', { id: watchlistId }, { $push: { items: itemData } });
        res.status(200).json(result);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'item dans la watchlist:', error);
        res.status(500).send('Erreur lors de l\'ajout de l\'item dans la watchlist');
    }
}

module.exports = { addWatchlist, getWatchlist, getUserWatchlist, addItemInWatchlist };