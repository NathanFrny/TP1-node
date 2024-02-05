const express = require('express');
const router = express.Router();
const { addUser, getUser, getAllUsers, updateUserPersonalInfo } = require('../controllers/users.js');

router.post('/add', addUser);
router.get('/get/:id', getUser);
router.get('/get', getAllUsers);
router.post('/updatePersonalInfo/:id', updateUserPersonalInfo);

module.exports = router;