const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new prediction
router.post('/', async (req, res) => {
    try {
        const { symbol_id, author, full_text } = req.body;
        const newPrediction = await db.predictions.create({ symbol_id, author, full_text });
        res.status(201).json(newPrediction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all predictions
router.get('/', async (req, res) => {
    try {
        const predictions = await db.predictions.findAll({
            include: [{
                model: db.symbols,
                as: 'symbol',
                attributes: ['code']
            }]
        });

        const formattedPredictions = predictions.map(prediction => {
            const symbolCode = prediction.symbol ? prediction.symbol.code : null;

            return {
                ...prediction.toJSON(),
                symbol_code: symbolCode,
                symbol_id: undefined
            };
        });

        res.json(formattedPredictions);
        // const predictions = await db.predictions.findAll();
        // res.json(predictions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single prediction by id
router.get('/:id', async (req, res) => {
    try {
        const prediction = await db.predictions.findByPk(req.params.id);
        if (!prediction) {
            return res.status(404).json({ error: 'Prediction not found' });
        }
        res.json(prediction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a prediction
router.put('/:id', async (req, res) => {
    try {
        const { symbol_id, author, full_text } = req.body;
        const prediction = await db.predictions.findByPk(req.params.id);
        if (!prediction) {
            return res.status(404).json({ error: 'Prediction not found' });
        }
        prediction.symbol_id = symbol_id;
        prediction.author = author;
        prediction.full_text = full_text;
        await prediction.save();
        res.json(prediction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a prediction
router.delete('/:id', async (req, res) => {
    try {
        const prediction = await db.predictions.findByPk(req.params.id);
        if (!prediction) {
            return res.status(404).json({ error: 'Prediction not found' });
        }
        await prediction.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
