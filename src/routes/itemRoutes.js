const express = require('express');
const router = express.Router();
const { addItem, getItem } = require('../controllers/item.js');

router.post('/add', addItem);
router.get("/get/:id", getItem);

module.exports = router;