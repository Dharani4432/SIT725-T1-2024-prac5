const { addCard, getAllCards } = require("../models/cat");

// Function to create new card
const { getClient } = require('../dbconnection');

const createCat = async (req, res) => {
    try {
        const { title, path, subTitle, description } = req.body;
        const client = getClient();
        const collection = client.db().collection('cat');
        const result = await collection.insertOne({ title, path, subTitle, description });
        res.status(201).json({ message: 'Cat created successfully', cat: result.ops[0] });
    } catch (error) {
        console.error('Error creating cat:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getAllCats = async (req, res) => {
    try {
        const client = getClient();
        const collection = client.db().collection('cat');
        const cats = await collection.find({}).toArray();
        res.json(cats);
    } catch (error) {
        console.error('Error fetching cats:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { createCat, getAllCats };