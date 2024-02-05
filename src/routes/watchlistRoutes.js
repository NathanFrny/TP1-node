const express = require('express');
const router = express.Router();
const { addWatchlist, getWatchlist, getUserWatchlist, addItemInWatchlist, updateItemStatus, deleteWatchlist, setWatchlistToFavorite } = require('../controllers/watchlist.js');

router.post('/add', addWatchlist);
router.get('/get/:watchlistId', getWatchlist);
router.get('/get/user/:userId', getUserWatchlist);
router.post('/addItem/:watchlistId', addItemInWatchlist);
router.post('/updateItemStatus/:watchlistId/:itemId', updateItemStatus);
router.delete('/delete/:watchlistId/', deleteWatchlist);
router.post('/setFavorite/:watchlistId', setWatchlistToFavorite);

module.exports = router;