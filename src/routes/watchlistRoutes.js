const express = require('express');
const router = express.Router();
const { addWatchlist, getWatchlist, getUserWatchlist, addItemInWatchlist } = require('../controllers/watchlist.js');

router.post('/add', addWatchlist);
router.get('/get/:watchlistId', getWatchlist);
router.get('/get/user/:userId', getUserWatchlist);
router.post('/addItem/:watchlistId', addItemInWatchlist);

module.exports = router;