const { validateUser } = require('../repositories/jsonSchema');
const { insertOne, findOne, find, updateOne } = require('../services/db/crud');

const addUser = async (req, res, next) => {
    const userData = req.body;
    const validation = validateUser(userData);

    if (validation.errors.length > 0) {
        return res.status(400).json({ errors: validation.errors });
    }

    try {
        const result = await insertOne('users', userData);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'utilisateur:', error);
        res.status(500).send('Erreur lors de l\'ajout de l\'utilisateur');
    }
};

const getUser = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await findOne('users', { id: userId });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', error);
        res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await find('users');

        if (!users) {
            return res.status(404).send('No user found');
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
};

const updateUserPersonalInfo = async (req, res, next) => {
    const userId = req.params.id;
    const { infosPersonnelles } = req.body;

    try {
        const result = await updateOne('users', { id: userId }, { $set: { 'infosPersonnelles': infosPersonnelles } });

        if (!result) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(result);
    } catch (error) {
        console.error('Erreur lors de la mise à jour des informations personnelles de l\'utilisateur:', error);
        res.status(500).send('Erreur lors de la mise à jour des informations personnelles de l\'utilisateur');
    }
};


module.exports = { addUser, getUser, getAllUsers, updateUserPersonalInfo };