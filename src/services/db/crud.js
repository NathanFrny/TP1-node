const { getCollection } = require('./connection');

async function findOne(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.findOne(query, options);
        return result;
    } catch (e) {
        console.error(`Erreur lors de la recherche findOne: ${JSON.stringify(query)}`);
        throw e;
    }
}

async function find(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.find(query, options).toArray();
        return result;
    } catch (e) {
        console.error(`Erreur lors de la recherche find: ${JSON.stringify(query)}`);
        throw e;
    }
}

async function insertOne(collectionName, doc) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(doc);
        return result;
    } catch (e) {
        console.error(`Erreur lors de l'insertion insertOne: ${JSON.stringify(doc)}`);
        throw e;
    }
}

async function insertMany(collectionName, docs) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(docs);
        return result;
    } catch (e) {
        console.error(`Erreur lors de l'insertion insertMany: ${JSON.stringify(docs)}`);
        throw e;
    }
}

async function updateOne(collectionName, filter, updateDoc, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter, updateDoc, options);
        return result;
    } catch (e) {
        console.error(`Erreur lors de la mise à jour updateOne: ${JSON.stringify(filter)}`);
        throw e;
    }
}

async function updateMany(collectionName, filter, updateDoc, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter, updateDoc, options);
        return result;
    } catch (e) {
        console.error(`Erreur lors de la mise à jour updateMany: ${JSON.stringify(filter)}`);
        throw e;
    }
}

async function replace(collectionName, filter, doc, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(filter, doc, options);
        return result;
    } catch (e) {
        console.error(`Erreur lors du remplacement replace: ${JSON.stringify(filter)}`);
        throw e;
    }
}

async function deleteOne(collectionName, query) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(query);
        return result;
    } catch (e) {
        console.error(`Erreur lors de la suppression deleteOne: ${JSON.stringify(query)}`);
        throw e;
    }
}

async function deleteMany(collectionName, query) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(query);
        return result;
    } catch (e) {
        console.error(`Erreur lors de la suppression deleteMany: ${JSON.stringify(query)}`);
        throw e;
    }
}

module.exports = {
    findOne,
    find,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    replace,
    deleteOne,
    deleteMany,
};
