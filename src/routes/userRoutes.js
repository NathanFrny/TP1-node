const express = require('express');
const router = express.Router();
const { addUser, getUser, getAllUsers } = require('../controllers/users.js');

router.post('/add', addUser);
router.get('/get/:id', getUser);
router.get('/get', getAllUsers);

module.exports = router;